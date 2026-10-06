/**
 * Contexto da chamada (quem está usando) e política de acesso por tabela.
 *
 * Toda chamada da API define o usuário (Ctx.setUser) ANTES de tocar em dados.
 * O Repository consulta Policy em toda leitura/escrita, então nenhum serviço consegue
 * ler ou alterar dados pessoais de outra pessoa por engano (ou por um id forjado).
 *
 * Ctx.asSystem(fn) roda fn sem filtro (instalação, migrações, sementes da enciclopédia, login).
 */
var Ctx = (function () {
  var user = null;
  var system = 0;

  function setUser(u) { user = u || null; }
  function current() { return user; }
  function userId() { return user ? user.id : ''; }
  function isAdmin() { return system > 0 || !!(user && user.role === 'admin'); }
  function isSystem() { return system > 0; }

  function asSystem(fn) {
    system++;
    try { return fn(); } finally { system--; }
  }

  function requireUser() {
    if (!user && !system) throw new Error('Faça login para continuar.');
    return user;
  }

  function requireAdmin() {
    if (!isAdmin()) throw new Error('Somente a administradora pode fazer isso.');
  }

  return { setUser: setUser, current: current, userId: userId, isAdmin: isAdmin, isSystem: isSystem,
    asSystem: asSystem, requireUser: requireUser, requireAdmin: requireAdmin };
})();

var Policy = (function () {
  var scopeOf_ = null;
  // Limites por usuário (cadastro aberto: evita que uma conta encha a planilha).
  var MAX_PERSONAL_ROWS = 20000;
  var MAX_WINES_PER_MEMBER = 2000;

  function scope(entity) {
    if (!scopeOf_) {
      scopeOf_ = {};
      Object.keys(SCOPES).forEach(function (s) { SCOPES[s].forEach(function (e) { scopeOf_[e] = s; }); });
    }
    return scopeOf_[entity] || 'admin';
  }

  function isPersonal(entity) { return scope(entity) === 'personal'; }

  /** Linha visível para o usuário atual? */
  function canRead(entity, row) {
    if (Ctx.isSystem()) return true;
    var s = scope(entity);
    if (s === 'personal') return !!row.user_id && row.user_id === Ctx.userId();
    if (s === 'system') return false;
    return true;
  }

  /** Quem pode alterar a linha de catálogo (vinho e o que pertence a ele). */
  function wineEditor_(wineId) {
    if (Ctx.isAdmin()) return true;
    var w = Repo.getRaw('wines', wineId);
    return !!(w && w.created_by && w.created_by === Ctx.userId());
  }

  function canWrite(entity, row, isInsert) {
    if (Ctx.isSystem()) return true;
    if (!Ctx.current()) return false;
    var s = scope(entity);
    if (s === 'system') return false;
    if (s === 'personal') return isInsert || row.user_id === Ctx.userId();
    if (s === 'admin') return Ctx.isAdmin();
    // catálogo
    switch (entity) {
      case 'wines': return isInsert || wineEditor_(row.id);
      case 'wine_grapes': return wineEditor_(row.wine_id);
      case 'profiles':
      case 'entity_aromas': return row.entity_type === 'wine' ? wineEditor_(row.entity_id) : Ctx.isAdmin();
      case 'producers':
      case 'appellations': return isInsert || Ctx.isAdmin();
    }
    return Ctx.isAdmin();
  }

  /** Ajusta um registro novo: dono/autor vêm sempre do contexto, nunca do navegador. */
  function stampInsert(entity, rec) {
    if (isPersonal(entity) && !(Ctx.isSystem() && rec.user_id)) rec.user_id = Ctx.userId();
    if (entity === 'wines' && !Ctx.isSystem()) rec.created_by = Ctx.userId();
    return rec;
  }

  /** Um patch nunca troca o dono de uma linha. */
  function cleanPatch(entity, patch) {
    if (Ctx.isSystem()) return patch;
    delete patch.user_id;
    delete patch.created_by;
    return patch;
  }

  function checkQuota(entity, adding, mineCount) {
    if (Ctx.isAdmin()) return;
    if (isPersonal(entity) && mineCount + adding > MAX_PERSONAL_ROWS) throw new Error('Limite de registros da sua conta atingido.');
    if (entity === 'wines' && mineCount + adding > MAX_WINES_PER_MEMBER) throw new Error('Limite de vinhos cadastrados pela sua conta atingido.');
  }

  return { scope: scope, isPersonal: isPersonal, canRead: canRead, canWrite: canWrite, stampInsert: stampInsert,
    cleanPatch: cleanPatch, checkQuota: checkQuota, wineEditor: wineEditor_ };
})();
