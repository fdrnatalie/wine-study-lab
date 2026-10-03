/**
 * ENCICLOPÉDIA DE REGIÕES — pack NOVA ZELÂNDIA (origem "pesquisado"). v1: 8 regiões (GIs).
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "New Zealand wine", "Marlborough wine region", "Central Otago wine region",
 * "Hawke's Bay wine region", "Cloudy Bay Vineyards". Contornos pelas regiões administrativas (18_GeoWorld.js, Natural Earth).
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var NW = EN + 'New_Zealand_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || NW };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }
  function region(name, geo, src, description, grapes, subs, extra) {
    var r = { name: name, geo: geo, sources: [src], description: description, climate: '', soils: '', altitude: '', history: '',
      grapes: grapes, grapes_other: [], notable_wines: '', producers: [], subregions: subs };
    Object.keys(extra || {}).forEach(function (k) { r[k] = extra[k]; });
    return r;
  }

  var regions = [
    region('Marlborough', 'NZ:Marlborough', EN + 'Marlborough_wine_region',
      'De longe a maior região: três quartos do vinho do país, 70% da área e 85% das exportações (2019–2020). Vinhas em torno de Blenheim e Seddon (vales do Wairau e do Awatere). Seu Sauvignon Blanc é tido como de classe mundial (Oz Clarke e George Taber o chamaram de o melhor do mundo); o Pinot Noir também chama atenção.',
      ['Sauvignon Blanc', 'Pinot Noir'],
      [sub('Wairau Valley', 'Vale', 'Blenheim, New Zealand', 'Cascalho aluvial bem drenado entre as Richmond Ranges e as Wither Hills, que protegem do mau tempo.', ['Sauvignon Blanc'],
        [prod('Cloudy Bay Vineyards', 'Sauvignon Blanc que deu fama internacional ao país (1985); da LVMH (Veuve Clicquot) desde 2003', EN + 'Cloudy_Bay_Vineyards'), prod('Brancott Estate (ex-Montana Wines)', 'primeiros grandes vinhedos de Marlborough (1973)', EN + 'Marlborough_wine_region')], 'Sauvignon Blanc de Marlborough', EN + 'Marlborough_wine_region'),
       sub('Awatere Valley', 'Vale', 'Seddon, New Zealand', 'Vale do sul de Marlborough, em torno de Seddon.', ['Sauvignon Blanc'], [], '')],
      { notable_wines: 'Sauvignon Blanc de Marlborough', climate: 'Protegido por montanhas; solos aluviais bem drenados.', soils: 'Cascalho aluvial.',
        history: 'Primeiras vinhas na década de 1870; produção comercial só a partir de 1973 (Montana). Daniel Le Brun, champenois, começou o método tradicional em 1975. A área de Sauvignon Blanc foi de 4.516 ha (2003) a 23.102 ha (2018).' }),
    region('Central Otago', 'NZ:Otago', EN + 'Central_Otago_wine_region',
      'A região vinícola comercial mais ao sul do mundo e a mais alta do país (200–400 m), em encostas de lagos e gargantas, com solos glaciais. Conhecida pelo Pinot Noir. Crescimento explosivo: de 11 vinícolas (1996) a 133 (2020), de 92 a 1.930 ha.',
      ['Pinot Noir'],
      [sub('Bannockburn', 'Sub-região', 'Bannockburn, New Zealand', 'Sub-região de Central Otago.', ['Pinot Noir'], [], ''), sub('Gibbston', 'Sub-região', 'Gibbston, New Zealand', 'Sub-região de Central Otago.', ['Pinot Noir'], [], ''),
       sub('Bendigo', 'Sub-região', 'Bendigo, Otago, New Zealand', 'Sub-região de Central Otago.', ['Pinot Noir'], [], ''), sub('Wānaka', 'Sub-região', 'Wanaka, New Zealand', 'Sub-região de Central Otago.', [], [], '')],
      { notable_wines: 'Pinot Noir de Central Otago', climate: 'Microclima continental: verões quentes e secos, outonos curtos e frescos, invernos frios.', altitude: '200–400 m',
        history: 'O mineiro francês Jean Desire Feraud fez vinho na corrida do ouro dos anos 1860; plantios comerciais só a partir de 1980.' }),
    region('Hawke\'s Bay', 'NZ:Hawke\'s Bay', EN + 'Hawke%27s_Bay_wine_region',
      'A região mais antiga e a segunda maior do país (4.681 ha, 10% da produção em 2018), nas planícies e colinas em torno de Napier e Hastings. Melhor conhecida pelos cortes de Merlot e pelo Syrah; brancos de Chardonnay, Sauvignon Blanc, Pinot Gris e Viognier.',
      ['Merlot', 'Syrah', 'Chardonnay'],
      [sub('Gimblett Gravels', 'Sub-região (solo)', 'Hastings, New Zealand', '~800 ha definidos por um tipo de solo (o antigo leito pedregoso dos Omahu Gravels), não por limites políticos: pedras que reduzem a fertilidade e guardam calor, dando um mesoclima bem mais quente. Marca registrada da associação de produtores.', ['Merlot', 'Syrah'], [], '', EN + 'Hawke%27s_Bay_wine_region'),
       sub('Bridge Pa Triangle', 'Sub-região', 'Bridge Pa, New Zealand', 'Sub-região de reputação em tintos finos.', [], [], '', EN + 'Hawke%27s_Bay_wine_region')],
      { producers: [prod('Te Mata Estate', 'entre as vinícolas mais antigas em atividade do país (fim do século XIX)', EN + 'Hawke%27s_Bay_wine_region'), prod('Mission Estate', 'fim do século XIX', EN + 'Hawke%27s_Bay_wine_region'), prod('Church Road', '', EN + 'Hawke%27s_Bay_wine_region')] }),
    region('Wairarapa (Martinborough)', 'NZ:Wairarapa', NW,
      'Uma das menores regiões (1.067 ha, ~3% do país em 2020), na sombra de chuva da Tararua Range: clima quente e pouca chuva. Quase metade é Pinot Noir.',
      ['Pinot Noir', 'Sauvignon Blanc'],
      [sub('Martinborough', 'GI (sub-região)', 'Martinborough, New Zealand', 'Plantada nos anos 1970 após estudos que apontaram solo e clima perfeitos para o Pinot Noir; por isso tem vinhedos mais velhos que o resto do Wairarapa.', ['Pinot Noir'], [], 'Pinot Noir'),
       sub('Gladstone', 'GI (sub-região)', 'Gladstone, Carterton District, New Zealand', 'Sub-região mais ao norte, menos marítima.', [], [], '')]),
    region('Nelson', 'NZ:Nelson', NW, 'O clima mais ensolarado do país (mais de 2.400 h de sol/ano, como a Toscana); outonos longos permitem colheitas tardias. Sub-regiões Waimea e Moutere Valley.', [],
      [sub('Moutere Valley', 'Sub-região', 'Upper Moutere, New Zealand', 'Sub-região de Nelson.', [], [prod('Neudorf Vineyards', 'vinícola do ano 2012 (Raymond Chan)')], ''),
       sub('Waimea', 'Sub-região', 'Richmond, Tasman, New Zealand', 'Sub-região de Nelson.', [], [prod('Seifried Estate Winery', 'campeã de Sauvignon Blanc no New Zealand Wine Awards 2019')], '')]),
    region('Canterbury (Waipara)', 'NZ:Canterbury', NW, 'Região enorme, mas as vinhas se concentram no Waipara Valley, ~60 km ao norte de Christchurch: microclima quente e solos calcários (Omihi Hills), plantados com Pinot Noir pela afinidade com o calcário da Côte-d\'Or.', ['Pinot Noir'],
      [sub('Waipara Valley', 'GI (sub-região)', 'Waipara, Hurunui District, New Zealand', 'Pequena sub-região do North Canterbury, de clima quente e calcário.', ['Pinot Noir'], [], '')]),
    region('Gisborne', 'NZ:Gisborne', NW, 'A região vinícola mais a leste do mundo; ~1.191 ha (2020) em torno da cidade de Gisborne. Antes de vinho fortificado e em caixa; nos anos 1980 trocou Müller-Thurgau por Chardonnay e Gewürztraminer, pelos quais é conhecida.', ['Chardonnay', 'Gewürztraminer'],
      [sub('Gisborne', 'GI', 'Gisborne, New Zealand', 'Vinhas concentradas em torno da cidade.', ['Chardonnay'], [], '')]),
    region('Auckland', 'NZ:Auckland', NW, 'Pequena região (285 ha em 2022) de vinícolas boutique: alguns dos melhores Chardonnays do país, tintos bordaleses e Syrah. Sub-regiões Waiheke Island, Kumeu e Matakana.', ['Chardonnay', 'Syrah', 'Merlot'],
      [sub('Waiheke Island', 'GI (sub-região)', 'Oneroa, Waiheke Island, New Zealand', 'Ilha no golfo de Hauraki, exceção aos vales aluviais.', [], [], ''), sub('Kumeu', 'GI (sub-região)', 'Kumeu, New Zealand', 'Sub-região de Auckland.', [], [], '')])
  ];

  var countries = [
    { name: 'Nova Zelândia', sources: [NW],
      description: 'Clima sobretudo marítimo, com grande variação de norte a sul. Mais conhecida pelo Sauvignon Blanc de Marlborough e, cada vez mais, pelo Pinot Noir de clima frio (Marlborough, Martinborough, Central Otago, Waitaki). 329 milhões de litros de 39.935 ha (2020), dois terços de Sauvignon Blanc; ~90% exportado. Crescimento de 17% ao ano entre 2000 e 2020. Vinhas em vales aluviais de greywacke. Sistema de Indicações Geográficas desde 2017.' }
  ];

  return { code: 'NZ', version: 1, countries: countries, regions: regions, country_of: 'Nova Zelândia' };
})());
