/**
 * ENCICLOPÉDIA DE REGIÕES — pack ÁFRICA DO SUL (origem "pesquisado"). v1: 2 províncias, distritos e wards como sub-regiões.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "South African wine", "Constantia (wine)", "Swartland", "Pinotage".
 * Contornos EXATOS das províncias (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var SW = EN + 'South_African_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || SW };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Cabo Ocidental (Western Cape)', geo: 'ZA:Western Cape', sources: [SW],
      description: 'Quase toda a produção sul-africana, sobretudo no canto sudoeste perto do litoral: o coração histórico em torno da Península do Cabo e da Cidade do Cabo (Constantia, Stellenbosch, Paarl). Os vales dos rios Breede e Olifants, mais quentes, fazem vinho a granel e destilados; as áreas frescas a leste da Cidade do Cabo, no Índico (Walker Bay, Elgin), crescem com uvas de clima frio.',
      climate: 'Mediterrâneo, sol intenso e calor seco; invernos frios e chuvosos. A corrente de Benguela esfria o litoral atlântico e o vento "Cape Doctor" reduz doenças. Chuva de 250 mm (Klein Karoo) a 1.500 mm (montanhas de Worcester).', soils: 'Granito decomposto e arenito da Table Mountain.', altitude: 'até mais de 1.000 m (Cederberg)',
      history: 'A primeira garrafa foi feita em 1659 na Cidade do Cabo pelo fundador e governador Jan van Riebeeck.',
      grapes: ['Chenin Blanc', 'Cabernet Sauvignon', 'Pinotage', 'Syrah', 'Sauvignon Blanc', 'Chardonnay'], grapes_other: ['Merlot', 'Colombard', 'Muscat of Alexandria', 'Muscat Blanc à Petits Grains', 'Sémillon', 'Cinsaut'],
      notable_wines: 'Vin de Constance; Pinotage e "Cape blends"; Chenin Blanc', producers: [],
      subregions: [
        sub('Constantia', 'Ward', 'Constantia, Cape Town, South Africa', 'A região vinícola mais antiga do país, ao sul da Cidade do Cabo, na Península do Cabo, com influência oceânica dos dois lados: maturação longa e lenta (18–19 °C) e mais de 1.000 mm de chuva. Solos de arenito da Table Mountain com argila e granito. Destaque para o Sauvignon Blanc. O doce "Vin de Constance", de Muscat de Frontignan, foi favorito de reis e de Napoleão, que o recebia no exílio em Santa Helena; a produção parou após a filoxera e voltou em 1986.', ['Sauvignon Blanc', 'Muscat Blanc à Petits Grains'],
          [prod('Groot Constantia', 'a propriedade vinícola mais antiga do país', SW), prod('Klein Constantia', 'Vin de Constance (retomado em 1986)', EN + 'Constantia_(wine)'), prod('Buitenverwachting', 'Constantia doce (desde 2007)', EN + 'Constantia_(wine)')], 'Vin de Constance', SW),
        sub('Stellenbosch', 'Distrito', 'Stellenbosch, South Africa', 'A segunda região mais antiga (plantada em 1679), 45 km a leste da Cidade do Cabo, ~14% do vinho do país. Cercada pelas montanhas Helderberg, Simonsberg e Stellenbosch e refrescada pela False Bay (~20 °C no verão, pouco mais que Bordeaux). Sete wards (Banghoek, Bottelary, Devon Valley, Jonkershoek Valley, Papegaaiberg, Polkadraai Hills, Simonsberg-Stellenbosch — a primeira com distinção individual) famosas pelos tintos de Cabernet, Merlot, Pinotage e Shiraz. A Universidade de Stellenbosch, onde Perold criou a Pinotage (1925), é central para o vinho do país.', ['Cabernet Sauvignon', 'Merlot', 'Pinotage', 'Syrah', 'Chenin Blanc'], [], '', SW),
        sub('Paarl', 'Distrito', 'Paarl, South Africa', 'Coração da indústria por grande parte do século XX: sede da KWV e do leilão de vinhos de Nederburg. O foco migrou para Stellenbosch, mas os wards de Franschhoek e Wellington reavivaram o interesse.', [],
          [prod('KWV', 'cooperativa histórica sediada em Paarl', SW), prod('Nederburg', 'leilão anual de vinhos', SW)], '', SW),
        sub('Franschhoek', 'Ward', 'Franschhoek, South Africa', '"Canto Francês", uma das cidades mais antigas do país, ~75 km da Cidade do Cabo; ward de Paarl que ajudou a reavivar a região.', [], [], '', SW),
        sub('Swartland', 'Área', 'Malmesbury, South Africa', 'Começa ~50 km ao norte da Cidade do Cabo (Malmesbury, Darling, Piketberg, Riebeek); planície de trigo cuja viticultura, ainda jovem, virou uma das áreas mais em moda do país. Pinotage em terras sem irrigação.', ['Pinotage'], [], '', EN + 'Swartland'),
        sub('Durbanville', 'Área', 'Durbanville, South Africa', 'Área da região da Costa Oeste, de influência atlântica.', [], [], '', SW),
        sub('Walker Bay e Elgin', 'Distrito e ward', 'Hermanus, South Africa', 'Áreas frescas a leste da Cidade do Cabo, no litoral do Índico, em forte expansão com uvas e estilos de clima frio.', [], [], '', SW),
        sub('Worcester (Breede River Valley)', 'Área', 'Worcester, South Africa', 'Vale do rio Breede, uma das áreas mais quentes, de vinho a granel e destilação.', [], [], '', SW),
        sub('Klein Karoo', 'Região', 'Calitzdorp, South Africa', 'Semideserto de Montagu a De Rust, antes terra de ovelhas e avestruzes; em Calitzdorp, brisas marinhas e noites frescas. Fortificados "estilo porto" e Muscadels.', [], [], 'Fortificados', SW),
        sub('Olifants River', 'Região', 'Vredendal, South Africa', 'Costa Oeste; Chenin Blanc e Colombard; sede da maior cooperativa do país.', ['Chenin Blanc', 'Colombard'], [prod('Vredendal Co-operative', 'a maior cooperativa vinícola do país', SW)], '', SW),
        sub('Cederberg', 'Ward', 'Clanwilliam, South Africa', 'A leste do rio Olifants: alguns dos vinhedos mais altos do país, acima de 1.000 m.', [], [], '', SW)
      ] },

    { name: 'Cabo Setentrional (Northern Cape)', geo: 'ZA:Northern Cape', sources: [SW],
      description: 'Ao longo do rio Orange, uma das áreas mais quentes do país; o vinho só se firmou nos anos 1960, com irrigação e controle de temperatura. Hoje ~12% do vinho sul-africano, sobretudo a granel, de grandes cooperativas.',
      climate: 'Muito quente.', soils: '', altitude: '', history: '', grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Orange River', 'Região', 'Upington, South Africa', 'Vale irrigado do rio Orange, de vinho a granel.', [], [], '', SW)] }
  ];

  var countries = [
    { name: 'África do Sul', sources: [SW, EN + 'Pinotage'],
      description: 'Vinho desde 1659 (Jan van Riebeeck), quase todo no Cabo Ocidental. Sistema Wine of Origin (1973), voltado à precisão do rótulo: unidades geográficas, regiões, distritos e wards (os mais ligados ao terroir); ~60 denominações. ~100.000 ha (2015), 55% brancas; entre os dez maiores produtores (~10 milhões de hl). A Chenin Blanc ("Steen") é a mais plantada. A Pinotage (Pinot Noir × Cinsaut, criada por Abraham Perold em Stellenbosch, 1925) é a uva-símbolo e a segunda tinta mais plantada; é obrigatória (30–70%) nos "Cape blends". Sinônimos locais: Hanepoot (Moscatel de Alexandria), Cape Riesling (Crouchen), Groendruif (Sémillon).' }
  ];

  return { code: 'ZA', version: 1, countries: countries, regions: regions, country_of: 'África do Sul' };
})());
