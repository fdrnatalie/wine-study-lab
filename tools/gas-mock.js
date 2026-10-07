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
    put: function (k, v) { cache[k] = String(v); },
    remove: function (k) { delete cache[k]; }
  }; } };
  g.LockService = { getScriptLock: function () { return { waitLock: function () {}, tryLock: function () { return true; }, releaseLock: function () {} }; } };
  var props = {};
  var scriptProps = props;
  g.PropertiesService = { getScriptProperties: function () { return {
    getProperty: function (k) { return props[k] || null; }, setProperty: function (k, v) { props[k] = v; },
    deleteProperty: function (k) { delete props[k]; },
    getProperties: function () { return Object.assign({}, props); }
  }; } };
  g.Session = {
    getActiveUser: function () { return { getEmail: function () { return 'dev@local'; } }; },
    getEffectiveUser: function () { return { getEmail: function () { return 'dev@local'; } }; }
  };

  // Resposta SIMULADA da API da Anthropic (mesma estrutura de uma resposta real).
  g.Utilities = { sleep: function () {} };
  // SHA-256 em JS puro (só para a simulação; o Apps Script tem o seu).
  function sha256Bytes(str) {
    var bytes = unescape(encodeURIComponent(str)).split('').map(function (c) { return c.charCodeAt(0); });
    var K = [], H = [], i, j;
    function frac(x) { return ((x - Math.floor(x)) * 4294967296) | 0; }
    for (var n = 2, c = 0; c < 64; n++) { var p = true; for (j = 2; j * j <= n; j++) if (n % j === 0) { p = false; break; } if (p) { if (c < 8) H[c] = frac(Math.pow(n, 1 / 2)); K[c++] = frac(Math.pow(n, 1 / 3)); } }
    var l = bytes.length * 8; bytes.push(0x80); while (bytes.length % 64 !== 56) bytes.push(0);
    for (i = 7; i >= 0; i--) bytes.push(i > 3 ? 0 : (l >>> (i * 8)) & 0xff);
    function r(x, n) { return (x >>> n) | (x << (32 - n)); }
    for (i = 0; i < bytes.length; i += 64) {
      var w = [];
      for (j = 0; j < 16; j++) w[j] = (bytes[i + j * 4] << 24) | (bytes[i + j * 4 + 1] << 16) | (bytes[i + j * 4 + 2] << 8) | bytes[i + j * 4 + 3];
      for (j = 16; j < 64; j++) { var s0 = r(w[j - 15], 7) ^ r(w[j - 15], 18) ^ (w[j - 15] >>> 3), s1 = r(w[j - 2], 17) ^ r(w[j - 2], 19) ^ (w[j - 2] >>> 10); w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0; }
      var a = H.slice();
      for (j = 0; j < 64; j++) {
        var t1 = (a[7] + (r(a[4], 6) ^ r(a[4], 11) ^ r(a[4], 25)) + ((a[4] & a[5]) ^ (~a[4] & a[6])) + K[j] + w[j]) | 0;
        var t2 = ((r(a[0], 2) ^ r(a[0], 13) ^ r(a[0], 22)) + ((a[0] & a[1]) ^ (a[0] & a[2]) ^ (a[1] & a[2]))) | 0;
        a = [(t1 + t2) | 0, a[0], a[1], a[2], (a[3] + t1) | 0, a[4], a[5], a[6]];
      }
      for (j = 0; j < 8; j++) H[j] = (H[j] + a[j]) | 0;
    }
    var out = [];
    H.forEach(function (h) { for (var k = 3; k >= 0; k--) { var b = (h >>> (k * 8)) & 0xff; out.push(b > 127 ? b - 256 : b); } });
    return out;
  }
  g.Utilities.DigestAlgorithm = { SHA_256: 'SHA_256' };
  g.Utilities.Charset = { UTF_8: 'UTF_8' };
  g.Utilities.computeDigest = function (alg, value) { return sha256Bytes(String(value)); };
  g.Utilities.getUuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (ch) { var v = Math.random() * 16 | 0; return (ch === 'x' ? v : (v & 3 | 8)).toString(16); });
  };
  g.ContentService = { MimeType: { JSON: 'json' }, createTextOutput: function (t) { return { text: t, setMimeType: function () { return this; }, getContent: function () { return t; } }; } };
  // Login SIMULADO: credencial "mock.<base64 do JSON {email,name}>.sig" → tokeninfo responde com esses dados.
  g.__mockCredential = function (email, name) {
    return 'mock.' + btoa(JSON.stringify({ email: email, name: name || email })).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_') + '.sig';
  };
  // OCR SIMULADO do Google Drive (foto do rótulo): devolve sempre o mesmo texto de demonstração.
  var DEMO_LABEL = 'Rótulo de demonstração (OCR simulado)\nCANTINA DEMO\nBAROLO\nDenominazione di Origine Controllata e Garantita\n' +
    'NEBBIOLO\nVendemmia 2019\n14,5% vol\n750 ml\nVino rosso\nPRODOTTO IN ITALIA';
  g.MimeType = { GOOGLE_DOCS: 'application/vnd.google-apps.document' };
  g.ScriptApp = { getOAuthToken: function () { return 'mock-token'; }, getService: function () { return { getUrl: function () { return 'jogo.html#'; } }; } };
  g.Utilities.newBlob = function (bytes, mime, name) { return { bytes: bytes, mime: mime, name: name }; };
  g.Utilities.base64Decode = function (b64) { return b64; };
  g.Drive = { Files: { create: function () { return { id: 'OCR_MOCK' }; } } };
  // Gatilhos simulados (rotina diária).
  var triggers = [];
  g.ScriptApp.getProjectTriggers = function () { return triggers.slice(); };
  g.ScriptApp.deleteTrigger = function (t) { triggers = triggers.filter(function (x) { return x !== t; }); };
  g.ScriptApp.newTrigger = function (fn) {
    var b = { timeBased: function () { return b; }, everyDays: function () { return b; }, everyHours: function () { return b; }, atHour: function () { return b; },
      create: function () { var t = { getHandlerFunction: function () { return fn; } }; triggers.push(t); return t; } };
    return b;
  };
  // Open Food Facts SIMULADO: um único código conhecido.
  var DEMO_EAN = { product_name: 'Barolo Demo DOCG (simulado)', brands: 'Cantina Demo', countries: 'Italia', origins: 'Piemonte, Barolo',
    categories: 'Vinhos, Vinhos tintos, Vinhos italianos', labels: 'DOCG', alcohol_value: 14.5 };
  g.UrlFetchApp = { fetch: function (url, opts) {
    if (/openfoodfacts\.org/.test(url)) {
      var known = /\/8001234567893\.json/.test(url);
      return { getResponseCode: function () { return known ? 200 : 404; },
        getContentText: function () { return JSON.stringify(known ? { status: 1, product: DEMO_EAN } : { status: 0 }); } };
    }
    if (/oauth2\.googleapis\.com\/tokeninfo/.test(url)) {
      var cred = decodeURIComponent(url.split('id_token=')[1]);
      var p = JSON.parse(atob(cred.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      var info = { aud: scriptProps.GOOGLE_CLIENT_ID, iss: 'https://accounts.google.com', email: p.email, email_verified: 'true', name: p.name, exp: String(Math.floor(Date.now() / 1000) + 3600) };
      return { getResponseCode: function () { return 200; }, getContentText: function () { return JSON.stringify(info); } };
    }
    if (/googleapis\.com\/drive/.test(url)) {
      return { getResponseCode: function () { return 200; }, getContentText: function () { return /export/.test(url) ? DEMO_LABEL : ''; } };
    }
    var body = JSON.parse(opts.payload);
    var tool = body.tools.filter(function (t) { return t.name === 'registrar_dados'; })[0];
    var props = tool.input_schema.properties;
    var prompt = body.messages[0].content;
    if (typeof prompt !== 'string') prompt = prompt.filter(function (b) { return b.type === 'text'; }).map(function (b) { return b.text; }).join('\n');
    var input;
    if (props.label) {
      input = { label: { name: 'Barolo (simulado)', producer: 'Cantina Demo', country: 'Itália', region: 'Piemonte', subregion: 'Barolo', vintage: '2019' },
        grapes: [{ name: 'Nebbiolo', percent: '100', source_url: 'rotulo' }],
        fields: [{ field: 'aging', value: '24 meses em botti de carvalho da Eslavônia (simulado)', source_url: 'https://produtor.example/ficha', source_title: 'Ficha técnica' },
          { field: 'serving_temp', value: '16–18 °C (simulado)', source_url: 'https://produtor.example/ficha', source_title: 'Ficha técnica' },
          { field: 'pairing', value: 'Carnes vermelhas e trufas (simulado)', source_url: 'https://exemplo.com/nao-buscado', source_title: 'Blog' }],
        not_found: 'Acidez total e açúcar residual (simulado).' };
    } else if (props.grapes) {
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
