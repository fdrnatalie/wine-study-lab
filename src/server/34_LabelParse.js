/**
 * Leitura do TEXTO de um rótulo (vindo do OCR) → sugestões para o cadastro de vinho.
 * Função pura (sem Planilha/Drive), testada em tests/run.js.
 *
 * Regra: só sugere o que está escrito no rótulo (com o trecho como evidência) ou o que
 * o texto casa EXATAMENTE com a enciclopédia (produtor, região, país, uva). Nada é inferido
 * a partir da uva ou do estilo; o nome do vinho fica para a usuária escolher entre as linhas lidas.
 *
 * cat = { countries:[{name}], regions:[{name, country, parent, level}], producers:[{name, regions:[nome região]}],
 *         grapes:[{name, synonyms:[]}] }
 */
var LabelParse = (function () {

  function norm(s) { return Util.normKey(s); }

  // Palavras genéricas que nunca contam como nome de região/produtor sozinhas.
  var STOP = {};
  ('vinho vino vin wine wein tinto rosso rouge red branco bianco blanc blanco white rose rosado rosato reserva riserva ' +
    'reserve gran grande grand cru classico superiore seco dry brut sul norte centro sur nord casa tenuta domaine chateau ' +
    'bodega bodegas quinta estate vineyard vineyards winery cantina cave adega vale valle valley costa monte serra alto ' +
    'mission alba bianca nero nera rosa').split(' ').forEach(function (w) { STOP[w] = 1; });

  var COUNTRY_ALIASES = {
    'italy': 'Itália', 'italia': 'Itália', 'france': 'França', 'francia': 'França', 'spain': 'Espanha', 'espana': 'Espanha',
    'germany': 'Alemanha', 'deutschland': 'Alemanha', 'austria': 'Áustria', 'osterreich': 'Áustria', 'oesterreich': 'Áustria',
    'switzerland': 'Suíça', 'suisse': 'Suíça', 'schweiz': 'Suíça', 'svizzera': 'Suíça', 'greece': 'Grécia', 'hungary': 'Hungria',
    'magyarorszag': 'Hungria', 'united states': 'Estados Unidos', 'usa': 'Estados Unidos', 'u s a': 'Estados Unidos',
    'south africa': 'África do Sul', 'new zealand': 'Nova Zelândia', 'australia': 'Austrália', 'brazil': 'Brasil',
    'uruguay': 'Uruguai', 'mexico': 'México', 'canada': 'Canadá', 'england': 'Inglaterra', 'romania': 'Romênia',
    'slovenia': 'Eslovênia', 'slovenija': 'Eslovênia', 'croatia': 'Croácia', 'hrvatska': 'Croácia', 'georgia': 'Geórgia',
    'lebanon': 'Líbano', 'liban': 'Líbano', 'moldova': 'Moldávia', 'armenia': 'Armênia', 'turkey': 'Turquia', 'turkiye': 'Turquia',
    'japan': 'Japão', 'bulgaria': 'Bulgária'
  };

  // Termos de classificação (texto normalizado → como gravar). Os mais longos primeiro.
  var CLASS_PHRASES = [
    ['denominazione di origine controllata e garantita', 'DOCG'], ['denominazione di origine controllata', 'DOC'],
    ['denominacion de origen calificada', 'DOCa'], ['denominacion de origen protegida', 'DOP'], ['denominacion de origen', 'DO'],
    ['denominacao de origem controlada', 'DOC'], ['denominacao de origem', 'DO'], ['indicazione geografica tipica', 'IGT'],
    ['indicacao geografica', 'IG'], ['vinho regional', 'Vinho Regional'], ['appellation d origine protegee', 'AOP'],
    ['appellation d origine controlee', 'AOC'], ['gran reserva', 'Gran Reserva'], ['grande reserva', 'Grande Reserva'],
    ['reserva', 'Reserva'], ['riserva', 'Riserva'], ['crianza', 'Crianza'], ['grand cru classe', 'Grand Cru Classé'],
    ['premier grand cru classe', 'Premier Grand Cru Classé'], ['grand cru', 'Grand Cru'], ['premier cru', 'Premier Cru'],
    ['1er cru', 'Premier Cru'], ['superiore', 'Superiore'], ['classico', 'Classico'], ['gran selezione', 'Gran Selezione'],
    ['trockenbeerenauslese', 'Trockenbeerenauslese'], ['beerenauslese', 'Beerenauslese'], ['auslese', 'Auslese'],
    ['spatlese', 'Spätlese'], ['kabinett', 'Kabinett'], ['grosses gewachs', 'Grosses Gewächs'], ['smaragd', 'Smaragd'],
    ['federspiel', 'Federspiel'], ['steinfeder', 'Steinfeder']
  ];
  // Siglas: só em MAIÚSCULAS no texto original (evita "do", "ig" etc.).
  var CLASS_ACRONYMS = ['DOCG', 'DOCa', 'DOC', 'DOQ', 'DOP', 'AOC', 'AOP', 'IGT', 'IGP', 'DAC', 'VDP', 'AVA'];

  var COLOR_WORDS = [
    ['tinto', /\b(vinho tinto|vino tinto|vino rosso|vin rouge|red wine|rotwein)\b|\btinto\b(?! (fino|roriz|cao|amarela))/],
    ['branco', /\b(vinho branco|vino blanco|vino bianco|vin blanc|white wine|weisswein|weißwein)\b|\b(branco|blanco)\b/],
    ['rose', /\b(rose|rosado|rosato|rose wine)\b/],
    ['laranja', /\b(orange wine|vinho laranja|vino naranja|ramato)\b/]
  ];
  var TYPE_WORDS = [
    ['espumante', /\b(espumante|spumante|sparkling|champagne|cava|cremant|sekt|franciacorta|prosecco|metodo classico|metodo tradicional|methode traditionnelle|methode champenoise|brut|extra brut|pet nat)\b/],
    ['fortificado', /\b(vinho do porto|port wine|porto (tawny|ruby|lbv|vintage)|vinho licoroso|vino generoso|madeira wine|sherry|jerez|xeres|marsala|vin doux naturel|fortified)\b/],
    ['sobremesa', /\b(late harvest|colheita tardia|vendange tardive|vendemmia tardiva|passito|ice ?wine|eiswein|tokaji aszu|vin santo|noble rot|botrytis)\b/]
  ];

  /** Procura `key` (normalizado) como palavras inteiras dentro de `t` (normalizado, com espaços nas pontas). */
  function findAll(t, key) {
    var out = [], needle = ' ' + key + ' ', i = t.indexOf(needle);
    while (i >= 0) { out.push(i); i = t.indexOf(needle, i + 1); }
    return out;
  }

  /** Casa uma lista de nomes; descarta casamentos contidos em outros mais longos. */
  function matchNames(t, items, keysOf, used) {
    var hits = [];
    items.forEach(function (it) {
      keysOf(it).forEach(function (k) {
        if (!k || k.length < 4 || STOP[k]) return;
        findAll(t, k).forEach(function (pos) { hits.push({ item: it, key: k, start: pos, end: pos + k.length + 1 }); });
      });
    });
    hits.sort(function (a, b) { return (b.end - b.start) - (a.end - a.start); });
    var kept = [];
    hits.forEach(function (h) {
      var overlap = kept.concat(used || []).some(function (k) { return h.start < k.end && k.start < h.end; });
      if (!overlap) kept.push(h);
    });
    return kept;
  }

  function uniq(list) { var s = {}; return list.filter(function (x) { if (s[x]) return false; s[x] = 1; return true; }); }

  function lineOf(lines, re) {
    for (var i = 0; i < lines.length; i++) { var m = lines[i].match(re); if (m) return { m: m, line: lines[i] }; }
    return null;
  }

  function parse(text, cat, opts) {
    text = String(text || '').replace(/\r/g, '');
    var thisYear = (opts && opts.year) || new Date().getFullYear();
    var lines = text.split('\n').map(function (l) { return l.replace(/\s+/g, ' ').trim(); }).filter(function (l) { return l.length > 1; });
    var t = ' ' + norm(text) + ' ';
    var fields = {};
    function put(field, value, evidence, how, options) {
      if (value === '' || value === null || value === undefined) return;
      fields[field] = { value: value, evidence: evidence || '', how: how || 'rotulo', options: options || [] };
    }

    // ---------- Safra ----------
    var years = [];
    var yre = /\b(19[0-9]{2}|20[0-9]{2})\b/g, m;
    while ((m = yre.exec(text))) {
      var y = +m[1];
      if (y < 1900 || y > thisYear) continue;
      var before = norm(text.slice(Math.max(0, m.index - 30), m.index));
      if (/\b(since|desde|dal|dall|depuis|seit|fundad[ao]|founded|est|fondata|fonde[e]?|gegrundet|anno|from)\s*$/.test(before)) continue;
      years.push({ y: y, ctx: before });
    }
    if (years.length) {
      var keyed = years.filter(function (x) { return /(safra|vintage|cosecha|annata|millesime|jahrgang|colheita|vendemmia|harvest|anada|vendimia)\s*$/.test(x.ctx); });
      var distinct = uniq(years.map(function (x) { return x.y; }));
      if (keyed.length) put('vintage', keyed[0].y, 'safra indicada no rótulo', 'rotulo', distinct);
      else if (distinct.length === 1) put('vintage', distinct[0], 'único ano no rótulo', 'rotulo');
      else fields.vintage = { value: '', evidence: 'vários anos no rótulo: escolha', how: 'rotulo', options: distinct };
    }

    // ---------- Teor alcoólico ----------
    var abvRe = [
      /(\d{1,2}(?:[.,]\d{1,2})?)\s*%\s*(?:vol|alc|v\/v|abv|by vol)/i,
      /(?:alc(?:ohol|ool)?\.?|teor alco[oó]lico|gradua[cç][aã]o alco[oó]lica|titolo alcolometrico(?: volumico)?|grado alcoh[oó]lico|alkohol|vol\.?)\s*[:\-]?\s*(\d{1,2}(?:[.,]\d{1,2})?)\s*%/i
    ];
    for (var a = 0; a < abvRe.length && !fields.abv; a++) {
      var am = lineOf(lines, abvRe[a]);
      if (am) {
        var abv = Util.parseNumber(am.m[1]);
        if (abv !== null && abv >= 4 && abv <= 23) put('abv', abv, am.m[0]);
      }
    }

    // ---------- Dados técnicos escritos no contrarrótulo ----------
    var rs = lineOf(lines, /a[cç][uú]car(?:es)?(?: residua(?:l|is))?\s*[:\-]?\s*(\d+(?:[.,]\d+)?)\s*g\s*\/?\s*l/i) ||
      lineOf(lines, /residual sugar\s*[:\-]?\s*(\d+(?:[.,]\d+)?)\s*g\s*\/?\s*l/i) || lineOf(lines, /zucchero residuo\s*[:\-]?\s*(\d+(?:[.,]\d+)?)\s*g\s*\/?\s*l/i);
    if (rs) put('residual_sugar', rs.m[1].replace('.', ',') + ' g/L', rs.m[0]);
    var ac = lineOf(lines, /(?:acidez|acidity|acidit[àa]|acidit[ée])(?: total)?e?\s*[:\-]?\s*(\d+(?:[.,]\d+)?)\s*g\s*\/?\s*l/i);
    if (ac) put('acidity_gl', ac.m[1].replace('.', ',') + ' g/L', ac.m[0]);
    var ag = lineOf(lines, /\d{1,2}\s*(?:a\s*\d{1,2}\s*)?(?:meses|months|mesi|mois|monate)\s+(?:em|en|in|de|di|en fût de|in barrique)?\s*[^.;\n]{0,40}?(?:barricas?|barriques?|carvalho|roble|botti|tonneaux|f[ûu]ts?|oak|madeira|legno|bois|holzfass)[^.;\n]{0,30}/i);
    if (ag) put('aging', ag.m[0].trim(), ag.m[0]);
    var st = lineOf(lines, /(?:servir|serve|serving|temperatura|servire|servire a|da servire)[^\n]{0,30}?(\d{1,2})\s*(?:°\s*C?|ºC?)?\s*(?:-|–|a|à|to|e)\s*(\d{1,2})\s*(?:°|º)\s*C?/i);
    if (st) put('serving_temp', st.m[1] + '–' + st.m[2] + ' °C', st.m[0]);

    // ---------- Cor e tipo (só por palavras do rótulo) ----------
    var grapeHits = matchNames(t, cat.grapes || [], function (g) { return [norm(g.name)].concat((g.synonyms || []).map(norm)); });
    // Tira do texto os nomes de uva ("Sauvignon Blanc", "Tinta Roriz") antes de buscar cor.
    var tNoGrapes = t;
    grapeHits.forEach(function (h) { tNoGrapes = tNoGrapes.slice(0, h.start) + new Array(h.end - h.start + 1).join(' ') + tNoGrapes.slice(h.end); });
    COLOR_WORDS.forEach(function (c) { if (!fields.color) { var cm = tNoGrapes.match(c[1]); if (cm) put('color', c[0], cm[0].trim()); } });
    TYPE_WORDS.forEach(function (c) { if (!fields.type) { var tm = t.match(c[1]); if (tm) put('type', c[0], tm[0].trim()); } });

    // ---------- Classificação ----------
    var cls = [];
    var tCls = t;
    CLASS_PHRASES.forEach(function (p) {
      if (findAll(tCls, p[0]).length) { cls.push(p[1]); tCls = tCls.split(' ' + p[0] + ' ').join('  '); }
    });
    CLASS_ACRONYMS.forEach(function (acr) {
      if (new RegExp('(^|[^A-Za-z])' + acr.replace(/\./g, '\\.') + '([^A-Za-z]|$)').test(text)) cls.push(acr);
    });
    cls = uniq(cls);
    // "DOCa" contém "DOC"; "DOCG" idem: fica a mais específica.
    if (cls.indexOf('DOCG') >= 0 || cls.indexOf('DOCa') >= 0) cls = cls.filter(function (c) { return c !== 'DOC'; });
    if (cls.indexOf('DOCa') >= 0) cls = cls.filter(function (c) { return c !== 'DO'; });
    if (cls.indexOf('Gran Reserva') >= 0 || cls.indexOf('Grande Reserva') >= 0) cls = cls.filter(function (c) { return c !== 'Reserva'; });
    if (cls.indexOf('Grand Cru Classé') >= 0 || cls.indexOf('Premier Grand Cru Classé') >= 0) cls = cls.filter(function (c) { return c !== 'Grand Cru'; });
    if (cls.length) put('classification', cls.join(' '), 'termos no rótulo: ' + cls.join(', '));

    // ---------- Uvas (com % quando escrito) ----------
    var hasPct = /%/.test(text);
    // "85% Tempranillo" (número antes) ou "Tempranillo 85%" (depois): decide pelo jeito do próprio rótulo.
    var pctFirst = /\d\s*%\s*[A-Za-zÀ-ÿ]/.test(text.replace(/\d\s*%\s*(vol|alc|v\/v|abv|by)/gi, ''));
    var grapes = grapeHits.sort(function (a, b) { return a.start - b.start; }).map(function (h) {
      var pct = '';
      if (hasPct) {
        var after = t.slice(h.end).match(/^ (\d{1,3}) /), before = t.slice(0, h.start + 1).match(/ (\d{1,3}) $/);
        var n = pctFirst ? (before ? +before[1] : null) : (after ? +after[1] : null);
        if (n !== null && n > 0 && n <= 100) pct = n;
      }
      return { name: h.item.name, percent: pct, evidence: h.key };
    });
    grapes = grapes.filter(function (g, i) { return grapes.map(function (x) { return x.name; }).indexOf(g.name) === i; });

    // ---------- Regiões / país ----------
    var used = grapeHits.slice();
    var regionHits = matchNames(t, cat.regions || [], function (r) { return [norm(r.name)]; }, used);
    var subs = regionHits.filter(function (h) { return h.item.parent; });
    var tops = regionHits.filter(function (h) { return !h.item.parent; });
    var countryHits = [];
    (cat.countries || []).forEach(function (c) { if (findAll(t, norm(c.name)).length) countryHits.push(c.name); });
    Object.keys(COUNTRY_ALIASES).forEach(function (k) { if (findAll(t, k).length) countryHits.push(COUNTRY_ALIASES[k]); });
    countryHits = uniq(countryHits);

    // Prefere a sub-região cujo país (e região-mãe) também aparece; senão a primeira.
    function score(r) { return (countryHits.indexOf(r.country) >= 0 ? 2 : 0) + (tops.some(function (x) { return x.item.name === r.parent; }) ? 1 : 0); }
    subs.sort(function (a, b) { return score(b.item) - score(a.item); });
    tops.sort(function (a, b) { return score(b.item) - score(a.item); });
    var sub = subs[0] && subs[0].item, top = tops[0] && tops[0].item;
    if (sub) {
      put('subregion', sub.name, 'escrito no rótulo', 'rotulo', uniq(subs.map(function (h) { return h.item.name; })));
      put('region', sub.parent, top && top.name === sub.parent ? 'escrito no rótulo' : 'região de ' + sub.name + ' (enciclopédia)', top && top.name === sub.parent ? 'rotulo' : 'enciclopedia');
      put('country', sub.country, countryHits.indexOf(sub.country) >= 0 ? 'escrito no rótulo' : 'país de ' + sub.name + ' (enciclopédia)', countryHits.indexOf(sub.country) >= 0 ? 'rotulo' : 'enciclopedia');
    } else if (top) {
      put('region', top.name, 'escrito no rótulo', 'rotulo', uniq(tops.map(function (h) { return h.item.name; })));
      put('country', top.country, countryHits.indexOf(top.country) >= 0 ? 'escrito no rótulo' : 'país de ' + top.name + ' (enciclopédia)', countryHits.indexOf(top.country) >= 0 ? 'rotulo' : 'enciclopedia');
    } else if (countryHits.length) {
      put('country', countryHits[0], 'escrito no rótulo', 'rotulo', countryHits);
    }
    if (fields.country && countryHits.length && countryHits.indexOf(fields.country.value) < 0) {
      // Conflito (ex.: região homônima em outro país): mostra o país escrito como alternativa.
      fields.country.options = uniq([fields.country.value].concat(countryHits));
    }

    // ---------- Produtor ----------
    var prodHits = matchNames(t, cat.producers || [], function (p) { return [norm(p.name)]; }, used.concat(regionHits));
    if (prodHits.length) {
      var p = prodHits[0].item;
      put('producer', p.name, 'escrito no rótulo', 'rotulo', uniq(prodHits.map(function (h) { return h.item.name; })));
      if (!fields.region && p.regions && p.regions.length === 1) put('region', p.regions[0], 'região do produtor (enciclopédia)', 'enciclopedia');
    } else {
      var bottler = lineOf(lines, /(?:produzido e engarrafado por|engarrafado por|elaborado (?:y embotellado )?por|embotellado por|imbottigliato (?:all'origine )?(?:da|dal|dalla|dall')|prodotto e imbottigliato da|mis en bouteille (?:au domaine |au chateau )?par|produced and bottled by|bottled by|abfüller|erzeugerabfüllung)\s*:?\s*(.{3,80})$/i);
      if (bottler) {
        var nm = bottler.m[1].split(/\s*[-,–]\s*|\s+(?:em|en|in|à|a|-)\s+[A-ZÀ-Ý]/)[0].trim();
        if (nm.length >= 3) put('producer', nm, bottler.m[0]);
      }
    }

    return { lines: lines, fields: fields, grapes: grapes };
  }

  return { parse: parse };
})();
