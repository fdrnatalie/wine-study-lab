/**
 * Importa GRAPE_ENCYCLOPEDIA (15_SeedGrapes.js) para as abas db_.
 *
 * - Casa cada uva com a existente por nome, sinônimo ou nome muito parecido ("Dolceto" → "Dolcetto").
 * - Campo só é gravado se estiver vazio ou se a origem atual for planilha / IA não verificada /
 *   pesquisado (versão anterior desta pesquisa). O que você editou ou aprovou fica intacto.
 * - Perfil sensorial: gravado se não existir ou se for "ia_nao_verificada"/"pesquisado".
 * - Aromas e relações: só acrescenta o que falta.
 * Pode rodar quantas vezes quiser (idempotente).
 */
var SeedEncyclopedia = (function () {
  var REPLACEABLE = { planilha: 1, ia_nao_verificada: 1, pesquisado: 1 };
  var FIELDS = ['color', 'origin', 'main_countries', 'main_regions', 'ripening', 'vigor', 'skin_thickness',
    'berry_size', 'bunch_size', 'disease_sensitivity', 'climate', 'soils', 'description'];

  function run() {
    return Repo.withLock(function () {
      var E = GRAPE_ENCYCLOPEDIA;
      var report = { grapes_new: 0, grapes_updated: 0, profiles: 0, aromas: 0, relations: 0, aromas_vocab: 0, skipped_fields: 0 };

      // 1. Vocabulário extra de aromas.
      var vocab = Util.indexBy(Repo.all('aromas'), 'name_key');
      var maxOrder = Repo.all('aromas').reduce(function (m, a) { return Math.max(m, a.order || 0); }, 0);
      var newVocab = E.EXTRA_AROMAS.filter(function (a) { return !vocab[Util.normKey(a[0])]; }).map(function (a) {
        return { name: a[0], name_key: Util.normKey(a[0]), category: a[1], subcategory: a[2], order: ++maxOrder, source: 'sistema', source_ref: 'Enciclopédia de uvas v' + E.version };
      });
      Repo.insert('aromas', newVocab);
      report.aromas_vocab = newVocab.length;
      var aromaByName = Util.indexBy(Repo.all('aromas'), 'name');

      // 2. Uvas.
      E.grapes.forEach(function (s) {
        var wikiUrl = /^https?:\/\//.test(s.wiki) ? s.wiki : E.WIKI + s.wiki, wfUrl = s.wf ? E.WF + s.wf + '/' : '';
        var rec = exactByName_(s.name) || Enrichment.findGrape(s.name) || s.synonyms.map(function (x) { return exactByName_(x); }).filter(Boolean)[0] || null;
        var values = {};
        FIELDS.forEach(function (f) { if (!Util.isBlank(s[f])) values[f] = s[f]; });
        if (s.synonyms.length) values.synonyms = s.synonyms;

        if (!rec) {
          var fs = { name: 'pesquisado' }, refs = { name: wikiUrl };
          Object.keys(values).forEach(function (f) { fs[f] = 'pesquisado'; refs[f] = wikiUrl; });
          rec = Repo.insert('grapes', [Object.assign({ name: s.name, name_key: Util.normKey(s.name), source: 'pesquisado', source_ref: wikiUrl,
            field_sources: fs, field_refs: refs }, values)])[0];
          report.grapes_new++;
        } else {
          var fs2 = Object.assign({}, rec.field_sources || {}), refs2 = Object.assign({}, rec.field_refs || {});
          var patch = { id: rec.id }, changed = false;
          // Corrige o nome quando veio da planilha com grafia diferente (ex.: "Dolceto").
          if (rec.name !== s.name && (fs2.name || rec.source) !== 'usuario' && Util.levenshtein(Util.normKey(rec.name), Util.normKey(s.name)) <= 2) {
            patch.name = s.name; patch.name_key = Util.normKey(s.name); fs2.name = 'pesquisado'; refs2.name = wikiUrl; changed = true;
          }
          Object.keys(values).forEach(function (f) {
            var cur = rec[f];
            var blank = Util.isBlank(cur) || (Array.isArray(cur) && !cur.length);
            var src = fs2[f] || rec.source;
            if (!blank && !REPLACEABLE[src]) { report.skipped_fields++; return; }
            if (JSON.stringify(cur) === JSON.stringify(values[f]) && src === 'pesquisado') return;
            patch[f] = values[f]; fs2[f] = 'pesquisado'; refs2[f] = wikiUrl; changed = true;
          });
          if (changed) {
            patch.field_sources = fs2; patch.field_refs = refs2;
            Repo.update('grapes', [patch]);
            report.grapes_updated++;
          }
        }

        // Perfil sensorial típico.
        var prof = Catalog.profileOf('grape', rec.id);
        var hasProfile = s.profile && Object.keys(s.profile).some(function (k) { return !Util.isBlank(s.profile[k]); });
        if (hasProfile && (!prof || prof.source === 'ia_nao_verificada' || prof.source === 'pesquisado')) {
          var data = Object.assign({}, s.profile, {
            source: 'pesquisado',
            source_ref: wfUrl ? 'Wine Folly: ' + wfUrl + (/\.\./.test(s.profile.sweetness) ? ' · dulçor: ' + wikiUrl : '') : wikiUrl,
            nose_text: s.flavors ? 'Sabores principais (Wine Folly): ' + s.flavors + '.' : ''
          });
          if (prof) ['intensity', 'finish', 'color_intensity', 'color_hue', 'oak', 'texture', 'visual_text', 'palate_text'].forEach(function (k) { if (prof[k]) data[k] = prof[k]; });
          Catalog.saveProfile('grape', rec.id, data);
          report.profiles++;
        }

        // Aromas (só acrescenta).
        var have = {};
        Repo.where('entity_aromas', function (x) { return x.entity_type === 'grape' && x.entity_id === rec.id; }).forEach(function (x) { have[x.aroma_id] = true; });
        var add = [];
        [[s.aromas_wf, wfUrl], [s.aromas_wiki, wikiUrl]].forEach(function (pair) {
          (pair[0] || []).forEach(function (n) {
            var a = aromaByName[n];
            if (!a) throw new Error('Aroma fora do vocabulário na enciclopédia: ' + n + ' (' + s.name + ')');
            if (have[a.id]) return;
            have[a.id] = true;
            add.push({ entity_type: 'grape', entity_id: rec.id, aroma_id: a.id, kind: 'nariz', source: 'pesquisado', source_ref: pair[1] });
          });
        });
        Repo.insert('entity_aromas', add);
        report.aromas += add.length;
      });

      // 3. Relações.
      var rels = Repo.all('grape_relationships');
      var newRels = [];
      E.relations.forEach(function (r) {
        var ref = E.WIKI + r[3];
        var a = grapeOrStub_(r[1], ref), b = grapeOrStub_(r[2], ref);
        if (r[0] === 'parent_of') {
          var exists = rels.concat(newRels).some(function (x) { return x.kind === 'parent_of' && x.grape_a_id === a.id && x.grape_b_id === b.id; });
          if (!exists) newRels.push({ grape_a_id: a.id, grape_b_id: b.id, kind: 'parent_of', source: 'pesquisado', source_ref: ref });
        } else {
          var found = rels.concat(newRels).filter(function (x) {
            return x.kind === 'confused_with' && ((x.grape_a_id === a.id && x.grape_b_id === b.id) || (x.grape_a_id === b.id && x.grape_b_id === a.id));
          })[0];
          if (!found) newRels.push({ grape_a_id: a.id, grape_b_id: b.id, kind: 'confused_with', how_to_differentiate: r[4], source: 'pesquisado', source_ref: ref });
          else if (found.id && !found.how_to_differentiate) Repo.update('grape_relationships', [{ id: found.id, how_to_differentiate: r[4], source: 'pesquisado', source_ref: ref }]);
        }
      });
      Repo.insert('grape_relationships', newRels);
      report.relations = newRels.length;

      // 4. Relações que versões novas mostraram erradas/disputadas (só remove as de origem "pesquisado").
      var byKey = Util.indexBy(Repo.all('grapes'), 'name_key');
      var toRemove = [];
      (E.removed_relations || []).forEach(function (r) {
        var a = byKey[Util.normKey(r[1])], b = byKey[Util.normKey(r[2])];
        if (!a || !b) return;
        Repo.all('grape_relationships').forEach(function (x) {
          if (x.kind === r[0] && x.grape_a_id === a.id && x.grape_b_id === b.id && x.source === 'pesquisado') toRemove.push(x.id);
        });
      });
      Repo.remove('grape_relationships', toRemove);
      report.relations_removed = toRemove.length;

      Settings.set('grape_encyclopedia_version', E.version);
      Repo.insert('import_log', [{ run_at: Util.nowIso(), level: 'ok', message: 'Enciclopédia de uvas v' + E.version + ' importada.', details: report, source: 'sistema' }]);
      return report;
    });
  }

  function exactByName_(name) {
    var k = Util.normKey(name);
    return Repo.all('grapes').filter(function (g) { return g.name_key === k; })[0] || null;
  }

  /** Uva citada só como parente/confusão: cria registro mínimo (nome + fonte). */
  function grapeOrStub_(name, ref) {
    var g = exactByName_(name) || Enrichment.findGrape(name);
    if (g) return g;
    return Repo.insert('grapes', [{ name: name, name_key: Util.normKey(name), source: 'pesquisado', source_ref: ref,
      field_sources: { name: 'pesquisado' }, field_refs: { name: ref } }])[0];
  }

  /** Roda a importação uma vez por versão da enciclopédia (chamado automaticamente pela API). */
  function ensure() {
    var props = PropertiesService.getScriptProperties();
    if (props.getProperty('GRAPE_ENCYCLOPEDIA_VERSION') === String(GRAPE_ENCYCLOPEDIA.version)) return null;
    var r = run();
    props.setProperty('GRAPE_ENCYCLOPEDIA_VERSION', String(GRAPE_ENCYCLOPEDIA.version));
    return r;
  }

  return { run: run, ensure: ensure };
})();
