/**
 * Repository: a ÚNICA camada que conhece o Google Sheets.
 * Os serviços de domínio trabalham com objetos simples ({id, name, ...}).
 * Para migrar para outro banco, reimplemente as funções públicas deste arquivo.
 *
 * - Leitura em lote (getValues da aba inteira), memorizada por execução e no CacheService.
 * - Escrita em lote (setValues em bloco), com invalidação de cache.
 * - Colunas localizadas pelo nome do cabeçalho.
 */
var Repo = (function () {
  var memo = {};
  var ss_ = null;

  function ss() {
    if (!ss_) {
      var id = typeof LOCAL_SPREADSHEET_ID !== 'undefined' ? LOCAL_SPREADSHEET_ID : CONFIG.SPREADSHEET_ID;
      ss_ = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
    }
    return ss_;
  }

  function def(entity) {
    var d = SCHEMA[entity];
    if (!d) throw new Error('Entidade desconhecida: ' + entity);
    return d;
  }

  function sheet(entity) {
    var sh = ss().getSheetByName(def(entity).sheet);
    if (!sh) throw new Error('Aba ' + def(entity).sheet + ' não existe. Execute setup().');
    return sh;
  }

  function typesOf(entity) {
    var t = {};
    Schema.columns(entity).forEach(function (c) { t[c.name] = c.type; });
    return t;
  }

  function fromCell(v, type) {
    if (v === '' || v === null || v === undefined) {
      return type === 'bool' ? false : (type === 'json' ? null : '');
    }
    if (v instanceof Date) return v.toISOString();
    switch (type) {
      case 'number': return typeof v === 'number' ? v : Util.parseNumber(v);
      case 'bool': return v === true || String(v).toUpperCase() === 'TRUE';
      case 'json':
        if (typeof v !== 'string') return v;
        try { return JSON.parse(v); } catch (e) { return null; }
      default: return typeof v === 'string' ? v : String(v);
    }
  }

  function toCell(v, type) {
    if (v === null || v === undefined) return '';
    switch (type) {
      case 'json': return v === '' ? '' : JSON.stringify(v);
      case 'bool': return !!v;
      case 'number': return v === '' ? '' : (typeof v === 'number' ? v : (Util.parseNumber(v) === null ? '' : Util.parseNumber(v)));
      default: return String(v);
    }
  }

  /** Todos os registros da tabela (cópia rasa — pode ser modificada pelo chamador). */
  function all(entity) {
    if (!memo[entity]) {
      var cached = Cache.get(entity);
      memo[entity] = cached || readSheet_(entity);
      if (!cached) Cache.put(entity, memo[entity]);
    }
    return memo[entity].map(function (r) { return Object.assign({}, r); });
  }

  function readSheet_(entity) {
    var values = sheet(entity).getDataRange().getValues();
    if (values.length < 2) return [];
    var header = values[0].map(String);
    var types = typesOf(entity);
    var out = [];
    for (var i = 1; i < values.length; i++) {
      var row = values[i], o = {};
      for (var c = 0; c < header.length; c++) {
        if (!header[c]) continue;
        o[header[c]] = fromCell(row[c], types[header[c]] || 'string');
      }
      if (o.id) out.push(o);
    }
    return out;
  }

  function get(entity, id) {
    var list = all(entity);
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function where(entity, pred) {
    if (typeof pred === 'function') return all(entity).filter(pred);
    return all(entity).filter(function (r) {
      for (var k in pred) if (r[k] !== pred[k]) return false;
      return true;
    });
  }

  function invalidate_(entity) {
    delete memo[entity];
    Cache.remove(entity);
  }

  /** Insere registros. Gera id/created_at/updated_at. Retorna os registros com id. */
  function insert(entity, records) {
    if (!records || !records.length) return [];
    var sh = sheet(entity);
    var header = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
    var types = typesOf(entity);
    var now = Util.nowIso();
    var saved = records.map(function (r) {
      var o = Object.assign({}, r);
      o.id = o.id || Util.newId(def(entity).prefix);
      o.created_at = o.created_at || now;
      o.updated_at = now;
      return o;
    });
    var rows = saved.map(function (o) {
      return header.map(function (h) { return h ? toCell(o[h], types[h] || 'string') : ''; });
    });
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, header.length).setValues(rows);
    invalidate_(entity);
    return saved;
  }

  /** Atualiza registros existentes (patch parcial por id). Retorna quantos foram atualizados. */
  function update(entity, patches) {
    if (!patches || !patches.length) return 0;
    var sh = sheet(entity);
    var values = sh.getDataRange().getValues();
    var header = values[0].map(String);
    var types = typesOf(entity);
    var idCol = header.indexOf('id');
    var rowById = {};
    for (var i = 1; i < values.length; i++) rowById[values[i][idCol]] = i;
    var now = Util.nowIso(), minRow = Infinity, maxRow = -1, n = 0;
    patches.forEach(function (p) {
      var ri = rowById[p.id];
      if (ri === undefined) return;
      var patch = Object.assign({}, p, { updated_at: now });
      for (var k in patch) {
        var c = header.indexOf(k);
        if (c < 0 || k === 'id' || k === 'created_at') continue;
        values[ri][c] = toCell(patch[k], types[k] || 'string');
      }
      minRow = Math.min(minRow, ri); maxRow = Math.max(maxRow, ri); n++;
    });
    if (n) {
      var block = values.slice(minRow, maxRow + 1);
      sh.getRange(minRow + 1, 1, block.length, header.length).setValues(block);
      invalidate_(entity);
    }
    return n;
  }

  /** Remove registros por id (usado para tabelas de ligação e rascunhos). */
  function remove(entity, ids) {
    if (!ids || !ids.length) return 0;
    var set = {};
    ids.forEach(function (id) { set[id] = true; });
    var sh = sheet(entity);
    var values = sh.getDataRange().getValues();
    var idCol = values[0].map(String).indexOf('id');
    var rows = [];
    for (var i = 1; i < values.length; i++) if (set[values[i][idCol]]) rows.push(i + 1);
    for (var j = rows.length - 1; j >= 0; j--) sh.deleteRow(rows[j]);
    if (rows.length) invalidate_(entity);
    return rows.length;
  }

  /** Executa fn com lock de script (escritas concorrentes: duas abas abertas, por exemplo). */
  function withLock(fn) {
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try { return fn(); } finally { lock.releaseLock(); }
  }

  function spreadsheet() { return ss(); }

  return { all: all, get: get, where: where, insert: insert, update: update, remove: remove,
    withLock: withLock, spreadsheet: spreadsheet };
})();
