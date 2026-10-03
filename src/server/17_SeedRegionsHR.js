/**
 * ENCICLOPÉDIA DE REGIÕES — pack CROÁCIA (origem "pesquisado"). v1: 4 regiões (as 3 oficiais, com a costeira dividida
 * em Ístria/Kvarner e Dalmácia, como faz a fonte). Pesquisa de 28/09/2026 na Wikipedia (inglês): "Croatian wine", "Plavac Mali".
 * Contornos APROXIMADOS pelos condados (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var CW = EN + 'Croatian_wine';
  function sub(name, classification, place, description, grapes, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: [], notable_wines: wines || '', source: src || CW };
  }

  var regions = [
    { name: 'Eslavônia e Danúbio croata', geo: 'HR:Eslavônia', sources: [CW],
      description: 'Região continental oriental (Istočna kontinentalna): planície entre o Danúbio, o Drava e o Sava, com vinhas nas colinas baixas. Brancos, sobretudo de Graševina (Riesling Italico), leves, frescos e levemente aromáticos. Osijek-Baranja e Vukovar-Srijem estão entre os três condados que fazem mais da metade do vinho croata. Aqui ficam as florestas de carvalho da Eslavônia, cujas barricas são muito usadas na Europa.',
      climate: 'Continental: invernos frios e verões quentes.', soils: '', altitude: '', history: '',
      grapes: ['Riesling Italico'], grapes_other: [], notable_wines: 'Graševina', producers: [],
      subregions: [
        sub('Eslavônia', 'Sub-região', 'Kutjevo, Croatia', 'A área mais conhecida da região oriental; Graševina é a uva mais plantada.', ['Riesling Italico'], 'Graševina'),
        sub('Podunavlje (Danúbio croata)', 'Sub-região', 'Ilok, Croatia', 'O Danúbio croata, parte da região oriental; vinhas nas colinas baixas.', ['Riesling Italico'], '')
      ] },

    { name: 'Croácia continental ocidental', geo: 'HR:Ocidental', sources: [CW],
      description: 'Região continental ocidental (Zapadna kontinentalna), nas terras altas: colinas onduladas e clima fresco, com invernos muito frios. Vinhas inclinadas garantem sol e vento; os brancos têm aromas intensos e acidez alta.',
      climate: 'Fresco, invernos muito frios.', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Terras altas do noroeste', 'Área', 'Varaždin, Croatia', 'Terras altas do noroeste croata, de brancos aromáticos e ácidos.', [], '')
      ] },

    { name: 'Ístria e Kvarner', geo: 'HR:Ístria', sources: [CW],
      description: 'Norte da costa: o calor do Mediterrâneo encontra o frio dos Alpes, clima mais fresco que o da Dalmácia. Terra vermelha rica em óxidos de ferro. Brancos secos e frutados, sobretudo de Malvazija (Malvasia Istriana), e tintos secos e potentes de Teran. A Ístria tinha 44.000 ha no fim do século XIX; após a filoxera, hoje tem ~4.000 ha. Estilo próximo ao da Itália vizinha.',
      climate: 'Mediterrâneo com influência alpina.', soils: 'Terra vermelha rica em ferro.', altitude: '', history: '',
      grapes: ['Malvasia Istriana', 'Teran'], grapes_other: [], notable_wines: 'Malvazija Istarska; Teran', producers: [],
      subregions: [
        sub('Ístria', 'Sub-região', 'Poreč, Croatia', 'Uma das regiões vinícolas mais antigas da Europa; relevo de colinas e costa longa, com muitos microclimas.', ['Malvasia Istriana', 'Teran'], 'Malvazija; Teran')
      ] },

    { name: 'Dalmácia', geo: 'HR:Dalmácia', sources: [CW, EN + 'Plavac_Mali'],
      description: 'Costa e ilhas do sul: paisagem rochosa e cárstica, encostas às vezes íngremes, pouca chuva e muito sol; o terroir é decisivo. Muitas uvas nativas; a mais famosa é a Plavac Mali, filha de Zinfandel (Crljenak Kaštelanski) e Dobričić, que dá tintos de álcool alto (até 17%) e taninos, com notas de alfarroba, figo, sálvia e cereja escura. Ali os gregos plantaram vinha há 2.500 anos (Vis, Hvar, Korčula).',
      climate: 'Mediterrâneo: verões quentes e úmidos, invernos amenos; bolsões alpinos nos Alpes Dináricos.', soils: 'Carste.', altitude: '',
      history: 'Um estatuto de Korčula de 1214 já protegia as vinhas. Mike Grgich, enólogo croata do Napa, defendeu a ligação da Plavac Mali com a Zinfandel; o DNA mostrou que a Plavac Mali é filha da Zinfandel.',
      grapes: ['Plavac Mali'], grapes_other: ['Primitivo'], notable_wines: 'Dingač e Postup (Pelješac); Plavac de Hvar, Brač e Vis; rosé Opol', producers: [],
      subregions: [
        sub('Pelješac (Dingač e Postup)', 'Vinhedos', 'Potomje, Croatia', 'Tintos de Plavac Mali dos vinhedos de Dingač e Postup, na península de Pelješac.', ['Plavac Mali'], 'Dingač; Postup', EN + 'Plavac_Mali'),
        sub('Hvar', 'Ilha', 'Hvar, Croatia', 'Ilha de viticultura grega antiga; tintos de Plavac Mali.', ['Plavac Mali'], '', EN + 'Plavac_Mali'),
        sub('Brač', 'Ilha', 'Bol, Croatia', 'Tintos de Plavac Mali.', ['Plavac Mali'], '', EN + 'Plavac_Mali'),
        sub('Vis', 'Ilha', 'Vis, Croatia', 'Ilha elogiada pelo escritor grego Ateneu pelos vinhos; Plavac Mali.', ['Plavac Mali'], '', CW),
        sub('Korčula', 'Ilha', 'Korčula, Croatia', 'Ilha de viticultura grega; estatuto de 1214 com regras de proteção às vinhas.', [], '', CW),
        sub('Konavle', 'Área', 'Cavtat, Croatia', 'Área dálmata citada entre as de Plavac Mali.', ['Plavac Mali'], '', EN + 'Plavac_Mali')
      ] }
  ];

  var countries = [
    { name: 'Croácia', sources: [CW],
      description: 'Vinho desde os colonos gregos, há ~2.500 anos, nas ilhas dálmatas. Mais de 300 áreas geográficas definidas e classificação ao estilo da UE. 67% é branco, feito sobretudo no interior; 32% tinto, sobretudo na costa. Três grandes regiões: continental oriental, continental ocidental e costeira (Ístria/Kvarner e Dalmácia). Costume de diluir o vinho: gemišt (branco com água com gás) e bevanda (tinto com água).' }
  ];

  return { code: 'HR', version: 1, countries: countries, regions: regions, country_of: 'Croácia' };
})());
