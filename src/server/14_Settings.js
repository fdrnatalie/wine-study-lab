/**
 * Configurações, escalas e regras de pontuação.
 *
 * Escalas: valores são gravados pela CHAVE do nível (ex.: "media+"), legível na planilha.
 * Uma faixa (usada no perfil típico de uvas) é gravada como "media..alta".
 */
var Settings = (function () {

  function all() {
    var o = {};
    Repo.all('settings').forEach(function (s) { o[s.key] = s.value; });
    return o;
  }

  function get(key, fallback) {
    var v = all()[key];
    return Util.isBlank(v) ? fallback : v;
  }

  function getNumber(key, fallback) {
    var n = Util.parseNumber(get(key, ''));
    return n === null ? fallback : n;
  }

  function set(key, value) {
    var existing = Repo.where('settings', { key: key })[0];
    if (existing) Repo.update('settings', [{ id: existing.id, value: String(value) }]);
    else Repo.insert('settings', [{ key: key, value: String(value), source: 'sistema' }]);
  }

  /** { acidity: [{key,label,position,synonyms}], ... } ordenado por posição. */
  function scales() {
    var g = Util.groupBy(Repo.all('scales'), 'scale');
    Object.keys(g).forEach(function (k) { g[k].sort(function (a, b) { return a.position - b.position; }); });
    return g;
  }

  function rules() {
    return Repo.all('scoring_rules').sort(function (a, b) { return a.order - b.order; });
  }

  function saveRules(patches) {
    var valid = {};
    rules().forEach(function (r) { valid[r.id] = true; });
    var clean = (patches || []).filter(function (p) { return valid[p.id]; }).map(function (p) {
      var w = Util.parseNumber(p.weight);
      if (w === null || w < 0 || w > 1000) throw new Error('Peso inválido para ' + p.id);
      var out = { id: p.id, weight: w, active: !!p.active };
      if (p.params && typeof p.params === 'object') out.params = p.params;
      return out;
    });
    Repo.update('scoring_rules', clean);
    return rules();
  }

  return { all: all, get: get, getNumber: getNumber, set: set, scales: scales, rules: rules, saveRules: saveRules };
})();

/** Funções puras sobre escalas (usadas pelo Import e pelo Scoring; testáveis em Node). */
var ScaleUtil = (function () {
  /** Converte texto livre ("Média-alta", "Alta") na chave do nível da escala, ou '' se não reconhecer. */
  function resolve(scaleLevels, text) {
    if (Util.isBlank(text) || !scaleLevels) return '';
    var raw = String(text).trim().toLowerCase();
    var k = Util.normKey(text);
    for (var i = 0; i < scaleLevels.length; i++) {
      var lv = scaleLevels[i];
      if (lv.key === raw) return lv.key;
      var syn = String(lv.synonyms || '').split('|');
      for (var j = 0; j < syn.length; j++) {
        var s = syn[j].trim().toLowerCase();
        if (!s) continue;
        // Compara preservando + e − (que o normKey removeria).
        if (s === raw) return lv.key;
        var signS = /[+]$/.test(s) ? '+' : (/-$/.test(s) ? '-' : '');
        var signR = /[+]$/.test(raw) ? '+' : (/[-−]$/.test(raw) ? '-' : '');
        if (signS === signR && Util.normKey(s) === k) return lv.key;
      }
    }
    return '';
  }

  function position(scaleLevels, key) {
    if (!scaleLevels) return null;
    for (var i = 0; i < scaleLevels.length; i++) if (scaleLevels[i].key === key) return scaleLevels[i].position;
    return null;
  }

  /** "media..alta" → {lo: 3, hi: 5}; "media" → {lo:3, hi:3}. */
  function range(scaleLevels, value) {
    if (Util.isBlank(value)) return null;
    var parts = String(value).split('..');
    var lo = position(scaleLevels, parts[0].trim());
    var hi = position(scaleLevels, (parts[1] || parts[0]).trim());
    if (lo === null || hi === null) return null;
    return { lo: Math.min(lo, hi), hi: Math.max(lo, hi) };
  }

  function label(scaleLevels, key) {
    if (!scaleLevels) return key;
    for (var i = 0; i < scaleLevels.length; i++) if (scaleLevels[i].key === key) return scaleLevels[i].label;
    return key;
  }

  return { resolve: resolve, position: position, range: range, label: label };
})();
