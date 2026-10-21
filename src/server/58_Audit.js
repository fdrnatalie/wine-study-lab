/**
 * Auditoria das fichas dos vinhos: para cada vinho que o usuário pode editar, mostra o que vale como gabarito numa degustação
 * e o que não vale (falta preencher ou ainda não foi verificado), usando a MESMA regra de Tastings.truthFor.
 *
 * Também permite "confirmar" os dados marcados como não verificados (ex.: colunas sensoriais que vieram da planilha, que foram
 * geradas por IA): é uma decisão do usuário, registrada como origem "usuario". Nada é confirmado sem esse pedido.
 *
 * Os dados nunca saem da conta: tudo é calculado na hora, para quem está logado.
 */
var Audit = (function () {
  var WINE_FIELD_LABEL = { country_id: 'país', region_id: 'região', subregion_id: 'sub-região', vintage: 'safra', abv: 'teor alcoólico',
    color: 'cor', producer_id: 'produtor', classification: 'classificação' };
  var SENSORY = [['acidity', 'acidez'], ['tannin', 'tanino'], ['body', 'corpo'], ['sweetness', 'doçura'], ['alcohol', 'álcool']];
  var UNTRUSTED = function (src) { return !Catalog.isTrusted(src); };

  function editable_(w) { return Ctx.isAdmin() || (w.created_by && w.created_by === Ctx.userId()); }

  function check_(key, label, status, detail) { return { k: key, label: label, s: status, detail: detail || '' }; }

  function auditWine_(w, ctx) {
    var fs = w.field_sources || {};
    function fieldCheck(key, label, col, value) {
      if (Util.isBlank(value)) return check_(key, label, 'falta', 'não preenchido');
      if (UNTRUSTED(fs[col])) return check_(key, label, 'nao_verificado', 'origem: ' + (fs[col] === 'ia_nao_verificada' ? 'IA, não verificada' : fs[col]));
      return check_(key, label, 'ok', String(value));
    }
    var checks = [];
    checks.push(fieldCheck('safra', 'Safra', 'vintage', w.vintage));
    checks.push(fieldCheck('abv', 'Teor alcoólico', 'abv', w.abv));
    checks.push(fieldCheck('pais', 'País', 'country_id', w.country_id));
    var regionCol = w.subregion_id ? 'subregion_id' : 'region_id';
    checks.push(fieldCheck('regiao', 'Região', regionCol, w.subregion_id || w.region_id));

    var grapes = ctx.wineGrapes[w.id] || [];
    if (!grapes.length) checks.push(check_('uvas', 'Uvas', 'falta', 'nenhuma uva ligada ao vinho'));
    else if (grapes.every(function (g) { return UNTRUSTED(g.source); })) checks.push(check_('uvas', 'Uvas', 'nao_verificado', 'origem: IA, não verificada'));
    else checks.push(check_('uvas', 'Uvas', 'ok', grapes.length + (grapes.length === 1 ? ' uva' : ' uvas')));

    var prof = ctx.profiles[w.id];
    if (!prof) checks.push(check_('perfil', 'Perfil (acidez, tanino, corpo…)', 'falta', 'sem perfil cadastrado'));
    else {
      var filled = SENSORY.filter(function (x) { return !Util.isBlank(prof[x[0]]); });
      var missing = SENSORY.filter(function (x) { return Util.isBlank(prof[x[0]]); }).map(function (x) { return x[1]; });
      if (UNTRUSTED(prof.source)) checks.push(check_('perfil', 'Perfil (acidez, tanino, corpo…)', 'nao_verificado', 'origem: ' + (prof.source === 'ia_nao_verificada' ? 'IA/planilha, não verificada' : prof.source) + (filled.length ? '' : ' · vazio')));
      else if (!filled.length) checks.push(check_('perfil', 'Perfil (acidez, tanino, corpo…)', 'falta', 'perfil sem níveis preenchidos'));
      else checks.push(check_('perfil', 'Perfil (acidez, tanino, corpo…)', missing.length ? 'parcial' : 'ok', missing.length ? 'faltam: ' + missing.join(', ') : 'completo'));
    }

    var aromas = ctx.aromas[w.id] || [];
    if (!aromas.length) checks.push(check_('aromas', 'Aromas', 'falta', 'nenhum aroma'));
    else if (aromas.every(function (a) { return UNTRUSTED(a.source); })) checks.push(check_('aromas', 'Aromas', 'nao_verificado', 'origem: IA, não verificada'));
    else checks.push(check_('aromas', 'Aromas', 'ok', aromas.length + ' aroma(s)'));

    var bottles = ctx.bottles[w.id] || [];
    return {
      id: w.id, name: w.name, vintage: w.vintage || '', producer: (ctx.producers[w.producer_id] || {}).name || '',
      bottles: bottles.length, checks: checks,
      falta: checks.filter(function (c) { return c.s === 'falta'; }).length,
      nao_verificado: checks.filter(function (c) { return c.s === 'nao_verificado'; }).length,
      parcial: checks.filter(function (c) { return c.s === 'parcial'; }).length,
      source: w.source
    };
  }

  function list() {
    var ctx = {
      wineGrapes: Util.groupBy(Repo.all('wine_grapes'), 'wine_id'),
      profiles: Util.indexBy(Repo.all('profiles').filter(function (p) { return p.entity_type === 'wine'; }), 'entity_id'),
      aromas: Util.groupBy(Repo.all('entity_aromas').filter(function (a) { return a.entity_type === 'wine'; }), 'entity_id'),
      bottles: Util.groupBy(Repo.all('bottles'), 'wine_id'),
      producers: Util.indexBy(Repo.all('producers'), 'id')
    };
    var wines = Repo.all('wines').filter(editable_).map(function (w) { return auditWine_(w, ctx); })
      .sort(function (a, b) { return (b.falta + b.nao_verificado + b.parcial) - (a.falta + a.nao_verificado + a.parcial) || String(a.name).localeCompare(String(b.name), 'pt'); });
    var complete = wines.filter(function (w) { return !w.falta && !w.nao_verificado && !w.parcial; }).length;
    return { wines: wines, total: wines.length, complete: complete };
  }

  /**
   * Confirma como "usuario" o que estava marcado como não verificado em UM vinho.
   * parts: 'campos' | 'uvas' | 'perfil' | 'aromas'. Só vinhos que o usuário pode editar; a política do Repository também confere.
   */
  function confirm(a) {
    var id = Validate.id(a.wine_id, 'wines');
    var w = Repo.get('wines', id);
    if (!w) throw new Error('Vinho não encontrado.');
    if (!editable_(w)) throw new Error('Você não pode alterar este vinho.');
    var parts = (Array.isArray(a.parts) ? a.parts : []).filter(function (p) { return ['campos', 'uvas', 'perfil', 'aromas'].indexOf(p) >= 0; });
    if (!parts.length) throw new Error('Escolha o que confirmar.');
    var done = { campos: 0, uvas: 0, perfil: 0, aromas: 0 };
    return Repo.withLock(function () {
      if (parts.indexOf('campos') >= 0) {
        var fs = Object.assign({}, w.field_sources || {}), n = 0;
        Object.keys(fs).forEach(function (k) { if (fs[k] === 'ia_nao_verificada' || fs[k] === 'ia') { fs[k] = 'usuario'; n++; } });
        if (n) { Repo.update('wines', [{ id: w.id, field_sources: fs }]); done.campos = n; }
      }
      if (parts.indexOf('uvas') >= 0) {
        var wg = Repo.where('wine_grapes', { wine_id: w.id }).filter(function (g) { return UNTRUSTED(g.source); });
        if (wg.length) { Repo.update('wine_grapes', wg.map(function (g) { return { id: g.id, source: 'usuario' }; })); done.uvas = wg.length; }
      }
      if (parts.indexOf('perfil') >= 0) {
        var p = Catalog.profileOf('wine', w.id);
        if (p && UNTRUSTED(p.source)) {
          Repo.update('profiles', [{ id: p.id, source: 'usuario', source_ref: String(p.source_ref || '').slice(0, 400) + (p.source_ref ? ' · ' : '') + 'confirmado por você em ' + Util.nowIso().slice(0, 10) }]);
          done.perfil = 1;
        }
      }
      if (parts.indexOf('aromas') >= 0) {
        var ar = Repo.where('entity_aromas', function (x) { return x.entity_type === 'wine' && x.entity_id === w.id && UNTRUSTED(x.source); });
        if (ar.length) { Repo.update('entity_aromas', ar.map(function (x) { return { id: x.id, source: 'usuario' }; })); done.aromas = ar.length; }
      }
      return done;
    });
  }

  return { list: list, confirm: confirm };
})();
