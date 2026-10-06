/**
 * Degustações às cegas.
 *
 * Ciclo: create → (getPlay / saveAnswers)* → reveal → getReport.
 * IMPORTANTE: getPlay nunca devolve nada sobre o conteúdo das garrafinhas.
 * O gabarito só sai do servidor em reveal()/getReport() de uma degustação revelada.
 */
var Tastings = (function () {
  var DIFFICULTIES = ['facil', 'medio', 'dificil'];
  var FREE_CRITERIA = {
    clarity: 'scale', texture: 'scale_list', visual_text: 'text', nose_text: 'text', palate_text: 'text',
    style: 'text', producer: 'text', conclusion: 'text'
  };

  // ---------- Criação ----------
  function create(input) {
    input = input || {};
    return Repo.withLock(function () {
      var count = Validate.num(input.count, 1, 12, 'Quantidade de vinhos') || 3;
      var difficulty = Validate.oneOf(input.difficulty || 'medio', DIFFICULTIES, 'dificuldade');
      var f = input.filters || {};
      var filters = {
        color: f.color ? Validate.oneOf(f.color, CONFIG.WINE_COLORS, 'cor') : '',
        grape_ids: Validate.ids(f.grape_ids, 'grapes'),
        country_ids: Validate.ids(f.country_ids, 'countries'),
        region_ids: Validate.ids(f.region_ids, 'regions'),
        wine_ids: Validate.ids(f.wine_ids, 'wines')
      };
      var allowRepeat = !!input.allow_repeat;

      // Garrafinhas escolhidas na adega: usa exatamente essas, na ordem dos números.
      if (Array.isArray(input.bottle_ids) && input.bottle_ids.length) {
        var picked = Validate.ids(input.bottle_ids).filter(function (id, i, a) { return a.indexOf(id) === i; })
          .map(function (id) { return Repo.get('bottles', id); });
        if (picked.length > 12) throw new Error('Escolha no máximo 12 garrafinhas.');
        picked.forEach(function (b) {
          if (!b) throw new Error('Garrafinha não encontrada.');
          if (b.status !== 'disponivel') throw new Error('A garrafinha #' + b.number + ' não está disponível.');
        });
        picked.sort(function (a, b) { return a.number - b.number; });
        return start_(picked, Validate.str(input.title, 200, 'título') ||
          ('Às cegas — garrafinhas ' + picked.map(function (b) { return '#' + b.number; }).join(', ')),
          difficulty, Validate.str(input.theme, 200, 'tema'), { bottle_ids: picked.map(function (b) { return b.id; }) });
      }

      var wines = Util.indexBy(Repo.all('wines'), 'id');
      var wg = Util.groupBy(Repo.all('wine_grapes'), 'wine_id');
      var pool = Repo.all('bottles').filter(function (b) {
        if (b.status !== 'disponivel') return false;
        var w = wines[b.wine_id];
        if (!w) return false;
        if (filters.color && w.color && w.color !== filters.color) return false;
        if (filters.wine_ids.length && filters.wine_ids.indexOf(w.id) < 0) return false;
        if (filters.country_ids.length && filters.country_ids.indexOf(w.country_id) < 0) return false;
        if (filters.region_ids.length && filters.region_ids.indexOf(w.region_id) < 0 && filters.region_ids.indexOf(w.subregion_id) < 0) return false;
        if (filters.grape_ids.length) {
          var gs = (wg[w.id] || []).map(function (x) { return x.grape_id; });
          if (!gs.some(function (g) { return filters.grape_ids.indexOf(g) >= 0; })) return false;
        }
        return true;
      });
      var byWine = Util.groupBy(pool, 'wine_id');
      var wineIds = Util.shuffle(Object.keys(byWine));
      if (!wineIds.length) throw new Error('Nenhuma garrafinha disponível com esses filtros.');
      if (wineIds.length < count && !allowRepeat) {
        throw new Error('Só há ' + wineIds.length + ' vinho(s) diferente(s) disponível(is) com esses filtros. ' +
          'Reduza a quantidade ou permita repetir vinhos.');
      }
      var chosen = [];
      wineIds.slice(0, count).forEach(function (wid) { chosen.push(Util.shuffle(byWine[wid])[0]); });
      if (chosen.length < count) {
        var rest = Util.shuffle(pool.filter(function (b) { return chosen.indexOf(b) < 0; }));
        chosen = chosen.concat(rest.slice(0, count - chosen.length));
      }
      if (chosen.length < count) throw new Error('Garrafinhas insuficientes para ' + count + ' vinhos.');
      chosen = Util.shuffle(chosen);

      var theme = Validate.str(input.theme, 200, 'tema');
      var title = Validate.str(input.title, 200, 'título') ||
        ('Degustação às cegas — ' + count + ' vinho' + (count > 1 ? 's' : '') +
          (filters.color ? ' ' + ({ tinto: 'tintos', branco: 'brancos', rose: 'rosés', laranja: 'laranja' }[filters.color] || '') : ''));
      return start_(chosen, title, difficulty, theme, filters);
    });
  }

  function start_(chosen, title, difficulty, theme, filters) {
    var tasting = Repo.insert('tastings', [{
      title: title, date: Util.nowIso(), status: 'em_andamento', difficulty: difficulty, theme: theme,
      filters: filters, source: 'usuario'
    }])[0];
    Repo.insert('tasting_samples', chosen.map(function (b, i) {
      return { tasting_id: tasting.id, bottle_id: b.id, position: i + 1, completed: false, source: 'usuario' };
    }));
    Repo.update('bottles', chosen.map(function (b) { return { id: b.id, status: 'reservada', status_changed_at: Util.nowIso() }; }));
    return { id: tasting.id };
  }

  // ---------- Jogo ----------
  function getPlay(id) {
    var t = Repo.get('tastings', Validate.id(id));
    if (!t) throw new Error('Degustação não encontrada.');
    if (t.status === 'revelada') return { revealed: true, id: t.id };
    if (t.status === 'cancelada') throw new Error('Esta degustação foi cancelada.');
    var samples = samples_(t.id);
    var bottles = Util.indexBy(Repo.all('bottles'), 'id');
    var answers = Util.groupBy(Repo.where('tasting_answers', { tasting_id: t.id }), 'sample_id');
    return {
      id: t.id, title: t.title, difficulty: t.difficulty, status: t.status, theme: t.theme, date: t.date,
      samples: samples.map(function (s) {
        var ans = {};
        (answers[s.id] || []).forEach(function (a) { ans[a.criterion] = { value: a.value, value_json: a.value_json }; });
        return { id: s.id, position: s.position, number: bottles[s.bottle_id] ? bottles[s.bottle_id].number : '?',
          completed: s.completed, answers: ans };
      }),
      options: options_(t, samples, bottles)
    };
  }

  /** Opções dos seletores conforme a dificuldade. Sempre em ordem alfabética (nada vaza pela ordem). */
  function options_(t, samples, bottles) {
    var allGrapes = Repo.all('grapes');
    var grapeIds;
    if (t.difficulty === 'dificil') {
      grapeIds = allGrapes.map(function (g) { return g.id; });
    } else {
      var wg = Util.groupBy(Repo.all('wine_grapes'), 'wine_id');
      var sessionGrapes = [];
      samples.forEach(function (s) {
        var b = bottles[s.bottle_id];
        (wg[b && b.wine_id] || []).forEach(function (x) { if (sessionGrapes.indexOf(x.grape_id) < 0) sessionGrapes.push(x.grape_id); });
      });
      var pool;
      if (t.difficulty === 'facil') {
        var distractors = Util.shuffle(allGrapes.map(function (g) { return g.id; }).filter(function (g) { return sessionGrapes.indexOf(g) < 0; }))
          .slice(0, Math.max(3, sessionGrapes.length));
        pool = sessionGrapes.concat(distractors);
      } else {
        pool = sessionGrapes.slice();
        Repo.all('bottles').forEach(function (b) {
          if (b.status !== 'disponivel' && b.status !== 'reservada') return;
          (wg[b.wine_id] || []).forEach(function (x) { if (pool.indexOf(x.grape_id) < 0) pool.push(x.grape_id); });
        });
      }
      grapeIds = pool;
    }
    var gIdx = Util.indexBy(allGrapes, 'id');
    return {
      grapes: grapeIds.map(function (id) { return gIdx[id]; }).filter(Boolean)
        .map(function (g) { return { id: g.id, name: g.name }; })
        .sort(function (a, b) { return String(a.name).localeCompare(String(b.name), 'pt'); }),
      grapes_restricted: t.difficulty !== 'dificil'
    };
  }

  function samples_(tastingId) {
    return Repo.where('tasting_samples', { tasting_id: tastingId }).sort(function (a, b) { return a.position - b.position; });
  }

  function allowedCriteria_() {
    var o = {};
    Settings.rules().forEach(function (r) { o[r.criterion] = r; });
    return o;
  }

  function validateAnswer_(criterion, a, rules, scales) {
    var rule = rules[criterion];
    var kind = FREE_CRITERIA[criterion];
    var value = '', valueJson = null;
    if (rule) {
      switch (rule.compare) {
        case 'hypothesis': valueJson = Validate.ids((a.value_json || []).slice(0, 3), 'grapes'); break;
        case 'hierarchical': value = Validate.id(a.value, 'regions'); break;
        case 'numeric': value = Validate.num(a.value, 0, 3000, rule.label); value = value === '' ? '' : String(value); break;
        case 'set_overlap': valueJson = Validate.ids((a.value_json || []).slice(0, 40), 'aromas'); break;
        case 'exact':
          if (criterion === 'country') value = Validate.id(a.value, 'countries');
          else value = scaleKey_(scales, rule.scale || criterion, a.value);
          break;
        case 'ordinal': value = scaleKey_(scales, rule.scale, a.value); break;
      }
    } else if (kind === 'scale') {
      value = scaleKey_(scales, criterion, a.value);
    } else if (kind === 'scale_list') {
      valueJson = (a.value_json || []).slice(0, 10).map(function (v) { return scaleKey_(scales, criterion, v); }).filter(Boolean);
    } else if (kind === 'text') {
      value = Validate.str(a.value, 3000, criterion);
    } else {
      throw new Error('Critério desconhecido: ' + criterion);
    }
    return { value: value, value_json: valueJson };
  }

  function scaleKey_(scales, scale, v) {
    if (Util.isBlank(v)) return '';
    if (ScaleUtil.position(scales[scale], v) === null) throw new Error('Valor inválido para ' + scale + ': ' + v);
    return v;
  }

  /** Salva (upsert) as respostas de uma garrafinha. answers = {criterion: {value, value_json}} */
  function saveAnswers(sampleId, answers, completed) {
    var s = Repo.get('tasting_samples', Validate.id(sampleId));
    if (!s) throw new Error('Amostra não encontrada.');
    var t = Repo.get('tastings', s.tasting_id);
    if (t.status !== 'em_andamento' && t.status !== 'aguardando_revelacao') throw new Error('Esta degustação não aceita mais respostas.');
    var rules = allowedCriteria_(), scales = Settings.scales();
    var existing = Util.indexBy(Repo.where('tasting_answers', { sample_id: s.id }), 'criterion');
    var inserts = [], updates = [];
    Object.keys(answers || {}).slice(0, 60).forEach(function (c) {
      var clean = validateAnswer_(c, answers[c] || {}, rules, scales);
      if (existing[c]) {
        if (existing[c].value !== clean.value || JSON.stringify(existing[c].value_json) !== JSON.stringify(clean.value_json)) {
          updates.push({ id: existing[c].id, value: clean.value, value_json: clean.value_json });
        }
      } else if (clean.value !== '' || (clean.value_json && clean.value_json.length)) {
        inserts.push({ tasting_id: t.id, sample_id: s.id, criterion: c, value: clean.value, value_json: clean.value_json, source: 'usuario' });
      }
    });
    Repo.insert('tasting_answers', inserts);
    Repo.update('tasting_answers', updates);
    if (completed !== undefined && !!completed !== !!s.completed) Repo.update('tasting_samples', [{ id: s.id, completed: !!completed }]);
    return { saved: inserts.length + updates.length };
  }

  // ---------- Revelação ----------
  function reveal(id) {
    return Repo.withLock(function () {
      var t = Repo.get('tastings', Validate.id(id));
      if (!t) throw new Error('Degustação não encontrada.');
      if (t.status === 'revelada') return getReport(id);
      if (t.status === 'cancelada') throw new Error('Degustação cancelada.');

      var rules = Settings.rules();
      var scales = Settings.scales();
      var th = String(Settings.get('alcohol_thresholds', '11,14')).split(',').map(Util.parseNumber);
      var settings = {
        near_credit: Settings.getNumber('near_credit', 0.5),
        aroma_subcategory_credit: Settings.getNumber('aroma_subcategory_credit', 0.5),
        alcohol_thresholds: th.length === 2 && th[0] !== null && th[1] !== null ? th : [11, 14]
      };
      var regions = {};
      Repo.all('regions').forEach(function (r) { regions[r.id] = { parent_id: r.parent_id, country_id: r.country_id }; });
      var aromas = {};
      Repo.all('aromas').forEach(function (a) { aromas[a.id] = { subcategory: a.subcategory }; });
      var bottles = Util.indexBy(Repo.all('bottles'), 'id');
      var answers = Util.groupBy(Repo.where('tasting_answers', { tasting_id: t.id }), 'sample_id');
      var now = Util.nowIso();
      var resultRows = [], samplePatches = [], scores = [];

      samples_(t.id).forEach(function (s) {
        var b = bottles[s.bottle_id];
        var truth = truthFor_(b.wine_id);
        var ans = {};
        (answers[s.id] || []).forEach(function (a) { ans[a.criterion] = { value: a.value, value_json: a.value_json }; });
        var r = Scoring.scoreSample({ rules: rules, scales: scales, settings: settings, answers: ans, truth: truth, regions: regions, aromas: aromas });
        r.results.forEach(function (x) {
          resultRows.push({
            tasting_id: t.id, sample_id: s.id, wine_id: b.wine_id, criterion: x.criterion,
            given: stringify_(x.given), expected: stringify_(x.expected), state: x.state,
            points: x.points, max_points: x.max_points, grape_ids: truth.grape_ids,
            country_id: truth.country_id, region_id: truth.region_id, date: t.date, source: 'sistema'
          });
        });
        samplePatches.push({ id: s.id, score: r.score === null ? '' : r.score });
        if (r.score !== null) scores.push(r.score);
      });

      Repo.insert('tasting_results', resultRows);
      Repo.update('tasting_samples', samplePatches);
      var score = scores.length ? Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length * 10) / 10 : '';
      Repo.update('tastings', [{ id: t.id, status: 'revelada', revealed_at: now, score: score,
        scoring_snapshot: { rules: rules.map(function (r) { return { criterion: r.criterion, weight: r.weight, compare: r.compare, params: r.params, active: r.active }; }), settings: settings } }]);
      var used = samples_(t.id).map(function (s) { return { id: s.bottle_id, status: 'utilizada', status_changed_at: now }; });
      Repo.update('bottles', used);
      return getReport(id);
    });
  }

  function stringify_(v) {
    if (v === null || v === undefined) return '';
    return Array.isArray(v) ? JSON.stringify(v) : String(v);
  }

  /** Gabarito de um vinho: fatos do rótulo + perfil/aromas somente se de fonte confiável. */
  function truthFor_(wineId) {
    var w = Repo.get('wines', wineId) || {};
    // Campo vindo de IA sem revisão (ex.: foto do rótulo lida pela IA) não vale como gabarito.
    var fs = w.field_sources || {};
    function ok(col) { return fs[col] !== 'ia_nao_verificada'; }
    var grapes = Repo.where('wine_grapes', { wine_id: wineId })
      .filter(function (x) { return x.source !== 'ia_nao_verificada'; })
      .sort(function (a, b) { return (b.percent || 0) - (a.percent || 0); })
      .map(function (x) { return x.grape_id; });
    var profile = Catalog.profileOf('wine', wineId);
    var trusted = profile ? Catalog.isTrusted(profile.source) : false;
    var aromaIds = Repo.where('entity_aromas', function (x) {
      return x.entity_type === 'wine' && x.entity_id === wineId && Catalog.isTrusted(x.source);
    }).map(function (x) { return x.aroma_id; });
    return {
      grape_ids: grapes, country_id: ok('country_id') && w.country_id || '',
      region_id: (ok('subregion_id') && w.subregion_id) || (ok('region_id') && w.region_id) || '',
      vintage: ok('vintage') ? w.vintage : '', abv: ok('abv') ? w.abv : '', profile: profile, profile_trusted: trusted,
      aroma_ids: aromaIds, aromas_trusted: aromaIds.length > 0
    };
  }

  // ---------- Relatório ----------
  function getReport(id) {
    var t = Repo.get('tastings', Validate.id(id));
    if (!t) throw new Error('Degustação não encontrada.');
    if (t.status !== 'revelada') throw new Error('Esta degustação ainda não foi revelada.');
    var L = Labels.build();
    var bottles = Util.indexBy(Repo.all('bottles'), 'id');
    var results = Util.groupBy(Repo.where('tasting_results', { tasting_id: t.id }), 'sample_id');
    var answers = Util.groupBy(Repo.where('tasting_answers', { tasting_id: t.id }), 'sample_id');
    var rules = Util.indexBy(Settings.rules(), 'criterion');
    var allResults = [];
    var lessonCtx = Lessons.context();

    var samples = samples_(t.id).map(function (s) {
      var b = bottles[s.bottle_id] || {};
      var w = Wines.get(b.wine_id);
      var rs = (results[s.id] || []).sort(function (a, c) { return (rules[a.criterion] ? rules[a.criterion].order : 99) - (rules[c.criterion] ? rules[c.criterion].order : 99); });
      allResults = allResults.concat(rs);
      var free = {};
      (answers[s.id] || []).forEach(function (a) { if (FREE_CRITERIA[a.criterion]) free[a.criterion] = a.value_json || a.value; });
      return {
        id: s.id, position: s.position, number: b.number, score: s.score,
        wine: {
          id: w.id, name: w.name, producer: w.producer, vintage: w.vintage, country: w.country, region: w.region,
          abv: w.abv, grapes: w.grapes, profile: w.profile, profile_trusted: w.profile_trusted,
          aromas: w.aromas.map(function (a) { return a.name; })
        },
        results: rs.map(function (r) {
          return {
            criterion: r.criterion, label: rules[r.criterion] ? rules[r.criterion].label : r.criterion,
            group: rules[r.criterion] ? rules[r.criterion].group : '',
            state: r.state, points: r.points, max_points: r.max_points,
            given: L.display(r.criterion, r.given), expected: L.display(r.criterion, r.expected)
          };
        }),
        free: free,
        lessons: Lessons.forSample(lessonCtx, rs)
      };
    });

    var agg = Scoring.aggregate(allResults, Settings.getNumber('near_credit', 0.5)).map(function (a) {
      return Object.assign(a, { label: rules[a.criterion] ? rules[a.criterion].label : a.criterion });
    });
    var ranked = agg.filter(function (a) { return a.total > 0; }).sort(function (a, b) { return b.rate - a.rate; });
    var toStudy = [];
    samples.forEach(function (s) {
      s.results.forEach(function (r) {
        if (r.state !== 'miss') return;
        if (r.criterion === 'grape') s.wine.grapes.forEach(function (g) { toStudy.push('Uva: ' + g.name); });
        if (r.criterion === 'region' && s.wine.region) toStudy.push('Região: ' + s.wine.region);
        if (r.criterion === 'country' && s.wine.country) toStudy.push('País: ' + s.wine.country);
      });
    });

    return {
      id: t.id, title: t.title, date: t.date, difficulty: t.difficulty, score: t.score, status: t.status,
      samples: samples,
      aggregate: agg,
      strengths: ranked.filter(function (a) { return a.rate >= 70; }).slice(0, 3).map(function (a) { return a.label; }),
      weaknesses: ranked.filter(function (a) { return a.rate < 50; }).reverse().slice(0, 3).map(function (a) { return a.label; }),
      to_study: toStudy.filter(function (x, i) { return toStudy.indexOf(x) === i; }),
      unscored: agg.length ? [] : ['Nenhum critério pôde ser corrigido.']
    };
  }

  function cancel(id) {
    return Repo.withLock(function () {
      var t = Repo.get('tastings', Validate.id(id));
      if (!t) throw new Error('Degustação não encontrada.');
      if (t.status === 'revelada') throw new Error('Degustações reveladas não podem ser canceladas.');
      var ids = samples_(t.id).map(function (s) { return s.bottle_id; });
      Repo.update('bottles', ids.map(function (bid) { return { id: bid, status: 'disponivel', status_changed_at: Util.nowIso() }; }));
      Repo.update('tastings', [{ id: t.id, status: 'cancelada' }]);
      return true;
    });
  }

  function list() {
    var samples = Util.groupBy(Repo.all('tasting_samples'), 'tasting_id');
    return Repo.all('tastings').map(function (t) {
      return { id: t.id, title: t.title, date: t.date, status: t.status, score: t.score, difficulty: t.difficulty,
        count: (samples[t.id] || []).length };
    }).sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
  }

  return { create: create, getPlay: getPlay, saveAnswers: saveAnswers, reveal: reveal, getReport: getReport, cancel: cancel, list: list };
})();

/** Converte ids/chaves em rótulos legíveis para relatórios. */
var Labels = (function () {
  function build() {
    var names = {};
    ['grapes', 'regions', 'countries', 'aromas'].forEach(function (e) {
      Repo.all(e).forEach(function (r) { names[r.id] = r.name; });
    });
    var scales = Settings.scales();
    var rules = Util.indexBy(Settings.rules(), 'criterion');
    function one(criterion, v) {
      if (v === '' || v === null || v === undefined) return '';
      if (names[v]) return names[v];
      var rule = rules[criterion];
      var scale = rule && rule.scale ? rule.scale : criterion;
      if (scales[scale]) return ScaleUtil.label(scales[scale], v);
      return String(v);
    }
    return {
      display: function (criterion, raw) {
        if (raw === '' || raw === null || raw === undefined) return '';
        var v = raw;
        if (typeof raw === 'string' && raw.charAt(0) === '[') { try { v = JSON.parse(raw); } catch (e) { v = raw; } }
        if (Array.isArray(v)) return v.map(function (x) { return one(criterion, x); }).join(', ');
        return one(criterion, v);
      }
    };
  }
  return { build: build };
})();
