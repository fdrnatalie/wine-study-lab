/**
 * Importar / Sincronizar: lê as abas originais e atualiza as abas db_.
 *
 * Regras (docs/ARQUITETURA.md §5):
 * - Nunca escreve nas abas originais.
 * - Nunca apaga registros do sistema.
 * - Deduplica por chave natural normalizada (vinho: rótulo+produtor+safra).
 * - Só sobrescreve campos cuja origem ainda é "planilha" ou "ia_nao_verificada";
 *   o que você editou no sistema (origem "usuario" etc.) é preservado.
 */
var Import = (function () {
  var OVERWRITABLE = { planilha: 1, ia_nao_verificada: 1 };

  /** Resolve/cria entidades simples por nome, acumulando inserções para gravar em lote. */
  function Resolver(entity, scopeField) {
    var list = Repo.all(entity);
    var pending = [];
    function keyOf(name, scope) { return Util.normKey(name) + '|' + (scope || ''); }
    var idx = {};
    list.forEach(function (r) { idx[keyOf(r.name, scopeField ? r[scopeField] : '')] = r; });
    return {
      find: function (name, scope) { return idx[keyOf(name, scope)] || null; },
      ensure: function (name, scope, extra) {
        if (Util.isBlank(name)) return null;
        var k = keyOf(name, scope);
        if (idx[k]) return idx[k];
        var rec = Object.assign({ id: Util.newId(SCHEMA[entity].prefix), name: name, name_key: Util.normKey(name),
          source: 'planilha', source_ref: CONFIG.SOURCE_SHEETS.wines }, extra || {});
        if (scopeField) rec[scopeField] = scope;
        idx[k] = rec;
        pending.push(rec);
        return rec;
      },
      all: function () { return list.concat(pending); },
      flush: function () { var n = pending.length; Repo.insert(entity, pending); pending = []; return n; }
    };
  }

  /** Campos a atualizar num registro existente, respeitando a origem de cada campo. */
  function mergePatch(existing, incoming, source) {
    var fs = Object.assign({}, existing.field_sources || {});
    var patch = {}, changed = false;
    Object.keys(incoming).forEach(function (f) {
      var v = incoming[f];
      if (Util.isBlank(v) || (Array.isArray(v) && !v.length)) return;
      var cur = existing[f];
      var curSource = fs[f] || existing.source;
      var blank = Util.isBlank(cur) || (Array.isArray(cur) && !cur.length);
      if (!blank && !OVERWRITABLE[curSource]) return;
      if (JSON.stringify(cur) === JSON.stringify(v) && fs[f] === source) return;
      patch[f] = v;
      fs[f] = source;
      changed = true;
    });
    if (!changed) return null;
    patch.id = existing.id;
    patch.field_sources = fs;
    return patch;
  }

  function readSource_(name) {
    var sh = Repo.spreadsheet().getSheetByName(name);
    if (!sh) return null;
    return sh.getDataRange().getValues();
  }

  function run() {
    return Repo.withLock(function () {
      var log = [], stats = { wines_new: 0, wines_updated: 0, bottles_new: 0, grapes_new: 0, grapes_updated: 0, notes_new: 0 };
      function note(level, message, details) { log.push({ level: level, message: message, details: details || null }); }

      var scales = Settings.scales();

      // ---------- UVAS (antes dos vinhos, para aproveitar os nomes) ----------
      var grapeRes = GrapeResolver_();
      var gv = readSource_(CONFIG.SOURCE_SHEETS.grapes);
      if (gv) {
        var gp = ImportParse.parseGrapeSheet(gv);
        gp.warnings.forEach(function (w) { note('info', w); });
        var grapePatches = [];
        gp.grapes.forEach(function (g) {
          var found = grapeRes.match(g.name);
          var info = {
            synonyms: g.synonyms, main_regions: g.main_regions, description: g.description,
            confusions_text: g.confusions_text, how_to_recognize: g.how_to_recognize
          };
          if (!found.rec) {
            var rec = grapeRes.create(g.name, CONFIG.SOURCE_SHEETS.grapes);
            var fs = {};
            Object.keys(info).forEach(function (k) { if (!Util.isBlank(info[k]) && !(Array.isArray(info[k]) && !info[k].length)) { rec[k] = info[k]; fs[k] = 'ia_nao_verificada'; } });
            rec.field_sources = fs;
            stats.grapes_new++;
          } else {
            if (found.fuzzy) note('aviso', 'Uva "' + g.name + '" (aba UVAS) associada a "' + found.rec.name + '" por semelhança de nome.');
            if (found.pending) {
              found.rec.field_sources = found.rec.field_sources || {};
              Object.keys(info).forEach(function (k) {
                if (Util.isBlank(info[k]) || (Array.isArray(info[k]) && !info[k].length)) return;
                found.rec[k] = info[k];
                found.rec.field_sources[k] = 'ia_nao_verificada';
              });
            } else {
              var p = mergePatch(found.rec, info, 'ia_nao_verificada');
              if (p) { grapePatches.push(p); stats.grapes_updated++; }
            }
          }
        });
        Repo.update('grapes', grapePatches);
      } else {
        note('aviso', 'Aba "' + CONFIG.SOURCE_SHEETS.grapes + '" não encontrada.');
      }

      // ---------- VINHOS + GARRAFINHAS ----------
      var wv = readSource_(CONFIG.SOURCE_SHEETS.wines);
      if (wv) {
        var parsed = ImportParse.parseWines(wv, scales);
        parsed.warnings.forEach(function (w) { note('info', w); });
        importWines_(parsed.wines, grapeRes, stats, note);
      } else {
        note('aviso', 'Aba "' + CONFIG.SOURCE_SHEETS.wines + '" não encontrada.');
      }
      grapeRes.flush();

      // ---------- NOTAS ----------
      var nv = readSource_(CONFIG.SOURCE_SHEETS.notes);
      if (nv) {
        var existingNotes = Util.indexBy(Repo.all('notes').filter(function (n) { return n.import_key; }), 'import_key');
        var newNotes = ImportParse.parseNotes(nv).filter(function (n) { return !existingNotes[n.import_key]; }).map(function (n) {
          return { title: n.title, body: n.body, kind: 'aula', import_key: n.import_key, date: Util.nowIso(),
            source: 'planilha', source_ref: CONFIG.SOURCE_SHEETS.notes };
        });
        Repo.insert('notes', newNotes);
        stats.notes_new = newNotes.length;
      }

      var runAt = Util.nowIso();
      note('ok', 'Sincronização concluída.', stats);
      Repo.insert('import_log', log.map(function (l) {
        return { run_at: runAt, level: l.level, message: Util.clampStr(l.message, 1000), details: l.details, source: 'sistema' };
      }));
      Settings.set('last_sync_at', runAt);
      return { run_at: runAt, stats: stats, log: log };
    });
  }

  /** Resolve uvas por nome, sinônimo ou semelhança (erro de digitação: "Dolceto" → "Dolcetto"). */
  function GrapeResolver_() {
    var list = Repo.all('grapes');
    var pending = [];
    function candidates() { return list.concat(pending); }
    function match(name) {
      var k = Util.normKey(name);
      var all = candidates(), i;
      for (i = 0; i < all.length; i++) if (all[i].name_key === k) return { rec: all[i], pending: pending.indexOf(all[i]) >= 0 };
      for (i = 0; i < all.length; i++) {
        var syn = (all[i].synonyms || []).map(function (s) { return Util.normKey(String(s).replace(/\(.*\)/, '')); });
        if (syn.indexOf(k) >= 0) return { rec: all[i], pending: pending.indexOf(all[i]) >= 0 };
      }
      if (k.length >= 6) {
        for (i = 0; i < all.length; i++) {
          if (Util.levenshtein(all[i].name_key, k) <= 1) return { rec: all[i], fuzzy: true, pending: pending.indexOf(all[i]) >= 0 };
        }
      }
      return { rec: null };
    }
    function create(name, ref) {
      var rec = { id: Util.newId(SCHEMA.grapes.prefix), name: name, name_key: Util.normKey(name),
        source: 'planilha', source_ref: ref, field_sources: {} };
      pending.push(rec);
      return rec;
    }
    return {
      match: match, create: create,
      ensure: function (name, ref) { var m = match(name); return m.rec || create(name, ref); },
      flush: function () { Repo.insert('grapes', pending); pending = []; }
    };
  }

  function importWines_(wines, grapeRes, stats, note) {
    var countries = Resolver('countries');
    var regions = Resolver('regions', 'country_id');
    var producers = Resolver('producers');
    var existingWines = Util.indexBy(Repo.all('wines').filter(function (w) { return w.import_key; }), 'import_key');
    var existingWineGrapes = Repo.all('wine_grapes');
    var profiles = Repo.all('profiles').filter(function (p) { return p.entity_type === 'wine'; });
    var profileByWine = Util.indexBy(profiles, 'entity_id');
    var bottles = Repo.all('bottles');
    var activeByNumber = {};
    bottles.forEach(function (b) { if (b.status === 'disponivel' || b.status === 'reservada') activeByNumber[b.number] = b; });
    var batches = Repo.all('bottling_batches');

    var newWines = [], winePatches = [], newWG = [], newProfiles = [], profilePatches = [], newBottles = [], newBatches = [];
    var src = CONFIG.SOURCE_SHEETS.wines;

    wines.forEach(function (w) {
      var country = countries.ensure(w.country);
      var region = country ? regions.ensure(w.region, country.id, { level: 'regiao' }) : null;
      var producer = producers.ensure(w.producer, '', region ? { region_id: region.id } : {});
      var fields = {
        name: w.name, producer_id: producer ? producer.id : '', country_id: country ? country.id : '',
        region_id: region ? region.id : '', vintage: w.vintage, abv: w.abv, price: w.price,
        price_currency: w.price_currency, color: '', type: ''
      };
      var wine = existingWines[w.import_key];
      var isNew = !wine;
      if (isNew) {
        wine = Object.assign({ id: Util.newId(SCHEMA.wines.prefix), import_key: w.import_key, source: 'planilha',
          source_ref: src + ' linhas ' + w.rows[0] + '–' + w.rows[w.rows.length - 1] }, fields);
        var fs = {};
        Object.keys(fields).forEach(function (k) { if (!Util.isBlank(fields[k])) fs[k] = 'planilha'; });
        wine.field_sources = fs;
        newWines.push(wine);
        stats.wines_new++;
      } else {
        var patch = mergePatch(wine, fields, 'planilha');
        if (patch) { winePatches.push(patch); stats.wines_updated++; }
      }

      // Uvas do vinho
      var linked = existingWineGrapes.filter(function (x) { return x.wine_id === wine.id; }).map(function (x) { return x.grape_id; });
      w.grapes.forEach(function (g) {
        var m = grapeRes.match(g.name);
        if (m.fuzzy) note('aviso', 'Uva "' + g.name + '" (vinho ' + w.name + ') associada a "' + m.rec.name + '" por semelhança de nome. Corrija o nome da uva se necessário.');
        var grape = m.rec || grapeRes.create(g.name, src);
        if (linked.indexOf(grape.id) < 0) {
          newWG.push({ wine_id: wine.id, grape_id: grape.id, percent: g.percent, source: 'planilha' });
          linked.push(grape.id);
        }
      });

      // Perfil sensorial importado (colunas geradas por IA na planilha → não é gabarito)
      if (Object.keys(w.profile).length) {
        var existing = profileByWine[wine.id];
        if (!existing) {
          newProfiles.push(Object.assign({ entity_type: 'wine', entity_id: wine.id, source: 'ia_nao_verificada',
            source_ref: 'Colunas sensoriais da aba ' + src + ' (moda entre as garrafinhas)' }, w.profile));
        } else if (existing.source === 'ia_nao_verificada') {
          var pp = mergePatch(existing, w.profile, 'ia_nao_verificada');
          if (pp) profilePatches.push(pp);
        }
      }
      w.conflicts.forEach(function (c) {
        note('aviso', 'Valores divergentes em "' + w.name + '" — campo ' + c.field + '. Revise.', c);
      });

      // Garrafinhas
      var created = [];
      w.bottles.forEach(function (n) {
        var active = activeByNumber[n];
        if (active) {
          if (active.wine_id !== wine.id) {
            note('aviso', 'Garrafinha ' + n + ' já está ativa com outro vinho no sistema; linha da planilha ignorada.', { number: n, wine: w.name });
          }
          return;
        }
        created.push(n);
      });
      if (created.length) {
        var batch = batches.filter(function (b) { return b.wine_id === wine.id && b.source === 'planilha'; })[0];
        if (!batch) {
          batch = { id: Util.newId(SCHEMA.bottling_batches.prefix), wine_id: wine.id, bottle_count: created.length,
            numbering: 'sequencial (planilha)', source: 'planilha', source_ref: src,
            notes: 'Criado automaticamente pela sincronização. Complete data e volumes se quiser.' };
          newBatches.push(batch);
        }
        created.forEach(function (n) {
          var b = { number: n, wine_id: wine.id, batch_id: batch.id, status: 'disponivel',
            status_changed_at: Util.nowIso(), source: 'planilha', source_ref: src };
          newBottles.push(b);
          activeByNumber[n] = b;
        });
        stats.bottles_new += created.length;
      }
    });

    countries.flush(); regions.flush(); producers.flush();
    grapeRes.flush();
    Repo.insert('wines', newWines);
    Repo.update('wines', winePatches);
    Repo.insert('wine_grapes', newWG);
    Repo.insert('profiles', newProfiles);
    Repo.update('profiles', profilePatches);
    Repo.insert('bottling_batches', newBatches);
    Repo.insert('bottles', newBottles);
  }

  function lastLog(limit) {
    var logs = Repo.all('import_log').sort(function (a, b) { return a.run_at < b.run_at ? 1 : -1; });
    if (!logs.length) return [];
    var last = logs[0].run_at;
    return logs.filter(function (l) { return l.run_at === last; }).slice(0, limit || 100);
  }

  return { run: run, lastLog: lastLog, mergePatch: mergePatch };
})();
