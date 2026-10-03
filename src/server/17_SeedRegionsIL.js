/**
 * ENCICLOPÉDIA DE REGIÕES — pack ISRAEL (origem "pesquisado"). v1: 5 regiões vinícolas.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Israeli wine".
 * Contornos APROXIMADOS pelos distritos (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var IW = 'https://en.wikipedia.org/wiki/Israeli_wine';
  function sub(name, place, description, grapes, producers, wines) {
    return { name: name, classification: 'Sub-região', place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: IW };
  }
  function prod(name, labels) { return { name: name, labels: labels || '', src: IW }; }
  function region(name, geo, description, subs, producers) {
    return { name: name, geo: geo, sources: [IW], description: description, climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: producers || [], subregions: subs };
  }

  var regions = [
    region('Galileia (Galil)', 'IL:Galileia', 'A região mais adequada à viticultura: altitude, brisas frescas, grande amplitude térmica e solos ricos e bem drenados. Sub-regiões Golan, Alta e Baixa Galileia. O Golan tem alguns dos vinhedos mais altos do país (até 1.200 m), com neve no inverno.',
      [sub('Golan', 'Katzrin, Israel', 'Vinhedos de até 1.200 m, do mar da Galileia ao monte Hermon.', [],
        [prod('Golan Heights Winery', 'Yarden, Gamla/Gilgal, Golan; premiada nos anos 1990'), prod('Château Golan'), prod('Bazelet Hagolan')], 'Yarden'),
       sub('Alta Galileia', 'Kafr Yasif, Israel', 'Sub-região da Galileia.', [], [prod('Ashkar Winery', 'vinícola árabe cristã, não kosher'), prod('Jascala Winery', 'Jish; vinícola árabe cristã, não kosher')], ''),
       sub('Baixa Galileia (Monte Tabor)', 'Kfar Tavor, Israel', 'Sub-região com solos de terra rossa perto do monte Tabor.', [], [prod('Tabor')], '')]),
    region('Sharon (Shomron)', 'IL:Sharon', 'Planície perto do Mediterrâneo, ao sul de Haifa, em torno de Zichron Ya\'akov e Binyamina: a maior área de cultivo de uva de Israel.',
      [sub('Zichron Ya\'akov', 'Zikhron Ya\'akov, Israel', 'Sede histórica da Carmel (1882); solos cinzentos do monte Carmel a Zichron Ya\'akov.', [],
        [prod('Carmel Winery', 'fundada em 1882 com o barão Edmond de Rothschild; a maior produtora do país; primeiro vinho de mesa seco israelense'), prod('Binyamina Wine Cellar')], '')]),
    region('Colinas da Judeia', 'IL:Judeia', 'Em torno de Jerusalém; solos de terra rossa.',
      [sub('Colinas da Judeia', 'Beit Shemesh, Israel', 'Vinhedos em torno de Jerusalém.', [], [], '')]),
    region('Samson (Shimshon)', 'IL:Samson', 'Entre as Colinas da Judeia e a planície costeira.',
      [sub('Samson', 'Rishon LeZion, Israel', 'A Carmel também teve vinhedos e adega em Rishon LeZion.', [], [], '')]),
    region('Negev', 'IL:Negev', 'Região semiárida do deserto onde a irrigação por gotejamento tornou o cultivo possível.',
      [sub('Negev', 'Mitzpe Ramon, Israel', 'Vinhedos no deserto, com irrigação por gotejamento.', [], [], '')])
  ];

  var countries = [
    { name: 'Israel', sources: [IW],
      description: 'Vinho na Terra de Israel desde os tempos bíblicos; exportado a Roma, quase extinto sob domínio muçulmano e reavivado pelos cruzados. A indústria moderna foi fundada pelo barão Edmond de Rothschild (Château Lafite-Rothschild), que ajudou a criar a Carmel em 1882. Hoje ~300 vinícolas e 5.000 ha (2012); Carmel, Barkan e Golan Heights têm mais de 80% do mercado interno. Clima mediterrâneo: verão seco (irrigação por gotejamento essencial) e inverno chuvoso. Uvas sobretudo francesas: Cabernet, Chardonnay, Merlot, Sauvignon Blanc. Quase todos os grandes produtores têm certificação kosher.' }
  ];

  return { code: 'IL', version: 1, countries: countries, regions: regions, country_of: 'Israel' };
})());
