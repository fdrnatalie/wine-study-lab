/**
 * Pontos de entrada do Apps Script:
 *  - doGet()  : serve a interface web.
 *  - api()    : ÚNICA função chamada pelo navegador (google.script.run.api).
 *               Confere o dono, valida o método numa lista fechada e padroniza erros.
 *  - setup()  : instalação (rodar uma vez pelo editor).
 *  - onOpen() : menu "Wine Study Lab" na planilha.
 */

function doGet(e) {
  if (e && e.parameter && e.parameter.page === 'jogo') return gamePage_();
  var t = HtmlService.createTemplateFromFile('client/index');
  return t.evaluate()
    .setTitle(CONFIG.APP_NAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Jogo "Degustação às Cegas" (FDR Wine Lab), aberto em outra aba, com os catálogos da planilha. */
function gamePage_() {
  Auth.assertOwner();
  ensureSchema_();
  var t = HtmlService.createTemplateFromFile('game/index');
  t.gameData = GameData.json();
  return t.evaluate()
    .setTitle('Degustação às Cegas · FDR Wine Lab')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Endereço do jogo (mesmo app, ?page=jogo). */
function gameUrl_() {
  try {
    var url = ScriptApp.getService().getUrl();
    return url ? url + '?page=jogo' : '';
  } catch (e) { return ''; }
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

  'settings.get': function () {
    return { settings: Repo.all('settings'), rules: Settings.rules(), scales: Settings.scales(), last_log: Import.lastLog(60) };
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
  'seed.regions': function (p) { var r = SeedRegions.run(!(p && p.resume)); r.lookups = Catalog.lookups(); return r; },
  'seed.grapes': function () { var r = SeedEncyclopedia.run(); r.lookups = Catalog.lookups(); return r; },

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
  }
};

function api(method, args) {
  try {
    Auth.assertOwner();
    ensureSchema_();
    var fn = API_METHODS[method];
    if (!fn) throw new Error('Método desconhecido.');
    var data = fn(args || {});
    // Serialização explícita: evita problemas do google.script.run com Date/undefined.
    return JSON.stringify({ ok: true, data: data === undefined ? null : data });
  } catch (e) {
    console.error(method, e && e.stack || e);
    return JSON.stringify({ ok: false, error: e && e.message ? e.message : String(e) });
  }
}

/** Aplica automaticamente mudanças de schema depois de um `clasp push` (só acrescenta abas/colunas). */
function ensureSchema_() {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('SCHEMA_VERSION') !== String(CONFIG.SCHEMA_VERSION)) {
    Repo.withLock(function () {
      Schema.ensure();
      Seeds.run();
      Settings.set('schema_version', CONFIG.SCHEMA_VERSION);
    });
    props.setProperty('SCHEMA_VERSION', String(CONFIG.SCHEMA_VERSION));
  }
  try {
    SeedEncyclopedia.ensure();
    SeedRegions.ensure();
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
  var owner = Auth.registerOwner();
  var schema = Schema.ensure();
  PropertiesService.getScriptProperties().setProperty('SCHEMA_VERSION', String(CONFIG.SCHEMA_VERSION));
  var seeds = Seeds.run();
  var sync = Import.run();
  SeedEncyclopedia.ensure();
  SeedRegions.ensure(240000);
  var msg = ['Dono: ' + owner, 'Abas: ' + (schema.join('; ') || 'nenhuma alteração'),
    'Sementes: ' + (seeds.join('; ') || 'nenhuma'), 'Sincronização: ' + JSON.stringify(sync.stats)].join('\n');
  console.log(msg);
  return msg;
}

/** Atualiza o schema após mudanças no código (acrescenta abas/colunas novas). Seguro de rodar sempre. */
function migrate() {
  var r = Schema.ensure();
  Settings.set('schema_version', CONFIG.SCHEMA_VERSION);
  PropertiesService.getScriptProperties().setProperty('SCHEMA_VERSION', String(CONFIG.SCHEMA_VERSION));
  console.log(r.join('\n') || 'Schema já atualizado.');
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu('🍷 Wine Study Lab')
    .addItem('Sincronizar abas originais', 'menuSync_')
    .addItem('Atualizar estrutura (migrate)', 'migrate')
    .addToUi();
}

function menuSync_() {
  var r = Import.run();
  SpreadsheetApp.getUi().alert('Sincronização concluída', JSON.stringify(r.stats, null, 2), SpreadsheetApp.getUi().ButtonSet.OK);
}
