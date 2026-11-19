/**
 * Mapa de uvas: dados para identificar a uva de um vinho por camadas (cor, nariz, boca).
 * Só lê o catálogo comum (uvas, perfis típicos e aromas); nada pessoal. A filtragem é feita no aparelho, em
 * cima desta lista, para o mapa reagir na hora, sem uma chamada ao servidor por clique.
 * Uva sem dado numa camada continua na lista (valor vazio): o cliente a trata como "sem dado", não como descartada.
 */
var GrapeMap = (function () {
  var SCALES = ['color_intensity', 'color_hue', 'acidity', 'tannin', 'body', 'alcohol', 'sweetness'];

  function list() {
    var profiles = {};
    Repo.where('profiles', { entity_type: 'grape' }).forEach(function (p) { profiles[p.entity_id] = p; });
    var aromas = Util.indexBy(Repo.all('aromas'), 'id');
    var byGrape = Util.groupBy(Repo.where('entity_aromas', { entity_type: 'grape' }), 'entity_id');
    var out = Repo.all('grapes').map(function (g) {
      var p = profiles[g.id] || {};
      var prof = {};
      SCALES.forEach(function (k) { if (p[k]) prof[k] = p[k]; });
      var seen = {};
      var ar = (byGrape[g.id] || []).map(function (x) { return aromas[x.aroma_id]; }).filter(function (a) {
        if (!a || seen[a.id]) return false;
        return (seen[a.id] = true);
      }).map(function (a) { return { name: a.name, family: a.subcategory || a.category, category: a.category }; });
      return { id: g.id, name: g.name, color: g.color, profile: prof, aromas: ar, source: p.source || '' };
    }).filter(function (g) { return Object.keys(g.profile).length || g.aromas.length; });
    return out.sort(function (a, b) { return String(a.name).localeCompare(String(b.name), 'pt'); });
  }

  return { list: list };
})();
