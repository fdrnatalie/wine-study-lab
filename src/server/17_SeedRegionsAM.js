/**
 * ENCICLOPÉDIA DE REGIÕES — pack ARMÊNIA (origem "pesquisado"). v1: 6 províncias vinícolas.
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Armenian wine", "Areni-1 winery".
 * Contornos EXATOS das províncias (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var AW = EN + 'Armenian_wine';
  function sub(name, place, description, grapes, producers, wines, src) {
    return { name: name, classification: 'Área', place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || AW };
  }
  function prod(name, labels) { return { name: name, labels: labels || '', src: AW }; }

  var regions = [
    { name: 'Vayots Dzor', geo: 'AM:Vayots Dzor', sources: [AW, EN + 'Areni-1_winery'],
      description: 'Uma das regiões vinícolas antigas do Cáucaso. O vinho dos vinhedos de Vayots Dzor, sobretudo da área de Areni, é chamado vinho Areni; festival do vinho de Areni desde 2009.',
      climate: '', soils: '', altitude: '',
      history: 'Na caverna Areni-1, perto da vila de Areni, foi descoberta em 2007 a vinícola mais antiga conhecida do mundo (~4100–4000 a.C.), com sementes de Vitis vinifera já domesticada; ali também se achou o sapato de couro mais antigo do mundo.',
      grapes: ['Areni', 'Voskehat'], grapes_other: [], notable_wines: 'Areni Noir; Zorah Karasi', producers: [],
      subregions: [
        sub('Areni', 'Areni, Armenia', 'Vila da caverna Areni-1 e centro do vinho tinto de Areni.', ['Areni', 'Voskehat'],
          [prod('Areni Wine Factory', 'Vayots Dzor; Lernashen; St. Etchmiadzin (1994)'), prod('Areni Vineyards', 'Hin Areni; Trinity (2007)')], 'Areni Noir', EN + 'Areni-1_winery'),
        sub('Rind', 'Rind, Armenia', 'Vila da Zorah Wines, cujo Karasi Areni Noir 2010 entrou no top 10 da Bloomberg em 2012.', ['Areni'], [prod('Zorah Wines', 'Karasi; Voski; Yeraz')], 'Zorah Karasi Areni Noir'),
        sub('Yeghegnadzor', 'Yeghegnadzor, Armenia', 'Sede de vinícolas de Areni tinto e Voskehat branco.', ['Areni', 'Voskehat'], [prod('Old Bridge Winery', 'Areni e Voskehat (1998)'), prod('Getnatoun Winery', '1999')], '')
      ] },

    { name: 'Ararat', geo: 'AM:Ararat', sources: [AW],
      description: 'Vinho sobretudo dos vinhedos da planície do Ararat; muitas destilarias de conhaque armênio.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Areni'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Planície do Ararat (Vedi)', 'Vedi, Armenia', 'Vinícolas da planície do Ararat.', ['Areni'], [prod('Vedi Alco', 'Areni, Kagor, Muscat, Saperavi (1956)'), prod('Ararat Wine Factory', '1903')], '')] },

    { name: 'Armavir', geo: 'AM:Armavir', sources: [AW],
      description: 'Vinho dos vinhedos da planície do Ararat. A antiga cidade de Argishtikhinili (século VIII a.C.) era grande centro de vinho.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Vagharshapat (Echmiadzin)', 'Vagharshapat, Armenia', 'Vinícolas históricas e novas perto de Echmiadzin.', [],
        [prod('Karas Wines (Tierras de Armenia)', 'Arevadasht (2003)'), prod('Voskeni Wines', 'Araks (2008)'), prod('Alluria Wines', 'Vagharshapat (2016)')], '')] },

    { name: 'Aragatsotn', geo: 'AM:Aragatsotn', sources: [AW],
      description: 'Vinhedos ao sul dos montes Aragats e Arteni. A vila de Voskevaz tem longa história: karases (ânforas de barro) do século VII foram achados perto da igreja de Surp Hovhannes.', climate: '', soils: '', altitude: '',
      history: 'O Ashtarak, produzido também em Oshakan e Voskevaz, foi o primeiro vinho tipo jerez da Armênia soviética.',
      grapes: ['Voskehat', 'Areni'], grapes_other: [], notable_wines: 'Voskevaz Areni Noir', producers: [],
      subregions: [sub('Voskevaz', 'Voskevaz, Armenia', 'Vila vinícola histórica.', ['Voskehat', 'Areni'], [prod('Voskevaz Winery', 'Vanakan, Urzana, Voskehat, Areni Noir (1932)')], '')] },

    { name: 'Tavush', geo: 'AM:Tavush', sources: [AW],
      description: 'Vinho do vale do rio Aghstev; viticultura moderna desde os anos 1950. A vinícola de Ijevan é famosa pelo vinho de romã.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: 'Vinho de romã de Ijevan', producers: [],
      subregions: [sub('Ijevan', 'Ijevan, Armenia', 'Vale do Aghstev.', [], [prod('Ijevan Wine-Brandy Factory', 'Sargon, Ijevan, Khachkar (1951)')], '')] },

    { name: 'Kotayk', geo: 'AM:Kotayk', sources: [AW],
      description: 'Província ao norte de Yerevan com vinícolas de vinho e conhaque.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Yeghvard', 'Yeghvard, Armenia', 'Vinícolas de vinho e conhaque.', [], [prod('Yeghvard Wine-Brandy Factory', '1966'), prod('Helias Vineyards', 'Dzoraghbyur (2013)')], '')] }
  ];

  var countries = [
    { name: 'Armênia', sources: [AW],
      description: 'Uma das regiões vinícolas mais antigas do mundo: a vinícola da caverna Areni-1 (~4100 a.C.) é o mais antigo local de produção de vinho conhecido. Xenofonte (401–400 a.C.) descreve vinho guardado em karases (ânforas de barro). Na era soviética, muito vinho virou granel, conhaque ou vinho tipo jerez; desde então a qualidade e o reconhecimento cresceram. Uvas nativas: Areni (tinta), Voskehat e Chilar (brancas).' }
  ];

  return { code: 'AM', version: 1, countries: countries, regions: regions, country_of: 'Armênia' };
})());
