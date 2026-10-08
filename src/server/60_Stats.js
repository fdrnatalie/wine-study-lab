/**
 * Estatísticas do dashboard. Tudo calculado a partir de db_tasting_results
 * (uma linha por critério corrigido), sem reprocessar degustações.
 */
var Stats = (function () {

  function dashboard() {
    var nearCredit = Settings.getNumber('near_credit', 0.5);
    var rules = Util.indexBy(Settings.rules(), 'criterion');
    var tastings = Repo.all('tastings').filter(function (t) { return t.status === 'revelada'; })
      .sort(function (a, b) { return String(a.date).localeCompare(String(b.date)); });
    var results = Repo.all('tasting_results');
    var bottles = Repo.all('bottles');
    var grapesInWines = {};
    Repo.all('wine_grapes').forEach(function (x) { grapesInWines[x.grape_id] = true; });
    var regionsUsed = {};
    Repo.all('wines').forEach(function (w) { if (w.region_id) regionsUsed[w.region_id] = true; });

    var byCriterion = Scoring.aggregate(results.filter(function (r) { return r.max_points > 0; }), nearCredit)
      .map(function (a) { return Object.assign(a, { label: rules[a.criterion] ? rules[a.criterion].label : a.criterion, group: rules[a.criterion] ? rules[a.criterion].group : '' }); })
      .filter(function (a) { return a.total >= 1; })
      .sort(function (a, b) { return b.rate - a.rate; });

    var byGroup = {};
    byCriterion.forEach(function (a) {
      var g = byGroup[a.group] = byGroup[a.group] || { group: a.group, hit: 0, near: 0, miss: 0, total: 0 };
      g.hit += a.hit; g.near += a.near; g.miss += a.miss; g.total += a.total;
    });
    var groups = Object.keys(byGroup).map(function (k) {
      var g = byGroup[k];
      g.rate = g.total ? Math.round((g.hit + g.near * nearCredit) / g.total * 1000) / 10 : null;
      return g;
    }).sort(function (a, b) { return b.rate - a.rate; });

    var scored = tastings.filter(function (t) { return t.score !== '' && t.score !== null; });
    var avg = scored.length ? Math.round(scored.reduce(function (s, t) { return s + t.score; }, 0) / scored.length * 10) / 10 : null;

    return {
      counts: {
        wines: Repo.all('wines').length,
        grapes: Repo.all('grapes').length,
        grapes_in_wines: Object.keys(grapesInWines).length,
        regions: Object.keys(regionsUsed).length,
        tastings: tastings.length,
        bottles_available: bottles.filter(function (b) { return b.status === 'disponivel' || b.status === 'em_uso'; }).length,
        bottles_total: bottles.length,
        notes: Repo.all('notes').length,
        ai_pending: Ctx.isAdmin() ? Enrichment.pendingCount() : 0
      },
      avg_score: avg,
      series: scored.map(function (t) { return { date: t.date, score: t.score, id: t.id }; }),
      criteria: byCriterion,
      groups: groups,
      best: groups.length ? groups[0] : null,
      worst: groups.length > 1 ? groups[groups.length - 1] : null,
      recent: Tastings.list().slice(0, 5),
      in_progress: Tastings.list().filter(function (t) { return t.status === 'em_andamento' || t.status === 'aguardando_revelacao'; }),
      last_sync_at: Settings.get('last_sync_at', '')
    };
  }

  return { dashboard: dashboard };
})();
