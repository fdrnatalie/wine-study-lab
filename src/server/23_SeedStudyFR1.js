/**
 * CARTÕES DE ESTUDO — França: panorama e Bordeaux (aulas 14, 15 e 16; v1).
 * Tópicos curtos; o material pode ter erros: "corrigido" = conferido em fonte aberta (Wikipedia) e o slide estava errado;
 * "conferir" = não confirmado (fica fora do quiz). Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['França'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['França', region, sub] : ['França', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  // =====================  PAÍS (aula 14)  =====================
  P('A França em números (2022)', 'numeros', [
    ['812 mil ha', 'Área plantada: 2ª do mundo (Espanha 955 mil, Itália 718 mil; Portugal 193 mil e Chile 196 mil)'],
    ['4,5 bi L', 'Produção: 2ª do mundo (Itália 4,9 bi, Espanha 3,5 bi)'],
    ['2,5 bi L', 'Consumo: o maior da União Europeia; no mundo, só os EUA consomem mais'],
    ['47,4 L', 'Consumo por habitante dos franceses (Portugal lidera, com 67,5 L)']
  ]);
  P('Vinho francês no Brasil', 'fatos', [
    ['Importações 2021', 'Cerca de 158 milhões de litros, dos quais cerca de 7,9 milhões vieram da França', 'conferir'],
    ['Fornecedores', 'Chile 48%, Portugal 16%, Argentina 14%, Itália 7%, França 5%, outros 10%']
  ]);
  P('Marcos do vinho francês', 'linha', [
    ['Séc. VI a.C.', 'Gregos fundam Massalia (Marselha) e comerciam vinho; o slide atribui a videira aos romanos no séc. I a.C.', 'corrigido'],
    ['Séc. VI', 'Declínio da viticultura na Idade Média por guerras, epidemias e clima, segundo o slide', 'conferir'],
    ['Séc. XII', 'Ordem dos Templários adquire grandes propriedades vinícolas, segundo o slide', 'conferir'],
    ['Séc. XIII', 'Guerras e pestes prejudicam a viticultura'],
    ['Séc. XVI', 'Renascimento: novo interesse pelo vinho, apreciado pela nobreza e pela classe média'],
    ['Séc. XVIII', 'Revolução Francesa confisca vinhedos da nobreza e do clero, o que prejudica a viticultura'],
    ['Séc. XIX', 'Recuperação com novas técnicas de cultivo e vinificação'],
    ['1855', 'Vinhos de Bordeaux são classificados em cinco categorias (o slide diz apenas "século XIX")'],
    ['Séc. XX', 'Criado o sistema AOC (Appellation d\'Origine Contrôlée) para proteger a qualidade'],
    ['Séc. XXI', 'Vinho francês vira produto globalizado, exportado para o mundo todo']
  ]);
  P('Estilos da França', 'fatos', [
    ['Brancos', 'Borgonha e Alsácia'],
    ['Rosés', 'Tavel e Provença'],
    ['Espumantes', 'Champagne'],
    ['Tintos', 'Bordeaux e Rhône'],
    ['Panorama', 'Casa dos melhores vinhos do mundo em quase todos os estilos, segundo o slide']
  ]);
  P('Crémants da França', 'lista', [
    ['', 'Crémant d\'Alsace'], ['', 'Crémant de Bourgogne'], ['', 'Crémant du Jura'], ['', 'Crémant de Savoie'], ['', 'Crémant de Die'],
    ['', 'Crémant de Limoux'], ['', 'Crémant de Loire'], ['', 'Crémant de Bordeaux'], ['', 'Crémant de Luxembourg (fora da França, no mapa do slide)']
  ]);
  P('Sud de France (Midi): panorama', 'fatos', [
    ['Composição', 'Regiões de Provença e Languedoc-Roussillon; também chamado Midi'],
    ['Área', 'Maior área produtora do país: cerca de 360 mil ha (26 mil na Provença), segundo o slide', 'conferir'],
    ['Produção', 'Mais de 700 milhões de litros por ano, segundo o slide', 'conferir'],
    ['Participação', 'Uma em cada três garrafas da França e uma em cada dez do mundo (Robert Joseph), segundo o slide', 'conferir'],
    ['Castas', 'Influência do Rhône: Syrah, Grenache, Carignan, Viognier e Clairette'],
    ['Novidades', 'Com investidores estrangeiros (Austrália, Nova Zelândia), plantam e testam Cabernet Sauvignon, Merlot e Chardonnay']
  ]);

  // ---------- Champagne ----------
  R('Champagne', '', 'Champagne em números', 'numeros', [
    ['34 mil ha', 'Vinhedos'],
    ['380 milhões', 'Garrafas por ano, segundo o slide (as fontes abertas citam recordes de 327 a 339 milhões)', 'conferir'],
    ['7', 'Uvas permitidas'],
    ['3', 'AOCs: Champagne, Coteaux Champenois e Rosé des Riceys'],
    ['319', 'Aldeias'],
    ['17', 'Aldeias Grand Cru (100%)'],
    ['42', 'Aldeias Premier Cru (90% a 99%)']
  ]);
  R('Champagne', '', 'Castas de Champagne', 'lista', [
    ['', 'Chardonnay'], ['', 'Pinot Noir'], ['', 'Pinot Meunier'], ['', 'Pinot Blanc'], ['', 'Pinot Gris'], ['', 'Arbane'], ['', 'Petit Meslier']
  ]);
  R('Champagne', '', 'Champagne: a região e a AOC', 'fatos', [
    ['Local', 'Extremo norte do país'],
    ['Rótulo', 'Champagne é uma AOC: só os espumantes da região podem ser rotulados assim'],
    ['Símbolo', 'Espumantes que viraram símbolo de felicidade e sofisticação']
  ]);

  // ---------- Alsácia ----------
  R('Alsácia', '', 'Alsácia em números', 'numeros', [
    ['15.500 ha', 'Vinhedos'],
    ['115 milhões L', 'Produção por ano (a Wikipedia cita cerca de 111 milhões em 2006)'],
    ['13', 'Tipos de solo, segundo o slide', 'conferir'],
    ['51', 'Vinhedos Grand Cru (reconhecidos entre 1975 e 2007)'],
    ['13', 'Aldeias produtoras, segundo o slide; fontes abertas citam 119 aldeias', 'conferir']
  ]);
  R('Alsácia', '', 'Alsácia: perfil e castas', 'fatos', [
    ['Local', 'Nordeste, fronteira com a Alemanha; forte influência alemã'],
    ['Estilo', 'Brancos de mineralidade e elegância'],
    ['Uvas', 'Dez cultivadas, segundo o slide', 'conferir'],
    ['Nobres', 'Só 4 podem compor Grand Cru: Riesling, Gewurztraminer, Pinot Gris e Muscat']
  ]);

  // ---------- Borgonha ----------
  R('Borgonha', '', 'Borgonha em números', 'numeros', [
    ['50 mil ha', 'Vinhedos, segundo o slide', 'conferir'],
    ['264 milhões L', 'Produção por ano, segundo o slide', 'conferir'],
    ['60% / 35% / 5%', 'Tintos / brancos / crémants, segundo o slide', 'conferir'],
    ['100', 'AOCs na Borgonha (o slide diz 110)', 'corrigido']
  ]);
  R('Borgonha', '', 'Borgonha: classificação e castas', 'fatos', [
    ['Origem', 'Sistema histórico criado por monges cistercienses no fim da Idade Média'],
    ['Categorias', 'Grand Cru e Premier Cru (o slide simplifica: há também village e regional, 4 níveis)', 'corrigido'],
    ['Complicação', 'Pelo sistema napoleônico de herança, um vinhedo tem dezenas de donos: grande variação de qualidade num mesmo cru'],
    ['Castas', 'Chardonnay e Pinot Noir'],
    ['Sub-regiões (slide)', 'Chablis, Côte d\'Or, Côte Chalonnaise, Mâconnais e Beaujolais']
  ]);

  // ---------- Provença e Languedoc-Roussillon ----------
  R('Provença', '', 'Provença em resumo', 'fatos', [
    ['Estilo', 'Grande produtora de rosés (80% da produção, segundo o slide): leves, frescos, imagem jovem e de verão', 'conferir'],
    ['AOCs', 'Seis espalhadas pelo território, segundo o slide; as mais importantes: Côtes de Provence, Bandol e Cassis', 'conferir']
  ]);
  R('Languedoc-Roussillon', '', 'Languedoc-Roussillon em resumo', 'fatos', [
    ['Estilo', 'Grandes tintos e brancos, como os do "Grand Cru informal" Mas de Daumas Gassac'],
    ['Doces', 'Muscat de Rivesaltes, Banyuls e Maury: fortificados com aguardente vínica que interrompe a fermentação'],
    ['Vin Doux Naturel', 'Nome desses doces, que mantêm o açúcar natural do mosto']
  ]);
  R('Languedoc-Roussillon', '', 'Denominações do Languedoc-Roussillon', 'denominacoes', [
    ['Corbières', 'Principal denominação da região', 'AOC'],
    ['Fitou', 'Principal denominação da região', 'AOC'],
    ['Minervois', 'Principal denominação da região', 'AOC'],
    ['Saint-Chinian', 'Principal denominação da região', 'AOC'],
    ['Coteaux du Languedoc', 'Principal denominação da região', 'AOC'],
    ['Banyuls', 'Doce fortificado (Vin Doux Naturel)', 'AOC'],
    ['Coteaux du Roussillon', 'Principal denominação da região', 'AOC']
  ]);

  // =====================  BORDEAUX (aulas 15 e 16)  =====================
  R('Bordeaux', '', 'Bordeaux em números', 'numeros', [
    ['120 mil ha', 'Vinhedos ("quase 120 mil", segundo o slide; fontes abertas citam cerca de 110 mil)', 'conferir'],
    ['650 milhões L', 'Produção por ano; 85% tintos'],
    ['57', 'AOCs, segundo o slide; a Wikipedia cita 65', 'conferir'],
    ['7.000', 'Châteaux, segundo o slide; a Wikipedia cita cerca de 5.660 produtores', 'conferir'],
    ['12.000', 'Viticultores (produtores de uvas), segundo o slide', 'conferir'],
    ['57', 'Cooperativas, segundo o slide', 'conferir'],
    ['400 e 130', 'Negociantes e corretores que comercializam o vinho, segundo o slide', 'conferir']
  ]);
  R('Bordeaux', '', 'O nome Bordeaux', 'fatos', [
    ['Etimologia', 'Segundo o slide, de "au bord de l\'eau" (à beira d\'água); é etimologia popular', 'conferir'],
    ['Água', 'Rios e afluentes serviram de rota de escoamento do vinho; região no Atlântico, com um dos portos mais movimentados da França'],
    ['Escala', 'Descrita como um "império": impressiona pela quantidade e pela qualidade']
  ]);
  R('Bordeaux', '', 'Castas de Bordeaux', 'lista', [
    ['', 'Tintas: Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot'],
    ['', 'Brancas: Sauvignon Blanc, Sémillon, Muscadelle (esta última citada nas aulas 15 e 16)']
  ]);
  R('Bordeaux', '', 'Breve história de Bordeaux', 'linha', [
    ['Séc. I', 'Produção de vinho começa sob domínio romano; primeiras vinhas às margens do Garonne'],
    ['Séc. XVI-XVII', 'Surgem os châteaux (castelos), símbolos de qualidade'],
    ['1855', 'A pedido de Napoleão III, classificação do Médoc para a Exposição Universal de Paris'],
    ['1932', 'Criada a categoria Cru Bourgeois para vinhos de alta qualidade fora da classificação de 1855'],
    ['2012', 'Classificação de Saint-Émilion é atualizada (a primeira é de 1955)']
  ]);
  R('Bordeaux', '', 'Margem direita e margem esquerda', 'fatos', [
    ['Margem direita', 'Rios Dordogne e Gironde (o slide diz Garonne); Merlot predomina; vinhos suaves, frutados e de estrutura equilibrada', 'corrigido'],
    ['Margem direita: nomes', 'Saint-Émilion e Pomerol, além de Fronsac, Lalande-de-Pomerol, Côtes de Castillon e Côtes de Francs'],
    ['Margem esquerda', 'Médoc e Graves; Cabernet Sauvignon predomina; vinhos encorpados e de longa guarda'],
    ['Margem esquerda: nomes', 'Graves, Haut-Médoc e as comunas Pauillac, Margaux, Saint-Julien e Saint-Estèphe']
  ]);
  R('Bordeaux', '', 'Merlot', 'fatos', [
    ['Origem', 'Bordeaux; cultivada no mundo todo'],
    ['Cacho', 'Médio a grande, bagos de casca fina: vinhos de cor vermelha profunda'],
    ['Aromas', 'Cereja, ameixa, chocolate, tabaco e especiarias'],
    ['Papel', 'Rainha da margem direita; no Médoc entra nos cortes para dar suavidade'],
    ['Perfil', 'Taninos suaves, adaptável a vários terroirs']
  ]);
  R('Bordeaux', '', 'Cabernet Sauvignon', 'fatos', [
    ['Origem', 'Cruzamento de Cabernet Franc com Sauvignon Blanc, entre o fim do séc. XVII e o início do XVIII, em Bordeaux'],
    ['Cacho', 'Casca espessa: vinhos encorpados, taninos robustos e grande longevidade'],
    ['Aromas', 'Cassis, amora e especiarias'],
    ['Papel', 'Predomina na margem esquerda; base dos Grands Crus do Médoc']
  ]);
  R('Bordeaux', '', 'Outras tintas de Bordeaux', 'fatos', [
    ['Cabernet Franc', 'Complexidade, aromas herbáceos e de especiarias (o slide troca as descrições de Franc e Sauvignon)', 'corrigido'],
    ['Petit Verdot', 'Em pequena quantidade: cor profunda e notas de especiarias']
  ]);
  R('Bordeaux', '', 'Brancas de Bordeaux', 'fatos', [
    ['Sauvignon Blanc', 'Acidez vibrante e aromas cítricos, que dão frescor (o slide troca com a Sémillon)', 'corrigido'],
    ['Sémillon', 'Corpo e textura aveludada; muito afetada por podridão nobre: complexidade e mel (o slide troca com a Sauvignon)', 'corrigido'],
    ['Muscadelle', 'Pouca quantidade: aromas florais e frutados; equilibra Sauvignon Blanc e Sémillon']
  ]);

  // ---------- Classificação de 1855 ----------
  R('Bordeaux', '', 'Classificação de 1855', 'fatos', [
    ['Contexto', 'Feita para a Exposição Universal de Paris; ainda em vigor'],
    ['Propriedades', '61 châteaux, quase todos da margem esquerda (Médoc, mais Haut-Brion de Graves)'],
    ['Categorias', 'Cinco, de Premiers Crus a Cinquièmes Crus'],
    ['Base', 'Reputação dos vinhos na época; muito estável desde então'],
    ['Mudança única', 'Mouton-Rothschild promovido a Premier Cru em 1973'],
    ['Contagem', '5 Premiers, 14 Deuxièmes, 14 Troisièmes, 10 Quatrièmes e 18 Cinquièmes']
  ]);
  R('Bordeaux', '', '1855: Premiers Crus', 'fatos', [
    ['Château Lafite Rothschild', 'Pauillac'],
    ['Château Latour', 'Pauillac'],
    ['Château Margaux', 'Margaux'],
    ['Château Haut-Brion', 'Pessac-Léognan'],
    ['Château Mouton-Rothschild', 'Pauillac (promovido em 1973)']
  ]);
  R('Bordeaux', '', '1855: Deuxièmes Crus', 'fatos', [
    ['Rauzan-Ségla', 'Margaux'], ['Rauzan-Gassies', 'Margaux'], ['Léoville Las Cases', 'Saint-Julien'], ['Léoville Poyferré', 'Saint-Julien'],
    ['Léoville Barton', 'Saint-Julien'], ['Durfort-Vivens', 'Margaux'], ['Gruaud-Larose', 'Saint-Julien'], ['Lascombes', 'Margaux'],
    ['Brane-Cantenac', 'Margaux'], ['Pichon-Longueville Baron', 'Pauillac'], ['Pichon Longueville Comtesse de Lalande', 'Pauillac'],
    ['Ducru-Beaucaillou', 'Saint-Julien'], ['Cos d\'Estournel', 'Saint-Estèphe'], ['Montrose', 'Saint-Estèphe']
  ]);
  R('Bordeaux', '', '1855: Troisièmes Crus', 'fatos', [
    ['Kirwan', 'Margaux'], ['d\'Issan', 'Margaux'], ['Lagrange', 'Saint-Julien'], ['Langoa Barton', 'Saint-Julien'], ['Giscours', 'Margaux'],
    ['Malescot-St-Exupéry', 'Margaux'], ['Cantenac-Brown', 'Margaux'], ['Boyd-Cantenac', 'Margaux'], ['Palmer', 'Margaux'],
    ['La Lagune', 'Haut-Médoc (Ludon)'], ['Desmirail', 'Margaux'], ['Calon-Ségur', 'Saint-Estèphe'], ['Ferrière', 'Margaux'],
    ['Marquis-d\'Alesme-Becker', 'Margaux']
  ]);
  R('Bordeaux', '', '1855: Quatrièmes Crus', 'fatos', [
    ['Saint-Pierre', 'Saint-Julien'], ['Talbot', 'Saint-Julien'], ['Branaire-Ducru', 'Saint-Julien'], ['Duhart-Milon', 'Pauillac'],
    ['Pouget', 'Margaux'], ['La Tour Carnet', 'Haut-Médoc (Saint-Laurent)'], ['Lafon-Rochet', 'Saint-Estèphe'], ['Beychevelle', 'Saint-Julien'],
    ['Prieuré-Lichine', 'Margaux'], ['Marquis de Terme', 'Margaux']
  ]);
  R('Bordeaux', '', '1855: Cinquièmes Crus', 'fatos', [
    ['Pontet-Canet', 'Pauillac'], ['Batailley', 'Pauillac'], ['Haut-Batailley', 'Pauillac'], ['Grand-Puy-Lacoste', 'Pauillac'],
    ['Grand-Puy-Ducasse', 'Pauillac'], ['Lynch-Bages', 'Pauillac'], ['Lynch-Moussas', 'Pauillac'], ['Dauzac', 'Margaux'],
    ['d\'Armailhac (ex-Mouton-Baronne-Philippe)', 'Pauillac'], ['du Tertre', 'Margaux (Arsac)'], ['Haut-Bages Libéral', 'Pauillac'],
    ['Pédesclaux', 'Pauillac'], ['Belgrave', 'Haut-Médoc (Saint-Laurent)'], ['Camensac', 'Haut-Médoc (Saint-Laurent)'],
    ['Cos Labory', 'Saint-Estèphe'], ['Clerc Milon', 'Pauillac'], ['Croizet-Bages', 'Pauillac'], ['Cantemerle', 'Haut-Médoc (Macau)']
  ]);
  R('Bordeaux', '', 'Grandes produtores da margem esquerda', 'produtores', [
    ['Château Margaux', ''], ['Château Latour', ''], ['Château Haut-Brion', ''], ['Château Lafite Rothschild', ''],
    ['Château Palmer', ''], ['Château Talbot', ''], ['Château Beychevelle', ''], ['Château Lynch-Bages', '']
  ]);
  R('Bordeaux', '', 'Médoc e Haut-Médoc', 'fatos', [
    ['Nome', 'Do latim "medio aquae": entre as águas'],
    ['Solo', 'Predominantemente cascalho: drenagem excelente e estresse hídrico para as vinhas'],
    ['Clima', 'Moderado pela proximidade dos rios: safras equilibradas e amadurecimento gradual'],
    ['Divisão', 'Alto Médoc (Haut-Médoc), ao sul, e Baixo Médoc (Bas-Médoc), ao norte'],
    ['Haut-Médoc', 'Várias comunas renomadas, muitas com Grands Crus Classés']
  ]);
  R('Bordeaux', '', 'Moulis e Listrac', 'fatos', [
    ['Moulis', 'Solos de cascalho e argila; Cabernet Sauvignon com Merlot e Cabernet Franc; elegantes e acessíveis'],
    ['Listrac', 'Solos argilosos; tintos equilibrados, de composição parecida; típicos e acessíveis'],
    ['Posição', 'Comunas menos renomadas do Médoc, que somam diversidade de estilos']
  ]);

  R('Bordeaux', 'Médoc (Bas-Médoc)', 'Baixo Médoc', 'fatos', [
    ['Posição', 'Ao norte do Médoc'],
    ['Fama', 'Menos celebrado que o Alto Médoc, mas com vinhos de qualidade e estilos variados']
  ]);
  R('Bordeaux', 'Saint-Estèphe', 'Saint-Estèphe', 'fatos', [
    ['Estilo', 'Tintos robustos e encorpados, taninos poderosos; domina a Cabernet Sauvignon'],
    ['Terroir', 'Influência do Atlântico: aromas terrosos, frutas escuras e especiarias'],
    ['Cos d\'Estournel', 'Segundo cru de 1855; arquitetura oriental e vinhos potentes e elegantes'],
    ['Montrose', 'Segundo cru de 1855; vinhos densos, estruturados, de grande envelhecimento'],
    ['Posição', 'Menos proeminente que algumas vizinhas, mas referência no Médoc']
  ]);
  R('Bordeaux', 'Pauillac', 'Pauillac', 'fatos', [
    ['Estilo', 'Alguns dos tintos mais prestigiosos do mundo; domina a Cabernet Sauvignon'],
    ['Solo', 'Cascalho, com drenagem excepcional'],
    ['Aromas', 'Cassis, grafite e tabaco; taninos firmes e longevidade'],
    ['Ícones', 'Château Lafite Rothschild e Château Latour']
  ]);
  R('Bordeaux', 'Saint-Julien', 'Saint-Julien', 'fatos', [
    ['Uvas', 'Cabernet Sauvignon, Merlot e Cabernet Franc'],
    ['Solo', 'Cascalho e argila'],
    ['Estilo', 'Elegantes e equilibrados, taninos suaves; frutas vermelhas e negras, especiarias e cedro'],
    ['Produtores', 'Château Léoville-Las Cases e Château Ducru-Beaucaillou'],
    ['Tamanho', 'Uma das menores comunas do Médoc; qualidade constante']
  ]);
  R('Bordeaux', 'Margaux', 'Margaux', 'fatos', [
    ['Uvas', 'Cabernet Sauvignon, Merlot, Cabernet Franc e Petit Verdot'],
    ['Solo', 'Cascalho, argila e areia'],
    ['Estilo', 'Refinados, os "femininos": elegância, complexidade e taninos sedosos'],
    ['Aromas', 'Florais, frutas vermelhas e negras, especiarias e tabaco'],
    ['Produtor', 'Château Margaux']
  ]);
  R('Bordeaux', 'Graves', 'Graves', 'fatos', [
    ['Nome', 'Do solo de cascalho, pedras e seixos, bem drenado'],
    ['Clima', 'Temperado, influenciado pelo rio Garonne'],
    ['Tintos', 'Liderados pela Cabernet Sauvignon: taninos estruturados e frutas escuras'],
    ['Brancos', 'Sauvignon Blanc e Sémillon: frescor, acidez vibrante e aromas cítricos']
  ]);
  R('Bordeaux', 'Pessac-Léognan', 'Pessac-Léognan', 'fatos', [
    ['Posição', 'Comuna dentro de Graves'],
    ['Destaque', 'Château Haut-Brion, Premier Cru Classé de 1855']
  ]);
  R('Bordeaux', 'Sauternes e Barsac', 'Sauternes', 'fatos', [
    ['Uvas', 'Sémillon, Sauvignon Blanc e Muscadelle'],
    ['Podridão nobre', 'Botrytis cinerea: aromas de mel, damasco, pêssego e flores; acidez equilibrada'],
    ['Château d\'Yquem', 'Premier Cru Supérieur; referência máxima e de grande longevidade'],
    ['Outros', 'Château Suduiraut, Château Rieussec e Château Climens'],
    ['Estilo', 'Um dos vinhos de sobremesa mais celebrados do mundo']
  ]);

  // ---------- Margem direita ----------
  R('Bordeaux', 'Saint-Émilion', 'Saint-Émilion', 'fatos', [
    ['Estilo', 'Só tinto, com predomínio de Merlot; suave em taninos e acidez, rico em frutas e de álcool relativamente alto'],
    ['Frutas', 'Ameixa e cereja preta'],
    ['Área', 'Cerca de 5 mil ha'],
    ['Classificação das AOCs', 'Contestada, segundo o slide', 'conferir']
  ]);
  R('Bordeaux', 'Saint-Émilion', 'Três zonas de Saint-Émilion', 'fatos', [
    ['Planalto calcário', 'Planalto e encostas ao redor da aldeia: os melhores vinhos'],
    ['Cascalho e areia', 'Pequena área de cascalho e encostas arenosas a oeste: segundos melhores'],
    ['Planície arenosa', 'Sujeita a inundações do rio Dordogne: vinho base']
  ]);
  R('Bordeaux', 'Saint-Émilion', 'Classificação de Saint-Émilion', 'fatos', [
    ['Criação', '1955; revista periodicamente (uma das revisões, em 2012)'],
    ['Níveis', 'Premier Grand Cru Classé A, Premier Grand Cru Classé B e Grand Cru Classé; o slide põe o Grand Cru Classé no topo', 'corrigido'],
    ['Grand Cru', 'É uma AOC (Saint-Émilion Grand Cru), não um nível da classificação, ao contrário do que diz o slide', 'corrigido'],
    ['Premier A hoje', 'Em 2022 só Château Figeac e Château Pavie ocupam o topo']
  ]);
  R('Bordeaux', 'Saint-Émilion', 'Grandes produtores de Saint-Émilion', 'produtores', [
    ['Cheval Blanc', ''], ['Ausone', ''], ['Pavie', ''], ['Figeac', '']
  ]);
  R('Bordeaux', 'Pomerol', 'Pomerol', 'fatos', [
    ['Local', 'Pequena sub-região na margem direita do Dordogne, a nordeste de Libourne (o slide diz Garonne e a oeste)', 'corrigido'],
    ['Clima', 'Moderado, influenciado pelo Atlântico: invernos suaves e verões quentes'],
    ['Solo', 'Argila e sedimentos, ideais para a Merlot'],
    ['Uvas', 'Merlot predomina; também Cabernet Franc e um pouco de Cabernet Sauvignon']
  ]);
  R('Bordeaux', 'Pomerol', 'Vinhos de Pomerol', 'fatos', [
    ['Perfil', 'Elegantes e complexos; corpo médio a encorpado, taninos macios'],
    ['Aromas', 'Frutas vermelhas, ameixa, alcaçuz, tabaco e toques de terra'],
    ['Guarda', 'Envelhecem bem e ganham profundidade'],
    ['Vinificação', 'Fermentação em aço inox e envelhecimento em carvalho francês'],
    ['Classificação', 'Pomerol não tem classificação oficial (nenhuma das de Bordeaux inclui a região)']
  ]);
  R('Bordeaux', 'Pomerol', 'Grandes produtores de Pomerol', 'produtores', [
    ['Château Pétrus', ''], ['Château Le Pin', ''], ['Château Lafleur', ''], ['Château Trotanoy', ''], ['Château La Fleur-Pétrus', '']
  ]);
  R('Bordeaux', '', 'Fronsac e Canon-Fronsac', 'fatos', [
    ['Uvas', 'Merlot (suavidade e elegância) e Cabernet Franc (estrutura e complexidade)'],
    ['Solo', 'Muitos solos ricos em argila e calcário'],
    ['Estilo', 'Encorpados e equilibrados; frutados, com especiarias, taninos macios e acidez refrescante'],
    ['Guarda', 'Bom potencial de envelhecimento: apreciados após vários anos'],
    ['Preço', 'Excelente relação qualidade-preço: tintos de Bordeaux sem os preços das sub-regiões famosas']
  ]);
  R('Bordeaux', '', 'Outras sub-regiões da margem direita', 'lista', [
    ['', 'Lalande-de-Pomerol'], ['', 'Côtes de Castillon'], ['', 'Côtes de Francs'], ['', 'Fronsac e Canon-Fronsac']
  ]);

  // =====================  HARMONIZAÇÕES  =====================
  H('Bordeaux', 'Cozinha de Bordeaux: margem direita', [
    ['Ingredientes locais', 'Carnes, peixes, cogumelos, alcachofras, echalota e hortaliças (Pomerol e Saint-Émilion)'],
    ['Entrecôte bordelaise', 'Entrecôte grelhada com molho bordelaise (vinho tinto da região, gordura, caldo de carne e echalotas); vem com batatas'],
    ['Lamproie à la bordelaise', 'Lampreia em molho de vinho tinto de Bordeaux, alho, cebola e especiarias; só na temporada de lampreias', 'conferir']
  ]);
  H('Bordeaux', 'Cozinha de Bordeaux: margem esquerda', [
    ['Ingredientes locais', 'Carnes, peixes, cogumelos, alcachofras, ostras, nozes e castanhas'],
    ['Canard aux pruneaux', 'Pato dourado e cozido lentamente com ameixas, cebola, alho e ervas; rico e doce, com tinto da região'],
    ['Huîtres d\'Arcachon', 'Ostras da Baía de Arcachon, cruas com limão; vinho branco seco'],
    ['Canelé de Bordeaux', 'Sobremesa de casca caramelizada e crocante e miolo macio: farinha, leite, ovos, açúcar, baunilha e às vezes rum']
  ]);

  // Nível no quiz, por notoriedade (avaliação editorial; ajustável): medio = conhecido no mundo todo.
  var LEVELS = {
    'A França em números (2022)': 'medio',
    'Vinho francês no Brasil': 'expert',
    'Marcos do vinho francês': 'avancado',
    'Estilos da França': 'medio',
    'Crémants da França': 'avancado',
    'Sud de France (Midi): panorama': 'avancado',
    'Champagne em números': 'medio',
    'Castas de Champagne': 'medio',
    'Champagne: a região e a AOC': 'medio',
    'Alsácia em números': 'avancado',
    'Alsácia: perfil e castas': 'medio',
    'Borgonha em números': 'avancado',
    'Borgonha: classificação e castas': 'medio',
    'Provença em resumo': 'avancado',
    'Languedoc-Roussillon em resumo': 'avancado',
    'Denominações do Languedoc-Roussillon': 'expert',
    'Bordeaux em números': 'avancado',
    'O nome Bordeaux': 'expert',
    'Castas de Bordeaux': 'medio',
    'Breve história de Bordeaux': 'avancado',
    'Margem direita e margem esquerda': 'medio',
    'Merlot': 'medio',
    'Cabernet Sauvignon': 'medio',
    'Outras tintas de Bordeaux': 'avancado',
    'Brancas de Bordeaux': 'avancado',
    'Classificação de 1855': 'medio',
    '1855: Premiers Crus': 'medio',
    '1855: Deuxièmes Crus': 'avancado',
    '1855: Troisièmes Crus': 'expert',
    '1855: Quatrièmes Crus': 'expert',
    '1855: Cinquièmes Crus': 'expert',
    'Grandes produtores da margem esquerda': 'avancado',
    'Médoc e Haut-Médoc': 'avancado',
    'Moulis e Listrac': 'expert',
    'Baixo Médoc': 'expert',
    'Saint-Estèphe': 'avancado',
    'Pauillac': 'medio',
    'Saint-Julien': 'avancado',
    'Margaux': 'medio',
    'Graves': 'avancado',
    'Pessac-Léognan': 'avancado',
    'Sauternes': 'medio',
    'Saint-Émilion': 'medio',
    'Três zonas de Saint-Émilion': 'expert',
    'Classificação de Saint-Émilion': 'avancado',
    'Grandes produtores de Saint-Émilion': 'avancado',
    'Pomerol': 'medio',
    'Vinhos de Pomerol': 'avancado',
    'Grandes produtores de Pomerol': 'avancado',
    'Fronsac e Canon-Fronsac': 'expert',
    'Outras sub-regiões da margem direita': 'expert',
    'Cozinha de Bordeaux: margem direita': 'avancado',
    'Cozinha de Bordeaux: margem esquerda': 'avancado'
  };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'FR1', version: 1, cards: cards };
})());
