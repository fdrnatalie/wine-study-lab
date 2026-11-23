/**
 * Curso, Módulo 1 · Enologia (Introdução à Enologia): qualidade e composição do vinho, maturação, vindima,
 * vinificação em branco, tinto e rosado, malolática, barrica, espumantes (Champagne e Charmat) e viticultura
 * sustentável/orgânica/biodinâmica. Fatos reescritos com palavras próprias; itens duvidosos ficaram de fora.
 */
CourseKit.add((function () {
  var mc = CourseKit.mc, match = CourseKit.match, order = CourseKit.order;
  var MOD = 'Módulo 1 · Enologia';

  var eno = {
    id: 'enologia-intro', title: 'Introdução à enologia', country: MOD,
    lessons: [
      { id: 'eno-1', title: 'O que é qualidade no vinho', level: 'medio',
        tip: 'A qualidade começa na uva sadia e equilibrada. O vinho de qualidade tem equilíbrio, ausência de defeitos e personalidade, e passa por fases como a vida: nascimento, crescimento, apogeu e declínio.',
        questions: [
          mc('Quem concebe e elabora o vinho conforme as uvas disponíveis?', 'O enólogo', ['O sommelier', 'O maître', 'O importador'], 'Na analogia com a arte, o enólogo é o artista; o sommelier ou maître apresenta e o cliente aprecia.'),
          mc('Qual característica define uma uva de qualidade para vinho?', 'Vir de vinhedo sadio, sem podridão, com composição equilibrada', ['Ter casca muito fina e pouco açúcar', 'Ser colhida ainda verde', 'Ter muitos cachos por planta'], 'A uva boa amadurece bem, não apodrece por fungos e tem açúcares, ácidos, polifenóis e polissacarídeos em equilíbrio.'),
          mc('Quais compostos devem estar em equilíbrio numa uva de qualidade?', 'Açúcares, ácidos, polifenóis e polissacarídeos', ['Só açúcares e álcool', 'Apenas ácidos e minerais', 'Vitaminas e proteínas'], 'É essa composição rica e equilibrada que dá base a um vinho de qualidade.'),
          mc('O que caracteriza um vinho de qualidade?', 'Equilíbrio, ausência de defeitos e forte personalidade', ['Teor alcoólico máximo', 'Cor muito escura', 'Ausência total de acidez'], 'O vinho deve dar sensação imediata e complexa na visão, no paladar e no olfato.'),
          mc('A qualidade do vinho está ligada a qual outra característica?', 'À longevidade', ['À pressa de engarrafar', 'Ao uso de açúcar adicionado', 'À cor do vidro da garrafa'], 'Qualidade e longevidade andam juntas e ambas influenciam o valor agregado.'),
          order('Ordene as fases da evolução do vinho, como na vida humana', ['Nascimento (elaboração)', 'Crescimento (estabilização)', 'Apogeu', 'Declínio (envelhecimento)'], 'O nascimento corresponde às fermentações alcoólica e malolática; depois vêm a estabilização, o apogeu e o declínio.')
        ] },
      { id: 'eno-2', title: 'De que o vinho é feito', level: 'medio',
        tip: 'O vinho é água, álcool (sobretudo etílico), ácidos orgânicos, açúcares, polifenóis, minerais, proteínas, polissacarídeos, vitaminas e compostos aromáticos.',
        questions: [
          mc('Qual é o principal álcool do vinho?', 'Etílico', ['Metílico', 'Propílico', 'Butílico'], 'O álcool etílico é o principal álcool do vinho.'),
          mc('Qual destes é um ácido orgânico importante do vinho?', 'Tartárico', ['Sulfúrico', 'Clorídrico', 'Nítrico'], 'Os principais são tartárico, málico, cítrico e lático.'),
          mc('Qual componente ajuda a manter moléculas em suspensão e contribui para a longevidade?', 'Polissacarídeos', ['Vitaminas', 'Minerais', 'Ácido cítrico'], 'Os polissacarídeos têm esse papel de suspensão e de apoio à longevidade do vinho.'),
          mc('Qual grupo de compostos determina, direta ou indiretamente, a qualidade dos tintos?', 'Polifenóis', ['Vitaminas', 'Proteínas', 'Minerais'], 'Os polifenóis, sobretudo antocianinas e taninos, pesam muito na qualidade dos tintos.'),
          mc('Quais são os polifenóis de maior interesse no vinho?', 'Antocianinas e flavanóis (taninos)', ['Glicose e frutose', 'Málico e lático', 'Terpenos e pirazinas'], 'Antocianinas dão cor; taninos ligam-se à cor, ao gosto e ao corpo.'),
          mc('O que o açúcar presente no vinho depende de?', 'Do tipo de vinho', ['Da cor do rótulo', 'Apenas do tamanho da garrafa', 'Do mês de engarrafamento'], 'A quantidade de açúcar varia conforme o tipo de vinho produzido.')
        ] },
      { id: 'eno-3', title: 'Antocianinas, taninos e aromas', level: 'avancado',
        tip: 'Antocianinas dão cor às uvas tintas e aos vinhos jovens; taninos dão corpo, adstringência e amargor. Os aromas se dividem em primários (da uva), secundários (da fermentação) e terciários (do envelhecimento).',
        questions: [
          mc('O que as antocianinas dão ao vinho?', 'A cor da uva tinta e dos vinhos jovens', ['O amargor', 'A acidez', 'O aroma de baunilha'], 'Elas se acumulam nas bagas tintas durante a maturação.'),
          mc('Quais sensações os taninos causam na boca?', 'Adstringência e amargor', ['Doçura e untuosidade', 'Frescor e efervescência', 'Calor alcoólico'], 'Os taninos também contribuem para o corpo do vinho.'),
          mc('Taninos, mesmo sem cor, reagem com as antocianinas. Qual o resultado?', 'Formam substâncias coloridas e participam da evolução da cor', ['Eliminam a cor do vinho', 'Produzem gás carbônico', 'Aumentam o açúcar'], 'Por isso os taninos estão ligados à cor além do gosto.'),
          mc('Como mudam os taninos conforme a uva amadurece?', 'Predominam as formas polimerizadas', ['Só aparecem no final', 'Desaparecem por completo', 'Ficam todos iguais'], 'No começo da maturação há muitas formas simples, sobretudo em sementes e cascas.'),
          mc('Quais as três classes de compostos dos aromas primários?', 'Pirazinas, carotenóides e terpenóis', ['Ésteres, aldeídos e lactonas', 'Taninos, ácidos e açúcares', 'Vanilina, eugenol e guaiacol'], 'Os aromas primários vêm da uva.'),
          match('Ligue o tipo de aroma à origem', [['Primários', 'Vêm da uva'], ['Secundários', 'Formados na fermentação'], ['Terciários', 'Formados no envelhecimento']], 'Aromas secundários vêm de leveduras e bactérias; terciários formam o buquê.'),
          mc('Nos vinhos brancos, os aromas são...', 'Marcadores importantes de qualidade', ['Irrelevantes', 'Sempre vindos da barrica', 'Só obtidos com chaptalização'], 'Mais de mil compostos aromáticos já foram identificados no vinho.')
        ] },
      { id: 'eno-4', title: 'O ciclo e a maturação da uva', level: 'medio',
        tip: 'O enólogo acompanha o ciclo da uva em quatro períodos: herbáceo, mudança de cor, maturação e sobrematuração. A maturação vai da mudança de cor até a colheita e dura de 40 a 50 dias.',
        questions: [
          order('Ordene os períodos do ciclo da uva acompanhados pelo enólogo', ['Herbáceo', 'Mudança de cor', 'Maturação', 'Sobrematuração'], 'O ciclo vai do grão verde até a uva que já não sintetiza mais açúcar.'),
          mc('O que acontece na mudança de cor das uvas tintas?', 'Passam do verde ao roxo', ['Passam do roxo ao verde', 'Ficam transparentes', 'Ficam alaranjadas'], 'As brancas passam do verde ao verde-amarelado.'),
          mc('Como ficam fisicamente os grãos na mudança de cor?', 'Túrgidos, elásticos e mais macios', ['Duros e secos', 'Murchos', 'Cobertos de fungos'], 'A uva começa a amolecer.'),
          mc('Quanto dura a maturação, da mudança de cor até a colheita?', 'De 40 a 50 dias', ['De 5 a 10 dias', 'De 100 a 120 dias', 'De 6 meses'], 'Depende da cultivar e da região.'),
          mc('O que ocorre com o açúcar durante a maturação?', 'O teor de açúcar sobe', ['Cai até zero', 'Fica sempre igual', 'Vira álcool dentro da uva'], 'Ao mesmo tempo a uva amolece.'),
          mc('Quando começa a sobrematuração?', 'Quando não há mais síntese notável de açúcar nem queda apreciável de acidez', ['Quando a uva muda de cor', 'No momento da floração', 'Quando começa a fermentação'], 'Nessa fase, oscilações vêm de diluição pela chuva ou de dessecação pela seca.'),
          mc('Na sobrematuração sem muita chuva, o que acontece com a uva?', 'Desseca e perde peso', ['Ganha peso e água', 'Volta a ficar verde', 'Perde todo o açúcar'], 'Os polifenóis da casca continuam aumentando.')
        ] },
      { id: 'eno-5', title: 'Medindo o ponto de maturação', level: 'avancado',
        tip: 'O critério mais usado é o açúcar, medido em graus Babo ou Brix com refratômetro ou densímetro. A acidez, que cai ao longo da maturação, entra no cálculo do equilíbrio. Para tintos também importam os polifenóis.',
        questions: [
          mc('Qual é o critério mais usado para avaliar a maturação para vinho?', 'O teor de açúcar', ['A cor do engaço', 'O tamanho das folhas', 'O peso do cacho'], 'O vinho é a transformação do açúcar da uva em álcool e outros produtos.'),
          mc('O que faz a chaptalização?', 'Adiciona açúcar no início da fermentação', ['Remove o álcool do vinho', 'Acrescenta ácido ao mosto', 'Filtra as leveduras'], 'É usada onde o clima não deixa a uva acumular açúcar suficiente.'),
          mc('O que o grau Brix mede?', 'Sólidos solúveis totais, 90% deles açúcares', ['Apenas acidez', 'O pH do vinho', 'O teor de álcool final'], 'Já o grau Babo indica a porcentagem de açúcar na amostra de mosto.'),
          mc('Qual aparelho de bolso lê o açúcar de uma gota de mosto no vinhedo?', 'Refratômetro', ['Alambique', 'Pipeta de Pasteur', 'Cronômetro'], 'No laboratório usam-se também mostímetro ou densímetro em proveta, com termômetro e tabela de correção.'),
          mc('Quais são os açúcares predominantes da uva?', 'Glicose e frutose', ['Sacarose e lactose', 'Maltose e xilose', 'Só sacarose'], 'No início da maturação domina a glicose.'),
          mc('O que é a maturação tecnológica quanto aos açúcares?', 'O ponto em que glicose e frutose se equivalem', ['Quando só há glicose', 'Quando todo açúcar vira álcool', 'Quando a uva é colhida verde'], 'Na sobrematuração a frutose passa a ser maior.'),
          mc('Como a acidez da uva evolui desde a mudança de cor?', 'Diminui, chegando a 5-10 g/L', ['Aumenta sem parar', 'Fica sempre igual', 'Desaparece por completo'], 'Ao contrário dos açúcares, os ácidos caem.'),
          mc('Que técnica dosa cada açúcar ou ácido individualmente com grande precisão?', 'HPLC (cromatografia líquida de alta performance)', ['Refratometria de bolso', 'Densímetro caseiro', 'Prova de degustação'], 'A acidez total do mosto, por sua vez, se mede por titulação.')
        ] },
      { id: 'eno-6', title: 'Taninos da uva: casca, semente e engaço', level: 'expert',
        tip: 'As antocianinas ficam só nas cascas; os taninos, nas cascas e sementes. Os taninos da parede celular da casca são os mais importantes, os das sementes são ásperos e os do engaço adstringentes e amargos.',
        questions: [
          mc('Onde ficam as antocianinas da uva?', 'Só nas cascas', ['Só nas sementes', 'No engaço', 'Na polpa'], 'Os compostos fenólicos em geral estão no engaço, nas sementes e nas películas.'),
          mc('Como são os taninos da parede celular das cascas?', 'Arredondados e carnosos, sem amargor nem adstringência', ['Ásperos e agressivos', 'Sem sabor algum', 'Muito amargos'], 'Estão presos a longas cadeias de polissacarídeos e dão vinhos encorpados e aveludados.'),
          mc('Como são os taninos das sementes?', 'Oligoméricos, agressivos e ásperos', ['Doces e macios', 'Arredondados e aveludados', 'Sem efeito no vinho'], 'Em excesso dão caráter rústico ao vinho.'),
          mc('Por que os taninos ligados à membrana vacuolar são difíceis de extrair?', 'A membrana é fosfolipídica e só cede com álcool suficiente', ['Estão no engaço', 'Ficam no fundo da barrica', 'Só aparecem na malolática'], 'Só saem quando há álcool para desagregar a parte lipídica.'),
          mc('Qual a característica dos taninos livres?', 'Moléculas pequenas, adstringentes, quase só nas sementes', ['Grandes cadeias aveludadas', 'Presentes só no engaço', 'Sem sabor'], 'Eles reagem forte com as proteínas da saliva.'),
          mc('Na vinificação normal de tintas, o que o álcool faz com a semente?', 'Dissolve a cutícula lipídica e libera aos poucos os taninos externos', ['Endurece a semente', 'Destrói todos os taninos', 'Transforma em açúcar'], 'Assim os taninos das camadas externas passam ao vinho gradualmente.')
        ] },
      { id: 'eno-7', title: 'Viticultura sustentável, orgânica e biodinâmica', level: 'avancado',
        tip: 'A viticultura sustentável busca qualidade com práticas ambiental e socialmente sustentáveis. O vinho orgânico vem de uvas sem químicos de síntese, o biodinâmico segue princípios de Rudolf Steiner e o vinho natural não tem certificação oficial.',
        questions: [
          mc('Quem estabeleceu a agricultura biodinâmica, em 1924?', 'O austríaco Rudolf Steiner', ['O francês Louis Pasteur', 'O italiano Carlo Gancia', 'O monge Dom Pérignon'], 'O método mistura técnicas sustentáveis com conceitos esotéricos e se baseia na antroposofia.'),
          mc('Qual a relação entre o cultivo biodinâmico e o orgânico?', 'Todo biodinâmico é orgânico, mas nem todo orgânico é biodinâmico', ['São sinônimos', 'O biodinâmico usa agrotóxicos', 'O orgânico é sempre biodinâmico'], 'A biodinâmica segue os princípios de Rudolf Steiner e se baseia na antroposofia.'),
          mc('Como é feito o preparado biodinâmico 500?', 'Chifre de vaca recheado com esterco e enterrado no inverno', ['Quartzo moído em chifre de touro', 'Chá de camomila fermentado', 'Cinzas de casca de carvalho'], 'Depois de escavado, o material é espalhado pelo vinhedo. Nunca se usa chifre de touro.'),
          mc('De que é feito o preparado 501 (chifre-sílica)?', 'De quartzo', ['De esterco', 'De urtiga', 'De cal'], 'É chamado preparado da Luz.'),
          mc('Qual preparado biodinâmico é feito de camomila?', '503', ['500', '501', '507'], 'O 504 é de urtiga, o 505 de casca de carvalho, o 506 de dente-de-leão e o 507 de valeriana.'),
          mc('Qual certificadora de produção biodinâmica tem, no Brasil, o IBD Certificações?', 'Demeter', ['OIV', 'Champagne Comité', 'Slow Wine'], 'Nem todo produtor busca a certificação, que é cara e demorada.'),
          mc('O que caracteriza o vinho orgânico?', 'Vem de uvas cultivadas sem fertilizantes, pesticidas, fungicidas e herbicidas químicos', ['Não usa nenhuma levedura', 'É feito sem fermentação', 'Nunca passa por barrica'], 'Contra pragas usam-se apenas produtos naturais.'),
          mc('Por que o vinho "natural" é uma classificação controversa?', 'Não há órgão que o certifique nem regra universal', ['É proibido por lei', 'Tem certificação obrigatória', 'Só existe na França'], 'A ideia geral é intervir o mínimo possível no cultivo e na vinificação.')
        ] }
    ]
  };

  var vin = {
    id: 'vinificacao-basica', title: 'Vinificação passo a passo', country: MOD,
    lessons: [
      { id: 'vin-1', title: 'Vindima e recepção das uvas', level: 'medio',
        tip: 'A vindima é a colheita, em janeiro a abril no hemisfério sul e de setembro a meados de novembro no norte. Colhe-se em dia de sol, com cachos sãos e transporte rápido, e o produtor é pago conforme sanidade e açúcar.',
        questions: [
          mc('Quando ocorre a vindima no hemisfério sul?', 'De janeiro a abril', ['De setembro a novembro', 'De junho a agosto', 'Em dezembro apenas'], 'No hemisfério norte vai de setembro a meados de novembro.'),
          mc('Quando ocorre a vindima no hemisfério norte?', 'De setembro a meados de novembro', ['De janeiro a abril', 'De maio a junho', 'De dezembro a fevereiro'], 'No hemisfério sul a vindima vai de janeiro a abril.'),
          mc('Qual o momento ideal para colher?', 'Quando o mosto atinge o maior teor de açúcar possível', ['Assim que a uva muda de cor', 'Quando a acidez chega a zero', 'No primeiro dia de calor'], 'Perto da vindima, amostras são medidas a cada 2 ou 3 dias.'),
          mc('Quando se colhe, segundo o acompanhamento da densidade do mosto?', 'Quando o açúcar não sobe mais entre três medições', ['Na primeira medição', 'Quando a densidade cai', 'Quando chove'], 'O acompanhamento é anotado num gráfico de densidade por número de medições.'),
          mc('Por que colher em dias de sol?', 'A chuva dilui o mosto e favorece fungos e bactérias', ['O sol deixa a uva mais azeda', 'O sol aumenta o engaço', 'A chuva escurece o vinho'], 'Cachos molhados absorvem água.'),
          mc('Que cuidados se tem com os cachos na colheita e no transporte?', 'Pequenas caixas, sem folhas ou terra, transporte rápido', ['Sacos grandes empilhados', 'Deixar dias no campo', 'Misturar uvas podres'], 'Só cachos perfeitos devem seguir para a cantina, sem uvas podres.'),
          mc('Para que se usa o anidrido sulfuroso na recepção?', 'Como bactericida, protegendo de bactérias e de fermentação prematura', ['Para dar cor', 'Para adoçar o mosto', 'Para clarificar com ovos'], 'O anidrido sulfuroso é um gás bactericida.'),
          mc('Na recepção, por que se separam os tipos de uva?', 'O vinho de cada tipo é processado à parte', ['Para pesar menos', 'Para misturar depois na prensa', 'Para evitar o engaço'], 'Também são feitas análise de qualidade e pesagem; uva mais sã e açucarada vale mais.')
        ] },
      { id: 'vin-2', title: 'Desengaçamento, esmagamento e prensa', level: 'medio',
        tip: 'O desengaçamento separa os grãos dos engaços, que dariam taninos adstringentes e amargos. A desengaçadeira e os rolos de borracha rompem as bagas sem esmagar as sementes. Nos brancos, o mosto vai à prensa; nos tintos, vai direto à fermentação com as cascas.',
        questions: [
          mc('O que é o engaço?', 'O cabinho do cacho', ['A casca da uva', 'A semente', 'A levedura'], 'Também chamado ráquis, é adstringente e amargo.'),
          mc('Por que hoje o engaço normalmente não participa do vinho?', 'Daria muito tanino adstringente e amargo', ['Daria cor demais', 'Aumentaria o açúcar', 'Reduziria o álcool'], 'O mercado passou a pedir vinhos mais jovens, leves e frutados.'),
          mc('Como era a vinificação antiga, com pisadura e engaço?', 'Vinhos duros e adstringentes, que pediam cerca de 10 a 12 anos de guarda', ['Vinhos leves para beber logo', 'Vinhos sem taninos', 'Vinhos sempre espumantes'], 'Hoje a vinícola não espera tanto para vender.'),
          mc('Como a desengaçadeira solta os grãos?', 'Bastões giram em sentido contrário à grade e a força centrífuga solta os grãos', ['Corta cada baga com lâminas', 'Lava os cachos com água', 'Congela os engaços'], 'Os grãos passam pelos furos da grade e os engaços saem pela outra ponta.'),
          mc('Para que servem os dois rolos de borracha abaixo da desengaçadeira?', 'Romper as bagas sem esmagar as sementes', ['Prensar as cascas até secar', 'Misturar leveduras', 'Resfriar o mosto'], 'Os rolos giram em sentidos contrários e ficam afastados cerca de 1 cm.'),
          mc('Qual a diferença de destino do mosto após o desengaçamento?', 'Branco vai à prensa; tinto vai direto ao tanque com as cascas', ['Os dois vão à prensa', 'Os dois fermentam sem cascas', 'Branco fermenta com cascas e tinto sem'], 'Até o rompimento das bagas o processo é igual para brancas e tintas.'),
          mc('Como é a prensa tradicional para uvas brancas?', 'Cilindro de ripas de madeira separadas por cerca de 3 mm', ['Rolos de pedra', 'Tela de aço fechada', 'Cuba de vidro'], 'O mosto escorre pelas frestas; cascas e parte das sementes ficam retidas.'),
          mc('O que fica retido nas ripas da prensa de uvas brancas?', 'Cascas e parte das sementes', ['Todo o mosto', 'Só o engaço', 'As leveduras'], 'O branco é vinificado sem cascas; o tinto fermenta com elas.')
        ] },
      { id: 'vin-3', title: 'Mosto gota e preparo do mosto branco', level: 'avancado',
        tip: 'O grão tem três zonas: a externa é mais doce e menos ácida; a interna, junto às sementes, é mais ácida. O mosto que escorre sozinho ao romper a uva é o mosto gota, o de melhor qualidade, decantado a cerca de 4 °C.',
        questions: [
          mc('O que é o mosto gota?', 'O mosto que escorre sozinho ao romper a uva, de melhor qualidade', ['O mosto da última prensagem', 'O vinho depois da malolática', 'O mosto com sementes'], 'Vem da primeira zona do grão.'),
          mc('Como é o mosto da zona externa do grão?', 'Mais doce e menos ácido', ['Mais ácido e menos doce', 'Sem açúcar', 'Muito amargo'], 'As zonas internas são menos doces e mais ácidas.'),
          mc('Como é o mosto da zona junto às sementes?', 'Pouco doce e mais ácido', ['Muito doce e sem acidez', 'Idêntico ao da casca', 'Totalmente neutro'], 'É a terceira zona do grão, junto às sementes.'),
          mc('Em que tanque o mosto gota é decantado?', 'Em tanque de aço inox, com sólidos decantando por gravidade', ['Em barrica de carvalho', 'Em tanque de concreto aquecido', 'Em autoclave'], 'O mosto é bombeado da bandeja inferior da prensa.'),
          mc('A que temperatura o mosto branco decanta para não fermentar?', 'Cerca de 4 °C', ['Cerca de 25 °C', 'Cerca de 30 °C', 'Cerca de 40 °C'], 'A operação é feita a baixa temperatura.'),
          order('Ordene o caminho do mosto branco', ['Desengaçamento', 'Rompimento das bagas pelos rolos', 'Prensagem', 'Decantação em inox a baixa temperatura'], 'Os sólidos decantam por gravidade em tanque de inox, a baixa temperatura.')
        ] },
      { id: 'vin-4', title: 'A fermentação alcoólica', level: 'medio',
        tip: 'As leveduras transformam a glicose e a frutose da uva em álcool, gás carbônico, calor e centenas de compostos. Hoje usam-se leveduras selecionadas, ativadas num pé de cuba, em tanques de inox.',
        questions: [
          mc('Qual o agente biológico da fermentação alcoólica?', 'A levedura', ['A bactéria lática', 'O fungo da podridão', 'A enzima da barrica'], 'Ela transforma o açúcar da uva em álcool e gás carbônico.'),
          mc('Quais produtos a fermentação gera?', 'Álcool, gás carbônico, calor e centenas de compostos', ['Só água', 'Apenas ácido acético', 'Apenas açúcar'], 'Os açúcares naturais são frutose e glicose.'),
          mc('Onde as leveduras naturais ficam?', 'No ambiente e sobre as cascas das uvas', ['Só dentro das sementes', 'Somente dentro do tanque', 'Nas barricas novas'], 'Na vinificação antiga a fermentação começava ao esmagar.'),
          mc('Como hoje se fornecem as leveduras selecionadas?', 'Liofilizadas e ensacadas em pó', ['Colhidas no vinhedo', 'Em barris de mosto velho', 'Em cápsulas de gelo'], 'São produzidas em laboratório, como o fermento de pão.'),
          mc('O que é o pé de cuba?', 'Pequeno tanque (cerca de 100 L) onde se ativa a levedura com o próprio mosto', ['Um tipo de barrica', 'A base do autoclave', 'Um filtro de placas'], 'Depois de começar a atividade, ele é adicionado ao tanque de fermentação.'),
          mc('O que é o efeito killer das leveduras selecionadas?', 'Matam as leveduras indígenas', ['Matam as bactérias lácticas', 'Eliminam o açúcar', 'Evitam o chapéu'], 'As leveduras selecionadas têm esse efeito sobre as indígenas.'),
          mc('Qual o comportamento das leveduras enquanto há oxigênio dissolvido?', 'Só se reproduzem; a fermentação começa quando o meio fica anaeróbico', ['Fermentam em velocidade máxima', 'Morrem', 'Produzem só ácido lático'], 'A fermentação é tumultuosa e libera muito gás carbônico.'),
          mc('Qual vantagem do tanque de inox sobre a madeira antiga?', 'É inerte, fácil de limpar e conduz bem o calor', ['Dá aromas de baunilha', 'Deixa o vinho respirar', 'Aumenta a acidez'], 'O controle de temperatura é facilitado com cintas térmicas.')
        ] },
      { id: 'vin-5', title: 'Vinificação em branco', level: 'avancado',
        tip: 'O branco fermenta sem cascas entre 13 e 18 °C, em 7 a 10 dias. Abaixo de 13 °C a fermentação emperra; acima de 18 °C os aromas voláteis escapam com o gás carbônico. O resultado é um vinho-flor totalmente seco.',
        questions: [
          mc('Qual a faixa de temperatura de fermentação do vinho branco?', '13 a 18 °C', ['5 a 8 °C', '23 a 30 °C', '35 a 40 °C'], 'A temperatura é mantida constante até o fim.'),
          mc('Por que não passar de 18 °C na fermentação do branco?', 'Os voláteis aromáticos escapam com o gás carbônico', ['O vinho fica azedo na hora', 'O tanque racha', 'As leveduras viram bactérias'], 'Abaixo de 13 °C a fermentação fica muito difícil.'),
          mc('Quanto dura, em média, a fermentação do branco?', '7 a 10 dias', ['1 a 2 dias', '30 a 40 dias', 'Mais de 6 meses'], 'Termina quando o açúcar acaba e as leveduras morrem.'),
          mc('Como é o vinho-flor do branco ao fim da fermentação?', 'Totalmente seco, com sólidos em suspensão', ['Muito doce', 'Já filtrado e engarrafado', 'Espumante'], 'As leveduras consomem toda a frutose e a glicose.'),
          mc('Que sólidos o vinho recém-fermentado traz em suspensão?', 'Substâncias mucilaginosas, leveduras e restos de casca', ['Só açúcar cristalizado', 'Pedaços de madeira', 'Apenas gelo'], 'Por isso é bombeado para outro tanque e filtrado.'),
          mc('Que meios filtrantes se usam no branco?', 'Placas de celulose ou terra infusória', ['Peneiras de cobre', 'Panos de linho', 'Areia fina de rio'], 'O tanque seguinte é mantido a 2-4 °C.'),
          mc('Por que o branco é mantido frio depois da fermentação?', 'Para evitar a malolática e o engarrafamento prematuro', ['Para aumentar o álcool', 'Para escurecer a cor', 'Para criar espuma'], 'Em poucas semanas ele está pronto para engarrafar.')
        ] },
      { id: 'vin-6', title: 'Vinificação em tinto', level: 'avancado',
        tip: 'O tinto fermenta com as cascas, de onde vêm os pigmentos. A fermentação forma o chapéu, que é umedecido por remontagens para extrair cor. Fermenta mais quente que o branco, entre 23 e 30 °C.',
        questions: [
          mc('O que diferencia a vinificação em tinto da em branco?', 'A fermentação do mosto com as cascas (maceração)', ['O uso de gás inerte', 'A ausência de leveduras', 'O uso de rolhas'], 'O miolo das bagas é igual; o pigmento está na casca das tintas.'),
          mc('O que é o chapéu?', 'A camada de cascas que sobe durante a fermentação do tinto', ['A rolha do tanque', 'Uma tampa de barrica', 'Um tipo de filtro'], 'A fermentação levanta as cascas, formando uma camada grossa.'),
          mc('O que é a remontagem?', 'Bombear o mosto de baixo para cima, molhando o chapéu', ['Retirar as cascas', 'Aquecer o tanque', 'Adicionar açúcar'], 'Faz-se uma ou duas vezes ao dia para extrair cor.'),
          mc('Qual a faixa de temperatura de fermentação do tinto?', '23 a 30 °C', ['13 a 18 °C', '2 a 4 °C', '40 a 50 °C'], 'Abaixo de 23 °C é difícil extrair pigmentos.'),
          mc('O que acontece se o tinto fermenta bem acima de 30 °C?', 'Os aromas volatilizam e surge cheiro de coisas cozidas', ['A cor desaparece', 'Fica mais frutado', 'O álcool cai a zero'], 'O limite máximo é de cerca de 30 °C.'),
          mc('O que determina a intensidade da cor do tinto?', 'O tempo de contato das cascas com o mosto', ['A cor da garrafa', 'O número de rolhas', 'A quantidade de ovos na clarificação'], 'Quanto maior o contato, mais escuro o vinho.'),
          mc('Como se faz um tinto mais leve e menos colorido?', 'Drena-se o mosto para outro tanque, longe das cascas, para terminar de fermentar', ['Prolonga-se o contato até o fim', 'Adicionam-se mais engaços', 'Fermenta-se em autoclave'], 'Para um tinto mais encorpado, o contato é mais longo, às vezes até o fim da fermentação.'),
          mc('Para que serve o vinho de prensa, muito escuro?', 'Corrigir a cor do vinho principal', ['Fazer espumante', 'Substituir o licor de tiragem', 'Servir de levedura'], 'Vem das cascas prensadas depois de separar o vinho-flor.'),
        ] },
      { id: 'vin-7', title: 'Rosado, malolática e barrica', level: 'avancado',
        tip: 'O rosado é feito como o tinto, mas com contato curto com as cascas (18 a 30 horas). A malolática converte ácido málico em lático e é desejada nos tintos, mas evitada nos brancos. Os tintos de guarda passam por barricas de 225 L por 12 a 36 meses.',
        questions: [
          mc('Quanto dura o contato com as cascas na vinificação em rosado?', 'Normalmente 18 a 30 horas', ['2 a 3 dias seguidos', '10 a 18 dias', '1 a 2 horas'], 'Depois as cascas são separadas e a fermentação segue sem ganhar mais cor.'),
          mc('O que a fermentação malolática transforma?', 'Ácido málico em ácido lático', ['Glicose em frutose', 'Álcool em açúcar', 'Taninos em antocianinas'], 'O lático é mais fraco, então o vinho perde acidez naturalmente.'),
          mc('Por que a malolática é desejável em tintos novos?', 'Reduz a acidez fixa alta e indesejável', ['Aumenta a cor', 'Aumenta o açúcar', 'Cria espuma'], 'Ela é pouco tumultuosa, ao contrário da fermentação alcoólica.'),
          mc('Por que normalmente se evita a malolática nos brancos?', 'Para manter o frescor, já que a acidez ajuda os aromas frutados', ['Para escurecer a cor', 'Para elevar o álcool', 'Para aumentar o corpo'], 'Por isso brancos ficam frios até engarrafar.'),
          mc('Qual a capacidade da barrica bordalesa?', '225 litros', ['100 litros', '500 litros', '1.000 litros'], 'Normalmente é de carvalho europeu ou americano.'),
          mc('Por que a barrica é cheia por completo?', 'Para evitar excesso de oxigênio, que estraga o vinho', ['Para evitar a malolática', 'Para dar mais espuma', 'Para apressar a decantação'], 'Pelos poros passa só um pouco de ar, que condensa lentamente os taninos agressivos.'),
          mc('Quais aromas a tosta da barrica pode ceder?', 'Baunilha, cravo, café, chocolate e coco', ['Maçã verde e cítricos', 'Rosas e lichia', 'Pimentão e capim'], 'Vêm da queima interna da barrica.'),
          mc('Quanto tempo, em geral, o vinho fica em barrica?', 'De 12 a 36 meses', ['De 3 a 5 dias', 'De 7 a 10 anos', 'De 1 a 2 semanas'], 'Depende da legislação da região e da estrutura do vinho.')
        ] },
      { id: 'vin-8', title: 'Garrafa e engarrafamento', level: 'avancado',
        tip: 'Depois da barrica vem a segunda etapa do afinamento: a garrafa. O gás inerte evita oxidação, formam-se aromas terciários (buquê), e o engarrafamento é feito em linhas automatizadas, com cuidados de filtragem diferentes para brancos e tintos.',
        questions: [
          mc('Qual a segunda etapa de afinamento dos tintos de guarda, depois da barrica?', 'Ficar engarrafado na vinícola por mais tempo, geralmente um ano', ['Voltar ao tanque de inox', 'Ser fervido', 'Ser congelado'], 'Só depois disso o vinho é liberado para venda.'),
          mc('Que gás se sopra antes da rolha para evitar oxigênio?', 'Gás inerte, geralmente nitrogênio', ['Gás carbônico quente', 'Oxigênio puro', 'Ozônio'], 'Sem oxigênio ocorrem reações redutivas lentas.'),
          mc('O que se desenvolve na garrafa durante o envelhecimento?', 'Aromas terciários, o buquê', ['Aromas primários', 'Mais taninos livres', 'Mais açúcar'], 'Entram em ação esterificação e hidrólise.'),
          mc('Como as garrafas são lavadas antes do enchimento?', 'Com soda cáustica e vapor', ['Com vinagre', 'Só com água fria', 'Com álcool de cereais'], 'Elimina microrganismos e sujeira.'),
          mc('Por que o branco é filtrado de modo muito fino antes de engarrafar?', 'Para impedir que leveduras e bactérias sigam na garrafa', ['Para aumentar o corpo', 'Para ganhar cor', 'Para criar bolhas'], 'O branco passa por filtros milipore antes de engarrafar.'),
          mc('Por que o tinto não pode sofrer filtração muito restritiva?', 'Perderia cor e aromas', ['Ficaria sem álcool', 'Ficaria doce', 'Criaria espuma'], 'Uma filtração muito restritiva tira cor e aromas do tinto.'),
          mc('Após a malolática, que tintos já podem ser engarrafados?', 'Os leves ou de médio corpo, frutados e delicados', ['Os tintos de longa guarda', 'Apenas os rosados', 'Nenhum tinto'], 'Os encorpados de guarda seguem para barrica.'),
          order('Ordene o afinamento de um tinto encorpado de guarda', ['Fermentação alcoólica', 'Fermentação malolática', 'Barrica de 12 a 36 meses', 'Garrafa por cerca de um ano'], 'Barrica e garrafa são as duas etapas do afinamento.')
        ] }
    ]
  };

  var esp = {
    id: 'espumantes-champagne', title: 'Espumantes e Champagne', country: MOD,
    lessons: [
      { id: 'esp-1', title: 'Champagne: origem e região', level: 'medio',
        tip: 'Champagne é uma denominação de origem: só o espumante feito na região de Champagne, na França, com técnica determinada. A região é fria, de subsolo calcário, a cerca de 150 km a nordeste de Paris.',
        questions: [
          mc('O que significa dizer que Champagne é denominação de origem?', 'Só o espumante feito na região e com a técnica prevista pode usar o nome', ['Qualquer espumante pode usar o nome', 'É uma marca comercial', 'É um tipo de uva'], 'A AOC impõe regras, como limites geográficos e castas autorizadas.'),
          mc('A quem é atribuída a descoberta do Champagne?', 'Dom Pérignon, monge beneditino da Abadia de Hautvillers', ['Eugène Charmat', 'Rudolf Steiner', 'Carlo Gancia'], 'A abadia fica perto de Épernay.'),
          mc('Onde fica a região de Champagne?', 'Cerca de 150 km a nordeste de Paris', ['No litoral atlântico, no sudoeste', 'No sul, no Mediterrâneo', 'No vale do Loire'], 'Ao norte fica a Bélgica; ao sul, a Borgonha.'),
          mc('Em torno de quais cidades ficam os vinhedos de Champagne?', 'Reims, Épernay e Châlons-sur-Marne', ['Bordeaux, Pauillac e Margaux', 'Nantes, Angers e Tours', 'Marselha, Nîmes e Avignon'], 'Os vinhedos ficam em torno de Reims, Épernay e Châlons, junto ao rio Marne.'),
          mc('Como é o clima de Champagne?', 'Frio, com menos insolação que Bordeaux', ['Quente e seco', 'Tropical', 'Desértico'], 'A média anual é de cerca de 10,5 °C, e os vinhos têm baixo teor alcoólico.'),
          mc('Como é o subsolo de Champagne?', 'Calcário quase puro, macio, parecido com giz', ['Granito duro', 'Cascalho', 'Xisto escuro'], 'Foi fácil escavar túneis, que hoje servem para envelhecer o vinho.'),
          mc('Qual é a temperatura constante das caves da Moët & Chandon?', 'Cerca de 12 °C', ['Cerca de 0 °C', 'Cerca de 25 °C', 'Cerca de 35 °C'], 'A umidade é de cerca de 75%, ideal para envelhecimento lento e seguro.')
        ] },
      { id: 'esp-2', title: 'Uvas e terroirs de Champagne', level: 'avancado',
        tip: 'As três uvas principais são Chardonnay (branca), Pinot Noir e Pinot Meunier (tintas). Arbanne e Petit Meslier eram abundantes e hoje representam cerca de 1%. Os vinhedos têm uma escala de valor, e 17 são Grand Cru.',
        questions: [
          mc('Quais são as três uvas mais importantes de Champagne?', 'Chardonnay, Pinot Noir e Pinot Meunier', ['Riesling, Sylvaner e Pinot Gris', 'Merlot, Malbec e Syrah', 'Chenin Blanc, Gamay e Cabernet'], 'Uma branca e duas tintas.'),
          mc('Qual das uvas de Champagne é branca?', 'Chardonnay', ['Pinot Noir', 'Pinot Meunier', 'Gamay'], 'As outras duas são tintas.'),
          mc('Quanto representam hoje Arbanne e Petit Meslier?', 'Cerca de 1% do total', ['Cerca de 50%', 'Cerca de 25%', 'Cerca de 10%'], 'Antes eram abundantes.'),
          mc('Qual a função da Pinot Meunier no Champagne?', 'Dar estrutura; é a menos importante das três', ['Dar a acidez cítrica', 'Dar os aromas lácteos', 'Dar a cor rosada'], 'Chardonnay e Pinot Noir são as outras duas das três uvas principais.'),
          mc('Quantos vinhedos têm a classificação Grand Cru em Champagne?', '17', ['5', '40', '100'], 'Os de melhores uvas.'),
          mc('Qual o valor base que uma uva de Grand Cru recebe na escala do sindicato?', '100% do valor base por quilo', ['50%', '80%', '120%'], 'O limite mínimo na escala é 80%.'),
          mc('As grandes casas respondem por cerca de quanto da produção da região?', 'Cerca de 70%', ['Cerca de 10%', 'Cerca de 30%', 'Cerca de 100%'], 'A maioria das cerca de 15 mil propriedades fornece uvas às grandes casas.')
        ] },
      { id: 'esp-3', title: 'Champagne: da colheita à segunda fermentação', level: 'avancado',
        tip: 'A colheita é manual; o mosto é extraído lentamente e o vinho base fermenta em tanques. O assemblage gera o cuvée, ao qual se junta o licor de tiragem, e a segunda fermentação ocorre na própria garrafa (prise de mousse).',
        questions: [
          mc('Como é a colheita no Champagne?', 'Manual, em pequenas caixas plásticas', ['Mecanizada em sacos grandes', 'Só à noite', 'Apenas com podas verdes'], 'Caixas pequenas evitam pressão sobre as uvas.'),
          mc('O que é o assemblage?', 'A mistura de vinhos de várias uvas e anos para obter o padrão da casa', ['A prensagem das uvas', 'A limpeza do tanque', 'A degola'], 'Os enólogos preparam várias misturas e escolhem a melhor após provas.'),
          mc('O que é o cuvée?', 'O vinho base, feito em grandes tanques', ['A rolha', 'A garrafa', 'A cave subterrânea'], 'É o resultado do assemblage.'),
          mc('Do que é feito o licor de tiragem?', 'Vinho, leveduras e açúcar', ['Champagne velho e Cognac', 'Só mosto de uva', 'Água e gás'], 'É adicionado ao vinho base antes de engarrafar para a segunda fermentação.'),
          mc('O que é a prise de mousse?', 'A segunda fermentação na garrafa, que forma o gás', ['A prensagem das uvas', 'O corte dos vinhos', 'A retirada das leveduras'], 'Dura em média seis semanas.'),
          mc('O que acontece ao fim da prise de mousse?', 'As leveduras morrem por falta de açúcar e o espumante fica bem seco', ['Todo o álcool evapora', 'As bactérias assumem', 'O açúcar é multiplicado'], 'Elas consomem todo o açúcar.'),
          order('Ordene as etapas até a segunda fermentação', ['Colheita manual', 'Prensagem e primeira fermentação', 'Assemblage (cuvée)', 'Licor de tiragem e engarrafamento', 'Segunda fermentação na garrafa'], 'Só depois vêm o remuage e o dégorgement.')
        ] },
      { id: 'esp-4', title: 'Remuage, dégorgement e licor de expedição', level: 'avancado',
        tip: 'O remuage leva as leveduras para o gargalo; o dégorgement as expulsa congelando a ponta; o licor de expedição repõe o volume e define a doçura. Depois vêm a rolha, a gaiola e cerca de três meses de repouso.',
        questions: [
          mc('Para que serve o remuage?', 'Levar as leveduras mortas até a rolha, no gargalo', ['Misturar açúcar', 'Resfriar o vinho', 'Aquecer a garrafa'], 'As garrafas são inclinadas e giradas gradualmente.'),
          mc('Como se chama o profissional que gira as garrafas?', 'Remueur', ['Sommelier', 'Négociant', 'Dégorgeur'], 'Ele trabalha com o pupitre.'),
          mc('O que é o pupitre?', 'Armação de madeira com furos onde entram os gargalos', ['Um tipo de tanque', 'Uma prensa', 'Uma tampa'], 'Nele as garrafas são giradas e inclinadas aos poucos até as leveduras chegarem à rolha.'),
          mc('Quanto giro o remueur dá às garrafas por vez?', '90 graus', ['180 graus', '5 graus', '360 graus'], 'Ele também inclina as garrafas um pouco mais a cada giro.'),
          mc('O que é o dégorgement?', 'Expulsão das leveduras, congelando a ponta do gargalo', ['Corte dos vinhos', 'Segunda fermentação', 'Prensagem'], 'A ponta é mergulhada em solução refrigerante por cerca de 3 minutos.'),
          mc('O que expulsa a rolha de gelo na degola?', 'A pressão interna da garrafa', ['Um martelo', 'O vácuo', 'O calor do ambiente'], 'A tampinha é retirada com a garrafa em posição normal.'),
          order('Ordene as etapas finais do Champagne', ['Remuage', 'Dégorgement', 'Licor de expedição', 'Rolha e gaiola', 'Repouso e rotulagem'], 'O repouso de cerca de três meses homogeneíza o vinho com o licor.')
        ] },
      { id: 'esp-5', title: 'Estilos, safras, rosé e produtores', level: 'expert',
        tip: 'A maior parte do Champagne é brut; só o milésimé vem de uma única safra. O rosé pode ser feito por maceração ou juntando vinho tinto ao branco. A sigla de duas letras no rótulo indica o tipo de produtor.',
        questions: [
          mc('O que é um milésimé?', 'Um Champagne de uma só safra, considerada excepcional', ['Um Champagne sem açúcar', 'Um rosé com cascas', 'Uma garrafa de 1 litro'], 'Traz o ano da safra no rótulo.'),
          mc('Por que normalmente não se declara safra no rótulo?', 'O assemblage mistura anos diferentes', ['É proibido', 'Os anos sempre são iguais', 'O rótulo não comporta'], 'Só os milésimés trazem o ano.'),
          mc('Qual estilo de Champagne é o mais produzido hoje?', 'Brut', ['Doux', 'Demi-sec', 'Extra Sec'], 'Até meados do século XIX só havia Champagne doce.'),
          mc('O primeiro brut surgiu a pedido de quem?', 'De um cliente inglês, para acompanhar comida', ['De um rei francês', 'De um monge', 'De um sommelier italiano'], 'Na época, o pedido foi visto como excêntrico.'),
          mc('Como o Champagne rosé é feito atualmente por poucas casas?', 'Adicionando vinho tinto da região ao branco no assemblage', ['Adicionando corante', 'Fermentando só com engaço', 'Aquecendo o branco'], 'Esse método é feito por poucas casas, e o preço é mais alto.'),
          mc('Qual era o processo antigo do rosé?', 'Maceração com cascas até a cor desejada e depois fermentação em outro tanque', ['Mistura de dois vinhos brancos', 'Congelamento das cascas', 'Prensagem tripla'], 'Depois fazia-se a segunda fermentação na garrafa e 3 a 4 anos de envelhecimento.'),
          match('Ligue a sigla ao produtor', [['N.M.', 'Négociant Manipulant: compra uvas e produz o vinho'], ['C.M.', 'Cooperativa que vinifica as uvas dos cooperados'], ['M.A.', 'Marca auxiliar, que compra Champagne pronto e rotula']], 'As grandes marcas costumam ser N.M.'),
        ] },
      { id: 'esp-6', title: 'Charmat, Asti e Prosecco', level: 'avancado',
        tip: 'O método Charmat faz a segunda fermentação em grande tanque pressurizado (autoclave), sendo mais barato e menos trabalhoso. O Asti usa Moscato e é doce; o Prosecco, do Vêneto, também é Charmat.',
        questions: [
          mc('Quem concluiu em 1910 que o método clássico era complicado e sujeito a perdas?', 'O engenheiro francês Eugène Charmat', ['Dom Pérignon', 'Carlo Gancia', 'Rudolf Steiner'], 'Daí nasceu o método Charmat.'),
          mc('Em que tanque se faz o Charmat moderno?', 'Autoclave, vaso de pressão hermético', ['Barrica de carvalho', 'Cuba de concreto aberta', 'Garrafa individual'], 'Tem de 50 a 100 mil litros.'),
          mc('Que cuidado se tem no engarrafamento do Charmat?', 'Contrapressão igual à do produto (isobárico)', ['Vácuo total', 'Aquecimento a 60 °C', 'Abertura do tanque ao ar'], 'Os filtros centrífugos também são isobáricos.'),
          mc('Qual vantagem do Charmat sobre o método clássico?', 'Menos trabalho e custo, sem remueur nem perdas por garrafas que explodem', ['Maior prestígio garantido', 'Aromas de barrica', 'Prise de mousse em garrafa'], 'Os italianos o defendem; os franceses preferem o clássico.'),
          mc('Qual a uva do Asti Spumante?', 'Moscato Canelli', ['Glera', 'Chardonnay', 'Nebbiolo'], 'É um espumante doce, para sobremesas.'),
          mc('Em que região da Itália se faz o Asti?', 'Piemonte', ['Vêneto', 'Toscana', 'Sicília'], 'É a mesma região de Barolo e Barbaresco.'),
          mc('Como termina a fermentação do Asti?', 'Por queda brusca de temperatura quando atinge 7 a 9% vol', ['Quando o açúcar acaba totalmente', 'Com adição de ácido', 'Após 5 anos'], 'Assim preserva o açúcar residual.'),
          mc('Em que região da Itália se produz o Prosecco?', 'Vêneto', ['Piemonte', 'Lombardia', 'Sardenha'], 'Usa a uva de mesmo nome e o método Charmat.'),
        ] }
    ]
  };

  return [eno, vin, esp];
})());
