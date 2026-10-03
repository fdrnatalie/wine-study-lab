/**
 * ENCICLOPÉDIA DE REGIÕES — pack HUNGRIA (origem "pesquisado"). v1: 6 grandes regiões e as principais das 22 regiões vinícolas.
 * Pesquisa de 28/09/2026 na Wikipedia: "Hungarian wine", "Tokaji", "Eger wine region" (inglês), "Weinbau in Ungarn" (alemão).
 * Contornos APROXIMADOS pelos condados (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var HW = EN + 'Hungarian_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Tokaj', geo: 'HU:Tokaj', sources: [EN + 'Tokaji', HW],
      description: 'A região mais famosa do país, no sopé dos montes Zemplén, no extremo norte (a área tradicional entra no sudeste da Eslováquia). Outonos longos e quentes e as névoas do rio Bodrog criam condições perfeitas para a podridão nobre. Seis uvas autorizadas: Furmint (60% da área), Hárslevelű (30%), Sárgamuskotály (Muscat), Zéta, Kövérszőlő e Kabar. Do seco ao Eszencia, o vinho mais doce do mundo. Primeira classificação de vinhedos do mundo (1730). Luís XIV teria chamado o Tokaji de "vinho dos reis, rei dos vinhos".',
      climate: 'Invernos muito frios e ventosos, primavera fresca e seca, verões quentes; chuva no início do outono e depois um longo "verão de índio".', soils: 'Vulcânicos, com ferro e cal; adegas escavadas no tufo vulcânico, com paredes cobertas de fungo.', altitude: 'planalto a ~457 m',
      history: 'O aszú aparece em documento de 1571 (e numa nomenclatura de 1576); pela lenda, o primeiro teria sido feito por Laczkó Máté Szepsi em 1630. Antes de 1918, o melhor Eszencia ia para as adegas dos Habsburgo ("Imperial Tokay").',
      grapes: ['Furmint', 'Hárslevelű', 'Muscat Blanc à Petits Grains'], grapes_other: ['Zéta', 'Kövérszőlő', 'Kabar'],
      notable_wines: 'Tokaji Aszú (3 a 6 puttonyos), Eszencia, Szamorodni, Fordítás, Máslás; Furmint seco',
      producers: [],
      subregions: [
        sub('Tokaj-Hegyalja', 'Região vinícola', 'Tokaj, Hungary', 'Aszú: bagas botritizadas colhidas uma a uma (às vezes até dezembro), amassadas em pasta e maceradas em mosto ou vinho por 24–48 h, com fermentação lenta em barris por anos. O nível era medido em puttony (cestos de ~25 kg por barril de Gönc, 136 L); hoje pelo açúcar. Eszencia: o suco que escorre sozinho das bagas aszú, com 500–700 g/L de açúcar (900 g em 2000) e 5–6% de álcool; dura 200 anos ou mais. O aszú só acontece em ~3 safras por década e é menos de 1% da produção.',
          ['Furmint', 'Hárslevelű', 'Muscat Blanc à Petits Grains'], [], 'Tokaji Aszú; Eszencia; Szamorodni', EN + 'Tokaji'),
        sub('Mád', 'Vila (Furmint seco)', 'Mád, Hungary', 'Vila de quase 1.200 ha. O Furmint seco ganhou atenção mundial com o Úrágya 2000, de vinhedo único, de István Szepsy: mineralidade e estrutura comparadas às da Borgonha e do Mosel. Desde 2003 outros produtores de Mád fazem Furmint seco de vinhedo; há também um vinho de nível comunal chamado Mád.',
          ['Furmint'], [prod('István Szepsy', 'Úrágya 2000 (Furmint seco de vinhedo único)', EN + 'Tokaji'), prod('Szent Tamás Winery (István Szepsy Jr.)', 'Mád (Furmint comunal)', EN + 'Tokaji')], 'Furmint seco', EN + 'Tokaji')
      ] },

    { name: 'Eger (Felső-Magyarország)', geo: 'HU:Eger', sources: [EN + 'Eger_wine_region', HW],
      description: 'Norte da Hungria. Sub-regiões Eger, Bükk e Mátra. Eger é a casa do Egri Bikavér ("Sangue de Boi de Eger"), corte tinto elegante com base em Kékfrankos, e de brancos frescos de Leányka e Királyleányka; bons Pinot Noir. Mátra dá brancos elegantes em solo vulcânico (Müller-Thurgau, Olaszrizling, Chardonnay).',
      climate: 'Primavera tardia e clima seco.', soils: 'Riolito e tufo riolítico escuros, xisto argiloso, solos pardos de floresta.', altitude: '',
      history: 'Na lenda do cerco de Eger (1552), os turcos recuaram ao ver a barba dos defensores tingida de vermelho, achando que tinham bebido sangue de boi. Valões trazidos por Béla IV após a invasão tártara ensinaram o uso de barris; sérvios fugindo dos turcos trouxeram a vinificação em contato com as cascas e a Kadarka.',
      grapes: ['Blaufränkisch', 'Leányka', 'Riesling Italico'], grapes_other: ['Királyleányka', 'Chardonnay', 'Pinot Noir', 'Cabernet Franc', 'Merlot', 'Kadarka', 'Hárslevelű', 'Müller-Thurgau'],
      notable_wines: 'Egri Bikavér; Egri Leányka; Debrői Hárslevelű', producers: [],
      subregions: [
        sub('Eger', 'Região vinícola', 'Eger, Hungary', '~5.400 ha nas encostas sul dos montes Bükk; dois distritos de origem protegida, Eger e Debrő (a cidade e 19 vilas). Egri Bikavér e brancos de Leányka; adegas com mais de 400 anos, e ainda se escavam novas.',
          ['Blaufränkisch', 'Leányka', 'Riesling Italico'], [], 'Egri Bikavér', EN + 'Eger_wine_region'),
        sub('Debrő', 'Distrito', 'Aldebrő, Hungary', 'Distrito de Eger (Aldebrő, Feldebrő, Tófalu, Verpelét, Kompolt, Tarnaszentmária), conhecido pelo Debrői Hárslevelű.', ['Hárslevelű'], [], 'Debrői Hárslevelű', EN + 'Eger_wine_region'),
        sub('Mátra', 'Região vinícola', 'Gyöngyös, Hungary', 'Brancos elegantes e encorpados em solo vulcânico: Müller-Thurgau, Olaszrizling e Chardonnay.', ['Müller-Thurgau', 'Riesling Italico', 'Chardonnay'], [], '', HW),
        sub('Bükk', 'Região vinícola', 'Miskolc, Hungary', 'Sobretudo vinhos brancos.', [], [], '', HW)
      ] },

    { name: 'Balaton', geo: 'HU:Balaton', sources: [HW],
      description: 'Em torno do lago Balaton. A uva principal é a Olaszrizling (Riesling Italico). Solos vulcânicos em Badacsony, Balaton-felvidék e Somló dão brancos encorpados de acidez marcante.',
      climate: '', soils: 'Vulcânicos (Badacsony, Somló); terra rossa (Balatonfüred-Csopak).', altitude: '', history: '',
      grapes: ['Riesling Italico'], grapes_other: ['Kéknyelű', 'Hárslevelű', 'Furmint', 'Juhfark'], notable_wines: 'Brancos de Badacsony e Somló', producers: [],
      subregions: [
        sub('Badacsony', 'Região vinícola', 'Badacsonytomaj, Hungary', 'Solos vulcânicos, brancos encorpados de acidez considerável; uma das poucas fontes da uva Kéknyelű.', ['Kéknyelű', 'Riesling Italico'], [], '', HW),
        sub('Nagy-Somló', 'Região vinícola', 'Somlóvásárhely, Hungary', 'Solo vulcânico; brancos encorpados de acidez alta, de Olaszrizling, Hárslevelű e Furmint.', ['Riesling Italico', 'Hárslevelű', 'Furmint'], [], '', HW),
        sub('Balatonfüred-Csopak', 'Região vinícola', 'Balatonfüred, Hungary', 'Terra rossa; brancos encorpados de acidez considerável.', ['Riesling Italico'], [], '', HW),
        sub('Balatonboglár', 'Região vinícola', 'Balatonboglár, Hungary', 'Brancos e tintos encorpados de acidez moderada.', [], [], '', HW),
        sub('Balaton-felvidék', 'Região vinícola', 'Tapolca, Hungary', 'Solos vulcânicos; brancos encorpados e ácidos.', [], [], '', HW)
      ] },

    { name: 'Pannon', geo: 'HU:Pannon', sources: [HW],
      description: 'Sul da Hungria: Villány, Szekszárd, Pécs e Tolna. Terra dos tintos encorpados e especiados; a rota do vinho Villány-Siklós reúne vinícolas de ponta.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Cabernet Franc', 'Kadarka', 'Blaufränkisch', 'Merlot', 'Cabernet Sauvignon'], grapes_other: ['Blauer Portugieser', 'Pinot Noir', 'Zierfandler'],
      notable_wines: 'Tintos de Villány; Szekszárdi Bikavér', producers: [],
      subregions: [
        sub('Villány', 'Região vinícola', 'Villány, Hungary', 'Tintos robustos, encorpados e especiados: Portugieser, Cabernet Sauvignon, Cabernet Franc, Merlot e às vezes Pinot Noir. Preços altos; alguns produtores adotaram cultivo orgânico.', ['Blauer Portugieser', 'Cabernet Sauvignon', 'Cabernet Franc', 'Merlot'], [], '', HW),
        sub('Szekszárd', 'Região vinícola', 'Szekszárd, Hungary', 'Tintos encorpados e um pouco especiados; vinho famoso: Szekszárdi Bikavér. Kadarka, Kékfrankos, Cabernet Franc, Merlot.', ['Kadarka', 'Blaufränkisch', 'Cabernet Franc', 'Merlot'], [], 'Szekszárdi Bikavér', HW),
        sub('Pécs', 'Região vinícola', 'Pécs, Hungary', 'Sobretudo brancos; uva tradicional: Cirfandli (Zierfandler).', ['Zierfandler'], [], '', HW)
      ] },

    { name: 'Észak-Dunántúl (Norte da Transdanúbia)', geo: 'HU:Észak-Dunántúl', sources: [HW],
      description: 'Noroeste do país: Sopron, Mór, Etyek-Buda, Neszmély e Pannonhalma. Brancos frescos e aromáticos e, em Sopron, tintos elegantes de Kékfrankos.',
      climate: '', soils: '', altitude: '',
      history: 'A semente de Vitis vinifera mais antiga da Hungria (1300 a.C.) foi achada em Sopron; na Idade Média os vinhos de Sopron e Eger já eram conhecidos.',
      grapes: ['Blaufränkisch', 'Ezerjó'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Sopron', 'Região vinícola', 'Sopron, Hungary', 'Tintos elegantes, sobretudo de Kékfrankos (Blaufränkisch), junto à fronteira austríaca.', ['Blaufränkisch'], [], '', HW),
        sub('Mór', 'Região vinícola', 'Mór, Hungary', 'Solo vulcânico, brancos encorpados; uva principal: Ezerjó.', ['Ezerjó'], [], '', HW),
        sub('Etyek-Buda', 'Região vinícola', 'Etyek, Hungary', 'Brancos frescos de acidez considerável.', [], [], '', HW),
        sub('Neszmély', 'Região vinícola', 'Neszmély, Hungary', 'Brancos frescos e aromáticos.', [], [], '', HW),
        sub('Pannonhalma', 'Região vinícola', 'Pannonhalma, Hungary', 'Brancos encorpados.', [], [], '', HW)
      ] },

    { name: 'Duna (Grande Planície)', geo: 'HU:Duna', sources: [HW],
      description: 'Grande planície entre o Danúbio e o Tisza: Kunság, Hajós-Baja e Csongrád. Sobretudo vinhos frescos e leves de muitas uvas.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Kunság', 'Região vinícola', 'Kecskemét, Hungary', 'Vinhos frescos e leves da planície.', [], [], '', HW),
        sub('Hajós-Baja', 'Região vinícola', 'Hajós, Hungary', 'Vinhos frescos e leves.', [], [], '', HW),
        sub('Csongrád', 'Região vinícola', 'Csongrád, Hungary', 'Vinhos frescos e leves.', [], [], '', HW)
      ] }
  ];

  var countries = [
    { name: 'Hungria', sources: [HW, 'https://de.wikipedia.org/wiki/Weinbau_in_Ungarn'],
      description: 'Os vinhos mais conhecidos fora do país são o doce Tokaji Aszú e o tinto Egri Bikavér (Sangue de Boi). 22 regiões vinícolas oficiais, agrupadas em cinco a sete grandes regiões. O húngaro é uma das três línguas europeias cuja palavra para vinho ("bor") não vem do latim. Após a filoxera (1882) as misturas de campo deram lugar a monoculturas; sob o comunismo privilegiou-se volume (sobretudo para a URSS); desde 1989 voltaram as uvas tradicionais e os investimentos. Uvas nativas: Furmint, Hárslevelű, Kadarka, Ezerjó, Juhfark, Kéknyelű, Királyleányka, Irsai Olivér. Clima continental seco, chuva decrescente de oeste para leste.' }
  ];

  return { code: 'HU', version: 1, countries: countries, regions: regions, country_of: 'Hungria' };
})());
