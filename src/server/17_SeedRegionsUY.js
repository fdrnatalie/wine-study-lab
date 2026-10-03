/**
 * ENCICLOPÉDIA DE REGIÕES — pack URUGUAI (origem "pesquisado"). v1: 4 zonas vitivinícolas.
 * Pesquisa de 03/10/2026 na Wikipedia: "Uruguayan wine" (inglês), "Vino de Uruguay" (espanhol).
 * Contornos pelos departamentos (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var UW = 'https://en.wikipedia.org/wiki/Uruguayan_wine', ES = 'https://es.wikipedia.org/wiki/Vino_de_Uruguay';
  function sub(name, place, description, grapes, wines, src) {
    return { name: name, classification: 'Departamento', place: place, description: description,
      grapes: grapes || [], producers: [], notable_wines: wines || '', source: src || UW };
  }

  var regions = [
    { name: 'Zona Sul', geo: 'UY:Sul', sources: [ES, UW],
      description: '90% dos vinhedos do país, nas colinas ao norte de Montevidéu (Canelones, Montevidéu, San José). Clima de forte influência marítima e solo moderadamente profundo.', climate: 'Marítimo.', soils: 'Moderadamente profundos.', altitude: '',
      history: 'Francisco Vidiella plantou uvas europeias em Colón (hoje parte de Montevidéu); a primeira colheita, em 25/02/1883, deu origem à festa nacional da vindima.',
      grapes: ['Tannat', 'Merlot', 'Chardonnay', 'Albariño'], grapes_other: ['Cabernet Sauvignon', 'Sauvignon Blanc', 'Cabernet Franc'], notable_wines: 'Tannat', producers: [],
      subregions: [
        sub('Canelones', 'Canelones, Uruguay', 'Principal departamento vinícola, nas colinas ao norte de Montevidéu.', ['Tannat'], 'Tannat'),
        sub('Montevidéu', 'Montevideo, Uruguay', 'Vinhedos na área da capital (Colón, Carrasco), berço das uvas Vidiella (Folle Noire) e "borgoña" (Gamay).', []),
        sub('San José', 'San José de Mayo, Uruguay', 'Departamento vinícola do sul.', [])
      ] },

    { name: 'Zona Sudoeste e Litoral Sul', geo: 'UY:Sudoeste', sources: [ES],
      description: 'Influenciadas pelo rio Uruguai; ~5% dos vinhedos no Sudoeste. Solos mais profundos e muito bem drenados. As primeiras cepas espanholas foram plantadas no sudoeste.', climate: '', soils: 'Profundos e bem drenados.', altitude: '', history: '',
      grapes: ['Tannat'], grapes_other: ['Gewürztraminer'], notable_wines: '', producers: [],
      subregions: [sub('Colonia', 'Carmelo, Uruguay', 'Departamento vinícola do sudoeste; houve Gewürztraminer no oeste de Colonia no século XIX.', [], '', ES)] },

    { name: 'Zonas Norte e Nordeste', geo: 'UY:Norte', sources: [ES],
      description: 'Departamentos de Artigas, Salto e Rivera: clima mais quente e solos de textura leve. Aqui começou a vinicultura comercial: em 1870, Pascual Harriague plantou Tannat em 200 ha em La Caballada (Salto); a uva chegou a se chamar "Harriague".', climate: 'Mais quente.', soils: 'Textura leve.', altitude: '', history: '',
      grapes: ['Tannat'], grapes_other: [], notable_wines: 'Tannat (Harriague)', producers: [],
      subregions: [sub('Salto (La Caballada)', 'Salto, Uruguay', 'Onde Pascual Harriague iniciou o cultivo comercial do Tannat em 1870, com mudas trazidas de Concordia (Argentina).', ['Tannat'], '', ES)] },

    { name: 'Zona Sudeste', geo: 'UY:Sudeste', sources: [ES],
      description: 'Maldonado: no século XIX havia ali variedades francesas, espanholas e americanas.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Maldonado', 'Maldonado, Uruguay', 'Zona vinícola do sudeste.', [], '', ES)] }
  ];

  var countries = [
    { name: 'Uruguai', sources: [UW, ES],
      description: '102.964 t de uva de 9.023 ha (2023), quarto da América do Sul. Mais conhecido pelos tintos de Tannat (36% da vinifera), trazida em 1870 pelo basco Pascual Harriague; o Albariño, chegado em 1954 com imigrantes da Corunha, ganha atenção. Duas categorias: VCP (vinho de qualidade, só vinifera, garrafas até 75 cl) e VC (vinho comum, muitas vezes rosado, em garrafões). Clima temperado (média de 17 °C, ~1.055 mm de chuva), latitudes 30–35° S. Vinhedos em 15 dos 19 departamentos; INAVI desde 1987.' }
  ];

  return { code: 'UY', version: 1, countries: countries, regions: regions, country_of: 'Uruguai' };
})());
