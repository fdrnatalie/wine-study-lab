/**
 * Cache de tabelas inteiras no CacheService (limite de 100 KB por chave → dividido em partes).
 * Invalidado pelo Repository a cada escrita na tabela.
 */
var Cache = (function () {
  var CHUNK = 90 * 1024;

  function cache_() { return CacheService.getScriptCache(); }
  function key_(name) { return CONFIG.CACHE_PREFIX + name; }

  function get(name) {
    try {
      var c = cache_();
      var meta = c.get(key_(name));
      if (!meta) return null;
      var n = parseInt(meta, 10);
      var keys = [];
      for (var i = 0; i < n; i++) keys.push(key_(name) + ':' + i);
      var parts = c.getAll(keys);
      var s = '';
      for (var j = 0; j < n; j++) {
        if (parts[keys[j]] === undefined) return null;
        s += parts[keys[j]];
      }
      return JSON.parse(s);
    } catch (e) {
      return null;
    }
  }

  function put(name, value) {
    try {
      var s = JSON.stringify(value);
      var o = {}, n = Math.ceil(s.length / CHUNK) || 1;
      if (n > 50) return;                    // tabela grande demais para cachear; lê direto.
      for (var i = 0; i < n; i++) o[key_(name) + ':' + i] = s.slice(i * CHUNK, (i + 1) * CHUNK);
      o[key_(name)] = String(n);
      cache_().putAll(o, CONFIG.CACHE_TTL_SECONDS);
    } catch (e) {
      // Cache é otimização: falha silenciosa.
    }
  }

  function remove(name) {
    try { cache_().remove(key_(name)); } catch (e) { /* ignore */ }
  }

  return { get: get, put: put, remove: remove };
})();
