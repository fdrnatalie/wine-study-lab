/**
 * ENCICLOPÉDIA DE REGIÕES — pack ARGENTINA (origem "pesquisado"). v1: 4 grandes regiões.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Argentine wine", "Mendoza wine", "Bodega Catena Zapata", "Trapiche", "Bodega Norton".
 * Contornos pelas províncias (18_GeoWorld.js, Natural Earth): Mendoza exata; as demais regiões juntam províncias.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var AW = EN + 'Argentine_wine', MW = EN + 'Mendoza_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || AW };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Mendoza', geo: 'AR:Mendoza', sources: [MW, AW],
      description: 'A região mais importante: quase dois terços do vinho argentino e ~144.000 ha (2008), mais que Austrália e Nova Zelândia juntas. Nas encostas leste dos Andes, à sombra do Aconcágua, com vinhas em média a 600–1.100 m. Malbec é a uva principal, seguida de Cabernet Sauvignon, Tempranillo e Chardonnay; as rosadas Cereza e Criolla Grande ainda somam ~um quarto do plantio, para vinho a granel. A maioria das grandes vinícolas fica na capital provincial.',
      climate: 'Continental, semiárido, quatro estações bem marcadas; o granizo de verão ("la piedra") é o maior risco.', soils: 'Aluviais: areia solta sobre argila.', altitude: '600–1.100 m (até ~1.200 m em Tupungato)',
      history: 'A ferrovia Buenos Aires–Mendoza (1885) e a imigração italiana e espanhola fizeram da antiga Cuyo a quinta maior área vinícola do mundo; as vinhas foram de 1.000 ha (1830) a 45.000 ha (1910), 80% de cepas francesas, sobretudo Malbec. Irrigação por rios de degelo (Mendoza, Tunuyán, Diamante, Atuel) e canais, alguns do século XVI.',
      grapes: ['Malbec', 'Cabernet Sauvignon', 'Tempranillo', 'Chardonnay'], grapes_other: ['Cereza', 'Criolla Grande', 'Bonarda'], notable_wines: 'Malbec de Luján de Cuyo e do Valle de Uco',
      producers: [prod('Trapiche', 'o maior produtor da Argentina (Grupo Peñaflor); fundada em 1883', EN + 'Trapiche_(winery)'), prod('Bodega Norton', 'fundada em 1895 por Edmund Norton', EN + 'Bodega_Norton')],
      subregions: [
        sub('Luján de Cuyo', 'DOC (1993)', 'Luján de Cuyo, Mendoza, Argentina', 'A primeira denominação delimitada da Argentina (1993). Vinhas a 800–1.100 m; famosa pelo Malbec, que prospera com média anual de 15 °C. Localidades que podem ir ao rótulo: Agrelo, Perdriel, Vistalba, Las Compuertas, Chacras de Coria, Ugarteche…', ['Malbec'],
          [prod('Bodega Catena Zapata', 'Agrelo; fundada em 1902; Nicolás Catena foi pioneiro do Malbec de altitude; vinícola em forma de pirâmide maia', EN + 'Bodega_Catena_Zapata')], 'Malbec', MW),
        sub('Maipú', 'Departamento', 'Maipú, Mendoza, Argentina', 'Com Luján, concentra a maioria dos vinhedos; clima mais fresco e solos menos salinos têm chamado atenção para o Cabernet Sauvignon.', ['Cabernet Sauvignon', 'Malbec'], [], '', AW),
        sub('Valle de Uco (Tupungato)', 'Região', 'Tupungato, Mendoza, Argentina', 'Área em ascensão, com vinhas a quase 1.200 m em Tupungato, a sudoeste de Mendoza; fonte de brancos premium, sobretudo Chardonnay.', ['Chardonnay', 'Malbec'], [], '', MW),
        sub('San Rafael', 'DOC (1993)', 'San Rafael, Mendoza, Argentina', 'Ao sul; centro histórico de produção que também recebeu DOC em 1993, mas perdeu peso com a virada para uvas internacionais premium.', [], [], '', MW)
      ] },

    { name: 'San Juan e La Rioja', geo: 'AR:San Juan', sources: [AW],
      description: 'Ao norte de Mendoza. San Juan é a segunda produtora (47.000 ha em 2003), mais quente e seca (150 mm de chuva, 42 °C no verão): Syrah e Bonarda (Douce Noir), além de vinhos tipo jerez, brandy e vermute. La Rioja tem a história vinícola contínua mais longa do país e é conhecida pelo Torrontés Riojano e pelo Moscatel de Alexandria.',
      climate: 'Quente e seco; o vento Zonda pode prejudicar a floração.', soils: '', altitude: '', history: 'La Rioja foi uma das primeiras áreas plantadas pelos missionários espanhóis.',
      grapes: ['Syrah', 'Bonarda', 'Torrontés Riojano'], grapes_other: ['Muscat of Alexandria', 'Cereza'], notable_wines: 'Syrah de San Juan; Torrontés Riojano', producers: [],
      subregions: [
        sub('Tulum, Ullum, Zonda e Calingasta', 'Área', 'San Juan, Argentina', 'Centro da produção premium de San Juan: o vale de Tulum e os departamentos de Ullum, Zonda e Calingasta.', ['Syrah', 'Bonarda'], [], '', AW),
        sub('Vale de Pedernal', 'Área', 'Pedernal, San Juan, Argentina', 'Oeste de San Juan, uma das áreas mais isoladas do país, acima da altitude do Valle de Uco: muito seco, grande amplitude térmica, bons tintos e brancos.', [], [], '', AW),
        sub('La Rioja (Chilecito)', 'Área', 'Chilecito, La Rioja, Argentina', 'Região pequena (8.100 ha em 2003), limitada pela falta de água; Moscatel de Alexandria e Torrontés Riojano aromáticos.', ['Torrontés Riojano', 'Muscat of Alexandria'], [], '', AW)
      ] },

    { name: 'Noroeste (Salta, Catamarca, Jujuy)', geo: 'AR:Noroeste', sources: [AW],
      description: 'Entre os paralelos 24 e 26 S: alguns dos vinhedos mais altos do mundo, muitos acima de 1.500 m. A altitude dá uvas com mais acidez. Catamarca tem a maior área (2.300 ha em 2003); Salta, sobretudo Cafayate, ganhou fama mundial.',
      climate: 'Seco e ensolarado (efeito foehn); dias até 38 °C e noites frias.', soils: '', altitude: 'acima de 1.500 m (até 3.000 m)', history: '',
      grapes: ['Torrontés Riojano', 'Cabernet Sauvignon', 'Tannat', 'Malbec'], grapes_other: [], notable_wines: 'Torrontés de Cafayate', producers: [],
      subregions: [
        sub('Cafayate (Valles Calchaquíes)', 'Área', 'Cafayate, Salta, Argentina', 'A ~1.660 m, no delta entre os rios Calchaquí e Santa María; brancos encorpados de Torrontés Riojano e tintos frutados de Cabernet Sauvignon e Tannat.', ['Torrontés Riojano', 'Cabernet Sauvignon', 'Tannat'], [], 'Torrontés', AW),
        sub('Colomé (Molinos)', 'Vinhedos de altitude', 'Molinos, Salta, Argentina', 'A Bodega Colomé tem vinhedos a 2.250 m e 3.000 m de altitude.', [], [prod('Bodega Colomé', 'vinhedos a 2.250 e 3.000 m', AW)], '', AW)
      ] },

    { name: 'Patagônia', geo: 'AR:Patagônia', sources: [AW],
      description: 'Río Negro e Neuquén, tradicionais polos de frutas, com clima bem mais frio e estação longa em solos calcários: Pinot Noir, Chardonnay, Merlot, Sauvignon Blanc, Malbec, Sémillon e Torrontés; ganha fama pelo Cabernet Franc. Muitas uvas dos espumantes argentinos vêm daqui. Os vinhedos da Bodega Weinert, mais de 1.600 km ao sul de Mendoza, são os mais austrais das Américas.',
      climate: 'Frio, verões curtos com dias longos e invernos rigorosos.', soils: 'Calcários.', altitude: '',
      history: 'No início do século XX, Humberto Canale trouxe mudas de Bordeaux e fundou a primeira vinícola comercial da região.',
      grapes: ['Pinot Noir', 'Malbec', 'Merlot', 'Chardonnay'], grapes_other: ['Cabernet Franc', 'Sauvignon Blanc', 'Sémillon'], notable_wines: 'Pinot Noir do Río Negro',
      producers: [prod('Humberto Canale', 'primeira vinícola comercial da Patagônia', AW)],
      subregions: [
        sub('Alto Valle del Río Negro', 'Área', 'General Roca, Río Negro, Argentina', 'Onde se fazem alguns dos Pinot Noir mais destacados da Argentina.', ['Pinot Noir'], [], '', AW),
        sub('San Patricio del Chañar (Neuquén)', 'Área', 'San Patricio del Chañar, Neuquén, Argentina', 'Alto vale do Neuquén, área de vinhedos significativos.', [], [], '', AW)
      ] }
  ];

  var countries = [
    { name: 'Argentina', sources: [AW],
      description: 'Quinto produtor mundial e maior exportador da América do Sul. Mudas chegaram a Santiago del Estero em 1557. O boom de 1880–1910 (imigração italiana e espanhola, ferrovia Mendoza–Buenos Aires) criou um grande mercado interno; até o início dos anos 1990 o país produzia mais vinho que qualquer outro fora da Europa, quase todo para consumo local. A busca de exportação, a partir dos anos 1990, elevou a qualidade. Vinhas no oeste, aos pés dos Andes, entre o trópico de Capricórnio e o paralelo 40: clima semiárido (menos de 250 mm), ~320 dias de sol, grande amplitude térmica e pouca doença, o que favorece o cultivo orgânico. A Malbec é a uva-símbolo.' }
  ];

  return { code: 'AR', version: 1, countries: countries, regions: regions, country_of: 'Argentina' };
})());
