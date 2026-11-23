/**
 * Curso: Itália, Espanha, Portugal, Alemanha e Áustria (módulo Países e Regiões Produtoras de Vinho, págs. 55-82).
 * Só fatos reescritos com palavras próprias; itens duvidosos da apostila ficaram de fora.
 */
(function () {
  var mc = CourseKit.mc, match = CourseKit.match, order = CourseKit.order;

  CourseKit.add([
    /* ===================== ITÁLIA ===================== */
    {
      id: 'ita-un', title: 'Itália', country: 'Itália',
      lessons: [
        { id: 'ita-1', title: 'História e as 20 regiões', level: 'medio',
          tip: 'O vinho chegou à Itália pelos gregos e foi espalhado de vez pelos romanos. A produção se divide em 20 regiões, cada uma com vinhos locais e uvas típicas.',
          questions: [
            mc('Quem difundiu de forma decisiva a viticultura na Itália e no resto da Europa?', 'O Império Romano', ['Os vikings', 'Os celtas', 'Os otomanos'], 'O Império Romano, que sucedeu os gregos, difundiu decisivamente a viticultura na Itália e na Europa.'),
            mc('Quem levou o vinho e a videira à Itália, por volta de 800 a 1000 a.C.?', 'Os gregos, pela costa do Mediterrâneo', ['Os egípcios, pelo rio Nilo', 'Os franceses, pelos Alpes', 'Os espanhóis, pelo Atlântico'], 'Os gregos espalharam seus conhecimentos pela costa do Mediterrâneo e assim a videira alcançou a Itália.'),
            mc('Em quantas regiões se divide a produção de vinho da Itália?', '20', ['12', '15', '25'], 'Cada uma das 20 regiões tem seus vinhos locais e suas uvas típicas.'),
            mc('Qual destas é uma das regiões italianas?', 'Umbria', ['Provença', 'Rioja', 'Alsácia'], 'Umbria está entre as 20 regiões vinícolas italianas.'),
            mc('Quais são as duas regiões insulares da Itália?', 'Sicília e Sardenha', ['Sicília e Córsega', 'Sardenha e Malta', 'Puglia e Sicília'], 'As ilhas têm duas regiões vinícolas: Sicília e Sardenha.'),
            match('Ligue o vinho à sua região', [['Chianti', 'Toscana'], ['Barolo', 'Piemonte'], ['Marsala', 'Sicília'], ['Montepulciano d\'Abruzzo', 'Abruzzo']], 'Cada região italiana tem seus vinhos emblemáticos.'),
            mc('Qual destes vinhos pertence à região de Emilia-Romagna?', 'Lambrusco', ['Barolo', 'Marsala', 'Amarone'], 'Emilia-Romagna é a região do Lambrusco.'),
            mc('Qual destas castas brancas é típica da região de Marche?', 'Verdicchio (dei Castelli di Jesi)', ['Grillo', 'Arneis', 'Fiano'], 'Em Marche destacam-se os brancos Passerina e Verdicchio dei Castelli di Jesi.')
          ] },
        { id: 'ita-2', title: 'DOCG, DOC e IGT', level: 'medio',
          tip: 'A legislação italiana tem quatro categorias: DOCG, DOC, IGT e Vino da Tavola. DOC e DOCG ligam o vinho ao território e às uvas típicas; a DOCG exige ainda uma análise sensorial no engarrafamento.',
          questions: [
            mc('O que significa a sigla DOCG?', 'Denominazione di Origine Controllata e Garantita', ['Denominazione di Origine Classica e Geografica', 'Denominazione Qualitativa Garantita', 'Distretto di Origine Controllata e Garantita'], 'A DOCG acrescenta a garantia à denominação de origem controlada.'),
            mc('O que significa a sigla IGT?', 'Indicazione Geografica Tipica', ['Indicazione Garantita Tradizionale', 'Identità Geografica Tipica', 'Imbottigliato Garantito Tipico'], 'IGT é a indicação geográfica típica, de características menos tradicionais.'),
            order('Ordene as categorias italianas, da mais alta à mais simples', ['DOCG', 'DOC', 'IGT', 'Vino da Tavola'], 'A DOCG é a classificação mais alta da Itália; as quatro categorias da legislação seguem essa sequência.'),
            mc('As denominações DOC e DOCG definem principalmente o quê?', 'O tipo de vinho, ligado ao território e às uvas típicas', ['O preço mínimo da garrafa', 'A cor do rótulo', 'O nome do enólogo responsável'], 'São denominações geográficas: definem o tipo de vinho, não a qualidade específica de cada garrafa.'),
            mc('Qual destes aspectos uma DOC controla?', 'Rendimento das videiras', ['Preço de venda ao consumidor', 'Número de rótulos por safra', 'Cor da garrafa'], 'A DOC regula áreas de produção, uvas permitidas, solo, rendimento, métodos e tempo de envelhecimento.'),
            mc('O que os vinhos DOC enfrentam antes de chegar ao mercado?', 'Análise químico-física e exame organoléptico', ['Apenas uma inspeção do rótulo', 'Um leilão de preços', 'Nada: a liberação é automática'], 'O exame organoléptico avalia cor, aroma, sabor, textura e brilho.'),
            mc('O que a DOCG exige além das exigências da DOC?', 'Análise sensorial durante o engarrafamento', ['Uso de uma única uva', 'Fermentação em barris de aço', 'Envelhecimento mínimo de dez anos'], 'Só depois dessa análise o vinho é liberado para a venda.'),
          ] },
        { id: 'ita-3', title: 'Termos nos rótulos italianos', level: 'avancado',
          tip: 'Termos como Novello, Superiore, Riserva, Spumante e Passito descrevem uma característica do vinho (idade, doçura, bolhas ou método), não a qualidade em si.',
          questions: [
            mc('O Novello é um vinho de que tipo?', 'Jovem, parecido com o Beaujolais Nouveau', ['Envelhecido por vários anos', 'Fortificado', 'Doce, de uvas passas'], 'É vendido logo após a colheita, com parte vinificada por maceração carbônica.'),
            mc('A partir de quando o Novello pode ser vendido?', '6 de novembro do ano da colheita', ['1º de janeiro do ano seguinte', '1º de julho do ano da colheita', '25 de dezembro do ano seguinte'], 'O Novello também precisa ser engarrafado até 31 de dezembro do ano da colheita.'),
            mc('Qual parcela do Novello deve ser vinificada por maceração carbônica?', '30%', ['5%', '10%', '100%'], 'O Novello é semelhante ao Beaujolais Nouveau.'),
            mc('Qual é o teor máximo de açúcar residual de um Novello?', '10 g/l', ['2 g/l', '50 g/l', '100 g/l'], 'Esse é o limite máximo de açúcar residual do Novello.'),
            mc('O que indica a menção Superiore?', 'Envelhecimento de no mínimo um ano antes da venda', ['Envelhecimento de dez anos', 'Vinho espumante', 'Vinho de uvas desidratadas'], 'Já o Vecchio envelhece ao menos três anos antes de ser comercializado.'),
            mc('Qual é o tempo mínimo de envelhecimento de um Vecchio antes da venda?', 'Três anos', ['Seis meses', 'Um ano', 'Dez anos'], 'O Vecchio envelhece ao menos três anos antes de ser comercializado.'),
            match('Ligue o termo ao seu significado', [['Secco', 'Praticamente sem açúcar'], ['Abboccato', 'Meio seco'], ['Dolce', 'Francamente doce'], ['Passito', 'De uvas semidesidratadas']], 'Secco, abboccato, amabile e dolce descrevem o teor de açúcar.'),
            mc('O que caracteriza o Ripasso?', 'Vinho repousado sobre as borras do Amarone', ['Vinho feito só de uvas brancas', 'Vinho fortificado com aguardente', 'Vinho de safra tardia'], 'O Ripasso, um Valpolicella, ganha corpo, sabor e álcool ao repousar sobre essas borras.'),
          ] },
        { id: 'ita-4', title: 'Piemonte e a Nebbiolo', level: 'medio',
          tip: 'O Piemonte fica no noroeste, aos pés dos Alpes, com Turim como capital. A uva emblemática é a Nebbiolo, que dá o Barolo e o Barbaresco: casca grossa, muita acidez, taninos marcantes e amadurecimento tardio.',
          questions: [
            mc('Qual é a capital do Piemonte?', 'Turim', ['Florença', 'Milão', 'Veneza'], 'Turim é a capital da maior e mais conhecida região vinícola do noroeste da Itália.'),
            mc('Quais rios cortam o Piemonte?', 'Pó e Tanaro', ['Arno e Tibre', 'Reno e Mosel', 'Ebro e Douro'], 'O território é acidentado, com colinas e montanhas e pouca terra plana.'),
            mc('Qual destes é o clima do Piemonte?', 'Continental, com invernos muito frios e verões bem quentes', ['Mediterrâneo, sem inverno marcado', 'Tropical, úmido o ano todo', 'Desértico'], 'O Piemonte fica aos pés dos Alpes e tem clima continental.'),
            mc('Qual uva é a origem do Barolo e do Barbaresco?', 'Nebbiolo', ['Sangiovese', 'Dolcetto', 'Primitivo'], 'A Nebbiolo é a uva emblemática do Piemonte.'),
            mc('Qual característica da Nebbiolo ajuda a explicar o preço alto dos seus vinhos?', 'Rendimento baixo e cultivo difícil', ['Produz muito e amadurece cedo', 'Cresce bem em qualquer região', 'Tem casca muito fina'], 'É uma uva delicada, de amadurecimento tardio e que raramente se adapta fora do Piemonte.'),
            mc('Como é a casca da Nebbiolo e qual o efeito no vinho?', 'Grossa, dando vinhos marcadamente tânicos', ['Fina, dando vinhos leves e sem taninos', 'Grossa, dando vinhos doces', 'Fina, dando vinhos espumantes'], 'Casca grossa, muita acidez e maturação tardia caracterizam a uva.'),
            mc('Qual destas uvas tintas também é cultivada no Piemonte?', 'Dolcetto', ['Aglianico', 'Gaglioppo', 'Negroamaro'], 'Dolcetto e Barbera dão vinhos excelentes para o dia a dia.'),
          ] },
        { id: 'ita-5', title: 'Toscana e o Chianti', level: 'avancado',
          tip: 'A Toscana, com Florença como capital, foi berço do Renascimento e terra dos etruscos. A Sangiovese manda nos tintos; o Chianti exige no mínimo 80% de Sangiovese e o Chianti Classico traz o galo negro no rótulo.',
          questions: [
            mc('Qual é a capital da Toscana?', 'Florença', ['Turim', 'Roma', 'Nápoles'], 'A Toscana fica no centro-norte da Itália e foi epicentro do Renascimento.'),
            mc('Qual povo antigo habitou a Toscana e já produzia vinho?', 'Os etruscos', ['Os vikings', 'Os visigodos', 'Os mouros'], 'Os etruscos também dominaram a extração de minério de ferro; a maioria das cidades importantes foi construída por eles.'),
            mc('Qual é a principal uva tinta da Toscana?', 'Sangiovese', ['Nebbiolo', 'Aglianico', 'Primitivo'], 'A Sangiovese é a principal tinta toscana.'),
            mc('Qual é o mínimo de Sangiovese exigido no Chianti?', '80%', ['50%', '65%', '100%'], 'O restante pode incluir pequena parte de outras uvas dentro de limites.'),
            mc('Qual é o máximo de Cabernet Sauvignon e Cabernet Franc permitido no Chianti?', '15%', ['2%', '40%', '50%'], 'Já as uvas brancas ficam em no máximo 10%.'),
            mc('Qual símbolo aparece nos rótulos do Chianti Classico?', 'O galo negro (gallo nero)', ['Uma águia dourada', 'Um leão alado', 'Uma loba'], 'O galo negro é o símbolo do consórcio do Clássico.'),
            mc('Em que ano o Chianti se tornou DOCG?', '1984', ['1716', '1950', '2003'], 'A lei de 1716 já regulava produção, venda e nome Chianti e delimitava as áreas produtoras.'),
            order('Ordene em ordem cronológica', ['Etruscos na Toscana (1200-700 a.C.)', 'Lei que delimita o Chianti (1716)', 'Chianti vira DOCG (1984)'], 'Os etruscos vieram muito antes; a lei do Chianti é de 1716; a DOCG, de 1984.'),
          ] },
        { id: 'ita-6', title: 'Norte da Itália', level: 'avancado',
          tip: 'O Norte faz fronteira com Suíça, França, Eslovênia e Áustria. O clima mais ameno e fresco dá uvas de acidez alta e aromas de frutas frescas e ervas. Cada região tem suas uvas típicas.',
          questions: [
            mc('Qual destes países faz fronteira com o norte da Itália?', 'Eslovênia', ['Espanha', 'Alemanha', 'Portugal'], 'Também Suíça, França e Áustria, ao longo dos Alpes.'),
            mc('Como o clima mais fresco do Norte influencia as uvas?', 'Mais acidez e aromas de frutas frescas e ervas', ['Menos acidez e aromas de passas', 'Casca muito fina e vinhos fortificados', 'Nenhuma influência'], 'O clima ameno e fresco preserva a acidez e o sabor acentuado.'),
            mc('Entre quais cadeias de montanhas fica o vale do rio Pó?', 'Alpes e Apeninos', ['Pireneus e Alpes', 'Andes e Alpes', 'Cárpatos e Apeninos'], 'O Pó atravessa o norte da Itália.'),
            match('Ligue a região do Norte à sua uva típica', [['Friuli-Venezia Giulia', 'Ribolla'], ['Trentino-Alto Adige', 'Pinot Bianco'], ['Vêneto', 'Glera'], ['Ligúria', 'Vermentino']], 'Cada região do Norte tem suas castas características.'),
            mc('Qual destas uvas brancas é típica do Vêneto?', 'Glera', ['Ribolla', 'Pigato', 'Arneis'], 'No Vêneto destacam-se a Glera e o Amarone.'),
            mc('Qual destas é uma uva típica do Vale d\'Aosta?', 'Petite Arvine', ['Primitivo', 'Falanghina', 'Cannonau'], 'O Vale d\'Aosta também cultiva Pinot Noir.'),
            mc('Qual vinho é uma especialidade do Vêneto?', 'Amarone', ['Marsala', 'Brunello di Montalcino', 'Lambrusco'], 'O Amarone vem do Vêneto; suas borras são usadas para o Ripasso.')
          ] },
        { id: 'ita-7', title: 'Sul e ilhas', level: 'avancado',
          tip: 'O Sul tem terroir marítimo: sol intenso, umidade do mar e noites mais frescas. Antes abastecia o mercado com vinhos de valor mais baixo, mas hoje investe em qualidade. As ilhas (Sicília e Sardenha) têm vinhos próprios.',
          questions: [
            mc('Qual é a marca do terroir do Sul da Itália?', 'Marítimo, no centro do Mediterrâneo', ['Alpino, de altitude extrema', 'Continental, de invernos rigorosos', 'Desértico, sem influência do mar'], 'Sol intenso, umidade do mar e noites mais frescas.'),
            mc('O que mudou no Sul da Itália nos últimos tempos?', 'Produtores passaram a apostar em vinhos de qualidade com identidade regional', ['O Sul parou de produzir vinho', 'Só passou a fazer espumantes', 'Adotou apenas uvas francesas'], 'Houve investimento em tecnologia, cuidado com os vinhedos e profissionalização.'),
            match('Ligue o vinho ou a uva à região', [['Primitivo di Manduria', 'Puglia'], ['Gaglioppo', 'Calábria'], ['Fiano', 'Campania'], ['Marsala', 'Sicília']], 'São exemplos típicos do Sul e da Sicília.'),
            mc('Qual destas uvas é típica da Puglia?', 'Negroamaro', ['Nebbiolo', 'Sangiovese', 'Dolcetto'], 'Negroamaro e Primitivo di Manduria são destaques da região.'),
            mc('Qual destas uvas aparece na Basilicata?', 'Aglianico', ['Albariño', 'Arneis', 'Glera'], 'Basilicata também tem Syrah e Moscato.'),
            mc('Qual destas é uma uva branca da Sicília?', 'Grillo', ['Fiano', 'Arneis', 'Cortese'], 'Sicília: Marsala, Grillo, Inzolia e Catarrato.'),
            mc('Qual é o vinho mais típico da Sardenha?', 'Vernaccia di Oristano', ['Marsala', 'Lambrusco', 'Amarone'], 'A Sardenha também tem Moscato e Malvasia.'),
            mc('Qual é o único vinho DOCG da Sardenha?', 'Vermentino di Gallura', ['Cannonau di Sardegna', 'Vernaccia di Oristano', 'Primitivo di Manduria'], 'Vermentino di Gallura é a única DOCG da ilha.'),
          ] }
      ]
    },

    /* ===================== ESPANHA ===================== */
    {
      id: 'spa-un', title: 'Espanha', country: 'Espanha',
      lessons: [
        { id: 'spa-1', title: 'Uvas e rios da Espanha', level: 'medio',
          tip: 'A Espanha mistura uvas nativas e estrangeiras (sobretudo francesas). A fama vem das tintas, como Tempranillo e Garnacha; entre as brancas destacam-se Verdejo, Albariño, Xarel-lo e Viura.',
          questions: [
            mc('Qual destas é uma uva branca muito plantada na Espanha?', 'Albariño', ['Tempranillo', 'Monastrell', 'Mencía'], 'Brancas mais plantadas: Verdejo, Albariño, Xarel-lo e Viura.'),
            mc('A fama dos vinhos espanhóis vem principalmente de qual tipo de uva?', 'Tintas', ['Brancas aromáticas', 'Uvas de mesa', 'Híbridas'], 'Tempranillo, Garnacha, Monastrell, Cariñena, Graciano, Mencía e Mazuelo estão entre as principais.'),
            mc('Qual destas é uma uva tinta espanhola?', 'Monastrell', ['Verdejo', 'Viura', 'Xarel-lo'], 'Verdejo, Viura e Xarel-lo são brancas.'),
            mc('Qual destas é uma uva branca espanhola?', 'Viura', ['Graciano', 'Mazuelo', 'Tempranillo'], 'Graciano, Mazuelo e Tempranillo são tintas.'),
            mc('Quais castas internacionais também aparecem nos rótulos espanhóis?', 'Cabernet Sauvignon, Merlot, Sauvignon Blanc e Chardonnay', ['Nebbiolo e Barbera', 'Riesling e Silvaner', 'Pinotage e Carmenère'], 'Além das nativas, há castas estrangeiras, principalmente francesas.'),
            mc('Como se chama, em Portugal, o rio espanhol Duero?', 'Douro', ['Tejo', 'Minho', 'Mondego'], 'O Duero cruza Castilla y León e depois, em Portugal, vira o Douro.'),
            mc('Qual rio banha a região de Rioja?', 'Ebro', ['Duero', 'Guadalquivir', 'Tejo'], 'Rioja fica no nordeste da Espanha, às margens do Ebro.')
          ] },
        { id: 'spa-2', title: 'Denominações de origem', level: 'medio',
          tip: 'Em 2003 entrou em vigor a Ley de la Viña y del Vino, que criou novas categorias e DOs. As DOs são fiscalizadas por Conselhos Reguladores. A DOCa (Denominación de Origen Calificada) foi criada em 1991 e só Rioja e Priorato a têm.',
          questions: [
            mc('Em que ano entrou em vigor a Ley de la Viña y del Vino?', '2003', ['1970', '1991', '2015'], 'Ela substituiu o estatuto de 1970 e impulsionou modernização e exportações.'),
            mc('O que a Ley de la Viña y del Vino fez?', 'Criou novas categorias e novas DOs', ['Proibiu a exportação', 'Extinguiu os Conselhos Reguladores', 'Restringiu o vinho a uma só uva'], 'Também impulsionou a modernização do setor.'),
            mc('Qual órgão regulamenta e fiscaliza cada DO espanhola?', 'O Conselho Regulador', ['O Museu do Vinho', 'A Real Academia', 'A Câmara de Comércio'], 'Cuida da delimitação, variedades, plantio, análises e certificação.'),
            mc('Qual destes é um papel do Conselho Regulador?', 'Selecionar e autorizar variedades de uva', ['Fixar o preço do varejo', 'Escolher o enólogo de cada vinícola', 'Organizar festas'], 'Também faz a delimitação, a análise dos vinhos e a certificação.'),
            mc('O que significa a sigla DOCa, usada na Espanha?', 'Denominación de Origen Calificada', ['Denominación de Origen Controlada Antigua', 'Denominación Oficial de Calidad Agraria', 'Denominación de Origen Colectiva'], 'A DOCa, também chamada DOQ, é a Denominación de Origen Calificada.'),
            mc('Quais regiões espanholas têm DOCa?', 'Rioja e Priorato', ['Rioja e Ribera del Duero', 'Jerez e Cava', 'Rías Baixas e Penedès'], 'Só essas duas regiões têm o status.'),
            mc('Qual foi a primeira região espanhola a ter DOCa?', 'Rioja', ['Priorato', 'Penedès', 'Galícia'], 'A DOCa foi criada em abril de 1991.'),
            mc('O que uma DO exige sobre a origem das uvas?', 'Vinho elaborado na região com uvas dali', ['Uvas de qualquer país', 'Só uvas francesas', 'Uvas sem origem definida'], 'Também exige prestígio comercial pela origem e qualidade ligada ao meio geográfico.')
          ] },
        { id: 'spa-3', title: 'Rioja: história e perfil', level: 'medio',
          tip: 'Rioja, no nordeste, às margens do Ebro, é a primeira DO e primeira DOCa da Espanha. Ganhou impulso quando a filoxera destruiu vinhedos franceses e produtores de Bordeaux foram para lá, daí o apelido de Bordeaux da Espanha.',
          questions: [
            mc('Em quantas províncias se estende a região de Rioja?', 'Três: La Rioja, Álava e Navarra', ['Duas: La Rioja e Madri', 'Cinco', 'Apenas uma'], 'São 63.593 hectares em três províncias.'),
            mc('Quantos hectares de vinhedos tem Rioja?', '63.593', ['6.359', '230.000', '1 milhão'], 'Fica no nordeste da Espanha, às margens do Ebro.'),
            mc('Quem iniciou a produção de vinho em Rioja?', 'Os romanos', ['Os vikings', 'Os persas', 'Os normandos'], 'A produção começou com os romanos na Península Ibérica.'),
            mc('Por que Rioja é chamada de Bordeaux da Espanha?', 'Produtores de Bordeaux chegaram após a filoxera devastar os vinhedos franceses', ['Porque usa os mesmos solos', 'Porque a Rioja fica na França', 'Porque só faz brancos doces'], 'No fim do século XIX, produtores bordaleses buscaram terras na Rioja.'),
            mc('Em que ano foi criado o primeiro Conselho Regulador de Rioja?', '1926', ['1860', '1970', '2003'], 'Rioja foi também a primeira região espanhola a obter Denominação de Origem.'),
            mc('Que regra de 1560 existia em Rioja?', 'Proibição de carroças perto das bodegas, para evitar vibração', ['Obrigação de colher à noite', 'Limite de uma safra por ano', 'Preço único do vinho'], 'A regra tinha o objetivo de evitar a vibração.'),
            mc('Qual destas é uma uva branca de Rioja?', 'Viura', ['Tempranillo', 'Graciano', 'Mazuelo'], 'Entre as brancas: Viura, Malvasía, Garnacha Branca, Verdejo, entre outras.'),
            mc('Em que a classificação dos vinhos de Rioja se diferencia?', 'Classifica os vinhos pelo envelhecimento', ['Pela altitude do vinhedo', 'Pela cor do rótulo', 'Pelo preço'], 'Jovens, Crianza, Reserva e Gran Reserva refletem o tempo de envelhecimento.')
          ] },
        { id: 'spa-4', title: 'Sub-regiões e cultivo em Rioja', level: 'avancado',
          tip: 'Rioja tem três sub-regiões: Rioja Alta, Rioja Alavesa e Rioja Baja. Alavesa fica a cerca de 600 m de altitude, com solo calcário; Baja é mais quente, com Garnacha Tinta. A Sierra de Cantabria protege os vinhedos dos ventos do mar.',
          questions: [
            mc('Quais são as três sub-regiões de Rioja?', 'Rioja Alta, Rioja Alavesa e Rioja Baja', ['Rioja Norte, Sul e Oeste', 'Rioja Alta, Média e Marítima', 'Rioja Superior, Central e Baja'], 'O Ebro as separa; cada uma tem solos próprios.'),
            mc('Qual é a principal uva da Rioja Baja?', 'Garnacha Tinta', ['Tempranillo', 'Graciano', 'Verdejo'], 'Em Alta e Alavesa a principal é a Tempranillo.'),
            mc('Qual sub-região de Rioja tem clima mais quente e uvas que amadurecem cedo?', 'Rioja Baja', ['Rioja Alavesa', 'Rioja Alta', 'Todas iguais'], 'Baja fica a cerca de 300 m de altitude e tem solos bem variados.'),
            mc('Qual é a altitude média da Rioja Alavesa?', 'Cerca de 600 m', ['Cerca de 50 m', 'Cerca de 300 m', 'Mais de 2000 m'], 'É uma região alta, com influência atlântica.'),
            mc('Qual é o solo predominante em Rioja Alavesa?', 'Calcário', ['Ardósia vermelha', 'Areia vulcânica', 'Xisto'], 'A Alavesa também tem Tempranillo como principal uva.'),
            mc('O que faz a Sierra de Cantabria por Rioja?', 'Bloqueia os ventos fortes do mar', ['Fornece água para a irrigação', 'Aumenta o calor', 'Produz nevoeiro'], 'Essa proteção permite o cultivo das vinhas.'),
            mc('Que sistema de condução as vinícolas modernas de Rioja adotam?', 'Espaldeira (cercas)', ['Estacas isoladas', 'Árvores como suporte', 'Telhado de pérgola'], 'A espaldeira mantém os cachos longe de folhas, galhos e solo e protege melhor das doenças.'),
            mc('Como as vinícolas tradicionais conduzem a videira?', 'Com estacas, retiradas ao fim de cerca de uma década', ['Sempre em espaldeira', 'Em pérgolas altas', 'Sem apoio algum'], 'O sistema moderno de cercas vem ganhando adeptos.')
          ] },
        { id: 'spa-5', title: 'Ribera del Duero', level: 'avancado',
          tip: 'Ribera del Duero fica em Castilla y León, no planalto cortado pelo Duero. Os vinhedos ficam em altitude, com noites frias e solos calcários e arenosos. A Tinto Fino, clone local de Tempranillo, tem casca mais grossa e dá tintos de taninos mais adstringentes que os de Rioja. Vega Sicilia é o produtor mais ilustre.',
          questions: [
            mc('Em qual macrorregião fica Ribera del Duero?', 'Castilla y León', ['Catalunha', 'Galícia', 'Andaluzia'], 'Fica no centro-norte, cortado pelo rio Duero.'),
            mc('Quais vinhos a DO Ribera del Duero cobre?', 'Tintos e rosados', ['Brancos e espumantes', 'Só brancos', 'Só fortificados'], 'A DO não vale para brancos.'),
            mc('Como se chama o clone local de Tempranillo em Ribera del Duero?', 'Tinto Fino', ['Graciano', 'Mazuelo', 'Mencía'], 'Tem cascas mais grossas, dando tintos de taninos mais adstringentes que os de Rioja.'),
            mc('Qual é a altitude de alguns vinhedos de Ribera del Duero?', 'Cerca de 850 m', ['Cerca de 50 m', 'Cerca de 200 m', 'Nível do mar'], 'Na parte mais alta do planalto, com noites frias mesmo no verão.'),
            mc('Qual é a amplitude térmica que pode ser atingida em Ribera del Duero?', 'Até cerca de 20 °C', ['Cerca de 2 °C', 'Cerca de 5 °C', 'Mais de 40 °C'], 'Os vinhedos têm noites frias mesmo no verão.'),
            mc('Qual uva é usada sobretudo nos rosés de Ribera del Duero?', 'Garnacha', ['Tempranillo', 'Albariño', 'Verdejo'], 'A Tempranillo domina os blends e os melhores tintos.'),
            mc('Qual produtor era a referência de Ribera del Duero até o início dos anos 1980?', 'Vega Sicilia', ['Pingus', 'Protos', 'Pesquera'], 'Depois vieram investimentos e enólogos jovens.'),
            mc('Por que Cabernet Sauvignon, Malbec e Merlot são permitidas na DO?', 'Por influência de Vega Sicilia, que tinha vinhedos antigos dessas castas', ['Porque são as uvas nativas da região', 'Por exigência da União Europeia', 'Porque a Tempranillo não amadurece lá'], 'A permissão veio da tradição de Vega Sicilia.')
          ] },
        { id: 'spa-6', title: 'Penedès e o Cava', level: 'avancado',
          tip: 'Penedès faz parte da Catalunha, com clima mediterrâneo. É famosa pelo Cava, espumante, e tem mais de 75% da área plantada com brancas. É também onde mais se cultivam Chardonnay e Cabernet Sauvignon na Espanha.',
          questions: [
            mc('Penedès faz parte de qual comunidade autônoma?', 'Catalunha', ['Galícia', 'Castilla y León', 'País Basco'], 'É uma das regiões vinícolas mais antigas da Espanha e da Europa.'),
            mc('Qual é o clima de Penedès?', 'Mediterrâneo, com verões quentes e invernos não muito rigorosos', ['Atlântico e muito úmido', 'Continental frio', 'Polar'], 'Chuva moderada e estações bem demarcadas.'),
            mc('Pelo que Penedès é conhecida?', 'Pelo Cava, espumante', ['Pelo Sherry', 'Pelo Rioja', 'Pelo Porto'], 'Cavas de bons produtores podem ter nível de bons Champagnes.'),
            mc('Aproximadamente quando passou a ser produzido o Cava?', 'Por volta de 1870', ['Por volta de 1200', 'Por volta de 1560', 'Por volta de 1990'], 'É o espumante de maior sucesso da região.'),
            mc('Qual é a proporção da área de Penedès plantada com uvas brancas?', 'Mais de 75%', ['Cerca de 10%', 'Cerca de 25%', 'Cerca de 50%'], 'Apesar de cultivar também tintas como Tempranillo, Merlot e Cabernet.'),
            mc('Qual destas é uma uva branca de destaque em Penedès?', 'Xarel-lo', ['Tempranillo', 'Mencía', 'Graciano'], 'Também Macabeo, Chardonnay, Parellada e Moscatel d\'Alexandria.'),
            mc('Penedès é a área da Espanha com maior cultivo de quais uvas?', 'Chardonnay e Cabernet Sauvignon', ['Tempranillo e Garnacha', 'Albariño e Verdejo', 'Mencía e Graciano'], 'Mostra o destaque das castas estrangeiras na região.'),
            mc('Quais tipos de vinho Penedès produz?', 'Brancos, tintos, rosés e Cavas', ['Só tintos', 'Só fortificados', 'Só doces'], 'O Cava é o seu produto de maior sucesso.')
          ] },
        { id: 'spa-7', title: 'Galícia e Priorato', level: 'expert',
          tip: 'A Galícia, úmida e isolada junto ao Atlântico, tem cinco DOs; em Rías Baixas faz-se sobretudo Albariño. O Priorato produz tintos potentes e concentrados, em vinhedos de 500 a 700 m de altitude.',
          questions: [
            mc('Quantas DOs tem a Galícia?', 'Cinco', ['Duas', 'Nove', 'Quinze'], 'Monterrei, Ribeira Sacra, Ribeiro, Valdeorras e Rías Baixas.'),
            mc('Qual destas é uma DO da Galícia?', 'Valdeorras', ['Rioja', 'Jumilla', 'Toro'], 'As outras: Monterrei, Ribeira Sacra, Ribeiro e Rías Baixas.'),
            mc('Qual uva é a principal de Rías Baixas?', 'Albariño', ['Tempranillo', 'Garnacha', 'Monastrell'], 'Rende brancos jovens, frutados e aromáticos.'),
            mc('Como são os vinhos de Rías Baixas?', 'Brancos jovens, frutados e aromáticos', ['Tintos envelhecidos em barril', 'Espumantes secos', 'Fortificados'], 'Resultado da principal casta, a Albariño.'),
            mc('O que torna a Galícia singular para o vinho?', 'Proximidade do Atlântico, cordilheira Cantábrica, umidade e isolamento', ['Deserto e calor extremo', 'Altitude de 2000 m', 'Solo vulcânico'], 'Condições únicas dão vinhos extremamente bons.'),
            mc('Que tipo de vinho deu fama ao Priorato na última década?', 'Tintos potentes, concentrados e longevos', ['Brancos leves', 'Espumantes', 'Rosés de verão'], 'A produção é baixíssima; alguns são difíceis de achar até na Espanha.'),
            mc('Qual é a altitude típica dos vinhedos do Priorato?', '500 a 700 m', ['0 a 50 m', '100 a 200 m', 'Mais de 2000 m'], 'A posição inclinada dá sol e noites frias.'),
            mc('Como é o clima do Priorato?', 'Verões longos, secos e quentes; invernos frios com geada', ['Chuvoso o ano todo', 'Ameno e sem estações', 'Úmido como a Galícia'], 'Há poucas chuvas e a região fica perto de montanhas.')
          ] }
      ]
    },

    /* ===================== PORTUGAL ===================== */
    {
      id: 'por-un', title: 'Portugal', country: 'Portugal',
      lessons: [
        { id: 'por-1', title: 'Panorama de Portugal', level: 'medio',
          tip: 'Portugal tem vinhos de sabores tradicionais e fortes e mais de 250 variedades de uva. Seu clima é marítimo, com o Douro continental. A entrada na União Europeia, nos anos 1980, impulsionou o setor.',
          questions: [
            mc('Quantas variedades de uva Portugal possui, aproximadamente?', 'Mais de 250', ['Cerca de 20', 'Cerca de 50', 'Cerca de 100'], 'Esse número alto de castas é uma marca do país.'),
            mc('Qual é o clima predominante de Portugal?', 'Marítimo, com verões moderadamente quentes e invernos frescos e úmidos', ['Desértico', 'Polar', 'Tropical chuvoso'], 'O Douro é exceção, com clima continental.'),
            mc('Qual região portuguesa tem clima continental?', 'Douro', ['Algarve', 'Madeira', 'Açores'], 'Verões quentes e invernos frios caracterizam o Douro.'),
            mc('Quando os primeiros vinhos portugueses foram exportados para a Inglaterra?', 'No século XII', ['No século V', 'No século XV', 'No século XX'], 'O sucesso influenciou o Tratado de Windsor, de 1386.'),
            mc('Qual vinho fortificado português era o conhecido na época das primeiras exportações?', 'Porto', ['Marsala', 'Jerez', 'Tokaji'], 'O Porto é o vinho fortificado famoso do Douro.'),
            mc('Que impulso a entrada na União Europeia deu a Portugal?', 'Impulsionou o setor vinícola a partir da década de 1980', ['Proibiu as castas nativas', 'Reduziu a produção', 'Extinguiu as denominações'], 'A entrada na UE modernizou a produção.'),
            mc('Qual destes é um vinho português famoso?', 'Vinho Verde', ['Cava', 'Prosecco', 'Tokaji'], 'Também Madeira, Mateus e Lancers.'),
            mc('Qual destes vinhos portugueses é frizzante, ligeiramente espumante?', 'Vinho verde', ['Porto', 'Madeira', 'Dão tinto'], 'Frizzante é o termo italiano para vinho ligeiramente espumante, como o vinho verde português.')
          ] },
        { id: 'por-2', title: 'Mapa das regiões vinícolas', level: 'medio',
          tip: 'O mapa mostra regiões como Vinho Verde, Douro e Vinho do Porto, Dão, Bairrada, Estremadura, Ribatejo, Terras do Sado e Alentejo.',
          questions: [
            mc('Qual destas é uma região vinícola portuguesa?', 'Bairrada', ['Rioja', 'Toro', 'Priorato'], 'Bairrada é a terra da Baga.'),
            mc('Qual região é a casa do Vinho do Porto?', 'Douro', ['Alentejo', 'Dão', 'Ribatejo'], 'O Vinho do Porto vem do Douro.'),
            mc('Qual destas regiões aparece no mapa vinícola de Portugal?', 'Alentejo', ['Penedès', 'Mosel', 'Wachau'], 'O Alentejo é uma das regiões do mapa vinícola de Portugal.'),
            mc('Qual região é conhecida pela uva Baga?', 'Bairrada', ['Dão', 'Douro', 'Algarve'], 'Quase só ali se encontra.'),
            mc('Em qual região a Touriga Nacional se desenvolve melhor?', 'Dão', ['Bairrada', 'Algarve', 'Vinho Verde'], 'A Touriga Nacional está em quase todo o país.'),
            mc('Quais regiões estão entre as que produzem Fernão Pires?', 'Ribatejo e Bairrada', ['Madeira e Açores', 'Algarve e Douro', 'Dão e Vinho Verde'], 'É a branca mais cultivada e de maior prestígio.')
          ] },
        { id: 'por-3', title: 'Tintas portuguesas', level: 'avancado',
          tip: 'As castas nativas são o grande trunfo de Portugal. Baga, Castelão, Tinta Roriz e Touriga Nacional têm sinônimos e perfis próprios.',
          questions: [
            mc('Qual é o outro nome da Baga?', 'Tinta da Bairrada', ['Tinta Roriz', 'Preto Mortágua', 'Tinta Periquita'], 'Também chamada Poeirinho.'),
            mc('Qual é o outro nome da Castelão?', 'Tinta Periquita', ['Aragonez', 'Poeirinho', 'Maria Gomes'], 'Dá-se bem em clima quente e solo seco.'),
            mc('Em quais regiões a Castelão se destaca?', 'Algarve e Setúbal', ['Minho e Douro', 'Madeira e Açores', 'Dão e Bairrada'], 'Costuma ser varietal, com bom frescor e acidez.'),
            mc('Qual é o equivalente português da Tempranillo?', 'Tinta Roriz (Aragonez)', ['Touriga Nacional', 'Baga', 'Castelão'], 'Adapta-se a vários climas e solos.'),
            mc('Como são os vinhos da Tinta Roriz?', 'Alcoólicos e de baixa acidez', ['Leves e muito ácidos', 'Doces e brancos', 'Sem álcool'], 'Cultiva-se em Trás-os-Montes, Douro, Dão e Alentejo.'),
            mc('Qual casta é chamada de rainha das castas portuguesas e usada no Porto?', 'Touriga Nacional', ['Baga', 'Castelão', 'Fernão Pires'], 'Tem aroma inconfundível, caráter frutado e taninos finos.'),
            mc('Qual é o outro nome da Touriga Nacional?', 'Preto Mortágua', ['Poeirinho', 'Aragonez', 'Maria Gomes'], 'Aparece em quase todo o país.'),
            match('Ligue a casta ao seu sinônimo', [['Baga', 'Tinta da Bairrada'], ['Castelão', 'Tinta Periquita'], ['Tinta Roriz', 'Aragonez'], ['Touriga Nacional', 'Preto Mortágua']], 'Sinônimos aparecem em diferentes regiões.')
          ] },
        { id: 'por-4', title: 'A branca Fernão Pires', level: 'avancado',
          tip: 'A Fernão Pires, também chamada Maria Gomes, é a branca de maior prestígio e mais cultivada de Portugal: aromas florais e frutados e acidez reduzida.',
          questions: [
            mc('Qual é a branca portuguesa mais cultivada e de maior prestígio?', 'Fernão Pires', ['Touriga Nacional', 'Baga', 'Castelão'], 'Outro nome: Maria Gomes.'),
            mc('Qual é o outro nome da Fernão Pires?', 'Maria Gomes', ['Preto Mortágua', 'Tinta Roriz', 'Poeirinho'], 'É a branca com aromas florais e frutados.'),
            mc('Como é a acidez da Fernão Pires?', 'Reduzida', ['Muito alta', 'Altíssima', 'Extrema'], 'Tem bom teor alcoólico.'),
            mc('Quais são os aromas da Fernão Pires?', 'Florais e frutados', ['Defumados e terrosos', 'Mentolados', 'Couro e tabaco'], 'Tem bom álcool e acidez reduzida.'),
            mc('Em quais regiões se cultiva a Fernão Pires?', 'Ribatejo e Bairrada', ['Dão e Algarve', 'Douro e Madeira', 'Vinho Verde e Açores'], 'Região de destaque para a casta.')
          ] }
      ]
    },

    /* ===================== ALEMANHA ===================== */
    {
      id: 'ale-un', title: 'Alemanha', country: 'Alemanha',
      lessons: [
        { id: 'ale-1', title: 'Panorama alemão', level: 'medio',
          tip: 'A Alemanha tem 13 regiões vinícolas, de tradição que remonta aos romanos. O verão curto favorece brancos; quase dois terços da produção são brancos, e as tintas, só de maturação precoce, voltaram com força depois de 2005.',
          questions: [
            mc('Quantas regiões vinícolas tem a Alemanha?', '13', ['4', '7', '25'], 'Cada uma tem seu perfil.'),
            mc('Por que a Alemanha sempre fez brancos?', 'Adaptação ao verão curto', ['Falta de uvas tintas', 'Lei proibindo tintos', 'Clima desértico'], 'Só tintas de maturação precoce vingam.'),
            mc('Qual destas tintas é de maturação precoce e cultivada na Alemanha?', 'Pinot Noir (Spätburgunder)', ['Aglianico', 'Nebbiolo', 'Touriga Nacional'], 'Também Dornfelder e Portugieser.'),
            mc('Que proporção da produção alemã é de vinho branco?', 'Quase dois terços', ['Cerca de 10%', 'Cerca de 25%', '100%'], 'Desde 2005, produtores de algumas regiões retomaram as tintas.'),
            mc('Quando produtores de algumas regiões retomaram a produção de tintos?', 'A partir de 2005', ['Em 1500', 'Em 1850', 'Em 1960'], 'Antes, a produção de tintos era quase abandonada.'),
            mc('A que época remontam as produções antigas de vinho na Alemanha?', 'À era romana', ['À Idade do Gelo', 'Ao século XX', 'À Revolução Industrial'], 'As produções antigas remontam à era romana.')
          ] },
        { id: 'ale-2', title: 'Regiões alemãs: parte 1', level: 'avancado',
          tip: 'Ahr (tintos, íngreme e pequena), Baden (comprida, norte-sul), Franken (garrafa Bocksbeutel), Hessische Bergstrasse (primavera precoce) e Mittelrhein (construções medievais).',
          questions: [
            mc('Qual região alemã se especializa em tintos, tem encostas íngremes e só 540 ha?', 'Ahr', ['Baden', 'Mosel', 'Rheingau'], 'É uma das menores regiões.'),
            mc('Qual região se estende cerca de 400 km de norte a sul?', 'Baden', ['Ahr', 'Nahe', 'Sachsen'], 'Tem cerca de 16.000 ha.'),
            mc('Qual região é famosa pela garrafa Bocksbeutel, barriguda?', 'Franken', ['Baden', 'Pfalz', 'Mosel'], 'Produz vinho há mais de 1.200 anos.'),
            mc('Qual região alemã tem a primavera chegando mais cedo, com floração em março e abril?', 'Hessische Bergstrasse', ['Sachsen', 'Mosel', 'Franken'], 'A floração antecipada é uma marca da região.'),
            mc('Qual região tem construções medievais e declives favoráveis ao vinhedo?', 'Mittelrhein (Médio Reno)', ['Baden', 'Ahr', 'Nahe'], 'Mittelrhein significa Médio Reno.'),
            match('Ligue a região à sua característica', [['Ahr', 'Tintos e só 540 ha'], ['Baden', 'Cerca de 400 km norte-sul'], ['Franken', 'Garrafa Bocksbeutel'], ['Hessische Bergstrasse', 'Floração em março/abril']], 'Cada região tem um traço marcante.')
          ] },
        { id: 'ale-3', title: 'Regiões alemãs: parte 2', level: 'avancado',
          tip: 'Mosel (rio Mosel), Nahe, Pfalz (Deutsche Weinstraße), Rheingau (Riesling e Spätburgunder), Rheinhessen, Saale-Unstrut, Sachsen (rio Elba) e Württemberg.',
          questions: [
            mc('Qual região alemã fica às margens do rio Mosel e teve início com os romanos?', 'Mosel', ['Nahe', 'Pfalz', 'Sachsen'], 'Os romanos começaram o cultivo ali.'),
            mc('Qual região é chamada de joia do sudoeste?', 'Nahe', ['Mosel', 'Baden', 'Rheingau'], 'Tem vales românticos e grande variedade de vinhos.'),
            mc('Qual região tem a Deutsche Weinstraße, a rota do vinho mais conhecida?', 'Pfalz', ['Nahe', 'Rheingau', 'Sachsen'], 'Em Bad Dürkheim ocorre uma grande festa do vinho.'),
            mc('Quais uvas marcam o Rheingau?', 'Riesling e Spätburgunder (Pinot Noir)', ['Silvaner e Müller-Thurgau', 'Dornfelder e Portugieser', 'Zweigelt e St. Laurent'], 'O Reno dobra para oeste em Wiesbaden criando a geografia típica.'),
            mc('Qual é o tinto de destaque na Rheinhessen?', 'Dornfelder', ['Zweigelt', 'Tempranillo', 'Nebbiolo'], 'Os brancos principais são Riesling e Rivaner.'),
            mc('Entre quais cidades fica a Rheinhessen?', 'Mainz, Bingen e Worms', ['Berlim e Dresden', 'Munique e Nuremberg', 'Hamburgo e Bremen'], 'Tradição desde o século VIII.'),
            mc('Qual região está às margens do rio Elba e tem vinhas em Dresden?', 'Sachsen', ['Baden', 'Mosel', 'Nahe'], 'Tem as primeiras vinhas em Dresden.'),
          ] },
        { id: 'ale-4', title: 'Uvas da Alemanha', level: 'avancado',
          tip: 'Riesling é a melhor uva do país e vem do Reno. Spätburgunder, Weissburgunder e Rulander são Pinot Noir, Pinot Blanc e Pinot Gris. Dornfelder é uma tinta frutada e fácil, parecida com o Beaujolais.',
          questions: [
            mc('Qual é considerada a melhor uva da Alemanha?', 'Riesling', ['Silvaner', 'Müller-Thurgau', 'Dornfelder'], 'Tem aroma floral e alta acidez, e é originária do Reno.'),
            mc('Quais são as características do Riesling?', 'Aroma floral e alta acidez', ['Pouco aroma e baixa acidez', 'Taninos fortes', 'Cor intensa'], 'Origem na região do Reno.'),
            mc('Spätburgunder é o nome alemão de qual uva?', 'Pinot Noir', ['Pinot Blanc', 'Pinot Gris', 'Merlot'], 'É a melhor tinta alemã, de frutas vermelhas.'),
            mc('Weissburgunder é o nome alemão de qual uva?', 'Pinot Blanc', ['Pinot Noir', 'Pinot Gris', 'Chardonnay'], 'Rulander corresponde a Pinot Gris.'),
            mc('Rivaner é outro nome de qual uva?', 'Müller-Thurgau', ['Silvaner', 'Riesling', 'Gewürztraminer'], 'Müller-Thurgau tem altos rendimentos.'),
            mc('Quais aromas marcam o Gewürztraminer?', 'Rosas, mel e laranjas', ['Cassis e grafite', 'Baunilha e coco', 'Pimentão e erva'], 'Ocupa menos de 1% dos vinhedos alemães.'),
            mc('Qual tinta frutada e fácil é semelhante ao Beaujolais?', 'Dornfelder', ['Spätburgunder', 'Portugieser', 'Silvaner'], 'É uma tinta frutada e de fácil consumo.'),
            mc('Qual é a segunda tinta alemã em importância e qualidade?', 'Blauer Portugieser', ['Dornfelder', 'Zweigelt', 'Cabernet Franc'], 'A primeira é a Spätburgunder.')
          ] }
      ]
    },

    /* ===================== ÁUSTRIA ===================== */
    {
      id: 'aut-un', title: 'Áustria', country: 'Áustria',
      lessons: [
        { id: 'aut-1', title: 'Panorama austríaco', level: 'medio',
          tip: 'A viticultura austríaca é parecida com a alemã e predominam variedades locais. A produção se concentra no sudeste, em colinas suaves, com clima continental. A maioria dos vinhos é de qualidade e o consumo interno é alto.',
          questions: [
            mc('Em que parte do país concentra-se a produção austríaca?', 'Sudeste, em colinas suaves rumo à Hungria e à Eslovênia', ['Noroeste, nos Alpes', 'Oeste, perto da Suíça', 'Extremo norte'], 'É a área de vinhedos a leste e sudeste.'),
            mc('Qual é o clima da Áustria?', 'Continental, com verões amenos, outonos ensolarados e invernos de muita neve', ['Mediterrâneo', 'Tropical', 'Desértico'], 'Predominam as variedades autóctones.'),
            mc('Entre quais latitudes fica a Áustria?', '48 e 49', ['10 e 20', '30 e 35', '60 e 70'], 'Similar à área entre Champagne e Borgonha.'),
            mc('Que proporção do vinho produzido os austríacos consomem?', '73%', ['5%', '25%', '98%'], 'As exportações, porém, vêm crescendo.'),
            mc('Quantos produtores tem a Áustria, aproximadamente?', 'Cerca de 20.000', ['Cerca de 200', 'Cerca de 2.000', 'Cerca de 2 milhões'], 'A maioria é pequena.'),
            mc('Como são, em geral, os produtores austríacos?', 'Pequenos; mais da metade com cerca de 5 ha', ['Grandes grupos industriais', 'Só cooperativas', 'Todos com mais de 100 ha'], 'Grandes produtores são raros.'),
            mc('Qual é a categoria de qualidade austríaca equivalente à DOC?', 'Qualitätswein', ['Tafelwein', 'Landwein', 'Vino da Tavola'], 'A maior parte do vinho é dessa categoria.')
          ] },
        { id: 'aut-2', title: 'Exportação e uvas emblemáticas', level: 'medio',
          tip: 'As exportações crescem com espumantes pelo método champenoise, brancos de Grüner Veltliner e tintos de Zweigelt. Blaufränkisch e St. Laurent são outras tintas locais.',
          questions: [
            mc('Qual é a uva branca nacional da Áustria?', 'Grüner Veltliner', ['Welschriesling', 'Rivaner', 'Scheurebe'], 'É a mais plantada do país.'),
            mc('Qual é a tinta emblemática da Áustria?', 'Zweigelt', ['Dornfelder', 'Cabernet Sauvignon', 'Merlot'], 'Também chamada Rotburger.'),
            mc('Que estilo de tinta é a Blaufränkisch?', 'De taninos rústicos', ['Doce e sem taninos', 'Branca aromática', 'Espumante'], 'Já a St. Laurent é aveludada.'),
            mc('Como é a St. Laurent?', 'Aveludada', ['Rústica e adstringente', 'Incolor', 'Muito ácida'], 'É outra tinta local.'),
            mc('Que método os espumantes austríacos exportados usam?', 'Método champenoise, no estilo dos Crémants', ['Método Charmat', 'Fermentação em tanque aberto', 'Fortificação'], 'Estilo dos Crémants.'),
            mc('Zweigelt tem qual outro nome?', 'Rotburger', ['Blauburger', 'Roesler', 'Blauer Wildbacher'], 'Também Blauer Zweigelt.'),
            mc('Qual destes é um destaque da exportação austríaca?', 'Espumantes pelo método champenoise', ['Vinhos fortificados estilo Porto', 'Tintos de Nebbiolo', 'Vinhos de uva Albariño'], 'As exportações crescem com espumantes, Grüner Veltliner e Zweigelt.')
          ] },
        { id: 'aut-3', title: 'Regiões da Áustria', level: 'avancado',
          tip: 'Os vinhedos ficam a leste, junto às fronteiras com Tchéquia, Eslováquia, Hungria e Eslovênia. São quatro regiões: Burgenland, Niederösterreich, Steiermark (Styria) e Wien (Vienna).',
          questions: [
            mc('Quantas regiões produtoras a Áustria tem?', 'Quatro', ['Duas', 'Sete', 'Doze'], 'Burgenland, Niederösterreich, Steiermark e Wien.'),
            mc('Qual destas é uma região vinícola austríaca?', 'Burgenland', ['Rheingau', 'Rioja', 'Mosel'], 'Rheingau e Mosel são alemãs.'),
            mc('Que nome inglês tem a região de Steiermark?', 'Styria', ['Vienna', 'Lower Austria', 'Burgenland'], 'Wien é Vienna.'),
            mc('Que nome inglês tem a região de Wien?', 'Vienna', ['Styria', 'Salzburg', 'Tyrol'], 'Wien é o nome alemão de Vienna.'),
            mc('Junto a quais fronteiras ficam os vinhedos austríacos?', 'Tcheca, eslovaca, húngara e eslovena', ['Francesa e suíça', 'Italiana e alemã apenas', 'Polonesa e russa'], 'Concentram-se no leste.')
          ] },
        { id: 'aut-4', title: 'Uvas brancas e sinônimos', level: 'avancado',
          tip: 'Grüner Veltliner ocupa cerca de um terço da área plantada. Várias uvas têm nomes alternativos, como Müller-Thurgau (Rivaner) e Riesling (Rheinriesling).',
          questions: [
            mc('Qual é a uva branca mais plantada da Áustria?', 'Grüner Veltliner', ['Welschriesling', 'Riesling', 'Chardonnay'], 'Ocupa cerca de 32,6% da área.'),
            mc('Qual é a proporção da Grüner Veltliner na área plantada?', 'Cerca de um terço', ['Cerca de 3%', 'Cerca de 10%', 'Cerca de 90%'], 'A maior fatia entre as brancas.'),
            mc('Rheinriesling é outro nome de qual uva?', 'Riesling', ['Welschriesling', 'Rivaner', 'Neuburger'], 'Rheinriesling é um nome alternativo do Riesling.'),
            mc('Rivaner é outro nome de qual uva?', 'Müller-Thurgau', ['Riesling', 'Grüner Veltliner', 'Scheurebe'], 'Mesmo nome usado na Alemanha.'),
            order('Ordene estas uvas brancas da maior para a menor área plantada na Áustria', ['Grüner Veltliner', 'Welschriesling', 'Müller-Thurgau', 'Riesling'], 'Grüner 32,6%, Welschriesling 8,2%, Müller-Thurgau 5,7% e Riesling 3,6%.')
          ] }
      ]
    }
  ]);
})();
