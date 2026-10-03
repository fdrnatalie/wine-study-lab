/**
 * Funções utilitárias puras (sem acesso a serviços do Google).
 * Rodam também em Node, nos testes de tests/run.js.
 */
var Util = (function () {
  var ID_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

  function newId(prefix) {
    var t = Date.now().toString(32).toUpperCase();
    var r = '';
    for (var i = 0; i < 6; i++) r += ID_ALPHABET.charAt(Math.floor(Math.random() * ID_ALPHABET.length));
    return prefix + '_' + t + r;
  }

  function nowIso() { return new Date().toISOString(); }

  function isBlank(v) { return v === null || v === undefined || String(v).trim() === ''; }

  /** Chave de comparação: sem acento, minúscula, só letras/números separados por espaço. */
  function normKey(s) {
    if (isBlank(s)) return '';
    return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }

  var LOWER_WORDS = { 'di': 1, 'da': 1, 'de': 1, 'del': 1, 'della': 1, 'delle': 1, 'dei': 1, 'do': 1, 'dos': 1,
    'das': 1, 'du': 1, 'des': 1, 'la': 1, 'le': 1, 'e': 1, 'et': 1, 'y': 1, 'von': 1, 'van': 1 };

  /** "BARBERA D'ASTI" → "Barbera d'Asti"; "PRIMITIVO DI MANDURIA" → "Primitivo di Manduria". */
  function smartTitle(s) {
    if (isBlank(s)) return '';
    var words = String(s).trim().toLowerCase().split(/\s+/);
    return words.map(function (w, i) {
      var m = w.match(/^([dl])['’](.+)$/);            // d'asti, l'aquila
      if (m) return m[1] + '\'' + cap(m[2]);
      if (i > 0 && LOWER_WORDS[w]) return w;
      return w.split('-').map(cap).join('-');
    }).join(' ');
  }
  function cap(w) { return w ? w.charAt(0).toUpperCase() + w.slice(1) : w; }

  /** Converte "13,5", "13.5%", "$8.00", "R$ 1.234,56" em número. Retorna null se não for número. */
  function parseNumber(v) {
    if (typeof v === 'number') return isFinite(v) ? v : null;
    if (isBlank(v)) return null;
    var s = String(v).replace(/[^0-9,.\-]/g, '');
    if (!s || !/[0-9]/.test(s)) return null;
    if (s.indexOf(',') >= 0 && s.indexOf('.') >= 0) {
      // O último separador é o decimal.
      if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
      else s = s.replace(/,/g, '');
    } else if (s.indexOf(',') >= 0) {
      s = s.replace(',', '.');
    }
    var n = parseFloat(s);
    return isFinite(n) ? n : null;
  }

  var AI_ERROR_PATTERNS = [
    /i do not have enough information/i,
    /i don'?t have enough information/i,
    /n[ãa]o tenho informa[çc][õo]es suficientes/i,
    /please (specify|provide)/i,
    /por favor,? (informe|preencha|forne[çc]a)/i,
    /#(ERROR|N\/A|REF|VALUE|NAME)[!?]?/i
  ];
  /** Detecta respostas de erro de IA/fórmula que não devem ser importadas como dado. */
  function isAiErrorText(v) {
    if (isBlank(v)) return false;
    var s = String(v);
    for (var i = 0; i < AI_ERROR_PATTERNS.length; i++) if (AI_ERROR_PATTERNS[i].test(s)) return true;
    return false;
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    var m = a.length, n = b.length, prev = [], cur = [], i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur = [i];
      for (j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  /** "3-4" → {lo:3, hi:4}; "4" → {lo:4, hi:4}; vazio → null. */
  function parseRange(v) {
    if (isBlank(v)) return null;
    if (typeof v === 'number') return { lo: v, hi: v };
    var m = String(v).match(/^\s*(\d+(?:\.\d+)?)\s*(?:-\s*(\d+(?:\.\d+)?))?\s*$/);
    if (!m) return null;
    var lo = parseFloat(m[1]), hi = m[2] ? parseFloat(m[2]) : lo;
    return { lo: Math.min(lo, hi), hi: Math.max(lo, hi) };
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function indexBy(list, key) {
    var o = {};
    (list || []).forEach(function (x) { o[x[key]] = x; });
    return o;
  }

  function groupBy(list, key) {
    var o = {};
    (list || []).forEach(function (x) {
      var k = typeof key === 'function' ? key(x) : x[key];
      (o[k] = o[k] || []).push(x);
    });
    return o;
  }

  /** Valor mais frequente (moda) e se houve divergência. */
  function mode(values) {
    var counts = {}, best = null, bestN = 0, distinct = 0;
    values.forEach(function (v) {
      if (isBlank(v)) return;
      if (!counts[v]) distinct++;
      counts[v] = (counts[v] || 0) + 1;
      if (counts[v] > bestN) { best = v; bestN = counts[v]; }
    });
    return { value: best, distinct: distinct, counts: counts };
  }

  function clampStr(s, max) {
    s = isBlank(s) ? '' : String(s);
    return s.length > max ? s.slice(0, max) : s;
  }

  return {
    newId: newId, nowIso: nowIso, isBlank: isBlank, normKey: normKey, smartTitle: smartTitle,
    parseNumber: parseNumber, isAiErrorText: isAiErrorText, levenshtein: levenshtein,
    parseRange: parseRange, shuffle: shuffle, indexBy: indexBy, groupBy: groupBy, mode: mode, clampStr: clampStr
  };
})();
