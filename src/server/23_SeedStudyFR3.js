/**
 * CARTÕES DE ESTUDO — França: Vale do Loire, Vale do Rhône e Sul da França (material de aula, v2).
 * Tópicos curtos; o material pode ter erros: "corrigido" = conferido em fonte aberta (Wikipedia); "conferir" = não confirmado (fica fora do quiz).
 * Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['França', region, sub] : ['França', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  // =====================  VALE DO LOIRE (aula 20)  =====================
  var L = 'Vale do Loire';
  R(L, '', 'Vale do Loire: visão geral', 'fatos', [
    ['Onde', 'Coração da França, ao longo do rio Loire (cerca de 1.000 km), entre o Massif Central e as planícies atlânticas'],
    ['Área', 'Cerca de 70 mil ha de vinhedos'],
    ['AOCs', '62 segundo o slide; a Wikipedia fala em 87 appellations (AOC e IGP somadas)', 'conferir'],
    ['Produção', 'Entre 300 e 310 milhões de litros por ano'],
    ['Estilos', 'Brancos, rosés, tintos, espumantes, crémants e doces (com e sem botrytis)']
  ]);
  R(L, '', 'Sub-regiões do Loire e suas estrelas', 'fatos', [
    ['Centre', 'Sancerre e Pouilly-Fumé: Sauvignon Blanc'],
    ['Touraine', 'Vouvray (Chenin Blanc), Chinon e Bourgueil (Cabernet Franc)'],
    ['Anjou-Saumur', 'Savennières, Saumur-Champigny, Coteaux du Layon e rosés d\'Anjou'],
    ['Pays Nantais', 'Muscadet, de Melon de Bourgogne'],
    ['Em resumo', 'Anjou e Saumur são especializadas em tintos de Cabernet Franc, segundo o slide']
  ]);
  R(L, '', 'Produtores do Loire', 'produtores', [
    ['Tinel-Blondelet', ''], ['Nicolas Joly', ''], ['Domaine Baumard', ''], ['Famille Bougrier', ''], ['Château des Gillières', ''], ['Domaine du Sauvard', '']
  ]);

  R(L, '', 'Loire no mapa do slide', 'lista', [
    ['', 'Pays Nantais: Muscadet, Muscadet Sèvre-et-Maine, Muscadet Coteaux de la Loire, Muscadet Côtes de Grand Lieu, Fiefs Vendéens'],
    ['', 'Anjou-Saumur: Savennières, Anjou, Coteaux de l\'Aubance, Coteaux du Layon, Saumur, Saumur-Champigny, Bonnezeaux'],
    ['', 'Touraine: Vouvray, Montlouis, Chinon, Bourgueil, Cheverny, Cour-Cheverny, Jasnières, Coteaux du Vendômois, Haut-Poitou'],
    ['', 'Centre: Sancerre, Pouilly-Fumé, Menetou-Salon, Quincy, Reuilly, Coteaux du Giennois, Châteaumeillant']
  ]);

  // Centre
  R(L, 'Sancerre', 'Centre: terroir e uvas', 'fatos', [
    ['Solos', 'Variam de calcário a argila; clima continental, com invernos frios e verões moderadamente quentes'],
    ['Calcário', 'Ideal para a Sauvignon Blanc'],
    ['Argila', 'Favorece a Pinot Noir'],
    ['Sauvignon Blanc', 'Acidez elevada, notas cítricas e florais e mineralidade'],
    ['Pinot Noir', 'Tintos de frutas vermelhas frescas, taninos suaves e elegância estruturada'],
    ['Vinificação', 'Brancos em aço inox; tintos podem passar por barris de carvalho'],
    ['Estilos', 'De Sauvignon Blancs frescos a Pinot Noirs complexos'],
    ['Filosofia', 'Vinificação que preserva a autenticidade da uva e do terroir'],
    ['Maturação', 'O clima continental favorece maturação gradual']
  ]);
  R(L, 'Sancerre', 'Sancerre', 'fatos', [
    ['Solos', 'Sílex, calcário e argila'],
    ['Branco', 'Sauvignon Blanc de mineralidade marcante, com limão, grapefruit e notas herbáceas'],
    ['Sílex', 'A mineralidade marcante vem do solo de sílex'],
    ['Tinto', 'Também faz tintos elegantes, sobretudo de Pinot Noir']
  ]);
  R(L, 'Pouilly-Fumé', 'Pouilly-Fumé', 'fatos', [
    ['Solos', 'Argila e calcário, com qualidade mineral'],
    ['Uva', 'Sauvignon Blanc, casta dominante'],
    ['Estilo', 'Brancos mais intensos que os de Sancerre, com toques defumados'],
    ['Vinificação', 'Aço inox, para preservar a fruta e a pureza'],
    ['Fama', 'Um dos grandes Sauvignon Blancs do mundo, com reconhecimento internacional'],
    ['Local', 'AOC no coração do Vale do Loire, na sub-região Centre']
  ]);
  // Touraine
  R(L, 'Vouvray e Montlouis', 'Touraine: terroir e castas', 'fatos', [
    ['Solos e clima', 'De calcário a argila; clima de continental a oceânico'],
    ['Brancas', 'Sauvignon Blanc e Chenin Blanc (secos e doces)'],
    ['Tintas', 'Cabernet Franc e Gamay'],
    ['AOCs de destaque', 'Vouvray, Chinon e Bourgueil']
  ]);
  R(L, 'Vouvray e Montlouis', 'Vouvray', 'fatos', [
    ['Uva', 'Chenin Blanc'],
    ['Estilos', 'De secos a espumantes elegantes']
  ]);
  R(L, 'Chinon e Bourgueil', 'Chinon e Bourgueil', 'fatos', [
    ['Uva', 'Cabernet Franc'],
    ['Perfil', 'De frutados a estruturados']
  ]);
  // Anjou-Saumur
  R(L, 'Anjou (Coteaux du Layon, Quarts de Chaume)', 'Anjou-Saumur: terroir e castas', 'fatos', [
    ['Solos e clima', 'Xisto, calcário e argila; clima de continental a oceânico'],
    ['Chenin Blanc', 'Brancos secos e doces, de acidez vibrante e complexidade aromática'],
    ['Tintas', 'Cabernet Franc e Grolleau: de leves e frutados a estruturados']
  ]);
  R(L, 'Anjou (Coteaux du Layon, Quarts de Chaume)', 'Denominações de Anjou-Saumur', 'denominacoes', [
    ['Coteaux du Layon', 'Doces de Chenin Blanc afetado pela podridão nobre', 'AOC'],
    ['Rosé d\'Anjou', 'Rosés frescos e aromáticos, sobretudo de Grolleau', 'AOC'],
    ['Savennières', 'Chenin Blanc mineral e complexo', 'AOC'],
    ['Saumur-Champigny', 'Tintos elegantes de Cabernet Franc', 'AOC']
  ]);
  R(L, 'Saumur e Saumur-Champigny', 'Saumur-Champigny', 'fatos', [
    ['Uva', 'Cabernet Franc'],
    ['Perfil', 'Tintos de grande elegância']
  ]);
  R(L, 'Savennières', 'Savennières', 'fatos', [
    ['Uva', 'Chenin Blanc'],
    ['Solo', 'Encostas de xisto'],
    ['Guarda', 'Vinhos que envelhecem com graça'],
    ['Aromas', 'Mel, frutas maduras e mineralidade única']
  ]);
  // Pays Nantais
  R(L, 'Pays Nantais (Muscadet)', 'Pays Nantais', 'fatos', [
    ['Onde', 'Extremo oeste do Loire, com clima marítimo sob influência do Atlântico'],
    ['Efeito', 'O clima traz acidez e frescor aos vinhos'],
    ['Uva', 'Melon de Bourgogne (melon blanc): cítrico, floral e salino, com mineralidade costeira'],
    ['Tintos e rosés', 'Também produz, muitas vezes com Gamay e Cabernet Franc']
  ]);
  R(L, 'Pays Nantais (Muscadet)', 'Muscadet Sèvre-et-Maine', 'fatos', [
    ['Estilo', 'Brancos secos e refrescantes'],
    ['Solo', 'Mica xistosa, que dá mineralidade'],
    ['Sur lie', 'Amadurecimento sobre as borras: mais complexidade e textura']
  ]);

  // =====================  VALE DO RHÔNE (aula 21)  =====================
  var RH = 'Vale do Rhône';
  R(RH, '', 'Vale do Rhône: visão geral', 'fatos', [
    ['Extensão', 'Cerca de 200 km ao longo do vale do Rhône'],
    ['Área', 'Cerca de 78 mil ha segundo o slide; a Wikipedia traz 83,8 mil ha na AOC Côtes du Rhône (2008)', 'conferir'],
    ['Solos', 'Argila, calcário e pedregulhos'],
    ['Clima', 'Mediterrâneo, com verões quentes e secos e invernos suaves'],
    ['Norte e sul', 'Dois blocos: Rhône Setentrional (norte) e Meridional (sul)'],
    ['Regulação', 'AOCs rigorosamente regulamentadas, para garantir autenticidade e qualidade']
  ]);
  R(RH, '', 'Estrelas do Rhône', 'fatos', [
    ['Tintos robustos', 'Châteauneuf-du-Pape e Gigondas'],
    ['Brancos', 'Hermitage e Condrieu (esta, de Viognier)'],
    ['Outras', 'Cornas e Vacqueyras']
  ]);
  R(RH, '', 'Produtores do Rhône', 'produtores', [
    ['Château de Beaucastel', ''], ['E. Guigal', ''], ['Michel Chapoutier', ''], ['Château Rayas', ''], ['Domaine Durieu', ''], ['Domaine Clos des Papes', '']
  ]);
  R(RH, '', 'Rhône no mapa do slide', 'lista', [
    ['', 'Norte: Côte-Rôtie, Condrieu, Château-Grillet, Saint-Joseph, Crozes-Hermitage, Hermitage, Cornas, Saint-Péray'],
    ['', 'Sul: Châteauneuf-du-Pape, Gigondas, Vacqueyras, Rasteau, Beaumes-de-Venise, Lirac, Tavel, Côtes du Ventoux, Côtes du Luberon, Costières de Nîmes, Coteaux du Tricastin'],
    ['', 'Genéricas: Côtes du Rhône e Côtes du Rhône Villages; Diois: Clairette de Die e Châtillon-en-Diois']
  ]);
  R(RH, '', 'Syrah', 'fatos', [
    ['Fama', 'Casta com história centenária, redescoberta e espalhada pelo mundo; adapta-se a vários estilos e regiões'],
    ['Origem', 'Norte do Rhône; a Syrah é a grande uva tinta do norte'],
    ['Vinhas', 'Videira vigorosa, cachos pequenos e bagos escuros; sensível ao clima'],
    ['Aromas', 'Especiarias, pimenta preta e frutas escuras (amora, ameixa)'],
    ['Estrutura', 'Taninos firmes e estrutura robusta'],
    ['Terroir', 'Prefere granito decomposto e clima moderadamente quente']
  ]);
  R(RH, '', 'Viognier', 'fatos', [
    ['Origem', 'Norte do Rhône; redescoberta e espalhada pelo mundo'],
    ['Vinhas', 'Videira vigorosa, cachos pequenos e bagos dourados; sensível ao clima'],
    ['Aromas', 'Violeta e flor de laranjeira; frutas de polpa branca, pêssego e damasco'],
    ['Estilo', 'Brancos aromáticos e encorpados'],
    ['Textura', 'Sedosa e aveludada'],
    ['Terroir', 'Prefere granito decomposto e clima moderadamente quente']
  ]);
  // Norte
  R(RH, 'Côte-Rôtie', 'Côte-Rôtie', 'fatos', [
    ['Vinhas', 'Encostas íngremes, boa exposição solar e maturação gradual'],
    ['Solos', 'Granito decomposto e xisto'],
    ['Clima', 'Continental moderado, com amplitude térmica que preserva a acidez'],
    ['Uvas', 'Predomínio da Syrah, com um toque de Viognier: taninos suaves e notas florais']
  ]);
  R(RH, 'Condrieu e Château-Grillet', 'Condrieu e Château-Grillet', 'fatos', [
    ['Condrieu', 'Brancos de Viognier em encostas íngremes de granito decomposto e mica'],
    ['Estilo', 'Intensidade aromática, florais marcantes e textura sedosa'],
    ['Château-Grillet', 'AOC autônoma dentro de Condrieu, só de Viognier'],
    ['Solos', 'Em Château-Grillet, solos xistosos que dão mineralidade única'],
    ['Microclima', 'Exposição solar máxima e microclima local, de vinhos excepcionais'],
    ['Perfil', 'Viognier concentrado, elegante e expressivo']
  ]);
  R(RH, 'Hermitage', 'Hermitage', 'fatos', [
    ['Vinhas', 'Encostas íngremes com exposições variadas'],
    ['Solos', 'Granito desintegrado, argila, calcário e pedregulhos'],
    ['Clima', 'Continental moderado, de verões quentes e invernos frios, com grande oscilação térmica que retém acidez'],
    ['Tintos', 'Syrah: encorpados, complexos e de grande potencial de guarda'],
    ['Brancos', 'Marsanne e Roussanne']
  ]);
  R(RH, 'Crozes-Hermitage', 'Crozes-Hermitage', 'fatos', [
    ['Vinhas', 'Extensa área ao norte do Rhône, em encostas suaves e planícies'],
    ['Solos', 'De granito a argila e pedregulhos'],
    ['Clima', 'Continental moderado, de verões quentes e invernos frios; marcante oscilação térmica: acidez equilibrada'],
    ['Expressão', 'Solos diversos dão mineralidade e estrutura notáveis']
  ]);
  R(RH, 'Saint-Joseph', 'Saint-Joseph', 'fatos', [
    ['Vinhas', 'Encostas íngremes, com exposições variadas'],
    ['Solos', 'De granito a xisto'],
    ['Uvas', 'Tintos de Syrah; brancos de Marsanne e Roussanne'],
    ['Perfil', 'Estrutura, complexidade e grande potencial de guarda']
  ]);
  R(RH, 'Cornas', 'Cornas', 'fatos', [
    ['Uva', 'Só Syrah'],
    ['Terroir', 'Encostas íngremes, solos graníticos e clima quente'],
    ['Perfil', 'Tintos robustos e intensos, com frutas escuras, especiarias e taninos firmes'],
    ['Vinificação', 'Fermentação em cubas de madeira']
  ]);
  R(RH, '', 'Saint-Péray', 'fatos', [
    ['Estilo', 'Brancos exclusivos, de Marsanne e Roussanne'],
    ['Solos', 'Calcários e argilosos'],
    ['Perfil', 'Frescos, minerais e elegantes, com exposição solar bem regulada']
  ]);
  // Sul
  R(RH, 'Châteauneuf-du-Pape', 'Châteauneuf-du-Pape: terroir', 'fatos', [
    ['Margem', 'Margem esquerda (leste) do Rhône; o slide diz direita', 'corrigido'],
    ['Solos', 'Galets (pedras roladas), arenito e argila'],
    ['Galets', 'Retêm calor de dia e o irradiam à noite, ajudando a maturação'],
    ['Clima', 'Mediterrâneo, de verões quentes e secos'],
    ['Mistral', 'Vento forte que controla a umidade e previne doenças'],
    ['Relevo', 'Encostas suaves; argila e arenito dão riqueza, estrutura e mineralidade']
  ]);
  R(RH, 'Châteauneuf-du-Pape', 'Uvas de Châteauneuf-du-Pape', 'fatos', [
    ['Brancas', 'Grenache Blanc, Clairette, Roussanne, Bourboulenc, Picpoul e Picardan'],
    ['Tintas', 'Grenache, Syrah, Mourvèdre, Cinsault, Vaccarèse, Terret Noir, Counoise e Muscardin'],
    ['Contagem', 'Tradicionalmente 13 variedades; desde 2009, 18 contando as versões de cor']
  ]);
  R(RH, 'Châteauneuf-du-Pape', 'Grenache', 'fatos', [
    ['Origem', 'Natural de Aragão, na Espanha; associada ao sul da França e ao nordeste espanhol'],
    ['Clima', 'Videiras vigorosas que preferem clima quente e seco'],
    ['Cachos', 'Cachos e bagos de tamanho médio a grande'],
    ['Perfil', 'Cereja, morango e amora maduros, com especiarias como pimenta e algo herbáceo']
  ]);
  R(RH, 'Côtes du Rhône e Villages', 'Côtes du Rhône-Villages', 'fatos', [
    ['Criação', 'Decreto de 1967 (o slide diz 1966)', 'corrigido'],
    ['Área', 'Cerca de 8 mil ha; tintos, brancos e rosés'],
    ['Aldeias', '95 comunas podem usar a AOC (o slide diz 96)', 'corrigido'],
    ['Com nome no rótulo', 'O slide diz 22 aldeias (e 16 até 2013); a Wikipedia em francês lista 21 denominações', 'conferir']
  ]);
  R(RH, 'Tavel e Lirac', 'Tavel', 'fatos', [
    ['Estilo', 'Só rosés, entre os melhores do mundo'],
    ['Uvas', 'Principalmente Grenache e Cinsault'],
    ['Perfil', 'Cor vibrante, complexidade aromática e corpo; versátil à mesa']
  ]);
  R(RH, 'Tavel e Lirac', 'Lirac', 'fatos', [
    ['Estilos', 'Tintos e brancos; mais conhecida pelos tintos robustos'],
    ['Tintos', 'Dominados pela Grenache: frutas intensas, taninos bem integrados e elegância que melhora com o envelhecimento'],
    ['Terroir', 'Solo diversificado e influência mediterrânea'],
    ['Brancos', 'Muitas vezes de Clairette e Viognier']
  ]);
  R(RH, '', 'Côtes du Ventoux', 'fatos', [
    ['Onde', 'Em torno do Mont Ventoux; paisagens e vinhos acessíveis'],
    ['Tintos', 'Syrah, Grenache e Mourvèdre: fruta vibrante, especiarias e estrutura amigável'],
    ['Brancos', 'Frescos, com Viognier e Clairette']
  ]);

  // =====================  SUL DA FRANÇA (aula 22)  =====================
  var LR = 'Languedoc-Roussillon';
  R(LR, '', 'Languedoc e Roussillon: sempre juntas', 'linha', [
    ['Até 2016', 'Formavam a região administrativa "Languedoc-Roussillon"'],
    ['2016', 'Reforma administrativa: as regiões metropolitanas passam de 22 para 13'],
    ['Occitânia', 'Languedoc-Roussillon se une a Midi-Pyrénées'],
    ['Hoje', 'Seguem juntas no vinho por semelhanças geográficas, climáticas e vitivinícolas']
  ]);
  R(LR, '', 'Languedoc-Roussillon: visão geral', 'fatos', [
    ['Área', 'Cerca de 184 mil ha em 2020 (o slide diz 280 mil)', 'corrigido'],
    ['Peso', 'Maior região francesa em área e em volume'],
    ['Mudança', 'Reduziu muito o volume nas últimas décadas e passou a focar qualidade'],
    ['Investimento', 'Capital estrangeiro (australiano e americano) modernizou a indústria'],
    ['Castas', 'Plantio amplo de Chardonnay, Cabernet Sauvignon e Merlot (castas "mais comerciais")'],
    ['Tecnologia', 'Uso da tecnologia incentivado'],
    ['Solos', 'Variados; predominam xisto, calcário e argila'],
    ['Clima', 'Mediterrâneo: verões quentes e secos, influência marítima e amplitude térmica']
  ]);
  R(LR, '', 'AOCs principais do Languedoc-Roussillon', 'lista', [
    ['', 'Mais de 30 AOCs, segundo o slide'],
    ['', 'Corbières, Minervois, Saint-Chinian, Fitou, Crémant de Limoux, Muscat de Frontignan, Coteaux-du-Languedoc'],
    ['', 'Collioure, Côtes du Roussillon Villages, Côtes du Roussillon, Maury Sec, Rivesaltes, Maury, Banyuls']
  ]);
  R(LR, '', 'Denominações do Languedoc', 'denominacoes', [
    ['Clairette du Languedoc', 'Brancos secos e espumantes aromáticos de Clairette (acidez equilibrada), perto de Montpellier', 'AOC'],
    ['Fitou', 'Tintos potentes, muitas vezes com Carignan; entre Narbonne e Perpignan', 'AOC'],
    ['Muscat de Frontignan', 'Vinho doce natural (VDN) de Muscat, em Frontignan, perto de Montpellier: aromas intensos e florais', 'AOC'],
    ['Muscat de Mireval', 'Vinho doce natural (VDN) de Muscat, perto de Mireval: doçura equilibrada e aromas envolventes', 'AOC']
  ]);
  R(LR, '', 'Denominações do Roussillon', 'denominacoes', [
    ['Côtes du Roussillon', 'Tintos (Syrah, Grenache, Carignan), brancos e rosés; abrange áreas no Roussillon e no Languedoc', 'AOC'],
    ['Rivesaltes', 'De tintos e brancos a doces fortificados; Grenache e Macabeu', 'AOC'],
    ['Maury Sec', 'Tintos secos e encorpados de Grenache, Syrah e Carignan', 'AOC'],
    ['Muscat de Rivesaltes', 'Doce natural de Muscat: aromas florais e frutados', 'AOC']
  ]);
  R(LR, '', 'Languedoc-Roussillon no mapa do slide', 'lista', [
    ['', 'Languedoc: Coteaux du Languedoc, Saint-Chinian, Faugères, Minervois, Corbières, Fitou, Blanquette de Limoux, Picpoul de Pinet, Muscat (Frontignan e Mireval)'],
    ['', 'Roussillon: Maury, Côtes du Roussillon, Rivesaltes, Côtes du Roussillon Villages, Banyuls'],
    ['', 'Cidades no mapa: Montpellier, Béziers, Narbonne, Perpignan, Nîmes']
  ]);
  R(LR, 'Corbières', 'Corbières', 'fatos', [
    ['Onde', 'Vasta área do Languedoc, de solos e climas diversos'],
    ['Vinhos', 'Tintos robustos, com Carignan, Grenache e Syrah']
  ]);
  R(LR, 'Minervois', 'Minervois', 'fatos', [
    ['Onde', 'Colinas ao norte de Carcassonne, segundo o slide', 'conferir'],
    ['Vinhos', 'Tintos ricos e encorpados, em blends de Syrah, Grenache e Mourvèdre']
  ]);
  R(LR, 'Limoux', 'Limoux', 'denominacoes', [
    ['Blanquette de Limoux', 'Espumante da uva Mauzac; uma das AOCs de espumante mais antigas do mundo', 'AOC'],
    ['Crémant de Limoux', 'Espumante de método tradicional: Chardonnay, Chenin Blanc e Mauzac', 'AOC'],
    ['Limoux', 'Brancos e tintos de qualidade, muitas vezes de Chardonnay e Chenin Blanc', 'AOC']
  ]);
  R(LR, 'Banyuls e Collioure', 'Banyuls e Collioure', 'fatos', [
    ['Onde', 'Costa do extremo sul da França, perto da fronteira com a Espanha'],
    ['Collioure', 'Tintos elegantes e frescos, com Mourvèdre e Grenache'],
    ['Banyuls', 'Doces fortificados feitos sobretudo de Grenache; o slide os compara ao Porto']
  ]);
  R(LR, 'Maury', 'Maury', 'fatos', [
    ['Estilo', 'Doces fortificados, geralmente de Grenache'],
    ['Perfil', 'Aromas intensos e sabores ricos'],
    ['Maury Sec', 'A versão seca: tintos encorpados de Grenache, Syrah e Carignan']
  ]);
  R(LR, '', 'Produtores do Languedoc-Roussillon', 'produtores', [
    ['Mas Julien', ''], ['Mas de Daumas Gassac', ''], ['Domaine Gauby', '']
  ]);

  // Provença
  var PV = 'Provença';
  R(PV, '', 'Provença: visão geral', 'fatos', [
    ['Onde', 'Sudeste da França; porta de entrada da videira no país'],
    ['História', 'Tradição vitivinícola de mais de 2.600 anos'],
    ['Rosés', 'Cerca de 80% da produção, segundo o slide', 'conferir'],
    ['Uvas', 'Grenache, Syrah e Vermentino'],
    ['Rosés', 'Reconhecidos pela elegância e pelo frescor; a região também faz brancos e tintos'],
    ['Tradição', 'Métodos tradicionais combinados com inovações contemporâneas'],
    ['Solos e clima', 'Argila, calcário e xisto; clima mediterrâneo'],
    ['Números', 'Quase 28 mil ha e cerca de 120 milhões de litros por ano'],
    ['Além do vinho', 'Azeites, alhos, ervas e lavanda']
  ]);
  R(PV, '', 'Denominações da Provença', 'denominacoes', [
    ['Côtes de Provence', 'Maior AOC da região, com várias sub-regiões; rosés pálidos e elegantes (também tintos e brancos)', 'AOC']
  ]);
  R(PV, 'Bandol', 'Bandol', 'fatos', [
    ['Onde', 'Várias comunas perto de Toulon'],
    ['Uva', 'Mourvèdre'],
    ['Estilo', 'Tintos potentes, ricos, complexos e longevos']
  ]);
  R(PV, 'Cassis', 'Cassis', 'fatos', [
    ['Onde', 'Costa próxima a Marselha'],
    ['Estilo', 'Brancos elegantes, frescos e minerais'],
    ['Uvas', 'Clairette, Marsanne e Ugni Blanc']
  ]);
  R(PV, 'Palette', 'Palette', 'fatos', [
    ['Onde', 'Pequena AOC ao redor de Aix-en-Provence'],
    ['Estilos', 'Tintos, brancos e rosés'],
    ['Tintos', 'Frequentemente de Grenache e Mourvèdre, encorpados e com boa capacidade (o slide corta a frase)', 'conferir']
  ]);
  R(PV, 'Côtes de Provence', 'Côtes de Provence', 'fatos', [
    ['Peso', 'Maior AOC da Provença, abrangendo várias sub-regiões'],
    ['Rosés', 'Pálidos, frescos e elegantes; frequentemente com Grenache, Cinsault, Syrah e Mourvèdre'],
    ['Outros', 'Também faz tintos e brancos']
  ]);
  R(PV, '', 'Produtores da Provença', 'produtores', [
    ['Château de Roquefort', ''], ['Château Simone', ''], ['Domaine de Trévallon', '']
  ]);

  // =====================  HARMONIZAÇÃO / COZINHA REGIONAL  =====================
  H('Vale do Loire', 'Cozinha do Loire', [
    ['Ingredientes', 'Queijos, peras e maçãs, lavaret (peixe típico), enguias, mexilhões, frango de Bresse e cogumelos'],
    ['Sandre au beurre blanc', 'Peixe de água doce do Loire com beurre blanc (manteiga, vinho branco, chalota e redução de vinagre); o slide o chama de lavaret', 'corrigido'],
    ['Poulet de Bresse', 'Frango de carne tenra com molho cremoso rico; a Bresse fica no leste da França, não no Loire', 'conferir'],
    ['Moules à la marinière', 'Mexilhões cozidos com vinho branco, alho, cebola e ervas; o caldo serve para molhar o pão'],
    ['Tarte Tatin', 'Torta de maçã caramelizada, servida de cabeça para baixo; as maçãs caramelizam antes de receber a massa e ir ao forno']
  ]);
  H('Vale do Rhône', 'Cozinha do Rhône', [
    ['Ingredientes', 'Alho, azeites, chalotas, queijo Banon, truta, embutidos e mel de lavanda'],
    ['Cassoulet', 'Ensopado de porco, linguiça, pato e feijão branco, cozido lentamente; é prato do Languedoc, não do Rhône', 'conferir'],
    ['Daube provençale', 'Guisado de carne (em geral de boi) cozido em vinho tinto, ervas provençais e legumes'],
    ['Pôchouse', 'Peixes de água doce cozidos em caldo de vinho branco, alho, cebola e ervas', 'conferir'],
    ['Tarte Tatin', 'Torta de maçã caramelizada, de origem no centro da França mas apreciada em todo o país']
  ]);
  H('Sul da França', 'Cozinha do Sul da França', [
    ['Ingredientes', 'Queijos (Roquefort, Banon), azeites, alhos, ervas (tomilho, alecrim, manjericão, louro), tomates e pimentões'],
    ['Do mar', 'Moluscos, caranguejos e peixes como linguado, dourado e robalo'],
    ['Ratatouille', 'Prato de camponês: berinjela, abobrinha, pimentões e tomates cozidos com ervas e azeite'],
    ['Cassoulet', 'Ensopado de porco, linguiça, pato ou carneiro com feijão branco (o slide cita também grão-de-bico)', 'corrigido'],
    ['Bouillabaisse', 'Sopa provençal de peixes e frutos do mar com azeite e ervas, servida com rouille (alho e açafrão)']
  ]);

  // Nível no quiz, por notoriedade (avaliação editorial; ajustável): medio = conhecido no mundo todo.
  var LEVELS = {
    'Vale do Loire: visão geral': 'medio',
    'Sub-regiões do Loire e suas estrelas': 'medio',
    'Produtores do Loire': 'expert',
    'Loire no mapa do slide': 'expert',
    'Centre: terroir e uvas': 'avancado',
    'Sancerre': 'medio',
    'Pouilly-Fumé': 'medio',
    'Touraine: terroir e castas': 'avancado',
    'Vouvray': 'avancado',
    'Chinon e Bourgueil': 'avancado',
    'Anjou-Saumur: terroir e castas': 'avancado',
    'Denominações de Anjou-Saumur': 'avancado',
    'Saumur-Champigny': 'avancado',
    'Savennières': 'avancado',
    'Pays Nantais': 'avancado',
    'Muscadet Sèvre-et-Maine': 'avancado',
    'Vale do Rhône: visão geral': 'medio',
    'Estrelas do Rhône': 'medio',
    'Rhône no mapa do slide': 'expert',
    'Produtores do Rhône': 'avancado',
    'Syrah': 'medio',
    'Viognier': 'medio',
    'Côte-Rôtie': 'medio',
    'Condrieu e Château-Grillet': 'avancado',
    'Hermitage': 'medio',
    'Crozes-Hermitage': 'avancado',
    'Saint-Joseph': 'avancado',
    'Cornas': 'avancado',
    'Saint-Péray': 'expert',
    'Châteauneuf-du-Pape: terroir': 'medio',
    'Uvas de Châteauneuf-du-Pape': 'avancado',
    'Grenache': 'medio',
    'Côtes du Rhône-Villages': 'expert',
    'Tavel': 'avancado',
    'Lirac': 'expert',
    'Côtes du Ventoux': 'expert',
    'Languedoc e Roussillon: sempre juntas': 'avancado',
    'Languedoc-Roussillon: visão geral': 'avancado',
    'AOCs principais do Languedoc-Roussillon': 'avancado',
    'Denominações do Languedoc': 'expert',
    'Denominações do Roussillon': 'expert',
    'Corbières': 'avancado',
    'Minervois': 'avancado',
    'Limoux': 'avancado',
    'Banyuls e Collioure': 'avancado',
    'Maury': 'expert',
    'Languedoc-Roussillon no mapa do slide': 'expert',
    'Produtores do Languedoc-Roussillon': 'expert',
    'Provença: visão geral': 'medio',
    'Denominações da Provença': 'avancado',
    'Bandol': 'avancado',
    'Cassis': 'expert',
    'Palette': 'expert',
    'Côtes de Provence': 'medio',
    'Produtores da Provença': 'expert',
    'Cozinha do Loire': 'avancado',
    'Cozinha do Rhône': 'avancado',
    'Cozinha do Sul da França': 'avancado'
  };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'FR3', version: 2, cards: cards };
})());
