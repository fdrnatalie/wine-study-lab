/**
 * ENCICLOPÉDIA DE REGIÕES — pack CANADÁ (origem "pesquisado"). v1: 4 províncias.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Canadian wine", "Okanagan Valley (wine region)", "Ice wine".
 * Contornos EXATOS das províncias (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var CW = EN + 'Canadian_wine', IW = EN + 'Ice_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || CW };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Ontário', geo: 'CA:Ontario', sources: [CW, IW],
      description: 'Dois terços das vinhas do Canadá (6.900 ha, 150 vinhedos) e 62% do vinho (2015). Mais de 90% do icewine canadense; três áreas VQA: Niagara Peninsula (dez sub-denominações), Prince Edward County e Lake Erie North Shore. Foco em Chardonnay, Riesling, Pinot Noir e Cabernet Franc.',
      climate: 'Invernos que congelam com regularidade, o que permite o icewine todos os anos.', soils: '', altitude: '',
      history: 'A primeira vinícola comercial do Canadá abriu em Pelee Island, Ontário, em 1866.',
      grapes: ['Chardonnay', 'Riesling', 'Pinot Noir', 'Cabernet Franc'], grapes_other: ['Vidal'], notable_wines: 'Icewine de Vidal e Riesling',
      producers: [prod('Pelee Island Winery', 'Pelee Island; primeira vinícola comercial do Canadá (1866)', CW)],
      subregions: [
        sub('Niagara Peninsula', 'VQA', 'Niagara-on-the-Lake, Ontario, Canada', 'A principal área de Ontário, com dez sub-denominações. Em 1984 a Inniskillin fez o primeiro icewine comercial do Canadá, com Vidal protegida por redes contra os pássaros (Karl Kaiser). Icewine exige no mínimo 35° Brix, bem mais que o Eiswein alemão.', ['Vidal', 'Riesling', 'Cabernet Franc'],
          [prod('Inniskillin', 'primeiro icewine comercial do Canadá (1984)', IW), prod('Reif Estate Winery', '', IW), prod('Hillebrand', '', IW)], 'Icewine', IW),
        sub('Prince Edward County', 'VQA', 'Picton, Ontario, Canada', 'Área VQA de Ontário.', [], [], ''),
        sub('Lake Erie North Shore', 'VQA', 'Kingsville, Ontario, Canada', 'Área VQA na margem norte do lago Erie.', [], [], '')
      ] },

    { name: 'Colúmbia Britânica', geo: 'CA:British Columbia', sources: [CW, EN + 'Okanagan_Valley_(wine_region)'],
      description: 'Segunda província produtora (33%): 240 vinícolas e 4.152 ha, quase só vinifera (Chardonnay, Merlot, Pinot Gris, Pinot Noir). Cinco áreas VQA: Okanagan Valley, Similkameen Valley, Fraser Valley, Vancouver Island e Gulf Islands.',
      climate: '', soils: '', altitude: '', history: 'O primeiro icewine do Canadá foi feito no Okanagan pelo imigrante alemão Walter Hainle em 1972, depois de uma geada precoce.',
      grapes: ['Chardonnay', 'Merlot', 'Pinot Gris', 'Pinot Noir'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Okanagan Valley', 'VQA', 'Oliver, British Columbia, Canada', 'Segunda área vinícola do Canadá: com o Similkameen, ~3.500 ha e mais de 80% do vinho da província; 182 vinícolas (2018) ao longo do lago Okanagan (135 km) e dos lagos Skaha, Vaseux e Osoyoos. De 49° a 50° N, a latitude de Champagne e do Rheingau. Clima continental moderado pelos lagos, na sombra de chuva das Cascades (250–400 mm): quase tudo é irrigado; frios de até −25 °C. Mais de 60 uvas: Merlot, Cabernet, Pinot Noir, Pinot Gris, Chardonnay, Riesling, Gewürztraminer e, recentemente, Syrah, Malbec, Zinfandel.', ['Merlot', 'Pinot Gris', 'Pinot Noir', 'Chardonnay', 'Cabernet Sauvignon'],
          [prod('Hainle Vineyards (Walter Hainle)', 'primeiro icewine do Canadá (1972)', IW)], 'Icewine; Merlot', EN + 'Okanagan_Valley_(wine_region)'),
        sub('Similkameen Valley', 'VQA', 'Keremeos, British Columbia, Canada', 'Área VQA vizinha do Okanagan.', [], [], ''),
        sub('Vancouver Island', 'VQA', 'Duncan, British Columbia, Canada', 'Área VQA da ilha de Vancouver.', [], [], '')
      ] },

    { name: 'Quebec', geo: 'CA:Quebec', sources: [CW],
      description: '138 vinícolas e 808 ha, sobretudo ao norte e a sudeste de Montreal e em torno da cidade de Quebec. A província é a maior consumidora de vinho do Canadá (23 L por pessoa/ano em 2015).', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: 'Icewine', producers: [],
      subregions: [sub('Sudeste de Montreal', 'Área', 'Dunham, Quebec, Canada', 'Uma das áreas de vinhas do Quebec, a sudeste de Montreal.', [], [], '')] },

    { name: 'Nova Escócia', geo: 'CA:Nova Scotia', sources: [CW],
      description: '20 vinícolas e 290 ha, nas margens do Estreito de Northumberland e no Annapolis Valley; a maioria se especializa em espumantes.', climate: '', soils: '', altitude: '',
      history: 'Em 1611, Louis Hébert plantou um vinhedo perto de Bear River, Nova Escócia; as vinifera não vingaram e os colonos passaram a labrusca, riparia e híbridos.',
      grapes: [], grapes_other: [], notable_wines: 'Espumantes', producers: [],
      subregions: [sub('Annapolis Valley', 'Área', 'Wolfville, Nova Scotia, Canada', 'Uma das áreas vinícolas da província, voltada a espumantes.', [], [], '')] }
  ];

  var countries = [
    { name: 'Canadá', sources: [CW],
      description: 'Produção concentrada em Ontário e na Colúmbia Britânica; 548 vinícolas e 12.150 ha (2015), 56,2 milhões de litros. O Canadá é o maior produtor de icewine do mundo, mais que todos os outros países juntos. Vinho canadense tem menos da metade do mercado interno. Rótulo "International Domestic Blend" indica vinho feito com mosto importado, prática criticada. Mercado dominado por Arterra Wines Canada e Andrew Peller.' }
  ];

  return { code: 'CA', version: 1, countries: countries, regions: regions, country_of: 'Canadá' };
})());
