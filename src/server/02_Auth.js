/**
 * Autenticação e usuários (v5: vários usuários).
 *
 * - Login com Google (Google Identity Services no navegador): o servidor recebe o "ID token",
 *   confere no próprio Google (tokeninfo) se foi emitido para o NOSSO cliente OAuth, e cria uma
 *   sessão. O app nunca vê nem guarda senha.
 * - Sessão: token aleatório entregue ao navegador; na planilha fica só o hash SHA-256.
 * - Cadastro aberto: qualquer conta Google com e-mail verificado entra como "membro".
 *   A dona (OWNER_EMAIL, gravado no setup) é sempre "admin". Usuários podem ser bloqueados.
 * - O app antigo dentro do Apps Script (google.script.run) continua funcionando só para a dona.
 */
var Auth = (function () {
  var CLIENT_PROP = 'GOOGLE_CLIENT_ID';
  var SESSION_DAYS = 30;
  var CACHE_SECONDS = 6 * 60 * 60;
  var ISSUERS = ['accounts.google.com', 'https://accounts.google.com'];

  function props_() { return PropertiesService.getScriptProperties(); }
  function cache_() { return CacheService.getScriptCache(); }

  function ownerEmail() { return props_().getProperty('OWNER_EMAIL'); }

  function registerOwner() {
    var me = Session.getEffectiveUser().getEmail();
    if (!me) throw new Error('Não foi possível identificar o usuário.');
    props_().setProperty('OWNER_EMAIL', me);
    return me;
  }

  function clientId() { return props_().getProperty(CLIENT_PROP) || ''; }

  function setClientId(id) {
    id = String(id || '').trim();
    if (!/^[0-9]+-[a-z0-9]+\.apps\.googleusercontent\.com$/.test(id)) throw new Error('ID do cliente OAuth inválido.');
    props_().setProperty(CLIENT_PROP, id);
    return id;
  }

  function sha256_(s) {
    return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8)
      .map(function (b) { return ('0' + (b & 0xff).toString(16)).slice(-2); }).join('');
  }

  function publicUser(u) {
    return u ? { id: u.id, email: u.email, name: u.name || '', picture: u.picture || '', role: u.role } : null;
  }

  function findByEmail_(email) {
    var key = String(email).toLowerCase();
    return Repo.all('users').filter(function (u) { return String(u.email).toLowerCase() === key; })[0] || null;
  }

  /** Garante o usuário administradora (a dona da planilha). */
  function ensureAdmin() {
    return Ctx.asSystem(function () {
      var email = ownerEmail();
      if (!email) throw new Error('O sistema ainda não foi instalado. Execute a função setup() no editor do Apps Script.');
      var u = findByEmail_(email);
      if (!u) u = Repo.insert('users', [{ email: email, name: '', role: 'admin', status: 'ativo', source: 'sistema' }])[0];
      else if (u.role !== 'admin') { Repo.update('users', [{ id: u.id, role: 'admin' }]); u.role = 'admin'; }
      return u;
    });
  }

  /** Confere o ID token no Google. Devolve {email, name, picture}. */
  function verifyGoogle_(credential) {
    var cid = clientId();
    if (!cid) throw new Error('O login com Google ainda não foi configurado (falta o ID do cliente OAuth).');
    if (typeof credential !== 'string' || credential.length > 4096 || !/^[\w-]+\.[\w-]+\.[\w-]+$/.test(credential)) throw new Error('Login inválido.');
    var res = UrlFetchApp.fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(credential), { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) throw new Error('Login expirado ou inválido. Tente entrar de novo.');
    var t = JSON.parse(res.getContentText());
    if (t.aud !== cid || ISSUERS.indexOf(t.iss) < 0 || String(t.email_verified) !== 'true' || Number(t.exp) * 1000 < Date.now()) {
      throw new Error('Login inválido.');
    }
    return { email: String(t.email).toLowerCase(), name: Util.clampStr(t.name || '', 120), picture: /^https:\/\//.test(t.picture || '') ? Util.clampStr(t.picture, 500) : '' };
  }

  function login(credential, userAgent) {
    // Teto global de tentativas por minuto (a rota de login é pública).
    var lk = 'rl:login:' + Math.floor(Date.now() / 60000);
    var tries = Number(cache_().get(lk) || 0) + 1;
    cache_().put(lk, String(tries), 120);
    if (tries > 60) throw new Error('Muitas tentativas de login agora. Tente em um minuto.');
    var g = verifyGoogle_(credential);
    return Ctx.asSystem(function () {
      return Repo.withLock(function () {
        var owner = String(ownerEmail() || '').toLowerCase();
        var u = findByEmail_(g.email);
        if (!u) {
          u = Repo.insert('users', [{ email: g.email, name: g.name, picture: g.picture, role: g.email === owner ? 'admin' : 'membro',
            status: 'ativo', last_seen_at: Util.nowIso(), source: 'sistema' }])[0];
        } else {
          if (u.status === 'bloqueado') throw new Error('Esta conta foi bloqueada.');
          Repo.update('users', [{ id: u.id, name: g.name || u.name, picture: g.picture || u.picture, last_seen_at: Util.nowIso() }]);
        }
        var token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
        var hash = sha256_(token);
        var expires = new Date(Date.now() + SESSION_DAYS * 864e5).toISOString();
        Repo.insert('sessions', [{ token_hash: hash, user_id: u.id, expires_at: expires, user_agent: Util.clampStr(userAgent || '', 200), source: 'sistema' }]);
        cache_().put('ses:' + hash, JSON.stringify({ user_id: u.id, expires_at: expires }), CACHE_SECONDS);
        return { token: token, user: publicUser(Repo.get('users', u.id)) };
      });
    });
  }

  /** Usuário da sessão (ou erro). */
  function fromToken(token) {
    if (typeof token !== 'string' || !/^[0-9a-f]{64}$/.test(token)) throw new Error('SESSAO: Faça login para continuar.');
    var hash = sha256_(token);
    return Ctx.asSystem(function () {
      var s = null, c = cache_().get('ses:' + hash);
      if (c) s = JSON.parse(c);
      else {
        var row = Repo.all('sessions').filter(function (x) { return x.token_hash === hash; })[0];
        if (row) { s = { user_id: row.user_id, expires_at: row.expires_at }; cache_().put('ses:' + hash, JSON.stringify(s), CACHE_SECONDS); }
      }
      if (!s || new Date(s.expires_at).getTime() < Date.now()) throw new Error('SESSAO: Sua sessão expirou. Entre de novo.');
      var u = Repo.get('users', s.user_id);
      if (!u || u.status !== 'ativo') throw new Error('SESSAO: Acesso não liberado.');
      return u;
    });
  }

  function logout(token) {
    if (typeof token !== 'string' || !/^[0-9a-f]{64}$/.test(token)) return true;
    var hash = sha256_(token);
    cache_().remove('ses:' + hash);
    Ctx.asSystem(function () {
      var ids = Repo.all('sessions').filter(function (x) { return x.token_hash === hash; }).map(function (x) { return x.id; });
      Repo.remove('sessions', ids);
    });
    return true;
  }

  /** App antigo (HtmlService): só a dona, identificada pela conta Google ativa. */
  function fromGoogleSession() {
    var owner = ownerEmail();
    if (!owner) throw new Error('O sistema ainda não foi instalado. Execute a função setup() no editor do Apps Script.');
    var me = Session.getActiveUser().getEmail();
    if (!me || me.toLowerCase() !== owner.toLowerCase()) throw new Error('Acesso negado.');
    return ensureAdmin();
  }

  /** Mantido por compatibilidade (página do jogo no Apps Script). */
  function assertOwner() { Ctx.setUser(fromGoogleSession()); }

  /** Limite de chamadas por minuto (cadastro aberto). */
  function rateLimit(user, method) {
    if (!user || user.role === 'admin') return;
    var c = cache_();
    var minute = Math.floor(Date.now() / 60000);
    var k = 'rl:' + user.id + ':' + minute;
    var n = Number(c.get(k) || 0) + 1;
    c.put(k, String(n), 120);
    if (n > 120) throw new Error('Muitas ações em pouco tempo. Espere um minuto.');
    if (method === 'label.read') {
      var hk = 'rlh:' + user.id + ':' + Math.floor(Date.now() / 3600000);
      var h = Number(c.get(hk) || 0) + 1;
      c.put(hk, String(h), 3700);
      if (h > 30) throw new Error('Limite de leituras de rótulo por hora atingido.');
    }
  }

  // ---------- Administração ----------
  function listUsers() {
    Ctx.requireAdmin();
    return Ctx.asSystem(function () {
      return Repo.all('users').map(function (u) {
        return { id: u.id, email: u.email, name: u.name, role: u.role, status: u.status, last_seen_at: u.last_seen_at, created_at: u.created_at };
      }).sort(function (a, b) { return String(b.last_seen_at).localeCompare(String(a.last_seen_at)); });
    });
  }

  function setStatus(id, status) {
    Ctx.requireAdmin();
    Validate.oneOf(status, ['ativo', 'bloqueado'], 'situação');
    return Ctx.asSystem(function () {
      var u = Repo.get('users', Validate.id(id));
      if (!u) throw new Error('Usuário não encontrado.');
      if (u.role === 'admin') throw new Error('A administradora não pode ser bloqueada.');
      Repo.update('users', [{ id: u.id, status: status }]);
      if (status === 'bloqueado') {
        var sess = Repo.all('sessions').filter(function (s) { return s.user_id === u.id; });
        sess.forEach(function (s) { cache_().remove('ses:' + s.token_hash); });
        Repo.remove('sessions', sess.map(function (s) { return s.id; }));
      }
      return listUsers();
    });
  }

  return { ownerEmail: ownerEmail, registerOwner: registerOwner, clientId: clientId, setClientId: setClientId,
    ensureAdmin: ensureAdmin, login: login, fromToken: fromToken, logout: logout, fromGoogleSession: fromGoogleSession,
    assertOwner: assertOwner, rateLimit: rateLimit, publicUser: publicUser, listUsers: listUsers, setStatus: setStatus };
})();
