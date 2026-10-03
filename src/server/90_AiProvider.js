/**
 * Provedor de IA: Claude (Anthropic Messages API) via UrlFetchApp.
 *
 * Única parte do sistema que conhece a API da Anthropic. As tarefas de enriquecimento
 * (91_Enrichment.js) chamam AiProvider.research({...}) e recebem dados estruturados +
 * as URLs realmente consultadas. Para trocar de provedor, reimplemente research().
 *
 * - Modelo padrão: claude-opus-5 (configurável em db_settings: ai_model).
 * - Busca na web do lado da Anthropic (web_search_20260209), para que cada dado tenha fonte.
 * - O resultado chega por uma ferramenta "registrar_dados" com strict: true (JSON válido pelo schema).
 * - fallbacks: "default" → se um classificador de segurança recusar, a própria API tenta
 *   o modelo substituto recomendado, na mesma chamada.
 * - A chave fica em Propriedades do script (ANTHROPIC_API_KEY), nunca na planilha.
 */
var AiProvider = (function () {
  var URL = 'https://api.anthropic.com/v1/messages';
  var KEY_PROP = 'ANTHROPIC_API_KEY';
  // Preços (US$ por milhão de tokens) e busca (US$ por busca) para a estimativa de custo.
  var PRICES = {
    'claude-opus-5': { input: 5, output: 25 },
    'claude-sonnet-5': { input: 2, output: 10 }
  };
  var SEARCH_PRICE = 0.01;
  var MODELS = Object.keys(PRICES);

  function hasKey() { return !!PropertiesService.getScriptProperties().getProperty(KEY_PROP); }

  function setKey(k) {
    k = String(k || '').trim();
    if (!/^sk-ant-[A-Za-z0-9_\-]{20,}$/.test(k)) throw new Error('Isso não parece uma chave da API da Anthropic (começa com sk-ant-).');
    PropertiesService.getScriptProperties().setProperty(KEY_PROP, k);
  }

  function removeKey() { PropertiesService.getScriptProperties().deleteProperty(KEY_PROP); }

  function config() {
    var model = Settings.get('ai_model', 'claude-opus-5');
    return {
      model: MODELS.indexOf(model) >= 0 ? model : 'claude-opus-5',
      effort: ['low', 'medium', 'high'].indexOf(Settings.get('ai_effort', 'low')) >= 0 ? Settings.get('ai_effort', 'low') : 'low',
      max_searches: Math.max(1, Math.min(10, Settings.getNumber('ai_max_searches', 5)))
    };
  }

  function post_(body) {
    var key = PropertiesService.getScriptProperties().getProperty(KEY_PROP);
    if (!key) throw new Error('A chave da API do Claude não está configurada. Vá em Configurações → Inteligência artificial.');
    var opts = {
      method: 'post', contentType: 'application/json', muteHttpExceptions: true,
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'anthropic-beta': 'server-side-fallback-2026-07-01' },
      payload: JSON.stringify(body)
    };
    for (var attempt = 0; attempt < 3; attempt++) {
      var res = UrlFetchApp.fetch(URL, opts);
      var code = res.getResponseCode();
      var text = res.getContentText();
      if (code === 200) return JSON.parse(text);
      var retryable = code === 429 || code === 529 || code >= 500;
      if (!retryable || attempt === 2) {
        var msg = text;
        try { msg = JSON.parse(text).error.message; } catch (e) { /* texto cru */ }
        if (code === 401) msg = 'Chave da API inválida ou revogada.';
        throw new Error('API do Claude (' + code + '): ' + msg);
      }
      Utilities.sleep(2000 * (attempt + 1));
    }
  }

  /**
   * Pesquisa com busca na web e devolve o objeto passado à ferramenta de registro.
   * @param {{system: string, prompt: string, schema: Object, toolDescription: string}} task
   * @return {{data: Object, urls: string[], usage: Object, model: string}}
   */
  function research(task) {
    var cfg = config();
    var tools = [
      { type: 'web_search_20260209', name: 'web_search', max_uses: cfg.max_searches },
      { name: 'registrar_dados', description: task.toolDescription, strict: true, input_schema: task.schema }
    ];
    var messages = [{ role: 'user', content: task.prompt }];
    var usage = { input_tokens: 0, output_tokens: 0, web_searches: 0 };
    var urls = {};
    var model = cfg.model;

    for (var turn = 0; turn < 5; turn++) {
      var resp = post_({
        model: cfg.model, max_tokens: 16000, system: task.system, messages: messages, tools: tools,
        tool_choice: { type: 'auto' }, output_config: { effort: cfg.effort }, fallbacks: 'default'
      });
      model = resp.model || model;
      var u = resp.usage || {};
      usage.input_tokens += (u.input_tokens || 0) + (u.cache_read_input_tokens || 0) + (u.cache_creation_input_tokens || 0);
      usage.output_tokens += u.output_tokens || 0;
      usage.web_searches += (u.server_tool_use && u.server_tool_use.web_search_requests) || 0;
      (resp.content || []).forEach(function (b) {
        if (b.type === 'web_search_tool_result' && Array.isArray(b.content)) {
          b.content.forEach(function (r) { if (r.url) urls[r.url] = r.title || ''; });
        }
      });
      if (resp.stop_reason === 'refusal') throw new Error('O modelo recusou a pesquisa.');
      var submit = (resp.content || []).filter(function (b) { return b.type === 'tool_use' && b.name === 'registrar_dados'; })[0];
      if (submit) return { data: submit.input, urls: urls, usage: usage, model: model };
      if (resp.stop_reason === 'max_tokens') throw new Error('A resposta ficou longa demais e foi cortada.');
      // pause_turn (busca longa) ou fim sem registrar: continua a conversa.
      messages.push({ role: 'assistant', content: resp.content });
      if (resp.stop_reason !== 'pause_turn') {
        messages.push({ role: 'user', content: 'Agora chame a ferramenta registrar_dados com o que você encontrou (deixe vazio o que não tiver fonte).' });
      }
    }
    throw new Error('A pesquisa não terminou. Tente de novo.');
  }

  function estimateCost(modelName, usage) {
    var p = PRICES[modelName] || PRICES['claude-opus-5'];
    return Math.round(((usage.input_tokens * p.input + usage.output_tokens * p.output) / 1e6 + usage.web_searches * SEARCH_PRICE) * 10000) / 10000;
  }

  return { research: research, hasKey: hasKey, setKey: setKey, removeKey: removeKey, config: config,
    estimateCost: estimateCost, MODELS: MODELS };
})();
