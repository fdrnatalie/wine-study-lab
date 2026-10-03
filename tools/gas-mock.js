/**
 * Simulação mínima dos serviços do Google Apps Script, para rodar o servidor
 * REAL (Repository, Schema, Import, Tastings…) dentro do navegador, sem Google.
 * Só para desenvolvimento local (tools/build-preview.js). Não vai para o Apps Script.
 */
(function (g) {
  function Sheet(name, rows) {
    this.name = name;
    this.data = rows || [];
  }
  Sheet.prototype._ensure = function (r, c) {
    while (this.data.length < r) this.data.push([]);
    var w = this.getLastColumn();
    this.data.forEach(function (row) { while (row.length < Math.max(c, w)) row.push(''); });
  };
  Sheet.prototype.getLastRow = function () {
    for (var i = this.data.length - 1; i >= 0; i--) if (this.data[i].some(function (v) { return v !== '' && v !== null; })) return i + 1;
    return 0;
  };
  Sheet.prototype.getLastColumn = function () {
    var m = 0;
    this.data.forEach(function (r) { for (var j = r.length - 1; j >= 0; j--) if (r[j] !== '' && r[j] !== null) { m = Math.max(m, j + 1); break; } });
    return m;
  };
  Sheet.prototype.getMaxRows = function () { return 1000; };
  Sheet.prototype.getDataRange = function () { return this.getRange(1, 1, Math.max(this.getLastRow(), 1), Math.max(this.getLastColumn(), 1)); };
  Sheet.prototype.getRange = function (r, c, nr, nc) {
    var sh = this;
    nr = nr || 1; nc = nc || 1;
    var range = {
      getValues: function () {
        var out = [];
        for (var i = 0; i < nr; i++) {
          var row = [];
          for (var j = 0; j < nc; j++) { var v = (sh.data[r - 1 + i] || [])[c - 1 + j]; row.push(v === undefined || v === null ? '' : v); }
          out.push(row);
        }
        return out;
      },
      setValues: function (vals) {
        if (vals.length !== nr || vals[0].length !== nc) throw new Error('setValues: dimensões não conferem (' + vals.length + 'x' + vals[0].length + ' vs ' + nr + 'x' + nc + ')');
        sh._ensure(r - 1 + nr, c - 1 + nc);
        for (var i = 0; i < nr; i++) for (var j = 0; j < nc; j++) sh.data[r - 1 + i][c - 1 + j] = vals[i][j];
        return range;
      },
      setNumberFormat: function () { return range; },
      setFontWeight: function () { return range; },
      setBackground: function () { return range; }
    };
    return range;
  };
  Sheet.prototype.deleteRow = function (r) { this.data.splice(r - 1, 1); };
  Sheet.prototype.setFrozenRows = function () {};
  Sheet.prototype.setTabColor = function () {};

  var sheets = {};
  var ss = {
    getSheetByName: function (n) { return sheets[n] || null; },
    insertSheet: function (n) { sheets[n] = new Sheet(n, []); return sheets[n]; },
    _sheets: sheets
  };
  g.__loadSourceSheets = function (fixture) {
    Object.keys(fixture).forEach(function (k) { sheets[k] = new Sheet(k, fixture[k].map(function (r) { return r.slice(); })); });
  };

  g.SpreadsheetApp = { openById: function () { return ss; }, getActiveSpreadsheet: function () { return ss; }, getUi: function () { return {}; } };
  var cache = {};
  g.CacheService = { getScriptCache: function () { return {
    get: function (k) { return cache[k] === undefined ? null : cache[k]; },
    getAll: function (keys) { var o = {}; keys.forEach(function (k) { if (cache[k] !== undefined) o[k] = cache[k]; }); return o; },
    putAll: function (o) { Object.keys(o).forEach(function (k) { cache[k] = o[k]; }); },
    remove: function (k) { delete cache[k]; }
  }; } };
  g.LockService = { getScriptLock: function () { return { waitLock: function () {}, releaseLock: function () {} }; } };
  var props = {};
  g.PropertiesService = { getScriptProperties: function () { return {
    getProperty: function (k) { return props[k] || null; }, setProperty: function (k, v) { props[k] = v; }
  }; } };
  g.Session = {
    getActiveUser: function () { return { getEmail: function () { return 'dev@local'; } }; },
    getEffectiveUser: function () { return { getEmail: function () { return 'dev@local'; } }; }
  };

  // Resposta SIMULADA da API da Anthropic (mesma estrutura de uma resposta real).
  g.Utilities = { sleep: function () {} };
  g.UrlFetchApp = { fetch: function (url, opts) {
    var body = JSON.parse(opts.payload);
    var tool = body.tools.filter(function (t) { return t.name === 'registrar_dados'; })[0];
    var props = tool.input_schema.properties;
    var prompt = body.messages[0].content;
    var input;
    if (props.grapes) {
      input = { grapes: [
        { name: 'Sangiovese', color: 'tinta', origin: 'Toscana, Itália (simulado)', source_url: 'https://www.vivc.de/sangiovese', source_title: 'VIVC' },
        { name: 'Nebbiolo', color: 'tinta', origin: 'Piemonte', source_url: 'https://www.vivc.de/nebbiolo', source_title: 'VIVC' },
        { name: 'Aglianico', color: 'tinta', origin: 'Campânia, Itália (simulado)', source_url: 'https://exemplo.com/nao-buscado', source_title: 'Blog' }
      ], not_found: '' };
    } else if (props.confused_with) {
      input = {
        fields: [
          { field: 'origin', value: 'Norte da Itália (simulado)', source_url: 'https://www.vivc.de/x', source_title: 'VIVC' },
          { field: 'color', value: 'tinta', source_url: 'https://www.vivc.de/x', source_title: 'VIVC' },
          { field: 'ripening', value: 'Brotação precoce, maturação tardia (simulado)', source_url: 'https://www.jancisrobinson.com/x', source_title: 'Jancis Robinson' },
          { field: 'how_to_recognize', value: 'Cor clara, taninos e acidez altos, rosas e alcatrão (simulado)', source_url: 'https://exemplo.com/nao-buscado', source_title: 'Site sem busca' }
        ],
        profile: { acidity: 'alta', tannin: 'alto', body: 'medio..medio+', alcohol: '', sweetness: '', intensity: '', finish: 'longa', source_url: 'https://www.jancisrobinson.com/x', source_title: 'Jancis Robinson' },
        aromas: [{ name: 'Rosa', source_url: 'https://www.jancisrobinson.com/x' }, { name: 'Cereja vermelha', source_url: 'https://www.jancisrobinson.com/x' }, { name: 'Alcaçuz', source_url: 'https://www.jancisrobinson.com/x' }],
        parents: [{ name: 'Uva Pai Simulada', source_url: 'https://www.vivc.de/x', source_title: 'VIVC' }],
        confused_with: [{ name: 'Pinot Noir', how_to_differentiate: 'Pinot Noir tem taninos bem mais baixos (simulado)', source_url: 'https://www.guildsomm.com/x', source_title: 'GuildSomm' }],
        not_found: 'Espessura da casca e solos preferidos (simulado).'
      };
    } else {
      input = { fields: [{ field: 'aging', value: '12 meses em barricas (simulado)', source_url: 'https://produtor.example/ficha', source_title: 'Ficha técnica' }],
        profile: { acidity: 'alta', tannin: 'alto', body: 'medio+', alcohol: 'alto', sweetness: 'seco', intensity: '', finish: 'longa', source_url: 'https://produtor.example/ficha', source_title: 'Ficha técnica' },
        aromas: [{ name: 'Rosa', source_url: 'https://produtor.example/ficha' }], not_found: '' };
    }
    var urls = ['https://www.vivc.de/x', 'https://www.vivc.de/sangiovese', 'https://www.vivc.de/nebbiolo', 'https://www.jancisrobinson.com/x', 'https://www.guildsomm.com/x', 'https://produtor.example/ficha'];
    var resp = {
      model: body.model, stop_reason: 'tool_use',
      usage: { input_tokens: 18000, output_tokens: 1400, server_tool_use: { web_search_requests: 3 } },
      content: [
        { type: 'server_tool_use', id: 'srv1', name: 'web_search', input: { query: prompt.slice(0, 40) } },
        { type: 'web_search_tool_result', tool_use_id: 'srv1', content: urls.map(function (u) { return { type: 'web_search_result', url: u, title: u }; }) },
        { type: 'tool_use', id: 'tu1', name: 'registrar_dados', input: input }
      ]
    };
    return { getResponseCode: function () { return 200; }, getContentText: function () { return JSON.stringify(resp); } };
  } };
  g.__setMockKey = function () { props.ANTHROPIC_API_KEY = 'sk-ant-mock-key-000000000000000000000'; };

  // google.script.run assíncrono, com latência simulada.
  function runner(ok, fail) {
    return new Proxy({}, {
      get: function (_, name) {
        if (name === 'withSuccessHandler') return function (f) { return runner(f, fail); };
        if (name === 'withFailureHandler') return function (f) { return runner(ok, f); };
        return function () {
          var args = arguments;
          setTimeout(function () {
            try {
              // Repository memoiza por execução; no Apps Script cada chamada é uma execução nova.
              if (g.__resetExecution) g.__resetExecution();
              var r = g[name].apply(null, args);
              ok && ok(r);
            } catch (e) { console.error(e); fail && fail(e); }
          }, 120);
        };
      }
    });
  }
  // Imita o Apps Script: o app não pode mexer no hash da própria página (iframe);
  // a navegação passa por google.script.history.
  var histHandler = null, stack = [];
  g.google = { script: {
    get run() { return runner(null, null); },
    history: {
      push: function (state, params, hash) { stack.push({ state: state, hash: hash }); g.__lastPushedHash = hash; },
      setChangeHandler: function (f) { histHandler = f; }
    },
    url: { getLocation: function (cb) { setTimeout(function () { cb({ hash: (location.hash || '').replace(/^#/, ''), parameter: {} }); }, 0); } }
  } };
  g.__histBack = function () {
    stack.pop();
    var top = stack[stack.length - 1] || { state: null, hash: '/' };
    histHandler && histHandler({ state: top.state, location: { hash: top.hash } });
  };
})(window);
