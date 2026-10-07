/**
 * Rotina de fichas técnicas (opcional; ligada pela administradora em Configurações).
 *
 * Uma vez por dia (gatilho do Apps Script, ~4h da manhã) procura vinhos com ficha incompleta e:
 *  1. se tiver código de barras, consulta de novo a base pública (grátis) e preenche SÓ os campos vazios,
 *     com a página do produto como fonte (origem "pesquisado");
 *  2. se ainda faltar e a IA estiver ativa, pesquisa a ficha com o Claude (Enrichment.wine): as sugestões
 *     vão para "Revisão da IA" — nada gerado por IA entra direto (docs/ARQUITETURA.md D9).
 * Limites: N vinhos por execução, teto de gasto de IA no mês e tempo de execução (Apps Script: 6 min).
 * Cada vinho verificado só volta à fila depois de 30 dias.
 */
var Routine = (function () {
  var HANDLER = 'rotinaFichas';
  var KEY_FIELDS = ['abv', 'classification', 'production_method', 'aging', 'region_id', 'type', 'color'];
  var RECHECK_DAYS = 30;
  var TIME_BUDGET_MS = 4 * 60 * 1000;

  function config() {
    return {
      enabled: Settings.get('routine_enabled', '0') === '1',
      max_per_run: Math.max(1, Math.min(20, Settings.getNumber('routine_max_per_run', 5))),
      max_cost_month: Math.max(0, Settings.getNumber('routine_max_cost_month', 2)),
      use_ai: Settings.get('routine_use_ai', '1') === '1',
      hourly: Settings.get('routine_hourly', '0') === '1'
    };
  }

  var LABELS = { abv: 'teor alcoólico', classification: 'classificação', production_method: 'método de produção', aging: 'estágio',
    region_id: 'região', type: 'tipo', color: 'cor' };

  function missing_(w, grapeCount, hasProfile, hasAromas) {
    var m = KEY_FIELDS.filter(function (f) { return Util.isBlank(w[f]); }).map(function (f) { return LABELS[f]; });
    if (!grapeCount) m.push('uvas');
    if (!hasProfile) m.push('perfil (acidez, corpo, nariz, boca)');
    if (!hasAromas) m.push('aromas');
    return m;
  }

  /** Perfil confiável e aromas já cadastrados, por vinho. */
  function sensory_() {
    var prof = {}, aro = {};
    Repo.where('profiles', { entity_type: 'wine' }).forEach(function (p) { if (Catalog.isTrusted(p.source)) prof[p.entity_id] = true; });
    Repo.where('entity_aromas', { entity_type: 'wine' }).forEach(function (a) { aro[a.entity_id] = true; });
    return { prof: prof, aro: aro };
  }

  function monthCost_() {
    var ym = Util.nowIso().slice(0, 7);
    return Repo.all('ai_calls').filter(function (c) { return String(c.run_at).slice(0, 7) === ym; })
      .reduce(function (a, c) { return a + (Number(c.cost_usd) || 0); }, 0);
  }

  /** Vinhos que precisam de atenção, os mais incompletos primeiro. */
  function candidates() {
    var grapes = Util.groupBy(Repo.all('wine_grapes'), 'wine_id');
    var pending = {};
    Repo.where('enrichment_queue', { status: 'pendente' }).forEach(function (q) { pending[q.entity_id] = true; });
    var limit = Date.now() - RECHECK_DAYS * 864e5;
    var sens = sensory_();
    return Repo.all('wines').map(function (w) {
      return { w: w, missing: missing_(w, (grapes[w.id] || []).length, sens.prof[w.id], sens.aro[w.id]) };
    }).filter(function (x) {
      if (x.missing.length < 2 || pending[x.w.id]) return false;
      return !x.w.sheet_checked_at || new Date(x.w.sheet_checked_at).getTime() < limit;
    }).sort(function (a, b) { return b.missing.length - a.missing.length; });
  }

  /** Preenche campos vazios com dados do código de barras (nunca sobrescreve). */
  function fromBarcode_(w) {
    var r = Barcode.lookup(w.barcode);
    if (!r.found) return 0;
    var input = { id: w.id, name: w.name, barcode: w.barcode, origins: {}, refs: {} };
    var current = Wines.get(w.id);
    ['producer', 'country', 'region', 'subregion', 'appellation', 'vintage', 'classification', 'color', 'type', 'abv',
      'residual_sugar', 'acidity_gl', 'production_method', 'aging', 'oak', 'aging_time', 'serving_temp', 'pairing',
      'curiosities', 'technical_notes', 'price', 'price_currency'].forEach(function (k) { input[k] = current[k]; });
    var n = 0;
    Object.keys(r.fields).forEach(function (k) {
      if (k === 'name' || !(k in input) || !Util.isBlank(input[k]) || r.fields[k].value === '') return;
      input[k] = r.fields[k].value; input.origins[k] = 'pesquisado'; input.refs[k] = r.url; n++;
    });
    input.grapes = current.grapes.length ? current.grapes.map(function (g) { return { id: g.id, percent: g.percent }; })
      : r.grapes.map(function (g) { n++; return { name: g.name, percent: g.percent, source: 'pesquisado' }; });
    input.my_notes = current.my_notes;
    if (n) Wines.save(input);
    return n;
  }

  /** Uma execução. Devolve o resumo (também gravado em import_log). */
  function run(force) {
    var cfg = config();
    if (!cfg.enabled && !force) return { skipped: 'rotina desligada' };
    var started = Date.now();
    var summary = { checked: 0, barcode_fields: 0, ai_runs: 0, ai_proposals: 0, cost_usd: 0, stopped: '' , wines: [] };
    var list = candidates().slice(0, cfg.max_per_run);
    for (var i = 0; i < list.length; i++) {
      if (Date.now() - started > TIME_BUDGET_MS) { summary.stopped = 'tempo'; break; }
      var w = list[i].w, line = { name: w.name, missing: list[i].missing.join(', '), done: [] };
      try {
        if (w.barcode) {
          var n = fromBarcode_(w);
          summary.barcode_fields += n;
          if (n) line.done.push(n + ' campo(s) pelo código de barras');
        }
        var after = Repo.get('wines', w.id);
        var sens2 = sensory_();
        var stillMissing = missing_(after, Repo.where('wine_grapes', { wine_id: w.id }).length, sens2.prof[w.id], sens2.aro[w.id]);
        var status = stillMissing.length < 2 ? 'ok' : 'incompleto';
        if (stillMissing.length >= 2 && cfg.use_ai && AiProvider.hasKey()) {
          if (monthCost_() >= cfg.max_cost_month) { summary.stopped = 'teto de gasto do mês'; line.done.push('IA pulada (teto do mês)'); }
          else {
            var res = Enrichment.wine(w.id);
            summary.ai_runs++; summary.ai_proposals += res.proposals; summary.cost_usd += res.cost_usd || 0;
            line.done.push('IA: ' + res.proposals + ' sugestão(ões) para revisar');
            status = res.proposals ? 'ia_pendente' : 'incompleto';
          }
        }
        Repo.update('wines', [{ id: w.id, sheet_checked_at: Util.nowIso(), sheet_status: status }]);
      } catch (e) {
        line.done.push('erro: ' + e.message);
      }
      summary.checked++;
      summary.wines.push(line);
      if (summary.stopped === 'teto de gasto do mês') break;
    }
    summary.cost_usd = Math.round(summary.cost_usd * 10000) / 10000;
    Repo.insert('import_log', [{ run_at: Util.nowIso(), level: 'ok', message: 'Rotina de fichas técnicas: ' + summary.checked + ' vinho(s).', details: summary, source: 'sistema' }]);
    Settings.set('routine_last_run', Util.nowIso());
    return summary;
  }

  // ---------- Gatilho diário ----------
  function triggers_() { return ScriptApp.getProjectTriggers().filter(function (t) { return t.getHandlerFunction() === HANDLER; }); }

  function setEnabled(on) {
    triggers_().forEach(function (t) { ScriptApp.deleteTrigger(t); });
    // De hora em hora (para dar conta de muitos vinhos) ou uma vez por dia (~4h).
    if (on && Settings.get('routine_hourly', '0') === '1') ScriptApp.newTrigger(HANDLER).timeBased().everyHours(1).create();
    else if (on) ScriptApp.newTrigger(HANDLER).timeBased().everyDays(1).atHour(4).create();
    Settings.set('routine_enabled', on ? '1' : '0');
  }

  function status() {
    var cfg = config();
    var last = Repo.where('import_log', function (l) { return /^Rotina de fichas/.test(l.message); })
      .sort(function (a, b) { return String(b.run_at).localeCompare(String(a.run_at)); })[0];
    var c = candidates();
    return Object.assign(cfg, {
      scheduled: (function () { try { return triggers_().length > 0; } catch (e) { return false; } })(),
      month_cost_usd: Math.round(monthCost_() * 100) / 100, ai_key: AiProvider.hasKey(),
      waiting: c.length, next: c.slice(0, 5).map(function (x) { return { id: x.w.id, name: x.w.name, missing: x.missing.join(', ') }; }),
      last_run: last ? { at: last.run_at, details: last.details } : null
    });
  }

  function configure(a) {
    Settings.set('routine_max_per_run', Validate.num(a.max_per_run, 1, 20, 'Vinhos por execução') || 5);
    Settings.set('routine_max_cost_month', Validate.num(a.max_cost_month, 0, 100, 'Teto mensal (US$)') === '' ? 2 : Validate.num(a.max_cost_month, 0, 100, 'Teto mensal (US$)'));
    Settings.set('routine_use_ai', a.use_ai ? '1' : '0');
    Settings.set('routine_hourly', a.hourly ? '1' : '0');
    setEnabled(!!a.enabled);
    return status();
  }

  return { run: run, status: status, configure: configure, candidates: candidates };
})();

/** Gatilho diário (instalado por Routine.configure). Roda como a dona. */
function rotinaFichas() {
  Ctx.asSystem(ensureSchema_);
  Ctx.setUser(Auth.ensureAdmin());
  try { Routine.run(false); } finally { Ctx.setUser(null); }
}
