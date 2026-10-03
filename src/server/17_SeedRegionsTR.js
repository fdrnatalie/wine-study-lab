/**
 * ENCICLOPÉDIA DE REGIÕES — pack TURQUIA (origem "pesquisado"). v1: 5 regiões.
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Turkish wine".
 * Contornos APROXIMADOS pelas províncias (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var TW = 'https://en.wikipedia.org/wiki/Turkish_wine';
  function sub(name, place, description, grapes, producers, wines) {
    return { name: name, classification: 'Área', place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: TW };
  }
  function prod(name, labels) { return { name: name, labels: labels || '', src: TW }; }

  var regions = [
    { name: 'Trácia e Mármara', geo: 'TR:Trácia', sources: [TW],
      description: 'Noroeste: 30–40% do vinho turco. Clima marítimo, moderado pelo Egeu, o Mármara e o Mar Negro. Centros: Kırklareli, Tekirdağ, Şarköy e a península de Gelibolu. Cabernet Sauvignon e Merlot ao lado da tinta nativa Papazkarası; a branca Yapıncak sobrevive em Şarköy. A Rota do Vinho da Trácia é a mais visitada, pela proximidade de Istambul.',
      climate: 'Marítimo.', soils: '', altitude: '',
      history: 'Atatürk mandou criar uma vinícola estatal em Tekirdağ em 1925.',
      grapes: ['Papazkarası', 'Cabernet Sauvignon', 'Merlot'], grapes_other: ['Yapıncak'], notable_wines: '', producers: [prod('Doluca', 'Trácia, 1926; linha Sarafin, primeiro vinho turco de vinhedo único')],
      subregions: [
        sub('Şarköy', 'Şarköy, Tekirdağ, Turkey', 'Onde sobrevive a branca Yapıncak.', ['Yapıncak'], [prod('Kayra', 'vinícola em Şarköy; ex-divisão de vinho da estatal Tekel; Buzbağ')], ''),
        sub('Kırklareli', 'Kırklareli, Turkey', 'Centro vinícola da Trácia.', ['Papazkarası'], [prod('Arcadia'), prod('Barbare'), prod('Chamlija'), prod('Şato Kalpak')], '')
      ] },

    { name: 'Egeu', geo: 'TR:Egeu', sources: [TW],
      description: 'A maior região em volume (~um terço do vinho turco); clima mediterrâneo. No litoral: Urla, Çeşme e a ilha de Bozcaada (antiga Tenedos). No interior, planaltos de Denizli (Çal) e Manisa, de onde vem a maior parte da Sultaniye (passas e brancos leves). Rotas do vinho de Urla, Egeu interior, Çal, Lídia e Troia.',
      climate: 'Mediterrâneo: verões quentes e secos, invernos amenos.', soils: '', altitude: '',
      history: 'A costa do Egeu (Lídia, Jônia) era associada ao culto de Dioniso; Homero cita vinhos da região. Esmirna (İzmir) era porto ativo de exportação de vinho no século XVII.',
      grapes: ['Urla Karası', 'Bornova Misketi', 'Karalahna', 'Çavuş', 'Sultaniye', 'Çalkarası'], grapes_other: [], notable_wines: 'Bornova Misketi; rosé de Çalkarası', producers: [prod('Sevilen', 'İzmir, 1942')],
      subregions: [
        sub('Urla', 'Urla, Turkey', 'Península com novos plantios desde os anos 2000, inclusive a quase extinta Urla Karası e a branca Bornova Misketi.', ['Urla Karası', 'Bornova Misketi'], [prod('Urla Winery'), prod('Paşaeli')], ''),
        sub('Bozcaada', 'Bozcaada, Turkey', 'Ilha (antiga Tenedos) plantada há muito tempo com as locais Karalahna e Çavuş; festa da colheita no início de setembro.', ['Karalahna', 'Çavuş'], [prod('Corvus')], ''),
        sub('Çal (Denizli)', 'Çal, Turkey', 'Planalto do Egeu interior; dá nome à tinta Çalkarası, usada sobretudo em rosé.', ['Çalkarası'], [], '')
      ] },

    { name: 'Anatólia Central', geo: 'TR:Anatólia Central', sources: [TW],
      description: 'Capadócia e arredores de Ancara, a 800–1.200 m, clima continental. Geadas de inverno são problema; alguns enterram as videiras para protegê-las. Em Capadócia há degustações em adegas escavadas no tufo.',
      climate: 'Continental.', soils: 'Tufo vulcânico na Capadócia.', altitude: '800–1.200 m', history: '',
      grapes: ['Emir', 'Kalecik Karası'], grapes_other: [], notable_wines: 'Emir (tranquilo e espumante); Kalecik Karası', producers: [prod('Kavaklıdere', 'Ancara, 1929; o maior produtor privado')],
      subregions: [
        sub('Capadócia', 'Ürgüp, Turkey', 'Casa da Emir, branca usada em vinhos tranquilos e espumantes de método tradicional.', ['Emir'], [prod('Turasan'), prod('Kocabağ')], 'Emir'),
        sub('Kalecik', 'Kalecik, Turkey', 'O microclima do rio Kızılırmak perto de Kalecik dá nome à Kalecik Karası, tinta leve e perfumada.', ['Kalecik Karası'], [prod('Vinkara', 'espumante de Kalecik Karası')], 'Kalecik Karası')
      ] },

    { name: 'Anatólia Oriental e Sudeste', geo: 'TR:Leste', sources: [TW],
      description: 'Clima mais duro, bom para tintas de maturação tardia. Elazığ e Malatya, no vale do Eufrates, são o berço da Öküzgözü; Diyarbakır, da tânica Boğazkere. O corte Öküzgözü–Boğazkere, vendido por anos como Buzbağ, é visto como o tinto turco típico. Em Mardin, uma comunidade siríaca mantém uma tradição com uvas locais como a Mazrona.',
      climate: 'Mais rigoroso.', soils: '', altitude: '',
      history: 'No sudeste (Alta Mesopotâmia), uvas domesticadas datadas entre ~9500 e 5000 a.C.',
      grapes: ['Öküzgözü', 'Boğazkere'], grapes_other: ['Mazrona'], notable_wines: 'Buzbağ', producers: [],
      subregions: [
        sub('Elazığ', 'Elazığ, Turkey', 'Vale do Eufrates, berço da Öküzgözü.', ['Öküzgözü'], [prod('Kayra', 'vinícola em Elazığ; Buzbağ')], 'Buzbağ'),
        sub('Diyarbakır', 'Diyarbakır, Turkey', 'Planície associada à Boğazkere, tinto tânico.', ['Boğazkere'], [], ''),
        sub('Mardin', 'Mardin, Turkey', 'Tradição siríaca com uvas locais como a Mazrona.', ['Mazrona'], [], '')
      ] },

    { name: 'Mediterrâneo e Mar Negro', geo: 'TR:Outras', sources: [TW],
      description: 'Vinhedos espalhados: nos montes Tauro, em Elmalı (Antália), onde a tinta Acıkara foi replantada; e em Tokat, no limite entre a costa úmida do Mar Negro e o interior seco, terra da branca Narince.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Narince', 'Acıkara'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Elmalı', 'Elmalı, Turkey', 'Montes Tauro; replantio da tinta Acıkara.', ['Acıkara'], [prod('Likya', 'uvas raras do Mediterrâneo, inclusive Acıkara')], ''),
        sub('Tokat', 'Tokat, Turkey', 'Terra da Narince, branca também fermentada em barrica.', ['Narince'], [prod('Diren', 'Tokat, 1958')], '')
      ] }
  ];

  var countries = [
    { name: 'Turquia', sources: [TW],
      description: 'A Anatólia, com o Cáucaso, está entre os lugares onde a Vitis vinifera foi domesticada (evidências de pelo menos 7.000 anos). 410.000–505.000 ha de vinha, a quinta maior área do mundo, mas só 3–15% da uva vira vinho (o resto é uva de mesa, passa ou rakı). Entre 600 e 1.200 uvas nativas, ~60 vinificadas. Desde os anos 1990 e a privatização da estatal Tekel (2004), surgiram muitas vinícolas pequenas (~140 em meados dos anos 2020) e voltaram uvas nativas. Consumo baixo (menos de 1 litro por adulto/ano); proibição de publicidade de álcool desde 2013.' }
  ];

  return { code: 'TR', version: 1, countries: countries, regions: regions, country_of: 'Turquia' };
})());
