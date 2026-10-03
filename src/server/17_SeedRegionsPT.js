/**
 * ENCICLOPÉDIA DE REGIÕES — pack PORTUGAL (origem "pesquisado"). v1: 13 regiões vitivinícolas.
 *
 * Pesquisa de 28/09/2026 na Wikipedia (inglês e português): "Portuguese wine", "Vinhos portugueses",
 * "Denominações de origem portuguesas", artigos das DOCs (Douro, Vinho Verde, Dão, Bairrada, Alentejo, Colares…),
 * "Port wine", "Madeira wine" e de produtores (Symington, José Maria da Fonseca, Bacalhôa, Casa Ferreirinha…).
 * Contornos APROXIMADOS por distritos (18_GeoPortugal.js); Madeira, Açores e Távora-Varosa só com pontos.
 * Pontos: OpenStreetMap Nominatim. Produtores e rótulos só quando algum artigo os cita.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var PT = 'https://pt.wikipedia.org/wiki/';

  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }
  function vv(name, place) {
    return sub(name, 'DOC (sub-região)', place, 'Uma das nove sub-regiões do Vinho Verde; o nome pode aparecer no rótulo junto com "Vinho Verde" (ex.: Vinho Verde-Amarante).', [], [], '', EN + 'Vinho_Verde');
  }

  var regions = [
    { name: 'Vinho Verde (Minho)', geo: 'PT:Minho', sources: [EN + 'Vinho_Verde', PT + 'Vinhos_portugueses'],
      description: 'Extremo noroeste, entre o rio Minho e o Douro, voltado para o Atlântico: a maior região vinícola portuguesa. "Verde" quer dizer jovem: vinhos lançados de três a seis meses após a colheita. 86% é branco, leve (8,5–11%), fresco e levemente frisante (hoje em geral por gaseificação); também tintos de Vinhão e rosados. O Alvarinho, da sub-região de Monção e Melgaço, tem mais álcool (11,5–14%). Muitos pequenos produtores (~19.000 em 2014); ~21.000 ha, 9% da vinha do país.',
      climate: 'Ameno e úmido, de influência atlântica, com muita chuva.', soils: 'Sobretudo graníticos.', altitude: '',
      history: 'Sêneca e Plínio, o Velho, citaram vinhos entre o Douro e o Minho; uma adega foi doada ao convento de Alpendurada em 870. Com a chegada do milho (século XVI) as videiras foram para as bordas dos campos, subindo em árvores ("vinha de enforcado"). Região demarcada em 1908; DOC em 1984.',
      grapes: ['Albariño', 'Loureiro', 'Arinto', 'Trajadura', 'Avesso', 'Azal', 'Vinhão'], grapes_other: ['Batoca', 'Espadeiro', 'Padeiro', 'Borraçal', 'Amaral'],
      notable_wines: 'Vinho Verde branco; Vinho Verde Alvarinho; tintos de Vinhão',
      producers: [prod('Aveleda', 'vinícola da região do Vinho Verde', EN + 'Aveleda')],
      subregions: [
        sub('Monção e Melgaço', 'DOC (sub-região)', 'Monção, Viana do Castelo, Portugal', 'Norte do Minho, junto à fronteira espanhola. Única sub-região onde se faz o Vinho Verde Alvarinho (há também a designação Alvarinho Espumante): mais álcool (11,5–14%) e aromas tropicais maduros. A Alvarinho dá rendimentos baixos.',
          ['Albariño'], [], 'Vinho Verde Alvarinho', EN + 'Vinho_Verde'),
        vv('Lima', 'Ponte de Lima, Viana do Castelo, Portugal'), vv('Cávado', 'Barcelos, Braga, Portugal'), vv('Ave', 'Guimarães, Braga, Portugal'),
        vv('Basto', 'Celorico de Basto, Braga, Portugal'), vv('Sousa', 'Lousada, Porto, Portugal'), vv('Amarante', 'Amarante, Porto, Portugal'),
        vv('Baião', 'Baião, Porto, Portugal'), vv('Paiva', 'Castelo de Paiva, Aveiro, Portugal')
      ] },

    { name: 'Trás-os-Montes', geo: 'PT:Trás-os-Montes', sources: [PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas', PT + 'Vinhos_portugueses'],
      description: 'Nordeste de Portugal, ao norte do Douro. DOC Trás-os-Montes com três sub-regiões: Chaves, Valpaços e Planalto Mirandês; vinho regional Transmontano.',
      climate: 'Na Terra Quente de Valpaços, calor forte na maturação, que dá uvas com mais açúcar e vinhos de mais álcool.', soils: '', altitude: '',
      history: 'O rosé Mateus, lançado em 1942, foi descrito por Sacheverell Sitwell como vindo da remota província de Trás-os-Montes; o rótulo mostra o solar de Mateus, perto de Vila Real.',
      grapes: ['Trincadeira'], grapes_other: [],
      notable_wines: 'Mateus Rosé (Sogrape)',
      producers: [prod('Sogrape', 'Mateus Rosé', PT + 'Mateus_(vinho)')],
      subregions: [
        sub('Valpaços', 'DOC (sub-região)', 'Valpaços, Vila Real, Portugal', 'Terra Quente Transmontana, nos concelhos de Valpaços e Mirandela. Tintos encorpados, de muita cor e macios; brancos frescos e florais. Por ter calor na maturação, lembra o Alentejo; difere do Douro por não separar uvas para vinhos generosos.',
          ['Trincadeira'], [], '', PT + 'Vinhos_portugueses'),
        sub('Chaves', 'DOC (sub-região)', 'Chaves, Vila Real, Portugal', 'Sub-região da DOC Trás-os-Montes (antes IPR).', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Planalto Mirandês', 'DOC (sub-região)', 'Miranda do Douro, Bragança, Portugal', 'Sub-região da DOC Trás-os-Montes (antes IPR).', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas')
      ] },

    { name: 'Douro e Porto', geo: 'PT:Douro', sources: [EN + 'Douro_DOC', EN + 'Port_wine'],
      description: 'Vale do rio Douro e dos afluentes (Varosa, Corgo, Távora, Torto, Pinhão), protegido do Atlântico pelas serras do Marão e Montemuro. A primeira região vinícola demarcada do mundo (carta régia de 10/09/1756, sob o Marquês de Pombal). Produz tanto vinho do Porto (fortificado; fermentação interrompida com aguardente, 19–22%) quanto vinhos tranquilos "Douro", em volume parecido. Vinhas em socalcos; xisto para o Porto, granito para os vinhos de mesa. Patrimônio Mundial da UNESCO desde 2001.',
      climate: 'Continental: verões quentes e secos, invernos frios; mais quente e seco rumo ao leste.', soils: 'Xisto, com zonas de granito.', altitude: '',
      history: 'A menção mais antiga a "vinho do Porto" é de 1675–1678; o Tratado de Methuen (1703) e as feitorias britânicas no Porto fizeram do Porto o produto principal. A Companhia Geral da Agricultura das Vinhas do Alto Douro (1756) teve o monopólio. O Barca Velha (1952), de Fernando Nicolau de Almeida para a Ferreira, abriu o caminho dos grandes tintos do Douro; com a entrada na CEE (1986) caiu o monopólio das casas exportadoras de Porto, e produtores do vale passaram a engarrafar.',
      grapes: ['Touriga Nacional', 'Touriga Franca', 'Tempranillo', 'Tinta Barroca', 'Tinto Cão'],
      grapes_other: ['Tinta Amarela', 'Sousão', 'Trousseau', 'Mourisco Tinto', 'Malvasia Fina', 'Gouveio', 'Rabigato', 'Viosinho', 'Donzelinho Branco'],
      notable_wines: 'Porto Ruby, Tawny (10 a 50 anos), Colheita, LBV, Vintage, Branco, Rosé; Barca Velha; Chryseia; Moscatel do Douro (Favaios)',
      producers: [
        prod('Symington Family Estates', 'Graham\'s; Warre\'s; Dow\'s; Cockburn\'s; Smith Woodhouse; Quinta do Vesuvio; Chryseia; Altano', EN + 'Symington_Family_Estates'),
        prod('Taylor\'s (Taylor Fladgate)', 'Quinta de Vargellas; Chip Dry (Porto branco, 1934)', EN + 'Port_wine'),
        prod('Croft', 'Porto rosé (lançado em 2008)', EN + 'Port_wine'),
        prod('Fonseca', 'Quinta Milieu', EN + 'Port_wine'),
        prod('Quinta do Noval', 'Nacional (vinhas não enxertadas, plantadas em 1925)', EN + 'Port_wine'),
        prod('Niepoort', '', EN + 'Port_wine'), prod('Sandeman', 'marca da Sogrape', EN + 'Sogrape'),
        prod('Quinta do Crasto', 'pioneira dos tintos do Douro nos anos 1990', EN + 'Port_wine'),
        prod('Poças', 'Porto rosé (2008)', EN + 'Port_wine'), prod('Kopke', 'Tawny Reserva', EN + 'Port_wine'),
        prod('Burmester', '', EN + 'Port_wine'), prod('Churchill\'s', '', EN + 'Port_wine'),
        prod('Real Companhia Velha', 'companhia pombalina de 1756', PT + 'Companhia_Geral_da_Agricultura_das_Vinhas_do_Alto_Douro')],
      subregions: [
        sub('Baixo Corgo', 'DOC (sub-região)', 'Peso da Régua, Vila Real, Portugal', 'A oeste, "abaixo do Corgo": o clima mais ameno e mais chuvoso; 14.000 ha. Foi plantada primeiro, mas em geral dá vinhos considerados de menor qualidade que as outras duas.', [], [], '', EN + 'Douro_DOC'),
        sub('Cima Corgo', 'DOC (sub-região)', 'Pinhão, Vila Real, Portugal', 'A maior sub-região (19.000 ha), centrada no Pinhão, onde fica a maioria das quintas famosas.', [],
          [], '', EN + 'Douro_DOC'),
        sub('Douro Superior', 'DOC (sub-região)', 'Vila Nova de Foz Côa, Guarda, Portugal', 'A mais quente e seca, até a fronteira espanhola; 8.700 ha. Menos acessível, foi plantada por último e ainda se expande. Da Quinta do Vale Meão, aqui, vieram as uvas do primeiro Barca Velha (1952).',
          [], [prod('Casa Ferreirinha (Sogrape)', 'Barca Velha; Vinha Grande', PT + 'Casa_Ferreirinha')], 'Barca Velha', EN + 'Douro_DOC')
      ] },

    { name: 'Távora-Varosa', geo: 'PT:Távora-Varosa', sources: [EN + 'T%C3%A1vora-Varosa_DOC'],
      description: 'Pequena DOC no noroeste das Beiras, junto ao Douro (antes IPR Varosa; absorveu a IPR Encostas da Nave). Seus brancos são tradicionalmente usados como base de espumantes; os da antiga Encostas da Nave lembram os do Douro.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Malvasia Fina', 'Gouveio', 'Cercial', 'Touriga Nacional'], grapes_other: ['Chardonnay', 'Pinot Noir', 'Pinot Blanc', 'Tempranillo', 'Touriga Franca'],
      notable_wines: 'Espumantes', producers: [],
      subregions: [
        sub('Távora-Varosa', 'DOC', 'Lamego, Viseu, Portugal', 'Área da DOC Távora-Varosa.', ['Malvasia Fina', 'Cercial'], [], 'Espumantes', EN + 'T%C3%A1vora-Varosa_DOC')
      ] },

    { name: 'Dão', geo: 'PT:Dão', sources: [EN + 'D%C3%A3o_DOC', PT + 'Vinhos_portugueses'],
      description: 'Beira Alta, planalto nos vales do Mondego e do Dão, protegido por serras de granito (Estrela, Caramulo, Nave). Segunda região demarcada de Portugal (1908) e berço da Touriga Nacional, que deve ser ao menos 20% dos tintos. 80% é tinto: vinhos de muitos taninos, com boa guarda. Brancos de Encruzado, hoje frescos e aromáticos. "Dão Nobre" designa reservas de topo.',
      climate: 'Temperado com extremos continentais: invernos frios e chuvosos, verões quentes e secos.', soils: 'Areia bem drenada sobre granito; também xisto.', altitude: '400–700 m',
      history: 'A vinha foi desenvolvida pelo clero, sobretudo os monges de Cister. Nos anos 1940 o governo de Salazar impôs cooperativas com exclusividade sobre as uvas, o que estagnou a região até o fim das regras em 1979.',
      grapes: ['Touriga Nacional', 'Tempranillo', 'Jaen', 'Alfrocheiro', 'Encruzado'], grapes_other: ['Bical', 'Cercial', 'Malvasia Fina', 'Verdelho'],
      notable_wines: 'Dão Nobre; Dão Garrafeira',
      producers: [prod('João de Sacadura Botte Côrte-Real (histórico)', 'Quinta da Aguieira; Quinta da Bica', EN + 'D%C3%A3o_DOC')],
      subregions: [
        sub('Alva', 'DOC (sub-região)', 'Oliveira do Hospital, Coimbra, Portugal', 'Sub-região do Dão; o nome pode aparecer no rótulo.', [], [], '', EN + 'D%C3%A3o_DOC'),
        sub('Besteiros', 'DOC (sub-região)', 'Tondela, Viseu, Portugal', 'Sub-região do Dão.', [], [], '', EN + 'D%C3%A3o_DOC'),
        sub('Castendo', 'DOC (sub-região)', 'Penalva do Castelo, Viseu, Portugal', 'Sub-região do Dão.', [], [], '', EN + 'D%C3%A3o_DOC'),
        sub('Serra da Estrela', 'DOC (sub-região)', 'Gouveia, Guarda, Portugal', 'Sub-região do Dão, junto à serra.', [], [], '', EN + 'D%C3%A3o_DOC'),
        sub('Silgueiros', 'DOC (sub-região)', 'Silgueiros, Viseu, Portugal', 'Sub-região do Dão.', [], [], '', EN + 'D%C3%A3o_DOC'),
        sub('Terras de Azurara', 'DOC (sub-região)', 'Mangualde, Viseu, Portugal', 'Sub-região do Dão.', [], [], '', EN + 'D%C3%A3o_DOC'),
        sub('Terras de Senhorim', 'DOC (sub-região)', 'Nelas, Viseu, Portugal', 'Sub-região do Dão.', [], [], '', EN + 'D%C3%A3o_DOC')
      ] },

    { name: 'Bairrada', geo: 'PT:Bairrada', sources: [EN + 'Bairrada_DOC', PT + 'Vinhos_portugueses'],
      description: 'Beira Litoral, entre Águeda e Coimbra, até as dunas: faixa costeira estreita e plana (Anadia, Cantanhede, Mealhada, Oliveira do Bairro e partes de Vagos, Coimbra e Aveiro). Terra da Baga, tinta muito ácida e tânica, de cor intensa e longa guarda, usada também em espumantes. Cerca de 2/3 do espumante português nasce aqui; Anadia é a "Capital do Espumante". Espumante é o par tradicional do leitão da Bairrada.',
      climate: 'Marítimo e suave, com muita chuva.', soils: 'Argila (o "barro" que dá nome à região), onde vai a Baga; areia, onde vão as brancas.', altitude: '',
      history: 'Vinha desde o século X. No século XVII, os exportadores do Porto cortavam vinhos da Bairrada com os do Douro.',
      grapes: ['Baga', 'Fernão Pires', 'Bical', 'Arinto'], grapes_other: ['Touriga Nacional', 'Alfrocheiro', 'Cercial', 'Merlot', 'Syrah', 'Cabernet Sauvignon', 'Pinot Noir', 'Chardonnay'],
      notable_wines: 'Tintos de Baga; espumantes da Bairrada',
      producers: [],
      subregions: [
        sub('Anadia', 'DOC Bairrada (município)', 'Anadia, Aveiro, Portugal', '"Capital do Espumante" da Bairrada.', ['Baga', 'Fernão Pires'],
          [prod('Luís Pato', 'dedicação às castas autóctones, sobretudo a Baga', PT + 'Lu%C3%ADs_Pato'),
            prod('Caves Aliança (Aliança Vinhos de Portugal)', 'espumantes, aguardentes e vinhos, em Sangalhos', PT + 'Bacalh%C3%B4a_Vinhos_de_Portugal')],
          'Espumante da Bairrada', EN + 'Bairrada_DOC')
      ] },

    { name: 'Beira Interior', geo: 'PT:Beira Interior', sources: [EN + 'Beira_Interior_DOC'],
      description: 'Centro-leste de Portugal, na região do vinho regional Beiras. DOC criada em 2005 juntando três antigas IPRs, que viraram sub-regiões e podem constar no rótulo.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Castelo Rodrigo', 'DOC (sub-região)', 'Figueira de Castelo Rodrigo, Guarda, Portugal', 'Sub-região da Beira Interior (antiga IPR).', [], [], '', EN + 'Beira_Interior_DOC'),
        sub('Pinhel', 'DOC (sub-região)', 'Pinhel, Guarda, Portugal', 'Sub-região da Beira Interior (antiga IPR).', [], [], '', EN + 'Beira_Interior_DOC'),
        sub('Cova da Beira', 'DOC (sub-região)', 'Fundão, Castelo Branco, Portugal', 'Sub-região da Beira Interior (antiga IPR).', [], [], '', EN + 'Beira_Interior_DOC')
      ] },

    { name: 'Lisboa', geo: 'PT:Lisboa', sources: [PT + 'Vinhos_portugueses', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'],
      description: 'Antiga Estremadura, ao norte e a oeste da capital. Além de DOCs como Alenquer, Arruda e Encostas de Aire, tem três denominações históricas que a expansão urbana de Lisboa quase engoliu: Colares, Bucelas e Carcavelos.',
      climate: 'Mediterrâneo; em Carcavelos, moderado pela foz do Tejo.', soils: '', altitude: '',
      history: 'Os romanos expandiram a viticultura na Lusitânia, sobretudo na Estremadura portuguesa e no sul.',
      grapes: ['Arinto', 'Castelão', 'Fernão Pires'], grapes_other: ['Ramisco', 'Malvasia', 'Sercial', 'Rabo de Ovelha', 'Galego Dourado'],
      notable_wines: 'Colares (Ramisco); Bucelas (Arinto); Carcavelos (generoso)', producers: [],
      subregions: [
        sub('Colares', 'DOC', 'Colares, Lisboa, Portugal', 'Entre a Serra de Sintra e o Cabo da Roca, em "chão de areia" protegido do vento por dunas e paliçadas de cana. Como a filoxera não vive na areia, as vinhas de Ramisco não são enxertadas e estão entre as mais antigas de Portugal. Tintos (75%) de cor densa e taninos adstringentes, envelhecidos mais de dez anos antes da venda; brancos de Malvasia. Demarcada em 1908; vinhas plantadas desde 1255 por D. Afonso III. A área caiu de ~1.000 ha (anos 1940) para ~20 ha; entre 1934 e 1994 só a adega cooperativa podia usar a denominação. Um dos vinhos portugueses mais caros.',
          ['Ramisco', 'Malvasia'], [], 'Colares tinto de Ramisco', EN + 'Colares_DOC'),
        sub('Bucelas', 'DOC', 'Bucelas, Lisboa, Portugal', 'Vale do Trancão, no concelho de Loures, ao norte de Lisboa; demarcada em 1911. Brancos secos com no mínimo 75% de Arinto, que mantém acidez alta no calor, com Sercial (Esgana Cão) e Rabo de Ovelha. Wellington levou o vinho à corte inglesa, onde era chamado de "Lisbon Hock"; provavelmente é o "Charneco" citado por Shakespeare. Também espumantes e colheitas tardias.',
          ['Arinto', 'Sercial', 'Rabo de Ovelha'], [], 'Bucelas branco (Arinto)', EN + 'Bucelas_DOC'),
        sub('Carcavelos', 'DOC', 'Carcavelos, Lisboa, Portugal', 'A menor região vinícola portuguesa, entre Cascais e Oeiras. Vinho licoroso cor de topázio, de aromas amendoados: fermentado até secar, fortificado a 18–20% e adoçado com "vinho abafado", envelhece de três a cinco anos em carvalho. Ganhou fama com o Marquês de Pombal, que tinha vinhas em Oeiras; demarcada em 1908. Restam ~10 ha.',
          ['Arinto', 'Galego Dourado', 'Trincadeira'], [], 'Carcavelos licoroso', EN + 'Carcavelos_DOC'),
        sub('Alenquer', 'DOC', 'Alenquer, Lisboa, Portugal', 'DOC da região de Lisboa.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Arruda', 'DOC', 'Arruda dos Vinhos, Lisboa, Portugal', 'DOC da região de Lisboa, ao norte de Bucelas.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Encostas de Aire', 'DOC', 'Alcobaça, Leiria, Portugal', 'DOC com duas sub-regiões: Alcobaça e Ourém.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas')
      ] },

    { name: 'Tejo', geo: 'PT:Tejo', sources: [PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas', EN + 'Portuguese_wine'],
      description: 'Vale do rio Tejo, no antigo Ribatejo. A DOC Do Tejo substituiu a DOC Ribatejo e tem seis sub-regiões; o vinho regional é o Tejo VR. Longa lista de castas autorizadas, portuguesas e internacionais.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Castelão', 'Trincadeira', 'Fernão Pires', 'Arinto'], grapes_other: ['Touriga Nacional', 'Tempranillo', 'Alicante Bouschet', 'Syrah', 'Cabernet Sauvignon', 'Verdelho', 'Alvarinho'],
      notable_wines: '', producers: [],
      subregions: [
        sub('Almeirim', 'DOC (sub-região)', 'Almeirim, Santarém, Portugal', 'Sub-região da DOC Do Tejo.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Cartaxo', 'DOC (sub-região)', 'Cartaxo, Santarém, Portugal', 'Sub-região da DOC Do Tejo.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Chamusca', 'DOC (sub-região)', 'Chamusca, Santarém, Portugal', 'Sub-região da DOC Do Tejo.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Coruche', 'DOC (sub-região)', 'Coruche, Santarém, Portugal', 'Sub-região da DOC Do Tejo.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Santarém', 'DOC (sub-região)', 'Santarém, Santarém, Portugal', 'Sub-região da DOC Do Tejo.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Tomar', 'DOC (sub-região)', 'Tomar, Santarém, Portugal', 'Sub-região da DOC Do Tejo.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas')
      ] },

    { name: 'Península de Setúbal', geo: 'PT:Setúbal', sources: [PT + 'Vinhos_portugueses', PT + 'Regi%C3%A3o_de_vinhos_da_Pen%C3%ADnsula_de_Set%C3%BAbal'],
      description: 'Ao sul de Lisboa, entre os estuários do Tejo e do Sado, sob a influência da Serra da Arrábida. Conhecida pelo Moscatel de Setúbal (generoso), por tintos de cor intensa de Castelão (Periquita) e por brancos de Fernão Pires. Reúne as DOCs Setúbal e Palmela, demarcadas em 1907/1908, e o vinho regional Península de Setúbal.',
      climate: 'Misto subtropical e mediterrâneo, influenciado pelo mar e pelos rios.', soils: 'Calcário bem drenado na antiga Arrábida.', altitude: '',
      history: 'Tradição vinícola desde o comércio romano; os vinhos de Setúbal são mencionados pela primeira vez em 1797.',
      grapes: ['Castelão', 'Muscat of Alexandria', 'Moscatel Roxo', 'Fernão Pires'], grapes_other: ['Touriga Nacional', 'Tempranillo', 'Cabernet Sauvignon', 'Arinto', 'Roupeiro'],
      notable_wines: 'Moscatel de Setúbal; Periquita (J.M. da Fonseca); Quinta da Bacalhôa',
      producers: [
        prod('José Maria da Fonseca', 'Periquita (desde 1850); Lancers (rosé, 1944); Alambre (Moscatel de Setúbal)', EN + 'Jos%C3%A9_Maria_da_Fonseca'),
        prod('Bacalhôa Vinhos de Portugal', 'Quinta da Bacalhôa Tinto (1979, primeiro Cabernet Sauvignon português); Palácio da Bacalhôa', PT + 'Bacalh%C3%B4a_Vinhos_de_Portugal')],
      subregions: [
        sub('Setúbal (Moscatel de Setúbal)', 'DOC', 'Azeitão, Setúbal, Portugal', 'Generoso de Moscatel de Alexandria ou Moscatel Roxo (até 30% de outras uvas), envelhecido em madeira: damasco quando jovem (até 5–6 anos); passas, caramelo e nozes com a idade. Designações especiais Moscatel de Setúbal e Setúbal Roxo. O estilo teria sido criado por José Maria da Fonseca, que ainda domina a produção.',
          ['Muscat of Alexandria', 'Moscatel Roxo'], [prod('José Maria da Fonseca', 'Alambre', EN + 'Jos%C3%A9_Maria_da_Fonseca')], 'Moscatel de Setúbal; Setúbal Roxo', EN + 'Moscatel_de_Set%C3%BAbal'),
        sub('Palmela', 'DOC', 'Palmela, Setúbal, Portugal', 'Em torno da vila de Palmela; absorveu a antiga IPR Arrábida. Ficou conhecida por brancos meio-secos de Moscatel colhido cedo; hoje faz tintos e brancos secos.',
          ['Castelão', 'Muscat of Alexandria', 'Fernão Pires'], [], '', EN + 'Palmela_DOC')
      ] },

    { name: 'Alentejo', geo: 'PT:Alentejo', sources: [PT + 'Vinho_do_Alentejo', EN + 'Alentejo_wine'],
      description: 'Sul de Portugal, cerca de um terço do território: grandes planícies de solos pobres, do Tejo ao Algarve. ~22.000 ha de vinha, 10% do país; DOC Alentejo (11.763 ha) com oito sub-regiões e o vinho regional Alentejano. Tintos encorpados de Trincadeira, Aragonez, Castelão e Alicante Bouschet; brancos macios de Roupeiro, Antão Vaz e Arinto. Alguns produtores ainda fermentam em talhas de barro, como na época romana. Em 2008/09 teve 44% do mercado português em valor.',
      climate: 'Quente e seco, muito sol; considerado em 2005 a região vinícola mais ameaçada pela mudança climática entre 27 estudadas (Gregory V. Jones).', soils: 'Barro, xisto, granito, calcário e argila.', altitude: '',
      history: 'Vinha desde a fundação romana de Beja. Grande modernização nos anos 1980; demarcação em 1988; Comissão Vitivinícola Regional Alentejana (CVRA) criada em 1989. Em 2003 as antigas DOCs e IPRs viraram sub-regiões da DOC Alentejo.',
      grapes: ['Trincadeira', 'Tempranillo', 'Castelão', 'Alicante Bouschet', 'Antão Vaz', 'Roupeiro', 'Arinto'], grapes_other: ['Alfrocheiro', 'Touriga Nacional', 'Syrah', 'Cabernet Sauvignon', 'Fernão Pires', 'Moreto'],
      notable_wines: 'Vinhos de talha; Tinto da Ânfora',
      producers: [
        prod('Adega Cartuxa (Fundação Eugénio de Almeida)', '', PT + 'Funda%C3%A7%C3%A3o_Eug%C3%A9nio_de_Almeida'),
        prod('Bacalhôa Vinhos de Portugal', 'Tinto da Ânfora (1978); Quinta do Carmo (Estremoz)', PT + 'Bacalh%C3%B4a_Vinhos_de_Portugal')],
      subregions: [
        sub('Reguengos', 'DOC (sub-região)', 'Reguengos de Monsaraz, Évora, Portugal', 'Uma das maiores sub-regiões: 3.215 ha DOC.', [],
          [prod('José Maria da Fonseca', 'adega em Reguengos de Monsaraz com fermentação em talhas de barro', EN + 'Jos%C3%A9_Maria_da_Fonseca')], '', PT + 'Vinho_do_Alentejo'),
        sub('Borba', 'DOC (sub-região)', 'Borba, Évora, Portugal', 'A maior área DOC: 3.423 ha (antiga DOC).', [], [], '', PT + 'Vinho_do_Alentejo'),
        sub('Redondo', 'DOC (sub-região)', 'Redondo, Évora, Portugal', '1.896 ha DOC (antiga DOC).', [], [], '', PT + 'Vinho_do_Alentejo'),
        sub('Vidigueira', 'DOC (sub-região)', 'Vidigueira, Beja, Portugal', '1.707 ha DOC (antiga DOC).', [], [], '', PT + 'Vinho_do_Alentejo'),
        sub('Évora', 'DOC (sub-região)', 'Évora, Évora, Portugal', '705 ha DOC (antiga IPR).', [], [prod('Adega Cartuxa (Fundação Eugénio de Almeida)', '', PT + 'Funda%C3%A7%C3%A3o_Eug%C3%A9nio_de_Almeida')], '', PT + 'Vinho_do_Alentejo'),
        sub('Portalegre', 'DOC (sub-região)', 'Portalegre, Portalegre, Portugal', 'A mais setentrional; 336 ha DOC. Foge à regra da planície: vinhas em encosta.', [], [], '', PT + 'Vinho_do_Alentejo'),
        sub('Moura', 'DOC (sub-região)', 'Moura, Beja, Portugal', '240 ha DOC (antiga IPR).', [], [], '', PT + 'Vinho_do_Alentejo'),
        sub('Granja-Amareleja', 'DOC (sub-região)', 'Amareleja, Beja, Portugal', '241 ha DOC (antiga IPR).', [], [], '', PT + 'Vinho_do_Alentejo')
      ] },

    { name: 'Algarve', geo: 'PT:Algarve', sources: [PT + 'Vinhos_portugueses'],
      description: 'Extremo sul, com quatro DOCs (Lagos, Lagoa, Portimão e Tavira), embora a venda se faça mais sob indicação geográfica. Vinhos suaves e frutados. Em 2019, 1.500 ha de vinha, 800 controlados pela comissão. O turismo deixou o vinho em segundo plano até o investimento recente.',
      climate: 'Marítimo, quente e seco, com pouca amplitude térmica e muito sol; montanhas ao norte (Espinhaço de Cão, Caldeirão, Monchique).', soils: '', altitude: '',
      history: 'A adega cooperativa de Lagoa chegou a produzir quase 4 milhões de litros por ano e abastecia os militares nas ex-colônias africanas.',
      grapes: ['Castelão', 'Tinta Negra', 'Arinto', 'Roupeiro'], grapes_other: ['Trincadeira', 'Alicante Bouschet', 'Tempranillo'],
      notable_wines: '', producers: [],
      subregions: [
        sub('Lagoa', 'DOC', 'Lagoa, Faro, Portugal', 'DOC do Algarve; sede da antiga grande adega cooperativa.', [], [], '', PT + 'Vinhos_portugueses'),
        sub('Lagos', 'DOC', 'Lagos, Faro, Portugal', 'DOC do Algarve.', [], [], '', PT + 'Vinhos_portugueses'),
        sub('Portimão', 'DOC', 'Portimão, Faro, Portugal', 'DOC do Algarve.', [], [], '', PT + 'Vinhos_portugueses'),
        sub('Tavira', 'DOC', 'Tavira, Faro, Portugal', 'DOC do Algarve.', [], [], '', PT + 'Vinhos_portugueses')
      ] },

    { name: 'Madeira', geo: 'PT:Madeira', sources: [EN + 'Madeira_wine', PT + 'Vinhos_portugueses'],
      description: 'Ilha vulcânica no Atlântico, ~400 km ao norte das Canárias. O vinho da Madeira é fortificado e envelhecido por calor e oxidação: estufa para os jovens (3 e 5 anos); método de canteiro para colheitas e frasqueiras. Por isso é longevo mesmo depois de aberto. Cerca de 85% vem da Tinta Negra; as castas nobres dão nome aos estilos, do mais doce ao mais seco: Malvasia (Malmsey), Boal, Verdelho e Sercial; a Terrantez, quinta nobre, renasce. "Rainwater" é um estilo leve, seco a meio-seco. ~450 ha, em socalcos ("poios") de basalto, com latadas e ~2.100 viticultores.',
      climate: 'Oceânico com influência tropical, chuvoso (média ~19 °C): fungos e podridão são ameaça constante.', soils: 'Basalto vulcânico vermelho e marrom.', altitude: '',
      history: 'Vinha desde o descobrimento (1419); o Infante D. Henrique trouxe a Malvasia de Creta. Escala das rotas atlânticas, o vinho era fortificado para a viagem; o calor dos porões melhorava-o, e daí nasceu a estufagem.',
      grapes: ['Tinta Negra', 'Malvasia', 'Boal', 'Verdelho', 'Sercial'], grapes_other: ['Terrantez', 'Trousseau', 'Listrão'],
      notable_wines: 'Madeira Malmsey, Boal, Verdelho, Sercial; Colheita e Frasqueira; Rainwater; Barbeito Terrantez 1795',
      producers: [],
      subregions: [
        sub('Madeira', 'DOC', 'Funchal, Madeira, Portugal', 'Denominação do vinho fortificado da ilha. Desde 1986 (regras da UE) a casta do rótulo deve ter 85% do vinho; em 2015 a Tinta Negra passou a casta recomendada.',
          ['Tinta Negra', 'Malvasia', 'Boal', 'Verdelho', 'Sercial'],
          [prod('Blandy\'s', 'fundada em 1811; garrafa de 1792 leiloada por £25.000 (2022)', EN + 'Madeira_wine'), prod('Cossart Gordon', 'fundada em 1745', EN + 'Madeira_wine'),
            prod('Madeira Wine Company', 'única a usar o Armazém de Calor; parceria com os Symington desde 1988–89', EN + 'Madeira_wine'), prod('Barbeito', 'Terrantez 1795', EN + 'Madeira_wine'),
            prod('Justino\'s', 'canteiro', EN + 'Madeira_wine'), prod('D\'Oliveiras', 'canteiro', EN + 'Madeira_wine'), prod('Borges', 'canteiro', EN + 'Madeira_wine'),
            prod('Broadbent', 'relançou o Madeira nos EUA em 1989', EN + 'Madeira_wine'), prod('Madeira Vintners', 'Listrão Reserva 5 anos (2020)', EN + 'Madeira_wine')],
          '', EN + 'Madeira_wine')
      ] },

    { name: 'Açores', geo: 'PT:Açores', sources: [EN + 'Pico_Island', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'],
      description: 'Arquipélago vulcânico no meio do Atlântico. A Paisagem da Cultura da Vinha da Ilha do Pico é Patrimônio Mundial da UNESCO desde 2004. Antigas IPRs: Pico, Biscoitos (Terceira) e Graciosa.',
      climate: '', soils: 'Basalto vulcânico negro.', altitude: '',
      history: 'A vinha no Pico começou no fim do século XV, com o povoamento. O Verdelho do Pico foi apreciado na Inglaterra, nas Américas e até nos palácios dos czares.',
      grapes: ['Verdelho'], grapes_other: [], notable_wines: 'Verdelho do Pico', producers: [],
      subregions: [
        sub('Pico', 'IPR', 'Madalena, Azores, Portugal', 'Na "Ilha Preta", o Verdelho encontrou condições ideais no solo vulcânico, protegido por muros de pedra negra (currais). Hoje a produção pesa menos na economia, mas há incentivos para restaurar os currais.',
          ['Verdelho'], [], 'Verdelho do Pico', EN + 'Pico_Island'),
        sub('Biscoitos', 'IPR', 'Biscoitos, Azores, Portugal', 'IPR na ilha Terceira.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas'),
        sub('Graciosa', 'IPR', 'Santa Cruz da Graciosa, Azores, Portugal', 'IPR na ilha Graciosa.', [], [], '', PT + 'Denomina%C3%A7%C3%B5es_de_origem_portuguesas')
      ] }
  ];

  var countries = [
    { name: 'Portugal', sources: [PT + 'Vinhos_portugueses', EN + 'Portuguese_wine'],
      description: 'Tem o sistema de denominação mais antigo do mundo: a Região Demarcada do Douro (1756). Cerca de 285 castas nativas, "um tesouro de castas locais" (Oxford Companion to Wine). ~199 mil ha de vinha (2015), a quarta maior área da UE. Duas paisagens vinícolas são Patrimônio Mundial: Alto Douro e Ilha do Pico. Classificação: DOC (31 segundo a ViniPortugal; eram 19 em 2009), IPR, Vinho Regional e Vinho de Mesa. O Tratado de Methuen (1703) abriu o mercado britânico. Termos de rótulo: Garrafeira, Reserva, Colheita, Quinta, Adega.' }
  ];

  return { code: 'PT', version: 1, countries: countries, regions: regions, country_of: 'Portugal' };
})());
