/**
 * Vinhos (rótulos estudados).
 */
var Wines = (function () {

  var TEXT_FIELDS = {
    type: 40, color: 40, residual_sugar: 60, acidity_gl: 60, production_method: 300, aging: 300, oak: 200,
    aging_time: 120, classification: 120, price_currency: 5, serving_temp: 60, pairing: 1000,
    curiosities: 3000, technical_notes: 5000, my_notes: 5000
  };

  function context_() {
    return {
      producers: Util.indexBy(Repo.all('producers'), 'id'),
      countries: Util.indexBy(Repo.all('countries'), 'id'),
      regions: Util.indexBy(Repo.all('regions'), 'id'),
      appellations: Util.indexBy(Repo.all('appellations'), 'id'),
      grapes: Util.indexBy(Repo.all('grapes'), 'id'),
      wineGrapes: Util.groupBy(Repo.all('wine_grapes'), 'wine_id'),
      bottles: Util.groupBy(Repo.all('bottles'), 'wine_id')
    };
  }

  function nameOf_(idx, id) { return id && idx[id] ? idx[id].name : ''; }

  function summarize_(w, c) {
    var bottles = c.bottles[w.id] || [];
    return {
      id: w.id, name: w.name, vintage: w.vintage, color: w.color, type: w.type, abv: w.abv,
      producer: nameOf_(c.producers, w.producer_id), country: nameOf_(c.countries, w.country_id),
      region: nameOf_(c.regions, w.region_id), country_id: w.country_id, region_id: w.region_id,
      grapes: (c.wineGrapes[w.id] || []).map(function (x) {
        return { id: x.grape_id, name: nameOf_(c.grapes, x.grape_id), percent: x.percent };
      }),
      bottles_available: bottles.filter(function (b) { return b.status === 'disponivel'; }).length,
      bottles_total: bottles.length,
      source: w.source
    };
  }

  function list() {
    var c = context_();
    return Repo.all('wines').map(function (w) { return summarize_(w, c); })
      .sort(function (a, b) { return String(a.name).localeCompare(String(b.name), 'pt'); });
  }

  function get(id) {
    Validate.id(id);
    var w = Repo.get('wines', id);
    if (!w) throw new Error('Vinho não encontrado.');
    var c = context_();
    var out = Object.assign({}, w, summarize_(w, c));
    out.subregion = nameOf_(c.regions, w.subregion_id);
    out.appellation = nameOf_(c.appellations, w.appellation_id);
    out.profile = Catalog.profileOf('wine', id);
    out.profile_trusted = out.profile ? Catalog.isTrusted(out.profile.source) : false;
    out.aromas = Catalog.aromasOf('wine', id);
    out.notes = Catalog.notesFor('wine', id);
    var bottles = (c.bottles[id] || []).slice().sort(function (a, b) { return a.number - b.number; });
    out.bottles = bottles.map(function (b) { return { id: b.id, number: b.number, status: b.status }; });
    var results = Repo.where('tasting_results', { wine_id: id });
    out.my_results = Scoring.aggregate(results, Settings.getNumber('near_credit', 0.5));
    out.times_tasted = Object.keys(Util.groupBy(results, 'sample_id')).length;
    return out;
  }

  /** Cria ou atualiza. Nomes de produtor/país/região/uva são resolvidos (ou criados). */
  function save(input) {
    input = input || {};
    var isNew = !input.id;
    var existing = isNew ? null : Repo.get('wines', Validate.id(input.id));
    if (!isNew && !existing) throw new Error('Vinho não encontrado.');

    var rec = { name: Validate.required(input.name, 200, 'Nome do vinho') };
    var country = Catalog.resolveByName('countries', input.country);
    var region = country ? Catalog.resolveByName('regions', input.region, { country_id: country.id, parent_id: '', level: 'regiao' }) : null;
    var subregion = region && !Util.isBlank(input.subregion)
      ? Catalog.resolveByName('regions', input.subregion, { country_id: country.id, parent_id: region.id, level: 'sub-regiao' }) : null;
    var producer = Catalog.resolveByName('producers', input.producer, region ? { region_id: region.id } : {});
    var appellation = !Util.isBlank(input.appellation)
      ? Catalog.resolveByName('appellations', input.appellation, region ? { region_id: region.id } : {}) : null;
    rec.country_id = country ? country.id : '';
    rec.region_id = region ? region.id : '';
    rec.subregion_id = subregion ? subregion.id : '';
    rec.producer_id = producer ? producer.id : '';
    rec.appellation_id = appellation ? appellation.id : '';
    rec.vintage = Validate.num(input.vintage, 1800, 2100, 'Safra');
    rec.abv = Validate.num(input.abv, 0, 25, 'Teor alcoólico');
    rec.price = Validate.num(input.price, 0, 1000000, 'Preço');
    Object.keys(TEXT_FIELDS).forEach(function (f) { rec[f] = Validate.str(input[f], TEXT_FIELDS[f], f); });
    if (rec.color) Validate.oneOf(rec.color, CONFIG.WINE_COLORS, 'cor');
    if (rec.type) Validate.oneOf(rec.type, CONFIG.WINE_TYPES, 'tipo');

    // Origem por campo vinda da foto do rótulo ("rotulo", "pesquisado" = enciclopédia, "ia_nao_verificada"); o resto é "usuario".
    var origins = origins_(input.origins), refs = refs_(input.refs, origins);
    var saved;
    if (isNew) {
      var fs = {}, fr = {};
      Object.keys(rec).forEach(function (k) {
        if (Util.isBlank(rec[k])) return;
        fs[k] = origins[k] || 'usuario';
        if (refs[k]) fr[k] = refs[k];
      });
      saved = Repo.insert('wines', [Object.assign(rec, { source: 'usuario', field_sources: fs, field_refs: fr })])[0];
    } else {
      // Campos alterados passam a ter origem "usuario" (a sincronização não os sobrescreve mais).
      var fs2 = Object.assign({}, existing.field_sources || {});
      var fr2 = Object.assign({}, existing.field_refs || {});
      Object.keys(rec).forEach(function (k) {
        if (JSON.stringify(rec[k]) === JSON.stringify(existing[k] === undefined ? '' : existing[k])) return;
        fs2[k] = origins[k] || 'usuario';
        if (refs[k]) fr2[k] = refs[k]; else delete fr2[k];
      });
      Repo.update('wines', [Object.assign({ id: existing.id, field_sources: fs2, field_refs: fr2 }, rec)]);
      saved = Repo.get('wines', existing.id);
    }

    if (Array.isArray(input.grapes)) setGrapes_(saved.id, input.grapes);
    return get(saved.id);
  }

  var ORIGIN_FIELDS = { producer: 'producer_id', country: 'country_id', region: 'region_id', subregion: 'subregion_id', appellation: 'appellation_id' };
  var LABEL_ORIGINS = ['rotulo', 'pesquisado', 'ia_nao_verificada'];

  function origins_(o) {
    var out = {};
    if (!o || typeof o !== 'object') return out;
    Object.keys(o).forEach(function (k) {
      var col = ORIGIN_FIELDS[k] || k;
      if ((TEXT_FIELDS[col] || ['name', 'vintage', 'abv', 'price'].indexOf(col) >= 0 || /_id$/.test(col)) && LABEL_ORIGINS.indexOf(o[k]) >= 0) out[col] = o[k];
    });
    return out;
  }

  function refs_(r, origins) {
    var out = {};
    if (!r || typeof r !== 'object') return out;
    Object.keys(r).forEach(function (k) {
      var col = ORIGIN_FIELDS[k] || k;
      if (origins[col] && typeof r[k] === 'string' && /^https?:\/\/\S+$/.test(r[k]) && r[k].length <= 1000) out[col] = r[k];
    });
    return out;
  }

  function setGrapes_(wineId, grapes) {
    var wanted = [];
    grapes.slice(0, 20).forEach(function (g) {
      var grape = g.id ? Repo.get('grapes', Validate.id(g.id)) : Catalog.resolveByName('grapes', g.name);
      if (!grape) return;
      wanted.push({ grape_id: grape.id, percent: Validate.num(g.percent, 0, 100, 'Percentual'),
        source: LABEL_ORIGINS.indexOf(g.source) >= 0 ? g.source : 'usuario' });
    });
    var existing = Repo.where('wine_grapes', { wine_id: wineId });
    var byGrape = Util.indexBy(existing, 'grape_id');
    var wantedIds = wanted.map(function (w) { return w.grape_id; });
    Repo.remove('wine_grapes', existing.filter(function (x) { return wantedIds.indexOf(x.grape_id) < 0; }).map(function (x) { return x.id; }));
    Repo.insert('wine_grapes', wanted.filter(function (w) { return !byGrape[w.grape_id]; }).map(function (w) {
      return { wine_id: wineId, grape_id: w.grape_id, percent: w.percent, source: w.source };
    }));
    Repo.update('wine_grapes', wanted.filter(function (w) {
      return byGrape[w.grape_id] && byGrape[w.grape_id].percent !== w.percent;
    }).map(function (w) { return { id: byGrape[w.grape_id].id, percent: w.percent, source: w.source }; }));
  }

  return { list: list, get: get, save: save };
})();
