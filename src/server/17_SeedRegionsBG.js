/**
 * ENCICLOPÉDIA DE REGIÕES — pack BULGÁRIA (origem "pesquisado"). v1: as 5 regiões vitícolas (decreto de 13/07/1960).
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Bulgarian wine".
 * Contornos APROXIMADOS pelas províncias (18_GeoEurope.js, Natural Earth); o Vale das Rosas, estreito, fica só com ponto.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var BW = 'https://en.wikipedia.org/wiki/Bulgarian_wine';
  function sub(name, place, description, grapes, wines) {
    return { name: name, classification: 'Área', place: place, description: description,
      grapes: grapes || [], producers: [], notable_wines: wines || '', source: BW };
  }

  var regions = [
    { name: 'Planície do Danúbio (Norte)', geo: 'BG:Danúbio', sources: [BW],
      description: 'Margem sul do Danúbio e partes central e ocidental da planície. Nos EUA, a denominação aprovada é "Danube River Plains".',
      climate: 'Temperado continental, verão quente e muitos dias de sol.', soils: '', altitude: '', history: '',
      grapes: ['Gamza', 'Muscat Ottonel', 'Cabernet Sauvignon', 'Merlot'], grapes_other: ['Chardonnay', 'Aligoté', 'Pamid'], notable_wines: 'Gamza', producers: [],
      subregions: [sub('Planície central do Danúbio', 'Pleven, Bulgaria', 'Coração da região norte, com a uva local Gamza.', ['Gamza'], '')] },

    { name: 'Mar Negro (Leste)', geo: 'BG:Mar Negro', sources: [BW],
      description: '30% das vinhas do país e 53% das uvas brancas. Outonos longos e amenos favorecem o acúmulo de açúcar para brancos finos. Nos EUA: "Black Sea Coastal".',
      climate: 'Outonos longos e amenos.', soils: '', altitude: '', history: '',
      grapes: ['Dimyat', 'Riesling', 'Muscat Ottonel', 'Sauvignon Blanc'], grapes_other: ['Ugni Blanc', 'Traminer', 'Gewürztraminer'], notable_wines: 'Brancos da costa', producers: [],
      subregions: [sub('Costa do Mar Negro', 'Varna, Bulgaria', 'Brancos de Dimyat, Riesling, Muscat Ottonel e Sauvignon Blanc.', ['Dimyat'], '')] },

    { name: 'Vale das Rosas (Sub-Bálcãs)', geo: 'BG:Rosas', sources: [BW],
      description: 'Ao sul dos montes Bálcãs, dividido em parte leste e oeste. Sobretudo brancos secos e meio-secos, menos tintos. Nos EUA: "Valley of the Roses".',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Riesling', 'Rkatsiteli', 'Misket Vermelho'], grapes_other: ['Cabernet Sauvignon', 'Merlot'], notable_wines: 'Misket de Sungurlare', producers: [],
      subregions: [sub('Vale de Sungurlare', 'Sungurlare, Bulgaria', 'Famoso pelo vinho da uva Misket Vermelho (Red Misket).', ['Misket Vermelho'], 'Misket de Sungurlare')] },

    { name: 'Planície Trácia (Sul)', geo: 'BG:Trácia', sources: [BW],
      description: 'Centro da planície da Alta Trácia e partes do monte Sakar: região de tintos. Os Bálcãs bloqueiam os ventos frios da Rússia; o vale do Maritsa tem clima mediterrâneo. Casa do Mavrud, tinto local famoso. Nos EUA: "Thracian Valley".',
      climate: 'Temperado continental com chuva bem distribuída; mediterrâneo no vale do Maritsa.', soils: '', altitude: '', history: '',
      grapes: ['Mavrud', 'Merlot', 'Cabernet Sauvignon'], grapes_other: ['Pamid'], notable_wines: 'Mavrud', producers: [],
      subregions: [sub('Alta Trácia', 'Plovdiv, Bulgaria', 'Planície da Alta Trácia, terra do Mavrud.', ['Mavrud'], 'Mavrud')] },

    { name: 'Vale do Struma (Sudoeste)', geo: 'BG:Struma', sources: [BW],
      description: 'Sudoeste, vale do rio Struma, na Macedônia histórica: área pequena mas de clima muito próprio, com forte influência mediterrânea do sul.',
      climate: 'Forte influência mediterrânea.', soils: '', altitude: '', history: '',
      grapes: ['Shiroka Melnishka', 'Cabernet Sauvignon', 'Merlot'], grapes_other: [], notable_wines: 'Shiroka Melnishka', producers: [],
      subregions: [sub('Melnik', 'Melnik, Bulgaria', 'Dá nome ao vinho local Shiroka Melnishka.', ['Shiroka Melnishka'], 'Shiroka Melnishka')] }
  ];

  var countries = [
    { name: 'Bulgária', sources: [BW],
      description: 'Tradição vinícola desde os trácios, com evidências de ~4000 a.C. O vinho é, com a cerveja e a rakia de uva, das bebidas mais populares. Um decreto de 13 de julho de 1960 dividiu o país em cinco regiões vitícolas: Planície do Danúbio, Mar Negro, Vale das Rosas, Planície Trácia e Vale do Struma. Uvas locais: Mavrud, Gamza, Pamid, Dimyat, Misket Vermelho, Shiroka Melnishka.' }
  ];

  return { code: 'BG', version: 1, countries: countries, regions: regions, country_of: 'Bulgária' };
})());
