/**
 * "O que aprender" no resultado da degustação às cegas.
 *
 * Para cada garrafa revelada, explica os erros (e dá uma dica nos acertos) usando SÓ dados da
 * enciclopédia — nada é inventado:
 *  - uvas: pares "costuma ser confundida com" (com como diferenciar), parentesco por DNA,
 *          aromas típicos em comum, como reconhecer a uva certa;
 *  - região/país: a uva do vinho também é importante onde você chutou? clima das duas regiões;
 *  - estrutura (acidez, tanino, corpo…): seu palpite é o típico da uva? o vinho fugiu do típico?
 *  - aromas: quais do gabarito você não marcou e quais são típicos da uva.
 * Quando a enciclopédia não tem o dado, sobra só uma orientação geral (sem fatos sobre o vinho).
 */
var Lessons = (function () {
  var STRUCT = ['acidity', 'tannin', 'body', 'alcohol', 'sweetness', 'finish', 'intensity'];
  var GENERAL = {
    acidity: 'Acidez é o que faz a boca salivar; álcool alto e temperatura mais quente podem disfarçá-la.',
    tannin: 'Tanino é a secura/aspereza na gengiva e na língua; acidez e açúcar podem mascará-lo.',
    body: 'Corpo é o peso na boca: álcool, extrato e açúcar somam; a madeira dá sensação de mais volume.',
    alcohol: 'Álcool aparece como calor no fim da boca e no nariz; vinhos frios parecem menos alcoólicos.',
    sweetness: 'Fruta madura e madeira lembram doçura no nariz, mas doçura de verdade só se sente na ponta da língua.',
    finish: 'Persistência é quanto o sabor fica depois de engolir — conte os segundos.',
    intensity: 'Intensidade é a força dos aromas: compare com o primeiro vinho da sessão.'
  };

  function trim(s, max) {
    s = String(s || '').replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    var cut = s.slice(0, max), dot = cut.lastIndexOf('. ');
    return dot > max * 0.5 ? cut.slice(0, dot + 1) : cut.replace(/\s+\S*$/, '') + '…';
  }
  function parse(v) {
    if (v === '' || v === null || v === undefined) return v;
    if (typeof v === 'string' && v.charAt(0) === '[') { try { return JSON.parse(v); } catch (e) { return v; } }
    return v;
  }
  function list(v) { v = parse(v); return Array.isArray(v) ? v : (v ? [v] : []); }

  /** Dados carregados uma vez por relatório. */
  function context() {
    var grapes = Util.indexBy(Repo.all('grapes'), 'id');
    var regions = Util.indexBy(Repo.all('regions'), 'id');
    var countries = Util.indexBy(Repo.all('countries'), 'id');
    var rels = Repo.all('grape_relationships');
    var regionGrapes = {};
    Repo.all('region_grapes').forEach(function (x) { (regionGrapes[x.region_id] = regionGrapes[x.region_id] || {})[x.grape_id] = x.role || 'principal'; });
    var aromaNames = {};
    Repo.all('aromas').forEach(function (a) { aromaNames[a.id] = a.name; });
    var grapeAromas = {};
    Repo.where('entity_aromas', { entity_type: 'grape' }).forEach(function (x) { (grapeAromas[x.entity_id] = grapeAromas[x.entity_id] || []).push(x.aroma_id); });
    var grapeProfiles = {};
    Repo.where('profiles', { entity_type: 'grape' }).forEach(function (p) { grapeProfiles[p.entity_id] = p; });
    return { grapes: grapes, regions: regions, countries: countries, rels: rels, regionGrapes: regionGrapes,
      aromaNames: aromaNames, grapeAromas: grapeAromas, grapeProfiles: grapeProfiles,
      scales: Settings.scales(), rules: Util.indexBy(Settings.rules(), 'criterion') };
  }

  function gname(c, id) { return c.grapes[id] ? c.grapes[id].name : ''; }
  function rel(c, a, b, kind) {
    return c.rels.filter(function (r) { return r.kind === kind && ((r.grape_a_id === a && r.grape_b_id === b) || (r.grape_a_id === b && r.grape_b_id === a)); })[0];
  }
  /** Região e todas as suas sub-regiões (e a mãe). */
  function family(c, regionId) {
    var r = c.regions[regionId];
    if (!r) return [];
    var top = r.parent_id || r.id;
    return Object.keys(c.regions).filter(function (id) { return id === top || c.regions[id].parent_id === top; });
  }
  function grownIn(c, grapeId, regionId) {
    return family(c, regionId).some(function (id) { return c.regionGrapes[id] && c.regionGrapes[id][grapeId]; });
  }

  // ---------- Uvas ----------
  function grapeLessons(c, row, out) {
    var expected = list(row.expected), given = list(row.given);
    if (!expected.length) return;
    if (row.state === 'hit') {
      // Acertou: uma dica para não confundir no futuro.
      var e0 = expected[0];
      var tip = c.rels.filter(function (r) { return r.kind === 'confused_with' && r.how_to_differentiate && (r.grape_a_id === e0 || r.grape_b_id === e0); })[0];
      if (tip) {
        var other = tip.grape_a_id === e0 ? tip.grape_b_id : tip.grape_a_id;
        out.push({ criterion: 'grape', kind: 'dica', title: 'Para não confundir ' + gname(c, e0) + ' com ' + gname(c, other), text: trim(tip.how_to_differentiate, 400) });
      }
      return;
    }
    var wrong = given.filter(function (g) { return expected.indexOf(g) < 0; }).slice(0, 2);
    var explained = false;
    wrong.forEach(function (g) {
      expected.slice(0, 2).forEach(function (e) {
        var cw = rel(c, g, e, 'confused_with');
        if (cw) {
          out.push({ criterion: 'grape', kind: 'confusao', title: gname(c, g) + ' × ' + gname(c, e) + ': uma confusão clássica',
            text: trim(cw.how_to_differentiate || 'Estas duas uvas costumam ser confundidas às cegas.', 450) });
          explained = true;
        }
        var par = rel(c, g, e, 'parent_of');
        if (par) {
          out.push({ criterion: 'grape', kind: 'parentesco', title: gname(c, g) + ' e ' + gname(c, e) + ' são parentes',
            text: gname(c, par.grape_a_id) + ' é pai/mãe de ' + gname(c, par.grape_b_id) + ' (análise de DNA) — por isso podem dividir traços.' });
          explained = true;
        }
        var shared = (c.grapeAromas[g] || []).filter(function (a) { return (c.grapeAromas[e] || []).indexOf(a) >= 0; })
          .map(function (a) { return c.aromaNames[a]; }).filter(Boolean);
        if (shared.length >= 2) {
          out.push({ criterion: 'grape', kind: 'aromas', title: 'O que ' + gname(c, g) + ' e ' + gname(c, e) + ' têm em comum',
            text: 'Aromas típicos das duas: ' + shared.slice(0, 6).join(', ') + '. Por isso o nariz pode enganar — confirme pela estrutura (acidez, tanino, corpo).' });
          explained = true;
        }
      });
    });
    var e = c.grapes[expected[0]];
    if (e) {
      var how = e.how_to_recognize || e.general_profile;
      if (how) out.push({ criterion: 'grape', kind: 'reconhecer', title: 'Como reconhecer ' + e.name, text: trim(how, 420) });
    }
    if (!explained && wrong[0] && c.grapes[wrong[0]] && c.grapes[wrong[0]].general_profile) {
      out.push({ criterion: 'grape', kind: 'contraste', title: 'Você pensou em ' + gname(c, wrong[0]), text: trim(c.grapes[wrong[0]].general_profile, 300) });
    }
  }

  // ---------- Região e país ----------
  function regionLessons(c, row, wineGrapes, out) {
    if (row.state === 'hit' || row.state === 'no_ref') return;
    var exp = c.regions[row.expected], giv = c.regions[row.given];
    if (!exp) return;
    if (giv) {
      var grown = wineGrapes.filter(function (g) { return grownIn(c, g, giv.id); }).map(function (g) { return gname(c, g); });
      if (grown.length) out.push({ criterion: 'region', kind: 'faz-sentido', title: 'Faz sentido ter pensado em ' + giv.name,
        text: grown.join(' e ') + (grown.length > 1 ? ' também são uvas importantes' : ' também é uma uva importante') + ' em ' + giv.name + '.' });
      if (row.state === 'near') out.push({ criterion: 'region', kind: 'quase', title: 'Quase: o país estava certo',
        text: giv.name + ' e ' + exp.name + ' ficam no mesmo país' + (c.countries[exp.country_id] ? ' (' + c.countries[exp.country_id].name + ')' : '') + '.' });
      var climates = [[exp, 'era'], [giv, 'você disse']].filter(function (x) { return x[0].climate; });
      if (climates.length === 2) {
        out.push({ criterion: 'region', kind: 'clima', title: 'Clima: ' + exp.name + ' × ' + giv.name,
          text: exp.name + ': ' + trim(exp.climate, 200) + ' — ' + giv.name + ': ' + trim(giv.climate, 200) });
        return;
      }
    }
    var top = exp.parent_id && c.regions[exp.parent_id] ? c.regions[exp.parent_id] : exp;
    var desc = exp.climate || top.climate || exp.description || top.description;
    if (desc) out.push({ criterion: 'region', kind: 'regiao', title: 'Sobre ' + exp.name, text: trim(desc, 320) });
  }

  function countryLessons(c, row, wineGrapes, out) {
    if (row.state === 'hit' || row.state === 'no_ref' || !row.given) return;
    var giv = c.countries[row.given];
    if (!giv) return;
    var where = {};
    Object.keys(c.regions).forEach(function (id) {
      var r = c.regions[id];
      if (r.country_id !== giv.id || r.parent_id) return;
      wineGrapes.forEach(function (g) { if (grownIn(c, g, id)) (where[gname(c, g)] = where[gname(c, g)] || []).push(r.name); });
    });
    Object.keys(where).forEach(function (g) {
      out.push({ criterion: 'country', kind: 'faz-sentido', title: g + ' também é cultivada em ' + giv.name,
        text: 'Por exemplo em ' + where[g].slice(0, 3).join(', ') + ' — por isso a confusão é compreensível. Pistas de clima e estilo ajudam a separar.' });
    });
    if (!Object.keys(where).length) {
      wineGrapes.slice(0, 1).forEach(function (g) {
        var gr = c.grapes[g];
        if (gr && gr.main_countries) out.push({ criterion: 'country', kind: 'onde', title: 'Onde se planta ' + gr.name, text: trim(gr.main_countries, 260) });
      });
    }
  }

  // ---------- Estrutura ----------
  function structLessons(c, row, wineGrapes, out) {
    if (row.state === 'hit' || row.state === 'no_ref' || !row.given) return;
    var rule = c.rules[row.criterion];
    var levels = c.scales[(rule && rule.scale) || row.criterion];
    if (!levels) return;
    var label = function (k) { return ScaleUtil.label(levels, k); };
    var name = rule ? rule.label : row.criterion;
    var g = wineGrapes[0], prof = g && c.grapeProfiles[g];
    var typical = prof && ScaleUtil.range(levels, prof[row.criterion]);
    var gp = ScaleUtil.position(levels, row.given), ep = ScaleUtil.position(levels, row.expected);
    var text;
    if (typical && gp !== null && gp >= typical.lo && gp <= typical.hi && !(ep !== null && ep >= typical.lo && ep <= typical.hi)) {
      text = 'Seu palpite (' + label(row.given) + ') é o típico de ' + gname(c, g) + ', mas este vinho saiu ' + label(row.expected) +
        ' — safra, clima do lugar ou vinificação podem tirar a uva do padrão.';
    } else if (typical && ep !== null && ep >= typical.lo && ep <= typical.hi) {
      var at = function (pos) { var l = levels.filter(function (x) { return x.position === pos; })[0]; return l ? l.label : ''; };
      var tl = typical.lo === typical.hi ? at(typical.lo) : at(typical.lo) + ' a ' + at(typical.hi);
      text = name + ' ' + label(row.expected).toLowerCase() + ' é o esperado para ' + gname(c, g) + ' (típico: ' + String(tl).toLowerCase() + '). Você marcou ' + label(row.given).toLowerCase() + '. ' + (GENERAL[row.criterion] || '');
    } else {
      text = 'O gabarito era ' + label(row.expected).toLowerCase() + '; você marcou ' + label(row.given).toLowerCase() + '. ' + (GENERAL[row.criterion] || '');
    }
    out.push({ criterion: row.criterion, kind: 'estrutura', title: name, text: text });
  }

  function aromaLessons(c, row, wineGrapes, out) {
    if (row.state === 'hit' || row.state === 'no_ref') return;
    var exp = list(row.expected), giv = list(row.given);
    var missed = exp.filter(function (a) { return giv.indexOf(a) < 0; }).map(function (a) { return c.aromaNames[a]; }).filter(Boolean);
    if (!missed.length) return;
    var typical = wineGrapes.length ? (c.grapeAromas[wineGrapes[0]] || []).map(function (a) { return c.aromaNames[a]; }) : [];
    var fromGrape = missed.filter(function (a) { return typical.indexOf(a) >= 0; });
    out.push({ criterion: 'aromas', kind: 'aromas', title: 'Aromas que passaram',
      text: 'Do gabarito, você não marcou: ' + missed.slice(0, 6).join(', ') + '.' +
        (fromGrape.length ? ' ' + fromGrape.slice(0, 4).join(', ') + (fromGrape.length > 1 ? ' são típicos' : ' é típico') + ' de ' + gname(c, wineGrapes[0]) + ' — vale procurar sempre que suspeitar dela.' : '') });
  }

  /** rows = linhas de tasting_results de UMA garrafa (valores crus). */
  function forSample(c, rows) {
    var out = [];
    var byC = Util.indexBy(rows, 'criterion');
    var wineGrapes = rows.length ? list(rows[0].grape_ids) : [];
    if (byC.grape) grapeLessons(c, byC.grape, out);
    if (byC.region) regionLessons(c, byC.region, wineGrapes, out);
    if (byC.country && !(byC.region && byC.region.state === 'near')) countryLessons(c, byC.country, wineGrapes, out);
    if (byC.aromas) aromaLessons(c, byC.aromas, wineGrapes, out);
    STRUCT.forEach(function (k) { if (byC[k]) structLessons(c, byC[k], wineGrapes, out); });
    return out.slice(0, 8);
  }

  return { context: context, forSample: forSample };
})();
