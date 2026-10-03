/**
 * ENCICLOPÉDIA DE REGIÕES — pack GEÓRGIA (origem "pesquisado"). v1: 5 regiões e as denominações clássicas.
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Georgian wine", "Kvevri".
 * Contornos EXATOS das regiões administrativas (Kartli = Shida + Kvemo Kartli + Mtskheta-Mtianeti) (18_GeoEurope.js).
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var GW = EN + 'Georgian_wine';
  function sub(name, place, description, grapes, wines, src) {
    return { name: name, classification: 'Denominação', place: place, description: description,
      grapes: grapes || [], producers: [], notable_wines: wines || '', source: src || GW };
  }

  var regions = [
    { name: 'Kakheti', geo: 'GE:Kakheti', sources: [GW],
      description: 'A região mais conhecida, no leste, dividida nas microrregiões de Telavi e Kvareli; vale do Alazani, um pouco mais quente que as outras regiões. Terra da Saperavi e da Rkatsiteli, e da vinificação em kvevri (receita "kakhetiana").',
      climate: 'Vale do Alazani um pouco mais quente que as demais regiões.', soils: '', altitude: '', history: '',
      grapes: ['Saperavi', 'Rkatsiteli', 'Mtsvane'], grapes_other: ['Khikhvi'],
      notable_wines: 'Mukuzani, Kindzmarauli, Akhasheni, Tsinandali, Napareuli, Khikhvi, Saamo', producers: [],
      subregions: [
        sub('Tsinandali', 'Tsinandali, Georgia', 'Branco de Rkatsiteli e Mtsvane das microrregiões de Telavi e Kvareli.', ['Rkatsiteli', 'Mtsvane'], 'Tsinandali'),
        sub('Mukuzani', 'Mukuzani, Georgia', 'Tinto seco 100% Saperavi, 3 anos em carvalho; tido como o melhor tinto seco georgiano de Saperavi. Stálin teria servido Mukuzani a Churchill em Yalta.', ['Saperavi'], 'Mukuzani'),
        sub('Kindzmarauli', 'Kvareli, Georgia', 'Tinto naturalmente meio-doce de Saperavi, das encostas do Cáucaso no distrito de Kvareli; produzido desde 1942.', ['Saperavi'], 'Kindzmarauli'),
        sub('Akhasheni', 'Akhasheni, Georgia', 'Tinto naturalmente meio-doce de Saperavi, dos vinhedos de Akhasheni (distrito de Gurjaani); cor de romã escura, toque de chocolate; desde 1958.', ['Saperavi'], 'Akhasheni'),
        sub('Napareuli', 'Napareuli, Georgia', 'Denominação clássica da Kakheti.', [], 'Napareuli'),
        sub('Kardanakhi', 'Kardanakhi, Georgia', 'Vinhedos do distrito de Gurjaani de onde vêm o Khikhvi (sobremesa âmbar, desde 1924) e o Saamo (doce de Rkatsiteli, 3 anos de maturação).', ['Khikhvi', 'Rkatsiteli'], 'Khikhvi; Saamo')
      ] },

    { name: 'Kartli', geo: 'GE:Kartli', sources: [GW, EN + 'Kvevri'],
      description: 'Centro-leste, uma das regiões mais conhecidas. No sul, em Kvemo Kartli (Dangreuli Gora, Gadachrili Gora, Imiri), escavações acharam sementes de uva e kvevris do 6º milênio a.C., das evidências mais antigas de vinho no mundo.',
      climate: '', soils: '', altitude: '', history: 'Segundo a tradição, Santa Nino, que pregou o cristianismo em Kartli no século IV, levava uma cruz feita de ramos de videira.',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Kvemo Kartli', 'Bolnisi, Georgia', 'Sítios neolíticos com os vestígios mais antigos de vinho e kvevri (6º milênio a.C.).', [], '', EN + 'Kvevri')] },

    { name: 'Imereti', geo: 'GE:Imereti', sources: [GW],
      description: 'Oeste da Geórgia. Vinhos brancos de Tsolikauri, Tsitska e Krakhuna, feitos pela técnica local de fermentar o mosto com parte das cascas; região tradicional de fabricação de kvevris.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Tsolikauri', 'Tsitska', 'Krakhuna'], grapes_other: [], notable_wines: 'Dimi; Gelati', producers: [],
      subregions: [sub('Dimi', 'Dimi, Georgia', 'Branco de estilo imeretiano, de Tsolikauri e Krakhuna fermentados com parte das cascas; desde 1977.', ['Tsolikauri', 'Krakhuna'], 'Dimi')] },

    { name: 'Racha-Lechkhumi', geo: 'GE:Racha', sources: [GW],
      description: 'Montanhas do noroeste (com Kvemo Svaneti). Casa de dois vinhos naturalmente meio-doces famosos: o tinto Khvanchkara e o branco Tvishi.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Alexandrouli', 'Mujuretuli', 'Tsolikauri'], grapes_other: [], notable_wines: 'Khvanchkara; Tvishi', producers: [],
      subregions: [
        sub('Khvanchkara', 'Khvanchkara, Georgia', 'Tinto naturalmente meio-doce de Alexandrouli e Mujuretuli, dos vinhedos de Khvanchkara em Racha; framboesa, rubi escuro; feito desde 1907, era o favorito de Stálin.', ['Alexandrouli', 'Mujuretuli'], 'Khvanchkara'),
        sub('Tvishi', 'Tvishi, Georgia', 'Branco naturalmente meio-doce de Tsolikauri, de Lechkhumi.', ['Tsolikauri'], 'Tvishi')
      ] },

    { name: 'Samegrelo', geo: 'GE:Samegrelo', sources: [GW],
      description: 'Oeste da Geórgia, terra da uva Ojaleshi.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Ojaleshi'], grapes_other: [], notable_wines: 'Ojaleshi', producers: [],
      subregions: [sub('Ojaleshi (Orbeli)', 'Martvili, Georgia', 'Tinto meio-doce da uva homônima, das encostas sobre o rio Tskhenistsqali (vila de Orbeli).', ['Ojaleshi'], 'Ojaleshi')] }
  ];

  var countries = [
    { name: 'Geórgia', sources: [GW, EN + 'Kvevri'],
      description: 'Um dos países vinícolas mais antigos: vinho no Cáucaso Sul há pelo menos 8.000 anos, e a vinha é parte da identidade nacional. O método tradicional em kvevri — grandes ânforas de barro enterradas, onde fermentam suco, cascas, engaços e sementes — é Patrimônio Imaterial da UNESCO desde 2013. Cerca de 500 uvas (38 oficiais para o comércio). Os vinhos levam o nome da região, distrito ou vila de origem e em geral são cortes. Embargo russo em 2006; hoje exporta a dezenas de países.' }
  ];

  return { code: 'GE', version: 1, countries: countries, regions: regions, country_of: 'Geórgia' };
})());
