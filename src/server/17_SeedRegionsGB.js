/**
 * ENCICLOPÉDIA DE REGIÕES — pack REINO UNIDO, sob o país "Inglaterra" da planilha (origem "pesquisado").
 * v1: Inglaterra e País de Gales. Pesquisa de 28/09/2026 na Wikipedia (inglês): "Wine from the United Kingdom", "Nyetimber".
 * Contornos EXATOS de Inglaterra e País de Gales (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var UK = EN + 'Wine_from_the_United_Kingdom';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Inglaterra', geo: 'GB:England', sources: [UK],
      description: 'Mais de 1.100 vinhedos comerciais, sobretudo no sul, e a maior parte é espumante inglês de método tradicional com Chardonnay, Pinot Noir e Pinot Meunier. Condados secos e quentes como Sussex, Kent e Essex concentram o plantio; o vinhedo comercial mais ao norte fica perto de Malton, Yorkshire. "English wine" é PDO (uvas da Inglaterra, até 220 m de altitude) e "English regional wine" é PGI. Em 2004, um painel de espumantes europeus deu a maioria das dez primeiras posições a vinhos ingleses.',
      climate: 'Temperado, perto do limite da viticultura (acima de 49,9° N): dias longos, poucos dias acima de 30 °C, grande amplitude térmica; só ~2 anos em 10 são realmente bons.', soils: '', altitude: 'até 220 m (PDO)',
      history: 'Os romanos trouxeram a vinha; o Domesday Book lista mais de 40 vinhedos. Em 1509, na coroação de Henrique VIII, havia 139 vinhedos. O corte de impostos sobre vinhos importados (1860) e a Primeira Guerra quase acabaram com a produção. Pequenos vinhedos comerciais nos anos 1960 e renascimento a partir dos anos 1970, primeiro com brancos doces ao estilo alemão.',
      grapes: ['Chardonnay', 'Pinot Noir', 'Pinot Meunier', 'Bacchus'], grapes_other: ['Seyval Blanc', 'Reichensteiner', 'Müller-Thurgau', 'Madeleine Angevine', 'Ortega', 'Dornfelder'],
      notable_wines: 'Espumante inglês (método tradicional); Sussex PDO', producers: [],
      subregions: [
        sub('Sussex', 'PDO', 'Pulborough, West Sussex, United Kingdom', 'Denominação protegida (no Reino Unido) para vinhos de uvas de Sussex, sobretudo Chardonnay, Pinot Noir e Pinot Meunier; tranquilos e espumantes; rendimento normal de 12 t/ha.',
          ['Chardonnay', 'Pinot Noir', 'Pinot Meunier'],
          [prod('Nyetimber', '11 vinhedos (425 ha) em West Sussex, Kent e Hampshire; primeiro a plantar só as três uvas do espumante (1988); Blanc de Blancs 2016 Magnum, campeão do IWC 2025', EN + 'Nyetimber')], 'Sussex sparkling', UK),
        sub('Kent', 'Condado', 'Tenterden, Kent, United Kingdom', 'Condado seco e quente, com muitos vinhedos.', ['Chardonnay', 'Pinot Noir'],
          [prod('Chapel Down', 'a maior vinícola da Inglaterra em produção (2018)', UK)], '', UK),
        sub('Surrey', 'Condado', 'Dorking, Surrey, United Kingdom', 'Sede do Denbies Wine Estate, o maior vinhedo da Inglaterra em área (107 ha).', [],
          [prod('Denbies Wine Estate', '107 ha, o maior vinhedo inglês em área', UK)], '', UK),
        sub('Hampshire', 'Condado', 'Winchester, Hampshire, United Kingdom', 'Um dos condados que o aquecimento tornou quentes e secos o bastante para uvas de qualidade.', [], [], '', UK),
        sub('Essex', 'Condado', 'Colchester, Essex, United Kingdom', 'Condado seco e quente onde os vinhedos se multiplicam.', [], [], '', UK)
      ] },

    { name: 'País de Gales', geo: 'GB:Wales', sources: [UK],
      description: 'Vinhedos plantados pelos romanos; os modernos começaram nos anos 1970 no sul de Gales. 20 vinhedos em 2005 (100.000 garrafas, sobretudo brancos), 22 em 2015 e 48 em 2024. "Welsh wine" é PDO (uvas até 220 m) e "Welsh regional wine" é PGI (mínimo 85% de uvas galesas).',
      climate: '', soils: '', altitude: 'até 220 m (PDO)', history: '',
      grapes: [], grapes_other: [], notable_wines: 'Welsh wine PDO', producers: [],
      subregions: [
        sub('Sul de Gales', 'Área', 'Usk, Monmouthshire, United Kingdom', 'Onde os vinhedos galeses modernos foram plantados, nos anos 1970.', [], [], '', UK)
      ] }
  ];

  var countries = [
    { name: 'Inglaterra', sources: [UK],
      description: 'Reino Unido: grande consumidor e pequeno produtor. Verões mais quentes e uvas adaptadas trouxeram investimento, sobretudo em espumantes de método tradicional no sul da Inglaterra. Produção recorde de 21,6 milhões de garrafas em 2023 (10,7 milhões em 2024, safra difícil). Categorias: PDO (English wine, Welsh wine, Sussex), PGI e vinho varietal. "British wine" não é vinho de uva fresca: é feito com mosto ou concentrado importado.' }
  ];

  return { code: 'GB', version: 1, countries: countries, regions: regions, country_of: 'Inglaterra' };
})());
