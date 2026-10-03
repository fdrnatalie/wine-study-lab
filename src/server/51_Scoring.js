/**
 * Motor de correção das degustações às cegas. Puro: não acessa o Sheets.
 *
 * Estados: hit (🟢 acerto), near (🟡 próximo), miss (🔴 erro),
 *          no_ref (sem gabarito confiável → não entra na nota).
 *
 * Tipos de comparação (coluna `compare` em db_scoring_rules):
 *  - hypothesis   : lista ordenada de palpites; 1º palpite certo = hit, outro palpite certo = near.
 *  - hierarchical : região; mesma região ou região-mãe/filha = hit, mesmo país = near.
 *  - exact        : igualdade.
 *  - numeric      : |palpite − gabarito| ≤ params.hit → hit; ≤ params.near → near.
 *  - ordinal      : distância entre níveis da escala; 0 = hit; ≤ params.near = near.
 *  - set_overlap  : aromas; crédito 1 por aroma exato, crédito parcial por mesma subcategoria;
 *                   razão = crédito / max(nº do gabarito, nº de palpites). ≥ params.hit = hit, ≥ params.near = near.
 *                   Pontos proporcionais à razão.
 */
var Scoring = (function () {

  /**
   * @param ctx {
   *   rules: [{criterion, weight, compare, scale, params, active}],
   *   scales: {scale: [{key, position}]},
   *   settings: {near_credit, aroma_subcategory_credit, alcohol_thresholds: [lo, hi]},
   *   answers: {criterion: {value, value_json}},
   *   truth: {grape_ids, country_id, region_id, vintage, abv, aroma_ids, profile, profile_trusted, aromas_trusted},
   *   regions: {id: {parent_id, country_id}},
   *   aromas: {id: {subcategory}}
   * }
   */
  function scoreSample(ctx) {
    var results = [];
    var nearCredit = num(ctx.settings.near_credit, 0.5);
    ctx.rules.forEach(function (rule) {
      if (!rule.active) return;
      var ans = ctx.answers[rule.criterion] || {};
      var r = compare_(rule, ans, ctx);
      var weight = num(rule.weight, 0);
      var points = 0;
      if (r.state === 'hit') points = weight;
      else if (r.state === 'near') points = weight * nearCredit;
      if (rule.compare === 'set_overlap' && r.ratio !== undefined && r.state !== 'no_ref') points = weight * Math.min(1, r.ratio);
      results.push({
        criterion: rule.criterion, state: r.state, given: r.given, expected: r.expected,
        points: round2(r.state === 'no_ref' ? 0 : points),
        max_points: r.state === 'no_ref' ? 0 : weight,
        detail: r.detail || null
      });
    });
    var got = 0, max = 0;
    results.forEach(function (x) { got += x.points; max += x.max_points; });
    return { results: results, points: round2(got), max_points: max, score: max ? round2(got / max * 100) : null };
  }

  function compare_(rule, ans, ctx) {
    var t = ctx.truth, p = rule.params || {};
    switch (rule.compare) {
      case 'hypothesis': {
        var guesses = listOf(ans);
        if (!t.grape_ids || !t.grape_ids.length) return { state: 'no_ref', given: guesses, expected: [] };
        if (!guesses.length) return { state: 'miss', given: [], expected: t.grape_ids };
        if (t.grape_ids.indexOf(guesses[0]) >= 0) return { state: 'hit', given: guesses, expected: t.grape_ids };
        for (var i = 1; i < guesses.length; i++) if (t.grape_ids.indexOf(guesses[i]) >= 0) return { state: 'near', given: guesses, expected: t.grape_ids, detail: 'Acertou em um palpite secundário' };
        return { state: 'miss', given: guesses, expected: t.grape_ids };
      }
      case 'hierarchical': {
        var g = ans.value || '';
        if (!t.region_id) return { state: 'no_ref', given: g, expected: '' };
        if (!g) return { state: 'miss', given: '', expected: t.region_id };
        if (g === t.region_id || isAncestor_(ctx.regions, g, t.region_id) || isAncestor_(ctx.regions, t.region_id, g)) {
          return { state: 'hit', given: g, expected: t.region_id };
        }
        var gc = ctx.regions[g] && ctx.regions[g].country_id;
        if (gc && gc === t.country_id) return { state: 'near', given: g, expected: t.region_id, detail: 'País correto, região diferente' };
        return { state: 'miss', given: g, expected: t.region_id };
      }
      case 'exact': {
        var exp = expectedFor_(rule.criterion, ctx);
        var gv = ans.value || '';
        if (exp === null || exp === '') return { state: 'no_ref', given: gv, expected: '' };
        if (!gv) return { state: 'miss', given: '', expected: exp };
        return { state: gv === exp ? 'hit' : 'miss', given: gv, expected: exp };
      }
      case 'numeric': {
        var e = expectedFor_(rule.criterion, ctx);
        var n = parseNum(ans.value);
        if (e === null || e === '' || isNaN(e)) return { state: 'no_ref', given: n, expected: null };
        if (n === null) return { state: 'miss', given: null, expected: e };
        var d = Math.abs(n - e);
        var st = d <= num(p.hit, 0) + 1e-9 ? 'hit' : (d <= num(p.near, 0) + 1e-9 ? 'near' : 'miss');
        return { state: st, given: n, expected: e };
      }
      case 'ordinal': {
        var levels = ctx.scales[rule.scale];
        var ek = expectedFor_(rule.criterion, ctx);
        var gk = ans.value || '';
        if (!ek) return { state: 'no_ref', given: gk, expected: '' };
        if (!gk) return { state: 'miss', given: '', expected: ek };
        var ep = ScaleUtil.position(levels, ek), gp = ScaleUtil.position(levels, gk);
        if (ep === null || gp === null) return { state: 'no_ref', given: gk, expected: ek };
        var dist = Math.abs(ep - gp);
        return { state: dist === 0 ? 'hit' : (dist <= num(p.near, 1) ? 'near' : 'miss'), given: gk, expected: ek };
      }
      case 'set_overlap': {
        var guessed = listOf(ans);
        if (!t.aromas_trusted || !t.aroma_ids || !t.aroma_ids.length) return { state: 'no_ref', given: guessed, expected: [] };
        var subCredit = num(ctx.settings.aroma_subcategory_credit, 0.5);
        var credit = 0, exact = 0, partial = 0;
        t.aroma_ids.forEach(function (aid) {
          if (guessed.indexOf(aid) >= 0) { credit += 1; exact++; return; }
          var sub = ctx.aromas[aid] && ctx.aromas[aid].subcategory;
          for (var j = 0; j < guessed.length; j++) {
            var gs = ctx.aromas[guessed[j]] && ctx.aromas[guessed[j]].subcategory;
            if (sub && gs === sub && t.aroma_ids.indexOf(guessed[j]) < 0) { credit += subCredit; partial++; return; }
          }
        });
        var ratio = guessed.length ? credit / Math.max(t.aroma_ids.length, guessed.length) : 0;
        var s = ratio >= num(p.hit, 0.6) ? 'hit' : (ratio >= num(p.near, 0.3) ? 'near' : 'miss');
        return { state: s, given: guessed, expected: t.aroma_ids, ratio: ratio,
          detail: exact + ' exato(s), ' + partial + ' parcial(is) de ' + t.aroma_ids.length };
      }
      default:
        return { state: 'no_ref', given: ans.value || '', expected: '' };
    }
  }

  /** Gabarito de um critério. Estrutura sensorial só vale se o perfil for de fonte confiável. */
  function expectedFor_(criterion, ctx) {
    var t = ctx.truth;
    switch (criterion) {
      case 'country': return t.country_id || '';
      case 'vintage': return t.vintage === '' || t.vintage === undefined ? null : parseNum(t.vintage);
      case 'abv': return t.abv === '' || t.abv === undefined ? null : parseNum(t.abv);
      case 'alcohol':
        // Derivado do teor alcoólico do rótulo (fato), não do perfil sensorial.
        var abv = parseNum(t.abv);
        if (abv === null) return '';
        var th = ctx.settings.alcohol_thresholds || [11, 14];
        return abv < th[0] ? 'baixo' : (abv < th[1] ? 'medio' : 'alto');
      default:
        if (!t.profile_trusted || !t.profile) return '';
        return t.profile[criterion] || '';
    }
  }

  function isAncestor_(regions, ancestorId, id) {
    var guard = 0, cur = regions[id];
    while (cur && cur.parent_id && guard++ < 20) {
      if (cur.parent_id === ancestorId) return true;
      cur = regions[cur.parent_id];
    }
    return false;
  }

  /**
   * Agrega resultados (de uma degustação ou do histórico) por critério.
   * Retorna [{criterion, hit, near, miss, total, rate}] — rate = (hit + near*credit) / total.
   */
  function aggregate(results, nearCredit) {
    var by = {};
    results.forEach(function (r) {
      if (r.state === 'no_ref') return;
      var a = by[r.criterion] = by[r.criterion] || { criterion: r.criterion, hit: 0, near: 0, miss: 0, total: 0 };
      a[r.state]++;
      a.total++;
    });
    return Object.keys(by).map(function (k) {
      var a = by[k];
      a.rate = a.total ? round2((a.hit + a.near * num(nearCredit, 0.5)) / a.total * 100) : null;
      return a;
    });
  }

  function listOf(ans) {
    if (Array.isArray(ans.value_json)) return ans.value_json.filter(Boolean);
    if (ans.value) return [ans.value];
    return [];
  }
  function num(v, d) { var n = parseFloat(v); return isNaN(n) ? d : n; }
  function parseNum(v) {
    if (v === null || v === undefined || v === '') return null;
    var n = typeof v === 'number' ? v : parseFloat(String(v).replace(',', '.'));
    return isNaN(n) ? null : n;
  }
  function round2(n) { return Math.round(n * 100) / 100; }

  return { scoreSample: scoreSample, aggregate: aggregate };
})();
