/**
 * Quiz de estudo (múltipla escolha), gerado SÓ com dados da enciclopédia — cada resposta vem com a
 * explicação e o link da fonte. Dois modos:
 *  - depois de uma degustação: perguntas sobre as uvas, regiões e vinhos daquela sessão;
 *  - aleatório (menu Estudar → Quiz): uvas e regiões que têm ficha preenchida.
 * Tipos: país de uma uva, uva principal de uma região, região de uma uva, aroma típico, estrutura típica
 * (acidez, tanino, corpo), uva com que costuma ser confundida (com como diferenciar), pai/mãe por DNA,
 * país de uma região e, no modo degustação, uva/região do vinho provado.
 */
var Quiz = (function () {
  var STRUCT = { acidity: 'acidez', tannin: 'tanino', body: 'corpo' };

  function shuffle(a) { return Util.shuffle(a.slice()); }
  function pickN(list, n, exclude) {
    var ex = {};
    (exclude || []).forEach(function (x) { ex[x] = true; });
    return shuffle(list.filter(function (x) { return !ex[x]; })).slice(0, n);
  }
  function trim(s, max) {
    s = String(s || '').replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    var cut = s.slice(0, max), dot = cut.lastIndexOf('. ');
    return dot > max * 0.5 ? cut.slice(0, dot + 1) : cut.replace(/\s+\S*$/, '') + '…';
  }
  function splitList(s) {
    return String(s || '').split(/[,;]| e /).map(function (x) { return x.replace(/\(.*?\)/g, '').trim(); })
      .filter(function (x) { return x && x.length < 30; });
  }
  function q(type, text, correct, wrong, explain, ref) {
    if (!correct || wrong.length < 2) return null;
    var options = shuffle([correct].concat(wrong.slice(0, 3)));
    return { type: type, question: text, options: options, answer: options.indexOf(correct), explanation: explain || '', source: ref || '' };
  }

  function context() {
    var grapes = Repo.all('grapes');
    var gById = Util.indexBy(grapes, 'id');
    var regions = Repo.all('regions');
    var rById = Util.indexBy(regions, 'id');
    var countries = Util.indexBy(Repo.all('countries'), 'id');
    var rg = Repo.all('region_grapes');
    var aromas = Util.indexBy(Repo.all('aromas'), 'id');
    var grapeAromas = Util.groupBy(Repo.where('entity_aromas', { entity_type: 'grape' }), 'entity_id');
    var profiles = {};
    Repo.where('profiles', { entity_type: 'grape' }).forEach(function (p) { profiles[p.entity_id] = p; });
    var rels = Repo.all('grape_relationships');
    var known = grapes.filter(function (g) { return g.origin || g.main_countries || (grapeAromas[g.id] || []).length; });
    return { grapes: grapes, gById: gById, regions: regions, rById: rById, countries: countries, rg: rg, aromas: aromas,
      grapeAromas: grapeAromas, profiles: profiles, rels: rels, known: known, scales: Settings.scales() };
  }

  function refOf(rec, field) { return (rec.field_refs || {})[field] || rec.source_ref || ''; }
  function topRegion(c, r) { return r && r.parent_id && c.rById[r.parent_id] ? c.rById[r.parent_id] : r; }
  function countryName(c, r) { return r && c.countries[r.country_id] ? c.countries[r.country_id].name : ''; }

  // ---------- Geradores ----------
  function qCountry(c, g) {
    var mine = splitList(g.main_countries);
    if (!mine.length) return null;
    var all = Object.keys(c.countries).map(function (k) { return c.countries[k].name; });
    var wrong = pickN(all, 3, mine);
    return q('pais', 'Em qual destes países a uva ' + g.name + ' tem presença importante?', mine[0], wrong,
      'Principais países: ' + g.main_countries + '. ' + (g.origin ? 'Origem: ' + trim(g.origin, 220) : ''), refOf(g, 'main_countries'));
  }

  function qGrapeOfRegion(c, region) {
    var main = c.rg.filter(function (x) { return x.region_id === region.id && x.role !== 'secundaria'; }).map(function (x) { return c.gById[x.grape_id]; }).filter(Boolean);
    if (!main.length) return null;
    var right = main[Math.floor(Math.random() * main.length)];
    var linked = {};
    c.rg.forEach(function (x) { if (x.region_id === region.id) linked[x.grape_id] = true; });
    var wrong = pickN(c.known.filter(function (g) { return !linked[g.id] && (!right.color || g.color === right.color); }).map(function (g) { return g.name; }), 3);
    return q('regiao-uva', 'Qual destas uvas é uma das principais em ' + region.name + ' (' + countryName(c, region) + ')?', right.name, wrong,
      trim(region.description || region.climate || '', 260), refOf(region, 'description'));
  }

  function qRegionOfGrape(c, g) {
    var regs = c.rg.filter(function (x) { return x.grape_id === g.id && x.role !== 'secundaria'; }).map(function (x) { return c.rById[x.region_id]; }).filter(Boolean);
    if (!regs.length) return null;
    var right = regs[Math.floor(Math.random() * regs.length)];
    var mine = {};
    c.rg.forEach(function (x) { if (x.grape_id === g.id) mine[x.region_id] = true; });
    var label = function (r) { return r.name + ' (' + countryName(c, r) + ')'; };
    var wrong = pickN(c.regions.filter(function (r) { return !mine[r.id] && !r.parent_id; }).map(label), 3);
    return q('uva-regiao', 'Em qual destas regiões a ' + g.name + ' é uma uva principal?', label(right), wrong,
      trim(right.description || '', 220), refOf(right, 'description'));
  }

  function qAroma(c, g) {
    var mine = (c.grapeAromas[g.id] || []).map(function (x) { return c.aromas[x.aroma_id]; }).filter(Boolean);
    if (!mine.length) return null;
    var right = mine[Math.floor(Math.random() * mine.length)];
    var names = {};
    mine.forEach(function (a) { names[a.name] = true; });
    var wrong = pickN(Object.keys(c.aromas).map(function (k) { return c.aromas[k].name; }).filter(function (n) { return !names[n]; }), 3);
    var p = c.profiles[g.id];
    return q('aroma', 'Qual destes aromas é típico da uva ' + g.name + '?', right.name, wrong,
      'Aromas típicos: ' + mine.map(function (a) { return a.name; }).join(', ') + '.' + (p && p.nose_text ? ' ' + p.nose_text : ''),
      (c.grapeAromas[g.id].filter(function (x) { return x.aroma_id === right.id; })[0] || {}).source_ref || refOf(g, 'description'));
  }

  function rangeLabel(levels, v) {
    var r = ScaleUtil.range(levels, v);
    if (!r) return '';
    var at = function (pos) { var l = levels.filter(function (x) { return x.position === pos; })[0]; return l ? l.label : ''; };
    return r.lo === r.hi ? at(r.lo) : at(r.lo) + ' a ' + at(r.hi);
  }

  function qStructure(c, g) {
    var p = c.profiles[g.id];
    if (!p) return null;
    var keys = Object.keys(STRUCT).filter(function (k) { return p[k] && c.scales[k]; });
    if (!keys.length) return null;
    var k = keys[Math.floor(Math.random() * keys.length)];
    var levels = c.scales[k];
    var right = rangeLabel(levels, p[k]);
    var r = ScaleUtil.range(levels, p[k]);
    var wrong = levels.filter(function (l) { return l.position < r.lo || l.position > r.hi; }).map(function (l) { return l.label; });
    return q('estrutura', 'Qual é o ' + (k === 'acidity' ? 'nível de acidez' : k === 'tannin' ? 'nível de tanino' : 'corpo') + ' típico da ' + g.name + '?',
      right, pickN(wrong, 3), (p.nose_text ? p.nose_text + ' ' : '') + 'Perfil típico pela fonte; safra, clima e vinificação podem mudar.', p.source_ref || '');
  }

  function qConfusion(c, g) {
    var rel = c.rels.filter(function (r) { return r.kind === 'confused_with' && (r.grape_a_id === g.id || r.grape_b_id === g.id); });
    if (!rel.length) return null;
    var r = rel[Math.floor(Math.random() * rel.length)];
    var other = c.gById[r.grape_a_id === g.id ? r.grape_b_id : r.grape_a_id];
    if (!other) return null;
    var avoid = rel.map(function (x) { var o = c.gById[x.grape_a_id === g.id ? x.grape_b_id : x.grape_a_id]; return o ? o.name : ''; }).concat([g.name]);
    var wrong = pickN(c.known.filter(function (x) { return x.color === g.color; }).map(function (x) { return x.name; }), 3, avoid);
    return q('confusao', 'Numa degustação às cegas, a ' + g.name + ' costuma ser confundida com qual uva?', other.name, wrong,
      r.how_to_differentiate || '', r.source_ref || '');
  }

  function qParent(c, g) {
    var par = c.rels.filter(function (r) { return r.kind === 'parent_of' && r.grape_b_id === g.id; }).map(function (r) { return c.gById[r.grape_a_id]; }).filter(Boolean);
    if (!par.length) return null;
    var right = par[Math.floor(Math.random() * par.length)];
    var wrong = pickN(c.known.map(function (x) { return x.name; }), 3, par.map(function (x) { return x.name; }).concat([g.name]));
    return q('dna', 'Pela análise de DNA, qual destas uvas é mãe/pai da ' + g.name + '?', right.name, wrong,
      'Pais por DNA: ' + par.map(function (x) { return x.name; }).join(' × ') + '. ' + trim(g.origin || '', 200), refOf(g, 'origin'));
  }

  function qRegionCountry(c, region) {
    var right = countryName(c, region);
    if (!right) return null;
    var wrong = pickN(Object.keys(c.countries).map(function (k) { return c.countries[k].name; }), 3, [right]);
    return q('regiao-pais', 'Em que país fica a região ' + region.name + '?', right, wrong, trim(region.description || '', 220), refOf(region, 'description'));
  }

  var BY_GRAPE = [qCountry, qRegionOfGrape, qAroma, qStructure, qConfusion, qParent];
  var BY_REGION = [qGrapeOfRegion, qRegionCountry];

  /** Gera n perguntas. Com tasting_id, foca nas uvas/regiões/vinhos daquela degustação. */
  function generate(opts) {
    opts = opts || {};
    var n = Math.max(3, Math.min(20, Number(opts.n) || 10));
    var c = context();
    var grapes = [], regions = [], out = [], wineQs = [];

    if (opts.tasting_id) {
      var t = Repo.get('tastings', Validate.id(opts.tasting_id));
      if (!t) throw new Error('Degustação não encontrada.');
      var samples = Repo.where('tasting_samples', { tasting_id: t.id });
      var bottles = Util.indexBy(Repo.all('bottles'), 'id');
      var wg = Util.groupBy(Repo.all('wine_grapes'), 'wine_id');
      samples.forEach(function (s) {
        var b = bottles[s.bottle_id];
        var w = b && Repo.get('wines', b.wine_id);
        if (!w) return;
        (wg[w.id] || []).forEach(function (x) { if (c.gById[x.grape_id]) grapes.push(c.gById[x.grape_id]); });
        var reg = topRegion(c, c.rById[w.subregion_id] || c.rById[w.region_id]);
        if (reg) regions.push(reg);
        // Perguntas sobre o próprio vinho (só depois da revelação).
        if (t.status === 'revelada') {
          var wgList = (wg[w.id] || []).map(function (x) { return c.gById[x.grape_id]; }).filter(Boolean);
          if (wgList.length) {
            wineQs.push(q('vinho', 'A garrafinha #' + b.number + ' era ' + w.name + (w.vintage ? ' ' + w.vintage : '') + '. Qual era a uva principal?',
              wgList[0].name, pickN(c.known.filter(function (x) { return x.color === wgList[0].color; }).map(function (x) { return x.name; }), 3, wgList.map(function (x) { return x.name; })),
              wgList[0].origin ? 'Origem da ' + wgList[0].name + ': ' + trim(wgList[0].origin, 200) : '', refOf(wgList[0], 'origin')));
          }
          if (reg) {
            wineQs.push(q('vinho', 'De qual região era a garrafinha #' + b.number + ' (' + w.name + ')?', reg.name + ' (' + countryName(c, reg) + ')',
              pickN(c.regions.filter(function (r) { return !r.parent_id && r.id !== reg.id; }).map(function (r) { return r.name + ' (' + countryName(c, r) + ')'; }), 3),
              trim(reg.climate || reg.description || '', 220), refOf(reg, 'description')));
          }
        }
      });
    }
    var seenG = {}, seenR = {};
    grapes = grapes.filter(function (g) { return !seenG[g.id] && (seenG[g.id] = true); });
    regions = regions.filter(function (r) { return !seenR[r.id] && (seenR[r.id] = true); });
    if (!grapes.length) grapes = shuffle(c.known).slice(0, Math.ceil(n * 0.7));
    if (!regions.length) regions = shuffle(c.regions.filter(function (r) { return !r.parent_id && r.description; })).slice(0, Math.ceil(n * 0.4));

    wineQs.filter(Boolean).slice(0, Math.ceil(n / 3)).forEach(function (x) { out.push(x); });
    // Rodízio entre tipos e entre uvas/regiões, até completar.
    var tries = 0;
    while (out.length < n && tries < n * 12) {
      tries++;
      var useRegion = regions.length && (tries % 3 === 0 || !grapes.length);
      var item = useRegion ? regions[tries % regions.length] : grapes[tries % grapes.length];
      var gens = useRegion ? BY_REGION : BY_GRAPE;
      var x = gens[Math.floor(Math.random() * gens.length)](c, item);
      if (x && !out.some(function (o) { return o.question === x.question; })) out.push(x);
    }
    return { title: opts.tasting_id ? 'Quiz da degustação' : 'Quiz aleatório', questions: shuffle(out).slice(0, n) };
  }

  return { generate: generate };
})();
