/**
 * ENCICLOPÉDIA DE REGIÕES — pack GRÉCIA (origem "pesquisado"). v1: 8 regiões e as denominações (PDO) principais.
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Greek wine", "Santorini (wine)", "Agiorgitiko", "Xinomavro".
 * Contornos APROXIMADOS pelas regiões administrativas (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var GW = EN + 'Greek_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function pdo(name, place, description, grapes) { return sub(name, 'PDO', place, description, grapes, [], '', GW); }

  var regions = [
    { name: 'Macedônia', geo: 'GR:Macedônia', sources: [GW],
      description: 'Norte da Grécia. Terra da Xinomavro ("preta azeda"), uva predominante centrada em Naoussa: grande potencial de guarda, notas de tomate e azeitona, taninos ricos; muitas vezes comparada à Nebbiolo. Também a branca aromática Malagousia.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Xinomavro', 'Malagousia'], grapes_other: ['Negoska', 'Roditis', 'Athiri'], notable_wines: 'Naoussa; Amyntaio; Goumenissa', producers: [],
      subregions: [
        pdo('Naoussa', 'Naousa, Imathia, Greece', 'Centro da Xinomavro, tintos de longa guarda.', ['Xinomavro']),
        pdo('Amyntaio', 'Amyntaio, Greece', 'Denominação da Macedônia.', []),
        pdo('Goumenissa', 'Goumenissa, Greece', 'A Negoska entra no corte do PDO Goumenissa.', ['Negoska', 'Xinomavro']),
        pdo('Epanomi', 'Epanomi, Greece', 'Denominação da Macedônia.', [])
      ] },

    { name: 'Peloponeso', geo: 'GR:Peloponeso', sources: [GW, EN + 'Agiorgitiko'],
      description: 'Sul do continente. Nemea é a terra da Agiorgitiko ("uva de São Jorge"), tinto macio e frutado em vários estilos, que envelhece bem por uns cinco anos. Mantineia (Arcádia) é a denominação da Moschofilero, branca de casca rosada, floral, tranquila ou espumante. A Mavrodaphne dá um doce fortificado em solera; a Lagorthi cresce em encostas a 850 m.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Agiorgitiko', 'Moschofilero', 'Mavrodaphne', 'Roditis'], grapes_other: ['Lagorthi'], notable_wines: 'Nemea; Mantineia; Mavrodaphne de Patras', producers: [],
      subregions: [
        pdo('Nemea', 'Nemea, Greece', 'Terra natal da Agiorgitiko.', ['Agiorgitiko']),
        pdo('Mantineia', 'Tripoli, Greece', 'Denominação da Moschofilero, na Arcádia: brancos frescos e florais, também espumantes.', ['Moschofilero']),
        pdo('Patras', 'Patras, Greece', 'Denominação do Peloponeso.', []),
        pdo('Monemvasia-Malvasia', 'Monemvasia, Greece', 'Monemvasia exportava vinhos na Idade Média, vendidos a preços altos no norte da Europa.', [])
      ] },

    { name: 'Ilhas do Egeu', geo: 'GR:Egeu', sources: [GW, EN + 'Santorini_(wine)'],
      description: 'Cíclades, Dodecaneso e ilhas do norte do Egeu. Santorini é a estrela, com a Assyrtiko; Lemnos é a terra da Limnio, tinta cultivada há mais de 2.000 anos; a Mandilaria é típica de Rodes.',
      climate: 'Mediterrâneo, com ventos fortes.', soils: 'Vulcânicos em Santorini.', altitude: '', history: '',
      grapes: ['Assyrtiko', 'Athiri', 'Aidani', 'Mandilaria', 'Limnio'], grapes_other: ['Mavrotragano'], notable_wines: 'Santorini; Vinsanto', producers: [],
      subregions: [
        sub('Santorini', 'PDO', 'Pyrgos Kallistis, Santorini, Greece', 'Cíclades do sul; restos de um vulcão que explodiu por volta de 1640–1620 a.C. Solos pobres de cinzas e rochas vulcânicas, sem argila: a filoxera não sobrevive, e muitas raízes têm séculos. As videiras são trançadas em cestos rentes ao chão (koulara) contra o vento. ~1.200 ha, pressionados pelo turismo. A Assyrtiko, uva-símbolo, dá brancos ácidos, cítricos e minerais (~13,5%); o Vinsanto é doce de uvas secas ao sol. Sob Veneza os vinhos corriam o Mediterrâneo; a Igreja Ortodoxa Russa adotou o vinho de Santorini como vinho da Eucaristia.',
          ['Assyrtiko', 'Athiri', 'Aidani', 'Mandilaria', 'Mavrotragano'], [], 'Santorini Assyrtiko; Vinsanto; Nykteri (histórico)', EN + 'Santorini_(wine)'),
        pdo('Lemnos', 'Myrina, Lemnos, Greece', 'Ilha natal da Limnio, tinta encorpada, de álcool alto e herbácea, com toque de louro.', ['Limnio']),
        pdo('Samos', 'Samos, Greece', 'Denominação da ilha de Samos.', []),
        pdo('Rodes', 'Rhodes, Greece', 'Denominação de Rodes, onde a Mandilaria é muito cultivada.', ['Mandilaria', 'Athiri']),
        pdo('Paros', 'Paros, Greece', 'Denominação da ilha de Paros.', [])
      ] },

    { name: 'Creta', geo: 'GR:Creta', sources: [GW],
      description: 'A maior ilha grega. Uvas nativas: Kotsifali (cortada com Mandilaria ou Syrah), Liatiko (melhor em doces; antigo corte do "Malvasia" exportado pelos venezianos), Romeiko (Chania) e a branca Vidiano (Rethymno e Heraklion). Na Idade Média, os vinhos de Creta alcançavam preços altos no norte da Europa.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Kotsifali', 'Mandilaria', 'Liatiko', 'Vidiano'], grapes_other: ['Romeiko'], notable_wines: 'Peza; Archanes; Sitia', producers: [],
      subregions: [
        pdo('Peza', 'Peza, Heraklion, Greece', 'Denominação cretense.', []),
        pdo('Archanes', 'Archanes, Greece', 'Denominação cretense.', []),
        pdo('Dafnes', 'Dafnes, Heraklion, Greece', 'Denominação cretense.', []),
        pdo('Sitia', 'Sitia, Greece', 'Denominação do leste de Creta.', [])
      ] },

    { name: 'Tessália', geo: 'GR:Tessália', sources: [GW],
      description: 'Centro-leste da Grécia continental; a Roditis é muito plantada.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Roditis'], grapes_other: [], notable_wines: 'Rapsani', producers: [],
      subregions: [pdo('Rapsani', 'Rapsani, Greece', 'Denominação da Tessália.', []), pdo('Nea Anchialos', 'Nea Anchialos, Greece', 'Denominação da Tessália.', []), pdo('Messenikola', 'Mesenikolas, Greece', 'Denominação da Tessália.', [])] },

    { name: 'Epiro', geo: 'GR:Epiro', sources: [GW],
      description: 'Noroeste montanhoso. A Debina, branca de acidez alta, é a base de Zitsa e de espumantes.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Debina'], grapes_other: [], notable_wines: 'Zitsa', producers: [],
      subregions: [pdo('Zitsa', 'Zitsa, Greece', 'Brancos e espumantes de Debina.', ['Debina']), pdo('Metsovo', 'Metsovo, Ioannina, Greece', 'Denominação de montanha do Epiro.', [])] },

    { name: 'Ilhas Jônicas', geo: 'GR:Jônicas', sources: [GW],
      description: 'Oeste da Grécia. Robola nas encostas de Cefalônia (mineral, fumê, cítrica); Vertzami em Lefkada; Mavrodaphne também aparece aqui.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Robola', 'Vertzami', 'Mavrodaphne'], grapes_other: [], notable_wines: 'Robola de Cefalônia', producers: [],
      subregions: [pdo('Cefalônia', 'Argostoli, Greece', 'Robola das vinhas de montanha.', ['Robola']), pdo('Lefkada', 'Lefkada, Greece', 'Tintos varietais de Vertzami.', ['Vertzami']), pdo('Zakynthos', 'Zakynthos, Greece', 'Denominação da ilha.', []), pdo('Corfu', 'Corfu, Greece', 'Denominação da ilha.', [])] },

    { name: 'Grécia Central e Ática', geo: 'GR:Central', sources: [GW],
      description: 'A Savatiano, branca resistente ao calor, predomina na Ática; fermentada sem refrigeração dá o retsina, vinho com resina de pinho que virou bebida nacional nos anos 1960.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Savatiano', 'Roditis'], grapes_other: [], notable_wines: 'Retsina', producers: [],
      subregions: [pdo('Ática', 'Spata, Greece', 'Terra da Savatiano e do retsina.', ['Savatiano']), pdo('Atalanti', 'Atalanti, Greece', 'Denominação da Grécia Central.', [])] }
  ];

  var countries = [
    { name: 'Grécia', sources: [GW],
      description: 'Um dos países vinícolas mais antigos: vestígios de ~6.500 anos, entre os mais antigos restos de vinho e a evidência mais antiga de uvas esmagadas. Os gregos levaram a videira às colônias na Itália, Sicília, sul da França e Espanha. Cerca de 200 uvas nativas. Classificação: PDO (origem protegida), PGI, vinho de mesa, "Cava" (reserva envelhecida) e retsina. Leis de denominação de 1971–72; o primeiro Cabernet Sauvignon foi plantado em 1963.' }
  ];

  return { code: 'GR', version: 1, countries: countries, regions: regions, country_of: 'Grécia' };
})());
