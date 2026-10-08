/**
 * Pontos de entrada do Apps Script:
 *  - doPost() : API JSON usada pelo site (GitHub Pages). Cada chamada traz o token da sessão
 *               (login com Google, ver 02_Auth.js); métodos numa lista fechada; erros padronizados.
 *  - api()    : a mesma API para a interface antiga servida pelo Apps Script (google.script.run),
 *               que só a dona usa.
 *  - doGet()  : interface antiga + página do jogo.
 *  - setup()  : instalação (rodar uma vez pelo editor).
 *  - onOpen() : menu "Wine Study Lab" na planilha.
 */

function doGet(e) {
  // Depois que o site com login entra no ar, este endereço só aponta para ele.
  var site = PropertiesService.getScriptProperties().getProperty('SITE_URL') || (typeof LOCAL_SITE_URL !== 'undefined' ? LOCAL_SITE_URL : '');
  if (site) {
    return HtmlService.createHtmlOutput('<p style="font:16px system-ui;margin:40px">O Wine Study Lab agora fica em ' +
      '<a target="_top" href="' + site.replace(/"/g, '') + '">' + site.replace(/</g, '') + '</a>.</p>').setTitle(CONFIG.APP_NAME);
  }
  if (e && e.parameter && e.parameter.page === 'jogo') return gamePage_();
  var t = HtmlService.createTemplateFromFile('client/index');
  return t.evaluate()
    .setTitle(CONFIG.APP_NAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Jogo "Degustação às Cegas" (FDR Wine Lab), aberto em outra aba, com os catálogos da planilha. */
function gamePage_() {
  Ctx.asSystem(ensureSchema_);
  Auth.assertOwner();
  var t = HtmlService.createTemplateFromFile('game/index');
  t.gameData = GameData.json();
  return t.evaluate()
    .setTitle('Degustação às Cegas · FDR Wine Lab')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Endereço do jogo (mesmo app, ?page=jogo). */
function gameUrl_() {
  var url = '';
  try { url = ScriptApp.getService().getUrl() || ''; } catch (e) { console.error('gameUrl', e); }
  // Reserva: endereço do app em 00_Local.js (fora do Git), caso o Google não informe a URL.
  if (!url && typeof LOCAL_WEBAPP_URL !== 'undefined') url = LOCAL_WEBAPP_URL;
  return url ? url.replace(/\/dev$/, '/exec') + '?page=jogo' : '';
}

/** Inclui um arquivo HTML dentro de outro (usado no template). */
function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}

var API_METHODS = {
  'bootstrap': function () { return { lookups: Catalog.lookups(), dashboard: Stats.dashboard(), app: { name: CONFIG.APP_NAME, version: CONFIG.SCHEMA_VERSION, game_url: gameUrl_() } }; },
  'dashboard': function () { return Stats.dashboard(); },
  'lookups': function () { return Catalog.lookups(); },

  'wines.list': function () { return Wines.list(); },
  'wines.get': function (a) { return Wines.get(a.id); },
  'wines.save': function (a) { return Wines.save(a.wine); },
  'label.read': function (a) { return Label.read(a.image, a.mime); },
  'label.ai': function (a) { return Enrichment.label(a.image, a.mime, a.text); },
  'barcode.lookup': function (a) { return Barcode.lookup(a.code); },
  'routine.status': function () { return Routine.status(); },
  'routine.configure': function (a) { return Routine.configure(a); },
  'routine.run': function () { return Routine.run(true); },

  'grapes.list': function () { return Grapes.list(); },
  'grapes.get': function (a) { return Grapes.get(a.id); },
  'grapes.save': function (a) { return Grapes.save(a.grape); },
  'grapes.verify': function (a) { return Grapes.verifyFields(a.id, a.fields); },
  'grapes.compare': function (a) { return Grapes.compare(a.ids); },
  'grapes.genealogy': function () { return Grapes.genealogy(); },

  'profiles.save': function (a) { return Catalog.saveProfile(a.entity_type, a.entity_id, a.profile || {}); },

  'bottles.list': function () { return Bottles.list(); },
  'bottles.batches': function () { return Bottles.batches(); },
  'bottles.fractionate': function (a) { return Bottles.fractionate(a); },
  'bottles.setStatus': function (a) { return Bottles.setStatus(a.ids, a.status, a.notes); },

  'tastings.list': function () { return Tastings.list(); },
  'tastings.create': function (a) { return Tastings.create(a); },
  'tastings.play': function (a) { return Tastings.getPlay(a.id); },
  'tastings.saveAnswers': function (a) { return Tastings.saveAnswers(a.sample_id, a.answers, a.completed); },
  'tastings.reveal': function (a) { return Tastings.reveal(a.id); },
  'tastings.report': function (a) { return Tastings.getReport(a.id); },
  'tastings.cancel': function (a) { return Tastings.cancel(a.id); },

  'notes.list': function () { return Notes.list(); },
  'notes.save': function (a) { return Notes.save(a.note); },
  'notes.remove': function (a) { return Notes.remove(a.id); },

  'search': function (a) { return Search.run(a.q); },
  'quiz.generate': function (a) { return Quiz.generate({ tasting_id: a.tasting_id, n: a.n, cards: a.cards, country_id: a.country_id, level: a.level }); },

  'settings.get': function () {
    return { settings: Repo.all('settings'), rules: Settings.rules(), scales: Settings.scales(), last_log: Ctx.isAdmin() ? Import.lastLog(60) : [] };
  },
  'settings.saveRules': function (a) { return Settings.saveRules(a.rules); },
  'settings.set': function (a) {
    var editable = { near_credit: [0, 1], aroma_subcategory_credit: [0, 1] };
    if (a.key === 'alcohol_thresholds') {
      var p = String(a.value).split(',').map(Util.parseNumber);
      if (p.length !== 2 || p[0] === null || p[1] === null || p[0] >= p[1]) throw new Error('Use o formato "11,14".');
      Settings.set(a.key, p.join(','));
      return true;
    }
    if (!editable[a.key]) throw new Error('Configuração não editável: ' + a.key);
    Settings.set(a.key, Validate.num(a.value, editable[a.key][0], editable[a.key][1], a.key));
    return true;
  },
  'sync.run': function () { return Import.run(); },
  'regions.countries': function () { return Regions.countries(); },
  'regions.country': function (a) { return Regions.country(a.id); },
  'regions.get': function (a) { return Regions.get(a.id); },
  'study.topic': function (a) { return Study.topic(String(a.topic || '')); },
  'study.counts': function () { return Study.counts(); },
  'seed.regions': function (p) { var r = SeedRegions.run(!(p && p.resume)); r.lookups = Catalog.lookups(); return r; },
  'seed.grapes': function () { var x = SeedEncyclopedia.runAll(true); var r = Object.assign({}, x.report || {}, { remaining: x.remaining }); r.lookups = Catalog.lookups(); return r; },

  'ai.status': function () { return Enrichment.status(); },
  'ai.setKey': function (a) { AiProvider.setKey(a.key); return Enrichment.status(); },
  'ai.removeKey': function () { AiProvider.removeKey(); return Enrichment.status(); },
  'ai.setConfig': function (a) {
    Settings.set('ai_model', Validate.oneOf(a.model, AiProvider.MODELS, 'modelo'));
    Settings.set('ai_effort', Validate.oneOf(a.effort, ['low', 'medium', 'high'], 'esforço'));
    Settings.set('ai_max_searches', Validate.num(a.max_searches, 1, 10, 'Buscas por pesquisa') || 5);
    return Enrichment.status();
  },
  'ai.grape': function (a) { return Enrichment.grape(a.id); },
  'ai.wine': function (a) { return Enrichment.wine(a.id); },
  'ai.catalog': function (a) { return Enrichment.catalog(a.query); },
  'ai.pending': function () { return Enrichment.pending(); },
  'ai.review': function (a) {
    var r = Enrichment.review(a.ids, a.action, a.edits);
    r.lookups = Catalog.lookups();
    return r;
  },

  // ---------- Login e usuários (v5) ----------
  'auth.config': function () { return { client_id: Auth.clientId() }; },
  'debug.last': function () { return JSON.parse(PropertiesService.getScriptProperties().getProperty('DEBUG_LAST') || 'null'); },
  'auth.login': function (a) { return Auth.login(a.credential, a.user_agent); },
  'auth.me': function () { return Auth.publicUser(Ctx.current()); },
  'auth.setClientId': function (a) { return { client_id: Auth.setClientId(a.client_id) }; },
  'users.list': function () { return Auth.listUsers(); },
  'users.setStatus': function (a) { return Auth.setStatus(a.id, a.status); },
  'game.data': function () { return GameData.build(); }
};

// Sem login.
var PUBLIC_METHODS = { 'auth.config': 1, 'auth.login': 1, 'debug.last': 1 };
// Só a administradora (enciclopédia, sincronização, IA, configurações, usuários).
var ADMIN_METHODS = /^(sync\.|seed\.|ai\.|routine\.|label\.ai$|grapes\.(save|verify)$|settings\.(set|saveRules)$|users\.|auth\.setClientId$)/;

/**
 * Executa um método da API. resolveUser() identifica quem chama (sessão ou conta Google).
 * Ordem: estrutura da planilha (como sistema) → usuário → limites → permissão → método.
 */
function dispatch_(method, args, resolveUser) {
  var T = [Date.now()], mark = function () { T.push(Date.now()); };
  try {
    if (method === 'debug.ping') return { ok: true, data: 'pong' };
    var fn = API_METHODS[method];
    if (typeof method !== 'string' || !fn || !Object.prototype.hasOwnProperty.call(API_METHODS, method)) throw new Error('Método desconhecido.');
    Ctx.setUser(null);
    Ctx.asSystem(ensureSchema_); mark();
    if (!PUBLIC_METHODS[method]) {
      var user = resolveUser(); mark();
      Ctx.setUser(user);
      Auth.rateLimit(user, method);
      if (ADMIN_METHODS.test(method)) Ctx.requireAdmin();
    }
    var data = fn(args && typeof args === 'object' ? args : {}); mark();
    // Tempos por etapa (ms): estrutura, login, método. Ajuda a achar lentidão; não contém dados.
    return { ok: true, data: data === undefined ? null : data, ms: T.slice(1).map(function (t, i) { return t - T[i]; }) };
  } catch (e) {
    var msg = e && e.message ? e.message : String(e);
    console.error(method, e && e.stack || e);
    try {   // diagnóstico temporário: só método e linhas do código (sem dados)
      var frames = String(e && e.stack || '').split('\n').filter(function (l) { return /\.gs|\.js|at /.test(l); }).slice(0, 8).join(' | ');
      PropertiesService.getScriptProperties().setProperty('DEBUG_LAST', JSON.stringify({ at: Util.nowIso(), method: method, frames: frames }));
    } catch (x) { /* ignora */ }
    var auth = /^SESSAO: /.test(msg);
    return { ok: false, error: msg.replace(/^SESSAO: /, ''), auth: auth };
  } finally {
    Ctx.setUser(null);
  }
}

function api(method, args) {
  // Serialização explícita: evita problemas do google.script.run com Date/undefined.
  return JSON.stringify(dispatch_(method, args, Auth.fromGoogleSession));
}

/**
 * API do site. Corpo (text/plain, para evitar "preflight" de CORS): {"method", "args", "token"}.
 * Resposta: {"ok", "data"} ou {"ok": false, "error", "auth"} (auth = sessão inválida → refazer login).
 */
function doPost(e) {
  var out;
  try {
    var body = JSON.parse(e && e.postData && e.postData.contents || '{}');
    if (body.method === 'auth.logout') out = { ok: true, data: Auth.logout(body.token) };
    else out = dispatch_(body.method, body.args, function () { return Auth.fromToken(body.token); });
  } catch (err) {
    out = { ok: false, error: 'Requisição inválida.' };
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

/** Aplica automaticamente mudanças de schema depois de um `clasp push` (só acrescenta abas/colunas). */
function ensureSchema_() {
  // Atalho: se nada mudou desde a última verificação (mesma estrutura e mesmas versões dos dados), não
  // consulta propriedades nem planilha — economiza ~0,5 s em toda chamada.
  var sig = CONFIG.SCHEMA_VERSION + '|' + SEED_MANIFEST.grapes.version + '|' +
    SEED_MANIFEST.packs.map(function (p) { return p.code + p.version; }).join(',') + '|' +
    SEED_MANIFEST.study.map(function (p) { return p.code + p.version; }).join(',');
  var cache = CacheService.getScriptCache();
  if (cache.get('seeds_ok') === sig) return;
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('SCHEMA_VERSION') !== String(CONFIG.SCHEMA_VERSION)) {
    Repo.withLock(function () {
      Schema.ensure();
      Seeds.run();
      Migrations.run();
      Settings.set('schema_version', CONFIG.SCHEMA_VERSION);
    });
    props.setProperty('SCHEMA_VERSION', String(CONFIG.SCHEMA_VERSION));
  }
  try {
    // Em etapas curtas: a primeira abertura depois de uma versão nova não trava o app.
    var g = SeedEncyclopedia.ensure(8000);
    var r = SeedRegions.ensure(8000);
    var st = SeedStudy.ensure();
    if (g === null && !r.length && !st.length) cache.put('seeds_ok', sig, 21600);
  } catch (e) {
    // Não bloqueia o app: registra e tenta de novo na próxima chamada.
    console.error('Enciclopédia de uvas', e && e.stack || e);
  }
}

/**
 * Instalação: rode UMA vez no editor (Executar → setup).
 * Registra você como dono, cria as abas db_ e os dados iniciais do sistema,
 * e faz a primeira sincronização com as abas originais.
 */
function setup() {
  return Ctx.asSystem(function () {
  var owner = Auth.registerOwner();
  var schema = Schema.ensure();
  PropertiesService.getScriptProperties().setProperty('SCHEMA_VERSION', String(CONFIG.SCHEMA_VERSION));
  var seeds = Seeds.run();
  Migrations.run();
  Ctx.setUser(Auth.ensureAdmin());   // o que a sincronização importar pertence à dona
  var sync = Import.run();
  SeedEncyclopedia.runAll();
  SeedRegions.ensure(240000);
  SeedStudy.ensure();
  var msg = ['Dono: ' + owner, 'Abas: ' + (schema.join('; ') || 'nenhuma alteração'),
    'Sementes: ' + (seeds.join('; ') || 'nenhuma'), 'Sincronização: ' + JSON.stringify(sync.stats)].join('\n');
  console.log(msg);
  return msg;
  });
}

/**
 * Configura o login com Google (rode no editor uma vez): ID do cliente OAuth e endereço do site.
 * Ex.: configurarLogin('123-abc.apps.googleusercontent.com', 'https://fdrnatalie.github.io/wine-study-lab/')
 */
function configurarLogin(clientId, siteUrl) {
  var id = Auth.setClientId(clientId || '');
  if (siteUrl) {
    if (!/^https:\/\/[^\s"<>]+$/.test(siteUrl)) throw new Error('Endereço do site inválido.');
    PropertiesService.getScriptProperties().setProperty('SITE_URL', siteUrl);
  }
  console.log('Login configurado para o cliente ' + id + (siteUrl ? ' · site ' + siteUrl : ''));
  return id;
}

/** Atualiza o schema após mudanças no código (acrescenta abas/colunas novas). Seguro de rodar sempre. */
function migrate() {
  Ctx.asSystem(function () {
    var r = Schema.ensure();
    var m = Migrations.run();
    Settings.set('schema_version', CONFIG.SCHEMA_VERSION);
    PropertiesService.getScriptProperties().setProperty('SCHEMA_VERSION', String(CONFIG.SCHEMA_VERSION));
    console.log(r.concat(m).join('\n') || 'Schema já atualizado.');
  });
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu('🍷 Wine Study Lab')
    .addItem('Sincronizar abas originais', 'menuSync_')
    .addItem('Atualizar estrutura (migrate)', 'migrate')
    .addToUi();
}

function menuSync_() {
  Ctx.asSystem(ensureSchema_);
  Ctx.setUser(Auth.ensureAdmin());
  var r = Import.run();
  SpreadsheetApp.getUi().alert('Sincronização concluída', JSON.stringify(r.stats, null, 2), SpreadsheetApp.getUi().ButtonSet.OK);
}
