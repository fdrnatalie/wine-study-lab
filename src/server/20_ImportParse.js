/**
 * Interpretação das abas originais (VINHOS, UVAS, NOTAS) → estruturas normalizadas.
 * Funções puras: recebem a matriz de valores da aba (getValues) e não acessam serviços.
 *
 * As colunas são localizadas pelo cabeçalho (lista de aliases), com fallback por
 * conteúdo para colunas sem cabeçalho (número da garrafinha, safra, teor alcoólico).
 */
var ImportParse = (function () {

  var WINE_ALIASES = {
    number: ['#', 'n', 'no', 'numero', 'num', 'garrafa', 'garrafinha', 'n garrafa'],
    name: ['rotulo', 'rotulos', 'nome', 'vinho', 'nome do vinho'],
    producer: ['produtor', 'vinicola', 'bodega'],
    country: ['pais'],
    region: ['regiao'],
    subregion: ['sub regiao', 'subregiao'],
    grapes: ['blend', 'uva', 'uvas', 'casta', 'castas', 'corte'],
    vintage: ['safra', 'ano', 'vintage', 'colheita'],
    abv: ['teor alcoolico', 'abv', 'graduacao', 'graduacao alcoolica', 'alcool %', 'alc'],
    price: ['preco', 'valor'],
    visual: ['analise visual', 'visual', 'cor'],
    nose: ['tracos aromaticos', 'aromas', 'nariz', 'olfativo'],
    acidity: ['acidez'],
    tannin: ['tanicidade', 'tanino', 'taninos'],
    softness: ['maciez'],
    body: ['corpo'],
    alcohol: ['alcool'],
    sweetness: ['acucar', 'dulcor', 'docura'],
    bitterness: ['amargor']
  };

  var GRAPE_ALIASES = {
    name: ['uvas', 'uva', 'nome', 'casta'],
    synonyms: ['possui outro nome', 'sinonimos', 'outros nomes'],
    regions: ['regioes encontrada', 'regioes encontradas', 'regioes', 'onde e encontrada'],
    description: ['descricao', 'perfil'],
    similar: ['com qual uva se parece', 'uvas parecidas', 'pode ser confundida com'],
    recognize: ['como pode ser reconhecida', 'como reconhecer']
  };

  function mapHeader(header, aliases) {
    var keys = header.map(Util.normKey);
    var map = {};
    Object.keys(aliases).forEach(function (field) {
      for (var c = 0; c < keys.length; c++) {
        if (keys[c] && aliases[field].indexOf(keys[c]) >= 0 && !isTaken_(map, c)) { map[field] = c; return; }
      }
    });
    return map;
  }
  function isTaken_(map, c) { for (var k in map) if (map[k] === c) return true; return false; }

  /** Preenche colunas sem cabeçalho olhando o conteúdo. */
  function inferBlankColumns_(values, header, map, warnings) {
    var blank = [];
    for (var c = 0; c < header.length; c++) if (Util.isBlank(header[c]) && !isTaken_(map, c)) blank.push(c);
    function colValues(c) {
      return values.slice(1).map(function (r) { return r[c]; }).filter(function (v) { return !Util.isBlank(v); });
    }
    function share(c, test) {
      var vs = colValues(c);
      if (!vs.length) return 0;
      return vs.filter(test).length / vs.length;
    }
    function isInt(v) { var n = Util.parseNumber(v); return n !== null && Math.floor(n) === n; }

    if (map.number === undefined && blank.indexOf(0) >= 0 && share(0, isInt) > 0.9) {
      map.number = 0;
      warnings.push('Coluna A sem cabeçalho interpretada como número da garrafinha.');
    }
    blank.forEach(function (c) {
      if (isTaken_(map, c)) return;
      if (map.vintage === undefined && share(c, function (v) { var n = Util.parseNumber(v); return n !== null && n >= 1900 && n <= 2100 && Math.floor(n) === n; }) > 0.9) {
        map.vintage = c;
        warnings.push('Coluna ' + colLetter(c) + ' sem cabeçalho interpretada como SAFRA.');
      } else if (map.abv === undefined && share(c, function (v) { var n = Util.parseNumber(v); return n !== null && n >= 5 && n <= 25; }) > 0.9) {
        map.abv = c;
        warnings.push('Coluna ' + colLetter(c) + ' sem cabeçalho interpretada como TEOR ALCOÓLICO.');
      }
    });
  }

  function colLetter(c) {
    var s = '';
    c++;
    while (c > 0) { var m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = Math.floor((c - 1) / 26); }
    return s;
  }

  function cell(row, map, field) {
    var c = map[field];
    if (c === undefined) return '';
    var v = row[c];
    if (Util.isBlank(v)) return '';
    if (Util.isAiErrorText(v)) return '';
    return v;
  }

  /** "Cabernet Sauvignon 60%, Merlot 40%" → [{name, percent}] */
  function parseGrapes(text) {
    if (Util.isBlank(text)) return [];
    return String(text).split(/\s*(?:,|\/|\+|;|\s+e\s+)\s*/i).map(function (p) {
      p = p.trim();
      if (!p) return null;
      var m = p.match(/(\d+(?:[.,]\d+)?)\s*%/);
      var name = p.replace(/(\d+(?:[.,]\d+)?)\s*%/, '').replace(/[()]/g, '').trim();
      if (!name) return null;
      return { name: Util.smartTitle(name), percent: m ? Util.parseNumber(m[1]) : null };
    }).filter(Boolean);
  }

  /**
   * Aba VINHOS → { wines: [...], warnings: [...] }
   * Cada vinho agrupa as linhas (garrafinhas) com mesmo rótulo + produtor + safra.
   */
  function parseWines(values, scales) {
    var warnings = [];
    if (!values || values.length < 2) return { wines: [], warnings: ['Aba de vinhos vazia.'], map: {} };
    var header = values[0].map(function (h) { return Util.isBlank(h) ? '' : String(h); });
    var map = mapHeader(header, WINE_ALIASES);
    inferBlankColumns_(values, header, map, warnings);
    if (map.name === undefined) return { wines: [], warnings: ['Coluna de rótulo não encontrada.'], map: map };

    var byKey = {}, order = [], skipped = { empty: 0, incomplete: [] };
    for (var i = 1; i < values.length; i++) {
      var r = values[i];
      var name = cell(r, map, 'name');
      if (!name) { skipped.empty++; continue; }
      var producer = cell(r, map, 'producer');
      var grapesText = cell(r, map, 'grapes');
      var number = Util.parseNumber(cell(r, map, 'number'));
      if (!producer && !grapesText) {
        skipped.incomplete.push({ row: i + 1, number: number, name: String(name) });
        continue;
      }
      var vintage = Util.parseNumber(cell(r, map, 'vintage'));
      var key = [Util.normKey(name), Util.normKey(producer), vintage || ''].join('|');
      var w = byKey[key];
      if (!w) {
        w = byKey[key] = {
          import_key: key,
          name: Util.smartTitle(name),
          producer: Util.smartTitle(producer),
          country: Util.smartTitle(cell(r, map, 'country')),
          region: Util.smartTitle(cell(r, map, 'region')),
          subregion: Util.smartTitle(cell(r, map, 'subregion')),
          grapes: parseGrapes(grapesText),
          vintage: vintage,
          abvs: [], prices: [], rows: [], bottles: [],
          sensory: { visual: [], nose: [], acidity: [], tannin: [], body: [], alcohol: [], sweetness: [], softness: [], bitterness: [] }
        };
        order.push(key);
      }
      w.rows.push(i + 1);
      if (number !== null) w.bottles.push(number);
      var abv = Util.parseNumber(cell(r, map, 'abv'));
      if (abv !== null) w.abvs.push(abv);
      var priceRaw = cell(r, map, 'price');
      var price = Util.parseNumber(priceRaw);
      if (price !== null) w.prices.push({ value: price, currency: /R\$/.test(String(priceRaw)) ? 'BRL' : (/\$/.test(String(priceRaw)) ? 'USD' : '') });
      Object.keys(w.sensory).forEach(function (f) {
        var v = cell(r, map, f);
        if (v) w.sensory[f].push(String(v).trim());
      });
    }

    var wines = order.map(function (k) {
      var w = byKey[k];
      var abv = Util.mode(w.abvs);
      var priceMode = Util.mode(w.prices.map(function (p) { return p.value; }));
      var out = {
        import_key: w.import_key, name: w.name, producer: w.producer, country: w.country,
        region: w.region, subregion: w.subregion, grapes: w.grapes, vintage: w.vintage,
        abv: abv.value, price: null, price_currency: '', bottles: w.bottles, rows: w.rows,
        profile: {}, conflicts: []
      };
      if (abv.distinct > 1) out.conflicts.push({ field: 'abv', values: Object.keys(abv.counts) });
      if (priceMode.distinct === 1) {
        out.price = priceMode.value;
        out.price_currency = w.prices[0].currency;
      } else if (priceMode.distinct > 1) {
        out.conflicts.push({ field: 'price', values: Object.keys(priceMode.counts) });
      }
      // Sensorial: moda por coluna; divergências registradas. Fonte = ia_nao_verificada.
      var textFields = { visual: 'visual_text', nose: 'nose_text' };
      Object.keys(textFields).forEach(function (f) {
        var m = Util.mode(w.sensory[f]);
        if (m.value) out.profile[textFields[f]] = m.value;
        if (m.distinct > 1) out.conflicts.push({ field: f, distinct: m.distinct });
      });
      ['acidity', 'tannin', 'body', 'alcohol', 'sweetness'].forEach(function (f) {
        var resolved = w.sensory[f].map(function (v) { return ScaleUtil.resolve(scales && scales[f], v); }).filter(Boolean);
        var m = Util.mode(resolved);
        if (m.value) out.profile[f] = m.value;
        if (m.distinct > 1) out.conflicts.push({ field: f, values: Object.keys(m.counts) });
        var unresolved = w.sensory[f].filter(function (v) { return !ScaleUtil.resolve(scales && scales[f], v); });
        if (unresolved.length) out.conflicts.push({ field: f, unresolved: Util.mode(unresolved).value });
      });
      var pal = [];
      ['softness', 'bitterness'].forEach(function (f) {
        var m = Util.mode(w.sensory[f]);
        if (m.value) pal.push((f === 'softness' ? 'Maciez: ' : 'Amargor: ') + m.value);
      });
      if (pal.length) out.profile.palate_text = pal.join(' · ');
      return out;
    });

    if (skipped.empty) warnings.push(skipped.empty + ' linha(s) sem rótulo ignorada(s).');
    skipped.incomplete.forEach(function (s) {
      warnings.push('Linha ' + s.row + ' ("' + s.name + '"' + (s.number !== null ? ', garrafinha ' + s.number : '') +
        ') ignorada: falta produtor e uva.');
    });
    return { wines: wines, warnings: warnings, map: map };
  }

  /** Aba UVAS → { grapes: [...], warnings } */
  function parseGrapeSheet(values) {
    var warnings = [];
    if (!values || values.length < 2) return { grapes: [], warnings: warnings };
    var header = values[0].map(String);
    var map = mapHeader(header, GRAPE_ALIASES);
    if (map.name === undefined) return { grapes: [], warnings: ['Coluna de nome da uva não encontrada.'] };
    var grapes = [], blank = 0;
    for (var i = 1; i < values.length; i++) {
      var r = values[i];
      var name = cell(r, map, 'name');
      if (!name) { blank++; continue; }
      var synText = cell(r, map, 'synonyms');
      grapes.push({
        name: Util.smartTitle(name),
        synonyms: parseSynonyms(synText),
        main_regions: String(cell(r, map, 'regions') || ''),
        description: String(cell(r, map, 'description') || ''),
        confusions_text: String(cell(r, map, 'similar') || ''),
        how_to_recognize: String(cell(r, map, 'recognize') || ''),
        row: i + 1
      });
    }
    if (blank) warnings.push(blank + ' linha(s) da aba de uvas sem nome ignorada(s).');
    return { grapes: grapes, warnings: warnings };
  }

  /** Extrai itens "- Ormeasco (Ligúria, Itália)" de um texto de sinônimos. */
  function parseSynonyms(text) {
    if (Util.isBlank(text)) return [];
    var s = String(text);
    var items = s.split(/\n|\s-\s|\s{2,}-\s/).map(function (x) { return x.replace(/^\s*-\s*/, '').trim(); })
      .filter(function (x) { return x && !/[:：]\s*$/.test(x) && x.length < 80; });
    if (!items.length) {
      // Formato em linha: "Sim, ...: A, B, C"
      var after = s.split(':').slice(1).join(':');
      items = after.split(',').map(function (x) { return x.replace(/\.$/, '').trim(); }).filter(Boolean);
    }
    return items;
  }

  /** Aba NOTAS → notas separadas por títulos numerados ("1. Título"). */
  function parseNotes(values) {
    var lines = [];
    (values || []).forEach(function (r) {
      r.forEach(function (v) { if (!Util.isBlank(v)) lines.push(String(v).trim()); });
    });
    var notes = [], cur = null;
    lines.forEach(function (l) {
      if (/^\d+\s*[.)-]\s+\S/.test(l) || !cur) {
        cur = { title: l.replace(/^\d+\s*[.)-]\s+/, ''), body: [] };
        notes.push(cur);
      } else {
        cur.body.push(l);
      }
    });
    return notes.map(function (n) {
      return { title: n.title, body: n.body.join('\n'), import_key: Util.normKey(n.title) };
    });
  }

  return { parseWines: parseWines, parseGrapeSheet: parseGrapeSheet, parseNotes: parseNotes,
    parseGrapes: parseGrapes, parseSynonyms: parseSynonyms, mapHeader: mapHeader, colLetter: colLetter };
})();
