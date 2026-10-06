/**
 * Dados da planilha para o jogo "Degustação às Cegas" (FDR Wine Lab), que roda em
 * outra aba (doGet ?page=jogo). O jogo usa os nomes como texto ("País · Região"), então
 * aqui tudo é convertido para esse formato. Só entram dados de fonte confiável:
 * campos "IA · não verificado" ficam de fora do gabarito.
 */
var GameData = (function () {
  var APPELLATIONS = [
    [/\bDOCG\b/, 'DOC / DOCG', 'Itália'], [/\bDOC\b/, 'DOC / DOCG', 'Itália'], [/\bDOCa\b|\bDOQ\b/, 'DO / DOCa'],
    [/\b(DOC|DOP)\b/, 'DOP / DOC', 'Portugal'], [/\bAOC\b|\bAOP\b/, 'AOC / AOP'], [/\bIGT\b|\bIGP\b|Vinho Regional/i, 'IGP / Vinho Regional'],
    [/\bAVA\b/, 'AVA'], [/\bDO\b|\bDOP\b/, 'DO / DOCa', 'Espanha'], [/\bIG\b|Indicação/, 'Indicação regional']
  ];
  var SCALE = {
    acidity: { baixa: 'Baixa', 'media-': 'Média', media: 'Média', 'media+': 'Média', alta: 'Alta' },
    tannin: { baixo: 'Baixo', 'medio-': 'Médio', medio: 'Médio', 'medio+': 'Médio', alto: 'Alto' },
    body: { leve: 'Leve', 'medio-': 'Médio', medio: 'Médio', 'medio+': 'Médio', encorpado: 'Encorpado' },
    finish: { curta: 'Curto', media: 'Médio', longa: 'Longo' },
    sweetness: { seco: 'Seco', meio_seco: 'Meio-seco', doce: 'Doce' }
  };
  var GAME_FIELD = { acidity: 'acidity', tannin: 'tannin', body: 'body', finish: 'finish', sweetness: 'dryness' };
  var COLOR = { tinto: 'Tinto', branco: 'Branco', rose: 'Rosé' };

  function trusted(rec, col) {
    var s = (rec.field_sources || {})[col];
    return s !== 'ia_nao_verificada' && s !== 'ia';
  }

  function firstSentences(s, max) {
    s = String(s || '').replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    var cut = s.slice(0, max);
    var dot = cut.lastIndexOf('. ');
    return dot > max * 0.5 ? cut.slice(0, dot + 1) : cut.replace(/\s+\S*$/, '') + '…';
  }

  function appellationOf(cls, country) {
    if (!cls) return '';
    for (var i = 0; i < APPELLATIONS.length; i++) {
      var a = APPELLATIONS[i];
      if (a[0].test(cls) && (!a[2] || a[2] === country)) return a[1];
    }
    return '';
  }

  function build() {
    var countries = Repo.all('countries');
    var cById = Util.indexBy(countries, 'id');
    var regions = Repo.all('regions');
    var rById = Util.indexBy(regions, 'id');
    var grapes = Repo.all('grapes');
    var gById = Util.indexBy(grapes, 'id');
    var wineGrapes = Repo.all('wine_grapes');
    var principal = {};
    Repo.all('region_grapes').forEach(function (x) { if (x.role !== 'secundaria') principal[x.grape_id] = true; });
    wineGrapes.forEach(function (x) { principal[x.grape_id] = true; });

    function label(r) { var c = cById[r.country_id]; return c ? c.name + ' · ' + r.name : ''; }
    function byPt(a, b) { return a.localeCompare(b, 'pt'); }

    var regionNotes = {};
    var tops = [], subs = [];
    regions.forEach(function (r) {
      var l = label(r);
      if (!l) return;
      (r.parent_id ? subs : tops).push(l);
      var note = trusted(r, 'climate') && r.climate ? r.climate : (trusted(r, 'description') ? firstSentences(r.description, 260) : '');
      if (note) regionNotes[l] = note;
    });

    // Uvas: as que têm ficha, as principais de alguma região e as dos seus vinhos (a lista inteira fica grande demais para escolher).
    var grapeNotes = {};
    var grapeNames = grapes.filter(function (g) {
      return principal[g.id] || g.general_profile || g.origin;
    }).map(function (g) {
      var note = trusted(g, 'general_profile') && g.general_profile ? g.general_profile : (trusted(g, 'description') ? g.description : '');
      if (note) grapeNotes[g.name] = firstSentences(note, 320);
      return g.name;
    });

    var profiles = {};
    Repo.where('profiles', { entity_type: 'wine' }).forEach(function (p) { profiles[p.entity_id] = p; });
    var grapesByWine = Util.groupBy(wineGrapes, 'wine_id');
    var producers = Util.indexBy(Repo.all('producers'), 'id');

    var wines = Repo.all('wines').map(function (w) {
      var country = trusted(w, 'country_id') && cById[w.country_id] ? cById[w.country_id].name : '';
      var reg = trusted(w, 'region_id') && rById[w.region_id];
      var sub = trusted(w, 'subregion_id') && rById[w.subregion_id];
      var info = {
        producer: trusted(w, 'producer_id') && producers[w.producer_id] ? producers[w.producer_id].name : '',
        wineName: w.name || '',
        country: country,
        region: reg ? label(reg) : '',
        subregion: sub ? label(sub) : '',
        vintage: trusted(w, 'vintage') && w.vintage ? String(w.vintage) : '',
        alcohol: trusted(w, 'abv') && w.abv ? String(w.abv) : '',
        grapes: (grapesByWine[w.id] || []).filter(function (x) { return x.source !== 'ia_nao_verificada'; })
          .sort(function (a, b) { return (b.percent || 0) - (a.percent || 0); })
          .map(function (x) { return gById[x.grape_id] ? gById[x.grape_id].name : ''; }).filter(Boolean),
        appellation: trusted(w, 'classification') ? appellationOf(w.classification, country) : ''
      };
      var key = {};
      if (trusted(w, 'color') && COLOR[w.color]) key.type = COLOR[w.color];
      var p = profiles[w.id];
      if (p && Catalog.isTrusted(p.source)) {
        Object.keys(SCALE).forEach(function (s) { if (SCALE[s][p[s]]) key[GAME_FIELD[s]] = SCALE[s][p[s]]; });
      }
      return { id: w.id, label: [w.name, w.vintage, info.producer].filter(Boolean).join(' · '), info: info, key: key };
    }).sort(function (a, b) { return byPt(a.label, b.label); });

    return {
      countries: countries.map(function (c) { return c.name; }).sort(byPt),
      regions: tops.sort(byPt),
      subregions: subs.sort(byPt),
      grapes: grapeNames.sort(byPt),
      grapeNotes: grapeNotes,
      regionNotes: regionNotes,
      wines: wines
    };
  }

  /** JSON seguro para colocar dentro de <script>. */
  function json() {
    return JSON.stringify(build()).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  return { build: build, json: json, appellationOf: appellationOf };
})();
