/**
 * Curso: Grécia, EUA, Austrália, Nova Zelândia, África do Sul, Brasil e Chile.
 * Fonte: módulo "Países e Regiões Produtoras de Vinho" (Grécia, Califórnia/Oregon, Austrália, Nova Zelândia,
 * África do Sul, Brasil e Chile), reescrito com palavras próprias. Itens duvidosos da apostila ficaram de fora.
 */
(function () {
  var mc = CourseKit.mc, match = CourseKit.match, order = CourseKit.order;

  var grecia = {
    id: 'grecia', title: 'Grécia', country: 'Grécia',
    lessons: [
      { id: 'gre-1', title: 'Um vinho milenar entre montanhas e ilhas', level: 'medio',
        tip: 'A vinificação grega é antiquíssima: há vestígios de 4.500 a.C. na Macedônia e vinhedos em Santorini de cerca de 1.700 a.C. O país é 80% montanhoso e cheio de ilhas, o que gera enorme diversidade de climas e estilos, em geral de pequenos produtores.',
        questions: [
          mc("Qual achado em Creta é considerado o mais antigo do mundo?", "A prensa de vinho", ["A adega subterrânea", "A ânfora de fermentação", "O alambique"], "Em Creta está a prensa de vinho mais antiga conhecida, prova da longa tradição vinícola do país."),
          mc("O que destruiu os antigos vinhedos de Santorini, cerca de um século depois de 1.700 a.C.?", "Uma erupção vulcânica devastadora", ["Uma praga de filoxera", "Uma invasão marítima", "Uma seca de décadas"], "A ilha foi repovoada por volta de 1.200 a.C., e por isso a vinificação ali se dá em terroir vulcânico."),
          mc("Que parte do território grego é montanhosa?", "Cerca de 80%", ["Cerca de 20%", "Cerca de 50%", "Quase nada: é um país de planícies"], "Com tanta montanha, o clima dos vinhedos não se resume a mediterrâneo: altitude, mar e solos variados criam estilos muito diversos."),
          mc("Que solos aparecem na Grécia, somando-se à diversidade de estilos?", "Vulcânicos, calcários, argilosos e arenosos", ["Só solos de xisto", "Apenas solos graníticos", "Somente solos aluviais de rio"], "Montanha, mar e variedade de solos juntos explicam a diversidade de vinhos gregos."),
          mc("Como é, em geral, o perfil dos produtores de uva na Grécia?", "Muitos produtores pequenos", ["Poucas empresas gigantes", "Só cooperativas estatais", "Quase só grandes fazendas"], "São cerca de 180 mil produtores de uva para cerca de 130 mil hectares de vinhedos: propriedades pequenas."),
          order("Coloque em ordem cronológica, do mais antigo ao mais recente", ["Vinificação encontrada na Macedônia (4.500 a.C.)", "Inscrições com registros de vinho (2.500 a.C.)", "Vinhedos em Santorini (cerca de 1.700 a.C.)", "Repovoamento de Santorini (cerca de 1.200 a.C.)"], "A tradição vinícola grega atravessa milênios, do continente às ilhas do Egeu.")
        ] },
      { id: 'gre-2', title: 'Como a Grécia classifica seus vinhos', level: 'medio',
        tip: 'Hoje a categoria de topo é a DOP, que reúne as antigas OPE (doces) e OPAP (secos de qualidade). O vinho regional (Topikos Oinos) equivale à IGP. A Denominação Tradicional protege o Retsina e o Verdea de Zakynthos.',
        questions: [
          mc("A que nível europeu equivalem as antigas OPE e OPAP gregas?", "DOP", ["IGP", "Vinho de mesa", "Denominação Tradicional"], "OPE (doces) e OPAP (secos de qualidade) foram absorvidas pela DOP."),
          mc("Qual categoria grega equivale à IGP?", "Vinho Regional (Topikos Oinos)", ["Vinho de mesa (Epitrapezios Oinos)", "Denominação Tradicional", "OPAP"], "O Topikos Oinos, criado em 1989, tem origem determinada e regras menos restritivas que a DOP."),
          mc("Qual vinho foi o motivo da criação da Denominação Tradicional, em 1979?", "Retsina", ["Santorini Vinsanto", "Mavrodaphne de Patras", "Moscatel de Samos"], "A Denominação Tradicional protege o Retsina, vinho tradicional não ligado a uma origem específica; hoje vale também para o Verdea de Zakynthos."),
          mc("O que informa o rótulo de um vinho varietal grego?", "Variedade e safra, mas não a área de produção", ["Só a área de produção", "Variedade, safra e área", "Nada: é igual ao vinho de mesa"], "Já o vinho de mesa não traz variedade, safra nem área."),
          match("Ligue o termo grego ao seu significado", [["OPE", "Antiga categoria de doces de topo"], ["OPAP", "Antiga categoria de secos de qualidade"], ["Epitrapezios Oinos", "Vinho de mesa"], ["Topikos Oinos", "Vinho regional"]], "Os termos antigos foram agrupados na DOP; o vinho regional corresponde à IGP."),
          mc("Quantas DOPs a Grécia tem e em quantas regiões vinícolas elas se dividem?", "33 DOPs em 9 regiões", ["9 DOPs em 33 regiões", "20 DOPs em 5 regiões", "50 DOPs em 12 regiões"], "As regiões são Trácia, Macedônia, Tessália, Épiro, Ilhas Jônicas, Grécia Central, Peloponeso, Mar Egeu e Creta."),
          mc("O sistema de classificação grego se adaptou às regras de qual bloco desde 1989?", "União Europeia", ["Mercosul", "Comunidade Britânica", "Liga Árabe"], "O sistema grego se adapta às regras da União Europeia desde 1989.")
        ] },
      { id: 'gre-3', title: 'Norte da Grécia: reino da Xinómavro', level: 'avancado',
        tip: 'Entre as DOPs do norte estão Amynteo, Goumenissa, Naousa, Plagiés Melitona e Rapsani. A grande estrela é a Xinómavro, tinta ácida e tânica, de longa guarda, comparada à Nebbiolo. Naousa é uma das DOPs mais prestigiadas.',
        questions: [
          mc("Qual é a grande uva tinta do norte da Grécia?", "Xinómavro", ["Agiorgítiko", "Mavrodaphne", "Mandilaria"], "A Xinómavro é protagonista em Naousa e em outras DOPs do norte."),
          mc("O que significa o nome Xinómavro?", "Ácido e negro (xino + mavro)", ["Uva de São Jorge", "Pele rosada", "Montanha negra"], "O nome já indica a acidez marcante da casta."),
          mc("Com qual uva italiana a Xinómavro costuma ser comparada?", "Nebbiolo", ["Sangiovese", "Barbera", "Primitivo"], "Acidez intensa, taninos firmes, cor pouco intensa e longa guarda lembram a Nebbiolo."),
          mc("Qual uva deve ser cortada com a Xinómavro em Goumenissa, com mínimo de 20%?", "Negoska", ["Limnio", "Krassato", "Debina"], "Goumenissa faz apenas tintos secos, na planície da Macedônia Central."),
          mc("Qual é a única DOP do norte que também produz vinhos brancos?", "Plagiés Melitona", ["Naousa", "Amynteo", "Rapsani"], "Seus brancos são cortes de Athiri, Assyrtiko e Roditis; os tintos usam Limnio, Cabernet Sauvignon e Cabernet Franc."),
          mc("Qual DOP do norte usa exclusivamente Xinómavro e faz até rosés espumantes?", "Amynteo", ["Goumenissa", "Rapsani", "Plagiés Melitona"], "Amynteo é um planalto de clima continental, entre os lagos Vegoritis e Petron, que regulam a temperatura."),
          match("Na DOP Rapsani, cada uva do corte contribui com algo. Ligue", [["Krassato", "Cor, corpo e álcool"], ["Stavrotó", "Taninos"], ["Xinómavro", "Acidez e capacidade de envelhecer"]], "O corte é em partes iguais; é comum o cultivo em arbusto, com as três variedades no mesmo vinhedo."),
          mc("Que característica de Naousa preserva a acidez da Xinómavro?", "Maturação fenólica lenta e completa", ["Irrigação intensa", "Colheita muito precoce", "Clima tropical"], "Naousa, nas encostas do Monte Vermion, tem clima semicontinental e vinhos de grande guarda.")
        ] },
      { id: 'gre-4', title: 'Centro, Épiro e a fama do Peloponeso', level: 'avancado',
        tip: 'No continente, Anchialos, Messenikola e Zitsa são DOPs menos conhecidas. A Grécia Central não tem DOP, mas muita demanda por causa de Atenas, com Savatiano e Roditis para brancos comuns e Retsina. O Peloponeso é a principal região em quantidade e qualidade.',
        questions: [
          mc("Que uvas dominam a Grécia Central, onde não há nenhuma DOP?", "Savatiano e Roditis", ["Xinómavro e Negoska", "Assyrtiko e Athiri", "Agiorgítiko e Mandilaria"], "A proximidade de Atenas gera forte demanda por brancos comuns e Retsina."),
          mc("Qual DOP do continente exige Roditis em no mínimo 80%?", "Anchialos", ["Zitsa", "Messenikola", "Rapsani"], "As regras proíbem contato com as cascas e passagem por barrica, para máximo frescor."),
          mc("Que estilo tem Messenikola, DOP junto ao lago Plastira?", "Tintos pálidos, sem carga tânica", ["Brancos de contato com as cascas", "Doces fortificados", "Tintos muito tânicos e escuros"], "A base é 70% de Mavro Messenikola, com Carignan e Syrah."),
          mc("Qual uva é a base dos brancos e espumantes da DOP Zitsa, no Épiro?", "Debina", ["Savatiano", "Malagousia", "Limnio"], "A Debina tem baixo álcool e alta acidez, interessante para espumantes."),
          mc("Qual é a principal região vinícola da Grécia em quantidade e qualidade?", "Peloponeso", ["Trácia", "Creta", "Tessália"], "Tem 7 DOPs, e Nemea e Mavrodaphne de Patras estão entre as principais do país."),
          mc("Qual uva é exclusiva da DOP Nemea?", "Agiorgítiko", ["Xinómavro", "Moschofilero", "Roditis"], "Embora seja cultivada em várias regiões, a Agiorgítiko tem DOP própria apenas em Nemea."),
          order("Ordene as sub-regiões de Nemea da menor para a maior altitude", ["250 a 400 m: vinhos simples, para beber cedo", "400 a 600 m: vinhos mais encorpados", "650 a 900 m (Monte Kyllini): vinhos estruturados e de guarda"], "Nas encostas do Monte Kyllini, o frio noturno amadurece as uvas mais lentamente, conservando a acidez."),
          mc("Qual DOP do Peloponeso faz brancos e espumantes de Moschofilero, acima de 600 m?", "Mantinia", ["Patras", "Nemea", "Monemvasia-Malvasia"], "São vinhos frescos, aromáticos e leves, com acidez intensa; a lei permite até 15% de Asproudes.")
        ] },
      { id: 'gre-5', title: 'Peloponeso e Egeu: os doces gregos', level: 'avancado',
        tip: 'Patras é cheia de estilos: Roditis seco, Moscatel doce e o fortificado Mavrodaphne. O Egeu tem clima quente e seco, 9 DOPs em 5 ilhas e maioria de brancos, sobretudo doces: Moscatel em Samos, Lemnos e Rodes, Malvasia em Paros e Vinsanto em Santorini.',
        questions: [
          mc("Qual vinho de Patras é fortificado, doce e envelhece longos anos em barris?", "Mavrodaphne de Patras", ["Patras seco", "Mantinia", "Nemea"], "Feito da tinta Mavrodaphne, tem caráter oxidativo; a lei permite até 49% de Mavroudi Korinthiaki."),
          mc("Qual uva forma 100% dos brancos secos da DOP Patras?", "Roditis", ["Moscatel", "Assyrtiko", "Moschofilero"], "São brancos de boa estrutura, aroma cítrico e notas meladas, para consumo jovem."),
          mc("O que pode ser o Moscatel de Patras, feito com Moscatel Branca?", "Doce, fortificado ou de uvas passificadas", ["Sempre seco e leve", "Somente espumante", "Tinto de corte"], "O trecho costeiro entre Patras e Rio tem denominação própria, o Moscatel de Rio de Patras."),
          mc("Qual é o clima das ilhas do Egeu?", "Quente e seco, com vento do sul e verões escaldantes", ["Úmido, com ventos do norte trazendo chuva", "Frio e nublado", "Tropical chuvoso"], "É o oposto das Ilhas Jônicas, onde ventos do norte trazem chuva e umidade."),
          mc("Quantas DOPs o Egeu tem e em quantas ilhas?", "9 DOPs em 5 ilhas", ["5 DOPs em 9 ilhas", "33 DOPs em 9 ilhas", "3 DOPs em 2 ilhas"], "As ilhas são Santorini, Samos, Rodes, Lemnos e Paros."),
          match("Ligue a ilha ao seu doce típico", [["Samos", "Moscatel"], ["Lemnos", "Moscatel (de Alexandria)"], ["Paros", "Malvasia"], ["Santorini", "Vinsanto, sobretudo de Assyrtiko"]], "Cada ilha tem uma DOP de doces; a grande maioria da produção do Egeu é de uvas brancas."),
          mc("Que tipo de vinho predomina nas planícies do Peloponeso?", "Doces de Moscatel e Mavrodaphne", ["Tintos secos de Agiorgítiko", "Espumantes de Roditis", "Rosés de Xinómavro"], "As encostas mais altas ficam com a Roditis, para brancos.")
        ] },
      { id: 'gre-6', title: 'Uvas tintas gregas', level: 'expert',
        tip: 'A Grécia tem cerca de 200 variedades próprias, mas só cerca de 50 usadas comercialmente. Entre as tintas: Agiorgítiko (macia, depende da altitude), Xinómavro (ácida e longeva), Mavrodaphne (muito tânica e corante), Mandilaria, Mavro Kalavritino, e Krassato e Stavrotó, só em corte.',
        questions: [
          mc("Quantas variedades próprias a Grécia tem, aproximadamente?", "Cerca de 200 (só cerca de 50 comerciais)", ["Cerca de 20 no total", "Cerca de 1.000 comerciais", "Apenas 5"], "Há também muitas estrangeiras, como Cabernet Sauvignon, Syrah e Sauvignon Blanc."),
          mc("Que significa Agiorgítiko?", "Uva de São Jorge", ["Uva negra e ácida", "Uva da montanha", "Uva do mar Egeu"], "É uma das mais cultivadas, mas só uma DOP, Nemea, leva seu nome."),
          mc("Como é o estilo típico da Agiorgítiko?", "Corpo médio, cor moderada e taninos macios", ["Muito tânica e ácida", "Branca e aromática", "Fortificada e doce"], "A qualidade depende do nível de acidez, ligado ao cultivo em altitude, com frio noturno e maturação lenta."),
          mc("Que uva dá base ao Mavrodaphne de Patras e tem muita carga tânica e matéria corante?", "Mavrodaphne", ["Mandilaria", "Krassato", "Debina"], "Recentemente também mostra potencial em tintos secos de qualidade."),
          mc("Que é a Mavroudi Korinthiaki (Black Corinth), de bago pequeno e sem sementes?", "Uva cultivada sobretudo para passas e consumo fresco", ["A principal uva do Retsina", "Uma branca de Santorini", "Uma uva espumante do Épiro"], "Só uma pequena parte entra no Mavrodaphne de Patras."),
          mc("Que papel a Mandilaria, das ilhas do sul do Egeu, costuma ter?", "Reforçar a estrutura, com pouca expressão aromática", ["Dar aromas florais intensos", "Fazer espumantes leves", "Produzir doces brancos"], "Tem cor, taninos e acidez intensos."),
          mc("Que tinta, de pele fina e pouca cor, vem das proximidades de Kalavrita?", "Mavro Kalavritino", ["Stavrotó", "Xinómavro", "Mandilaria"], "Não tem DOP própria, mas aparece em vinhos IGP Achaia."),
          mc("Como são usadas as tintas Krassato e Stavrotó?", "Nunca sozinhas: só em corte na DOP Rapsani", ["Como varietais em Nemea", "Em espumantes de Mantinia", "Em fortificados de Patras"], "Krassato tem baixa acidez e muita cor; Stavrotó tem taninos firmes e baixo açúcar.")
        ] },
      { id: 'gre-7', title: 'Uvas brancas gregas', level: 'expert',
        tip: 'A Assyrtiko, ápice em Santorini, é a branca de maior reputação. Savatiano e Roditis alimentam o Retsina; Moschofilero é aromática e exclusiva de Mantinia; Moscatel manda nos doces; Malagousia foi redescoberta em 1983.',
        questions: [
          mc("Qual é a branca grega de maior reputação, com apogeu em Santorini?", "Assyrtiko", ["Savatiano", "Athiri", "Moschofilero"], "Mantém alta acidez mesmo em clima quente, tem estrutura e bom potencial de envelhecimento."),
          mc("Qual uva é popular sobretudo por causa do Retsina, com zona principal na Ática?", "Savatiano", ["Moschofilero", "Malagousia", "Assyrtiko"], "É resistente a doenças, frutada, de estrutura e acidez médias."),
          mc("Qual uva branca é exclusiva da DOP Mantinia?", "Moschofilero", ["Roditis", "Savatiano", "Athiri"], "Tem alta acidez, corpo leve, aromas florais e pouca capacidade de envelhecer."),
          mc("Como é a casca da Roditis e da Moschofilero?", "Rosada", ["Muito escura", "Verde e fina", "Dourada de podridão nobre"], "Mesmo sendo rosadas, são usadas para brancos; a Roditis atinge máxima expressão na DOP Patras."),
          mc("Qual uva grega quase se extinguiu nos anos 1970 e foi redescoberta em 1983?", "Malagousia", ["Assyrtiko", "Debina", "Athiri"], "O enólogo Evangelos Gerovassiliou a redescobriu; tem aroma intenso de flores, ervas e frutas tropicais e cítricas."),
          mc("Qual é a característica da Athiri?", "Antiga, resistente a doenças e muito produtiva", ["Quase extinta nos anos 1970", "Exclusiva de Mantinia", "Tinta de Creta"], "Faz parte do corte branco de Plagiés Melitona."),
          mc("Em quantas DOPs de doces a Moscatel é a protagonista exclusiva?", "6: Samos, Rodes, Lemnos, Patras, Rio Patras e Cefalônia", ["Nenhuma", "Apenas 1: Samos", "Mais de 20"], "Todas usam Moscatel Branca, exceto Lemnos, que usa Moscatel de Alexandria."),
          mc("Que ilha tem a Malvasia como grande estrela?", "Paros", ["Lemnos", "Samos", "Cefalônia"], "Ali faz doces, brancos secos e até tintos em corte. Supõe-se que a uva seja originária de Creta.")
        ] }
    ]
  };

  var eua = {
    id: 'eua', title: 'Estados Unidos', country: 'EUA',
    lessons: [
      { id: 'eua-1', title: 'Panorama e história do vinho americano', level: 'medio',
        tip: 'Os EUA são o quarto maior produtor de vinho do mundo e cerca de 90% da produção vem da Califórnia. A uva Mission, de origem espanhola, chegou à Califórnia em 1769 com um frade franciscano, e a Corrida do Ouro impulsionou o plantio. A Costa Oeste é a mais adequada ao vinho, graças às águas frias do Pacífico.',
        questions: [
          mc("Que parte do vinho dos EUA vem da Califórnia?", "Cerca de 90%", ["Cerca de 30%", "Cerca de 50%", "Menos de 10%"], "A Califórnia é um dos maiores produtores do Novo Mundo e líder absoluta nos EUA."),
          mc("Qual uva o frei Junípero Serra levou à Califórnia em 1769?", "Mission, de origem espanhola", ["Zinfandel", "Cabernet Sauvignon", "Chardonnay"], "Ele fundou a missão de San Diego, e o calor californiano era perfeito para a Mission."),
          mc("Por que a Costa Oeste é a região mais adequada do país para vinho?", "Influência das águas frias do Pacífico", ["Ausência de chuva", "Grandes desertos", "Solo exclusivamente calcário"], "A Costa Oeste reúne Califórnia, Oregon e Washington, cada um com clima e vocação próprios por causa das latitudes."),
          mc("Que fato do século XIX aumentou a população da costa oeste e a demanda por vinho?", "A Corrida do Ouro", ["A chegada da filoxera", "A Lei Seca", "A abertura do Canal do Panamá"], "Cresceu a área plantada e os investimentos; desde 1870 as principais vinícolas californianas já produzem excelentes vinhos."),
          mc("Como eram os vinhos das primeiras tentativas com uvas americanas nativas, como Vitis labrusca?", "Simples e pouco saborosos", ["Finos e muito elegantes", "Sempre doces fortificados", "Espumantes de alta qualidade"], "Eram uvas 'americanas', que davam vinhos simples e pouco saborosos."),
          mc("Em que posição os EUA ficam entre os maiores produtores de vinho do mundo?", "Quarta, atrás de França, Itália e Espanha", ["Primeira", "Segunda, logo atrás da França", "Décima"], "Só França, Itália, Espanha e Turquia têm mais área de vinhas que os EUA.")
        ] },
      { id: 'eua-2', title: 'Califórnia: clima e regiões', level: 'medio',
        tip: 'O clima californiano é em geral mediterrâneo, com muito sol, noites frescas, inverno chuvoso e verão seco. Napa Valley (mais de 500 vinícolas) e Sonoma (mais de 300) são as duas principais regiões. Desde 1970 os vinhos da Califórnia surpreendem o mundo.',
        questions: [
          mc("Como é o clima geral da Califórnia vinícola?", "Mediterrâneo: inverno chuvoso, verão seco e noites frescas", ["Tropical úmido o ano inteiro", "Frio e nublado sem sol", "Árido sem nenhuma chuva"], "Cada região tem clima e solo próprios, o que favorece vários terroirs."),
          mc("Quais são as duas principais regiões vinícolas da Califórnia?", "Napa Valley e Sonoma Valley", ["Paso Robles e Monterey", "Mendocino e Lake", "Russian River e Dry Creek"], "Juntas reúnem mais de 800 vinícolas."),
          mc("Qual região tem o maior número de vinícolas concentradas, com mais de 500?", "Napa Valley", ["Sonoma Valley", "Mendocino", "Monterey"], "Sonoma vem em seguida, com mais de 300."),
          mc("Qual destes é um nome de região vinícola da Califórnia?", "Paso Robles", ["Willamette Valley", "Marlborough", "Barossa"], "Há também Mendocino, Monterey, Russian River Valley, Dry Creek Valley e Alexander Valley."),
          mc("Que uvas se destacam em volume e qualidade na Califórnia?", "Cabernet Sauvignon e Chardonnay", ["Riesling e Gewürztraminer", "Tempranillo e Albariño", "Nebbiolo e Barbera"], "Outras variedades também fazem vinhos fantásticos."),
          mc("Que foi a surpresa dos vinhos californianos a partir dos anos 1970?", "Superaram grandes nomes franceses em degustações às cegas em Paris", ["Foram proibidos na Europa", "Foram os primeiros vinhos do mundo", "Eram só doces e fortificados"], "Nessas provas, a qualidade californiana superou a de grandes nomes franceses.")
        ] },
      { id: 'eua-3', title: 'Uvas e estilos da Califórnia', level: 'avancado',
        tip: 'A Califórnia é famosa por tintos encorpados e brancos barricados de uvas bem maduras. Cabernet Sauvignon, Merlot e Zinfandel (patrimônio nacional) lideram as tintas, e Chardonnay é a branca dominante. Os vinhos de ponta são muito vinificados, potentes, com notas tostadas de carvalho francês de primeiro uso.',
        questions: [
          mc("Que estilo deu prestígio ao vinho californiano?", "Tintos encorpados e brancos barricados de uvas bem maduras", ["Tintos leves e ácidos", "Brancos sem passagem por madeira", "Vinhos de baixo álcool"], "Uvas bem maduras e madeira produzem vinhos potentes e expressivos."),
          mc("Qual tinta é considerada patrimônio nacional dos EUA?", "Zinfandel", ["Merlot", "Pinot Noir", "Syrah"], "As principais tintas são Merlot, Cabernet Sauvignon e Zinfandel, além de Syrah e Cabernet Franc."),
          mc("Qual é a branca dominante da Califórnia, quase um ícone?", "Chardonnay", ["Sauvignon Blanc", "Riesling", "Viognier"], "Sauvignon Blanc também aparece entre os rótulos de excelente qualidade."),
          mc("Que carvalho marca muitos dos vinhos californianos de ponta?", "Francês de primeiro uso, com notas tostadas", ["Carvalho americano de vários usos", "Castanheira", "Só aço inox, sem madeira"], "São vinhos muito vinificados e potentes."),
          mc("Além de Cabernet Sauvignon e Merlot, quais rótulos de excelente qualidade a Califórnia faz?", "Zinfandel, Pinot Noir, Chardonnay e Sauvignon Blanc", ["Apenas Zinfandel", "Só espumantes", "Só fortificados"], "Ao lado do vinho de larga escala, há muitos rótulos de alta qualidade.")
        ] },
      { id: 'eua-4', title: 'Oregon: terra da Pinot Noir', level: 'avancado',
        tip: 'No Oregon, a Pinot Noir é a uva mais plantada, e seus vinhos são leves e aromáticos. Há três sub-regiões: Willamette Valley (a mais destacada, fria e úmida como a Borgonha), Umpqua Valley (Syrah) e Rogue Valley (mais quente, Cabernet e Merlot).',
        questions: [
          mc("Qual é a uva mais plantada no Oregon?", "Pinot Noir", ["Cabernet Sauvignon", "Zinfandel", "Merlot"], "Pinot Gris e Chardonnay também se destacam."),
          mc("Como é a casca da Pinot Noir e o efeito disso na cor do vinho?", "Fina, com cor vermelha menos intensa", ["Espessa, com cor muito escura", "Rosada e sem taninos", "Dourada"], "Os vinhos são leves e aromáticos, com sabores mais delicados."),
          mc("Quais aromas aparecem nas Pinot Noir do Oregon?", "Amora, cereja, framboesa, flores e toques terrosos", ["Abacaxi e manteiga", "Pimenta preta e couro apenas", "Mel e damasco"], "Podem lembrar também ervas, cogumelos e raízes."),
          match("Ligue a sub-região do Oregon ao seu destaque", [["Willamette Valley", "Pinot Noir; clima frio e úmido, como a Borgonha"], ["Umpqua Valley", "Syrah"], ["Rogue Valley", "Mais quente; Cabernet Sauvignon e Merlot"]], "As três ficam entre a cordilheira Costeira e os Montes Cascatas."),
          mc("Que solo caracteriza a Willamette Valley?", "Vulcânico, rico em ferro", ["Calcário puro", "Areia de praia", "Granito estéril"], "O solo fértil e o clima frio rendem excelente Pinot Noir; também há Pinot Gris, Chardonnay e Riesling."),
          mc("Por que, em Willamette Valley, geralmente não é necessário irrigar?", "Há sol e chuva suficientes", ["Os rios inundam as vinhas", "O solo retém neve o ano todo", "Há nevoeiro permanente"], "Sem montanhas no terreno, as temperaturas são mais amenas e frescas."),
          mc("O que busca a vinificação artesanal do Rogue Valley, segundo seus produtores?", "Vinhos que expressem o lugar de origem, com cultivo natural e preservação ambiental", ["Volume máximo a baixo custo", "Vinhos adocicados padronizados", "Somente exportação em granel"], "48% dos vinhedos do vale são certificados como sustentáveis.")
        ] }
    ]
  };

  var australia = {
    id: 'australia', title: 'Austrália', country: 'Austrália',
    lessons: [
      { id: 'aus-1', title: 'História e estilo dos vinhos australianos', level: 'medio',
        tip: 'A produção começou no fim do século XIX, voltada à exportação para a Grã-Bretanha, com fortificados tipo Porto e Xerez. No fim dos anos 1970 os vinhos de mesa ganharam espaço, e a tecnologia foi grande aliada, como a fermentação de brancos em inox com temperatura controlada.',
        questions: [
          mc("Para onde se voltava a produção australiana no início?", "Exportação, sobretudo para a Grã-Bretanha", ["Consumo exclusivo local", "Mercado asiático", "Vendas só para a África"], "A produção começou no fim do século XIX."),
          mc("Que estilo predominava na Austrália na origem do setor?", "Fortificados tipo Porto e Xerez", ["Espumantes tipo Champagne", "Brancos secos leves", "Rosés"], "No fim dos anos 1970 os fortificados cederam lugar aos vinhos de mesa."),
          mc("Quanto da produção australiana é consumida no próprio país?", "Cerca de um terço", ["Quase tudo", "Cerca de 90%", "Quase nada"], "O resto é exportado."),
          mc("Que técnica os produtores adotam desde 1950 nos brancos?", "Fermentação em tanques de inox com temperatura controlada", ["Fermentação em ânforas", "Maturação em barris de sherry", "Fermentação sem controle de temperatura"], "Os vinhos australianos são considerados tecnicamente impecáveis."),
          mc("Que característica de estilo é associada aos vinhos australianos?", "Sabor exuberante, intenso e concentrado, com personalidade própria", ["Vinhos leves e neutros", "Vinhos de baixo teor frutado", "Vinhos sem corpo"], "Os frutados são tidos como os melhores."),
          mc("O que ocorreu no início dos anos 2000 na Austrália?", "Boom de exportação e ampliação da área produtiva", ["Fim das exportações", "Banimento dos tintos", "Fechamento das vinícolas"], "O país também é vanguarda em pesquisa vinícola, desenvolvendo tecnologias desde 1940.")
        ] },
      { id: 'aus-2', title: 'Clima da Austrália', level: 'avancado',
        tip: 'A Austrália se estende de 10°S a 43°S, com climas muito diferentes. O centro (Red Centre) é árido e desértico. A Cordilheira Australiana bloqueia a influência do Pacífico e cria clima de altitude. O sul, sob influência do Oceano Austral, é mais ameno; de 37°S em diante o clima é temperado, com variedades de clima frio como Pinot Noir e Chardonnay.',
        questions: [
          mc("Como se chama o centro árido e desértico da Austrália?", "Red Centre", ["Blue Mountains", "Great Barrier", "Top End"], "A grande extensão do país gera desde desertos quentíssimos até regiões frias."),
          mc("O que faz a Cordilheira Australiana pelo clima?", "Bloqueia a influência do Pacífico, criando clima de altitude", ["Traz o gelo antártico", "Cria desertos no sul", "Gera tufões constantes"], "O resultado são dias quentes e noites frias."),
          mc("Que zonas têm a melhor produção australiana?", "Zonas de altitude e o litoral sul", ["O deserto central", "O noroeste tropical", "Somente a costa leste tropical"], "O sul recebe influência do Oceano Austral, com temperaturas mais amenas e chuva adequada."),
          mc("A partir de que paralelo o clima é temperado, incluindo Tasmânia e costa sul de Victoria?", "37°S", ["10°S", "20°S", "5°S"], "Ali se plantam variedades de clima frio, como Pinot Noir e Chardonnay."),
          mc("Que região australiana é citada como muito fria?", "Yarra Valley", ["Barossa", "Hunter Valley", "Rutherglen"], "A grande extensão do país gera desde desertos quentíssimos até regiões frias."),
          mc("Qual ilha é destaque de clima frio para vinhos tranquilos e espumantes?", "Tasmânia", ["Nova Guiné", "Papua", "Fiji"], "Pinot Noir e Chardonnay dão base a espumantes notáveis.")
        ] },
      { id: 'aus-3', title: 'Sul da Austrália e Nova Gales do Sul', level: 'avancado',
        tip: 'A Austrália tem 6 regiões produtoras (estados). Austrália Meridional é a mais variada: Barossa e McLaren Vale (com Shiraz), Clare Valley (Riesling), Coonawarra (Cabernet Sauvignon). Em Nova Gales do Sul, a principal é o Hunter Valley, mais quente, com Chardonnay, Shiraz e Sémillon.',
        questions: [
          mc("Quantas regiões produtoras a Austrália tem?", "6", ["3", "12", "20"], "São: Austrália Meridional, Nova Gales do Sul, Victoria, Austrália Ocidental, Tasmânia e Queensland."),
          mc("Qual destas regiões australianas é associada ao Riesling?", "Clare Valley", ["Coonawarra", "Hunter Valley", "Rutherglen"], "Clare Valley fica na Austrália Meridional, junto com Barossa, McLaren Vale e Coonawarra."),
          mc("Que uva se destaca em Coonawarra e Limestone Coast?", "Cabernet Sauvignon (e Chardonnay)", ["Shiraz apenas", "Riesling apenas", "Moscatel"], "Adelaide Hills tem Cabernet, Sauvignon Blanc, Riesling, Chardonnay e Pinot Grigio."),
          mc("Qual é a principal região de Nova Gales do Sul?", "Hunter Valley", ["Yarra Valley", "Margaret River", "Rutherglen"], "O clima é mais quente, e as uvas são Chardonnay, Shiraz e Sémillon."),
          match("Ligue a região à uva citada", [["Clare Valley", "Riesling"], ["Coonawarra", "Cabernet Sauvignon"], ["Hunter Valley", "Sémillon"]], "As regiões do sul e do leste fazem estilos diferentes."),
          mc("Que uva é chamada Shiraz na Austrália?", "Syrah", ["Grenache", "Malbec", "Tempranillo"], "Shiraz é, junto com a Chardonnay, a variedade mais importante do país.")
        ] },
      { id: 'aus-4', title: 'Victoria, Oeste, Tasmânia e as principais uvas', level: 'expert',
        tip: 'Victoria faz Pinot Noir e Chardonnay (Yarra Valley, Mornington) e doces e fortificados em Rutherglen. Margaret River, na Austrália Ocidental, dá vinhos finos de Chardonnay e Shiraz. A Tasmânia é fria, com Pinot Noir em espumantes. As principais uvas são Shiraz e Chardonnay.',
        questions: [
          mc("Qual região de Victoria é famosa por doces de sobremesa e fortificados?", "Rutherglen", ["Yarra Valley", "Mornington Peninsula", "Goulburn Valley"], "Yarra Valley e Mornington Peninsula fazem Pinot Noir e Chardonnay."),
          mc("Que estilos faz a Goulburn Valley?", "Brancos secos e tintos de vários estilos", ["Só espumantes", "Só doces", "Apenas rosés"], "É outra região de Victoria."),
          mc("Qual região da Austrália Ocidental é lembrada pelos vinhos mais finos do estado?", "Margaret River", ["Hunter Valley", "Clare Valley", "Barossa"], "Chardonnay e Shiraz são as uvas citadas."),
          mc("Que uva dá os espumantes notáveis da Tasmânia?", "Pinot Noir", ["Shiraz", "Sémillon", "Riesling"], "O clima é bastante frio, com brancos de Chardonnay e Riesling."),
          mc("Quais são as duas variedades mais importantes da Austrália?", "Shiraz (tinta) e Chardonnay (branca)", ["Malbec e Torrontés", "Pinotage e Chenin", "Nebbiolo e Arneis"], "Outras tintas: Pinot Noir, Merlot, Cabernet Sauvignon, Grenache."),
          mc("Qual destas é uma branca citada na Austrália além de Chardonnay?", "Riesling", ["Albariño", "Garganega", "Furmint"], "Também aparecem Sauvignon Blanc e Sémillon."),
          mc("Que uvas Queensland cultiva?", "Shiraz e Chardonnay", ["Pinot Noir e Riesling", "Malbec e Viognier", "Nebbiolo e Sangiovese"], "Queensland é uma das seis regiões produtoras do país.")
        ] }
    ]
  };

  var nz = {
    id: 'novazelandia', title: 'Nova Zelândia', country: 'Nova Zelândia',
    lessons: [
      { id: 'nzl-1', title: 'Nova Zelândia: panorama', level: 'medio',
        tip: 'A Nova Zelândia é a região produtora mais isolada do mundo (cerca de 1.600 km da Austrália), com produção pequena e de alta qualidade. Imigrantes da Dalmácia instalaram os primeiros vinhedos comerciais, na região de Auckland. A filoxera devastou o país, que se reergueu com tecnologia e cuidado ambiental.',
        questions: [
          mc("Qual é a localização do país, formado por duas ilhas principais?", "Sudoeste do Pacífico", ["Atlântico Norte", "Mar Mediterrâneo", "Oceano Índico"], "As ilhas são marcadas por vulcões e glaciações."),
          mc("Quem instalou os primeiros vinhedos comerciais, na região de Auckland?", "Imigrantes da Dalmácia", ["Colonos espanhóis", "Monges alemães", "Mineiros suíços"], "Eles foram os verdadeiros pioneiros da vitivinicultura comercial."),
          mc("Que título a Nova Zelândia tem em relação ao isolamento?", "A região produtora mais isolada do mundo", ["A mais populosa", "A mais antiga do mundo", "A mais vizinha da Europa"], "Fica a cerca de 1.600 km da Austrália."),
          mc("Que praga devastou a viticultura neozelandesa?", "A filoxera", ["O oídio apenas", "A geada de primavera", "Os gafanhotos"], "Depois dela, os produtores adotaram castas mais nobres, tecnologia e cuidado ambiental."),
          mc("Como é a produção neozelandesa em volume e qualidade?", "Pouco expressiva em volume, mas de alta qualidade", ["Gigantesca e básica", "Pequena e de baixa qualidade", "Só de granel"], "O destaque internacional veio rapidamente pela qualidade."),
          mc("De onde vem parte da mão de obra e da pesquisa enológica da Nova Zelândia?", "Da Austrália", ["Da Argentina", "Da China", "Da Alemanha"], "A produção tem forte influência australiana.")
        ] },
      { id: 'nzl-2', title: 'Clima neozelandês', level: 'avancado',
        tip: 'O clima é variado: subtropical no extremo norte no verão e até -10°C nas áreas alpinas da Ilha Sul no inverno. O país fica perto da costa, com temperaturas amenas e brisa marítima. Janeiro e fevereiro são quentes e julho é o mês mais frio, o que alonga a maturação.',
        questions: [
          mc("Que temperatura pode ocorrer nas áreas alpinas do interior da Ilha Sul no inverno?", "Até -10°C", ["Até 10°C", "Sempre acima de 15°C", "Até 0°C apenas"], "O país tem clima bem variado, do subtropical ao alpino."),
          mc("Como é o extremo norte do país no verão?", "Subtropical", ["Glacial", "Árido", "Desértico"], "No geral o país fica perto da costa, com temperaturas amenas o ano todo."),
          mc("Qual é o mês mais frio?", "Julho", ["Janeiro", "Fevereiro", "Dezembro"], "Janeiro e fevereiro são bem quentes (hemisfério sul)."),
          mc("O que a diferença térmica entre verão e inverno traz às uvas?", "Longos períodos de maturação, frutas equilibradas e acidez elevada", ["Uvas sem acidez", "Uvas passificadas", "Safras precoces e rasas"], "Somam-se longas horas de sol, noites frescas e brisa marítima."),
          mc("Que características tem o terroir neozelandês em geral?", "Bons solos, latitude apropriada, muito sol, noites frescas e brisa marítima", ["Calor extremo e seca", "Solo só arenoso", "Sol escasso o ano todo"], "O conjunto favorece frutas equilibradas.")
        ] },
      { id: 'nzl-3', title: 'Regiões da Ilha Norte', level: 'avancado',
        tip: 'A Ilha Norte tem seis regiões: Auckland, Hawke\'s Bay (2ª maior, destaque para Chardonnay), Gisborne (90% brancas), Waikato, Wellington (Pinot Noir e Sauvignon Blanc) e Northland, onde nasceram os primeiros vinhedos do país.',
        questions: [
          mc("Qual é a segunda maior região da Nova Zelândia?", "Hawke's Bay", ["Marlborough", "Wellington", "Nelson"], "Seu solo é ideal para Chardonnay; também há Merlot, Cabernet Sauvignon e Syrah encorpados."),
          mc("Que parte da produção de Gisborne é de uvas brancas?", "Cerca de 90%", ["Cerca de 10%", "Cerca de 50%", "Nenhuma"], "Clima quente e ensolarado, com Chardonnay ou Pinot Gris."),
          mc("Onde surgiram os primeiros vinhedos do país?", "Northland", ["Central Otago", "Canterbury", "Gisborne"], "O clima é quente e seco, com subsolo vulcânico."),
          mc("Que uvas se destacam em Wellington, de produção bem pequena?", "Pinot Noir e Sauvignon Blanc", ["Syrah e Merlot", "Riesling e Cabernet", "Pinot Gris e Malbec"], "Waikato, outra região pequena, tem Chardonnay, Sauvignon Blanc e Cabernet Sauvignon."),
          mc("Que clima tem Auckland?", "Ensolarado e quente, com vinhos intensos", ["Frio e alpino", "Seco como deserto", "Nublado e glacial"], "Chardonnay, Merlot, Syrah e blends com Cabernet Sauvignon."),
          mc("Quantas regiões produtoras o país tem no total?", "10 (6 na Ilha Norte e 4 na Ilha Sul)", ["4", "6", "20"], "As da Ilha Sul são Marlborough, Nelson, Canterbury e Central Otago.")
        ] },
      { id: 'nzl-4', title: 'Regiões da Ilha Sul', level: 'expert',
        tip: 'Marlborough é a principal e mais renomada região, com plantio quase todo de Sauvignon Blanc e espumantes de excelente qualidade. Nelson tem produção modesta. Canterbury é a 4ª maior. Central Otago planta em altitude, com grande amplitude térmica.',
        questions: [
          mc("Qual é a principal e mais renomada região da Nova Zelândia?", "Marlborough", ["Hawke's Bay", "Gisborne", "Auckland"], "Fica na Ilha Sul."),
          mc("Que uva ocupa quase todo o plantio de Marlborough?", "Sauvignon Blanc", ["Chardonnay", "Pinot Noir", "Riesling"], "Também há Chardonnay, Riesling e Pinot Noir, além de espumantes de excelente qualidade."),
          mc("Qual região da Ilha Sul planta em altitude, com boa insolação e grande amplitude térmica?", "Central Otago", ["Nelson", "Canterbury", "Northland"], "Pinot Noir, Chardonnay, Sauvignon Blanc e Riesling são as uvas citadas."),
          mc("Qual é a quarta maior região do país?", "Canterbury", ["Nelson", "Waikato", "Wellington"], "Faz Pinot Noir, Chardonnay, Sauvignon Blanc e Riesling."),
          mc("Que características tem Nelson?", "Clima ensolarado e quente, produção modesta e de qualidade", ["Maior produção do país", "Clima glacial", "Só tintos fortificados"], "Pinot Noir, Chardonnay e Sauvignon Blanc."),
          match("Ligue a região à ilha em que está", [["Marlborough", "Ilha Sul"], ["Central Otago", "Ilha Sul"], ["Hawke's Bay", "Ilha Norte"], ["Gisborne", "Ilha Norte"]], "A Ilha Norte tem o coração vulcânico e a Sul é conhecida como terra da nuvem branca.")
        ] }
    ]
  };

  var zaf = {
    id: 'africadosul', title: 'África do Sul', country: 'África do Sul',
    lessons: [
      { id: 'zaf-1', title: 'História do vinho sul-africano', level: 'medio',
        tip: 'O vinho nasceu no Cabo no século XVII, com os holandeses, que abasteciam navios rumo às Índias. A produção foi exportada à Inglaterra, depois a cooperativa KWV (fundada em 1918) controlou as cotas de plantio até 1992, e o país entrou no grupo dos vinhos finos do Novo Mundo nos anos 1970.',
        questions: [
          mc("Quem começou a produção de vinho no Cabo da Boa Esperança?", "Colonizadores holandeses", ["Portugueses", "Franceses", "Alemães"], "Foi no século XVII, com a Companhia Holandesa das Índias Orientais."),
          mc("Por que o Cabo foi importante para a Companhia Holandesa das Índias Orientais?", "Servia de reabastecimento para navios a caminho das Índias", ["Era um grande centro de espumantes", "Era uma colônia penal", "Era mercado de especiarias"], "Dali nasceu o interesse por plantar videiras."),
          mc("Que ano marca o primeiro vinho da região, o que faz da África do Sul a mais antiga região produtora do Novo Mundo?", "1659", ["1759", "1859", "1459"], "O vinho foi feito nas terras do governador."),
          mc("Para onde ia obrigatoriamente toda a produção sob domínio britânico?", "Para a Inglaterra, para suprir o consumo de lá", ["Para as Índias", "Para o consumo local apenas", "Para a Holanda"], "A produção era obrigatoriamente exportada para suprir o consumo interno da Inglaterra."),
          mc("Que cooperativa controlou as cotas de plantio até 1992?", "KWV", ["SAWIS", "Ward Board", "Stellenbosch Co-op"], "Foi fundada em 1918, o início de uma nova era."),
          order("Ordene cronologicamente os marcos do vinho sul-africano", ["1659: primeiro vinho do Cabo", "1918: fundação da KWV", "1973: Wine Origin System", "1992: fim do controle de cotas pela KWV"], "O país só entrou no rol dos vinhos finos do Novo Mundo na década de 1970, depois de Austrália e Califórnia.")
        ] },
      { id: 'zaf-2', title: 'Clima e solos do Cabo', level: 'medio',
        tip: 'O clima é de calor moderado, com padrão tipo mediterrâneo e grande amplitude térmica. A brisa fria da corrente de Benguela chega às vinhas perto do oceano. Uvas amadurecem devagar, retêm acidez e têm boa maturidade fenólica.',
        questions: [
          mc("Que corrente fria influencia as áreas de plantio perto do oceano?", "Corrente de Benguela, vinda da Antártida", ["Corrente do Golfo", "Corrente de Humboldt", "Corrente do Labrador"], "Sua brisa é muito fria."),
          mc("O que o clima de grande amplitude térmica faz com as uvas?", "Maturação lenta, acidez retida e melhor maturidade fenólica", ["Perdem toda a acidez", "Ficam sem aromas", "Amadurecem rápido demais"], "Os vinhos resultam mais macios e acessíveis."),
          mc("Como são as áreas tradicionais da Península do Cabo?", "Verões quentes e bem secos, invernos com boa chuva", ["Chuva o ano todo", "Seca total", "Invernos nevados"], "Raramente é preciso irrigar."),
          mc("Como é a região do Klein Karoo?", "Mais seca e quente, com grande diferença entre dia e noite", ["Úmida e fria", "Costeira e chuvosa", "Alpina"], "Chove nos meses mais quentes."),
          mc("Que tipo de terreno se privilegia hoje para novos plantios?", "Encostas mais altas e íngremes", ["Planícies alagadiças", "Só o fundo dos vales", "Deserto"], "Antes a maior parte das vinhas ficava em terras planas ou levemente onduladas do sopé dos vales."),
          mc("Que solos aparecem na costa sul-africana?", "Pedregosos, calcário-arenosos, sedimentares e graníticos", ["Só turfa", "Apenas vulcânicos negros", "Só gelo e sal"], "Nos vales dos rios há solos aluviais, profundos, ricos em calcário e arenosos.")
        ] },
      { id: 'zaf-3', title: 'Wine Origin System e regiões do Cabo', level: 'avancado',
        tip: 'O Wine Origin System, de 1973, organiza as origens em níveis: Estate, Ward, District e Region. Entre as regiões do Cabo estão Stellenbosch (a mais prestigiada), Paarl, Overberg, Constantia e Durbanville.',
        questions: [
          mc("Em que ano foi introduzido o Wine Origin System?", "1973", ["1918", "1992", "1659"], "Ele dividiu as áreas em regiões oficiais com subdivisões."),
          mc("O que é um vinho Estate?", "Feito com uvas da própria propriedade", ["Feito com uvas compradas de qualquer lugar", "Vinho de vários distritos", "Vinho de mesa genérico"], "É o nível de origem mais restrito, de uma só quinta."),
          mc("Qual nível reúne pequenos vinhedos, como Constantia e Franschhoek?", "Ward", ["Estate", "District", "Region"], "Distritos como Stellenbosch e Paarl são áreas maiores e contínuas."),
          mc("Qual é a região mais importante e prestigiada da África do Sul?", "Stellenbosch", ["Paarl", "Durbanville", "Robertson"], "Faz excelentes exemplares de quase todas as varietais nobres, famosa por tintos estilo bordalês."),
          mc("Onde ficam as melhores uvas de Stellenbosch?", "Nas encostas graníticas", ["Nas várzeas aluviais", "Na areia da praia", "Em solos salinos"], "Nos vales predominam solos Clovelly e Hutton."),
          mc("Que região tem cooperativas progressistas e faz Pinotage, Cabernet, Chardonnay e Chenin?", "Paarl", ["Overberg", "Constantia", "Robertson"], "Tem clima mediterrâneo, verões longos e irrigação só em casos especiais."),
          mc("Qual região fria ao sul da Cidade do Cabo inclui Elgin e Walker's Bay?", "Overberg", ["Paarl", "Swartland", "Worcester"], "Pinot Noir, Chardonnay e Sauvignon Blanc estão entre os melhores do país, com brisas frias do Atlântico."),
          mc("Que característica tem Constantia?", "Encostas de Constantiaberg, com brisa de False Bay e sem necessidade de irrigação", ["Deserto sem chuva", "Vale tropical", "Planalto de altitude extrema"], "É uma região histórica, ligada à fazenda de Simon van der Stel.")
        ] },
      { id: 'zaf-4', title: 'Regiões do interior e do norte do Cabo', level: 'avancado',
        tip: 'Robertson faz Chardonnay, Syrah e fortificados. Worcester é a grande região de destilados, com cooperativas. Klein Karoo tem extremos climáticos. Olifants River e Piquetberg dão bom custo-benefício. Swartland é de tintos robustos. Tulbagh é cercada por montanhas.',
        questions: [
          mc("Que região tem solo rico em calcário, verão muito quente e é renomada por Chardonnay, Syrah e fortificados?", "Robertson", ["Overberg", "Constantia", "Durbanville"], "Chove cerca de 400 mm por ano, e uma grande represa tornou a irrigação barata."),
          mc("Qual é a principal região de destilados de vinho?", "Worcester", ["Stellenbosch", "Paarl", "Swartland"], "Tem cerca de 19 cooperativas, que somam 25% da produção anual do país."),
          mc("Qual região se alonga de leste a oeste entre Montagu e Oudtshoorn, com clima de extremos?", "Klein Karoo", ["Olifants River", "Tulbagh", "Piquetberg"], "Vinhedos nos vales, com irrigação, fazem fortificados interessantes."),
          mc("Que vinhos faz Swartland tradicionalmente?", "Tintos robustos e encorpados e fortificados de alta qualidade", ["Espumantes finos", "Brancos delicados e ácidos", "Só vinhos leves de mesa"], "Também faz vinhos leves e baratos para o mercado interno."),
          mc("Qual região de verões muito quentes exige irrigação e tem a maior parte feita por cooperativas?", "Piquetberg", ["Constantia", "Overberg", "Paarl"], "Produz bons vinhos de mesa a preços razoáveis."),
          mc("Qual região é cercada por montanhas em três lados, com orquídeas e campos de trigo ao redor?", "Tulbagh", ["Swartland", "Robertson", "Stellenbosch"], "As Montanhas Winterhoek a delimitam."),
          mc("Que região ao longo do vale do rio Olifants dá vinhos agradáveis de bom custo-benefício?", "Olifants River", ["Constantia", "Overberg", "Durbanville"], "Clima quente e pouca chuva, com técnicas de proteção dos cachos contra o sol."),
          mc("Qual região próxima da Cidade do Cabo faz amplos tintos, com brisa fria que reduz fungos?", "Durbanville", ["Klein Karoo", "Olifants River", "Piquetberg"], "Os solos Clovelly e Hutton são profundos e bem drenados.")
        ] },
      { id: 'zaf-5', title: 'As uvas tintas sul-africanas', level: 'avancado',
        tip: 'A Pinotage, cruzamento sul-africano de 1925, muda de estilo conforme o manejo do vinhedo. A Cabernet Sauvignon é uma das principais desde os anos 1920, Merlot e Syrah também têm vinhos de alta qualidade.',
        questions: [
          mc("Quem criou a Pinotage, em 1925?", "Prof. A. I. Perold", ["Prof. C. J. Theron", "Simon van der Stel", "Jan van Riebeeck"], "Foi um cruzamento de Pinot Noir com Hermitage."),
          mc("Quem difundiu a Pinotage, guardando as sementes originais?", "Prof. C. J. Theron", ["Prof. A. I. Perold", "Simon van der Stel", "Um governador holandês"], "Ele incentivou o cultivo da casta."),
          mc("Desde quando a Cabernet Sauvignon é considerada uma das principais uvas do país?", "Desde a década de 1920", ["Desde o século XVII", "Só a partir de 2000", "Desde 1659"], "Não está claro quando foi introduzida, mas desde os anos 20 já era das principais."),
          mc("Que manejo dá uma Pinotage escura, concentrada e potente?", "Poda em verde e colheita de uvas bem maduras", ["Alta produtividade", "Colheita precoce", "Sem nenhuma poda"], "A alta produtividade, ao contrário, dá vinho leve, de aromas simples e pouca complexidade."),
          mc("Como são os Merlots puros da África do Sul?", "Suculentos e acessíveis, com notável concentração de aromas", ["Muito tânicos e ácidos", "Brancos e leves", "Doces fortificados"], "A Merlot também entra em cortes com Cabernet Sauvignon e Cabernet Franc."),
          mc("Como se posicionam os melhores Syrah sul-africanos frente aos da Austrália e do norte do Rhône?", "Podem igualar ou superar vinhos da Austrália e do norte do Rhône", ["São sempre simples", "Só servem para cortes", "Perdem para todos os países"], "Têm cor intensa, aromas notáveis e sabores ricos e concentrados.")
        ] },
      { id: 'zaf-6', title: 'As uvas brancas sul-africanas', level: 'expert',
        tip: 'A Chenin Blanc (Steen) é a uva mais cultivada, cerca de 25% da produção. Chardonnay e Sauvignon Blanc fazem vinhos de alto nível. A Sémillon foi dominante no passado (93,7% da área em 1822). O Riesling Renano pode ser feito doce com botrytis.',
        questions: [
          mc("Como é conhecida localmente a Chenin Blanc na África do Sul?", "Steen", ["Pinotage", "Hanepoot", "Cinsaut"], "É a varietal mais cultivada, cerca de 25% da produção."),
          mc("Que tipos de vinho a Chenin Blanc dá ao país?", "Mesa, espumantes, estilo Sherry e destilados", ["Só vinho doce licoroso", "Somente tintos", "Apenas vinho laranja"], "É a pedra angular da indústria sul-africana."),
          mc("Qual uva branca já foi a mais popular, com 93,7% da área em 1822?", "Sémillon", ["Sauvignon Blanc", "Riesling", "Chardonnay"], "Hoje está em 5º lugar em volume, com área em queda."),
          mc("Qual é o perfil do Sauvignon Blanc em locais frios?", "Aroma floral, acidez intensa e frutas exuberantes", ["Aroma de madeira e baunilha", "Pouca acidez", "Doce e licoroso"], "Está entre os melhores do mundo, e a área plantada cresce."),
          mc("Como costuma ser vinificado o Chardonnay sul-africano?", "Frequentemente com carvalho na fermentação e na maturação", ["Nunca com madeira", "Sempre em cimento", "Sempre doce"], "Alta acidez e alto álcool dão bom potencial de envelhecimento."),
          mc("O que o Riesling Renano faz com botrytis?", "É vinificado doce, com complexidade e harmonia", ["Vira tinto", "É descartado", "Vira espumante"], "Em geral tem frescor, acidez e grande capacidade de envelhecer na garrafa."),
          mc("Em que posição a Sémillon está hoje em volume entre as uvas do país?", "5º lugar, com área em queda", ["1º lugar", "2º lugar", "Última"], "Alguns produtores acreditam no potencial dela, sozinha ou em corte com Chardonnay.")
        ] }
    ]
  };

  var brasil = {
    id: 'brasil', title: 'Brasil', country: 'Brasil',
    lessons: [
      { id: 'bra-1', title: 'Como o vinho chegou e cresceu no Brasil', level: 'medio',
        tip: 'As primeiras videiras vieram em 1532 por Brás Cubas, e as tentativas iniciais fracassaram. A uva Isabel, de origem americana, chegou por volta de 1840. A imigração italiana (1870) levou videiras à Serra Gaúcha. Nos anos 1990, a abertura às importações trouxe forte concorrência.',
        questions: [
          mc("Quem trouxe as primeiras videiras ao Brasil, em 1532?", "Brás Cubas, em São Vicente", ["Pedro Álvares Cabral", "Roque Gonzáles", "Dom Pedro I"], "A tentativa não teve sucesso."),
          mc("Que jesuíta tentou a vinicultura nos Sete Povos das Missões, em 1626?", "Roque Gonzáles de Santa Cruz", ["Brás Cubas", "José de Anchieta", "Martim Afonso"], "Também não teve êxito, assim como tentativas açorianas no século XVIII."),
          mc("Qual uva híbrida, ainda presente, foi plantada no RS por volta de 1840?", "Isabel", ["Cabernet Franc", "Merlot", "Tannat"], "As mudas vieram dos Estados Unidos."),
          mc("O que a imigração italiana de 1870 trouxe para a Serra Gaúcha?", "Mudas europeias, muitas de imigrantes do Vêneto", ["Só uvas americanas", "Máquinas de aço inox", "Cooperativas"], "As mudas europeias adaptaram-se, mas foram dizimadas por doenças, e os italianos passaram a plantar castas americanas."),
          mc("Qual é a cooperativa mais importante da Serra Gaúcha, fundada em 1931?", "Aurora", ["Salton", "Dreher", "Mônaco"], "Mônaco (1908), Salton (1910) e Dreher (1910) foram as primeiras vinícolas da serra."),
          mc("Por que a abertura do mercado aos importados, nos anos 1990, ajudou o vinho brasileiro?", "A concorrência forçou investimento em qualidade", ["Eliminou todos os concorrentes", "Reduziu impostos de vinhos locais", "Parou as exportações"], "O vinho nacional, antes protegido por barreiras, passou a sofrer concorrência de preço e qualidade."),
          order("Ordene cronologicamente", ["1532: primeiras videiras (Brás Cubas)", "1626: tentativa jesuítica nas Missões", "Cerca de 1840: uva Isabel no RS", "1870: imigração italiana"], "A vitivinicultura brasileira só se consolidou após várias tentativas frustradas.")
        ] },
      { id: 'bra-2', title: 'Serra Gaúcha: o coração do vinho brasileiro', level: 'avancado',
        tip: 'A Serra Gaúcha concentra cerca de 90% da produção do Brasil, mas enfrenta chuva alta e umidade. Só cerca de 15% dos vinhos da região vêm de viníferas. Em 2001 recebeu a primeira indicação de procedência, a do Vale dos Vinhedos.',
        questions: [
          mc("Que parte da produção de vinho do Brasil se concentra na Serra Gaúcha?", "Cerca de 90%", ["Cerca de 20%", "Cerca de 50%", "Menos de 5%"], "A região tem problemas crônicos ligados ao clima."),
          mc("Qual é a principal dificuldade climática da Serra Gaúcha?", "Chuva alta, sobretudo na colheita (janeiro e fevereiro)", ["Seca extrema", "Geadas no verão", "Falta de umidade"], "A umidade média é de cerca de 80%, o que favorece doenças fúngicas."),
          mc("Que técnica os enólogos usam na Serra Gaúcha para concentrar o vinho?", "Sangria (retirar parte do líquido do mosto)", ["Adição de água", "Colheita mais cedo", "Congelamento do cacho"], "Eles também buscam áreas melhores e mudam os sistemas de condução."),
          mc("Que parte dos vinhos da Serra vem de viníferas?", "Cerca de 15%", ["Cerca de 85%", "100%", "Quase nenhum"], "A maior parte é de uvas americanas e híbridas."),
          mc("Que denominação foi o primeiro passo para uma região demarcada, em 2001?", "Indicação de Procedência Vale dos Vinhedos", ["DOC Serra Gaúcha", "Denominação Campanha", "IGP Santa Catarina"], "Foi concedida pelo Instituto Nacional de Propriedade Industrial (INPI)."),
          mc("Qual destes é um município da Serra Gaúcha?", "Bento Gonçalves", ["Petrolina", "Dom Pedrito", "Videira"], "Há também Garibaldi, Farroupilha, Flores da Cunha e Monte Belo do Sul."),
          mc("Em que faixa de altitude se cultivam as uvas na Serra Gaúcha?", "Entre 400 e 600 m", ["Abaixo de 50 m", "Acima de 1.500 m", "Entre 900 e 1.100 m"], "A região chega a 800 m e tem solo argilo-arenoso, com drenagem pouco eficiente.")
        ] },
      { id: 'bra-3', title: 'Campanha e Serra do Sudeste', level: 'avancado',
        tip: 'A Campanha, no extremo sul gaúcho, tem coxilhas suaves, solo de arenito, verões quentes e secos e mais horas de sol que a serra; é a região mais promissora para viníferas de alta qualidade. A Serra do Sudeste tem altitude de 200 a 400 m e solo granítico ácido.',
        questions: [
          mc("Onde fica a Campanha?", "No extremo sul do RS, na fronteira com o Uruguai", ["No litoral de SC", "No sertão baiano", "No interior de São Paulo"], "Tem polos em Santana do Livramento, Bagé e Dom Pedrito."),
          mc("Como é o relevo da Campanha?", "Coxilhas suaves de 100 a 200 m", ["Montanhas de 1.000 m", "Planície alagada", "Platô de 2.000 m"], "O solo é de arenito, com ótima drenagem e média fertilidade."),
          mc("Que vantagem climática a Campanha tem sobre a Serra Gaúcha?", "Mais horas de sol e menos chuva", ["Mais chuva", "Mais umidade", "Geadas constantes"], "A chuva anual é de cerca de 1.400 mm e a umidade ronda 75%."),
          mc("Qual destas uvas era inédita no Brasil e passou a ser plantada na Campanha?", "Touriga Nacional", ["Isabel", "Pinot Noir", "Riesling Itálico"], "Também Alfrocheiro, Petit Verdot, Tempranillo, Pinot Gris e Viognier."),
          mc("Que municípios formam a Serra do Sudeste?", "Pinheiro Machado e Encruzilhada do Sul", ["Bagé e Dom Pedrito", "Garibaldi e Bento Gonçalves", "Petrolina e Juazeiro"], "É uma nova região de vinhos de qualidade."),
          mc("Que solo caracteriza a Serra do Sudeste?", "Granítico, ácido, com baixo a médio teor de matéria orgânica", ["Calcário puro", "Basalto", "Areia de praia"], "A altitude fica entre 200 e 400 m, com fortes ondulações.")
        ] },
      { id: 'bra-4', title: 'Vale do São Francisco e Vale do Rio Peixe', level: 'expert',
        tip: 'O Vale do São Francisco, a cerca de 9°S, é fora das faixas ideais, com irrigação e pelo menos 2 safras por ano; a moscatel dá ótimos espumantes. O Vale do Rio Peixe, em Santa Catarina, é novo, em altitude, e progride desde 2005 com Embrapa e ACAVITIS.',
        questions: [
          mc("Que faixa de latitude é considerada ideal para a vitivinicultura?", "30° a 45°", ["0° a 10°", "50° a 70°", "10° a 20°"], "O Vale do São Francisco, a cerca de 9°S, está fora dessa faixa."),
          mc("Onde fica o Vale do São Francisco?", "Divisa entre Pernambuco e Bahia, perto de Petrolina e Juazeiro", ["Rio Grande do Sul", "Santa Catarina", "São Paulo"], "A paisagem é de caatinga, com irrigação com água do rio."),
          mc("Quantas safras por ano é possível no Vale do São Francisco?", "No mínimo 2", ["Apenas 1", "Nenhuma", "Uma a cada 2 anos"], "Com a viticultura de precisão, há parreiras em fases diferentes no mesmo dia, e é possível colher todos os meses."),
          mc("Que uva dá excelentes espumantes no Vale do São Francisco?", "Moscatel", ["Touriga Nacional", "Pinot Noir", "Tannat"], "Cabernet Sauvignon, Touriga Nacional e Syrah mostram bom potencial."),
          mc("Em que estado fica o Vale do Rio Peixe?", "Santa Catarina", ["Rio Grande do Sul", "Bahia", "Paraná"], "Fica no oeste do estado, perto de Videira, Tangará, Pinheiro Preto e Caçador."),
          mc("Quais instituições apoiam o progresso do Rio Peixe desde 2005?", "Embrapa e ACAVITIS", ["INPI e IBGE", "Aurora e Salton", "KWV e Wine of Origin"], "É a região mais nova e menos conhecida."),
          mc("Por que as vinhas de altitude no Rio Peixe ajudam as tintas?", "Dão bom diferencial térmico entre dia e noite", ["Evitam a chuva", "Têm solo calcário", "Reduzem a luz"], "Brancas como Sauvignon Blanc e Chardonnay também têm boa expressão.")
        ] },
      { id: 'bra-5', title: 'Vinificação e espumantes brasileiros', level: 'avancado',
        tip: 'As melhores vinícolas brasileiras têm tecnologia moderna: frio, inox com controle por computador e barricas de carvalho. Os espumantes são o destaque, com os melhores de Bento Gonçalves e Garibaldi, feitos pelo método tradicional (2ª fermentação em garrafa) ou Charmat (em tanques).',
        questions: [
          mc("Como se chama o método champenoise no Brasil?", "Tradicional ou Clássico", ["Charmat", "Ancestral", "Transfer"], "O nome champenoise é usado só na França."),
          mc("Onde ocorre a segunda fermentação no método Charmat?", "Em tanques de inox", ["Na garrafa", "Em barris de carvalho", "Em ânforas"], "No método tradicional é na garrafa."),
          mc("De onde vêm os melhores espumantes brasileiros?", "Bento Gonçalves e Garibaldi", ["Petrolina", "Bagé", "Dom Pedrito"], "Usam Chardonnay, Riesling Itálico e Pinot Noir."),
          mc("Por que o clima do sul favorece espumantes?", "Uvas não totalmente maduras e de alta acidez", ["Uvas muito doces", "Uvas passificadas", "Pouca acidez"], "O solo é adequado ao vinho-base."),
          mc("Que carvalho é mais usado nas barricas das melhores vinícolas?", "Principalmente americano, além de francês", ["Só chileno", "Só russo", "Não usam barricas"], "Os tanques de inox têm temperatura controlada por computador."),
          mc("Que acontece com o volume de espumantes a partir de 2007?", "Cresce muito, e a qualidade fica irregular", ["Cai para metade", "Fica estável", "É proibido"], "Por isso o nome do produtor ficou importante para garantir qualidade."),
          mc("Qual espumante, da Serra Gaúcha e do Vale do São Francisco, está entre os melhores do gênero?", "O de Moscatel", ["O de Isabel", "O de Cabernet", "O de Tannat"], "No Vale do São Francisco, a moscatel é a grande uva e base de excelentes espumantes.")
        ] }
    ]
  };

  var chile = {
    id: 'chile', title: 'Chile', country: 'Chile',
    lessons: [
      { id: 'chi-1', title: 'Natureza privilegiada do Chile', level: 'medio',
        tip: 'O Chile não tem filoxera, o que permite vinhas com mais de cem anos e plantas de pé-franco. Barreiras naturais (deserto, glaciares, Andes e Pacífico) protegem os vinhedos. A irrigação, por gotejamento, usa água do degelo da Cordilheira.',
        questions: [
          mc("Que praga está ausente no Chile e é o principal fator de qualidade do solo?", "A filoxera (Phylloxera)", ["O oídio", "A mosca-do-vinagre", "O míldio"], "Ela quase destruiu os vinhedos europeus no século XIX."),
          mc("O que a ausência de filoxera permite?", "Vinhas de pé-franco, sem enxertia", ["Colher duas vezes ao ano", "Cultivo sem irrigação", "Eliminar toda poda"], "Também preserva vinhas com mais de cem anos."),
          mc("Que barreiras naturais protegem os vinhedos chilenos?", "Deserto do Atacama, glaciares, Andes e Pacífico", ["Pântanos e florestas", "Mares fechados", "Planícies abertas"], "Somadas ao controle fitossanitário, geram frutos livres de doenças."),
          mc("Qual é a irrigação típica na maior parte das regiões?", "Gotejamento, com bombas controladas por computador", ["Inundação de canais", "Chuva natural", "Aspersão de rio"], "A água vem do degelo da Cordilheira ou de poços artesianos."),
          mc("Quando chove nas principais regiões vinícolas?", "No inverno, sem interferir na colheita", ["Durante a colheita", "O ano todo", "Nunca chove"], "Os verões quentes e secos impedem fungos."),
          mc("O que a grande diferença térmica entre dia e noite faz na maturação?", "Prolonga a maturação e preserva ácidos e equilíbrio", ["Acelera o amadurecimento", "Elimina os taninos", "Reduz o açúcar"], "Ajuda açúcares, aromas e taninos a amadurecerem bem."),
          mc("Que tipos de solo aparecem no Chile, formando uma colcha de retalhos?", "Calcários, argilosos, arenosos, graníticos, vulcânicos e turfa", ["Somente argila vermelha", "Só xisto", "Apenas areia"], "Os solos chilenos formam uma verdadeira colcha de retalhos.")
        ] },
      { id: 'chi-2', title: 'Vinificação e uvas do Chile', level: 'medio',
        tip: 'Os chilenos buscam encostas em vez de fundos de vale, colhem mais tarde e investem em tecnologia. A Carménère, quase extinta em Bordeaux, é abundante no Chile. Os premium ou super-chilenos são cortes das melhores parcelas.',
        questions: [
          mc("Que uva francesa, quase extinta no mundo, é abundante no Chile?", "Carménère", ["Malbec", "Tannat", "Petit Verdot"], "Dá um vinho muito particular no país."),
          mc("Que vantagem traz a tendência de colheita tardia?", "Mais caráter varietal e taninos mais finos e menos adstringentes", ["Menos aromas", "Mais acidez", "Menos corpo"], "Os vinhos ficam acessíveis jovens, sem perder guarda."),
          mc("Onde buscam plantar os produtores para melhor microclima?", "Em encostas, fugindo do fundo dos vales", ["Só em planícies baixas", "Em pântanos", "No deserto aberto"], "Os investimentos incluem prensas pneumáticas, inox com controle de temperatura e barricas de carvalho francês."),
          mc("O que são os super-chilenos?", "Cortes de ponta das melhores parcelas, caros e muito valorizados", ["Vinhos de mesa baratos", "Espumantes de moscatel", "Vinhos de Pisco"], "Muitas vezes viram cultwines, com notas altas de críticos."),
          mc("Qual destas é uma tinta importante no Chile?", "Cabernet Sauvignon", ["Pinotage", "Zinfandel", "Touriga Nacional"], "Também Merlot, Cabernet Franc, Syrah e Malbec."),
          mc("Qual destas é uma branca importante no Chile?", "Sauvignon Blanc", ["Albariño", "Chenin Blanc", "Furmint"], "Também Chardonnay, Riesling, Sémillon e Gewürztraminer.")
        ] },
      { id: 'chi-3', title: 'Das regiões do norte ao Aconcagua', level: 'avancado',
        tip: 'São 5 grandes regiões, de norte a sul: Atacama, Coquimbo, Aconcagua, Valle Central e Sur. A corrente de Humboldt resfria a brisa do Pacífico, e a Cordilheira da Costa protege vinhedos. Casablanca, sem essa proteção, é ideal para Sauvignon Blanc e Pinot Noir.',
        questions: [
          order("Ordene as 5 grandes regiões de norte a sul", ["Atacama", "Coquimbo", "Aconcagua", "Valle Central", "Sur"], "Atacama tem pouco interesse (uvas para Pisco ou mesa); Coquimbo divide-se em Elqui e Limarí."),
          mc("Que corrente resfria a brisa do Pacífico no Chile?", "Corrente de Humboldt, vinda do Polo Sul", ["Corrente de Benguela", "Corrente do Golfo", "Corrente do Brasil"], "A Cordilheira da Costa protege os vinhedos dessa brisa."),
          mc("Para que eram usadas as uvas do Valle del Limarí antes?", "Para Pisco", ["Para espumantes", "Para passas", "Para destilados de cana"], "Hoje faz bons vinhos, em clima muito árido."),
          mc("Que característica tem o Valle de Casablanca?", "Brisa gelada e neblina, amplitude térmica e solo pobre e arenoso", ["Calor constante", "Montanhas protegendo da costa", "Solos aluviais férteis"], "A maturação acontece sem perda de acidez."),
          mc("Quais uvas se destacam em Casablanca?", "Sauvignon Blanc e Pinot Noir", ["Cabernet Sauvignon e Syrah", "Carménère e Malbec", "Tannat e País"], "Há ainda Chardonnay, Riesling, Gewürztraminer e Viognier."),
          mc("Que estilo têm os tintos de Aconcagua?", "Bem estruturados e potentes, com taninos muito maduros", ["Leves e ácidos", "Doces", "Brancos aromáticos"], "Cabernet Sauvignon, Merlot e Syrah se dão bem ali."),
          mc("Que solos tem Aconcagua?", "Granito nas encostas e calcário e argila no fundo do vale", ["Só areia", "Basalto", "Turfa pura"], "São pouco férteis e bem drenados.")
        ] },
      { id: 'chi-4', title: 'Valle Central: Maipo e Rapel', level: 'avancado',
        tip: 'O Valle Central é a região mais importante. O Maipo é o mais tradicional (Alto, Médio e Baixo). O Rapel tem Cachapoal (Carménère em Peumo) e Colchagua (Santa Cruz, Apalta, enoturismo).',
        questions: [
          mc("Qual região do Valle Central é a mais conhecida e tradicional?", "Valle del Maipo", ["Valle del Maule", "Valle de Curicó", "Valle del Itata"], "Tem vinícolas antigas e modernas."),
          mc("Como é o Alto Maipo?", "Cerca de 1.000 m, com taninos estruturados e muita fruta", ["Planície litorânea", "Região quente e úmida", "Zona de neblina permanente"], "Sub-regiões: Pirque e Macul."),
          mc("Quais são as sub-regiões do Baixo Maipo?", "Isla de Maipo e Talagante", ["Pirque e Macul", "Apalta e Santa Cruz", "Peumo e Chimbarongo"], "Os vinhos são mais frutados e exuberantes, com taninos bem maduros."),
          mc("Que duas sub-regiões formam o Valle de Rapel?", "Cachapoal (norte) e Colchagua (sul)", ["Maipo e Maule", "Curicó e Itata", "Elqui e Limarí"], "Os rios Cachapoal e Tinguiririca se juntam no Lago de Rapel."),
          mc("Que uva é excepcional no Valle Cachapoal, sobretudo em Peumo?", "Carménère", ["Pinot Noir", "Riesling", "Gewürztraminer"], "Também se faz Syrah e cortes bordaleses."),
          mc("O que é Colchagua, tendo Santa Cruz como referência?", "Centro do enoturismo chileno, com o subvale Apalta", ["Região de Pisco", "Região mais fria do país", "Região desértica"], "Tem cerca de 20.000 ha de Cabernet Sauvignon, Merlot, Carménère, Syrah e Malbec."),
          mc("Que solos tem Colchagua?", "Calcário-argilosos com subsolo granítico", ["Arenosos e salinos", "Turfa", "Pedras vulcânicas puras"], "Há neblina matinal em áreas como Chimbarongo.")
        ] },
      { id: 'chi-5', title: 'Curicó, Maule e o Sul', level: 'expert',
        tip: 'Curicó tem cerca de 15.000 ha e tintas fortes. O Maule é a maior área plantada do Chile, com tradição da uva País. A Región del Sur inclui Itata e Bío-Bío; o Bío-Bío é frio, com Chardonnay, Pinot Noir e Riesling.',
        questions: [
          mc("Qual região chilena tem a maior área plantada?", "Valle de Maule", ["Valle de Casablanca", "Valle de Curicó", "Valle del Elqui"], "Tem longa tradição com a uva País."),
          mc("Quem trouxe a uva País?", "Os espanhóis", ["Os franceses", "Os italianos", "Os ingleses"], "É uma tinta histórica do Maule."),
          mc("Que risco atinge o Maule por seu clima bastante frio?", "Geada e danos por chuvas fortes", ["Seca total", "Calor extremo", "Vulcões ativos"], "A média anual é de cerca de 14°C."),
          mc("Que área de vinhedos tem Curicó, aproximadamente?", "Cerca de 15.000 ha", ["Cerca de 500 ha", "Cerca de 1 milhão de ha", "Nenhuma"], "O solo é calcário-argiloso, com argila e material vulcânico."),
          mc("Que tintas fortes dominam Curicó?", "Cabernet Sauvignon, Merlot e Carménère", ["Pinot Noir, Riesling e Viognier", "Tannat e Malbec apenas", "Sangiovese e Syrah"], "Recentemente também Pinot Noir, Cabernet Franc e Malbec."),
          mc("Que regiões compõem a Región del Sur?", "Itata e Bío-Bío", ["Maipo e Rapel", "Elqui e Limarí", "Casablanca e San Antonio"], "O Itata faz Chardonnay e Sauvignon Blanc em solo avermelhado."),
          mc("Qual é a temperatura média do Bío-Bío?", "Baixa, entre 13 e 14°C", ["Acima de 25°C", "Cerca de 30°C", "Negativa o ano todo"], "A maturação é lenta, com risco de congelamento e doenças fúngicas no outono."),
          mc("Que uvas se destacam no Bío-Bío?", "Chardonnay, Pinot Noir, Riesling e Gewürztraminer", ["Carménère e Malbec", "Syrah e Grenache", "Tannat e Touriga"], "É uma região de grande potencial, em solo argilo-calcário vulcânico.")
        ] }
    ]
  };

  CourseKit.add([grecia, eua, australia, nz, zaf, brasil, chile]);
})();
