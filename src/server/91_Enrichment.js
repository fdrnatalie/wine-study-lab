/**
 * Enriquecimento por IA com fila de revisão (docs/ARQUITETURA.md D9).
 *
 * Fluxo: tarefa (uva, vinho, catálogo) → AiProvider.research() → propostas em
 * db_enrichment_queue (status "pendente") → você aprova/edita/descarta → só então o dado
 * é gravado, com origem "ia_revisada" e o link da fonte em field_refs.
 * Nada gerado pela IA entra direto nas tabelas.
 */
var Enrichment = (function () {

  var GRAPE_FIELDS = {
    color: 'Cor da uva: exatamente "tinta", "branca" ou "rosada"',
    origin: 'Origem geográfica/histórica (onde surgiu)',
    synonyms: 'Sinônimos oficiais, separados por "; "',
    main_countries: 'Principais países onde é cultivada',
    main_regions: 'Principais regiões e denominações onde é cultivada',
    general_profile: 'Perfil geral em uma frase',
    ripening: 'Ciclo de maturação (precoce, médio, tardio) e brotação',
    skin_thickness: 'Espessura da casca',
    bunch_size: 'Tamanho do cacho',
    berry_size: 'Tamanho da baga',
    vigor: 'Vigor / produtividade',
    disease_sensitivity: 'Sensibilidade a doenças e pragas',
    climate: 'Clima preferido',
    soils: 'Solos preferidos',
    how_to_recognize: 'Como reconhecer na taça (marcadores visuais, olfativos e de boca)',
    description: 'Descrição para estudo (estilos de vinho, potencial de guarda, curiosidades)'
  };

  var WINE_FIELDS = {
    type: 'Tipo: exatamente "tranquilo", "espumante", "fortificado" ou "sobremesa"',
    color: 'Cor: exatamente "tinto", "branco", "rose" ou "laranja"',
    classification: 'Classificação oficial (ex.: DOCG)',
    production_method: 'Método de produção / vinificação',
    aging: 'Estágio / maturação (recipiente e duração)',
    oak: 'Uso de madeira (tipo, tamanho, novo/usado)',
    aging_time: 'Tempo total de envelhecimento antes da venda',
    abv: 'Teor alcoólico (%), só o número',
    residual_sugar: 'Açúcar residual (g/L)',
    acidity_gl: 'Acidez total (g/L)',
    serving_temp: 'Temperatura de serviço',
    pairing: 'Harmonização sugerida',
    curiosities: 'Curiosidades sobre o vinho ou o produtor'
  };

  var PROFILE_SCALES = ['acidity', 'tannin', 'body', 'alcohol', 'sweetness', 'intensity', 'finish'];

  var SYSTEM = [
    'Você é pesquisador(a) de enologia ajudando uma estudante de sommelier a montar a própria base de estudo.',
    'Regras:',
    '1. Use a busca na web. Cada dado precisa vir de uma página que você consultou nesta pesquisa; informe a URL exata em source_url e o nome da página/fonte em source_title.',
    '2. Prefira fontes de referência: VIVC (vivc.de) para origem, genealogia e sinônimos; Jancis Robinson, o livro Wine Grapes (Robinson, Harding, Vouillamoz), GuildSomm, WSET, consórcios e órgãos oficiais das denominações e fichas técnicas dos produtores. Evite lojas, blogs e agregadores.',
    '3. Não invente e não complete com conhecimento geral sem fonte. Se não encontrar fonte para algo, deixe de fora (listas vazias, strings vazias) e diga o que faltou em not_found.',
    '4. Genealogia: inclua pais apenas quando a fonte documentar a parentalidade por análise de DNA.',
    '5. Escreva os valores em português do Brasil, de forma concisa e útil para estudo e degustação às cegas.',
    '6. Ao terminar, chame a ferramenta registrar_dados uma única vez.'
  ].join('\n');

  // ---------- Schemas ----------
  function obj(props) {
    return { type: 'object', additionalProperties: false, required: Object.keys(props), properties: props };
  }
  var STR = { type: 'string' };

  function scaleEnum(scaleName, allowRange) {
    var keys = (Settings.scales()[scaleName] || []).map(function (l) { return l.key; });
    var out = [''].concat(keys);
    if (allowRange) {
      for (var i = 0; i < keys.length; i++) for (var j = i + 1; j < keys.length; j++) out.push(keys[i] + '..' + keys[j]);
    }
    return { type: 'string', enum: out };
  }

  var PROFILE_TEXTS = ['visual_text', 'nose_text', 'palate_text'];

  function profileSchema(allowRange) {
    var p = {};
    PROFILE_SCALES.forEach(function (s) { p[s] = scaleEnum(s, allowRange); });
    if (!allowRange) PROFILE_TEXTS.forEach(function (t) { p[t] = STR; });   // vinho: notas de visual, nariz e boca
    p.source_url = STR;
    p.source_title = STR;
    return obj(p);
  }

  function aromaSchema() {
    var names = Repo.all('aromas').map(function (a) { return a.name; });
    return { type: 'array', items: obj({ name: { type: 'string', enum: names }, source_url: STR }) };
  }

  function fieldsSchema(fields) {
    return { type: 'array', items: obj({ field: { type: 'string', enum: Object.keys(fields) }, value: STR, source_url: STR, source_title: STR }) };
  }

  function scaleDoc() {
    var sc = Settings.scales();
    return PROFILE_SCALES.map(function (s) {
      return '- ' + s + ': ' + (sc[s] || []).map(function (l) { return l.key + ' (' + l.label + ')'; }).join(', ');
    }).join('\n');
  }

  function fieldDoc(fields) {
    return Object.keys(fields).map(function (k) { return '- ' + k + ': ' + fields[k]; }).join('\n');
  }

  // ---------- Tarefas ----------
  function grape(id) {
    var g = Repo.get('grapes', Validate.id(id, 'grapes'));
    var known = {};
    Object.keys(GRAPE_FIELDS).forEach(function (f) {
      var v = f === 'synonyms' ? (g.synonyms || []).join('; ') : g[f];
      if (!Util.isBlank(v)) known[f] = v;
    });
    var prompt = [
      'Pesquise a uva ' + g.name + '.',
      Object.keys(known).length ? 'Já cadastrado (confirme ou corrija com fonte; não precisa repetir o que estiver certo):\n' + JSON.stringify(known, null, 1) : 'Nada cadastrado ainda.',
      'Campos possíveis (em fields):\n' + fieldDoc(GRAPE_FIELDS),
      'Perfil sensorial TÍPICO dos vinhos varietais desta uva (em profile). Use um nível ou uma faixa "nivel..nivel" quando a fonte indicar variação:\n' + scaleDoc(),
      'Aromas típicos (em aromas): use somente nomes do vocabulário permitido.',
      'Pais por DNA (em parents) e uvas com que ela costuma ser confundida numa degustação às cegas (em confused_with), com uma explicação prática de como diferenciar.'
    ].join('\n\n');
    var schema = obj({
      fields: fieldsSchema(GRAPE_FIELDS), profile: profileSchema(true), aromas: aromaSchema(),
      parents: { type: 'array', items: obj({ name: STR, source_url: STR, source_title: STR }) },
      confused_with: { type: 'array', items: obj({ name: STR, how_to_differentiate: STR, source_url: STR, source_title: STR }) },
      not_found: STR
    });
    return run_('uva', 'grape', g, prompt, schema, 'Registra os dados pesquisados sobre a uva, cada um com a URL da fonte.', function (d, add) {
      (d.fields || []).forEach(function (f) {
        var cur = f.field === 'synonyms' ? (g.synonyms || []).join('; ') : g[f.field];
        if (f.field === 'color' && ['tinta', 'branca', 'rosada'].indexOf(f.value) < 0) return;
        add('field', f.field, cur, f.value, f);
      });
      addProfile_(add, 'grape', g.id, d.profile);
      addAromas_(add, 'grape', g.id, d.aromas);
      var existing = Repo.all('grape_relationships').filter(function (r) { return r.grape_a_id === g.id || r.grape_b_id === g.id; });
      (d.parents || []).forEach(function (p) {
        var other = findGrape(p.name);
        if (Util.normKey(p.name) === g.name_key) return;
        if (other && existing.some(function (r) { return r.kind === 'parent_of' && r.grape_a_id === other.id && r.grape_b_id === g.id; })) return;
        add('parent', 'pai/mãe', '', JSON.stringify({ name: p.name }), p);
      });
      (d.confused_with || []).forEach(function (c) {
        var other = findGrape(c.name);
        if (Util.normKey(c.name) === g.name_key) return;
        var rel = other && existing.filter(function (r) { return r.kind === 'confused_with' && (r.grape_a_id === other.id || r.grape_b_id === other.id); })[0];
        if (rel && rel.how_to_differentiate) return;
        add('confused_with', 'pode ser confundida com', '', JSON.stringify({ name: c.name, how: c.how_to_differentiate }), c);
      });
    });
  }

  function wine(id) {
    var w = Wines.get(Validate.id(id, 'wines'));
    var known = {};
    Object.keys(WINE_FIELDS).forEach(function (f) { if (!Util.isBlank(w[f])) known[f] = w[f]; });
    var prompt = [
      'Pesquise o vinho: ' + w.name + (w.vintage ? ' safra ' + w.vintage : '') + (w.producer ? ', produtor ' + w.producer : '') +
        ([w.region, w.country].filter(Boolean).length ? ', ' + [w.region, w.country].filter(Boolean).join(', ') : '') +
        (w.grapes.length ? ', uva(s): ' + w.grapes.map(function (x) { return x.name; }).join(', ') : '') + '.',
      'Procure primeiro a ficha técnica do produtor para esta safra (ou a mais próxima, dizendo qual em source_title). Use dados sobre ESTE vinho; não use dados genéricos da uva ou da denominação.',
      Object.keys(known).length ? 'Já cadastrado:\n' + JSON.stringify(known, null, 1) : '',
      'Campos possíveis (em fields):\n' + fieldDoc(WINE_FIELDS),
      'Perfil sensorial deste vinho (em profile), um nível por característica, somente se a ficha técnica ou uma avaliação profissional descrever:\n' + scaleDoc() +
        '\nEm profile.visual_text, profile.nose_text e profile.palate_text, resuma em português o que a ficha técnica (ou avaliação profissional) diz sobre a aparência, o nariz e a boca deste vinho; deixe vazio o que a fonte não disser.',
      'Aromas descritos para este vinho (em aromas): use somente nomes do vocabulário permitido.'
    ].filter(Boolean).join('\n\n');
    var schema = obj({ fields: fieldsSchema(WINE_FIELDS), profile: profileSchema(false), aromas: aromaSchema(), not_found: STR });
    return run_('vinho', 'wine', w, prompt, schema, 'Registra os dados pesquisados sobre o vinho, cada um com a URL da fonte.', function (d, add) {
      (d.fields || []).forEach(function (f) {
        if (f.field === 'type' && CONFIG.WINE_TYPES.indexOf(f.value) < 0) return;
        if (f.field === 'color' && CONFIG.WINE_COLORS.indexOf(f.value) < 0) return;
        if (f.field === 'abv' && Util.parseNumber(f.value) === null) return;
        add('field', f.field, w[f.field], f.value, f);
      });
      addProfile_(add, 'wine', w.id, d.profile);
      addAromas_(add, 'wine', w.id, d.aromas);
    });
  }

  /** Propõe uvas novas para o catálogo a partir de um pedido ("uvas tintas do Piemonte"). */
  function catalog(query) {
    query = Validate.required(query, 200, 'Pedido');
    var prompt = 'Liste as uvas que respondem a este pedido de estudo: "' + query + '".\n' +
      'Para cada uma: nome principal (como é mais conhecida internacionalmente), cor (tinta, branca ou rosada), origem, e a fonte. No máximo 25 uvas, das mais importantes para as menos.';
    var schema = obj({
      grapes: { type: 'array', items: obj({ name: STR, color: { type: 'string', enum: ['tinta', 'branca', 'rosada'] }, origin: STR, source_url: STR, source_title: STR }) },
      not_found: STR
    });
    var pseudo = { id: '', name: query };
    return run_('catalogo', 'catalog', pseudo, prompt, schema, 'Registra a lista de uvas encontradas, cada uma com a URL da fonte.', function (d, add) {
      var seen = {};
      (d.grapes || []).forEach(function (x) {
        var k = Util.normKey(x.name);
        if (!k || seen[k] || findGrape(x.name)) return;
        seen[k] = true;
        add('new_grape', 'nova uva', '', JSON.stringify({ name: x.name, color: x.color, origin: x.origin }), x, x.name);
      });
    });
  }

  /**
   * Foto do rótulo → identifica o vinho e busca a ficha técnica na web.
   * Não grava nada: devolve sugestões para o formulário, que as marca como "IA não verificada".
   */
  function label(image, mime, ocrText) {
    Label.validateImage(image, mime);
    ocrText = Validate.str(ocrText, 20000, 'Texto do rótulo');
    var ident = { name: 'Nome do vinho como aparece no rótulo', producer: 'Produtor', country: 'País (em português)', region: 'Região',
      subregion: 'Sub-região / denominação de origem', vintage: 'Safra (ano), só se estiver no rótulo' };
    var identProps = {};
    Object.keys(ident).forEach(function (k) { identProps[k] = STR; });
    var prompt = [
      'A foto é o rótulo de um vinho. 1) Leia o rótulo e identifique o vinho (em label: só o que está ESCRITO na foto; deixe vazio o que não estiver legível).',
      '2) Pesquise a ficha técnica do produtor para este vinho e safra (ou a mais próxima, dizendo qual em source_title) e preencha fields e grapes com fonte. Use dados sobre ESTE vinho, não dados genéricos da uva ou da denominação.',
      ocrText ? 'Texto que o OCR já extraiu da foto (pode ter erros):\n' + ocrText.slice(0, 4000) : '',
      'Campos de identificação (em label):\n' + fieldDoc(ident),
      'Campos técnicos (em fields):\n' + fieldDoc(WINE_FIELDS),
      'Uvas (em grapes): nome e percentual, com fonte (o próprio rótulo conta como fonte: use source_url "rotulo").'
    ].filter(Boolean).join('\n\n');
    var schema = obj({
      label: obj(identProps),
      grapes: { type: 'array', items: obj({ name: STR, percent: STR, source_url: STR }) },
      fields: fieldsSchema(WINE_FIELDS), not_found: STR
    });
    var content = [{ type: 'image', source: { type: 'base64', media_type: mime, data: image } }, { type: 'text', text: prompt }];
    var result;
    try {
      result = AiProvider.research({ system: SYSTEM, content: content, schema: schema,
        toolDescription: 'Registra o que foi lido no rótulo e a ficha técnica encontrada, cada dado técnico com a URL da fonte.' });
    } catch (e) {
      logCall_('rotulo', '', AiProvider.config().model, null, 0, 'erro', e.message);
      throw e;
    }
    var d = result.data || {};
    var out = { fields: {}, grapes: [], not_found: d.not_found || '' };
    function ok(v) { return !Util.isBlank(v) && !Util.isAiErrorText(v); }
    Object.keys(ident).forEach(function (k) {
      var v = d.label && d.label[k];
      if (k === 'vintage') v = /^(19|20)\d{2}$/.test(String(v || '').trim()) ? +String(v).trim() : '';
      if (ok(v)) out.fields[k] = { value: Util.clampStr(String(v), 200), evidence: 'lido na foto pela IA', ref: '' };
    });
    (d.fields || []).forEach(function (f) {
      if (!ok(f.value)) return;
      if (f.field === 'type' && CONFIG.WINE_TYPES.indexOf(f.value) < 0) return;
      if (f.field === 'color' && CONFIG.WINE_COLORS.indexOf(f.value) < 0) return;
      if (f.field === 'abv' && Util.parseNumber(f.value) === null) return;
      var url = /^https?:\/\//.test(f.source_url || '') ? Util.clampStr(f.source_url, 1000) : '';
      out.fields[f.field] = { value: f.field === 'abv' ? Util.parseNumber(f.value) : Util.clampStr(String(f.value), 5000),
        evidence: (f.source_title || url || 'sem fonte') + (url && result.urls[url] === undefined ? ' (link não confirmado na busca)' : ''), ref: url };
    });
    (d.grapes || []).forEach(function (g) {
      if (!ok(g.name)) return;
      var known = findGrape(g.name);
      var pct = Util.parseNumber(g.percent);
      out.grapes.push({ name: known ? known.name : Util.clampStr(g.name, 120), percent: pct !== null && pct > 0 && pct <= 100 ? pct : '' });
    });
    out.cost_usd = logCall_('rotulo', '', result.model, result.usage, Object.keys(out.fields).length + out.grapes.length, 'ok', '');
    out.searches = result.usage.web_searches;
    return out;
  }

  function addProfile_(add, entityType, entityId, p) {
    if (!p) return;
    var vals = {}, any = false;
    PROFILE_SCALES.concat(PROFILE_TEXTS).forEach(function (s) {
      if (p[s] && !Util.isAiErrorText(p[s])) { vals[s] = PROFILE_TEXTS.indexOf(s) >= 0 ? Util.clampStr(String(p[s]), 2000) : p[s]; any = true; }
    });
    if (!any) return;
    var cur = Catalog.profileOf(entityType, entityId);
    var curVals = {};
    if (cur) PROFILE_SCALES.concat(PROFILE_TEXTS).forEach(function (s) { if (cur[s]) curVals[s] = cur[s]; });
    add('profile', 'perfil sensorial', Object.keys(curVals).length ? JSON.stringify(curVals) : '', JSON.stringify(vals), p);
  }

  function addAromas_(add, entityType, entityId, aromas) {
    var have = {};
    Catalog.aromasOf(entityType, entityId).forEach(function (a) { have[a.name] = true; });
    var byUrl = {};
    (aromas || []).forEach(function (a) {
      if (have[a.name]) return;
      (byUrl[a.source_url] = byUrl[a.source_url] || []).push(a.name);
    });
    Object.keys(byUrl).forEach(function (url) {
      add('aromas', 'aromas', '', JSON.stringify(byUrl[url]), { source_url: url, source_title: '' });
    });
  }

  /** Executa a pesquisa, grava as propostas e registra custo. */
  function run_(task, entityType, entity, prompt, schema, toolDescription, collect) {
    var runId = Util.newId('RUN');
    var result, rows = [];
    try {
      result = AiProvider.research({ system: SYSTEM, prompt: prompt, schema: schema, toolDescription: toolDescription });
    } catch (e) {
      logCall_(task, entity.id, AiProvider.config().model, null, 0, 'erro', e.message);
      throw e;
    }
    var pending = Repo.where('enrichment_queue', function (q) { return q.status === 'pendente' && q.entity_id === entity.id; });
    function add(kind, field, current, proposed, src, name) {
      if (Util.isBlank(proposed) || Util.isAiErrorText(proposed)) return;
      var cur = Array.isArray(current) ? current.join('; ') : (current === null || current === undefined ? '' : String(current));
      if (kind === 'field' && Util.normKey(cur) === Util.normKey(proposed)) return;
      if (pending.some(function (q) { return q.kind === kind && q.field === field && q.proposed_value === proposed; })) return;
      var url = src && src.source_url || '';
      rows.push({
        run_id: runId, entity_type: entityType, entity_id: entity.id, entity_name: name || entity.name, kind: kind,
        field: field, current_value: cur, proposed_value: String(proposed),
        source_url: Util.clampStr(url, 1000), source_title: Util.clampStr(src && src.source_title || '', 300),
        url_verified: !!(url && result.urls[url] !== undefined),
        provider: result.model, status: 'pendente', source: 'ia'
      });
    }
    collect(result.data || {}, add);
    Repo.insert('enrichment_queue', rows);
    var cost = logCall_(task, entity.id, result.model, result.usage, rows.length, 'ok', '');
    return { proposals: rows.length, not_found: (result.data && result.data.not_found) || '', cost_usd: cost, searches: result.usage.web_searches };
  }

  function logCall_(task, entityId, model, usage, proposals, status, error) {
    usage = usage || { input_tokens: 0, output_tokens: 0, web_searches: 0 };
    var cost = AiProvider.estimateCost(model, usage);
    Repo.insert('ai_calls', [{
      run_at: Util.nowIso(), task: task, entity_id: entityId || '', model: model, input_tokens: usage.input_tokens,
      output_tokens: usage.output_tokens, web_searches: usage.web_searches, cost_usd: cost, proposals: proposals,
      status: status, error: Util.clampStr(error, 1000), source: 'sistema'
    }]);
    return cost;
  }

  // ---------- Revisão ----------
  function pending() {
    return Repo.where('enrichment_queue', { status: 'pendente' }).sort(function (a, b) {
      return String(a.entity_name).localeCompare(String(b.entity_name), 'pt') || String(a.created_at).localeCompare(String(b.created_at));
    });
  }

  function pendingCount() { return Repo.where('enrichment_queue', { status: 'pendente' }).length; }

  /**
   * action: "aprovar" | "descartar". edits: {id: valor editado} (só para propostas de campo).
   */
  function review(ids, action, edits) {
    Validate.oneOf(action, ['aprovar', 'descartar'], 'ação');
    edits = edits || {};
    return Repo.withLock(function () {
      var rows = Validate.ids(ids).map(function (id) { return Repo.get('enrichment_queue', id); })
        .filter(function (r) { return r && r.status === 'pendente'; });
      var done = 0, errors = [];
      rows.forEach(function (r) {
        try {
          if (action === 'aprovar') apply_(r, edits[r.id]);
          Repo.update('enrichment_queue', [{ id: r.id, status: action === 'aprovar' ? 'aprovada' : 'descartada', reviewed_at: Util.nowIso(),
            proposed_value: edits[r.id] !== undefined && r.kind === 'field' ? String(edits[r.id]) : r.proposed_value }]);
          done++;
        } catch (e) {
          errors.push((r.entity_name || '') + ' · ' + r.field + ': ' + e.message);
        }
      });
      return { done: done, errors: errors };
    });
  }

  function apply_(r, edited) {
    var url = r.source_url;
    var ref = url || r.source_title;
    switch (r.kind) {
      case 'field': {
        var entity = r.entity_type === 'grape' ? 'grapes' : 'wines';
        var rec = Repo.get(entity, r.entity_id);
        if (!rec) throw new Error('registro não existe mais');
        var v = edited !== undefined ? String(edited) : r.proposed_value;
        var patch = { id: rec.id };
        if (r.field === 'synonyms') patch.synonyms = v.split(/\s*;\s*/).map(function (s) { return s.trim(); }).filter(Boolean);
        else if (r.field === 'abv') patch.abv = Validate.num(v, 0, 25, 'Teor alcoólico');
        else if (r.field === 'color' && entity === 'grapes') patch.color = Validate.oneOf(v, ['tinta', 'branca', 'rosada'], 'cor');
        else if (r.field === 'color') patch.color = Validate.oneOf(v, CONFIG.WINE_COLORS, 'cor');
        else if (r.field === 'type') patch.type = Validate.oneOf(v, CONFIG.WINE_TYPES, 'tipo');
        else patch[r.field] = Validate.str(v, 5000, r.field);
        patch.field_sources = Object.assign({}, rec.field_sources || {});
        patch.field_sources[r.field] = 'ia_revisada';
        patch.field_refs = Object.assign({}, rec.field_refs || {});
        patch.field_refs[r.field] = ref;
        Repo.update(entity, [patch]);
        return;
      }
      case 'profile': {
        var cur = Catalog.profileOf(r.entity_type, r.entity_id) || {};
        var merged = {};
        Catalog.PROFILE_SCALES.concat(['oak', 'texture', 'visual_text', 'nose_text', 'palate_text']).forEach(function (k) { merged[k] = cur[k] || ''; });
        var vals = JSON.parse(r.proposed_value);
        Object.keys(vals).forEach(function (k) { merged[k] = vals[k]; });
        merged.source = 'ia_revisada';
        merged.source_ref = Util.clampStr([cur.source_ref, ref].filter(Boolean).join(' · '), 500);
        Catalog.saveProfile(r.entity_type, r.entity_id, merged);
        return;
      }
      case 'aromas': {
        var names = JSON.parse(r.proposed_value);
        var byName = Util.indexBy(Repo.all('aromas'), 'name');
        var have = {};
        Repo.where('entity_aromas', function (x) { return x.entity_type === r.entity_type && x.entity_id === r.entity_id; })
          .forEach(function (x) { have[x.aroma_id] = true; });
        Repo.insert('entity_aromas', names.map(function (n) { return byName[n]; }).filter(function (a) { return a && !have[a.id]; }).map(function (a) {
          return { entity_type: r.entity_type, entity_id: r.entity_id, aroma_id: a.id, kind: 'nariz', source: 'ia_revisada', source_ref: ref };
        }));
        return;
      }
      case 'parent': {
        var p = JSON.parse(r.proposed_value);
        var parent = findOrCreateGrape_(p.name, ref);
        var rels = Repo.all('grape_relationships');
        if (!rels.some(function (x) { return x.kind === 'parent_of' && x.grape_a_id === parent.id && x.grape_b_id === r.entity_id; })) {
          Repo.insert('grape_relationships', [{ grape_a_id: parent.id, grape_b_id: r.entity_id, kind: 'parent_of', source: 'ia_revisada', source_ref: ref }]);
        }
        return;
      }
      case 'confused_with': {
        var c = JSON.parse(r.proposed_value);
        var other = findOrCreateGrape_(c.name, ref);
        var rel = Repo.all('grape_relationships').filter(function (x) {
          return x.kind === 'confused_with' && ((x.grape_a_id === r.entity_id && x.grape_b_id === other.id) || (x.grape_b_id === r.entity_id && x.grape_a_id === other.id));
        })[0];
        var how = Validate.str(edited !== undefined ? edited : c.how, 3000, 'como diferenciar');
        if (rel) Repo.update('grape_relationships', [{ id: rel.id, how_to_differentiate: how || rel.how_to_differentiate, source: 'ia_revisada', source_ref: ref }]);
        else Repo.insert('grape_relationships', [{ grape_a_id: r.entity_id, grape_b_id: other.id, kind: 'confused_with', how_to_differentiate: how, source: 'ia_revisada', source_ref: ref }]);
        return;
      }
      case 'new_grape': {
        var n = JSON.parse(r.proposed_value);
        if (findGrape(n.name)) return;
        Repo.insert('grapes', [{
          name: Validate.required(n.name, 120, 'nome'), name_key: Util.normKey(n.name), color: n.color, origin: Validate.str(n.origin, 300, 'origem'),
          source: 'ia_revisada', source_ref: ref,
          field_sources: { name: 'ia_revisada', color: 'ia_revisada', origin: 'ia_revisada' },
          field_refs: { name: ref, color: ref, origin: ref }
        }]);
        return;
      }
    }
    throw new Error('tipo de proposta desconhecido: ' + r.kind);
  }

  /** Encontra uva por nome, sinônimo ou nome muito parecido. */
  function findGrape(name) {
    var k = Util.normKey(name);
    if (!k) return null;
    var all = Repo.all('grapes'), i;
    for (i = 0; i < all.length; i++) if (all[i].name_key === k) return all[i];
    for (i = 0; i < all.length; i++) {
      var syn = (all[i].synonyms || []).map(function (s) { return Util.normKey(String(s).replace(/\(.*\)/, '')); });
      if (syn.indexOf(k) >= 0) return all[i];
    }
    if (k.length >= 6) for (i = 0; i < all.length; i++) if (Util.levenshtein(all[i].name_key, k) <= 1) return all[i];
    return null;
  }

  function findOrCreateGrape_(name, ref) {
    var g = findGrape(name);
    if (g) return g;
    return Repo.insert('grapes', [{ name: Validate.required(name, 120, 'nome'), name_key: Util.normKey(name), source: 'ia_revisada', source_ref: ref,
      field_sources: { name: 'ia_revisada' }, field_refs: { name: ref } }])[0];
  }

  function status() {
    var calls = Repo.all('ai_calls');
    var total = calls.reduce(function (s, c) { return s + (Number(c.cost_usd) || 0); }, 0);
    var cfg = AiProvider.config();
    return {
      has_key: AiProvider.hasKey(), model: cfg.model, effort: cfg.effort, max_searches: cfg.max_searches, models: AiProvider.MODELS,
      calls: calls.length, total_cost_usd: Math.round(total * 100) / 100,
      recent: calls.sort(function (a, b) { return String(b.run_at).localeCompare(String(a.run_at)); }).slice(0, 10)
    };
  }

  return { grape: grape, wine: wine, catalog: catalog, label: label, pending: pending, pendingCount: pendingCount, review: review,
    status: status, findGrape: findGrape };
})();
