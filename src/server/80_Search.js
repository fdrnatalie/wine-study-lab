/**
 * Busca global: procura o termo (sem acento/maiúsculas) em todas as entidades
 * e devolve os resultados agrupados, com o "porquê" de cada correspondência.
 */
var Search = (function () {

  function run(query) {
    var q = Util.normKey(Validate.str(query, 100, 'busca'));
    if (q.length < 2) return [];
    function has(s) { return Util.normKey(s).indexOf(q) >= 0; }
    var out = [];
    var grapes = Repo.all('grapes'), regions = Repo.all('regions'), countries = Repo.all('countries');
    var gIdx = Util.indexBy(grapes, 'id'), rIdx = Util.indexBy(regions, 'id');
    var wineGrapes = Util.groupBy(Repo.all('wine_grapes'), 'wine_id');
    var producers = Util.indexBy(Repo.all('producers'), 'id');

    grapes.forEach(function (g) {
      var syn = (g.synonyms || []).join(' ');
      if (has(g.name)) out.push(hit_('grape', g.id, g.name, 'Uva'));
      else if (has(syn)) out.push(hit_('grape', g.id, g.name, 'Uva · sinônimo'));
    });
    Repo.all('wines').forEach(function (w) {
      var gnames = (wineGrapes[w.id] || []).map(function (x) { return gIdx[x.grape_id] ? gIdx[x.grape_id].name : ''; }).join(' ');
      var region = rIdx[w.region_id] ? rIdx[w.region_id].name : '';
      var prod = producers[w.producer_id] ? producers[w.producer_id].name : '';
      var why = has(w.name) ? 'Vinho' : has(gnames) ? 'Vinho · uva ' + gnames : has(region) ? 'Vinho · região ' + region : has(prod) ? 'Vinho · produtor ' + prod : '';
      if (why) out.push(hit_('wine', w.id, w.name + (w.vintage ? ' ' + w.vintage : ''), why));
    });
    regions.forEach(function (r) { if (has(r.name)) out.push(hit_('region', r.id, r.name, r.parent_id ? 'Sub-região' : 'Região')); });
    countries.forEach(function (c) { if (has(c.name)) out.push(hit_('country', c.id, c.name, 'País')); });
    Repo.all('producers').forEach(function (p) { if (has(p.name)) out.push(hit_('producer', p.id, p.name, 'Produtor')); });
    Repo.all('appellations').forEach(function (a) { if (has(a.name)) out.push(hit_('appellation', a.id, a.name, 'Denominação')); });
    Repo.all('aromas').forEach(function (a) { if (has(a.name)) out.push(hit_('aroma', a.id, a.name, 'Aroma · ' + a.category)); });
    Repo.all('notes').forEach(function (n) {
      if (has(n.title) || has(n.body)) out.push(hit_('note', n.id, n.title, 'Nota'));
    });
    Repo.all('grape_relationships').forEach(function (r) {
      var a = gIdx[r.grape_a_id], b = gIdx[r.grape_b_id];
      if (a && b && (has(a.name) || has(b.name))) {
        out.push(hit_('grape', has(a.name) ? b.id : a.id, a.name + (r.kind === 'parent_of' ? ' → ' : ' ↔ ') + b.name, 'Relação entre uvas'));
      }
    });
    Tastings.list().forEach(function (t) { if (has(t.title)) out.push(hit_('tasting', t.id, t.title, 'Degustação')); });
    return out.slice(0, 80);
  }

  function hit_(type, id, title, why) { return { type: type, id: id, title: title, why: why }; }

  return { run: run };
})();
