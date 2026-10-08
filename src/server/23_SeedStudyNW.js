/**
 * CARTÕES DE ESTUDO — Novo Mundo (aulas 39 a 42): Estados Unidos, Austrália, Nova Zelândia, África do Sul.
 * Tópicos curtos; o material pode ter erros: "corrigido" = conferido em fonte aberta; "conferir" = não confirmado (fica fora do quiz).
 * Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

// =====================  ESTADOS UNIDOS (aula 39)  =====================
STUDY_PACKS.push((function () {
  var cards = [];
  var PAIS = 'Estados Unidos';
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: [PAIS], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? [PAIS, region, sub] : [PAIS, region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  P('Estados Unidos em números', 'numeros', [
    ['4º', 'Maior produtor de vinho do mundo'],
    ['2,8 bi L', 'Vinho engarrafado por ano'],
    ['400 mil ha', 'Vinhedos, segundo o slide', 'conferir'],
    ['81%', 'Parte da Califórnia na produção (o slide diz 90%)', 'corrigido'],
    ['49%', 'Vinhos tintos no volume total; brancos 45% e rosés 6%'],
    ['12 L', 'Consumo por habitante por ano, pouco mais'],
    ['786 mil', 'Empregos da indústria, segundo o slide', 'conferir']
  ]);
  P('Maiores vinícolas dos EUA', 'lista', [
    ['', 'As cinco maiores: E & J Gallo, Bronco Wine Company, Constellation Brands, The Wine Group e Trinchero Family'],
    ['', 'E & J Gallo é a maior vinícola dos Estados Unidos'],
    ['', '3 das 5 maiores do mundo seriam americanas, segundo o slide']
  ]);
  cards[cards.length - 1].items[2].tag = 'conferir';
  P('Marcos do vinho americano', 'linha', [
    ['1530 / 1590', 'Colonos europeus introduzem as primeiras videiras viníferas, segundo o slide', 'conferir'],
    ['1769', 'Frei Junípero Serra funda a primeira grande vinícola, perto de San Diego (o slide cita 1770 e San Juan Capistrano)', 'corrigido'],
    ['1848', 'Corrida do ouro atrai imigrantes à Califórnia e impulsiona o vinho (o slide diz 1800; não confirmado em fonte aberta)', 'conferir'],
    ['1905', 'Universidade da Califórnia começa programas de viticultura e enologia, segundo o slide', 'conferir'],
    ['1920', 'Lei Seca proíbe produção, venda e transporte de álcool e trava o vinho no país'],
    ['1933', 'Fim da Lei Seca: a indústria volta a crescer em produção e qualidade'],
    ['1976', 'Julgamento de Paris (24 de maio): degustação às cegas de vinhos franceses e americanos'],
    ['1980', 'Vinhos da Califórnia ganham reconhecimento internacional', 'conferir'],
    ['1990', 'Filoxera atinge a Califórnia e exige replantio com porta-enxertos resistentes']
  ]);
  P('Zinfandel', 'fatos', [
    ['Origem', 'Dalmácia, Croácia, onde se chama Crljenak Kaštelanski; na Itália é o Primitivo'],
    ['Perfil', 'Tinto encorpado e frutado: frutas vermelhas maduras, especiarias, pimenta-preta e tabaco'],
    ['Estilo', 'De mais leve a mais encorpado, conforme terroir e vinificação'],
    ['Terroirs', 'Lodi, Sierra Foothills e Paso Robles']
  ]);
  P('Castas brancas dos EUA', 'fatos', [
    ['Sauvignon Blanc', 'Califórnia, Washington e Oregon: brancos frescos e aromáticos, com cítricos e ervas'],
    ['Chardonnay', 'Em todo o país, sobretudo na Califórnia: encorpado, aromas tropicais e textura cremosa'],
    ['Viognier', 'Califórnia e Virgínia: perfumado, com flores brancas e frutas de caroço']
  ]);
  P('Castas tintas dos EUA', 'fatos', [
    ['Cabernet Sauvignon', 'Das mais cultivadas, sobretudo na Califórnia: encorpado, frutas escuras e carvalho'],
    ['Merlot', 'Em todo o país: suave, frutas vermelhas maduras e taninos macios'],
    ['Pinot Noir', 'Costa oeste, sobretudo Oregon e Califórnia: elegante, frutas vermelhas e notas terrosas']
  ]);
  P('Outras castas dos EUA', 'fatos', [
    ['Chenin Blanc', 'Principalmente na Califórnia: fresco e versátil, cítricos e mel'],
    ['Riesling', 'Regiões mais frias, como Washington e Nova York: vibrante e aromático'],
    ['Pinot Gris', 'Oregon e Califórnia: leve e refrescante, frutas de caroço e toque mineral'],
    ['Malbec', 'Califórnia e Washington: tinto encorpado, frutas escuras e taninos firmes'],
    ['Syrah', 'Em várias regiões: tinto rico, frutas escuras, especiarias e toques defumados'],
    ['Petite Sirah', 'Comum na Califórnia: tinto potente e robusto, notas picantes']
  ]);
  P('Sistema americano: AVA', 'fatos', [
    ['O que é', 'Área de Viticultura Americana: região geográfica delimitada com solo, clima e topografia próprios'],
    ['Origem', 'Regulamento do ATF de 1978 (o slide cita uma lei de 1980)', 'corrigido'],
    ['Primeira', 'Augusta AVA, no Missouri, reconhecida em 1980'],
    ['Pedido de AVA', 'Provar características geográficas distintas, com evidências científicas e apoio da maioria dos produtores'],
    ['Regras extras', 'A AVA pode fixar práticas, limites de rendimento, castas permitidas e rotulagem']
  ]);

  R('Califórnia', '', 'Califórnia: clima e solo', 'fatos', [
    ['Clima', 'Mediterrâneo: verões quentes e secos, invernos amenos e úmidos'],
    ['Influência marítima', 'Corrente da Califórnia e brisas do Pacífico moderam a temperatura (o slide diz Humboldt; não confirmado em fonte aberta)', 'conferir'],
    ['Maturação', 'Temporada longa, com amadurecimento lento e completo'],
    ['Solos', 'De argilosos a arenosos e calcários, com excelente drenagem e boa retenção de água']
  ]);
  R('Califórnia', '', 'Áreas vinícolas da Califórnia', 'lista', [
    ['', 'North Coast AVA'], ['', 'Central Coast AVA'], ['', 'Central Valley AVA'], ['', 'South Coast AVA']
  ]);
  R('Califórnia', '', 'North Coast AVA', 'fatos', [
    ['Onde', 'Extremo norte da Califórnia: Napa Valley, Sonoma, Mendocino e Lake County'],
    ['Clima', 'Mediterrâneo; de fresco e nebuloso perto do oceano a quente e ensolarado no interior'],
    ['Solos', 'Argilosos, calcários e vulcânicos'],
    ['Importância', 'Segundo o slide, a melhor e mais importante AVA dos EUA'],
    ['Castas', 'Cabernet Sauvignon, Zinfandel, Merlot e Chardonnay']
  ]);
  R('Califórnia', '', 'Central Coast AVA', 'fatos', [
    ['Onde', 'Costa central: Paso Robles, Santa Barbara County e Monterey County'],
    ['Clima', 'Muitos microclimas; fresco e nebuloso perto do oceano, quente e ensolarado no interior'],
    ['Solos', 'Argilosos, calcários e arenosos'],
    ['Castas', 'Cabernet Sauvignon, Merlot, Zinfandel, Syrah e Chardonnay']
  ]);
  R('Califórnia', '', 'Central Valley AVA', 'fatos', [
    ['Onde', 'Interior da Califórnia, numa vasta extensão'],
    ['Clima', 'Quente e ensolarado, ideal para uvas em larga escala'],
    ['Solos', 'De argilosos a arenosos'],
    ['Fama', 'Produção em massa, mas capaz de vinhos de qualidade'],
    ['Castas', 'Cabernet Sauvignon, Merlot, Zinfandel, Syrah e Chardonnay']
  ]);
  R('Califórnia', '', 'South Coast AVA', 'fatos', [
    ['Onde', 'Sul da Califórnia: de Los Angeles até a fronteira com o México'],
    ['Clima', 'Mediterrâneo mais quente e seco no litoral; fresco, com ventos do oceano, no interior'],
    ['Solos', 'Argilosos, calcários e arenosos'],
    ['Castas', 'Cabernet Sauvignon, Merlot, Zinfandel, Viognier e Chardonnay']
  ]);
  R('Califórnia', 'Napa Valley', 'Napa Valley', 'fatos', [
    ['Fama', 'Uma das regiões mais famosas e prestigiadas do mundo, no norte da Califórnia'],
    ['Clima', 'Mediterrâneo; as cadeias de montanhas protegem e criam microclima ideal'],
    ['Solos', 'Argilosos, calcários e vulcânicos'],
    ['Castas', 'Cabernet Sauvignon, Merlot, Chardonnay e Sauvignon Blanc'],
    ['Sub-regiões', 'Stags Leap District, Rutherford, Oakville e Howell Mountain']
  ]);

  R('Oregon', '', 'Oregon em resumo', 'fatos', [
    ['Onde', 'Noroeste dos EUA'],
    ['Contraste', 'Do fresco e temperado Willamette Valley ao ensolarado Rogue Valley, no sul'],
    ['AVAs', 'Willamette Valley, Rogue Valley e Columbia Gorge']
  ]);
  R('Oregon', 'Willamette Valley', 'Willamette Valley', 'fatos', [
    ['Onde', 'Noroeste do Oregon, de Portland para o sul'],
    ['Estrelas', 'Pinot Noir e Pinot Gris'],
    ['Clima', 'De temperado a fresco; a brisa do Pacífico entra pela foz do rio Willamette'],
    ['Solos', 'Argilosos, siltosos e loess'],
    ['Castas', 'Pinot Noir, Merlot, Zinfandel, Viognier, Chardonnay e Pinot Gris']
  ]);
  R('Washington', '', 'Washington em resumo', 'fatos', [
    ['Nome', 'Washington State (o slide diz "Washington Estate")'],
    ['Contraste', 'Das encostas ensolaradas do Columbia Valley às colinas frescas do Yakima Valley'],
    ['Estilos', 'De Cabernet Sauvignon e Merlot vibrantes a Riesling e Chardonnay elegantes']
  ]);
  R('Washington', 'Columbia Valley', 'Columbia Valley', 'fatos', [
    ['Onde', 'Leste de Washington'],
    ['Estrelas', 'Cabernet Sauvignon, Merlot e Riesling'],
    ['Clima', 'De continental a semiárido, sob a sombra de chuva das montanhas Cascade; brisa do rio Columbia'],
    ['Solos', 'Basalto, loess e argila']
  ]);
  R('Nova York', 'Finger Lakes', 'Finger Lakes', 'fatos', [
    ['Onde', 'Centro do estado de Nova York, ao longo dos lagos Finger Lakes'],
    ['Estrelas', 'Riesling, Chardonnay e Cabernet Franc'],
    ['Clima', 'De temperado a fresco; os lagos moderam a temperatura e prolongam a maturação'],
    ['Solos', 'Xisto, argila e calcário'],
    ['Perfil', 'Frescor e acidez vibrante']
  ]);

  P('Grandes produtores dos EUA', 'produtores', [
    ['Opus One Winery', ''], ['Robert Mondavi Winery', ''], ['Harlan Estate', ''], ['Ridge Vineyards', ''],
    ['Chateau Ste. Michelle', ''], ['E&J Gallo', ''], ['Domaine Serene', ''], ['Dr. Konstantin Frank Winery', '']
  ]);

  H('Estados Unidos', 'Cozinha dos Estados Unidos', [
    ['Panorama', 'Fusão de influências do mundo todo (nativos americanos, Europa, Ásia, África, América Latina)'],
    ['Clássicos', 'Hambúrgueres, hot dogs, costelas de porco, frango frito, batatas fritas e torta de maçã'],
    ['Truta defumada', 'Truta defumada lentamente em madeira de frutas: sabor delicado e textura tenra; aperitivo, salada ou prato principal'],
    ['Pato com molho de cereja', 'Peito de pato grelhado ou assado com molho agridoce de cerejas, vinho tinto, açúcar mascavo e especiarias'],
    ['Prime rib', 'Costela bovina assada, macia e suculenta, temperada com ervas; vai com au jus e raiz-forte']
  ]);

  var LEVELS = { 'Estados Unidos em números': 'avancado',
    'Maiores vinícolas dos EUA': 'avancado',
    'Marcos do vinho americano': 'avancado',
    'Zinfandel': 'medio',
    'Castas brancas dos EUA': 'medio',
    'Castas tintas dos EUA': 'medio',
    'Outras castas dos EUA': 'avancado',
    'Sistema americano: AVA': 'avancado',
    'Califórnia: clima e solo': 'avancado',
    'Áreas vinícolas da Califórnia': 'avancado',
    'North Coast AVA': 'avancado',
    'Central Coast AVA': 'avancado',
    'Central Valley AVA': 'expert',
    'South Coast AVA': 'expert',
    'Napa Valley': 'medio',
    'Oregon em resumo': 'avancado',
    'Willamette Valley': 'avancado',
    'Washington em resumo': 'avancado',
    'Columbia Valley': 'avancado',
    'Finger Lakes': 'avancado',
    'Grandes produtores dos EUA': 'avancado',
    'Cozinha dos Estados Unidos': 'avancado' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'US', version: 1, cards: cards };
})());

// =====================  AUSTRÁLIA (aula 40)  =====================
STUDY_PACKS.push((function () {
  var cards = [];
  var PAIS = 'Austrália';
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: [PAIS], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? [PAIS, region, sub] : [PAIS, region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  P('Austrália em números', 'numeros', [
    ['145 mil ha', 'Vinhedos, segundo o slide (outra fonte traz cerca de 160 mil)', 'conferir'],
    ['2.300', 'Vinícolas, pouco mais, segundo o slide', 'conferir'],
    ['4º', 'Maior exportador de vinho do mundo, segundo o slide', 'conferir'],
    ['50%', 'Mais da metade do vinho é exportada, para mais de 120 países'],
    ['90', 'Castas cultivadas; Shiraz, Chardonnay e Cabernet Sauvignon dominam'],
    ['40 mil ha', 'Área de Shiraz'],
    ['18 L', 'Consumo por habitante, em queda desde 2010', 'conferir']
  ]);
  P('Marcos do vinho australiano', 'linha', [
    ['1788', 'Primeiras videiras plantadas em Sydney Cove, início da viticultura pelos colonizadores'],
    ['1830', 'James Busby, "Pai da Viticultura Australiana", traz cepas europeias (a Wikipedia indica 1833)', 'conferir'],
    ['1849', 'Yalumba é fundada por Samuel Smith em Barossa Valley (o slide diz 1855 e "primeira vinícola comercial")', 'corrigido'],
    ['1853', 'Thomas Hardy funda sua vinícola, em Bankside, perto de Adelaide (o slide diz 1860, em McLaren Vale)', 'corrigido'],
    ['1870', 'Começam as exportações, sobretudo para o Reino Unido', 'conferir'],
    ['1976', 'Prêmio de "Vinha do Ano" do Reino Unido a um Shiraz australiano, segundo o slide', 'conferir'],
    ['1980', 'Nova geração de enólogos e vinícolas boutique diversifica a indústria'],
    ['1994', 'Indicação Geográfica (GI): regula a rotulagem e reconhece as regiões oficialmente'],
    ['2000', 'Shiraz e Chardonnay consolidam a Austrália entre os grandes produtores']
  ]);
  P('Shiraz da Austrália', 'fatos', [
    ['Origem', 'Rhône, na França; chegou à Austrália no século XIX'],
    ['Regiões', 'Barossa Valley, McLaren Vale e Hunter Valley, de climas quentes'],
    ['Importância', 'A casta tinta mais importante do país'],
    ['Perfil', 'Cor profunda, frutas escuras, especiarias e taninos sedosos']
  ]);
  P('Castas brancas da Austrália', 'fatos', [
    ['Semillon', 'Envelhece com graça; usada em cortes; em Hunter Valley dá vinhos secos e frescos'],
    ['Chardonnay', 'Muito versátil: de fresco e frutado a encorpado e complexo'],
    ['Sauvignon Blanc', 'Originária de Bordeaux: cítricos, maracujá, ervas e grama cortada']
  ]);
  P('Castas tintas da Austrália', 'fatos', [
    ['Cabernet Sauvignon', 'Firme e elegante: cassis, amora, pimenta verde e notas herbáceas; destaque em Coonawarra'],
    ['Merlot', 'Macio e frutado: cereja, ameixa, chocolate e especiarias; muito usada em cortes estilo Bordeaux'],
    ['Grenache', 'De origem espanhola: macio e aromático, com alcaçuz e especiarias; destaque em McLaren Vale']
  ]);
  P('Austrália: clima e solo', 'fatos', [
    ['Solos', 'De aluviais a terra vermelha e calcários; arenosos, argilosos ou mistos'],
    ['Drenagem', 'Eficiente: controla o vigor e concentra os frutos'],
    ['Clima', 'De mediterrâneo a continental e marítimo'],
    ['Quente e seco', 'Barossa Valley e McLaren Vale têm verões quentes e secos'],
    ['Mais fresco', 'A Tasmânia é mais fresca e úmida'],
    ['Amplitude térmica', 'Dias quentes e noites frescas, graças ao oceano e às correntes de ar']
  ]);
  P('Regiões vinícolas da Austrália', 'lista', [
    ['', 'Concentram-se na faixa sul do país'],
    ['', 'Austrália do Sul reúne 3 das 5 regiões estudadas'],
    ['', '1. Barossa Valley (Austrália do Sul)'],
    ['', '2. McLaren Vale (Austrália do Sul)'],
    ['', '3. Hunter Valley (Nova Gales do Sul)'],
    ['', '4. Margaret River (Austrália Ocidental)'],
    ['', '5. Coonawarra (Austrália do Sul)']
  ]);

  R('Austrália do Sul', 'Barossa Valley', 'Barossa Valley', 'fatos', [
    ['Onde', 'Austrália do Sul: Tanunda, Nuriootpa, Lyndoch e Angaston'],
    ['Produção', 'Volume substancial; vinhos tendem a ser mais acessíveis'],
    ['Condução', 'Muitas vinhas na "latada", com movimento de modernização, segundo o slide', 'conferir'],
    ['Solo e clima', 'Solos predominantemente arenosos; clima tipicamente quente'],
    ['Investimento', 'Atrai capital nacional e internacional'],
    ['Produtores', 'Penfolds, Henschke, Yalumba, Torbreck e Langmeil']
  ]);
  R('Austrália do Sul', 'McLaren Vale', 'McLaren Vale', 'fatos', [
    ['Onde', 'Austrália do Sul (o slide diz "McLaren Valley"): McLaren Flat e Willunga'],
    ['Produção', 'Substancial, com vinhos de qualidade acessível'],
    ['Condução', 'Muitas vinhas na "latada", com movimento de modernização, segundo o slide', 'conferir'],
    ['Solo e clima', 'Solos predominantemente arenosos; clima geralmente quente'],
    ['Produtores', 'd\'Arenberg, Wirra Wirra, Yangarra Estate, Kay Brothers e Coriole']
  ]);
  R('Nova Gales do Sul', 'Hunter Valley', 'Hunter Valley', 'fatos', [
    ['Local', 'Nova Gales do Sul'],
    ['Branca', 'Semillon seca e fresca, que envelhece bem'],
    ['Tinta', 'Shiraz, entre as regiões conhecidas pela casta']
  ]);
  R('Austrália Ocidental', 'Margaret River', 'Margaret River', 'fatos', [
    ['Onde', 'Oeste da Austrália; sub-regiões como Wilyabrup e Karridale'],
    ['Reputação', 'Produção expressiva e vinhos de alta qualidade'],
    ['Solo e clima', 'Solos predominantemente arenosos; clima temperado, influenciado pelo oceano'],
    ['Produtores', 'Vasse Felix, Leeuwin Estate, Cullen Wines, Voyager Estate e Cape Mentelle']
  ]);
  R('Austrália do Sul', 'Coonawarra', 'Coonawarra', 'fatos', [
    ['Onde', 'Sul da Austrália; uma das regiões mais icônicas do país'],
    ['Solo', 'Terra vermelha'],
    ['Clima', 'Fresco e moderado: amadurecimento gradual e equilibrado'],
    ['Casta de destaque', 'Cabernet Sauvignon'],
    ['Produtores', 'Wynns Coonawarra Estate, Penley Estate, Katnook Estate, Yalumba The Menzies e Balnaves of Coonawarra']
  ]);

  P('Grandes produtores da Austrália', 'produtores', [
    ['Yalumba', ''], ['Penfolds', ''], ['Vasse Felix', ''], ['Henschke', ''],
    ['Cullen Wines', ''], ['Grosset', ''], ['Torbreck', ''], ['Leeuwin Estate', '']
  ]);

  H('Austrália', 'Cozinha da Austrália', [
    ['Panorama', 'Mistura de influências culturais e ingredientes locais frescos; frutos do mar, cordeiro e canguru'],
    ['Meat pie', 'Torta de carne moída com temperos e molho, coberta de massa folhada'],
    ['BBQ prawns', 'Camarões grelhados com temperos e marinadas; popular no verão australiano'],
    ['Barramundi', 'Peixe nativo, grelhado ou assado, com legumes e molhos cítricos']
  ]);

  var LEVELS = { 'Austrália em números': 'avancado',
    'Marcos do vinho australiano': 'avancado',
    'Shiraz da Austrália': 'medio',
    'Castas brancas da Austrália': 'medio',
    'Castas tintas da Austrália': 'medio',
    'Austrália: clima e solo': 'avancado',
    'Regiões vinícolas da Austrália': 'medio',
    'Barossa Valley': 'medio',
    'McLaren Vale': 'avancado',
    'Hunter Valley': 'avancado',
    'Margaret River': 'avancado',
    'Coonawarra': 'avancado',
    'Grandes produtores da Austrália': 'avancado',
    'Cozinha da Austrália': 'avancado' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'AU', version: 1, cards: cards };
})());

// =====================  NOVA ZELÂNDIA (aula 41)  =====================
STUDY_PACKS.push((function () {
  var cards = [];
  var PAIS = 'Nova Zelândia';
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: [PAIS], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? [PAIS, region, sub] : [PAIS, region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  P('Nova Zelândia em números', 'numeros', [
    ['39 mil ha', 'Vinhedos'],
    ['300 mi L', 'Produção anual, mais de'],
    ['90%', 'Parcela exportada, quase (o slide diz mais de 60%)', 'corrigido'],
    ['60%', 'Parte do Sauvignon Blanc na área plantada (introduzido em 1973)'],
    ['9 L', 'Consumo por habitante por ano, segundo o slide', 'conferir']
  ]);
  P('Influências e Müller-Thurgau', 'lista', [
    ['', 'Forte influência de produtores alemães e croatas'],
    ['', 'Müller-Thurgau já foi a casta mais importante']
  ]);
  P('Marcos do vinho neozelandês', 'linha', [
    ['1819', 'Samuel Marsden, missionário inglês, planta as primeiras vinhas na Baía das Ilhas, Ilha Norte'],
    ['1836', 'James Busby, "pai da vitivinicultura" do país, produz vinho perto de Waitangi, Baía das Ilhas (o slide diz 1851)', 'corrigido'],
    ['1895', 'Hawke\'s Bay vira área importante, sobretudo de tintas como Cabernet Sauvignon e Merlot, segundo o slide', 'conferir'],
    ['1961', 'George Fistonich funda a Villa Maria, em Auckland (o slide diz 1973)', 'corrigido'],
    ['1973', 'Sauvignon Blanc chega a Marlborough, Ilha Sul; o slide cita Ivan Yukich e os Seifried', 'conferir'],
    ['1985', 'Oz Clarke elogia o Sauvignon Blanc de Marlborough e a fama do país explode, segundo o slide', 'conferir'],
    ['1990', 'Programa de sustentabilidade SWNZ, segundo o slide', 'conferir'],
    ['2002', '"Appellation Marlborough Wine" protege a origem dos vinhos da região, segundo o slide', 'conferir'],
    ['2010', 'Pinot Noir de Central Otago ganha prêmios e reconhecimento internacional']
  ]);
  P('Sauvignon Blanc da Nova Zelândia', 'fatos', [
    ['Origem', 'Bordeaux, na França'],
    ['Chegada', 'Década de 1970, em Marlborough, Ilha Sul'],
    ['Perfil', 'Aromas intensos de frutas tropicais e cítricas, acidez refrescante e mineralidade'],
    ['Fama', 'Um dos principais produtores mundiais da casta']
  ]);
  P('Castas brancas da Nova Zelândia', 'fatos', [
    ['Pinot Gris', 'Perfumado, corpo médio, frutas maduras e flores; Marlborough, Nelson e Central Otago'],
    ['Chardonnay', 'Elegante e complexo, com carvalho bem integrado; Marlborough e Hawke\'s Bay'],
    ['Riesling', 'Aromático, acidez vibrante, de cítricos a florais; Marlborough, Nelson e Central Otago']
  ]);
  P('Castas tintas da Nova Zelândia', 'fatos', [
    ['Pinot Noir', 'A tinta mais importante: elegante e complexo; Marlborough, Central Otago e Martinborough'],
    ['Merlot', 'Macio e frutado, taninos suaves; Hawke\'s Bay e Auckland'],
    ['Cabernet Sauvignon', 'Encorpado e estruturado, com carvalho; Hawke\'s Bay e Auckland']
  ]);
  P('Nova Zelândia: clima e solo', 'fatos', [
    ['Marlborough', 'Solos aluviais; clima marítimo'],
    ['Central Otago', 'Xisto e argila; clima continental'],
    ['Martinborough', 'Argila e calcário'],
    ['Verões', 'Quentes e secos em ambas as regiões principais, segundo o slide']
  ]);
  P('Regiões vinícolas da Nova Zelândia', 'lista', [
    ['', 'Distribuídas pelas duas ilhas'],
    ['', '1. Marlborough (Ilha Sul)'],
    ['', '2. Central Otago (Ilha Sul)'],
    ['', '3. Martinborough (Ilha Norte)'],
    ['', '4. Hawke\'s Bay (Ilha Norte)']
  ]);

  R('Marlborough', '', 'Marlborough', 'fatos', [
    ['Importância', 'A região mais importante do país, famosa mundialmente pelo Sauvignon Blanc'],
    ['Onde', 'Ilha Sul: Blenheim e Renwick'],
    ['Solo', 'Aluviais, mistura de argila e pedras'],
    ['Clima', 'Fresco, ideal para brancos aromáticos'],
    ['Produtores', 'Cloudy Bay, Villa Maria, Brancott Estate, Nautilus Estate e Saint Clair']
  ]);
  R('Central Otago', '', 'Central Otago', 'fatos', [
    ['Fama', 'Pinot Noir de classe mundial'],
    ['Onde', 'Ilha Sul: Cromwell, Alexandra e Bannockburn'],
    ['Clima e solo', 'Continental extremo; solos predominantemente de xisto'],
    ['Estilo', 'Elegância, fruta vibrante e estrutura bem definida'],
    ['Produtores', 'Felton Road, Rippon, Quartz Reef, Mount Difficulty e Wooing Tree']
  ]);
  R('Wairarapa (Martinborough)', 'Martinborough', 'Martinborough', 'fatos', [
    ['Onde', 'Ilha Norte, na área de Wairarapa'],
    ['Fama', 'Pinot Noir elegante e Sauvignon Blanc aromático'],
    ['Clima', 'Temperado, com verões quentes e secos e invernos frescos'],
    ['Solos', 'Depósitos aluviais, calcário e argila'],
    ['Produtores', 'Ata Rangi, Palliser Estate, Craggy Range, Escarpment e Te Kairanga']
  ]);
  R('Hawke\'s Bay', '', 'Hawke\'s Bay', 'fatos', [
    ['Onde', 'Ilha Norte'],
    ['Clima', 'Quente e seco, com solos variados'],
    ['Tintas', 'Merlot, Cabernet Sauvignon e Syrah'],
    ['Brancas', 'Chardonnay e Sauvignon Blanc'],
    ['Produtores', 'Craggy Range, Te Mata Estate, Elephant Hill, Trinity Hill e Church Road']
  ]);

  P('Grandes produtores da Nova Zelândia', 'produtores', [
    ['Villa Maria', ''], ['Cloudy Bay', ''], ['Te Mata Estate', ''], ['Felton Road', ''],
    ['Ataahua', ''], ['Brancott Estate', ''], ['Palliser Estate', ''], ['Esk Valley', '']
  ]);
  cards[cards.length - 1].items[4].tag = 'conferir';
  cards[cards.length - 1].items[4].v = 'Grafado "Ataawaha" no slide';

  H('Nova Zelândia', 'Cozinha da Nova Zelândia', [
    ['Panorama', 'Fusão de influências culturais e ingredientes frescos; frutos do mar, cordeiro e carneiro'],
    ['Hangi', 'Técnica maori, não um prato: comida cozida em buraco no chão (carne, cebola, alho e batata-doce)'],
    ['Whitebait fritters', 'Peixinhos brancos fritos em massa leve: iguaria crocante'],
    ['Lamb roasted', 'Cordeiro assado, com legumes assados e molho de hortelã']
  ]);

  var LEVELS = { 'Nova Zelândia em números': 'avancado',
    'Influências e Müller-Thurgau': 'expert',
    'Marcos do vinho neozelandês': 'expert',
    'Sauvignon Blanc da Nova Zelândia': 'medio',
    'Castas brancas da Nova Zelândia': 'avancado',
    'Castas tintas da Nova Zelândia': 'medio',
    'Nova Zelândia: clima e solo': 'avancado',
    'Regiões vinícolas da Nova Zelândia': 'medio',
    'Marlborough': 'medio',
    'Central Otago': 'medio',
    'Martinborough': 'avancado',
    'Hawke\'s Bay': 'avancado',
    'Grandes produtores da Nova Zelândia': 'avancado',
    'Cozinha da Nova Zelândia': 'avancado' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'NZ', version: 1, cards: cards };
})());

// =====================  ÁFRICA DO SUL (aula 42)  =====================
STUDY_PACKS.push((function () {
  var cards = [];
  var PAIS = 'África do Sul';
  var WC = 'Cabo Ocidental (Western Cape)';
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: [PAIS], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? [PAIS, region, sub] : [PAIS, region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  P('África do Sul em resumo', 'fatos', [
    ['Perfil', 'Grande produtor no estilo "Novo Mundo": grande área, tecnologia de ponta e séculos de tradição'],
    ['Estilos', 'Do tradicional ao fortificado, passando por naturais e sem álcool'],
    ['Perfil de vinho', 'Não há um só: a diversidade de solos e climas faz da pluralidade a regra']
  ]);
  P('África do Sul em números', 'numeros', [
    ['92 mil ha', 'Vinhedos (cerca de 90,5 mil em 2022)'],
    ['1 bi L', 'Produção anual, mais de'],
    ['2.278', 'Vinícolas, segundo o slide (fonte WOSA)', 'conferir'],
    ['269 mil', 'Empregos, segundo o slide (fonte WOSA)', 'conferir'],
    ['540 mi L', 'Exportados por ano, segundo o slide (fonte WOSA)', 'conferir'],
    ['55%', 'Parte das uvas brancas na área plantada'],
    ['21 e 23', 'Variedades brancas e tintas cultivadas; pouco mais de 10 castas concentram a produção']
  ]);
  P('Exportações e consumidores da África do Sul', 'numeros', [
    ['19,8%', 'Reino Unido'], ['15,3%', 'Alemanha'], ['13,6%', 'Holanda'], ['13,4%', 'Estados Unidos'],
    ['8,6%', 'Suécia'], ['8,5%', 'Canadá'], ['7,8%', 'Dinamarca'], ['6,9%', 'Bélgica'], ['6,1%', 'China']
  ]);
  P('Marcos do vinho sul-africano', 'linha', [
    ['1652', 'Jan van Riebeeck, um dos fundadores da Cidade do Cabo, planta as primeiras videiras no Cabo da Boa Esperança'],
    ['1659', 'Primeiro vinho sul-africano, registrado em 2 de fevereiro'],
    ['1688', 'Huguenotes franceses chegam e trazem técnicas de viticultura e vinificação'],
    ['1806', 'Colônia do Cabo passa à Grã-Bretanha, depois da Batalha do Cabo'],
    ['1918', 'Fundada a KWV, cooperativa que padronizou e regulou a indústria'],
    ['1948', 'Partido Nacional no poder: apartheid afeta trabalho e acesso à terra no setor do vinho'],
    ['1973', 'Criado o Wine of Origin Scheme'],
    ['1986', 'Nederburg recebe prêmio internacional de vinícola do ano da revista Wine & Spirits, segundo o slide', 'conferir'],
    ['1990', 'Nelson Mandela é libertado: começa o fim do apartheid'],
    ['1994', 'Fim do apartheid: exportações, incentivos fiscais e escolas de enologia com vagas para negros']
  ]);
  P('Ntsiki Biyela', 'lista', [
    ['', 'Primeira enóloga negra da África do Sul']
  ]);
  P('Castas brancas da África do Sul', 'fatos', [
    ['Chenin Blanc (Steen)', 'A mais plantada do país; o slide cita 9.600 ha, mas a área real é maior (cerca de 18% do total)', 'corrigido'],
    ['Chardonnay', 'Das mais importantes; destaque na categoria especial "old wines"'],
    ['Semillon', 'Destaque raro fora da França, com resultados incríveis no país']
  ]);
  P('Castas tintas da África do Sul', 'fatos', [
    ['Cabernet Sauvignon', 'A tinta mais plantada (cerca de 11%, não 4 mil ha); tende a ser amadeirada e robusta', 'corrigido'],
    ['Merlot', 'Das mais importantes e apreciadas, dentro e fora do país'],
    ['Cabernet Franc', 'Vinhos encorpados e longevos']
  ]);
  P('Outras castas da África do Sul', 'lista', [
    ['', 'Sauvignon Blanc, Pinot Gris, Viognier, Riesling, Gewürztraminer, Grenache Blanc'],
    ['', 'Petit Verdot, Mourvèdre, Grenache, Shiraz, Pinot Noir, Touriga Nacional']
  ]);
  P('Pinotage', 'fatos', [
    ['Origem', 'Cruzamento de Pinot Noir com Cinsaut, pelo professor Abraham Perold'],
    ['Ano', '1925, segundo o slide (a Wikipedia traz 1924)', 'conferir'],
    ['Objetivo', 'Unir as características da Pinot Noir à resistência da Cinsaut'],
    ['Posição', 'O slide a põe como 2ª mais plantada; ela representa o estilo do país', 'conferir']
  ]);
  P('Clima da África do Sul', 'fatos', [
    ['Corrente de Benguela', 'Corrente marítima vinda do sul que ameniza as altas temperaturas'],
    ['Doctor Cape', 'Vento forte e seco do sudoeste que limpa os vinhedos de fungos e parasitas'],
    ['Chuvas', 'Entre 800 e 1.000 mm por ano, segundo o slide', 'conferir']
  ]);
  P('Wine of Origin (W.O.)', 'fatos', [
    ['O que é', 'Sistema sul-africano de denominação controlada, criado em 1973'],
    ['Níveis', 'Unidade geográfica, região, distrito e ward (área delimitada)'],
    ['Unidades geográficas', 'Segundo o slide, são 5, mas só Western Cape tem relevância', 'conferir'],
    ['Funil', 'Indicações cada vez mais específicas, mas uma não precisa estar dentro da outra'],
    ['Origem', '100% das uvas devem vir da área indicada'],
    ['Safra e casta', 'Mínimo de 85% para a safra e 85% para a casta no rótulo']
  ]);
  P('Escopo do Wine of Origin', 'fatos', [
    ['Unidade geográfica', 'Mais ampla: uvas de uma grande área vinícola'],
    ['Região', 'Exemplos: Olifants River e Breede River Valley'],
    ['Distrito', 'Mais específico; fornece informação adicional sobre a origem'],
    ['Ward', 'Área de produção delimitada, com terroir distinto']
  ]);

  R(WC, '', 'Região Costeira', 'fatos', [
    ['Importância', 'Entre as regiões do Cabo Ocidental, a mais importante: abriga os melhores distritos'],
    ['Distritos', 'Stellenbosch, Paarl e Constantia']
  ]);
  R(WC, 'Stellenbosch', 'Stellenbosch', 'fatos', [
    ['Importância', 'O distrito mais importante do país, com as melhores vinícolas'],
    ['Castas', 'Chenin Blanc, Chardonnay, Sauvignon Blanc, Pinotage e Cabernet Franc'],
    ['Universidade', 'Universidade do Cabo: importante centro de pesquisa enológica (segundo o slide)', 'conferir']
  ]);
  R(WC, 'Stellenbosch', 'Sub-regiões de Stellenbosch', 'lista', [
    ['', 'Exemplos citados: Simonsberg-Stellenbosch e Helderberg']
  ]);
  R(WC, 'Paarl', 'Paarl', 'fatos', [
    ['Importância', 'Segundo distrito mais importante, com alguns dos melhores vinhos do país'],
    ['Destaque', 'Tintos encorpados de Cabernet Franc, segundo o slide', 'conferir']
  ]);
  R(WC, 'Constantia', 'Constantia', 'fatos', [
    ['Origem', 'Fundada no século 17 pelo primeiro governador do Cabo, como uma enorme propriedade vinícola'],
    ['Groot Constantia', 'Hoje dividida entre 5 vinícolas e condomínios residenciais'],
    ['Vin de Constance', 'Doce e raro, de Muscat de Frontignan, combinando várias técnicas de vinificação']
  ]);

  P('Grandes produtores da África do Sul', 'produtores', [
    ['Lanzerac', ''], ['Spier', ''], ['Boschendal', ''], ['Hidden', ''],
    ['Babylonstoren', ''], ['Vergelegen', ''], ['Ataraxia', ''], ['Delaire Graff', '']
  ]);
  cards[cards.length - 1].items[3].tag = 'conferir';
  cards[cards.length - 1].items[3].v = 'Grafado só "Hidden" no slide';
  cards[cards.length - 1].items[7].v = 'Grafado "Delair" no slide';

  H('África do Sul', 'Cozinha da África do Sul', [
    ['Panorama', 'Fusão de influências e ingredientes locais; frutos do mar, cordeiro e carneiro; Chenin Blanc e Pinotage acompanham'],
    ['Cape Malay seafood curry', 'Técnicas e ingredientes malaios com frutos do mar do Cabo; servido com arroz branco ou pão naan'],
    ['Bobotie', 'Carne moída temperada com ovos e especiarias, coberta com leite e ovos e assada; doce e picante, de influência malaia'],
    ['Braai', 'Churrasco sul-africano: boerewors, costelas e espetinhos; com saladas e pão de milho'],
    ['Biltong', 'Tiras de carne (boi ou avestruz) temperadas com sal, vinagre, açúcar mascavo e especiarias, secas ao ar']
  ]);

  var LEVELS = { 'África do Sul em resumo': 'avancado',
    'África do Sul em números': 'avancado',
    'Exportações e consumidores da África do Sul': 'expert',
    'Marcos do vinho sul-africano': 'avancado',
    'Ntsiki Biyela': 'expert',
    'Castas brancas da África do Sul': 'avancado',
    'Castas tintas da África do Sul': 'avancado',
    'Outras castas da África do Sul': 'expert',
    'Pinotage': 'medio',
    'Clima da África do Sul': 'avancado',
    'Wine of Origin (W.O.)': 'avancado',
    'Escopo do Wine of Origin': 'expert',
    'Região Costeira': 'avancado',
    'Stellenbosch': 'medio',
    'Sub-regiões de Stellenbosch': 'expert',
    'Paarl': 'avancado',
    'Constantia': 'avancado',
    'Grandes produtores da África do Sul': 'expert',
    'Cozinha da África do Sul': 'avancado' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'ZA', version: 1, cards: cards };
})());
