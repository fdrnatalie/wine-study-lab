/**
 * ENCICLOPÉDIA DE REGIÕES — pack ESPANHA (origem "pesquisado"). v1: 15 comunidades autônomas, DOs como sub-regiões.
 *
 * Pesquisa de 28/09/2026 na Wikipedia (inglês e espanhol): "Spanish wine", artigos das DOs (Rioja, Ribera del Duero,
 * Priorat, Rías Baixas, Sherry…) e de produtores (Vega Sicilia, López de Heredia, González Byass, Torres…).
 * Contornos EXATOS das comunidades autônomas (18_GeoSpain.js); pontos: OpenStreetMap Nominatim.
 * Produtores e rótulos só quando algum artigo os cita; a DO Rioja ocupa La Rioja, Álava e Navarra,
 * mas fica sob a comunidade La Rioja (onde está a maior parte).
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var ES = 'https://es.wikipedia.org/wiki/';

  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Galícia', geo: 'ES:Galicia', sources: [EN + 'Spanish_wine', EN + 'R%C3%ADas_Baixas_(DO)'],
      description: 'Noroeste da Espanha, na costa atlântica, acima de Portugal. Terra de brancos frescos (Albariño, Godello, Treixadura) e de tintos leves de Mencía em encostas de rios. Quatro DOs principais: Rías Baixas, Ribeiro, Ribeira Sacra e Valdeorras.',
      climate: 'Atlântico e muito chuvoso: de ~990 mm por ano no litoral a ~2.000 mm perto da divisa montanhosa com Castela e Leão.',
      soils: 'Predomínio de granito no oeste; ardósia e argila no leste (vale do Sil).', altitude: '',
      history: 'A entrada da Espanha na União Europeia (1986) trouxe ajuda econômica à vitivinicultura rural da Galícia.',
      grapes: ['Albariño', 'Godello', 'Treixadura', 'Mencía'],
      grapes_other: ['Loureiro', 'Caíño Tinto', 'Sousón', 'Brancellao', 'Doña Blanca', 'Torrontés'],
      notable_wines: 'Albariño de Rías Baixas; brancos de Treixadura do Ribeiro e o doce Viño Tostado; Mencía da Ribeira Sacra; Godello de Valdeorras',
      producers: [],
      subregions: [
        sub('Rías Baixas', 'DO', 'Cambados, Pontevedra, Spain', 'Província de Pontevedra e sul da Corunha. Famosa pelos brancos de Albariño, uva que ocupa mais de 90% das vinhas e que teria sido trazida no século XII pelos monges cistercienses do mosteiro de Armenteira. DO desde 1988 (antes "Denominación Específica Albariño", de 1980). Cinco subzonas: Val do Salnés (em torno de Cambados, a mais fria), O Rosal (terraços no Minho, junto à fronteira portuguesa), Condado do Tea (a mais quente), Soutomaior e Ribera do Ulla. As vinhas são conduzidas em latadas sobre postes de granito ("parrales").',
          ['Albariño', 'Loureiro', 'Treixadura', 'Caíño Blanco'], [], 'Albariño', EN + 'R%C3%ADas_Baixas_(DO)'),
        sub('Ribeiro', 'DOP', 'Ribadavia, Ourense, Spain', 'Noroeste da província de Ourense, nos vales dos rios Avia, Minho e Arnoia; citado por Estrabão. Brancos são 90% da produção, em geral cortes jovens de Treixadura; também tintos (~9%) e o Viño Tostado, doce de uvas secas por três meses. Solos de granito decomposto ("sábrego"), vinhas em socalcos até ~450 m.',
          ['Treixadura', 'Torrontés', 'Godello', 'Lado', 'Caíño Blanco', 'Loureiro', 'Albariño'], [], 'Treixadura; Viño Tostado', EN + 'Ribeiro_(DO)'),
        sub('Ribeira Sacra', 'DOP', 'Monforte de Lemos, Lugo, Spain', '"Margem sagrada": encostas íngremes dos cânions dos rios Minho e Sil, entre Lugo e Ourense; DO desde 1996. Cinco subzonas (Chantada, Amandi, Ribeiras do Miño, Ribeiras do Sil, Quiroga-Bibei). Vinhas em socalcos, sem mecanização possível, às vezes acessíveis só pelo rio. Clima mais continental que atlântico; granito no Minho, ardósia e argila no Sil.',
          ['Mencía', 'Brancellao', 'Merenzao', 'Sousón', 'Godello'], [], 'Tintos de Mencía', EN + 'Ribeira_Sacra_(DO)'),
        sub('Valdeorras', 'DOP', 'O Barco de Valdeorras, Ourense, Spain', 'Margens do rio Sil, no sul de Ourense; possivelmente a primeira região vinícola da Galícia, plantada pelos romanos após a mineração de ouro. DO desde 1945. A Godello nativa foi reintroduzida em experiências dos anos 1970. Vinhas de 240 a 320 m, em solos aluviais férteis.',
          ['Godello', 'Mencía'], [], 'Godello', EN + 'Valdeorras_(DO)')
      ] },

    { name: 'Castela e Leão', geo: 'ES:Castilla-Leon', sources: [EN + 'Spanish_wine', EN + 'Ribera_del_Duero_(DO)'],
      description: 'Meseta norte, ao longo do rio Duero (que em Portugal vira Douro). Reúne Ribera del Duero (Tempranillo, chamado Tinto Fino), Rueda (brancos de Verdejo), Toro (Tinta de Toro), Cigales (claretes e rosados) e, no noroeste, o Bierzo (Mencía).',
      climate: 'Continental extremo: verões quentes e secos, invernos frios, grande amplitude térmica.',
      soils: 'Sedimentos arenosos, argilas e calcário na meseta; ardósia e quartzo no Bierzo.', altitude: '600–911 m na meseta',
      history: 'Monges beneditinos de Cluny teriam trazido a viticultura moderna à Ribera no século XII; em Rueda, o rei Afonso VI ofereceu terras a colonos e ordens no século XI.',
      grapes: ['Tempranillo', 'Verdejo', 'Mencía'], grapes_other: ['Garnacha', 'Cabernet Sauvignon', 'Merlot', 'Albillo Mayor', 'Doña Blanca', 'Godello'],
      notable_wines: 'Vega Sicilia Único, Pingus, Tinto Pesquera (Ribera del Duero); Verdejo de Rueda; Tinta de Toro',
      producers: [],
      subregions: [
        sub('Ribera del Duero', 'DOP', 'Peñafiel, Valladolid, Spain', 'Meseta norte, 115 km ao longo do Duero (Burgos, Valladolid, Segóvia e Soria), centrada em Aranda de Duero; os vinhedos mais famosos ficam em torno de Peñafiel e Roa. DO fundada em 21/07/1982. Quase só tintos de Tinto Fino (Tempranillo), às vezes com Cabernet Sauvignon, Merlot e Malbec. Pesquera e La Horra são aldeias de fama pela qualidade. "Região vinícola do ano" de 2012 da Wine Enthusiast.',
          ['Tempranillo', 'Cabernet Sauvignon', 'Merlot', 'Malbec', 'Albillo Mayor'],
          [prod('Vega Sicilia', 'Único', EN + 'Vega_Sicilia'), prod('Dominio de Pingus', 'Pingus; Flor de Pingus; Amelia; PSI', EN + 'Dominio_de_Pingus'),
            prod('Tinto Pesquera (Alejandro Fernández)', 'Tinto Pesquera (100% Tempranillo)'), prod('Bodegas Protos', '', ES + 'Bodegas_Protos'),
            prod('Viña Sastre'), prod('Hacienda Monasterio'), prod('Pago de Carraovejas'), prod('Emilio Moro'), prod('Alión')],
          'Vega Sicilia Único; Pingus; Tinto Pesquera', EN + 'Ribera_del_Duero_(DO)'),
        sub('Rueda', 'DOP', 'Rueda, Valladolid, Spain', '72 municípios (Valladolid, Segóvia, Ávila) num planalto de 600–780 m, cortado pelo Duero; conhecida pelos brancos de Verdejo. A Verdejo quase se extinguiu após a filoxera e foi salva pelo viticultor Ángel Rodríguez Vidal (Bodega Martinsancho); em 1972 o investimento do Marqués de Riscal abriu uma segunda era de qualidade. DO desde 1980; categoria "Gran Vino de Rueda" para vinhas com mais de 30 anos.',
          ['Verdejo', 'Sauvignon Blanc', 'Macabeo'],
          [prod('Bodega Martinsancho', 'Verdejo (Ángel Rodríguez Vidal)'), prod('Marqués de Riscal', 'investimento em Rueda desde 1972'), prod('Bodegas Protos', 'vinhos DO Rueda desde 2006', ES + 'Bodegas_Protos')],
          'Verdejo; Gran Vino de Rueda', EN + 'Rueda_(DO)'),
        sub('Toro', 'DOP', 'Toro, Zamora, Spain', 'Sudeste da província de Zamora; 8.000 ha de vinhas. O solo arenoso protegeu as vinhas da filoxera, e o Toro exportou muito vinho à França na crise; ainda há vinhas velhas pré-filoxera de Tinta de Toro. DO criada em 1987. Tintos quase sempre 100% Tinta de Toro.',
          ['Tempranillo', 'Garnacha', 'Verdejo', 'Malvasía Castellana'], [], 'Tinta de Toro', EN + 'Toro_(DO)'),
        sub('Bierzo', 'DOP', 'Ponferrada, León, Spain', 'Noroeste da província de León, na bacia do rio Sil: vales pequenos no Alto Bierzo e planície no Bajo Bierzo. Clima entre o úmido galego e o seco castelhano. Tintos de Mencía (mínimo 70% nos jovens); brancos de Doña Blanca e Godello. A chegada de Álvaro Palacios, vindo da Rioja, abriu o Bierzo ao mercado internacional; seguiram-no nomes como Raúl Pérez e Verónica Ortega.',
          ['Mencía', 'Doña Blanca', 'Godello', 'Alicante Bouschet'],
          [prod('Álvaro Palacios'), prod('Raúl Pérez'), prod('Verónica Ortega')], 'Mencía', EN + 'Bierzo_(DO)'),
        sub('Cigales', 'DOP', 'Cigales, Valladolid, Spain', 'Ao norte de Valladolid, nas margens do rio Pisuerga, a 750 m; DO desde 1991. Na Idade Média, enquanto Toro fornecia tintos e Rueda brancos, Cigales se especializou em claretes e rosados, feitos em adegas subterrâneas escavadas a mais de 10 m.',
          ['Tempranillo', 'Garnacha', 'Verdejo'], [], 'Claretes e rosados', EN + 'Cigales_(DO)')
      ] },

    { name: 'Rioja', geo: 'ES:La Rioja', sources: [EN + 'Rioja_(wine)', ES + 'Rioja_(vino)'],
      description: 'Vale do Ebro, no norte da Espanha. A DOCa Rioja cobre a comunidade de La Rioja, a província basca de Álava e parte de Navarra. Tem a DO mais antiga da Espanha, segundo a Wikipedia em espanhol (1925), e foi a primeira DOCa (1991). Três zonas: Rioja Alta, Rioja Alavesa e Rioja Oriental; muitos vinhos historicamente cortam uvas das três. Tintos são 90,9% das uvas; a Tempranillo tem 87,7% das tintas. Crianza, Reserva e Gran Reserva exigem pelo menos 85% de Tempranillo.',
      climate: 'Continental na Alta e Alavesa; mediterrâneo, mais quente e seco na Oriental. As montanhas Cantábricas fazem sombra de chuva: ~460 mm perto de Haro contra ~1.500 mm no litoral basco.',
      soils: '', altitude: '',
      history: 'Primeiro registro escrito da uva em 873 (mosteiro de San Millán). Em 1852 Luciano Murrieta fez o primeiro vinho fino da região após aprender o método em Bordeaux; com a filoxera na França, vinhateiros franceses cruzaram os Pireneus para a Rioja. Conselho Regulador criado em 1926. Em 2017 surgiram as menções Viñedo Singular, vinhos de zona e de município.',
      grapes: ['Tempranillo', 'Garnacha', 'Graciano', 'Carignan', 'Macabeo'],
      grapes_other: ['Maturana Tinta', 'Malvasía de Rioja', 'Garnacha Blanca', 'Tempranillo Blanco', 'Maturana Blanca', 'Turruntés'],
      notable_wines: 'Castillo Ygay (Marqués de Murrieta); Viña Tondonia (López de Heredia); Gran Reserva 904 e 890, Viña Ardanza (La Rioja Alta); Imperial, Viña Real, Contino (CVNE)',
      producers: [
        prod('Bodegas Marqués de Murrieta', 'Castillo Ygay Gran Reserva Especial; Dalmau', EN + 'Bodegas_Marqu%C3%A9s_de_Murrieta'),
        prod('Marqués de Riscal', 'Gran Reserva; Barón de Chirel (com Cabernet Sauvignon, permitido por uso desde 1858)', ES + 'Rioja_(vino)'),
        prod('Remelluri', 'Remelluri Blanco', ES + 'Rioja_(vino)'),
        prod('Martínez Bujanda', 'Finca Valpiedra', ES + 'Rioja_(vino)'),
        prod('Barón de Ley', 'Finca Monasterio', ES + 'Rioja_(vino)'),
        prod('Bodegas Rioja Santiago', 'primeira sangria engarrafada (anos 1960)', EN + 'Rioja_(wine)')],
      subregions: [
        sub('Rioja Alta', 'DOCa (zona)', 'Haro, La Rioja, Spain', 'Oeste da região, em maior altitude: estação mais curta, frutas mais vivas e vinhos mais leves, de estilo "velho mundo". Especializou-se na vinha desde o século XV; responde por ~122 milhões de kg de uva (2024), quase metade da DOCa. Haro concentra bodegas históricas; Jancis Robinson inclui López de Heredia, La Rioja Alta, CVNE, Muga e Murrieta na "aristocracia da Rioja".',
          ['Tempranillo', 'Garnacha', 'Graciano'],
          [prod('Bodegas López de Heredia', 'Viña Tondonia; Viña Bosconia; Viña Cubillo; Viña Gravonia', EN + 'Bodegas_L%C3%B3pez_de_Heredia'),
            prod('La Rioja Alta S.A.', 'Gran Reserva 904; Gran Reserva 890; Viña Ardanza; Viña Arana', EN + 'La_Rioja_Alta'),
            prod('CVNE (Compañía Vinícola del Norte de España)', 'CVNE; Imperial; Viña Real; Contino', EN + 'Compa%C3%B1%C3%ADa_Vin%C3%ADcola_del_Norte_de_Espa%C3%B1a'),
            prod('Bodegas Muga', 'tintos, rosados e brancos de Tempranillo, Garnacha, Mazuelo, Malvasía e Viura', EN + 'Bodegas_Muga')],
          '', EN + 'Rioja_(wine)'),
        sub('Rioja Alavesa', 'DOCa (zona)', 'Laguardia, Álava, Spain', 'Província de Álava (País Basco), na margem norte do Ebro. Clima parecido com o da Alta, mas vinhos de mais corpo e acidez; solos pobres levam a baixa densidade de plantio.',
          ['Tempranillo'], [], '', EN + 'Rioja_(wine)'),
        sub('Rioja Oriental', 'DOCa (zona)', 'Alfaro, La Rioja, Spain', 'Antiga Rioja Baja: clima mediterrâneo, a zona mais quente e seca (irrigação permitida desde o fim dos anos 1990). Parte dos vinhedos fica em Navarra. Vinhos de cor profunda e álcool alto, pouca acidez; tradicionalmente usados em corte com as outras zonas.',
          ['Garnacha', 'Tempranillo'], [], '', EN + 'Rioja_(wine)')
      ] },

    { name: 'País Basco', geo: 'ES:Pais Vasco', sources: [EN + 'Txakoli'],
      description: 'Costa atlântica do norte. Terra do txakoli (chacolí), branco levemente frisante, muito seco, ácido e de álcool baixo (9,5–11,5%), servido como aperitivo com pintxos e vertido do alto. Até os anos 1980 era um vinho caseiro; três DOs desde 1989. A Rioja Alavesa, no sul de Álava, pertence à DOCa Rioja.',
      climate: 'Atlântico: 1.000–1.600 mm de chuva por ano, médias de 7,5 a 18,7 °C, geadas ocasionais.', soils: '', altitude: '',
      history: 'A primeira menção a "vino chacolín" em espanhol é de um documento basco de 1520. O Museo del Txakoli fica no Palácio de Mendibile, em Leioa.',
      grapes: ['Hondarribi Zuri', 'Hondarribi Beltza'], grapes_other: ['Folle Blanche', 'Petit Manseng', 'Gros Manseng', 'Courbu'],
      notable_wines: 'Getariako Txakolina, Bizkaiko Txakolina, Arabako Txakolina',
      producers: [],
      subregions: [
        sub('Getariako Txakolina', 'DO', 'Getaria, Gipuzkoa, Spain', 'Em torno de Getaria, Zarautz e Aia (Gipuzkoa); o primeiro txakoli com DO (1989). Amarelo muito pálido a esverdeado; vinhas em latada ("parra") em encostas voltadas a sudeste. Área subiu de 60 para 177 ha.',
          ['Hondarribi Zuri', 'Hondarribi Beltza'], [], '', EN + 'Txakoli'),
        sub('Bizkaiko Txakolina', 'DO', 'Bakio, Biscay, Spain', 'Quase toda a Biscaia; DO desde 1994; ~150 ha em 85 localidades. Brancos de Hondarribi Zuri e Folle Blanche (localmente Munemahatsa) e tinto de Hondarribi Beltza; a antiga Oilar Begi volta aos poucos.',
          ['Hondarribi Zuri', 'Folle Blanche', 'Hondarribi Beltza'], [], '', EN + 'Txakoli'),
        sub('Arabako Txakolina', 'DO', 'Amurrio, Álava, Spain', 'Extremo noroeste de Álava (Aiara, Amurrio, Artziniega, Laudio, Okondo); a DO mais nova (2001); ~55 ha, depois de cair a 5 ha no fim do século XX. Amarelado, muito ácido e levemente espumoso.',
          ['Hondarribi Zuri', 'Petit Manseng', 'Gros Manseng', 'Courbu'], [], '', EN + 'Txakoli')
      ] },

    { name: 'Navarra', geo: 'ES:Navarra', sources: [EN + 'Navarra_(DO)'],
      description: 'Metade sul da comunidade de Navarra, nas encostas baixas dos Pireneus descendo para o Ebro. Antes famosa só pelos rosados, hoje faz tintos e brancos de qualidade. A DO tem cinco subzonas; parte da Rioja Oriental também fica em Navarra.',
      climate: 'Continental; o norte tem influência atlântica e noites frescas desde agosto. Chuva média de 625 mm.', soils: '', altitude: '',
      history: 'Adegas romanas do século II a.C.; na Idade Média os guias recomendavam o vinho navarro aos peregrinos do Caminho de Santiago. A filoxera (1892) destruiu ~98% dos 50.000 ha; estatuto da DO de 1933.',
      grapes: ['Tempranillo', 'Garnacha', 'Cabernet Sauvignon', 'Merlot'], grapes_other: ['Graciano', 'Carignan', 'Syrah', 'Pinot Noir', 'Chardonnay', 'Macabeo', 'Garnacha Blanca', 'Moscatel de Grano Menudo'],
      notable_wines: 'Rosados de Garnacha', producers: [],
      subregions: [
        sub('Ribera Baja', 'DOP (subzona)', 'Cascante, Navarra, Spain', 'Sul de Navarra, 14 municípios numa planície seca e arenosa na margem direita do Ebro; a subzona mais importante em área e número de bodegas.', [], [], '', EN + 'Navarra_(DO)'),
        sub('Ribera Alta', 'DOP (subzona)', 'Olite, Navarra, Spain', 'Centrada em Olite, na margem esquerda do Ebro; 26 municípios.', [], [], '', EN + 'Navarra_(DO)'),
        sub('Tierra Estella', 'DOP (subzona)', 'Estella, Navarra, Spain', 'Oeste, no curso médio do rio Ega e ao longo do Caminho de Santiago; 38 municípios.', [], [], '', EN + 'Navarra_(DO)'),
        sub('Valdizarbe', 'DOP (subzona)', 'Puente la Reina, Navarra, Spain', 'A mais setentrional, no alto rio Arga, onde convergem caminhos de Santiago; 25 municípios; menor rendimento (6.200 kg/ha).', [], [], '', EN + 'Navarra_(DO)'),
        sub('Baja Montaña', 'DOP (subzona)', 'Sangüesa, Navarra, Spain', 'Nordeste da DO, no curso médio do rio Aragón; 22 municípios.', [], [], '', EN + 'Navarra_(DO)')
      ] },

    { name: 'Aragão', geo: 'ES:Aragon', sources: [EN + 'Somontano_(DO)', EN + 'Cari%C3%B1ena_(DO)'],
      description: 'Vale do Ebro, entre os Pireneus e o Sistema Ibérico. No norte, Somontano (Huesca), aberto a uvas internacionais; em Zaragoza, as terras da Garnacha: Cariñena, Campo de Borja e Calatayud.',
      climate: 'Continental, com o "cierzo" (vento frio do norte) e grande amplitude térmica.', soils: 'Calcários pobres e pedregosos.', altitude: '350–1.000 m',
      history: 'Cariñena foi uma das primeiras DOs da Europa (1932) e é tida como origem da uva Cariñena/Carignan. O mosteiro cisterciense de Veruela documenta doações de vinhas em 1203 no Campo de Borja.',
      grapes: ['Garnacha', 'Tempranillo', 'Carignan', 'Cabernet Sauvignon'], grapes_other: ['Moristel', 'Parraleta', 'Macabeo', 'Chardonnay', 'Gewürztraminer', 'Muscat of Alexandria'],
      notable_wines: 'Garnacha de Campo de Borja e Calatayud; Moscatéis de Cariñena', producers: [],
      subregions: [
        sub('Somontano', 'DOP', 'Barbastro, Huesca, Spain', '"Ao pé da montanha": do sopé dos Pireneus ao vale do Ebro, centrada em Barbastro; DO desde 1984; mais de 4.000 ha e ~500 viticultores. Solos de argila arenosa escura ricos em calcário; os Pireneus barram o vento frio do norte. Mistura uvas locais (Moristel, Parraleta, Alcañón) e internacionais.',
          ['Cabernet Sauvignon', 'Merlot', 'Tempranillo', 'Moristel', 'Parraleta', 'Chardonnay', 'Gewürztraminer'],
          [prod('Bodega Enate', '', ES + 'Somontano_(vino)'), prod('Bodega Viñas del Vero', 'do grupo González Byass desde 2008', EN + 'Gonz%C3%A1lez_Byass'), prod('Bodega Pirineos', '', ES + 'Somontano_(vino)'), prod('Bodega Otto Bestué', '', ES + 'Somontano_(vino)'), prod('Bodega Laus', '', ES + 'Somontano_(vino)'), prod('Bodega Blecua', '', ES + 'Somontano_(vino)')],
          '', EN + 'Somontano_(DO)'),
        sub('Cariñena', 'DOP', 'Cariñena, Zaragoza, Spain', 'Planalto de Campo de Cariñena, 50 km a sudoeste de Zaragoza, de 400 a 800 m até a Sierra de la Virgen. Origem reconhecida da uva Cariñena (Carignan). Nos anos 1990, fusões de cooperativas trouxeram vinhos mais frescos; as exportações quadruplicaram desde 1995. Ainda produz Moscatéis doces.',
          ['Garnacha', 'Tempranillo', 'Carignan', 'Macabeo'], [], '', EN + 'Cari%C3%B1ena_(DO)'),
        sub('Campo de Borja', 'DOP', 'Borja, Zaragoza, Spain', 'Comarca entre a planície do Ebro e o Sistema Ibérico, dominada pelo Moncayo, que cria um microclima; 16 municípios; vinhas de 350 a 750 m; chuva de só ~350–450 mm. Tintos jovens de Garnacha pura ou com Tempranillo e Cabernet.',
          ['Garnacha', 'Tempranillo', 'Macabeo'], [], 'Garnacha', EN + 'Campo_de_Borja_(DO)'),
        sub('Calatayud', 'DOP', 'Calatayud, Zaragoza, Spain', 'Sudoeste de Zaragoza, 5.600 ha em 46 municípios, cortados por afluentes do Ebro (Jalón, Jiloca…). Vinhas em encostas voltadas ao sul da Sierra de la Virgen, de 550 a 800 m, em solos pedregosos e calcários.',
          ['Garnacha', 'Tempranillo'], [], '', EN + 'Calatayud_(DO)')
      ] },

    { name: 'Catalunha', geo: 'ES:Cataluña', sources: [EN + 'Spanish_wine', EN + 'Priorat_(DOQ)', EN + 'Pened%C3%A8s_(DO)'],
      description: 'Nordeste da Espanha, no Mediterrâneo. Segunda maior produtora do país. Berço do Cava (cerca de 95% da produção espanhola, em torno de Sant Sadurní d\'Anoia) e dos tintos potentes do Priorat, uma das duas DOCa (DOQ em catalão) da Espanha, com a vizinha Montsant.',
      climate: 'Mediterrâneo, com muitos microclimas do litoral quente às encostas a 800 m.', soils: 'Llicorella (ardósia e mica) no Priorat; sedimentos miocênicos e calcário no Penedès.', altitude: '',
      history: 'Na era romana, Terraconensis (Tarragona) era uma das duas maiores zonas produtoras. Após a filoxera, o Penedès trocou uvas tintas por brancas, o que levou ao primeiro Cava nos anos 1870.',
      grapes: ['Macabeo', 'Xarel·lo', 'Parellada', 'Garnacha', 'Carignan'], grapes_other: ['Cabernet Sauvignon', 'Merlot', 'Syrah', 'Chardonnay', 'Trepat', 'Mourvèdre', 'Pinot Noir'],
      notable_wines: 'Cava; L\'Ermita e Finca Dofi (Álvaro Palacios), Clos Mogador, Clos Erasmus (Priorat); Sangre de Toro, Viña Sol (Torres)',
      producers: [],
      subregions: [
        sub('Priorat', 'DOQ/DOCa', 'Gratallops, Tarragona, Spain', 'Comarca do Priorat (Tarragona), vales dos rios Siurana e Montsant; vinhas em terraços de 100 a 700 m sobre llicorella, ardósia negra e avermelhada com mica, que obriga as raízes a descer fundo. Rendimentos baixíssimos (2.700 kg/ha em 2008). O nome vem do prior da Cartuxa de Scala Dei (fundada em 1194). Nos anos 1980 René Barbier, Álvaro Palacios, Carles Pastrana e outros plantaram os "Clos"; as safras de 1989–91 foram feitas juntas em Gratallops e vendidas com cinco rótulos. DOQ aprovada pela Catalunha em 2000 e confirmada por Madri em 2009.',
          ['Garnacha', 'Carignan', 'Cabernet Sauvignon', 'Syrah', 'Merlot'],
          [prod('Álvaro Palacios', 'L\'Ermita (1993, vinhas muito velhas); Finca Dofi (ex-Clos Dofi)', EN + 'Priorat_(DOQ)'),
            prod('Clos Mogador (René Barbier)', 'Clos Mogador; Nelin (branco); Manyetes', EN + 'Clos_Mogador'),
            prod('Clos Erasmus (Daphne Glorian)', 'Clos Erasmus', EN + 'Priorat_(DOQ)'), prod('Mas Martinet (Josep Lluís Pérez)', 'Clos Martinet', EN + 'Priorat_(DOQ)'),
            prod('Clos de l\'Obac (Carles Pastrana)', 'Clos de l\'Obac', EN + 'Priorat_(DOQ)'), prod('Cellers de Scala Dei', 'safra de 1974, marco para a região', EN + 'Clos_Mogador')],
          'L\'Ermita; Clos Mogador; Clos Erasmus', EN + 'Priorat_(DOQ)'),
        sub('Montsant', 'DO', 'Falset, Tarragona, Spain', 'Criada em 2002 com a antiga subzona Falset da DO Tarragona; cerca de 1.900 ha em 16 municípios, quase todos no Priorat e alguns na Ribera d\'Ebre, e mais de 50 bodegas. Circunda quase todo o Priorat e faz vinhos de estilo parecido. ~5 milhões de garrafas por ano, metade exportada.',
          ['Garnacha', 'Carignan'], [], '', ES + 'Montsant'),
        sub('Penedès', 'DOP', 'Vilafranca del Penedès, Barcelona, Spain', 'Centrado em Vilafranca del Penedès, entre o maciço do Garraf e as montanhas do interior; 66 municípios. Três subzonas: Alt Penedès (interior, até 800 m, reino da Parellada), Penedès Central (maior produção) e Baix Penedès (litoral). Brancos predominam; também tintos com barrica. Desde a safra de 2025 é a primeira denominação 100% orgânica certificada.',
          ['Xarel·lo', 'Macabeo', 'Parellada', 'Garnacha', 'Tempranillo', 'Cabernet Sauvignon'],
          [prod('Bodegas Torres', 'Sangre de Toro; Viña Sol; Viña Esmeralda; Coronas; Atrium; De Casta', EN + 'Bodegas_Torres'), prod('Jean León'), prod('Pinord'), prod('Masia Bach')],
          'Sangre de Toro (Torres)', EN + 'Pened%C3%A8s_(DO)'),
        sub('Cava', 'DO', 'Sant Sadurní d\'Anoia, Barcelona, Spain', 'Espumante de método tradicional, branco ou rosado. ~95% vem do Penedès, com as grandes casas em Sant Sadurní d\'Anoia, mas a DO também abrange municípios de Aragão, Castela e Leão, Extremadura, Rioja, País Basco, Navarra e Valência. Josep Raventós (Codorníu) fez o primeiro em 1872. Os catalães inventaram a giropalete, que mecanizou a remuage. Rosado só por sangria (Garnacha, Pinot Noir, Trepat ou Monastrell).',
          ['Macabeo', 'Xarel·lo', 'Parellada', 'Chardonnay', 'Trepat'],
          [prod('Codorníu', 'produtor mais antigo de Cava (fundado em 1551)', EN + 'Codorn%C3%ADu_Winery'),
            prod('Freixenet', 'Carta Nevada; Cordon Negro; Elyssia', EN + 'Freixenet'),
            prod('Juvé y Camps', '', EN + 'Pened%C3%A8s_(DO)'),
            prod('Raventós i Blanc', 'família no Penedès desde 1497', EN + 'Ravent%C3%B3s_i_Blanc')],
          '', EN + 'Cava_(Spanish_wine)')
      ] },

    { name: 'Madri', geo: 'ES:Madrid', sources: [EN + 'Vinos_de_Madrid_(DO)'],
      description: 'Sul da comunidade de Madri. A DO Vinos de Madrid (1990) cobre 54 municípios em três subzonas, todas entre 500 e 800 m.',
      climate: 'Continental: até 40 °C no verão e -2 °C no inverno; chuva de 450 mm (Arganda) a 650 mm (San Martín).', soils: 'Argila e calcário sobre granito em Arganda; solos escuros em San Martín; pobres e sem carbonatos em Navalcarnero.', altitude: '500–800 m',
      history: 'Primeiro registro documental de vinho no século XIII: disputa entre monges e um senhor feudal por uma vinha.',
      grapes: ['Garnacha', 'Tempranillo', 'Albillo Real', 'Malvar'], grapes_other: ['Airén', 'Cabernet Sauvignon', 'Syrah'],
      notable_wines: '', producers: [],
      subregions: [
        sub('Arganda', 'DOP (subzona)', 'Arganda del Rey, Madrid, Spain', 'A maior subzona: ~50% das vinhas, 26 municípios; argila e calcário sobre subsolo de granito.', [], [], '', EN + 'Vinos_de_Madrid_(DO)'),
        sub('San Martín de Valdeiglesias', 'DOP (subzona)', 'San Martín de Valdeiglesias, Madrid, Spain', 'Sudoeste, perto da Serra de Gredos; 35% das vinhas; a mais chuvosa (650 mm).', [], [], '', EN + 'Vinos_de_Madrid_(DO)'),
        sub('Navalcarnero', 'DOP (subzona)', 'Navalcarnero, Madrid, Spain', '15% das vinhas; solos pobres sobre argila.', [], [], '', EN + 'Vinos_de_Madrid_(DO)')
      ] },

    { name: 'Castela-La Mancha', geo: 'ES:Castilla-La Mancha', sources: [EN + 'Spanish_wine', EN + 'La_Mancha_(DO)'],
      description: 'Planalto central. A maior região produtora: ~13 milhões de hl, um terço do vinho espanhol. A DO La Mancha, com mais de 190.000 ha, é a maior área contínua de vinhas do mundo; Valdepeñas, cercada por ela, é famosa pelos claretes. A entrada da Espanha na UE (1986) trouxe ajuda à vitivinicultura de La Mancha.',
      climate: 'Continental extremo: de -15 °C a 45 °C; 300–400 mm de chuva; ~3.000 horas de sol.', soils: 'Argila arenosa marrom-avermelhada, pobre, rica em calcário.', altitude: '480–700 m',
      history: 'A produção deslanchou nos anos 1940 com a criação de muitas cooperativas.',
      grapes: ['Airén', 'Tempranillo'], grapes_other: ['Garnacha', 'Cabernet Sauvignon', 'Syrah', 'Macabeo', 'Moscatel de Grano Menudo'],
      notable_wines: 'Claretes de Valdepeñas', producers: [],
      subregions: [
        sub('La Mancha', 'DOP', 'Alcázar de San Juan, Ciudad Real, Spain', '182 municípios (Albacete, Ciudad Real, Cuenca e Toledo), mais de 190.000 ha: a maior área contínua de vinhas do mundo. Solo homogêneo e plano, que sobe de 480 m (Aranjuez) a 700 m. Tempranillo é chamada aqui de Cencibel.',
          ['Airén', 'Tempranillo', 'Macabeo'], [], '', EN + 'La_Mancha_(DO)'),
        sub('Valdepeñas', 'DOP', 'Valdepeñas, Ciudad Real, Spain', 'Sul de Ciudad Real, quase cercada pela DO La Mancha, mas independente pela tradição do "aloque" ou clarete, que mistura uvas brancas e tintas. 22.332 ha (2016); as melhores vinhas ficam em Los Llanos e Las Aberturas. Clima semiárido.',
          ['Tempranillo', 'Airén'], [], 'Clarete (aloque)', EN + 'Valdepe%C3%B1as_(DO)')
      ] },

    { name: 'Comunidade Valenciana', geo: 'ES:Valencia', sources: [EN + 'Spanish_wine', EN + 'Utiel-Requena_(DO)'],
      description: 'Costa leste, com forte influência mediterrânea. Terra da Bobal (Utiel-Requena) e da Monastrell e do Fondillón (Alicante).',
      climate: 'Mais moderado, de forte influência mediterrânea no litoral; continental no interior.', soils: 'Escuros, calcários e pobres em matéria orgânica.', altitude: '',
      history: 'Achados ibéricos em Los Villares indicam vinho desde o século VII a.C. No século XIX, a ferrovia (1887) ligou Utiel ao porto de Valência.',
      grapes: ['Bobal', 'Mourvèdre', 'Muscat of Alexandria'], grapes_other: ['Tempranillo', 'Garnacha', 'Alicante Bouschet', 'Merseguera', 'Macabeo'],
      notable_wines: 'Bobal de Utiel-Requena; Fondillón de Alicante', producers: [],
      subregions: [
        sub('Utiel-Requena', 'DOP', 'Requena, Valencia, Spain', 'Província de Valência, entre os rios Turia e Cabriel, na transição do litoral para o planalto. A Bobal, segunda tinta mais plantada da Espanha, ocupa mais de 80% das vinhas. Um dos climas mais severos das regiões espanholas, aliviado pelo vento Solano. A Bodega Redonda, junto à estação de Utiel, é a sede do Conselho Regulador.',
          ['Bobal', 'Tempranillo', 'Garnacha'], [], 'Bobal', EN + 'Utiel-Requena_(DO)'),
        sub('Alicante', 'DOP', 'Monóvar, Alicante, Spain', 'Duas subzonas: Vinalopó, no sul, de tintos de Monastrell; e La Marina, no litoral norte, de brancos de Moscatel. Famosa pelo Fondillón, vinho doce de uvas sobremaduras, renomado em Monòver já no século XVI; a idade de ouro dos vinhos de Alicante foi nos séculos XVI–XVII.',
          ['Mourvèdre', 'Muscat of Alexandria', 'Garnacha', 'Alicante Bouschet'], [], 'Fondillón', EN + 'Alicante_(DO)')
      ] },

    { name: 'Múrcia', geo: 'ES:Murcia', sources: [EN + 'Jumilla_(DO)', EN + 'Yecla_(DO)'],
      description: 'Sudeste, na transição entre o litoral mediterrâneo e o planalto de La Mancha. Terra da Monastrell (quarta tinta mais plantada da Espanha), em Jumilla e Yecla.',
      climate: 'Continental temperado pelo Mediterrâneo, árido: ~300–400 mm de chuva e mais de 3.000 horas de sol.', soils: 'Calcários, arenosos e permeáveis, com crosta calcária.', altitude: '400–800 m',
      history: 'Jumilla escapou da filoxera no século XIX e vendeu muito vinho à França, mas a praga chegou em 1989 e cortou a produção em 60% em cinco anos.',
      grapes: ['Mourvèdre'], grapes_other: ['Tempranillo', 'Garnacha', 'Alicante Bouschet', 'Syrah', 'Airén'],
      notable_wines: 'Monastrell de Jumilla e Yecla', producers: [],
      subregions: [
        sub('Jumilla', 'DOP', 'Jumilla, Murcia, Spain', 'Norte de Múrcia e sudeste de Albacete. A Monastrell tem mais de 85% das vinhas; rendimentos às vezes muito baixos. Vales e planaltos entre montanhas, 400–800 m.',
          ['Mourvèdre', 'Tempranillo', 'Alicante Bouschet'], [prod('Monterebro', 'antiga Pedro Luis Martínez, de 1870'), prod('Bodega Ego')], 'Monastrell', EN + 'Jumilla_(DO)'),
        sub('Yecla', 'DOP', 'Yecla, Murcia, Spain', 'Extremo norte de Múrcia, cercada por Jumilla, Almansa e Alicante; tida como a casa da Monastrell na Espanha. 92% das vendas vão ao exterior, a maior proporção entre as DOs espanholas. DO desde 1975.',
          ['Mourvèdre'], [], 'Monastrell', EN + 'Yecla_(DO)')
      ] },

    { name: 'Andaluzia', geo: 'ES:Andalucia', sources: [EN + 'Sherry', EN + 'Spanish_wine'],
      description: 'Sul da Espanha, com algumas das zonas mais quentes do país. Terra dos vinhos generosos: Jerez (sherry), Manzanilla de Sanlúcar, Montilla-Moriles e Málaga; as uvas principais são Palomino e Pedro Ximénez.',
      climate: 'Quente: algumas das zonas mais quentes da Espanha.', soils: 'Albariza (solo quase branco, ~40% de giz) nas melhores vinhas de Jerez; também arenas e barros.', altitude: '',
      history: 'Os fenícios fundaram Cádis por volta de 1100 a.C.; na era romana, a Bética (Andaluzia) era uma das duas maiores zonas produtoras. Em 1587 Francis Drake levou 2.900 barris de sherry de Cádis, popularizando-o na Inglaterra.',
      grapes: ['Palomino', 'Pedro Ximénez', 'Muscat of Alexandria'], grapes_other: ['Zalema', 'Moscatel de Grano Menudo'],
      notable_wines: 'Fino, Manzanilla, Amontillado, Palo Cortado, Oloroso, Pedro Ximénez; Tío Pepe; Montilla; Málaga doce',
      producers: [],
      subregions: [
        sub('Jerez-Xérès-Sherry', 'DOP', 'Jerez de la Frontera, Cádiz, Spain', 'Triângulo entre Jerez de la Frontera, Sanlúcar de Barrameda e El Puerto de Santa María; reconhecida oficialmente em 1933 (o artigo sobre o sherry a chama de primeira DO espanhola; a Rioja data sua DO de 1925). Vinho fortificado, sobretudo de Palomino, envelhecido em solera. Fino e Manzanilla (15,5%) envelhecem sob o véu de flor; Oloroso (≥17%) oxida; Amontillado e Palo Cortado ficam no meio; doces de Pedro Ximénez ou Moscatel. Por lei, 40% das uvas devem vir de solo albariza.',
          ['Palomino', 'Pedro Ximénez', 'Muscat of Alexandria'],
          [prod('González Byass', 'Tío Pepe (fino)', EN + 'Gonz%C3%A1lez_Byass'), prod('Emilio Lustau', 'linha Almacenista', EN + 'Emilio_Lustau'),
            prod('Harveys', 'Harvey\'s Bristol Cream', EN + 'Sherry'), prod('Pedro Domecq', 'sherry e brandy; família Domecq desde 1822', EN + '%C3%81lvaro_Domecq_y_D%C3%ADez')],
          'Tío Pepe; Harvey\'s Bristol Cream', EN + 'Sherry'),
        sub('Manzanilla-Sanlúcar de Barrameda', 'DOP', 'Sanlúcar de Barrameda, Cádiz, Spain', 'Fino feito no porto de Sanlúcar, na foz do Guadalquivir. O clima mais fresco e úmido engrossa o véu de flor, e o vinho sai mais fresco e delicado, de toque salino. Manzanilla Pasada (~7 anos) começa a perder o flor. Divide o conselho regulador com Jerez.',
          ['Palomino'], [], 'Manzanilla; Manzanilla Pasada', EN + 'Manzanilla_(wine)'),
        sub('Montilla-Moriles', 'DOP', 'Montilla, Córdoba, Spain', 'Sul da província de Córdoba. Vinhos no sistema do sherry (flor e solera), mas, ao contrário do sherry, sem fortificação; o fino é o mais comum. Subzonas de qualidade superior: Sierra de Montilla e Los Moriles Altos. Solo branco rico em carbonato de cálcio. Conselho regulador desde 1944.',
          ['Pedro Ximénez', 'Moscatel de Grano Menudo'], [prod('Bodegas Alvear', 'fundada em 1729, a bodega mais antiga ainda ativa da Andaluzia', ES + 'Bodegas_Alvear')], 'Fino, Amontillado, Oloroso e PX de Montilla', EN + 'Montilla-Moriles'),
        sub('Málaga e Sierras de Málaga', 'DO', 'Cómpeta, Málaga, Spain', 'Duas DOs com o mesmo conselho: Málaga (doces e fortificados de Pedro Ximénez e Moscatel) e Sierras de Málaga (2001; brancos, rosados e tintos secos, sobretudo da alta Serranía de Ronda). Cinco subzonas: Axarquía (mais de 2.200 ha), Montes de Málaga, Norte, Manilva e Serranía de Ronda. Viticultura desde os fenícios (século VIII a.C.); a filoxera entrou na Espanha por Málaga, em 1878.',
          ['Pedro Ximénez', 'Muscat of Alexandria'], [], 'Málaga doce; tintos secos de Ronda', EN + 'M%C3%A1laga_(DO)'),
        sub('Condado de Huelva', 'DOP', 'Bollullos Par del Condado, Huelva, Spain', 'Sudeste da província de Huelva, ~6.000 ha planos e arenosos a ~25 m. Os "vinhos do Descobrimento da América": o primeiro embarque às Índias Ocidentais é de janeiro de 1502. A Zalema tem 86% das vinhas.',
          ['Zalema', 'Palomino'], [], '', EN + 'Condado_de_Huelva_(DO)')
      ] },

    { name: 'Extremadura', geo: 'ES:Extremadura', sources: [EN + 'Ribera_del_Guadiana_(DO)'],
      description: 'Oeste, na fronteira com Portugal, às margens do Guadiana. A DO Ribera del Guadiana (1999) reuniu seis subzonas antes produtoras de Vino de la Tierra e autoriza 39 uvas, inclusive portuguesas (Touriga Nacional, Castelão, Trincadeira, Antão Vaz, Arinto).',
      climate: 'Continental: até 40 °C no verão; chuva média de 450 mm, maior nas serras (Cañamero).', soils: '', altitude: '',
      history: '', grapes: ['Tempranillo', 'Cayetana Blanca'], grapes_other: ['Garnacha', 'Cabernet Sauvignon', 'Touriga Nacional', 'Macabeo'],
      notable_wines: '', producers: [],
      subregions: [
        sub('Tierra de Barros', 'DOP (subzona)', 'Almendralejo, Badajoz, Spain', 'A maior subzona da Ribera del Guadiana, com 80% das vinhas e 36 municípios; argila calcária que retém umidade, terreno plano e mecanizado.', ['Tempranillo', 'Cayetana Blanca'], [], '', EN + 'Ribera_del_Guadiana_(DO)'),
        sub('Cañamero', 'DOP (subzona)', 'Cañamero, Cáceres, Spain', 'Cinco municípios na Sierra de Guadalupe, a mais de 800 m, em encostas de solo pobre sobre ardósia.', [], [], '', EN + 'Ribera_del_Guadiana_(DO)'),
        sub('Montánchez', 'DOP (subzona)', 'Montánchez, Cáceres, Spain', '27 municípios ao sul de Cáceres, com colinas e vales de solo marrom levemente ácido.', [], [], '', EN + 'Ribera_del_Guadiana_(DO)')
      ] },

    { name: 'Ilhas Baleares', geo: 'ES:Baleares', sources: [EN + 'Binissalem_(DO)'],
      description: 'Arquipélago no Mediterrâneo. Mallorca tem duas DOs: Binissalem (1991, a primeira) e Pla i Llevant. Uvas como Manto Negro, Callet e Prensal Blanc.',
      climate: 'Mediterrâneo marítimo, verões quentes e invernos curtos.', soils: '', altitude: '',
      history: 'Os romanos trouxeram a vinha em 121 a.C.; Plínio, o Velho, citou os vinhos de Mallorca. Antes da filoxera havia 27.000 ha; muitos viraram amendoais, e o turismo reavivou a vinha no fim do século XX.',
      grapes: ['Manto Negro', 'Callet', 'Prensal Blanc'], grapes_other: ['Tempranillo', 'Cabernet Sauvignon', 'Syrah', 'Mourvèdre'],
      notable_wines: '', producers: [],
      subregions: [
        sub('Binissalem', 'DOP', 'Binissalem, Balearic Islands, Spain', 'Centro de Mallorca, a nordeste de Palma; 5 municípios, ~600 ha e 16 bodegas. Planalto de 125 a 300 m protegido dos ventos frios pela Serra de Alfabia (Tramuntana).',
          ['Manto Negro', 'Callet', 'Prensal Blanc'],
          [prod('José L. Ferrer', '', ES + 'Binissalem_(vino)'), prod('Bodegues Macià Batle', '', ES + 'Binissalem_(vino)'), prod('Vins Nadal', '', ES + 'Binissalem_(vino)')],
          '', EN + 'Binissalem_(DO)'),
        sub('Pla i Llevant', 'DOP', 'Felanitx, Balearic Islands, Spain', 'A segunda DO de Mallorca.', [], [], '', EN + 'Binissalem_(DO)')
      ] },

    { name: 'Ilhas Canárias', geo: 'ES:Canarias', sources: [EN + 'List%C3%A1n_Negro'],
      description: 'Arquipélago vulcânico no Atlântico, diante da África. Mais de 5.000 ha de Listán Negro, a tinta das ilhas, muitas vezes vinificada por maceração carbônica em tintos macios e aromáticos. A Listán Prieto, levada das Canárias às colônias, deu origem à Mission (Califórnia e México), à País (Chile) e à Criolla Chica (Argentina). Há DOs em Tenerife (Abona, Tacoronte-Acentejo, Valle de la Orotava, Ycoden-Daute-Isora, Valle de Güímar) e em El Hierro, Gran Canaria, La Gomera, La Palma e Lanzarote.',
      climate: 'Subtropical, com muitos microclimas conforme a altitude.', soils: 'Vulcânicos.', altitude: 'até 1.800 m no Teide',
      history: 'A Listán Negro e a Listán Prieto eram muito plantadas em Castela no século XVI; colonos as levaram às ilhas.',
      grapes: ['Listán Negro'], grapes_other: ['Listán Prieto', 'Tinta Negra', 'Vijariego Negro', 'Tintilla', 'Malvasía'],
      notable_wines: '', producers: [],
      subregions: [
        sub('Abona', 'DOP', 'Granadilla de Abona, Santa Cruz de Tenerife, Spain', 'Litoral sul de Tenerife; DO desde 1996. Vinhas de 200 a 1.800 m nas encostas do Teide (3.715 m, o ponto mais alto da Espanha): quente ao nível do mar, úmido na faixa das nuvens (550–1.200 m) e seco, com neve no inverno, acima dela.',
          ['Listán Negro', 'Listán Prieto'], [], '', EN + 'Abona_(DO)'),
        sub('Tacoronte-Acentejo', 'DOP', 'Tacoronte, Santa Cruz de Tenerife, Spain', 'DO de Tenerife onde a Listán Negro é permitida.', ['Listán Negro'], [], '', EN + 'List%C3%A1n_Negro'),
        sub('Valle de la Orotava', 'DOP', 'La Orotava, Santa Cruz de Tenerife, Spain', 'DO de Tenerife onde a Listán Negro é permitida.', ['Listán Negro'], [], '', EN + 'List%C3%A1n_Negro'),
        sub('Lanzarote', 'DOP', 'San Bartolomé, Las Palmas, Spain', 'DO da ilha de Lanzarote; a Listán Negro é permitida.', ['Listán Negro'], [], '', EN + 'List%C3%A1n_Negro')
      ] }
  ];

  var countries = [
    { name: 'Espanha', sources: [EN + 'Spanish_wine'],
      description: 'Maior área plantada do mundo (mais de 1,2 milhão de ha), mas terceira produtora, atrás de Itália e França, por causa dos rendimentos baixos de vinhas velhas e espaçadas em solos secos. Segunda exportadora. Mais de 400 uvas plantadas, mas 88% da produção vem de 20: Tempranillo, Bobal, Garnacha e Monastrell; Albariño, Airén, Verdejo, Palomino e Macabeo; Parellada e Xarel·lo. Classificação no topo: DOCa/DOQ (só Rioja e Priorat), depois DO/DOP. Menções de envelhecimento: Crianza, Reserva e Gran Reserva.' }
  ];

  return { code: 'ES', version: 1, countries: countries, regions: regions, country_of: 'Espanha' };
})());
