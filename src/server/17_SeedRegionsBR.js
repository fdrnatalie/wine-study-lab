/**
 * ENCICLOPÉDIA DE REGIÕES — pack BRASIL (origem "pesquisado"). v1: 3 regiões.
 * Pesquisa de 03/10/2026 na Wikipedia: "Brazilian wine", "Serra Gaúcha" (inglês), "Vale dos Vinhedos" (português).
 * Contornos pelos estados (18_GeoWorld.js, Natural Earth): RS e SC exatos; Vale do São Francisco pelo estado de Pernambuco.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var BW = EN + 'Brazilian_wine';
  var VV = 'https://pt.wikipedia.org/wiki/Vale_dos_Vinhedos';
  function sub(name, classification, place, description, grapes, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: [], notable_wines: wines || '', source: src || BW };
  }

  var regions = [
    { name: 'Rio Grande do Sul', geo: 'BR:Rio Grande do Sul', sources: [BW, VV],
      description: 'Cerca de 90% do vinho brasileiro sai deste estado, entre os paralelos 28 e 34 S, latitude parecida com regiões da Argentina, Chile, África do Sul e Austrália. Quatro regiões: Serra Gaúcha (a mais antiga e importante, celebrada pelos espumantes), Campanha (pampa, na fronteira com Uruguai e Argentina), Serra do Sudeste e Campos de Cima da Serra.',
      climate: 'Temperado (subtropical).', soils: '', altitude: '',
      history: 'Jesuítas trouxeram videiras espanholas ao RS em 1626. Plantações de Isabella (labrusca) no litoral sul em 1840 são tidas como as primeiras bem-sucedidas do Brasil. A partir dos anos 1870, imigrantes italianos firmaram a vinha na Serra Gaúcha, sobretudo com uvas americanas; depois vieram uvas italianas e Tannat. Nos anos 1970, empresas como a Moët & Chandon trouxeram técnica e equipamentos.',
      grapes: ['Merlot', 'Chardonnay', 'Pinot Noir'], grapes_other: ['Riesling Italico', 'Cabernet Sauvignon', 'Cabernet Franc', 'Tannat', 'Isabella'],
      notable_wines: 'Espumantes da Serra Gaúcha; Merlot do Vale dos Vinhedos', producers: [],
      subregions: [
        sub('Vale dos Vinhedos', 'DO (2012)', 'Bento Gonçalves, Rio Grande do Sul, Brazil', '82 km² na Serra Gaúcha, entre Bento Gonçalves, Monte Belo do Sul e Garibaldi, a 120 km de Porto Alegre. A primeira Indicação de Procedência (2002) e a primeira Denominação de Origem (2012) de vinhos do Brasil. DO: Merlot como uva emblemática (varietal com 85%; cortes tintos com 60% de Merlot e Cabernet Sauvignon, Cabernet Franc, Tannat); Chardonnay nos brancos (com Riesling Itálico); espumantes só pelo método tradicional, com Chardonnay e/ou Pinot Noir. Sem chaptalização nem chips de madeira. Legado dos imigrantes italianos chegados em 1875–76; mais de 450 mil visitantes por ano.',
          ['Merlot', 'Chardonnay', 'Pinot Noir', 'Riesling Italico', 'Cabernet Sauvignon', 'Cabernet Franc', 'Tannat'], 'Merlot e espumante do Vale dos Vinhedos', VV),
        sub('Serra Gaúcha', 'Região', 'Garibaldi, Rio Grande do Sul, Brazil', 'Região serrana do nordeste do RS, de colonização alemã e italiana, com a Rota da Uva e do Vinho; a principal e mais antiga região vinícola do Brasil, celebrada pelos espumantes. Cidades: Bento Gonçalves, Garibaldi, Caxias do Sul, Flores da Cunha, Farroupilha.', ['Chardonnay', 'Pinot Noir'], 'Espumantes', EN + 'Serra_Gaúcha'),
        sub('Campanha Gaúcha', 'Região', 'Santana do Livramento, Rio Grande do Sul, Brazil', 'Região do pampa, na fronteira com Uruguai e Argentina.', [], ''),
        sub('Serra do Sudeste', 'Região', 'Encruzilhada do Sul, Rio Grande do Sul, Brazil', 'Uma das quatro regiões vinícolas do RS.', [], ''),
        sub('Campos de Cima da Serra', 'Região', 'Vacaria, Rio Grande do Sul, Brazil', 'Uma das quatro regiões vinícolas do RS.', [], '')
      ] },

    { name: 'Santa Catarina', geo: 'BR:Santa Catarina', sources: [BW],
      description: 'Estado vizinho ao RS, com viticultura em menor escala.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [], subregions: [
        sub('Santa Catarina', 'Área', 'São Joaquim, Santa Catarina, Brazil', 'Viticultura de menor escala no estado vizinho ao Rio Grande do Sul.', [], '')] },

    { name: 'Vale do São Francisco', geo: 'BR:São Francisco', sources: [BW],
      description: 'Pernambuco, clima semiárido quente: apesar da ideia de que a uva não serve para climas quentes, a vinicultura deu certo aqui, com a curiosidade de duas safras por ano.',
      climate: 'Semiárido quente.', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Petrolina', 'Área', 'Petrolina, Pernambuco, Brazil', 'Vinhos tropicais do Vale do São Francisco, com duas colheitas por ano.', [], '')] }
  ];

  var countries = [
    { name: 'Brasil', sources: [BW],
      description: 'Terceiro produtor da América Latina (depois de Argentina e Chile): 3,1 milhões de hl em 2018, um pouco mais que a Nova Zelândia; 15º do mundo em 2019. 82.000 ha de vinha (2018), mas muito para uva de mesa; os vinhos finos vêm da vinifera (só ~5.000 ha em 2003), o resto de uvas americanas e híbridas, mais fáceis de cultivar no clima brasileiro. As primeiras videiras chegaram com os portugueses em 1532, em São Paulo.' }
  ];

  return { code: 'BR', version: 1, countries: countries, regions: regions, country_of: 'Brasil' };
})());
