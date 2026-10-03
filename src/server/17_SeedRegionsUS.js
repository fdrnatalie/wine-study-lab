/**
 * ENCICLOPÉDIA DE REGIÕES — pack ESTADOS UNIDOS (origem "pesquisado"). v1: 4 estados, AVAs como sub-regiões.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "American wine", "California wine", "Napa Valley AVA", "Sonoma County wine",
 * "Oregon wine", "Washington wine", "New York wine", artigos das AVAs e de produtores (Opus One, Stag's Leap, Ridge…).
 * Contornos EXATOS dos estados (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }
  function ava(name, place, description, grapes, producers, wines, title) { return sub(name, 'AVA', place, description, grapes, producers, wines, EN + title); }

  var regions = [
    { name: 'Califórnia', geo: 'US:California', sources: [EN + 'California_wine'],
      description: '~90% do vinho americano (80,8% em 2023) e mais de 4.200 vinícolas; 193.000 ha por 1.100 km, de Mendocino a Riverside, e 147 AVAs. Quatro grandes áreas: North Coast (Napa, Sonoma, Mendocino, Lake), Central Coast (Monterey, Paso Robles, Santa Barbara, Santa Cruz Mountains), South Coast (Temecula) e Central Valley, que dá ~75% das uvas do estado e o grosso do vinho a granel. No Julgamento de Paris (1976), Chardonnay e Cabernet californianos venceram os franceses às cegas. Estilo em geral "Novo Mundo": fruta madura, álcool acima de 13,5%, Chardonnay amanteigado com malolática e carvalho.',
      climate: 'Mediterrâneo na maior parte; o Pacífico e as baías (San Francisco, Monterey) trazem ventos frios e neblina que equilibram o calor.', soils: 'Muito diversos.', altitude: '',
      history: 'Missionários espanhóis plantaram a uva Mission nas missões no século XVIII (Junípero Serra, Mission San Juan Capistrano). Buena Vista, de Agoston Haraszthy (Sonoma, 1857), foi a primeira vinícola comercial. A Lei Seca (1919–1933) deixou só 140 vinícolas. Renascimento nos anos 1960 (Robert Mondavi, Heitz, David Bruce); nos anos 1980–90, os "Rhône Rangers" e os "Cal-Ital" diversificaram as uvas.',
      grapes: ['Cabernet Sauvignon', 'Chardonnay', 'Pinot Noir', 'Primitivo', 'Merlot', 'Sauvignon Blanc', 'Syrah'], grapes_other: ['Petite Sirah', 'Grenache', 'Mourvèdre', 'Barbera', 'Sangiovese', 'Viognier', 'Chenin Blanc', 'Colombard'],
      notable_wines: 'Cabernet de Napa; Pinot Noir e Chardonnay de Russian River e Sta. Rita Hills; Zinfandel de Dry Creek, Paso Robles e Lodi; espumantes de Carneros',
      producers: [prod('E & J Gallo Winery', 'o maior produtor dos EUA (100 milhões de caixas/ano)', EN + 'American_wine'), prod('Domaine Chandon (Moët et Chandon)', 'espumante na Califórnia', EN + 'California_wine'), prod('Roederer Estate (Louis Roederer)', 'espumante', EN + 'California_wine'), prod('Bonny Doon Vineyard', 'Santa Cruz; pioneira dos Rhône Rangers', EN + 'California_wine')],
      subregions: [
        ava('Napa Valley', 'Napa, California, United States', 'Todo o condado de Napa (salvo a parte a nordeste de Putah Creek e do lago Berryessa); a segunda AVA dos EUA (1981) e uma das regiões mais famosas do mundo, com 17 sub-AVAs. Vale entre as serras Mayacamas (oeste) e Vaca (leste), subindo do nível do mar a 110 m em Calistoga. O sul é mais fresco pela baía de San Pablo; o norte, fechado, mais quente. Solos de sedimentos da baía no sul e de lava e cinzas vulcânicas no norte. Primeiras vinhas: George Yount (1838); Charles Krug (1861). André Tchelistcheff, na Beaulieu (1938), trouxe barricas francesas e fermentação a frio. Mais de 4,5 milhões de visitantes por ano.',
          ['Cabernet Sauvignon', 'Chardonnay', 'Merlot'],
          [prod('Chateau Montelena', 'Calistoga; Chardonnay vencedor dos brancos no Julgamento de Paris (1976)', EN + 'Chateau_Montelena'), prod('Beringer Vineyards', 'pioneira do enoturismo (1939)', EN + 'Napa_Valley_AVA'), prod('Charles Krug', 'St. Helena, 1861', EN + 'Napa_Valley_AVA')],
          'Cabernet Sauvignon de Napa', 'Napa_Valley_AVA'),
        ava('Oakville', 'Oakville, California, United States', 'Centro-sul do vale, no "Rutherford Bench"; AVA de 1993. Sucesso com uvas bordalesas: textura rica, taninos firmes, notas de menta e ervas. Ali está o histórico vinhedo To Kalon (H. W. Crabb, 1868).',
          ['Cabernet Sauvignon'],
          [prod('Robert Mondavi Winery', 'To Kalon; pioneiro dos rótulos varietais e do Fumé Blanc', EN + 'Oakville_AVA'), prod('Opus One', 'parceria Mondavi + Baron Philippe de Rothschild (1980); corte bordalês', EN + 'Opus_One_Winery'),
            prod('Screaming Eagle', 'Cabernet "cult"', EN + 'Screaming_Eagle_Winery_and_Vineyards'), prod('Harlan Estate', 'Cabernet; plano de 200 anos', EN + 'Harlan_Estate'), prod('Heitz Cellars', "Martha's Vineyard", EN + 'Oakville_AVA')],
          'Opus One; Screaming Eagle; Harlan Estate', 'Oakville_AVA'),
        ava('Rutherford', 'Rutherford, California, United States', 'Sétima sub-AVA de Napa (1993), conhecida pelo terroir e sobretudo pelo Cabernet Sauvignon.', ['Cabernet Sauvignon'],
          [prod('Beaulieu Vineyard (BV)', 'fundada em 1900 por Georges de Latour', EN + 'Beaulieu_Vineyard'), prod('Inglenook', 'fundada em 1879 por Gustave Niebaum; primeira vinícola de estilo bordalês dos EUA', EN + 'Inglenook_(winery)')], '', 'Rutherford_AVA'),
        ava('Stags Leap District', 'Yountville, California, United States', 'A leste de Yountville; AVA de 1989, notada pelo Cabernet Sauvignon e pela Petite Sirah. O Cabernet 1973 da Stag\'s Leap Wine Cellars venceu os tintos no Julgamento de Paris, à frente de Mouton-Rothschild e Haut-Brion.',
          ['Cabernet Sauvignon', 'Petite Sirah'], [prod("Stag's Leap Wine Cellars", 'Cabernet 1973 (1º no Julgamento de Paris); fundada por Warren Winiarski em 1970', EN + "Stag's_Leap_Wine_Cellars")], '', 'Stags_Leap_District_AVA'),
        ava('Howell Mountain', 'Angwin, California, United States', 'Nas montanhas Vaca, acima de 1.400 pés (427–671 m), acima da neblina e com mais sol; segunda sub-AVA de Napa (1983). Reputação histórica pelos tintos, sobretudo Zinfandel, além de Cabernet.', ['Primitivo', 'Cabernet Sauvignon'], [], '', 'Howell_Mountain_AVA'),
        ava('Los Carneros', 'Carneros, California, United States', 'Sul de Napa e Sonoma, junto à baía de San Pablo: neblina e brisa tornam o clima mais fresco, ideal para Pinot Noir e Chardonnay, inclusive para espumantes.', ['Pinot Noir', 'Chardonnay'], [prod('Domaine Carneros (Taittinger)', 'espumante', EN + 'California_wine')], '', 'Los_Carneros_AVA'),
        ava('Sonoma Valley', 'Sonoma, California, United States', '"Vale da Lua"; primeira AVA do condado de Sonoma (1981). As montanhas Sonoma barram a neblina de Petaluma e as Mayacamas o calor do Central Valley. Sonoma produz muito mais uva que Napa e tem 19 AVAs.', [],
          [prod('Buena Vista Winery', 'primeira vinícola comercial da Califórnia (Agoston Haraszthy, 1857)', EN + 'California_wine')], '', 'Sonoma_Valley_AVA'),
        ava('Russian River Valley', 'Forestville, California, United States', 'Entre Sebastopol/Santa Rosa e Forestville/Healdsburg; clima fresco com muita neblina do Pacífico. Pinot Noir e Chardonnay, tranquilos e espumantes; o Pinot foi de 1.600 a 4.900 ha entre os anos 1990 e 2003.', ['Pinot Noir', 'Chardonnay'],
          [prod('Korbel', 'espumante de método tradicional desde a década de 1880', EN + 'California_wine')], '', 'Russian_River_Valley_AVA'),
        ava('Dry Creek Valley', 'Healdsburg, California, United States', 'Vale de ~26 km a noroeste de Healdsburg; Zinfandel desde o século XIX, com vinhas velhas sem espaldeira que sobreviveram à Lei Seca; hoje Zinfandel e Cabernet são as mais plantadas.', ['Primitivo', 'Cabernet Sauvignon'],
          [prod('Ridge Vineyards (Lytton Springs)', 'Zinfandel', EN + 'Ridge_Vineyards'), prod('A. Rafanelli Winery'), prod('Seghesio Family Vineyards')], 'Zinfandel', 'Dry_Creek_Valley_AVA'),
        ava('Alexander Valley', 'Geyserville, California, United States', 'Nordeste de Sonoma, ao norte de Healdsburg; conhecida pela qualidade do Cabernet Sauvignon (notas de chocolate nos solos aluviais) e do Merlot.', ['Cabernet Sauvignon', 'Merlot'],
          [prod('Jordan Winery'), prod('Simi Winery'), prod('Chateau St. Jean')], '', 'Alexander_Valley_AVA'),
        ava('Paso Robles', 'Paso Robles, California, United States', 'Norte do condado de San Luis Obispo; AVA de 1983. Zinfandel histórico (introduzido pelo pianista Paderewski em 1914), Cabernet Sauvignon e cortes ao estilo do Rhône; 11 sub-AVAs.', ['Primitivo', 'Cabernet Sauvignon', 'Syrah', 'Grenache', 'Mourvèdre'],
          [prod('Tablas Creek Vineyard'), prod('Saxum Vineyards')], '', 'Paso_Robles_AVA'),
        ava('Sta. Rita Hills', 'Lompoc, California, United States', 'Parte oeste do vale de Santa Ynez (Santa Barbara), com neblina costeira à noite e de manhã; Chardonnay e Pinot Noir predominam. AVA de 2001.', ['Pinot Noir', 'Chardonnay'],
          [prod('Sanford Winery'), prod('Babcock Vineyards'), prod('Clos Pepe Vineyards')], 'Pinot Noir', 'Sta._Rita_Hills_AVA'),
        ava('Santa Cruz Mountains', 'Los Gatos, California, United States', 'Uma das primeiras AVAs definidas pela topografia montanhosa (1981); segue a linha da neblina. ~600 ha, divididos entre Pinot Noir, Cabernet, Chardonnay e outras.', ['Pinot Noir', 'Cabernet Sauvignon', 'Chardonnay'],
          [prod('Ridge Vineyards (Monte Bello)', 'Monte Bello Cabernet 1971, 5º no Julgamento de Paris', EN + 'Ridge_Vineyards'), prod('David Bruce Winery')], 'Ridge Monte Bello', 'Santa_Cruz_Mountains_AVA'),
        ava('Lodi', 'Lodi, California, United States', 'Norte do vale de San Joaquin (Central Valley). Historicamente conhecida pelo Flame Tokay e pelo Zinfandel de vinhas velhas; também Merlot, Chardonnay, Cabernet e Albariño.', ['Primitivo'], [], 'Zinfandel de vinhas velhas', 'Lodi_AVA')
      ] },

    { name: 'Oregon', geo: 'US:Oregon', sources: [EN + 'Oregon_wine'],
      description: 'Quarto produtor dos EUA, famoso pelo Pinot Noir, tido entre os melhores do mundo; Pinot Noir e Pinot Gris são as uvas mais colhidas. 1.116 vinícolas. A lei exige 90% da uva no rótulo para a maioria das variedades.',
      climate: '', soils: '', altitude: '', history: 'Vinho desde os pioneiros dos anos 1840; produção comercial a partir dos anos 1960.',
      grapes: ['Pinot Noir', 'Pinot Gris', 'Chardonnay'], grapes_other: ['Riesling', 'Pinot Blanc', 'Tempranillo', 'Syrah'], notable_wines: 'Pinot Noir do Willamette Valley', producers: [],
      subregions: [
        ava('Willamette Valley', 'McMinnville, Oregon, United States', 'Do rio Columbia até o sul de Eugene, entre a Coast Range e as Cascades; a maior AVA do estado (13.500 km²) e a maioria das vinícolas (736 em 2025), concentradas em Yamhill. Clima ameno: invernos frescos e úmidos, verões quentes e secos. Pinot Noir, Pinot Gris, Chardonnay.', ['Pinot Noir', 'Pinot Gris', 'Chardonnay'],
          [prod('Domaine Drouhin Oregon (Maison Joseph Drouhin)', '', EN + 'Maison_Joseph_Drouhin')], 'Pinot Noir', 'Oregon_wine'),
        ava('Dundee Hills', 'Dundee, Oregon, United States', 'Colinas no oeste do vale do Willamette, solo vermelho Jory; vinhas desde 1966, quando David Lett fundou a Eyrie Vineyards.', ['Pinot Noir', 'Pinot Gris'],
          [prod('The Eyrie Vineyards', 'primeiro Pinot Noir do Willamette e primeiro Pinot Gris dos EUA (safra 1970)', EN + 'The_Eyrie_Vineyards')], '', 'Dundee_Hills_AVA'),
        ava('Southern Oregon (Umpqua e Rogue)', 'Roseburg, Oregon, United States', 'União das AVAs Umpqua Valley (mais quente que o Willamette; a região pós-Lei Seca mais antiga do estado) e Rogue Valley (a mais quente e seca do Oregon). Tempranillo, Pinot, Cabernet, Syrah.', ['Tempranillo', 'Pinot Noir'], [], '', 'Oregon_wine'),
        ava('Columbia Gorge', 'Hood River, Oregon, United States', 'Divide-se entre Oregon e Washington ao longo do rio Columbia, na sombra de chuva dos montes Hood e Adams; ventos fortes; grande variedade de uvas.', ['Syrah', 'Pinot Noir', 'Chardonnay'], [], '', 'Oregon_wine')
      ] },

    { name: 'Washington', geo: 'US:Washington', sources: [EN + 'Washington_wine'],
      description: 'Terceiro produtor dos EUA (atrás de Califórnia e Nova York): ~22.000 ha e mais de 940 vinícolas. 99,9% das uvas crescem no leste semiárido, na sombra de chuva das Cascades (~20 cm de chuva/ano): irrigação é essencial; o sol dura duas horas a mais por dia que na Califórnia. Destaques: Merlot, Cabernet, Riesling, Chardonnay e Sémillon.',
      climate: 'Continental e árido no leste; invernos que podem cair a −26 °C.', soils: 'Em Walla Walla: terraços de águas paradas, loess, cascalho fluvial e silte.', altitude: '300–600 m',
      history: 'Videiras vinifera mais antigas ainda vivas plantadas por alemães perto de Tampico em 1871. Associated Vintners (Columbia Winery) e Chateau Ste. Michelle lideraram o vinho premium; o Cabernet 1978 da Leonetti Cellars foi capa de revista nacional.',
      grapes: ['Merlot', 'Cabernet Sauvignon', 'Riesling', 'Chardonnay', 'Syrah'], grapes_other: ['Sémillon'], notable_wines: 'Eroica Riesling; Quilceda Creek Cabernet (100 pts Wine Advocate 2006)',
      producers: [prod('Chateau Ste. Michelle', 'a mais antiga do estado (Woodinville); Eroica (com Ernst Loosen), Col Solare (com Antinori)', EN + 'Chateau_Ste._Michelle'), prod('Quilceda Creek Vintners', 'Cabernet com 100 pontos (2006)', EN + 'Washington_wine')],
      subregions: [
        ava('Columbia Valley', 'Prosser, Washington, United States', 'Quase um quarto do estado (1984), estendendo-se ao Oregon; planalto semiárido de 300–600 m; contém Yakima, Red Mountain, Walla Walla, Horse Heaven Hills, Wahluke Slope e outras.', ['Merlot', 'Cabernet Sauvignon'], [], '', 'Washington_wine'),
        ava('Yakima Valley', 'Zillah, Washington, United States', 'AVA de 1983, a terceira maior do estado, com mais de 40% do vinho de Washington; maior concentração de vinícolas. Contém Red Mountain, Snipes Mountain e Rattlesnake Hills.', [], [], '', 'Washington_wine'),
        ava('Red Mountain', 'Benton City, Washington, United States', 'Sub-AVA de Yakima (2001), uma das menores do estado.', ['Cabernet Sauvignon'], [], '', 'Washington_wine'),
        ava('Walla Walla Valley', 'Walla Walla, Washington, United States', 'AVA de 1984 que entra no Oregon (Milton-Freewater); mais úmida que o resto do Columbia Valley; famosa também pelas cebolas doces, par clássico do Merlot local.', ['Merlot', 'Cabernet Sauvignon', 'Syrah'],
          [prod('Leonetti Cellars', 'Cabernet 1978', EN + 'Washington_wine'), prod("L'Ecole N°41", '', EN + 'Washington_wine'), prod('Woodward Canyon', '', EN + 'Washington_wine')], '', 'Washington_wine')
      ] },

    { name: 'Nova York', geo: 'US:New York', sources: [EN + 'New_York_wine'],
      description: 'Segundo estado em volume de uva, mas a maior parte é Vitis labrusca (sobretudo Concord, para suco); vinifera é menos de 10% do vinho. Híbridos franceses (Seyval, Vidal, Vignoles, Cayuga, Traminette — os dois últimos criados em Cornell). O Riesling dá os vinhos mais consistentes. Onze AVAs, com destaque para Finger Lakes e Long Island.',
      climate: 'Frio; lagos e mar moderam.', soils: '', altitude: '', history: 'Viticultura nos Finger Lakes desde 1829; primeiro vinhedo comercial de Long Island em 1973. O Farm Winery Act (1976) impulsionou pequenas vinícolas.',
      grapes: ['Riesling', 'Chardonnay'], grapes_other: ['Concord', 'Seyval Blanc', 'Vidal', 'Vignoles', 'Cabernet Franc'], notable_wines: 'Riesling dos Finger Lakes; ice wine de Vignoles e Vidal', producers: [],
      subregions: [
        ava('Finger Lakes', 'Hammondsport, New York, United States', 'Norte do estado, ~40 km ao sul do lago Ontário; 11 lagos, a maioria das vinhas em torno de Canandaigua, Keuka, Seneca e Cayuga (as duas últimas são sub-AVAs). Famosa no século XIX pelos espumantes (Pleasant Valley Wine Company). Konstantin Frank provou que vinifera vingava ali; o Riesling é dos mais bem-sucedidos.', ['Riesling', 'Chardonnay', 'Pinot Noir'],
          [prod('Vinifera Wine Cellars (Dr. Konstantin Frank)', '', EN + 'Finger_Lakes_AVA'), prod('Pleasant Valley Wine Company', 'espumantes premiados na Europa (1867, 1873)', EN + 'Finger_Lakes_AVA')], 'Riesling', 'Finger_Lakes_AVA'),
        ava('Long Island (North Fork)', 'Cutchogue, New York, United States', 'Zona marítima; primeiro vinhedo comercial em 1973; AVAs Long Island, North Fork e The Hamptons.', [], [], '', 'New_York_wine')
      ] }
  ];

  var countries = [
    { name: 'Estados Unidos', sources: [EN + 'American_wine'],
      description: 'Quarto produtor mundial (depois de Itália, Espanha e França), com mais de 445.000 ha; vinho nos 50 estados, mas Califórnia, Washington e Oregon fazem mais de 90%. Primeira produção difundida no Novo México (1628). Indústria baseada na vinifera europeia, embora a América do Norte tenha espécies nativas (labrusca, riparia, rotundifolia). Sistema de AVAs desde 1978–80 (Augusta, Missouri, foi a primeira; 280 em 2026): 85% da uva da AVA do rótulo, 75% para estado ou condado (100% na Califórnia), 75% para a uva varietal (90% no Oregon). Vinhos são vendidos pelo nome da uva, prática popularizada por Robert Mondavi.' }
  ];

  return { code: 'US', version: 1, countries: countries, regions: regions, country_of: 'Estados Unidos' };
})());
