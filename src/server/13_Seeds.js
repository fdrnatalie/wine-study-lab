/**
 * Dados iniciais do SISTEMA (não são conhecimento sobre vinhos específicos):
 * configurações, escalas de avaliação, regras de pontuação e vocabulário de aromas.
 * Cada tabela só é semeada se estiver vazia; depois disso, edite pela tela de
 * Configurações ou diretamente na aba.
 */
var Seeds = (function () {

  var SETTINGS = [
    ['near_credit', '0.5', 'Fração dos pontos dada a uma resposta PRÓXIMA (0 a 1).'],
    ['alcohol_thresholds', '11,14', 'Limites de % álcool para baixo|médio|alto (padrão WSET SAT: <11 baixo, 11–13,9 médio, ≥14 alto).'],
    ['aroma_subcategory_credit', '0.5', 'Crédito para um aroma da mesma subcategoria de um aroma do gabarito (ex.: framboesa × cereja).'],
    ['last_sync_at', '', 'Data da última sincronização com as abas originais.'],
    ['schema_version', null, 'Versão do schema das abas db_.']
  ];

  // [scale, key, label, synonyms]
  var SCALES = [
    ['acidity', 'baixa', 'Baixa', 'baixa|low'],
    ['acidity', 'media-', 'Média−', 'media-|média-|media baixa|média baixa|média-baixa|media-baixa|medium-'],
    ['acidity', 'media', 'Média', 'media|média|medium|moderada'],
    ['acidity', 'media+', 'Média+', 'media+|média+|media alta|média alta|média-alta|media-alta|medium+'],
    ['acidity', 'alta', 'Alta', 'alta|high|elevada'],

    ['tannin', 'baixo', 'Baixo', 'baixo|baixa|low|leve'],
    ['tannin', 'medio-', 'Médio−', 'medio-|médio-|media-|média-|medio baixo|média-baixa|media-baixa|média baixa|medium-'],
    ['tannin', 'medio', 'Médio', 'medio|médio|media|média|medium|moderado'],
    ['tannin', 'medio+', 'Médio+', 'medio+|médio+|media+|média+|medio alto|média-alta|media-alta|média alta|medium+'],
    ['tannin', 'alto', 'Alto', 'alto|alta|high|elevado'],

    ['body', 'leve', 'Leve', 'leve|light|baixo'],
    ['body', 'medio-', 'Médio−', 'medio-|médio-|medio leve|médio leve|medium-'],
    ['body', 'medio', 'Médio', 'medio|médio|medium|médio e macio|corpo médio|corpo médio e macio'],
    ['body', 'medio+', 'Médio+', 'medio+|médio+|medio encorpado|médio encorpado|medium+'],
    ['body', 'encorpado', 'Encorpado', 'encorpado|full|alto|pleno'],

    ['alcohol', 'baixo', 'Baixo', 'baixo|low'],
    ['alcohol', 'medio', 'Médio', 'medio|médio|medium|equilibrado'],
    ['alcohol', 'alto', 'Alto', 'alto|high|elevado'],

    ['sweetness', 'seco', 'Seco', 'seco|dry'],
    ['sweetness', 'meio_seco', 'Meio seco', 'meio seco|demi-sec|off-dry|meio-seco'],
    ['sweetness', 'doce', 'Doce', 'doce|sweet'],

    ['intensity', 'baixa', 'Baixa', 'baixa|low|leve'],
    ['intensity', 'media', 'Média', 'media|média|medium'],
    ['intensity', 'alta', 'Alta', 'alta|high|pronunciada'],

    ['finish', 'curta', 'Curta', 'curta|short'],
    ['finish', 'media', 'Média', 'media|média|medium'],
    ['finish', 'longa', 'Longa', 'longa|long'],

    ['clarity', 'limpido', 'Límpido', 'limpido|límpido|brilhante'],
    ['clarity', 'turvo', 'Turvo', 'turvo|opaco|velado'],

    ['color_intensity', 'palido', 'Pálido', 'palido|pálido|pale|claro'],
    ['color_intensity', 'medio', 'Médio', 'medio|médio|medium'],
    ['color_intensity', 'profundo', 'Profundo', 'profundo|deep|intenso|escuro'],

    // Tonalidade (lista, não é escala de intensidade — comparação exata).
    ['color_hue', 'limao', 'Limão', 'limão|limao|verdeal|amarelo-esverdeado'],
    ['color_hue', 'dourado', 'Dourado', 'dourado|amarelo-ouro|palha'],
    ['color_hue', 'ambar', 'Âmbar', 'âmbar|ambar'],
    ['color_hue', 'rosa', 'Rosa', 'rosa|rosado'],
    ['color_hue', 'salmao', 'Salmão', 'salmão|salmao'],
    ['color_hue', 'purpura', 'Púrpura', 'púrpura|purpura|violáceo|violaceo'],
    ['color_hue', 'rubi', 'Rubi', 'rubi|vermelho rubi|ruby'],
    ['color_hue', 'granada', 'Granada', 'granada|garnet'],
    ['color_hue', 'atijolado', 'Atijolado', 'atijolado|tijolo|tawny|acastanhado'],

    ['texture', 'macio', 'Macio', 'macio'],
    ['texture', 'sedoso', 'Sedoso', 'sedoso'],
    ['texture', 'aveludado', 'Aveludado', 'aveludado'],
    ['texture', 'cremoso', 'Cremoso', 'cremoso'],
    ['texture', 'aspero', 'Áspero', 'áspero|aspero'],
    ['texture', 'adstringente', 'Adstringente', 'adstringente'],
    ['texture', 'granuloso', 'Granuloso', 'granuloso|arenoso'],
    ['texture', 'fluido', 'Fluido', 'fluido|aguado']
  ];

  // [criterion, label, group, weight, compare, scale, params, order]
  // Pesos somam 100. Critérios com peso 0 são registrados e aparecem nas estatísticas,
  // mas não entram na nota.
  var RULES = [
    ['grape', 'Uva', 'identificacao', 25, 'hypothesis', '', {}, 1],
    ['region', 'Região', 'identificacao', 20, 'hierarchical', '', {}, 2],
    ['country', 'País', 'identificacao', 10, 'exact', '', {}, 3],
    ['vintage', 'Safra', 'identificacao', 5, 'numeric', '', { hit: 0, near: 2 }, 4],
    ['abv', 'Teor alcoólico (%)', 'identificacao', 5, 'numeric', '', { hit: 0.5, near: 1 }, 5],
    ['aromas', 'Aromas', 'nariz', 15, 'set_overlap', '', { hit: 0.6, near: 0.3 }, 6],
    ['acidity', 'Acidez', 'estrutura', 5, 'ordinal', 'acidity', { near: 1 }, 7],
    ['tannin', 'Tanino', 'estrutura', 5, 'ordinal', 'tannin', { near: 1 }, 8],
    ['body', 'Corpo', 'estrutura', 5, 'ordinal', 'body', { near: 1 }, 9],
    ['finish', 'Persistência', 'estrutura', 5, 'ordinal', 'finish', { near: 1 }, 10],
    ['alcohol', 'Álcool (nível)', 'estrutura', 0, 'ordinal', 'alcohol', { near: 1 }, 11],
    ['sweetness', 'Dulçor', 'estrutura', 0, 'ordinal', 'sweetness', { near: 1 }, 12],
    ['intensity', 'Intensidade', 'estrutura', 0, 'ordinal', 'intensity', { near: 1 }, 13],
    ['color_intensity', 'Intensidade da cor', 'visual', 0, 'ordinal', 'color_intensity', { near: 1 }, 14],
    ['color_hue', 'Tonalidade', 'visual', 0, 'exact', 'color_hue', {}, 15]
  ];

  // Vocabulário de aromas: [categoria, subcategoria, [aromas]].
  var AROMAS = [
    ['Frutas', 'Frutas vermelhas', ['Cereja vermelha', 'Framboesa', 'Morango', 'Groselha vermelha', 'Cranberry', 'Romã']],
    ['Frutas', 'Frutas negras', ['Cereja negra', 'Amora', 'Cassis', 'Mirtilo', 'Ameixa', 'Ameixa preta', 'Jabuticaba']],
    ['Frutas', 'Frutas cítricas', ['Limão', 'Lima', 'Grapefruit', 'Laranja', 'Casca de laranja', 'Tangerina']],
    ['Frutas', 'Frutas de pomar', ['Maçã verde', 'Maçã vermelha', 'Pera', 'Marmelo']],
    ['Frutas', 'Frutas de caroço', ['Pêssego', 'Damasco', 'Nectarina']],
    ['Frutas', 'Frutas tropicais', ['Abacaxi', 'Maracujá', 'Manga', 'Lichia', 'Banana', 'Melão', 'Goiaba']],
    ['Frutas', 'Frutas secas e cozidas', ['Uva-passa', 'Figo seco', 'Ameixa seca', 'Tâmara', 'Geleia', 'Fruta cozida', 'Fruta em compota']],
    ['Flores', 'Flores', ['Violeta', 'Rosa', 'Flor de laranjeira', 'Jasmim', 'Flor de sabugueiro', 'Madressilva', 'Lavanda', 'Acácia']],
    ['Vegetais', 'Vegetais', ['Pimentão verde', 'Aspargo', 'Ervilha', 'Tomate', 'Folha de tomate', 'Azeitona verde', 'Azeitona preta']],
    ['Herbáceos', 'Herbáceos', ['Grama cortada', 'Folha de groselha', 'Eucalipto', 'Menta', 'Hortelã', 'Tomilho', 'Alecrim', 'Sálvia', 'Louro', 'Feno', 'Chá preto', 'Erva-doce']],
    ['Especiarias', 'Especiarias', ['Pimenta-do-reino', 'Pimenta branca', 'Cravo', 'Canela', 'Noz-moscada', 'Anis', 'Alcaçuz', 'Gengibre', 'Baunilha', 'Zimbro']],
    ['Terrosos', 'Terrosos', ['Terra molhada', 'Cogumelo', 'Sub-bosque', 'Folhas secas', 'Trufa', 'Beterraba']],
    ['Minerais', 'Minerais', ['Pedra molhada', 'Sílex', 'Grafite', 'Giz', 'Petróleo / querosene', 'Salino', 'Iodo', 'Fumaça']],
    ['Animais', 'Animais', ['Couro', 'Carne', 'Caça', 'Suor de cavalo / estábulo', 'Almiscarado']],
    ['Madeira', 'Madeira', ['Carvalho', 'Cedro', 'Tostado', 'Coco', 'Defumado', 'Café', 'Chocolate', 'Cacau', 'Caramelo', 'Caixa de charuto']],
    ['Evolução', 'Evolução', ['Tabaco', 'Frutos secos (nozes)', 'Amêndoa', 'Mel', 'Couro envelhecido', 'Cera', 'Toffee', 'Oxidado', 'Brioche / pão', 'Levedura', 'Manteiga', 'Iogurte']],
    ['Outros', 'Outros', ['Resina', 'Borracha', 'Esmalte / acetona', 'Enxofre', 'Rolha (TCA)', 'Vinagre (volátil)']]
  ];

  // Somente nomes de países (vocabulário para as hipóteses da degustação). Clima, história
  // etc. ficam vazios até serem cadastrados ou enriquecidos com fonte.
  var COUNTRIES = ['África do Sul', 'Alemanha', 'Argentina', 'Armênia', 'Austrália', 'Áustria', 'Brasil', 'Bulgária',
    'Canadá', 'Chile', 'China', 'Croácia', 'Eslovênia', 'Espanha', 'Estados Unidos', 'França', 'Geórgia', 'Grécia',
    'Hungria', 'Inglaterra', 'Israel', 'Itália', 'Japão', 'Líbano', 'México', 'Moldávia', 'Nova Zelândia', 'Portugal',
    'Romênia', 'Suíça', 'Turquia', 'Uruguai'];

  function seedIfEmpty_(entity, records, report) {
    if (Repo.all(entity).length) return;
    Repo.insert(entity, records);
    report.push(entity + ': ' + records.length + ' registros iniciais');
  }

  function run() {
    var report = [];
    seedIfEmpty_('settings', SETTINGS.map(function (s) {
      return { key: s[0], value: s[1] === null ? String(CONFIG.SCHEMA_VERSION) : s[1], description: s[2], source: 'sistema' };
    }), report);

    var pos = {};
    seedIfEmpty_('scales', SCALES.map(function (s) {
      pos[s[0]] = (pos[s[0]] || 0) + 1;
      return { scale: s[0], position: pos[s[0]], key: s[1], label: s[2], synonyms: s[3], source: 'sistema' };
    }), report);

    seedIfEmpty_('scoring_rules', RULES.map(function (r) {
      return { criterion: r[0], label: r[1], group: r[2], weight: r[3], compare: r[4], scale: r[5],
        params: r[6], active: true, order: r[7], source: 'sistema' };
    }), report);

    var aromas = [], order = 0;
    AROMAS.forEach(function (g) {
      g[2].forEach(function (name) {
        aromas.push({ name: name, name_key: Util.normKey(name), category: g[0], subcategory: g[1],
          order: ++order, source: 'sistema', source_ref: 'Vocabulário base do Wine Study Lab' });
      });
    });
    seedIfEmpty_('aromas', aromas, report);

    seedIfEmpty_('countries', COUNTRIES.map(function (n) {
      return { name: n, name_key: Util.normKey(n), source: 'sistema', source_ref: 'Lista base de países produtores' };
    }), report);
    return report;
  }

  return { run: run };
})();
