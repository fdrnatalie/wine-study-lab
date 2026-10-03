/**
 * Uvas: enciclopédia pessoal.
 */
var Grapes = (function () {

  var TEXT_FIELDS = {
    color: 20, origin: 300, main_countries: 1000, main_regions: 2000, general_profile: 3000, ripening: 120,
    skin_thickness: 120, bunch_size: 120, berry_size: 120, vigor: 120, disease_sensitivity: 500,
    climate: 500, soils: 500, how_to_recognize: 3000, confusions_text: 3000, description: 5000, notes: 5000
  };

  function list() {
    var wg = Util.groupBy(Repo.all('wine_grapes'), 'grape_id');
    var profiles = Util.indexBy(Repo.all('profiles').filter(function (p) { return p.entity_type === 'grape'; }), 'entity_id');
    return Repo.all('grapes').map(function (g) {
      var filled = Object.keys(TEXT_FIELDS).filter(function (f) { return !Util.isBlank(g[f]); }).length;
      return {
        id: g.id, name: g.name, color: g.color, origin: g.origin, source: g.source,
        wines: (wg[g.id] || []).length, has_profile: !!profiles[g.id],
        completeness: Math.round(filled / Object.keys(TEXT_FIELDS).length * 100),
        unverified: Object.keys(g.field_sources || {}).some(function (k) { return g.field_sources[k] === 'ia_nao_verificada'; })
      };
    }).sort(function (a, b) { return String(a.name).localeCompare(String(b.name), 'pt'); });
  }

  function get(id) {
    Validate.id(id);
    var g = Repo.get('grapes', id);
    if (!g) throw new Error('Uva não encontrada.');
    var grapes = Util.indexBy(Repo.all('grapes'), 'id');
    var out = Object.assign({}, g);
    out.profile = Catalog.profileOf('grape', id);
    out.aromas = Catalog.aromasOf('grape', id);
    out.relationships = Repo.where('grape_relationships', function (r) { return r.grape_a_id === id || r.grape_b_id === id; })
      .map(function (r) {
        var other = r.grape_a_id === id ? r.grape_b_id : r.grape_a_id;
        var role = r.kind === 'parent_of' ? (r.grape_a_id === id ? 'filha' : 'pai/mãe') : r.kind;
        return { id: r.id, kind: r.kind, role: role, grape_id: other, grape_name: grapes[other] ? grapes[other].name : '?',
          how_to_differentiate: r.how_to_differentiate, source: r.source, source_ref: r.source_ref };
      });
    var wineIds = Repo.where('wine_grapes', { grape_id: id }).map(function (x) { return x.wine_id; });
    var wines = Util.indexBy(Repo.all('wines'), 'id');
    out.wines = wineIds.map(function (wid) { return wines[wid]; }).filter(Boolean)
      .map(function (w) { return { id: w.id, name: w.name, vintage: w.vintage }; });
    out.notes = Catalog.notesFor('grape', id);
    out.regions = Regions.forGrape(id);
    // Meu desempenho com esta uva (critério "uva" das degustações em que ela era a resposta).
    var results = Repo.all('tasting_results').filter(function (r) {
      return r.criterion === 'grape' && (r.grape_ids || []).indexOf(id) >= 0;
    });
    out.my_results = Scoring.aggregate(results, Settings.getNumber('near_credit', 0.5))[0] || null;
    return out;
  }

  function save(input) {
    input = input || {};
    var isNew = !input.id;
    var existing = isNew ? null : Repo.get('grapes', Validate.id(input.id));
    if (!isNew && !existing) throw new Error('Uva não encontrada.');
    var rec = { name: Validate.required(input.name, 120, 'Nome da uva') };
    rec.name_key = Util.normKey(rec.name);
    var dup = Repo.all('grapes').filter(function (g) { return g.name_key === rec.name_key && (!existing || g.id !== existing.id); })[0];
    if (dup) throw new Error('Já existe uma uva chamada ' + dup.name + '.');
    Object.keys(TEXT_FIELDS).forEach(function (f) { rec[f] = Validate.str(input[f], TEXT_FIELDS[f], f); });
    rec.synonyms = Array.isArray(input.synonyms)
      ? input.synonyms.map(function (s) { return Validate.str(s, 120, 'sinônimo'); }).filter(Boolean).slice(0, 50)
      : (existing ? existing.synonyms : []);

    if (isNew) {
      var fs = {};
      Object.keys(rec).forEach(function (k) { if (!Util.isBlank(rec[k])) fs[k] = 'usuario'; });
      return get(Repo.insert('grapes', [Object.assign(rec, { source: 'usuario', field_sources: fs })])[0].id);
    }
    var fs2 = Object.assign({}, existing.field_sources || {});
    Object.keys(rec).forEach(function (k) {
      if (JSON.stringify(rec[k]) !== JSON.stringify(existing[k] === undefined ? '' : existing[k])) fs2[k] = 'usuario';
    });
    Repo.update('grapes', [Object.assign({ id: existing.id, field_sources: fs2 }, rec)]);
    return get(existing.id);
  }

  /** Marca campos importados como revisados por você (origem "ia_nao_verificada" → "usuario"). */
  function verifyFields(id, fields) {
    var g = Repo.get('grapes', Validate.id(id, 'grapes'));
    var fs = Object.assign({}, g.field_sources || {});
    (fields || []).forEach(function (f) { if (TEXT_FIELDS[f] || f === 'synonyms') fs[f] = 'usuario'; });
    Repo.update('grapes', [{ id: id, field_sources: fs }]);
    return get(id);
  }

  /**
   * Dados para comparar 2–4 uvas lado a lado. Só usa o que está cadastrado:
   * perfil, aromas, textos e as relações "pode ser confundida" entre elas.
   */
  function compare(ids) {
    ids = Validate.ids((ids || []).slice(0, 4), 'grapes');
    if (ids.length < 1) throw new Error('Escolha ao menos uma uva.');
    var aromasAll = Util.indexBy(Repo.all('aromas'), 'id');
    var eas = Repo.all('entity_aromas');
    var profiles = Util.indexBy(Repo.all('profiles').filter(function (p) { return p.entity_type === 'grape'; }), 'entity_id');
    var grapes = ids.map(function (id) {
      var g = Repo.get('grapes', id);
      return {
        id: g.id, name: g.name, color: g.color, origin: g.origin, main_regions: g.main_regions, main_countries: g.main_countries,
        climate: g.climate, ripening: g.ripening, skin_thickness: g.skin_thickness, general_profile: g.general_profile,
        how_to_recognize: g.how_to_recognize, field_sources: g.field_sources || {},
        profile: profiles[id] || null,
        aromas: eas.filter(function (x) { return x.entity_type === 'grape' && x.entity_id === id; }).map(function (x) {
          var a = aromasAll[x.aroma_id];
          return a ? { id: a.id, name: a.name, category: a.category, subcategory: a.subcategory } : null;
        }).filter(Boolean)
      };
    });
    var names = Util.indexBy(Repo.all('grapes'), 'id');
    var pairs = Repo.all('grape_relationships').filter(function (r) {
      return r.kind === 'confused_with' && ids.indexOf(r.grape_a_id) >= 0 && ids.indexOf(r.grape_b_id) >= 0;
    }).map(function (r) {
      return { a: names[r.grape_a_id].name, b: names[r.grape_b_id].name, how: r.how_to_differentiate, source: r.source, source_ref: r.source_ref };
    });
    return { grapes: grapes, pairs: pairs };
  }

  /** Rede de parentesco: todas as uvas com alguma relação parent_of e as arestas. */
  function genealogy() {
    var rels = Repo.all('grape_relationships').filter(function (r) { return r.kind === 'parent_of'; });
    var used = {};
    rels.forEach(function (r) { used[r.grape_a_id] = true; used[r.grape_b_id] = true; });
    var nodes = Repo.all('grapes').filter(function (g) { return used[g.id]; }).map(function (g) {
      return { id: g.id, name: g.name, color: g.color, origin: g.origin };
    });
    return {
      nodes: nodes,
      edges: rels.map(function (r) { return { parent: r.grape_a_id, child: r.grape_b_id, source: r.source, source_ref: r.source_ref }; })
    };
  }

  return { list: list, get: get, save: save, verifyFields: verifyFields, compare: compare, genealogy: genealogy };
})();
