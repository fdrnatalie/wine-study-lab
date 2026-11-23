/**
 * Curso: França (exceto Bordeaux, que já tem unidade própria).
 * Unidades: Borgonha (bor), Rhône e Loire (rod), Champagne (chp), Mediterrâneo (med).
 * Fontes: módulo "Países e Regiões Produtoras", França: Borgonha, Côte de Nuits, Côte de Beaune, Chalonnais/Mâconnais/Beaujolais,
 * Rhône, Loire, Champagne e Mediterrâneo. Só fatos reescritos com palavras próprias; itens duvidosos ficaram de fora.
 */
(function () {
  var mc = CourseKit.mc, match = CourseKit.match, order = CourseKit.order;

  var borgonha = {
    id: "borgonha", title: "Borgonha", country: "França",
    lessons: [
      { id: "bor-1", title: "Onde fica e o que se planta", level: "medio",
        tip: "A Borgonha fica no centro-leste da França, com capital em Dijon. Vai de Chablis, ao norte, até o Beaujolais, perto de Lyon. As uvas são Chardonnay e Aligoté (brancas) e Pinot Noir e Gamay (tintas).",
        questions: [
          mc("Qual é a capital da Borgonha?", "Dijon", ["Lyon", "Beaune", "Reims"], "Dijon fica a cerca de 314 km de Paris."),
          mc("Em que parte da França fica a Borgonha?", "Centro-leste", ["Sudoeste, junto ao Atlântico", "Sul, junto ao Mediterrâneo", "Noroeste, junto à Bretanha"], "A Borgonha tem clima continental."),
          mc("Qual é a principal uva tinta da Borgonha?", "Pinot Noir", ["Cabernet Sauvignon", "Merlot", "Syrah"], "A Pinot Noir reina na região por causa do clima frio."),
          mc("Qual destas é uma uva branca cultivada na Borgonha, além da Chardonnay?", "Aligoté", ["Sauvignon Blanc", "Riesling", "Sémillon"], "As brancas da região são Chardonnay e Aligoté."),
          mc("Qual outra uva tinta, além da Pinot Noir, é cultivada na Borgonha?", "Gamay", ["Merlot", "Syrah", "Cabernet Franc"], "As tintas da Borgonha são Pinot Noir e Gamay."),
          order("Ordene as sub-regiões da Borgonha de norte a sul", ["Chablis", "Côte de Nuits", "Côte de Beaune", "Côte Chalonnaise", "Mâconnais", "Beaujolais"], "Uma faixa estreita de vinhedos vai de Chablis, ao norte, até o Beaujolais, nos arredores de Lyon."),
          mc("Que tipo de vinho responde pela maior fatia da produção da Borgonha?", "Branco", ["Tinto", "Rosé", "Espumante crémant"], "A produção se divide em cerca de 59% de brancos, 30% de tintos e rosés e 11% de crémants."),
          mc("O que é um crémant?", "Um espumante francês produzido fora de Champagne", ["Um vinho doce fortificado", "Um tinto leve para beber gelado", "Um Champagne de safra única"], "Na Borgonha, o Crémant de Bourgogne é um exemplo.")
        ] },
      { id: "bor-2", title: "Borgonha contra Bordeaux", level: "medio",
        tip: "A grande diferença entre as duas é o clima: Bordeaux é mais quente e atlântica, a Borgonha é continental e fria. Isso leva a vinhos de corte em Bordeaux e vinhos de uma só uva (varietais) na Borgonha. A Pinot Noir é considerada a uva mais difícil de cultivar.",
        questions: [
          mc("Qual é a principal diferença entre as regiões de Borgonha e Bordeaux?", "O clima, que afeta as uvas", ["O tamanho das garrafas", "A idade das vinhas", "O uso de barris"], "Bordeaux é mais quente; a Borgonha, continental e bastante fria."),
          mc("Como é o clima da Borgonha?", "Continental e bastante frio", ["Marítimo e quente", "Mediterrâneo e seco", "Tropical e úmido"], "O frio da região é o que favorece a Pinot Noir."),
          mc("Regiões frias costumam dar vinhos com mais...", "Acidez", ["Álcool", "Corpo e estrutura pesada", "Açúcar"], "As regiões quentes tendem a dar mais estrutura e álcool."),
          mc("Que tradição segue a Borgonha: vinhos de uma só uva ou de corte?", "De uma só uva (varietal)", ["De corte (blend) de várias uvas", "Só espumantes", "Só vinhos fortificados"], "Bordeaux é o exemplo da tradição de corte; a Borgonha, do varietal."),
          match("Ligue a região ao seu estilo", [["Borgonha", "Vinhos varietais"], ["Bordeaux", "Vinhos de corte"], ["Chardonnay", "O branco da Borgonha"], ["Sauvignon Blanc e Sémillon", "Brancos de Bordeaux"]], "Duas tendências opostas: o conceito de varietal na Borgonha e o de blend em Bordeaux."),
          mc("O que torna a Pinot Noir difícil de cultivar?", "É sensível ao terroir e propensa a doenças", ["Tem casca muito grossa e resistente", "Só amadurece em climas muito quentes", "Cresce apenas em solos arenosos"], "Ela amadurece cedo e sofre em clima mais quente."),
          mc("Qual solo é considerado ideal para a Pinot Noir?", "Argila e calcário", ["Areia pura", "Cascalho de rio", "Basalto escuro"], "Esse solo dá vinhos com mais taninos."),
          mc("O que acontece com a Pinot Noir em um local quente?", "Perde compostos que a casca relativamente fina guarda", ["Fica com a casca muito grossa", "Ganha mais acidez natural", "Passa a amadurecer mais tarde"], "A casca da Pinot Noir é relativamente fina e pode armazenar esses compostos.")
        ] },
      { id: "bor-3", title: "Chablis e o conceito de climat", level: "avancado",
        tip: "Chablis fica ao norte da Borgonha, entre Paris e Beaune, e usa só Chardonnay. O clima é semicontinental e o solo é argilo-calcário. O climat é a parcela delimitada, com condições próprias de solo, relevo e clima.",
        questions: [
          mc("Que uva é usada em Chablis?", "Chardonnay", ["Pinot Noir", "Aligoté", "Sauvignon Blanc"], "O uso exclusivo da Chardonnay é a principal característica de Chablis."),
          mc("Como é o clima de Chablis?", "Semicontinental, sem influência marítima, com invernos longos e rigorosos", ["Marítimo e ameno o ano todo", "Mediterrâneo, com verões secos e invernos suaves", "Tropical, com chuva constante"], "Os verões costumam ser razoavelmente quentes."),
          mc("Como é o solo de Chablis?", "Argilo-calcário, sobre uma grande bacia de calcário", ["Granítico", "Arenoso", "Vulcânico"], "Esse substrato calcário dá o sabor único dos brancos da região."),
          mc("O que é um climat na Borgonha?", "Uma parcela delimitada com condições geológicas e climáticas próprias", ["Uma safra excepcional", "Uma técnica de prensagem", "Um tipo de barril"], "É um aprofundamento do conceito de terroir, aplicado a cada parcela."),
          mc("Qual conjunto de fatores descreve um climat?", "Camadas do solo, inclinação, altitude, exposição ao sol e ventos", ["Só a idade das vinhas", "Só o tempo em barrica", "Só o número de garrafas produzidas"], "Entra também o estilo do produtor."),
          mc("Que termo é próprio da Borgonha para uma parcela com condições particulares?", "Climat", ["Cuvée", "Assemblage", "Château"], "Segundo o órgão francês das denominações (INAO), o termo é exclusivo da Borgonha."),
          mc("Que faixa de altitude entra na descrição de um climat?", "Entre 100 e 250 metros", ["Entre 600 e 900 metros", "Acima de 1.200 metros", "Abaixo de 20 metros"], "A altitude é um dos fatores que compõem o climat."),
          mc("O que significa dizer que a Borgonha é a região mais fragmentada da França?", "Um mesmo vinhedo pode ter vários proprietários", ["Há vinhedos só em ilhas", "Cada vinícola só tem uma garrafa", "As vinhas ficam em locais separados do mar"], "O vinhedo é dividido em faixas contínuas, cada uma de um dono.")
        ] },
      { id: "bor-4", title: "Côte de Nuits", level: "avancado",
        tip: "A Côte de Nuits é a metade norte da Côte d'Or e dá os grandes Pinot Noir da Borgonha. As comunas mais conhecidas, de norte a sul, são Gevrey-Chambertin, Morey-Saint-Denis, Chambolle-Musigny, Vougeot, Vosne-Romanée e Nuits-Saint-Georges.",
        questions: [
          mc("Que parte da Côte d'Or é a Côte de Nuits?", "A metade norte", ["A metade sul", "O extremo leste", "A região de Chablis"], "A metade sul da Côte d'Or é a Côte de Beaune."),
          mc("Qual uva predomina na Côte de Nuits?", "Pinot Noir", ["Chardonnay", "Gamay", "Aligoté"], "A maioria dos grandes Pinot Noir do mundo vem dali."),
          order("Ordene as comunas da Côte de Nuits de norte a sul", ["Gevrey-Chambertin", "Morey-Saint-Denis", "Chambolle-Musigny", "Vougeot", "Vosne-Romanée", "Nuits-Saint-Georges"], "Elas se alinham numa estreita faixa de encostas, de Dijon rumo a Corgoloin."),
          mc("Qual destas comunas pertence à Côte de Nuits?", "Gevrey-Chambertin", ["Pommard", "Meursault", "Volnay"], "Pommard, Meursault e Volnay ficam na Côte de Beaune."),
          mc("Qual destes vinhos tem denominação na Côte de Nuits?", "Bonnes-Mares", ["Montrachet", "Corton", "Meursault"], "Montrachet, Corton e Meursault são da Côte de Beaune."),
          mc("Qual combinação favorece grandes tintos na Côte de Nuits?", "Clima continental, verões quentes, outonos secos e solo calcário", ["Clima marítimo e solos arenosos", "Calor constante e solos vulcânicos", "Neblina o ano todo e solo de areia"], "Isso permite grandes tintos mesmo em latitude elevada."),
          mc("Onde ficam os melhores vinhedos da Côte de Nuits?", "A meio caminho das encostas", ["Na planície, junto aos rios", "No topo mais alto", "Só nos vales úmidos"], "A posição intermediária da encosta é a mais favorável."),
          mc("Além dos grandes Pinot Noir, o que a Côte de Nuits produz em pequeno número?", "Chardonnays de alta qualidade", ["Espumantes Crémant", "Vinhos doces de colheita tardia", "Rosés populares"], "O foco da região, porém, é o tinto de Pinot Noir.")
        ] },
      { id: "bor-5", title: "Romanée-Conti", level: "expert",
        tip: "O Domaine de la Romanée-Conti (DRC) fica em Vosne-Romanée. O nome vem do príncipe Conti, que foi dono do vinhedo até ser preso na Revolução. Desde 1911 pertence à família Villaine, que adota práticas orgânicas e biodinâmicas.",
        questions: [
          mc("Em qual comuna ficam os vinhedos tintos do Domaine de la Romanée-Conti?", "Vosne-Romanée", ["Pommard", "Chablis", "Meursault"], "La Tâche, Richebourg, Échézeaux e outros também ficam em Vosne-Romanée."),
          mc("De quem vem o nome Romanée-Conti?", "Do príncipe Conti, que foi dono do vinhedo", ["De um monge cisterciense", "De um duque da Borgonha", "De um imperador romano"], "O vinhedo foi vendido ao príncipe Louis-François de Bourbon, o príncipe Conti, no reinado de Luís XV."),
          mc("Que acontecimento fez o príncipe Conti perder o vinhedo em 1793?", "Foi preso pela Revolução", ["Perdeu-o em uma aposta", "Vendeu-o a um monge", "Uma geada destruiu as vinhas"], "O nome Romanée-Conti só surgiu em 1794."),
          mc("Que família comprou o domaine em 1911 e o possui até hoje?", "Villaine", ["Rothschild", "Moët", "Conti"], "Aubert de Villaine conduziu as práticas orgânicas e biodinâmicas."),
          order("Ordene os fatos da história do domaine", ["Vinhedos vendidos ao príncipe Conti", "Príncipe Conti preso (1793)", "Surge o nome Romanée-Conti (1794)", "Família Villaine compra o domaine (1911)", "Início da prática orgânica (1986)", "Início da biodinâmica (2007)"], "Primeiro o príncipe Conti, depois a Revolução, o nome e, no século XX, os Villaine."),
          mc("Por que o domaine reintroduziu cavalos no trabalho do vinhedo?", "Para não compactar o solo", ["Para espantar pássaros", "Para colher mais rápido", "Para reduzir o custo de barris"], "Trabalhar com cavalos faz parte do cuidado extremo em todas as etapas."),
          mc("Quanto tempo, no mínimo, envelhece o vinho do DRC em barris?", "18 meses, em carvalho francês novo", ["3 meses, em aço inox", "6 meses, em barris usados", "5 anos, em cimento"], "A fermentação dura cerca de um mês, com temperatura controlada abaixo de 33 °C."),
          mc("Qual destes vinhedos do domaine produz vinho branco?", "Montrachet", ["La Tâche", "Richebourg", "Échézeaux"], "Os demais vinhedos citados ficam em Vosne-Romanée."),
        ] },
      { id: "bor-6", title: "Côte de Beaune", level: "avancado",
        tip: "A Côte de Beaune leva o nome da cidade de Beaune e é famosa por alguns dos brancos mais caros do mundo, de Chardonnay, além de ótimos tintos de Pinot Noir. Os grands crus locais são Montrachet e Charlemagne (brancos) e Corton (tinto).",
        questions: [
          mc("De onde vem o nome Côte de Beaune?", "Da cidade de Beaune, centro do comércio de vinho da região", ["De uma abadia", "De um rio local", "De um duque do século XIV"], "Beaune é o centro da produção e do comércio da região."),
          mc("Pelo que a Côte de Beaune é mais famosa?", "Por alguns dos brancos mais caros do mundo", ["Por espumantes populares", "Por rosés leves", "Por vinhos fortificados"], "Muitos deles levam Montrachet no nome."),
          match("Ligue a denominação ao estilo", [["Corton", "Grand Cru tinto local"], ["Puligny-Montrachet", "Brancos potentes, com maçã e nozes tostadas"], ["Meursault", "Brancos redondos, amanteigados e cremosos"], ["Pommard", "Tintos intensos"]], "Os brancos vêm de Chardonnay e os tintos, de Pinot Noir."),
          mc("Em que ano a Côte de Beaune foi classificada como AOC?", "1936", ["1855", "1911", "1989"], "Está entre os territórios vinícolas mais antigos da França."),
          order("Ordene as denominações da Côte de Beaune de norte a sul", ["Corton", "Beaune", "Pommard", "Volnay", "Meursault", "Puligny-Montrachet"], "Essa é a ordem, de norte a sul, das principais denominações locais."),
          mc("Onde começam, ao norte, os vinhedos da Côte de Beaune?", "Em Ladoix-Serrigny", ["Em Dijon", "Em Mâcon", "Em Chablis"], "Eles se estendem até Maranges, ao sul."),
          mc("Qual destas aldeias é famosa pelos tintos?", "Pommard", ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"], "Pommard, Volnay, Beaune e Savigny-lès-Beaune são as aldeias mais conhecidas para tintos."),
          mc("Qual destas aldeias tem um pouco menos de prestígio, mas dá ótimos vinhos?", "Monthelie", ["Pommard", "Puligny-Montrachet", "Volnay"], "Aloxe-Corton, Pernand-Vergelesses e Auxey-Duresses estão na mesma situação.")
        ] },
      { id: "bor-7", title: "Chalonnaise e Mâconnais", level: "avancado",
        tip: "Ao sul da Côte d'Or, a Côte Chalonnaise tem cinco appellations principais: Bouzeron, Rully, Mercurey, Givry e Montagny. O Mâconnais é grande produtor de brancos de Chardonnay, em clima mais quente.",
        questions: [
          match("Ligue a appellation da Côte Chalonnaise ao seu estilo", [["Bouzeron", "Branco de Aligoté"], ["Rully", "Espumante Crémant de Bourgogne"], ["Mercurey", "Tintos robustos e frutados"], ["Montagny", "Brancos de Chardonnay"]], "São cinco appellations principais, de sabores sutis e características fortes."),
          mc("Qual destas appellations NÃO fica na Côte Chalonnaise?", "Pouilly-Fuissé", ["Givry", "Rully", "Montagny"], "Pouilly-Fuissé fica no sul do Mâconnais."),
          mc("Qual uva faz o branco de Bouzeron?", "Aligoté", ["Chardonnay", "Pinot Noir", "Gamay"], "A Aligoté é uma das duas uvas brancas da Borgonha, ao lado da Chardonnay."),
          mc("Que tipo de vinho predomina no Mâconnais?", "Branco", ["Espumante", "Fortificado", "Doce de sobremesa"], "A região é grande produtora de brancos."),
          mc("Como é o clima do Mâconnais?", "Mais quente, por receber ar vindo do Mediterrâneo", ["Muito mais frio que Chablis", "Oceânico, com neblina constante", "Árido e desértico"], "O calor influi na qualidade dos vinhos."),
          mc("Como são os brancos de Chardonnay do Mâconnais em comparação com o norte da Borgonha?", "Mais leves", ["Muito mais encorpados", "Sempre doces", "Sempre fortificados"], "O estilo é mais leve do que o dos brancos do norte."),
          mc("Que uvas fazem o Mâcon Rouge?", "Gamay e, às vezes, Pinot Noir", ["Cabernet Sauvignon e Merlot", "Só Syrah", "Chardonnay e Aligoté"], "Os tintos têm teor alcoólico mais alto nos locais mais quentes."),
          mc("Como é o Pouilly-Fuissé?", "Branco de vinhedos do sul do Mâconnais, com vinhas mais antigas", ["Tinto de Pinot Noir da Côte de Nuits", "Espumante de Rully", "Branco de Sauvignon Blanc do Loire"], "Não deve ser confundido com o Pouilly-Fumé, do Loire.")
        ] },
      { id: "bor-8", title: "Beaujolais", level: "medio",
        tip: "O Beaujolais fica ao sul da Borgonha, ao norte de Lyon. A viticultura veio com os romanos. Hoje quase todo o vinho é de Gamay, uva banida da Borgonha no século XIV e que se adaptou ali ao clima e ao solo granítico.",
        questions: [
          mc("Onde fica o Beaujolais?", "Ao sul da Borgonha e ao norte de Lyon", ["Ao norte de Chablis", "Junto ao Atlântico", "No Vale do Loire"], "É a sub-região mais ao sul da Borgonha."),
          mc("Qual uva responde por 99% dos rótulos do Beaujolais?", "Gamay", ["Pinot Noir", "Chardonnay", "Syrah"], "A Gamay se adaptou ao clima e ao solo granítico."),
          mc("Por que a Gamay passou a ser cultivada no Beaujolais?", "Foi proibida na Borgonha, no século XIV", ["Foi trazida pelos monges no século XI", "Foi criada por cruzamento em Bordeaux", "Veio com os romanos do Egito"], "O duque Filipe II a considerou incapaz de dar vinhos elegantes como os de Pinot Noir."),
          mc("Que rio, com sua rota comercial, favoreceu a viticultura do Beaujolais iniciada pelos romanos?", "Saône", ["Loire", "Garonne", "Marne"], "A rota do rio Saône favoreceu a viticultura iniciada pelos romanos."),
          mc("O que era a corrida do Beaujolais, nos anos 1960?", "A disputa para entregar primeiro o vinho novo a distribuidores e bistrôs", ["Uma maratona de vindimadores", "Um leilão de safras antigas", "Uma prova de degustação às cegas"], "O vinho era feito e engarrafado o mais rápido possível e vendido na terceira semana de novembro."),
          mc("Que imagem o Beaujolais ganhou com a corrida do vinho novo?", "De vinho popular, fresco e frutado, sem grandes pretensões", ["De vinho raro e caro", "De vinho de guarda por décadas", "De espumante de festa"], "Dessa tradição vem a fama de vinho agradável e descomplicado.")
        ] }
    ]
  };

  var rhoneLoire = {
    id: "rhone-loire", title: "Vale do Rhône e Vale do Loire", country: "França",
    lessons: [
      { id: "rod-1", title: "O Vale do Rhône: visão geral", level: "medio",
        tip: "O Rhône nasce nos Alpes suíços e desemboca no Mediterrâneo. Os romanos começaram a viticultura ali no século I a.C. O vale famoso vai de Vienne a Avignon e se divide em duas partes: setentrional e meridional.",
        questions: [
          mc("Onde nasce o rio Rhône?", "Nos Alpes suíços", ["Nos Pireneus", "No Maciço Central", "Nas Ardenas"], "Ele segue até desembocar no Mediterrâneo."),
          mc("Em que mar desemboca o Rhône?", "Mediterrâneo", ["Atlântico", "Mar do Norte", "Mar Negro"], "Daí a influência marítima, forte no sul do vale."),
          mc("Entre quais cidades vai a parte famosa do Vale do Rhône?", "Vienne (norte) e Avignon (sul)", ["Dijon e Lyon", "Nantes e Orléans", "Reims e Épernay"], "É um trecho do vale que se divide em norte e sul."),
          mc("Quem iniciou a viticultura no Vale do Rhône?", "Os romanos, no século I a.C.", ["Os monges cistercienses, no século XVI", "Os gregos, no século X a.C.", "Os duques da Borgonha, no século XIV"], "Plínio já se referia a vinhos produzidos perto de Vienne."),
          mc("Como se divide, geralmente, o Vale do Rhône?", "Em setentrional (norte) e meridional (sul)", ["Em margem esquerda e direita", "Em Côte e Plateau", "Em três áreas: leste, oeste e centro"], "Cada parte tem solo, terroir, clima e castas diferentes."),
          mc("Por que o Rhône costuma ser dividido em duas partes?", "Porque solo, clima e castas diferem entre norte e sul", ["Porque o rio se divide em dois", "Porque há uma fronteira política", "Porque uma parte só faz tinto"], "A diversidade de solos é grande.")
        ] },
      { id: "rod-2", title: "Rhône Setentrional", level: "avancado",
        tip: "No norte predominam a Syrah (tinta) e as brancas Viognier, Marsanne e Roussanne. Os vinhedos ficam em encostas estreitas de granito, com invernos frios e verões bem quentes. Os vinhos são finos e elegantes, e a produção é pequena.",
        questions: [
          mc("Qual é a principal uva tinta do Rhône Setentrional?", "Syrah", ["Merlot", "Pinot Noir", "Gamay"], "A Syrah é a tinta dominante no norte."),
          mc("Qual destas é uma uva branca do Rhône Setentrional?", "Viognier", ["Chenin Blanc", "Sémillon", "Riesling"], "Viognier, Marsanne e Roussanne predominam entre as brancas."),
          mc("Como são os vinhedos do Rhône Setentrional?", "Pequenos, em encostas estreitas de solo rico em granito", ["Grandes e planos, em solo de areia", "Em ilhas, com solo vulcânico", "Em planaltos calcários de giz"], "O espaço é limitado pelas encostas."),
          mc("Como é o clima do Rhône Setentrional?", "Invernos frios e verões bem quentes, com neblina pela manhã", ["Quente e seco o ano todo", "Frio e úmido o ano todo", "Tropical, com chuvas fortes"], "É um clima temperado."),
          mc("Como são os vinhos do Rhône Setentrional?", "Finos e elegantes, mais conhecidos entre especialistas do que entre o grande público", ["Rústicos e baratos", "Doces e fortificados", "Todos espumantes"], "A produção do norte é menor que a de Châteauneuf-du-Pape."),
          mc("Qual é a denominação mais famosa do Rhône meridional?", "Châteauneuf-du-Pape", ["Hermitage", "Côte-Rôtie", "Cornas"], "No norte, a produção é menor e os vinhos são mais conhecidos entre especialistas."),
          mc("Quantos crus de alta reputação, todos AOC, o Rhône setentrional tem?", "Oito", ["Dois", "Quatro", "Quinze"], "Côte-Rôtie, Condrieu, Château-Grillet, Saint-Joseph, Hermitage, Crozes-Hermitage, Cornas e Saint-Péray.")
        ] },
      { id: "rod-3", title: "Os crus do norte e seus hectares", level: "expert",
        tip: "O Rhône norte tem oito crus: Côte-Rôtie (200 ha), Condrieu (90), Château-Grillet (3,4), Saint-Joseph (700), Hermitage (130), Crozes-Hermitage (1.020), Cornas (75) e Saint-Péray (65).",
        questions: [
          mc("Qual cru do Rhône norte tem a maior área?", "Crozes-Hermitage", ["Hermitage", "Cornas", "Côte-Rôtie"], "Crozes-Hermitage tem cerca de 1.020 ha, bem mais que o Hermitage, de 130 ha."),
          mc("Qual cru do Rhône norte tem a menor área, com apenas 3,4 ha?", "Château-Grillet", ["Cornas", "Condrieu", "Saint-Péray"], "É uma denominação minúscula."),
          mc("Qual destes crus tem cerca de 700 ha?", "Saint-Joseph", ["Condrieu", "Hermitage", "Cornas"], "É o segundo maior cru do norte."),
          order("Ordene do maior para o menor em área", ["Crozes-Hermitage", "Saint-Joseph", "Côte-Rôtie", "Hermitage", "Condrieu", "Cornas"], "As áreas aproximadas são 1.020, 700, 200, 130, 90 e 75 hectares."),
          match("Ligue o cru à área aproximada", [["Côte-Rôtie", "200 ha"], ["Hermitage", "130 ha"], ["Cornas", "75 ha"], ["Saint-Péray", "65 ha"]], "São crus pequenos do norte do Rhône."),
          mc("Entre estes crus, qual tem a menor área?", "Saint-Péray", ["Cornas", "Hermitage", "Condrieu"], "Saint-Péray tem cerca de 65 ha."),
          mc("Qual destes NÃO é um cru do Rhône setentrional?", "Châteauneuf-du-Pape", ["Cornas", "Condrieu", "Côte-Rôtie"], "Châteauneuf-du-Pape fica no sul do vale.")
        ] },
      { id: "rod-4", title: "Rhône Meridional e Châteauneuf-du-Pape", level: "avancado",
        tip: "No sul o vale se alarga, o clima é mais quente e sob forte influência do mar, com o vento Mistral muito importante. Avignon abrigou a corte papal de 1309 a 1377. Fazem-se tintos, brancos e rosés.",
        questions: [
          mc("Quando Avignon abrigou a corte papal?", "Entre 1309 e 1377", ["Entre 1066 e 1100", "Entre 1500 e 1550", "Entre 1789 e 1815"], "Ali há um castelo construído como residência de verão do Papa."),
          mc("Como é o clima do Rhône Meridional em comparação com o norte?", "Mais quente, com forte influência do mar", ["Mais frio, com neve", "Igual ao norte", "Totalmente continental"], "Tempestades e chuvas fortes não são comuns."),
          mc("Que vento é muito importante para o terroir do Rhône meridional?", "Mistral", ["Zonda", "Siroco", "Foehn"], "O Mistral é um vento forte da região."),
          mc("Que tipos de vinho se fazem no Rhône meridional?", "Tintos, brancos e rosés", ["Só tintos", "Só espumantes", "Só brancos secos"], "A região é variada em estilos."),
          mc("Qual destas é uma uva branca do Rhône meridional?", "Clairette", ["Pinot Noir", "Gamay", "Merlot"], "Entre as brancas principais estão Viognier, Clairette, Bourboulenc, Marsanne e Roussanne."),
          order("Ordene da maior para a menor em área", ["Côtes-du-Rhône regional", "Côtes-du-Rhône Villages", "Châteauneuf-du-Pape"], "As áreas aproximadas são 45 mil, 5 mil e 3,2 mil hectares."),
          mc("Como são os tintos de Châteauneuf-du-Pape?", "Robustos, poderosos, estruturados e capazes de envelhecer por décadas", ["Leves e para beber jovens", "Sempre doces", "Sempre espumantes"], "Também têm uma ampla gama de aromas."),
          mc("O que os vinhos de Châteauneuf-du-Pape refletem muito?", "O solo", ["O vento polar", "O tipo de barril", "A altitude extrema"], "A AOC é considerada um ícone francês.")
        ] },
      { id: "rod-5", title: "O Vale do Loire: visão geral e clima", level: "medio",
        tip: "O Vale do Loire fica entre Nantes e Orléans e é patrimônio mundial da Unesco desde 2000. Tem quatro áreas: Pays Nantais, Anjou, Touraine e Centre. O clima vai de oceânico, no oeste, a mais continental, no centro.",
        questions: [
          mc("Entre quais cidades fica o Vale do Loire?", "Nantes e Orléans", ["Dijon e Lyon", "Reims e Épernay", "Vienne e Avignon"], "O território percorrido pelo rio e afluentes se chama La Vallée de la Loire et Centre."),
          mc("Desde que ano o Vale do Loire é patrimônio mundial da Unesco?", "2000", ["1855", "1936", "1987"], "A paisagem de castelos e vinhedos é reconhecida pela Unesco."),
          order("Ordene as áreas do Loire do oeste para o leste", ["Pays Nantais", "Anjou", "Touraine", "Centre"], "Nantes fica no extremo oeste e o Centro é a parte mais continental do Loire."),
          mc("Como é o clima em Nantes, no extremo oeste do Loire?", "Oceânico", ["Continental rigoroso", "Mediterrâneo seco", "Desértico"], "Ele se torna mais continental rumo ao interior."),
          mc("Qual parte do Loire tem o clima mais continental?", "O Centro", ["Nantes", "A foz do rio", "A costa atlântica"], "Nantes é oceânico e o clima fica mais continental em Anjou, Saumurois e Touraine."),
          mc("Quais tipos de solo se combinam no Loire?", "Rochas eruptivas, calcário e argila", ["Só areia", "Só cascalho de rio", "Só xisto"], "A combinação explica a variedade de vinhos."),
          mc("O que influencia o clima do Loire, além do solo?", "As marés e o rio Loire", ["Neve permanente", "O deserto do sul", "Geleiras alpinas"], "Os solos são ricos e o clima, bem diverso.")
        ] },
      { id: "rod-6", title: "As uvas do Loire", level: "avancado",
        tip: "No Loire cultivam-se mais de vinte tipos de uva. Entre as principais estão a Melon de Bourgogne (Muscadet), a Chenin Blanc, a Sauvignon Blanc e a tinta Cabernet Franc, que chegou no século XI.",
        questions: [
          mc("Qual uva faz o Muscadet?", "Melon de Bourgogne", ["Chenin Blanc", "Sauvignon Blanc", "Cabernet Franc"], "Foi trazida pelos monges no século XVI."),
          mc("Qual é a primeira uva tinta do Loire, trazida no século XI?", "Cabernet Franc", ["Pinot Noir", "Merlot", "Syrah"], "É uma uva muito importante no vale."),
          mc("Como foi chamada a Chenin até o século XVI?", "Planta de Anjou", ["Melon do Loire", "Uva de Touraine", "Cepa dos reis"], "O nome lembra a região de Anjou."),
          mc("Que uva e que aromas caracterizam o Saint-Nicolas-de-Bourgueil?", "Cabernet Franc, com frutas vermelhas, framboesa, cereja e amora", ["Chardonnay, com maçã e manteiga", "Syrah, com pimenta e couro", "Gamay, com banana e doce"], "O vinho vem da Cabernet Franc cultivada na cidade de mesmo nome."),
          mc("Como é o Vouvray, de Touraine?", "Chenin Blanc de cor dourada brilhante, tranquilo ou efervescente", ["Tinto de Cabernet Franc", "Branco de Chardonnay", "Rosé de Gamay"], "Pode ser vinho tranquilo ou espumante."),
          match("Ligue o vinho do Loire à uva", [["Muscadet", "Melon de Bourgogne"], ["Vouvray", "Chenin Blanc"], ["Saint-Nicolas-de-Bourgueil", "Cabernet Franc"], ["Sancerre", "Sauvignon Blanc"]], "Cada denominação tem uma uva de referência."),
          mc("Em que área do Loire fica o Vouvray?", "Touraine", ["Pays Nantais", "Centre", "Alsácia"], "Ele é um vinho de Touraine.")
        ] },
      { id: "rod-7", title: "Sancerre e Pouilly-Fumé", level: "avancado",
        tip: "Sancerre e Pouilly-Fumé ficam frente a frente e são referências de Sauvignon Blanc. O nome Fumé lembra a película cinza cor de fumaça das uvas maduras e o aroma esfumaçado. Não confunda com Pouilly-Fuissé, da Borgonha.",
        questions: [
          mc("Qual é a uva de destaque de Sancerre?", "Sauvignon Blanc", ["Chardonnay", "Chenin Blanc", "Melon de Bourgogne"], "Os tintos e rosés de Sancerre são minoria."),
          mc("Que queijo combina muito com o Sancerre, pelo contraste entre gordura e acidez?", "Queijo artesanal de cabra", ["Parmesão curado", "Queijo azul", "Queijo de pasta mole e fresca de vaca"], "A acidez do vinho equilibra a gordura do queijo."),
          mc("Qual uva faz o Pouilly-Fumé?", "Sauvignon Blanc", ["Chardonnay", "Gamay", "Pinot Noir"], "A AOC fica em torno de Pouilly-sur-Loire."),
          mc("Em que departamento fica Pouilly-sur-Loire?", "Nièvre", ["Marne", "Gironde", "Vaucluse"], "Fica no centro da França."),
          mc("Qual denominação fica em frente a Sancerre, também nobre em Sauvignon Blanc?", "Pouilly-Fumé", ["Muscadet", "Vouvray", "Anjou"], "Pouilly-Fumé fica em frente a Sancerre."),
          mc("De onde vem o nome Fumé?", "Da película cinza cor de fumaça das uvas maduras e do aroma esfumaçado", ["Do uso de lenha na secagem das uvas", "Da fumaça dos vinhedos queimados", "Do barril tostado"], "O aroma lembra o sílex."),
          mc("Que clima e relevo dão ao Pouilly-Fumé elegância e mineralidade?", "Clima temperado com tendência continental e relevo levemente acidentado", ["Clima tropical e planície", "Clima desértico e altas montanhas", "Clima polar e geleiras"], "Esses fatores moldam o Sauvignon Blanc local."),
          mc("Que uva faz o Pouilly-Fuissé, de nome parecido?", "Chardonnay", ["Sauvignon Blanc", "Chenin Blanc", "Pinot Noir"], "O Pouilly-Fuissé fica no sul da Borgonha.")
        ] },
      { id: "rod-8", title: "Castelos e vinhos do Loire", level: "expert",
        tip: "No Loire, castelos e vinhos andam juntos. François I levou a uva Romorantin da Borgonha, ainda cultivada em Chambord. Chenonceau e Azay-le-Rideau dão nome a appellations de Touraine.",
        questions: [
          mc("Qual uva da Borgonha François I introduziu no Loire?", "Romorantin", ["Gamay", "Aligoté", "Pinot Noir"], "Ela ainda é cultivada em Chambord."),
          mc("Onde a Romorantin ainda é cultivada?", "Em Chambord", ["Em Bordeaux", "Em Épernay", "Em Dijon"], "Passados cerca de 500 anos, a uva continua ali."),
          mc("Que appellation leva o nome do Castelo de Chenonceau?", "Touraine-Chenonceau", ["Touraine-Azay-le-Rideau", "Sancerre", "Pouilly-Fumé"], "Tem branco brilhante e tinto vermelho intenso."),
          mc("Como é o tinto de Touraine-Chenonceau?", "Vermelho intenso, com frutas pretas", ["Pálido, com aroma de maçã verde", "Alaranjado, com nozes", "Cor de cebola, com especiarias"], "O branco é brilhante."),
          mc("Que estilos aparecem em Touraine-Azay-le-Rideau?", "Branco fresco e cítrico e rosé de cor delicada", ["Tinto muito encorpado", "Doce de sobremesa", "Espumante rosé de safra única"], "O castelo de Azay-le-Rideau dá nome à appellation."),
          match("Ligue o castelo ou a uva à appellation ou ao lugar", [["Castelo de Chenonceau", "Touraine-Chenonceau"], ["Castelo de Azay-le-Rideau", "Touraine-Azay-le-Rideau"], ["Romorantin", "Chambord"]], "Castelos e vinhos andam juntos no Loire."),
          mc("Qual destes é um castelo do Loire ligado a vinhos?", "Brézé", ["Château Margaux", "Château Latour", "Château d'Yquem"], "Rivau, Brézé e Brissac também têm vinhos associados.")
        ] }
    ]
  };

  var champagne = {
    id: "champagne", title: "Champagne", country: "França",
    lessons: [
      { id: "chp-1", title: "A região de Champagne", level: "medio",
        tip: "A Champagne fica no nordeste da França, a leste de Paris. O clima é frio, com média anual de 10,5 °C, e o solo é de calcário quase puro, parecido com giz. Os túneis escavados nesse solo servem hoje ao envelhecimento do vinho.",
        questions: [
          mc("Em que parte da França fica a Champagne?", "Nordeste, a leste de Paris", ["Sudoeste, junto ao Atlântico", "Sul, junto ao Mediterrâneo", "Centro, no vale do Loire"], "A região faz fronteira ao norte com a Bélgica."),
          mc("Qual é a diferença entre La Champagne e le Champagne?", "La Champagne é a região; le Champagne é o vinho", ["La Champagne é o vinho; le Champagne é a região", "São o mesmo, só muda o sotaque", "La é o tinto; le é o rosé"], "O gênero do artigo distingue a região do vinho."),
          mc("Como é o clima da Champagne?", "Frio, com menos sol do que Bordeaux", ["Quente e seco", "Tropical", "Desértico"], "A média anual é de 10,5 °C, só meio grau acima do mínimo necessário para o cultivo produtivo da videira."),
          mc("Por que os vinhos da Champagne têm pouco teor alcoólico?", "O clima é frio, com menos sol que Bordeaux", ["O solo é muito ácido", "Usam sempre leveduras especiais", "As uvas são colhidas verdes por lei"], "A temperatura média fica pouco acima do limite mínimo para a videira."),
          mc("Como é o solo da Champagne?", "Calcário quase puro, macio e parecido com giz", ["Granito duro", "Areia fina", "Basalto"], "Isso facilitou escavar túneis, que não precisam de escoras."),
          mc("Para que servem hoje os túneis escavados no calcário?", "Para envelhecer o vinho", ["Para plantar uvas", "Para armazenar grãos", "Para engarrafar sob sol"], "Antigamente também serviram de refúgio contra invasões."),
          mc("Quais as condições nos túneis da Moët & Chandon, em Épernay?", "Cerca de 12 °C o ano todo e umidade em torno de 75%", ["0 °C e ar seco", "25 °C e umidade de 30%", "Variam muito entre estações"], "São cinco andares de túneis, com cerca de 28 km."),
          mc("Que rio corta a região de Champagne?", "Marne", ["Saône", "Garonne", "Rhône"], "Os vinhedos ficam em volta de Reims, Épernay e Châlons.")
        ] },
      { id: "chp-2", title: "As uvas e as sub-regiões", level: "avancado",
        tip: "As uvas mais importantes são Chardonnay (branca) e as tintas Pinot Noir e Pinot Meunier. A Montagne de Reims é de tintas, a Côte des Blancs é de Chardonnay e a Vallée de la Marne tem brancas e tintas.",
        questions: [
          mc("Quais são as três uvas mais importantes de Champagne?", "Chardonnay, Pinot Noir e Pinot Meunier", ["Chardonnay, Sauvignon Blanc e Merlot", "Riesling, Gamay e Syrah", "Pinot Gris, Chenin Blanc e Malbec"], "Uma é branca e duas são tintas."),
          mc("Qual das três uvas principais de Champagne é branca?", "Chardonnay", ["Pinot Noir", "Pinot Meunier", "Gamay"], "As outras duas são tintas."),
          mc("Qual destas é uma uva antiga de Champagne, hoje restrita a cerca de 1% dos vinhedos?", "Petit Meslier", ["Syrah", "Merlot", "Grenache"], "Arbanne e Petit Meslier eram abundantes antigamente."),
          match("Ligue a sub-região à sua característica", [["Montagne de Reims", "Pinot Noir e Pinot Meunier"], ["Côte des Blancs", "Chardonnay"], ["Vallée de la Marne", "Junto ao rio, com brancas e tintas"]], "Cada sub-região tem sua vocação."),
          mc("Onde fica a Montagne de Reims?", "Entre Épernay e Reims", ["Junto à Bélgica", "Ao sul de Lyon", "Em Chablis"], "É uma das sub-regiões principais."),
          mc("Que aromas a Chardonnay empresta ao Champagne?", "Florais, frutados e lácteos, com finesse aromática", ["Pimenta e couro", "Cassis e grafite", "Tabaco e cedro"], "Ela também dá finesse aromática."),
          mc("O que a Pinot Noir dá ao Champagne?", "Estrutura e aromas de frutas maduras", ["Só acidez cítrica", "Leveza e aromas de flores", "Doçura e aroma de mel"], "Ela contribui com estrutura ao corte."),
          mc("Qual das três uvas principais é considerada a menos importante?", "Pinot Meunier", ["Chardonnay", "Pinot Noir", "Todas valem o mesmo"], "Ela também dá estrutura ao vinho.")
        ] },
      { id: "chp-3", title: "Dom Pérignon e as regras da AOC", level: "medio",
        tip: "A descoberta do método do vinho espumante é atribuída ao monge Dom Pérignon, da Abadia de Hautvilliers. Só se pode chamar de Champagne o espumante feito na região, com uvas da região e técnica determinada.",
        questions: [
          mc("A quem se atribui a descoberta do método do Champagne?", "Dom Pérignon, monge beneditino", ["Napoleão III", "Príncipe Conti", "Filipe II"], "Ele viveu na Abadia de Hautvilliers, perto de Épernay."),
          mc("Em que abadia viveu Dom Pérignon?", "Hautvilliers", ["Cîteaux", "Cluny", "Clairvaux"], "Ela fica perto de Épernay."),
          mc("Que fato levou Dom Pérignon às suas experiências?", "Alguns vinhos brancos ficavam levemente gaseificados um ano após o engarrafamento", ["O vinho azedava no verão", "As garrafas estouravam na colheita", "A cor do vinho mudava"], "Depois de cerca de 20 anos de estudos, ele achou a chave do processo."),
          mc("Que prática de vedação é atribuída a Dom Pérignon?", "Fechar as garrafas com rolha de cortiça", ["Lacrar com cera", "Usar tampa de rosca", "Usar rolha de madeira"], "É uma prática atribuída a Dom Pérignon, depois de cerca de 20 anos de estudos."),
          mc("Em que ano Dom Pérignon já cuidava da adega do mosteiro?", "1668", ["1066", "1789", "1927"], "Ele nasceu em 1638."),
          mc("O que só pode ser chamado de Champagne?", "O espumante feito na região, com uvas da região e técnica determinada", ["Qualquer espumante francês", "Qualquer espumante com bolhas finas", "Qualquer espumante de Chardonnay"], "A AOC impõe normas restritas."),
          mc("Qual destas exigências faz parte da AOC Champagne?", "Rendimento limitado de uvas por hectare", ["Uso obrigatório de barricas novas", "Colheita só com máquina", "Adição de álcool destilado"], "Entre as regras estão limites geográficos, castas, poda e envelhecimento em garrafa."),
          mc("Como se chama no Brasil o método champenoise?", "Método tradicional ou clássico", ["Método charmat", "Método ancestral", "Método de tanque"], "É a segunda fermentação dentro da garrafa.")
        ] },
      { id: "chp-4", title: "Da uva ao vinho base", level: "avancado",
        tip: "A colheita é manual, em caixas pequenas, e as uvas vão à prensa vertical. O mosto descansa 24 horas e fermenta cerca de uma semana. O vinho base é feito por assemblage, mistura de vinhos de várias uvas e safras.",
        questions: [
          mc("Como é a colheita das uvas de Champagne?", "Manual, com cachos em caixas pequenas", ["Mecânica, com tratores", "Com redes sobre as vinhas", "À noite, com água"], "As caixas pequenas evitam pressão excessiva e extração de mosto."),
          mc("Por que os cachos vão em caixas plásticas pequenas?", "Para evitar pressão excessiva e saída antecipada de mosto", ["Para esfriar as uvas", "Para seleção por cor", "Para contar os bagos"], "As uvas vão rápido à vinícola."),
          mc("Que tipo de prensa recebe as uvas em Champagne?", "Vertical, com capacidade de 4 mil kg", ["Hidráulica horizontal de 100 kg", "Pneumática de 50 kg", "Cônica de 10 kg"], "O mosto sai por ação lenta da prensa."),
          mc("Quanto tempo o mosto repousa para sedimentar partículas?", "24 horas", ["3 meses", "6 semanas", "Um ano"], "Depois ele passa pela fermentação."),
          mc("Quanto dura, em média, a primeira fermentação?", "Cerca de uma semana", ["Cerca de seis meses", "Um dia", "Cerca de um ano"], "São inoculadas leveduras selecionadas."),
          mc("A que temperatura o vinho é mantido depois da primeira fermentação, até ser usado?", "4 °C", ["20 °C", "35 °C", "60 °C"], "Fica a baixa temperatura."),
          mc("O que é o assemblage no Champagne?", "A mistura de vinhos de várias uvas e anos para chegar ao padrão da casa", ["Uma colheita de uma só vinha", "Uma lavagem das garrafas", "Um tipo de rolha"], "É menos comum o Champagne ser feito de uma só uva."),
          order("Ordene as etapas até o vinho base", ["Colheita manual", "Prensagem", "Repouso do mosto por 24 horas", "Primeira fermentação", "Assemblage"], "Depois do assemblage vem o licor de tirage e a segunda fermentação.")
        ] },
      { id: "chp-5", title: "Segunda fermentação, remuage e dégorgement", level: "expert",
        tip: "Ao vinho base juntam-se vinho, leveduras e açúcar (liqueur de tirage) e a garrafa é fechada. A segunda fermentação (prise de mousse) dura cerca de seis semanas. Depois vêm remuage, dégorgement e o licor de expedição.",
        questions: [
          mc("O que é o liqueur de tirage?", "Vinho, leveduras e açúcar adicionados ao vinho base", ["Licor que completa a garrafa no final", "O mosto da primeira prensagem", "A gaiola de arame"], "Ele dispara a segunda fermentação na garrafa."),
          mc("Como as garrafas ficam durante a segunda fermentação?", "Com tampa tipo crown, deitadas em caves", ["Em pé, abertas", "Presas pelo gargalo", "Dentro de tanques de aço"], "Isso ocorre em caves subterrâneas."),
          mc("Como se chama a segunda fermentação na garrafa e quanto dura em média?", "Prise de mousse, cerca de seis semanas", ["Remuage, cerca de um dia", "Dégorgement, cerca de um ano", "Assemblage, cerca de um mês"], "As leveduras produzem gás carbônico e um pouco mais de álcool."),
          mc("O que acontece com as leveduras ao fim da prise de mousse?", "Morrem depois de consumir todo o açúcar", ["Viram açúcar de novo", "Saem pelo gargalo sozinhas", "Continuam fermentando por anos"], "O vinho fica espumante e bem seco; a maturação sobre as leveduras mortas passa aromas."),
          mc("O que é o remuage?", "Giro periódico das garrafas para levar as borras ao gargalo", ["A mistura de vinhos", "A prensagem das uvas", "A rotulagem final"], "O remueur dá um giro de 90° a cada duas ou três semanas."),
          mc("O que é um pupitre?", "Armação de madeira com furos ovais para as garrafas inclinadas", ["Uma prensa vertical", "Um tipo de rolha", "Uma ânfora de barro"], "As garrafas ficam cada vez mais inclinadas."),
          mc("Como as borras são retiradas no dégorgement?", "Congela-se o gargalo (-20 °C por cerca de 3 min) e a pressão expulsa a rolha de gelo", ["Filtrando o vinho em tanques", "Aquecendo o gargalo", "Derramando o vinho em outra garrafa"], "O produto fica límpido."),
          order("Ordene as etapas depois do vinho base", ["Liqueur de tirage", "Prise de mousse", "Remuage", "Dégorgement", "Liqueur d'expédition", "Arrolhamento e gaiola"], "Ainda há cerca de 3 meses de repouso antes da rotulagem.")
        ] },
      { id: "chp-6", title: "Estilos: brut, millésimé e rosé", level: "expert",
        tip: "O licor de expedição completa a garrafa e define o estilo; cada casa guarda segredo da sua composição. A maior parte do Champagne é brut. O millésimé vem de uma só safra excepcional. O rosé tem dois processos.",
        questions: [
          mc("O que é o liqueur d'expédition?", "O licor que completa a garrafa após o dégorgement", ["Uma levedura especial", "O mosto da primeira prensagem", "O vinho base antes do corte"], "Ele define o estilo e nuances de aroma e gosto."),
          mc("Quanto licor é colocado na garrafa no dégorgement?", "A mesma quantidade de vinho perdida", ["O dobro", "Nenhum", "Metade"], "A composição do licor é segredo de cada casa."),
          mc("Para que serve a gaiola (agrafe) na rolha?", "Para evitar que a rolha estoure antes da hora", ["Para enfeitar", "Para identificar a safra", "Para filtrar o vinho"], "Depois a garrafa fica cerca de 3 meses em repouso."),
          mc("Como surgiu o primeiro brut, em meados do século XIX?", "A pedido de um cliente inglês, para acompanhar comida", ["Por erro na dosagem", "Por exigência da AOC", "Por uma safra muito fria"], "Antes disso só havia Champagne doce."),
          mc("O que é um Champagne millésimé?", "Um Champagne de uma só safra considerada excepcional, com o ano no rótulo", ["Um Champagne sem açúcar", "Um Champagne de várias safras", "Um Champagne só de Chardonnay"], "Os demais normalmente misturam anos diferentes."),
          mc("Quando o Champagne está pronto para ser bebido?", "Ao sair do produtor", ["Só após 20 anos", "Depois de um ano em casa", "Só em safras raras"], "O envelhecimento é feito na vinícola, sobre as leveduras."),
          mc("Como se faz o Champagne rosé pelo processo mais atual?", "Mistura-se vinho tinto da região a vinho branco de Chardonnay no assemblage", ["Mistura-se corante ao espumante final", "Fermenta-se só Pinot Noir com cascas por um ano", "Adiciona-se suco de framboesa"], "As demais etapas são idênticas às do branco."),
          mc("Como funciona o processo antigo do Champagne rosé?", "O mosto fermenta com cascas até atingir a cor desejada, depois as cascas saem", ["Mistura-se tinto e branco", "Pinta-se o vinho com corante natural", "Envelhece-se em barril de cerejeira"], "O processo antigo é menos eficiente, com mais garrafas perdidas.")
        ] },
      { id: "chp-7", title: "Quem faz o Champagne", level: "avancado",
        tip: "Toda garrafa de Champagne traz no rótulo uma sigla que indica o tipo de produtor: N.M. (négociant), R.M. (vinhedos próprios), C.M. (cooperativa) ou M.A. (marca auxiliar).",
        questions: [
          match("Ligue a sigla ao tipo de produtor", [["N.M.", "Compra uvas e produz; grandes marcas"], ["R.M.", "Vinifica uvas de vinhedos próprios"], ["C.M.", "Cooperativa que vinifica uvas dos cooperados"], ["M.A.", "Nome comercial de um comprador, como um supermercado"]], "A sigla aparece no rótulo."),
          mc("Que sigla indica quem vinifica uvas de vinhedos próprios?", "R.M.", ["N.M.", "C.M.", "M.A."], "R.M. significa Récoltant Manipulant."),
          mc("Que sigla identifica as grandes marcas, que compram parte ou toda a colheita?", "N.M.", ["R.M.", "C.M.", "M.A."], "N.M. significa Négociant Manipulant."),
          mc("O que significa a sigla C.M.?", "Coopérative de Manipulation", ["Champagne Millésimé", "Cuvée Maison", "Classique Méthode"], "A cooperativa vinifica as uvas de seus cooperados."),
          mc("O que é uma Marque Auxiliaire (M.A.)?", "Um nome comercial que rotula Champagne pronto comprado de outro produtor", ["Uma marca de barris", "Um tipo de rolha", "Uma vinícola sem vinhedos"], "O exemplo é o nome de um supermercado.")
        ] }
    ]
  };

  var mediterraneo = {
    id: "mediterraneo", title: "Mediterrâneo: Languedoc e Provence", country: "França",
    lessons: [
      { id: "med-1", title: "Língua d'Oc e as uvas do sul", level: "medio",
        tip: "O sul da França era a terra da Língua d'Oc, que deu nome ao Languedoc. O clima é marítimo, com cerca de 320 dias de sol. Carignan, Grenache, Mourvèdre e Cinsault estão na maior parte dos vinhos.",
        questions: [
          mc("Na Idade Média, o que a palavra \"oc\" significava no sul da França?", "\"Sim\"", ["\"Vinho\"", "\"Mar\"", "\"Sol\""], "No norte dizia-se \"oïl\"; o sul foi chamado terra da Língua d'Oc."),
          mc("Entre quais cidades fica o território do Languedoc?", "Perpignan e Montpellier", ["Reims e Épernay", "Dijon e Lyon", "Nantes e Orléans"], "Inclui também Narbonne e Carcassonne."),
          mc("Quantos dias de sol, aproximadamente, tem o Mediterrâneo francês por ano?", "Cerca de 320", ["Cerca de 120", "Cerca de 200", "Cerca de 90"], "A região também tem cerca de 40 km de praias."),
          mc("Qual destas uvas é típica do Mediterrâneo francês?", "Mourvèdre", ["Riesling", "Gamay", "Pinot Noir"], "Carignan, Grenache, Mourvèdre e Cinsault estão na maior parte dos vinhos do sul."),
          mc("Por que a Carignan raramente é vinificada sozinha na região?", "Tem muita acidez e taninos", ["Tem pouca cor", "É uma uva rara", "É uma uva branca"], "Ela é originária da Espanha, com cor intensa e aromas múltiplos."),
          mc("Que condições a Grenache pede?", "Sol e solo seco", ["Frio e muita chuva", "Altitude extrema", "Solo encharcado"], "A maturação longa dá açúcar alto e vinhos alcoólicos."),
          mc("Por que a Grenache não costuma ser vinificada sozinha?", "Tem taninos fracos, por causa da pele fina", ["Tem cor excessiva", "É uma uva branca", "Tem casca muito grossa"], "Ela precisa de Mourvèdre, Cinsault e Carignan."),
          mc("O que a Cinsault empresta ao corte com Mourvèdre e Grenache?", "Maciez e aromas", ["Taninos muito duros", "Cor mais escura", "Acidez extra"], "É uma uva muito produtiva, que tolera sol e calor.")
        ] },
      { id: "med-2", title: "Provence", level: "avancado",
        tip: "A Provence tem quatro AOCs principais: Bandol, Coteaux d'Aix-en-Provence, Côtes de Provence e Cassis. O destaque são os rosés leves, servidos gelados; brancos são poucos e tintos, raros. A Mourvèdre brilha em Bandol.",
        questions: [
          mc("Qual destas é uma AOC da Provence?", "Bandol", ["Corbières", "Faugères", "Minervois"], "As outras são do Languedoc-Roussillon."),
          mc("Qual é o tipo de vinho mais importante da Provence?", "Rosé leve, servido gelado", ["Tinto muito encorpado", "Espumante doce", "Branco de colheita tardia"], "Há poucos brancos e tintos raros."),
          mc("Quais são as quatro AOCs principais da Provence?", "Bandol, Coteaux d'Aix-en-Provence, Côtes de Provence e Cassis", ["Bandol, Corbières, Faugères e Cassis", "Pauillac, Margaux, Cassis e Bandol", "Chablis, Sancerre, Bandol e Cassis"], "São as quatro principais."),
          mc("Como é a Mourvèdre em Bandol?", "Dá vinho forte e intenso", ["Dá vinho leve e fresco", "Dá vinho doce", "Dá espumante"], "A uva tem cor intensa, taninos e acidez."),
          mc("Que condições a Mourvèdre pede?", "Sol e solo seco", ["Frio e umidade", "Altitude elevada", "Solo encharcado"], "É nativa do norte da Espanha."),
          mc("Qual destas é uma uva branca do Bandol?", "Clairette", ["Merlot", "Gamay", "Pinot Noir"], "Também entram Bourboulenc e Ugni Blanc."),
          mc("Quais são as uvas brancas de Cassis?", "Clairette e Marsanne", ["Riesling e Gewürztraminer", "Chenin Blanc e Muscadet", "Aligoté e Gamay"], "Em Cassis, brancos e rosés são raros."),
          mc("Que uvas tintas aparecem em Cassis?", "Mourvèdre e Grenache", ["Pinot Noir e Gamay", "Cabernet Franc e Merlot", "Syrah e Malbec"], "Elas combinam seus pontos fortes no corte.")
        ] },
      { id: "med-3", title: "Languedoc-Roussillon", level: "avancado",
        tip: "O Languedoc-Roussillon tem o maior vinhedo do mundo, com 310 mil hectares, e é de onde vem a maioria (85%) dos Vin de Pays franceses. Os tintos se destacam, em solos de xisto e argila.",
        questions: [
          mc("O que o Languedoc-Roussillon tem de especial em extensão?", "O maior vinhedo do mundo, com 310 mil hectares", ["O menor vinhedo da França", "Cerca de 3 mil hectares, só de tintas", "Um único vinhedo de 310 hectares"], "É também a região de maior volume de produção."),
          mc("Que fração dos Vin de Pays franceses vem do Languedoc-Roussillon?", "85%", ["5%", "15%", "35%"], "A região também tem grandes AOCs e crus."),
          mc("Que tipo de vinho se destaca no Languedoc-Roussillon?", "Tinto", ["Branco seco", "Rosé leve", "Vinho de gelo"], "Há vários estilos, mas os tintos são o destaque."),
          mc("Que solos predominam no Languedoc-Roussillon?", "Xisto e argila", ["Granito e basalto", "Só areia", "Só giz"], "A região tem também grandes AOCs e crus."),
          mc("Qual destas é uma das principais AOPs do Languedoc-Roussillon?", "Faugères", ["Pauillac", "Sancerre", "Condrieu"], "Também estão Corbières, Minervois e Banyuls."),
          mc("Que vinhos faz a AOC Faugères?", "Só tintos, de Carignan e Syrah", ["Só brancos de Chardonnay", "Só rosés de Gamay", "Espumantes de Mauzac"], "Faugères faz só tintos."),
          mc("Quais são os limites de Cinsault e Carignan na AOC Corbières?", "Cinsault até 20% e Carignan até 50%", ["Cinsault até 50% e Carignan até 20%", "Os dois sem limite algum", "Os dois limitados a 5%"], "Os limites constam nas regras da AOC."),
          mc("O que é um Vin de Pays?", "Um vinho simples, de indicação regional", ["Um vinho fortificado de safra única", "Um espumante de Champagne", "Um Grand Cru de Borgonha"], "O Languedoc responde pela maior parte deles.")
        ] },
      { id: "med-4", title: "Espumantes e doces do Sul", level: "expert",
        tip: "Limoux faz espumantes: o Crémant de Limoux (Chardonnay e Chenin Blanc) e o Blanquette de Limoux (principalmente Mauzac). No Roussillon, Banyuls e Maury são vinhos doces naturais, envelhecidos em tonéis ao ar livre.",
        questions: [
          mc("Que uvas formam o Crémant de Limoux?", "Chardonnay e Chenin Blanc", ["Pinot Noir e Gamay", "Sauvignon Blanc e Sémillon", "Syrah e Grenache"], "Ele fica um ano sobre as borras."),
          mc("Quanto tempo o Blanquette de Limoux fica sobre as borras?", "Nove meses", ["Cinco anos", "Um dia", "Dois anos"], "O Crémant de Limoux fica um ano."),
          mc("Que uva domina o Blanquette de Limoux, com no mínimo 90%?", "Mauzac", ["Chardonnay", "Chenin Blanc", "Syrah"], "Chardonnay e Chenin Blanc completam o corte."),
          mc("O que há de pioneiro na AOC Limoux blanquette no Languedoc?", "É a primeira AOC criada no vinhedo do Languedoc", ["É a mais recente do Languedoc", "É a única AOC de tintos", "É a maior AOC em área"], "Faz parte do vinhedo de Limoux, junto ao crémant."),
          mc("O que são Banyuls e Maury?", "Vinhos doces naturais (fortificados) do Roussillon", ["Espumantes de Limoux", "Brancos secos de Cassis", "Tintos leves de Provence"], "Os dois são chamados de Vin Doux Naturel."),
          mc("Como envelhecem Banyuls e Maury?", "Em tonéis de carvalho de 600 litros, ao ar livre", ["Em tanques de cimento fechados", "Em ânforas enterradas", "Em barris de aço de 100 litros"], "O Banyuls tem cerca de 20% de álcool."),
          mc("O que indica a classificação Grand Cru do Banyuls?", "75% de Grenache Noir e 30 meses em tonéis de carvalho", ["100% Syrah e 3 meses em aço", "50% Merlot e 1 ano em garrafa", "Só uvas brancas e 5 anos em barril"], "O vinho pode ainda envelhecer cerca de 30 anos na garrafa."),
          mc("Que aromas aparecem no Banyuls?", "Frutas cristalizadas, tabaco, baunilha, torrefação e especiarias", ["Maçã verde e limão", "Rosas e lichia", "Pimentão e grama cortada"], "O Banyuls envelhece em tonéis de carvalho.")
        ] }
    ]
  };

  CourseKit.add([borgonha, rhoneLoire, champagne, mediterraneo]);
})();
