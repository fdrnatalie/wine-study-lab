/**
 * Curso: Argentina e Uruguai (módulo de países, pp. 136-142 da apostila) e Vinhos fortificados
 * (introdução, Porto, Jerez, Madeira e outros; pp. 144-164). Só fatos reescritos com palavras próprias;
 * itens duvidosos ou com números divergentes ficaram de fora.
 */
(function () {
  var mc = CourseKit.mc, match = CourseKit.match, order = CourseKit.order;

  CourseKit.add([
    /* ======================= ARGENTINA E URUGUAI ======================= */
    {
      id: 'argentina-uruguai', title: 'Argentina e Uruguai', country: 'Argentina e Uruguai',
      lessons: [
        { id: 'arg-1', title: 'Argentina: história e irrigação', level: 'medio',
          tip: 'Nas planícies áridas de Mendoza, a irrigação foi o fator decisivo. As primeiras videiras (Criolla) vieram do Chile, e as castas francesas chegaram por volta de 1880. A ferrovia de 1885 abriu o mercado e gerou superprodução.',
          questions: [
            mc('O que tornou possível cultivar uvas nas planícies áridas de Mendoza?', 'A irrigação', ['A chuva abundante', 'Solos muito úmidos', 'Neblina constante'], 'Algumas tribos locais já controlavam o fluxo de água com reguladores triangulares, ainda usados hoje.'),
            mc('Qual casta teria sido trazida primeiro do Chile para a Argentina?', 'Criolla', ['Malbec', 'Torrontés', 'Tannat'], 'Provavelmente é a mesma uva que virou País no Chile e Mission na Califórnia.'),
            mc('Quem levou as primeiras castas francesas a Mendoza, por volta de 1880?', 'O botânico Aimé Pouget', ['O padre Pascual Harriague', 'O monge Arnau de Vilanova', 'O comerciante Noel Cossart'], 'Aimé Pouget era um botânico francês.'),
            mc('O que a ferrovia entre Mendoza e Buenos Aires (1885) provocou no vinho?', 'Abriu o mercado e gerou superprodução de vinho de baixa qualidade', ['Interrompeu as exportações', 'Fez o consumo despencar de imediato', 'Obrigou a usar só uvas brancas'], 'A demanda cresceu e houve superprodução de vinho de baixa qualidade.'),
            mc('Por que os produtores argentinos passaram a mudar técnicas no vinhedo e na vinícola?', 'O consumo interno caiu e o estilo rústico atrapalhava a exportação', ['Para atender uma lei de rótulo', 'Porque o clima ficou mais frio', 'Para abandonar a Malbec'], 'Com a queda do consumo, os produtores buscaram exportar, e o estilo rústico era uma barreira.'),
            mc('Qual destas é uma vantagem comercial do vinho argentino?', 'Boa relação custo/benefício', ['Rendimentos muito altos por hectare', 'Ausência de microclimas', 'Uso exclusivo de uvas brancas'], 'A busca por qualidade com bom preço impulsionou a vitivinicultura do país.'),
            order('Ordene cronologicamente', ['Primeiras videiras trazidas do Chile', 'Castas francesas chegam a Mendoza (c. 1880)', 'Ferrovia Mendoza-Buenos Aires (1885)', 'Foco na exportação após queda do consumo'], 'A sequência vai das primeiras videiras às mudanças para exportar.')
          ] },
        { id: 'arg-2', title: 'As uvas da Argentina', level: 'medio',
          tip: 'A Malbec é a grande tinta do país e a Torrontés, a branca emblemática. Tempranillo, Sangiovese e Barbera foram introduzidas recentemente. A Bonarda é muito plantada.',
          questions: [
            mc('Qual é a grande uva tinta da Argentina?', 'Malbec', ['Tannat', 'Pinot Noir', 'Carménère'], 'Seus vinhos são os mais interessantes do país e muitos produtores a vinificam isoladamente.'),
            mc('Em Bordeaux a Malbec costuma ser só coadjuvante de corte. Como ela se comporta na Argentina?', 'Dá vinhos ricos e encorpados, muitas vezes varietais', ['Dá vinhos leves e pálidos', 'Só é usada em espumantes', 'Só aparece em vinhos doces'], 'Na Argentina ela é vinificada sozinha por vários produtores.'),
            mc('Qual uva branca aromática é emblemática da Argentina?', 'Torrontés', ['Albariño', 'Riesling', 'Viognier'], 'Dá vinhos perfumados e característicos.'),
            mc('Qual destas castas foi introduzida recentemente com sucesso na Argentina?', 'Tempranillo', ['Nebbiolo', 'Gamay', 'Mourvèdre'], 'Sangiovese e Barbera também entram nessa lista.'),
            mc('A partir de 2008, qual casta passou a surpreender por taninos finos e expressão varietal?', 'Cabernet Sauvignon', ['Tannat', 'Carignan', 'Zinfandel'], 'A Petit Verdot também chamou atenção, sobretudo em cortes com Malbec.'),
            mc('A Bonarda, na Argentina, é:', 'Muito plantada e dá bons vinhos com manejo adequado', ['Rara e quase extinta', 'Exclusivamente branca', 'Usada só para destilados'], 'Com tratamento certo no vinhedo, produz vinhos interessantes.'),
            match('Ligue a uva ao seu papel na Argentina', [['Malbec', 'Grande tinta do país'], ['Torrontés', 'Branca aromática emblemática'], ['Petit Verdot', 'Destaque em cortes com Malbec'], ['Bonarda', 'Muito plantada']], 'Cada casta ocupa um papel diferente no panorama argentino.')
          ] },
        { id: 'arg-3', title: 'Salta, La Rioja e San Juan', level: 'avancado',
          tip: 'Salta fica ao norte, com vinhedos de altitude altíssima e Torrontés em Cafayate. La Rioja é pequena, seca e muito quente. San Juan, antes ligada a vinhos licorosos e de mesa, hoje investe em castas nobres.',
          questions: [
            mc('Qual é a principal zona produtora de Salta, a 1.750 m de altitude?', 'Cafayate', ['Luján de Cuyo', 'Tupungato', 'San Rafael'], 'Cafayate é a principal zona de Salta, onde reina a Torrontés.'),
            mc('Qual é a principal característica de Salta, a região mais ao norte?', 'Altitude altíssima e grande amplitude térmica entre dia e noite', ['Vinhedos ao nível do mar', 'Clima frio e chuvoso o ano todo', 'Solos de basalto escuro'], 'Ar muito puro, solos de areia e pedregulho e irrigação por rios completam o quadro.'),
            mc('Qual uva reina em Cafayate?', 'Torrontés', ['Bonarda', 'Syrah', 'Pinot Noir'], 'A Torrontés tem aromas muito pessoais e é a branca emblemática do país.'),
            mc('Como é o clima de La Rioja, na Argentina?', 'Muito seco e quente no verão, com boa diferença entre dia e noite', ['Úmido e frio', 'Chuvoso o ano inteiro', 'Oceânico e ventoso'], 'Chove entre 150 e 300 mm por ano, e a altitude favorece a variação térmica.'),
            mc('Qual é a condução mais usada em La Rioja, pouco adequada para alta qualidade?', 'Latada (parreira)', ['Espaldeira baixa', 'Vaso (gobelet)', 'Cordão duplo'], 'Sistemas mais modernos vão entrando aos poucos.'),
            mc('Que uva é a mais plantada em La Rioja?', 'Torrontés Riojana', ['Malbec', 'Cabernet Franc', 'Tannat'], 'Há também pequenas áreas de Moscatel e Bonarda.'),
            mc('San Juan, até pouco tempo, produzia sobretudo:', 'Vinhos licorosos e de mesa', ['Espumantes premium', 'Vinhos de gelo', 'Vinhos laranja'], 'Hoje ganham espaço castas nobres como Cabernet Sauvignon, Syrah, Malbec e Chardonnay.'),
            mc('Qual microrregião de San Juan vem sendo identificada por seus vinhedos de altitude?', 'El Pedernal', ['Cafayate', 'Alto Valle', 'Valle de Uco'], 'A irrigação vem do rio San Juan, que nasce na cordilheira.')
          ] },
        { id: 'arg-4', title: 'Mendoza, Patagônia e Neuquén', level: 'avancado',
          tip: 'Mendoza concentra cerca de 80% dos vinhos argentinos e tem cinco zonas. Ao sul, a Patagônia (Rio Negro) tem clima temperado e noites frescas. Neuquén é nova, ventosa e plantada desde 2001.',
          questions: [
            mc('Qual região responde por cerca de 80% dos vinhos argentinos?', 'Mendoza', ['Salta', 'Rio Negro', 'La Rioja'], 'Seus vinhedos formam verdadeiros oásis irrigados.'),
            mc('Qual destas é uma zona de Mendoza, com Tupungato, Tunuyán e San Carlos?', 'Valle de Uco', ['Valles Calchaquíes', 'Alto Valle', 'Zonda'], 'Valle de Uco é uma das cinco zonas de Mendoza.'),
            mc('Qual destas sub-regiões pertence à zona Centro de Mendoza?', 'Luján de Cuyo', ['San Rafael', 'Lavalle', 'Rivadavia'], 'O centro reúne também Maipú, Godoy Cruz e Guaymallén.'),
            mc('Quais sub-regiões formam a zona Sul de Mendoza?', 'San Rafael e General Alvear', ['Las Heras e Lavalle', 'Tupungato e Tunuyán', 'Maipú e Junín'], 'A zona Sul é a mais meridional das cinco.'),
            mc('Onde fica Rio Negro, a região vinícola mais ao sul?', 'Na Patagônia', ['Em Salta', 'Em Cuyo', 'Na costa do Uruguai'], 'Os vinhedos ficam sobretudo no Alto Valle del Rio Negro.'),
            mc('Qual destas uvas é considerada exigente e teve sucesso "de passagem" em Rio Negro?', 'Pinot Noir', ['Bonarda', 'Moscatel', 'Tannat'], 'Malbec, Cabernet, Merlot e Syrah também são plantadas lá.'),
            mc('O que mantém as vinhas de Neuquén livres de doenças?', 'O vento frio constante', ['A chuva frequente', 'O solo fértil', 'A neblina'], 'Neuquén é uma região nova, com plantios desde 2001 e solos pouco férteis.'),
            order('Ordene as regiões de norte a sul', ['Salta', 'La Rioja', 'San Juan', 'Mendoza', 'Patagônia'], 'A lista segue a sequência do oeste argentino, de norte a sul.')
          ] },
        { id: 'arg-5', title: 'Uruguai: a história da Tannat', level: 'medio',
          tip: 'A Tannat veio de Madiran, no sudoeste da França, por volta de 1870 com Pascual Harriague, e por isso ganhou o nome dele. Em 1987 o INAVI foi criado e ajudou a modernizar o setor.',
          questions: [
            mc('Qual uva de origem francesa é o símbolo do vinho uruguaio?', 'Tannat', ['Malbec', 'Carménère', 'Grenache'], 'O Uruguai é um dos lugares onde essa uva tem sua melhor expressão.'),
            mc('De que região francesa vieram as primeiras Tannat uruguaias?', 'Madiran', ['Alsácia', 'Champagne', 'Beaujolais'], 'Madiran fica no sudoeste da França.'),
            mc('Quem trouxe a Tannat ao Uruguai por volta de 1870?', 'Pascual Harriague', ['Aimé Pouget', 'Juán Cidrón', 'Arnau de Vilanova'], 'Imigrante francês; por isso a uva foi chamada de Harriague no país.'),
            mc('Como a Tannat ficou conhecida no Uruguai até os anos 1980?', 'Harriague', ['Madiran', 'Criolla', 'Uruguay Rouge'], 'Só nos anos 1980 ela recuperou o nome original.'),
            mc('Que tipo de uva predominava nos vinhos rústicos uruguaios antes da modernização?', 'Híbridas', ['Viníferas italianas', 'Uvas passificadas', 'Apenas brancas aromáticas'], 'Depois, as híbridas foram substituídas por viníferas europeias.'),
            mc('O que foi criado em 1987 e melhorou a vitivinicultura do Uruguai?', 'O INAVI, instituto nacional de vitivinicultura', ['Uma denominação de origem única', 'A primeira vinícola exportadora', 'Um imposto sobre uvas importadas'], 'Antes, a gestão ficava nas mãos do governo, com resultados fracos; o INAVI permitiu descentralizar decisões e atrair capital.'),
            mc('Qual destas é uma característica das vinícolas uruguaias novas?', 'Tanques de inox com controle de temperatura e prensas pneumáticas', ['Fermentação só em ânforas', 'Colheita exclusivamente mecânica', 'Uso apenas de carvalho húngaro'], 'Também têm grande estoque de barricas de carvalho francês e americano.')
          ] },
        { id: 'arg-6', title: 'Uruguai: regiões e uvas', level: 'avancado',
          tip: 'Canelones, San José e Juanicó ficam perto de Montevidéu. O clima tem boa chuva, mais concentrada no inverno, e solos argilo-calcários. A Tannat pede maturação perfeita dos taninos e vinificação cuidadosa.',
          questions: [
            mc('Qual destas regiões uruguaias fica perto de Montevidéu e é muito conhecida?', 'Canelones', ['Salto', 'Artigas', 'Rivera'], 'San José e Juanicó também ficam perto da capital; são de produção mais recente.'),
            mc('Como é o solo predominante nos vinhedos uruguaios?', 'Argilo-calcário, com boa drenagem e baixa fertilidade', ['Vulcânico e muito fértil', 'Arenoso puro', 'Xistoso e escarpado'], 'O relevo é plano, com pequenas elevações.'),
            mc('Quando chove mais nas áreas vinícolas do Uruguai?', 'No inverno', ['No verão', 'Só na primavera', 'Não chove'], 'O norte é mais quente e seco.'),
            mc('Quais são os sistemas de condução citados para o Uruguai?', 'Espaldeira e lira', ['Latada e vaso', 'Pérgola e gobelet', 'Só cordão no chão'], 'Esses fatores levam a boa maturação fisiológica na maioria das safras.'),
            mc('Por que a Tannat exige cuidado no vinhedo e na vinícola?', 'Precisa de maturação perfeita dos taninos, pois os verdes são agressivos', ['Tem pouca cor', 'Amadurece sempre cedo demais', 'Produz pouco tanino'], 'Também pede extração criteriosa e uso judicioso de carvalho.'),
            mc('Que perfil tem uma boa Tannat uruguaia?', 'Cor intensa, estrutura, frutas escuras em geleia e chocolate', ['Cor pálida e leveza', 'Notas cítricas e salinas', 'Aromas florais delicados'], 'Combina com carnes suculentas e molhos consistentes.'),
            mc('Qual proporção da área de vinhedos do Uruguai é ocupada pela Tannat?', 'Cerca de um terço', ['Cerca de 5%', 'Metade', 'Quase nenhuma'], 'São cerca de 3.000 ha, bem mais que os 1.400 ha de Madiran, a região de origem.'),
            mc('Como se destaca a Sauvignon Blanc uruguaia?', 'Vinificada em inox, fria, dá vinhos vibrantes e herbáceos', ['Passa anos em carvalho novo', 'É doce e botritizada', 'Sempre é espumante'], 'O estilo é Novo Mundo, fresco e frutado.')
          ] }
      ]
    },

    /* ======================= FORTIFICADOS: INTRO + PORTO ======================= */
    {
      id: 'fortificados-porto', title: 'Fortificados e Porto', country: 'Vinhos fortificados',
      lessons: [
        { id: 'for-1', title: 'O que é um vinho fortificado', level: 'medio',
          tip: 'Fortificar é aumentar o teor alcoólico com aguardente vínica, em geral vinho destilado. O momento da adição define o estilo: antes, durante ou depois da fermentação.',
          questions: [
            mc('O que se adiciona a um vinho para fortificá-lo?', 'Aguardente vínica, em geral vinho destilado', ['Açúcar de beterraba', 'Água mineral', 'Mosto concentrado'], 'O álcool vem da adição, não só da fermentação natural.'),
            mc('Quem comercializou inicialmente os destilados que permitiram os fortificados, no século XVII?', 'Os holandeses', ['Os romanos', 'Os suíços', 'Os japoneses'], 'Os fortificados não existiam antes desse século.'),
            mc('O que se chama de mutage?', 'A adição de aguardente para parar a fermentação ou elevar o álcool', ['A prensagem das uvas passas', 'A trasfega com aeração', 'A mistura de safras'], 'A técnica é atribuída ao catalão Arnau de Vilanova, no século XIII.'),
            mc('Por que adicionar álcool a vinhos secos já fermentados era útil nas viagens?', 'Esterilizava e estabilizava o vinho em barris', ['Deixava o vinho mais doce', 'Aumentava a acidez', 'Dava cor mais escura'], 'Vinhos despachados em barris em longas viagens precisavam de proteção.'),
            match('Ligue o momento da fortificação ao exemplo', [['Antes da fermentação', 'Vins de liqueur e mistelles'], ['Durante a fermentação', 'Porto'], ['Depois da fermentação', 'Jerez']], 'O momento da adição de aguardente define o estilo do fortificado.'),
            mc('O que acontece com um mosto fortificado antes de fermentar?', 'Nunca fermenta completamente', ['Fermenta duas vezes', 'Fica totalmente seco', 'Vira vinagre'], 'É o caso dos vins de liqueur e mistelles franceses.'),
            mc('Qual destes é um vin doux naturel do sul da França, com fermentação parada?', 'Muscat de Beaumes-de-Venise', ['Tokaji', 'Sauternes', 'Moscato d\'Asti'], 'Os VDN têm a fermentação parada por álcool neutro.')
          ] },
        { id: 'for-2', title: 'Origens do Porto', level: 'medio',
          tip: 'Fortificar durante a fermentação deixa açúcar residual e risco de refermentação. Mesmo assim, os mercadores ingleses passaram a fazê-lo desde 1754, e a fórmula atual do Porto surgiu por volta de 1775.',
          questions: [
            mc('Em que ano surgiu, por volta, a fórmula atual do Porto?', '1775', ['1654', '1850', '1904'], 'A prática começou de forma esporádica no início de 1700 e só foi uniformizada depois de 1850.'),
            mc('Quem passou a adicionar aguardente a vinhos em fermentação desde 1754?', 'Mercadores ingleses', ['Monges franceses', 'Viticultores gregos', 'Comerciantes holandeses'], 'A prática foi vista como "diabólica" por temerem um vinho instável.'),
            mc('Qual o risco de fortificar antes do fim da fermentação?', 'Fica açúcar residual e pode haver refermentação', ['O vinho fica sem cor', 'A uva não amadurece', 'A casca se desfaz'], 'Isso preocupava os ingleses em 1754.'),
            mc('Fermentar o vinho seco antes e fortificá-lo depois...', 'Não traz riscos de açúcar residual', ['Deixa o vinho muito doce', 'Exige o dobro de aguardente', 'Impede a maturação'], 'Um seco fermentado e depois fortificado não traz esses riscos.'),
            mc('Como a adição de 1-2 graus de álcool ajudou os primeiros vinhos do Douro?', 'Reduziu os riscos de instabilidade', ['Aumentou a produção de uvas', 'Substituiu a pisa', 'Dispensou o transporte'], 'Foi assim que começaram os vinhos do Douro.'),
            mc('Por que o Porto é descrito como um dos vinhos mais supervisionados do mundo?', 'Cada etapa é controlada por autoridades', ['Porque é feito só por cooperativas', 'Porque não usa aguardente', 'Porque nunca é blendado'], 'Baseia-se em blends antigos e o conhecimento do enólogo é insubstituível.')
          ] },
        { id: 'for-3', title: 'Uvas, colheita e esmagamento do Porto', level: 'medio',
          tip: 'Todas as uvas do Porto são colhidas à mão. Algumas quintas ainda pisam em lagares de granito, mas hoje usa-se também o esmagamento mecânico. As castas permitidas somam nove, e só seis entram nos melhores vinhos.',
          questions: [
            mc('Como são colhidas as uvas do Porto?', 'À mão', ['Com máquinas de arrasto', 'Com colheitadeiras vibratórias', 'Com drones'], 'A geografia do Douro não favorece a colheita mecânica.'),
            mc('O que é um lagar?', 'Tanque raso de granito ou ardósia onde se pisa a uva', ['Barril de 523 L', 'Tipo de prensa pneumática', 'Cuba de concreto fechada'], 'Algumas quintas ainda pisam a pé, com grupos animados por música.'),
            mc('Quantas castas são permitidas no Porto e quantas entram nos melhores vinhos?', 'Nove permitidas, seis nos melhores', ['Doze permitidas, nove nos melhores', 'Seis permitidas, todas usadas', 'Vinte permitidas, dez nos melhores'], 'A localização dos vinhedos também importa.'),
            mc('Qual destas é uma casta tinta do Porto?', 'Touriga Nacional', ['Gouveio', 'Viosinho', 'Malvasia Fina'], 'As outras são Touriga Franca, Tinta Roriz, Tinta Barroca, Tinto Cão e Tinta Amarela.'),
            mc('Qual destas é uma casta do Porto branco?', 'Gouveio', ['Tinta Roriz', 'Tinto Cão', 'Touriga Franca'], 'Viosinho e Malvasia Fina também compõem o Porto branco.'),
            mc('Em anos quentes no Douro, o que se faz com os engaços no esmagamento mecânico?', 'Não são removidos', ['São sempre removidos', 'São fervidos', 'São prensados à parte'], 'Em anos frios são retirados porque as uvas retêm mais acidez e amargor de taninos.'),
            mc('Qual destes tanques é o mais tradicional para pisar e fermentar o Porto?', 'Lagar de granito ou ardósia', ['Tonel de inox', 'Barrica de 225 L', 'Ânfora'], 'É o mesmo recipiente em que se faz a pisa.')
          ] },
        { id: 'for-4', title: 'Fermentação e fortificação do Porto', level: 'avancado',
          tip: 'A maior parte dos Portos não é pisada: usa tanques que imitam a extração, como o autovinificador. A fermentação é parada quando cerca de um terço do açúcar virou álcool, e a aguardente (76-80% de álcool) responde por cerca de 20% do volume.',
          questions: [
            mc('Como funciona o autovinificador Ducellier?', 'A pressão do CO2 da fermentação empurra o mosto sobre o chapéu', ['Uma bomba esguicha ar quente', 'Os cachos são pisados por rolos', 'Usa leveduras da flor'], 'Em sistema fechado, a agitação violenta extrai cor e compostos em pouco tempo.'),
            mc('Qual método de fermentação do Porto é descrito como o mais gentil e difundido hoje?', 'Tanque aberto', ['Lagar com pisadores', 'Autovinificador fechado', 'Fermentação em barrica'], 'No tanque aberto o contato com o ar é menor e exige resfriamento.'),
            mc('Quando a fermentação do Porto é interrompida?', 'Quando cerca de 1/3 do açúcar virou álcool', ['Quando todo o açúcar acabou', 'Antes de a levedura agir', 'Só após dois anos'], 'A fortificação então eleva o teor alcoólico.'),
            mc('Qual é a faixa de graduação da aguardente vínica usada no Porto?', '76 a 80% de álcool', ['40 a 45%', '55 a 60%', '95 a 96%'], 'A "assinatura" de cada casa é única e muitas vezes secreta.'),
            mc('Aproximadamente que parte do volume do mosto é aguardente?', 'Cerca de 20%', ['Cerca de 2%', 'Cerca de 50%', 'Cerca de 80%'], 'Ela é adicionada quando a fermentação deu algo entre 6 e 8% de álcool.'),
            mc('O que muda se a aguardente é adicionada mais cedo?', 'O vinho fica mais doce', ['O vinho fica mais seco', 'A cor desaparece', 'O vinho vira branco'], 'Uma mutage tardia dá um Porto menos adocicado.'),
            mc('O que acontece se a mistura de álcool e vinho não alcançar o teor desejado?', 'A lei permite um ajuste alcoólico, a lota', ['O lote é descartado', 'Adiciona-se vinho branco', 'Para-se a fermentação outra vez'], 'A lota corrige o teor alcoólico final.'),
            order('Ordene as etapas da elaboração do Porto', ['Colheita à mão', 'Esmagamento ou pisa', 'Início da fermentação com extração', 'Fortificação com aguardente (a fermentação para)', 'Maturação e blend'], 'A fortificação ocorre antes do fim da fermentação, deixando açúcar residual.')
          ] },
        { id: 'for-5', title: 'Aguardente, prensagem e estabilização', level: 'avancado',
          tip: 'O caráter do Porto depende da aguardente, que as casas querem o mais neutra possível. Depois vêm a prensagem, a estabilização a frio e a clarificação antes do engarrafamento.',
          questions: [
            mc('Que tipo de aguardente as casas de Porto procuram?', 'A mais neutra possível', ['A mais aromática', 'A com sabor de madeira', 'A de cereais fermentados'], 'O caráter do vinho depende da qualidade da aguardente.'),
            mc('A aguardente do Porto precisa ser portuguesa?', 'Não; hoje boa parte vem da França', ['Sim, por lei', 'Sim, só do Douro', 'Só pode vir da Espanha'], 'Até 1991 o Estado devia fornecê-la, via Casa do Douro.'),
            mc('Que tipo de prensa serve para extrair o máximo de suco no Porto?', 'Prensas contínuas ou tipo Vaslin', ['Prensas de rosca manual', 'Pés de pisadores', 'Prensa a vácuo de gelo'], 'Ainda há cor e taninos remanescentes, que somam equilíbrio e complexidade.'),
            mc('Qual é o efeito da estabilização a frio de Portos jovens?', 'Remove cristais de tartarato antes de engarrafar', ['Adiciona açúcar', 'Escurece o vinho', 'Fixa os taninos'], 'Os vinhos são resfriados até -10 °C.'),
            mc('Qual o agente de clarificação mais usado em Portos de madeira?', 'Gelatina', ['Gesso', 'Carvão ativado', 'Cera de abelha'], 'Velhos Tawnies talvez nem precisem, pois foram muito trasfegados.'),
            mc('Quando começa a degustação dos Portos para definir seu destino?', 'Logo após a fermentação, e segue durante a maturação', ['Só após 10 anos', 'Apenas no engarrafamento', 'Nunca, usa-se análise química'], 'O estilo preciso pode levar anos para se definir.')
          ] },
        { id: 'for-6', title: 'Estilos: Ruby, Tawny e outros', level: 'avancado',
          tip: 'Os Portos se dividem em famílias: a Tawny (oxidativa, em madeira pequena) e a Ruby (juvenil, em tonéis grandes). O tamanho do recipiente controla a oxidação e, com ela, o estilo.',
          questions: [
            mc('Que recipiente mantém a juventude e favorece o estilo Ruby?', 'Grandes tonéis', ['Pipas de 523 L', 'Barris pequenos usados', 'Garrafões de vidro'], 'Os tonéis têm de 100 a 1.000 hl, com menor oxidação.'),
            mc('Qual é a capacidade de uma pipa do Porto?', '523 L', ['225 L', '650 hl', '50.000 L'], 'Barris de 650 L e pipas dão mais oxidação e cor mais pálida (Tawny).'),
            mc('O que a oxidação produz no Tawny?', 'Aldeídos, com aroma de amêndoa e cor marrom', ['Cheiro de petróleo', 'Cor azul intensa', 'Aumento de tanino'], 'O sabor de madeira não deve aparecer; prefere-se carvalho velho.'),
            mc('Por que os Tawnies são trasfegados regularmente nos primeiros anos?', 'Para remover depósitos, o que clarifica e dá brilho', ['Para adicionar fruta', 'Para evitar a oxidação total', 'Para ganhar açúcar'], 'A trasfega, porém, acelera a oxidação.'),
            mc('Quando se faz o blend de um Tawny velho?', 'Pouco antes do engarrafamento', ['Durante a fermentação', 'Todo ano, em escalas de solera', 'Só no momento da colheita'], 'Diferente do Jerez, que usa soleras de blending fracionado e gradual.'),
            mc('O que significa a indicação Tawny 10 anos?', 'A média de idade do blend não é inferior a 10 anos', ['Todo vinho tem 10 anos exatos', 'Estagiou 10 anos em inox', 'Foi engarrafado há 10 anos'], 'Maior parte tem 10 anos, com um pouco de vinhos mais jovens e mais velhos.'),
            mc('Qual destes estilos de Porto pertence à família Tawny?', 'Colheita', ['Vintage', 'Crusted', 'LBV'], 'Família Tawny: Tawnies, Colheita e Garrafeira. Família Ruby: Rubies, Crusted, LBV e Vintage.'),
            mc('Que perfil aromático tem um Porto Ruby?', 'Frutas vermelhas, couro, tabaco, cacau e chá', ['Pêssego e flores brancas', 'Mel e cera de abelha', 'Notas de pedra molhada'], 'São descritos como "gordos", aveludados e generosamente alcoólicos.')
          ] }
      ]
    },

    /* ======================= JEREZ ======================= */
    {
      id: 'jerez', title: 'Jerez (Sherry)', country: 'Vinhos fortificados',
      lessons: [
        { id: 'jer-1', title: 'Palomino, albariza e gesso', level: 'medio',
          tip: 'A Palomino dá um vinho de mesa fraco, mas brilha nas condições de Jerez, em solos de albariza. As uvas do Fino recebem gesso antes da prensa.',
          questions: [
            mc('Qual é a casta base do Jerez?', 'Palomino', ['Airén', 'Garnacha', 'Macabeo'], 'Fora do ambiente de Jerez, ela dá vinho de mesa fraco.'),
            mc('Que solo de Jerez é calcário-argiloso, branco e áspero?', 'Albariza', ['Xisto', 'Granito', 'Cascalho'], 'Nele a Palomino mostra seu melhor.'),
            mc('As uvas do Fino são prensadas rapidamente, mas depois de qual tratamento?', 'O emplastrado com gesso', ['A secagem ao sol', 'A fervura do mosto', 'A refrigeração a 0 °C'], 'O gesso é sulfato de cálcio, parte da albariza.'),
            mc('Quais efeitos o gesso traz na elaboração do Jerez?', 'Fermentação mais controlada, mais acidez e estímulo à flor', ['Mais cor e açúcar', 'Menos acidez e aromas', 'Impede a flor de crescer'], 'O gesso reage com o bitartarato de potássio e forma tartarato de cálcio insolúvel.'),
            mc('Quanto se prensa do suco potencial, no máximo, segundo o consejo regulador?', '70%', ['40%', '55%', '100%'], 'O mosto repousa cerca de 24 horas para decantar sólidos.'),
            mc('Para que servem as uvas secas ao sol sobre esteiras na região?', 'Para aumentar o açúcar, adoçando ou colorindo os vinhos', ['Para fazer o Fino', 'Para fortificar o vinho', 'Para fazer a flor'], 'São protegidas à noite por cobertas de plástico.'),
            mc('Qual era uma prática antiga de prensa em Jerez, abandonada há poucas décadas?', 'Prensar com botas cravejadas de pregos', ['Prensar com pedras de moinho', 'Prensar com gelo seco', 'Pisar com gado'], 'Foram substituídas por prensas mecânicas, como as horizontais ou infláveis.')
          ] },
        { id: 'jer-2', title: 'Fermentação e classificação inicial', level: 'medio',
          tip: 'Depois da fermentação, o jerez é classificado como Fino, Oloroso ou Rayas. O Fino é fortificado menos para preservar a flor; o Oloroso, até 18°.',
          questions: [
            mc('Em quais três categorias o jerez é classificado após a fermentação?', 'Fino, Oloroso e Rayas', ['Fino, Dulce e Cream', 'Manzanilla, Pale e Dry', 'Amontillado, Palo e Cream'], 'Rayas é a categoria inferior.'),
            mc('Qual das três categorias é a mais leve?', 'Fino', ['Oloroso', 'Rayas', 'Cream'], 'Olorosos, mais pesados, podem entrar em blends com vinhos doces.'),
            mc('Qual é a temperatura ideal do mosto para Finos?', 'Cerca de 25 °C', ['Cerca de 10 °C', 'Acima de 40 °C', 'Cerca de 0 °C'], 'Para Olorosos, abaixo de 30 °C.'),
            mc('Até que graduação o Oloroso é fortificado antes da solera?', '18°', ['10°', '12°', '25°'], 'Com mais álcool a flor não se forma; por isso o Oloroso fica sem flor.'),
            mc('Qual destes recipientes tradicionais é usado para fermentar o jerez?', 'Cubas de carvalho, concreto ou argila', ['Só garrafas', 'Apenas ânforas de vidro', 'Tanques de cobre'], 'Hoje muitas bodegas usam aço e materiais modernos.'),
            mc('O que aconteceria se um barril destinado a Fino virasse Oloroso?', 'Seria algo estranho: o Oloroso é feito de propósito', ['Seria considerado ideal', 'Viraria Manzanilla', 'Ganharia a flor'], 'Olorosos são mais fortes, expansivos e pungentes, e a qualidade de cada barril exige várias degustações.'),
            mc('O que acontece com a maior parte do açúcar na fase primária da fermentação?', 'Vira álcool, em três dias a uma semana', ['Fica intacto', 'Vira ácido acético', 'Precipita como cristais'], 'Depois vem uma fermentação secundária mais lenta, que desenvolve compostos orgânicos.')
          ] },
        { id: 'jer-3', title: 'A flor', level: 'avancado',
          tip: 'A flor é um véu de leveduras (Saccharomyces beticus) sobre o vinho. Ela protege do oxigênio, consome glicerol e acrescenta acetaldeídos e acetais. O Fino é moldado pela flor; o Oloroso, sem ela.',
          questions: [
            mc('O que é a flor no Jerez?', 'Um véu de leveduras que cresce na superfície do vinho', ['Um tipo de uva branca', 'Uma mistura de especiarias', 'Um resíduo de gesso'], 'É nativa da região e confere aroma e sabores característicos ao Fino.'),
            mc('Qual é a levedura que forma a flor?', 'Saccharomyces beticus', ['Brettanomyces bruxellensis', 'Botrytis cinerea', 'Oenococcus oeni'], 'Vem da mesma levedura (ou de uma das) da fermentação primária.'),
            mc('Quando a flor floresce mais?', 'Na primavera e no outono', ['No verão e no inverno', 'Só no inverno', 'Sempre igual'], 'Ela decai no verão e no inverno, em resposta à temperatura.'),
            mc('Por que o Oloroso não tem flor?', 'Foi fortificado com mais álcool, o que a impede', ['Porque é doce demais', 'Porque é guardado na geladeira', 'Porque é feito de uva tinta'], 'A flor protege o vinho do oxigênio; sem ela, o Oloroso depende só da fortificação.'),
            mc('O que a flor consome, afinando a textura do Fino?', 'Glicerol', ['Açúcar residual', 'Taninos', 'Ácido tartárico'], 'O resultado é o caráter "crocante" do Fino fresco.'),
            mc('Que compostos formados com a flor contribuem para o caráter rançoso?', 'Acetaldeídos e acetais', ['Mercaptanas e tióis', 'Pirazinas', 'Terpenos'], 'Mais de 100 voláteis afetam o sabor.'),
            mc('Sem a proteção da flor, o que pode acontecer com o jerez?', 'Virar vinagre', ['Ficar doce', 'Ganhar cor rosa', 'Aumentar o álcool de forma natural'], 'A flor protege do oxigênio e do ácido acético.'),
            mc('Por que se precisa acrescentar vinho jovem à solera de Fino?', 'Para manter a flor viva, que se alimenta de nutrientes', ['Para aumentar a doçura', 'Para dar cor', 'Para evitar a evaporação'], 'Os jovens "refrescam" os velhos e passam nutrientes à flor.')
          ] },
        { id: 'jer-4', title: 'O sistema de solera', level: 'avancado',
          tip: 'A solera é um grupo de barris com vinhos de idades diferentes. O mais velho fica no chão e é a própria solera; ao retirar vinho para engarrafar, repõe-se com o da escala acima. Os jovens assumem o caráter dos velhos.',
          questions: [
            mc('Onde fica o vinho mais velho num sistema de solera?', 'No nível do chão', ['No topo da pilha', 'Em barris à parte', 'Em tanques de inox'], 'Os mais novos ficam empilhados em escalas acima.'),
            mc('O que é a criadera?', 'A reserva de vinho jovem que alimenta a solera', ['O barril mais velho', 'A bodega que vende o vinho', 'A prensa de uvas'], 'Ela é ligeiramente mais nova que a solera.'),
            mc('Qual é o principal benefício do sistema de solera?', 'Consistência e qualidade do estilo, com blend de vinhos jovens e velhos', ['Produzir apenas vinhos de safra', 'Eliminar a flor', 'Reduzir a graduação'], 'Os vinhos jovens assumem o caráter dos velhos.'),
            mc('Como os vinhos de solera costumam ser comercializados?', 'Quase sempre em blend; os mais comerciais são adoçados com vinho doce', ['Sempre sem blend', 'Só em garrafões', 'Só como vinagre'], 'Os vinhos de solera saem totalmente secos; os comerciais são mistura de mais de uma solera.'),
            mc('O que é um almacenista?', 'Jerez de uma única solera, sem blend final nem adoçamento', ['Um barril de vinho jovem', 'Um adoçante tradicional', 'Um tipo de uva'], 'São vinhos de altíssima qualidade, expressão máxima da região.'),
            mc('Qual destas soleras demora muito mais a amadurecer?', 'A de Oloroso, que não tem flor', ['A de Fino', 'A de Manzanilla', 'A de vinho de safra'], 'A de Fino é uma "colmeia" de atividade.'),
            mc('Quantos cortes mínimos a lei espanhola exige antes de engarrafar um jerez de solera?', 'Três', ['Um', 'Vinte', 'Nenhum'], 'A Manzanilla chega a até dez cortes para manter o frescor.'),
            order('Ordene do mais novo ao mais velho em uma solera', ['Vinho de añada (muito novo)', 'Escala mais alta', 'Escala intermediária', 'Solera (nível do chão)'], 'O vinho muito novo só entra no estágio mais novo; o mais velho fica no chão, de onde sai o engarrafado.')
          ] },
        { id: 'jer-5', title: 'Adoçar e clarificar o jerez', level: 'avancado',
          tip: 'Todo jerez é seco ao sair da solera. Os doces vêm da mistura com vinho dulce: PX para os escuros e concentrados e Mistela para outros. A colagem com claras de ovo é a clarificação tradicional.',
          questions: [
            mc('Como são os jerez ao fim da elaboração, antes de qualquer blend?', 'Todos secos', ['Todos doces', 'Todos espumantes', 'Todos tintos'], 'Os doces vêm da mistura com vinho dulce.'),
            mc('Qual uva dá os Cream Jerez escuros e concentrados?', 'Pedro Ximenez (PX)', ['Palomino', 'Airén', 'Muscadelle'], 'Cream Jerez é um blend de Oloroso com vinho doce.'),
            mc('O que é a Mistela?', 'Mosto de uva Palomino passificada, usado para adoçar', ['Um vinagre envelhecido', 'Uma levedura da flor', 'Um tipo de barril'], 'Serve para adoçar outros jerez que não o PX.'),
            mc('Qual é a colagem tradicional do jerez?', 'Claras de ovo com "terra espanhola"', ['Gelatina e carvão', 'Leite em pó', 'Caseína pura'], 'A albumina atrai partículas e precipita.'),
            mc('Como clarificam as grandes bodegas?', 'Por filtração', ['Com claras de ovo', 'Por decantação em gelo', 'Em barris de cobre'], 'A colagem tradicional ficou para as bodegas pequenas.'),
            mc('Como é a aparência do jerez ao sair da solera?', 'Levemente turva', ['Totalmente cristalina', 'Espumante', 'Muito escura e densa'], 'Por isso ele é clarificado.'),
            mc('Os jerez de altíssima qualidade vendidos como almacenista:', 'Não são adoçados, de uma só solera', ['São sempre doces', 'Vêm de várias soleras', 'São todos Cream'], 'Expressão máxima da região.')
          ] },
        { id: 'jer-6', title: 'Estilos e serviço do jerez', level: 'expert',
          tip: 'Fino e Manzanilla pedem frescor, Amontillado traz calor amendoado e Oloroso, complexidade em camadas. A escolha também é de estação: Fino no verão, Amontillado no outono, Oloroso no inverno.',
          questions: [
            mc('Onde se produz a Manzanilla?', 'Em San Lúcar de Barrameda', ['Em Jerez de la Frontera', 'Em Montilla', 'Em Málaga'], 'No litoral úmido, onde a flor é mais espessa.'),
            mc('Como a Manzanilla se compara ao Fino?', 'Ligeiramente menos alcoólica e mais ácida', ['Bem mais doce', 'Muito mais alcoólica', 'Sem flor'], 'Deve ser consumida fresca, até seis meses após o engarrafamento.'),
            mc('Qual jerez é descrito com calor amendoado, maciez e redondeza antes do ataque seco final?', 'Amontillado', ['Cream', 'Oloroso', 'Manzanilla'], 'Tempo extra em barris dá mais aldeídos e mais álcool.'),
            mc('Como deve ser servido o Amontillado?', 'Sem resfriar', ['Gelado em balde de gelo', 'Aquecido', 'Congelado'], 'Fino no verão ou primavera; Amontillado no outono.'),
            mc('Que estilo de jerez não tem influência da flor e mostra complexidade em camadas?', 'Oloroso', ['Fino', 'Manzanilla', 'Palomino'], 'É intenso e concentrado; a preferência por Fino ou Oloroso é pessoal.'),
            mc('Qual combinação de estação e estilo foi indicada para o jerez?', 'Fino no verão, Oloroso no inverno', ['Oloroso no verão, Fino no inverno', 'Amontillado só no inverno', 'Fino só no outono'], 'É questão de gosto, não de qualidade.'),
            mc('Por que o Fino é melhor bebido fresco?', 'Perde frescor progressivamente nos meses de garrafa', ['Fica doce com o tempo', 'Escurece e ganha corpo', 'Ganha mais flor na garrafa'], 'Idealmente direto do barril ou poucos dias antes de engarrafar.'),
            match('Ligue o estilo à descrição', [['Fino', 'Moldado pela flor, cortante e crocante'], ['Manzanilla', 'Feita no litoral de San Lúcar'], ['Amontillado', 'Calor amendoado e maciez'], ['Oloroso', 'Sem flor, complexidade em camadas']], 'Cada estilo reflete o papel da flor e o tempo em barril.')
          ] }
      ]
    },

    /* ======================= MADEIRA E OUTROS ======================= */
    {
      id: 'madeira-outros', title: 'Madeira e outros fortificados', country: 'Vinhos fortificados',
      lessons: [
        { id: 'mad-1', title: 'Madeira: o que é e as castas', level: 'medio',
          tip: 'O Madeira não é um só vinho, mas um conjunto de estilos com origem na ilha e o aquecimento (estufagem) em comum. Quatro estilos levam nome de uva: Sercial, Verdelho, Bual e Malmsey.',
          questions: [
            mc('O que há em comum entre todos os tipos de Madeira?', 'A ilha de origem e o aquecimento na elaboração', ['A mesma uva', 'O mesmo teor de açúcar', 'O mesmo recipiente'], 'O aquecimento lembra os vinhos da Roma antiga.'),
            mc('Qual casta tinta é a principal na elaboração do Madeira, usada em muitos blends?', 'Negra Mole', ['Tinta Roriz', 'Touriga Nacional', 'Tannat'], 'Em muitos casos ela imita o estilo das castas nobres.'),
            mc('Qual é a ordem crescente de riqueza dos quatro estilos nobres?', 'Sercial, Verdelho, Bual, Malmsey', ['Malmsey, Bual, Verdelho, Sercial', 'Bual, Sercial, Malmsey, Verdelho', 'Verdelho, Sercial, Malmsey, Bual'], 'Do seco ao mais doce e concentrado.'),
            mc('Por que a Negra Mole aparece em quase todos os Madeira?', 'Porque a oferta das castas nobres diminuiu com oídio e filoxera', ['Por exigência legal', 'Porque é mais doce que todas', 'Porque dispensa estufagem'], 'Só os lotes mais finos escapam disso.'),
            mc('Qual é outro nome da Malmsey?', 'Alvasia', ['Sercial', 'Verdelho', 'Rainwater'], 'Malmsey é o estilo mais doce e escuro.'),
            order('Ordene os estilos nobres do mais seco ao mais doce', ['Sercial', 'Verdelho', 'Bual', 'Malmsey'], 'A doçura cresce nessa sequência.'),
            mc('O Madeira é descrito como o fortificado de sobremesa que:', 'Pode rivalizar com o grande Porto', ['É o mais frágil de todos', 'Só se bebe jovem', 'Não envelhece'], 'Sua história envolve a ilha, a navegação transatlântica e as longas viagens tropicais.')
          ] },
        { id: 'mad-2', title: 'Fermentação e fortificação do Madeira', level: 'avancado',
          tip: 'Sercial e Verdelho são vinificadas sem cascas, quase secas; Bual e Malmsey fermentam com as cascas e têm a fermentação interrompida por destilado, preservando doçura.',
          questions: [
            mc('Como são vinificadas a Sercial e a Verdelho?', 'Em branco, prensadas antes da fermentação, sem cascas', ['Com cascas, como tintas', 'Em barris de carvalho novo', 'Em ânforas de barro'], 'Resultam em vinhos mais secos.'),
            mc('Como são vinificadas a Bual e a Malmsey?', 'Esmagadas e fermentadas com as cascas, como tintas', ['Prensadas sem cascas', 'Sem fermentação', 'Em vinho espumante'], 'São até pisadas, como no Porto.'),
            mc('Como se interrompe a fermentação de Bual e Malmsey?', 'Com destilado', ['Com sulfato de cobre', 'Com choque térmico', 'Com leveduras mortas'], 'Hoje o destilado é de uva portuguesa do continente.'),
            mc('Até onde a Bual costuma fermentar antes de ser interrompida?', 'Até consumir cerca de metade do açúcar', ['Até secar completamente', 'Por seis meses', 'Só depois da estufagem'], 'A Malmsey é interrompida ainda mais cedo, retendo mais açúcar.'),
            mc('O que é o vinho surdo?', 'Mosto de fermentação interrompida por álcool, usado para adoçar e fortificar', ['Vinho sem aroma', 'Vinho de segunda prensa', 'Vinho velho de solera'], 'Serve para adoçar e fortificar Madeira.'),
            mc('Em que tipo de cuba costuma fermentar o Madeira?', 'Grandes cubas de concreto', ['Barricas novas de carvalho', 'Ânforas de argila', 'Barris de cobre'], 'O gosto de carvalho novo sumiria na estufagem.'),
            mc('Quando a Negra Mole é colhida, em agosto, como é fermentada no método sumário?', 'Quase seca, em cubas de concreto', ['Com leveduras da flor', 'Em barris de 650 L', 'Só com cascas por dez dias'], 'Depois é adoçada e fortificada com vinho surdo.')
          ] },
        { id: 'mad-3', title: 'Estufagem e maturação do Madeira', level: 'avancado',
          tip: 'A estufagem é um aquecimento lento que carameliza os açúcares. Já houve vários métodos: vinho da roda, canteiros ao sol, câmaras aquecidas e cubas aquecidas. O Madeira é o mais estável dos vinhos.',
          questions: [
            mc('O que é a estufagem?', 'Aquecimento lento do vinho, que carameliza os açúcares', ['Resfriamento brusco', 'Prensagem de uvas passas', 'Fermentação em barril'], 'Junto com a ilha de origem, é o que todos os tipos de Madeira têm em comum.'),
            mc('O que era o "vinho da roda"?', 'Madeira que viajava em navios pelos trópicos', ['Madeira envelhecido em roda de carvalho', 'Madeira servido em festas', 'Vinho de mesa da ilha'], 'O efeito do calor da viagem foi percebido no século XVIII.'),
            mc('O que são os canteiros?', 'Calor natural: pipas ao ar livre, em inclinação voltada ao sul', ['Cubas de aço aquecidas', 'Câmaras refrigeradas', 'Cavernas frescas'], 'É o método que usa o calor do sol.'),
            mc('Qual é o método mais comum de aquecimento para vinhos de boa qualidade?', 'Câmaras aquecidas (estufas)', ['Cubas de cerâmica com molas', 'Viagem de navio', 'Cozedura com fogo direto'], 'São armazéns com água quente.'),
            mc('Por que o resfriamento gradual é crítico, sobretudo para Sercial e Verdelho?', 'Porque não foram fortificadas antes do fim da fermentação, ficando vulneráveis', ['Porque evaporam todo o álcool', 'Porque precisam de gelo', 'Porque são muito doces'], 'O risco é acetificação e oxidação brutal.'),
            mc('O que se faz na trasfega do Madeira após o descanso?', 'Aeração intencional, vigorosa', ['Proteção total contra o ar', 'Adição de gás inerte', 'Congelamento'], 'O vinho é filtrado e aerado.'),
            mc('Por que o Madeira é chamado de o mais estável dos vinhos?', 'Resiste bem ao ar, com acidez volátil e aldeídos', ['Porque é muito doce', 'Porque é guardado em câmara fria', 'Porque não tem acidez'], 'Pode ficar muitos anos em cascos e garrafões de vidro em climas quentes.'),
            mc('Qual é o traço mais marcante do Madeira, segundo o crítico Michael Broadbent?', 'A acidez "impaciente", oscilante', ['O tanino aveludado', 'A baixa acidez', 'A cor transparente'], 'Esse caráter faz parte de seu perfil.')
          ] },
        { id: 'mad-4', title: 'Classificação dos Madeira', level: 'avancado',
          tip: 'Os Madeira se classificam por estilo e idade. As categorias de rótulo geral (Finest, Reserve, Special Reserve e Extra Reserve) crescem em idade mínima. Soleras e castas únicas têm regras próprias.',
          questions: [
            mc('Qual é o Madeira mais seco, de corpo leve e buquê de amêndoas?', 'Sercial', ['Malmsey', 'Bual', 'Verdelho'], 'Escurece e suaviza com a idade.'),
            mc('Qual Madeira é de cor escura, quase negra, e muito frutado?', 'Malmsey', ['Sercial', 'Verdelho', 'Finest'], 'É o estilo mais doce.'),
            mc('Qual é a idade mínima de um Madeira Finest/Choice/Selected?', '3 anos', ['1 ano', '10 anos', '20 anos'], 'Tipicamente de Negra Mole; o rótulo diz seco, médio ou doce, sem citar casta.'),
            mc('Qual é a idade mínima de um Madeira Reserve?', '5 anos', ['3 anos', '10 anos', '15 anos'], 'É um blend de safras, o mais jovem com ao menos 5 anos.'),
            mc('Qual é a idade mínima de um Extra Reserve?', '15 anos', ['5 anos', '10 anos', '30 anos'], 'Special Reserve e Old Reserve pedem 10 anos.'),
            mc('Se um Madeira Reserve cita uma casta no rótulo, qual é o mínimo exigido dessa casta?', '85%', ['50%', '60%', '100%'], 'Reserve é um blend de várias safras; a casta pode ser citada se atingir esse mínimo.'),
            mc('Qual é a idade-base de um Madeira de solera indicada no rótulo?', 'A data de fundação da solera, não a média de idade', ['A média de idade dos vinhos', 'O ano da última retirada', 'A data da safra mais jovem'], 'A data indicada é a de fundação da solera.'),
            order('Ordene as categorias por idade mínima crescente', ['Finest', 'Reserve', 'Special Reserve', 'Extra Reserve'], 'As idades mínimas são 3, 5, 10 e 15 anos.')
          ] },
        { id: 'mad-5', title: 'Tokay e Muscat australianos', level: 'avancado',
          tip: 'Os Muscats e Tokays de Rutherglen, no nordeste de Victoria, têm uvas passificadas, fermentação interrompida cedo e longo envelhecimento em madeira, com blend de idades.',
          questions: [
            mc('Em que região australiana se destacam os fortificados Muscat e Tokay?', 'Nordeste de Victoria, sobretudo em Rutherglen', ['Barossa Valley', 'Margaret River', 'Tasmânia'], 'A produção é muito limitada.'),
            mc('De que uva é feito o chamado Tokay australiano?', 'Muscadelle', ['Furmint', 'Hárslevelű', 'Sémillon'], 'O nome "Tokay" é uma forma incorreta de chamá-la.'),
            mc('Como as uvas ganham doçura em Rutherglen?', 'Por desidratação (passificação) no clima quente', ['Por botrytis intensa', 'Por colheita de gelo', 'Por adição de mel'], 'A botrytis não é bem-vinda, embora às vezes deixe marcas.'),
            mc('Quanto mais cedo a fermentação é interrompida, o que ocorre?', 'Mais aguardente é necessária e o vinho custa mais', ['Menos álcool é necessário', 'O vinho fica seco', 'O envelhecimento é dispensado'], 'Quanto mais cedo ela para, maior o custo do vinho.'),
            mc('De onde vem o caráter final desses fortificados?', 'Do envelhecimento prolongado em madeira, em blend de idades', ['De fermentação em inox gelado', 'De uvas colhidas imaturas', 'De filtração estéril'], 'Às vezes o calor é intensificado em barracões de ferro-ondulado.'),
            mc('O que acontece com os termos "Vintage" e "Porto Tawny" na Austrália desde o acordo com a UE?', 'Seu uso foi encerrado', ['Passaram a ser obrigatórios', 'Foram patenteados pelos australianos', 'Passaram a valer só no Chile'], 'O acordo foi em junho de 2005, e produtores dependem do reconhecimento das marcas.'),
            mc('Como mudou a elaboração australiana de vinhos estilo Vintage nos anos 90?', 'Castas portuguesas junto com Shiraz', ['Usam só Muscat', 'Abandonaram o carvalho', 'Passaram a fortificar após a fermentação'], 'São vinhos elegantes, que pedem pelo menos 20 anos em garrafa.')
          ] },
        { id: 'mad-6', title: 'Outros fortificados pelo mundo', level: 'expert',
          tip: 'Fortificados de outros países incluem os VDN do sul da França, o Málaga, os Portos do Novo Mundo (África do Sul, EUA e Austrália) e o antigo Vin de Constance, no Cabo.',
          questions: [
            mc('Qual uva predomina em Maury e Banyuls, de solos xistosos?', 'Grenache', ['Syrah', 'Mourvèdre', 'Carignan'], 'O Banyuls é produzido na fronteira espanhola e é talvez o VDN mais célebre.'),
            mc('Qual destes perfis descreve o Muscat de Frontignan?', 'Rico e untuoso, com cítricos, melão maduro e mel', ['Seco e mineral', 'Tânico e terroso', 'Leve e sem doçura'], 'O final é muito açucarado.'),
            mc('Qual VDN é descrito como o mais fino entre os Muscats, com acácia e flor-de-lis?', 'Saint-Jean-de-Minervois', ['Muscat de Frontignan', 'Maury', 'Banyuls'], 'É muito equilibrado e delicado.'),
            mc('Quais uvas aparecem no Málaga fortificado, além do moscatel?', 'Pedro Ximenez e airén', ['Palomino e Garnacha', 'Touriga e Tinta Roriz', 'Sercial e Verdelho'], 'Os vinhos são potentes, com aromas empireumáticos.'),
            mc('O que são aromas empireumáticos?', 'Notas de caramelo, torrefação e queimado', ['Notas florais', 'Notas de frutas frescas', 'Notas de mineral molhado'], 'No Málaga, aparecem junto com especiarias e frutas cozidas.'),
            mc('Qual perfil tem o Banyuls feito pelo método não oxidativo?', 'Cerejas em licor, cassis e alcaçuz', ['Mel e cera de abelha', 'Nozes e couro velho', 'Flores brancas'], 'Precisa de muito tempo para domar os taninos.'),
            mc('Que uva deu origem ao Vin de Constance, fortificado de sobremesa famoso do Cabo?', 'Muscat', ['Pinotage', 'Chenin Blanc', 'Syrah'], 'Foi famoso nos séculos XVIII e XIX.'),
            mc('Qual clima caracteriza Paarl, na África do Sul, para fortificados?', 'Muito quente, com vinhos ricos e às vezes excessivamente doces', ['Frio e seco', 'Úmido e frio', 'Neblina constante'], 'Os vinhos são encorpados.')
          ] }
      ]
    }
  ]);
})();
