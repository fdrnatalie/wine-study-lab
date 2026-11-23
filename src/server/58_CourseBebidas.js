/**
 * Curso: Harmonização de queijos e vinhos + Módulo 5 (cerveja, saquê, destilados, envelhecidos, licores e coquetelaria).
 * Origem: apostila de harmonização (queijos) e apostila do Módulo 5 (aulas de cerveja, saquê, destilados, envelhecidos, licores/bitters/drinks).
 * Só fatos reescritos com palavras próprias; itens duvidosos ficaram de fora.
 */
(function () {
  var mc = CourseKit.mc, match = CourseKit.match, order = CourseKit.order;

  CourseKit.add([

    /* ============================ QUEIJOS E VINHOS ============================ */
    { id: 'queijos-vinhos', title: 'Queijos e vinhos', country: 'Harmonização',
      lessons: [
        { id: 'que-1', title: 'Frescos e massa filada', level: 'medio',
          tip: 'Queijos frescos têm sabor suave e pedem brancos leves de acidez moderada. Nos de massa filada, a massa é mergulhada em água quente depois de separar o soro, o que a deixa elástica; combinam com brancos não intensos.',
          questions: [
            mc('Que tipo de vinho combina com queijos frescos, como ricota e mascarpone?', 'Branco leve, de acidez moderada', ['Tinto muito tânico e encorpado', 'Fortificado doce', 'Tinto longamente envelhecido em barrica'], 'Os queijos frescos têm sabores suaves e delicados e pedem brancos de corpo leve e acidez moderada.'),
            mc('Qual destes é um queijo fresco?', 'Mascarpone', ['Gruyère', 'Camembert', 'Manchego'], 'Minas, ricota, cottage, mascarpone e feta são queijos frescos: produção simples e rápida.'),
            mc('Qual destes vinhos é indicado para queijos frescos?', 'Vinho Verde', ['Porto', 'Barbera', 'Montepulciano d\'Abruzzo'], 'Sauvignon Blanc, Albariño e Vinho Verde são brancos leves que acompanham bem os queijos frescos.'),
            mc('Como os queijos de massa filada ficam elásticos?', 'A massa é mergulhada em água quente depois de separar o soro', ['Maturam por anos em adegas frias', 'Recebem bolor azul durante a cura', 'São prensados e secos ao ar'], 'É o mergulho da massa em água quente que dá a elasticidade típica da mozzarella e parentes.'),
            mc('Qual destes é um queijo de massa filada?', 'Mozzarella', ['Brie', 'Gorgonzola', 'Parmigiano-reggiano'], 'Mozzarella, caciocavallo e provolone são exemplos de massa filada.'),
            mc('Que branco combina com queijos de massa filada?', 'Chardonnay sem passagem por barrica', ['Chardonnay muito amadeirado e intenso', 'Moscatel licoroso', 'Porto tawny'], 'Para os queijos de massa filada, indicam-se brancos não intensos, como Sauvignon Blanc e Chardonnay sem passagem por barrica.'),
            mc('Que uva, em versão tinta ou rosé, também acompanha queijos de massa filada?', 'Pinot Noir', ['Barbera', 'Zinfandel', 'Sangiovese'], 'Além dos brancos, tinto ou rosé de Pinot Noir é uma opção para os queijos de massa filada.')
          ] },
        { id: 'que-2', title: 'Crosta branca e queijos azuis', level: 'medio',
          tip: 'Brie e camembert têm crosta de Penicillium camemberti e pedem brancos de mais corpo e espumantes. Os azuis, salgados e às vezes picantes, vão bem com fortificados, espumantes e tintos frutados.',
          questions: [
            mc('Que fungo forma a crosta branca do brie e do camembert?', 'Penicillium camemberti', ['Aspergillus oryzae', 'Botrytis cinerea', 'Brettanomyces'], 'A crosta branca desses queijos de massa mole e cremosa vem do Penicillium camemberti.'),
            mc('Qual destes grupos reúne queijos de pasta mole e crosta branca?', 'Brie, camembert, langres e coulommiers', ['Gorgonzola, roquefort e stilton', 'Gouda, edam e emmental', 'Manchego, grana padano e pecorino'], 'São queijos franceses de massa mole e cremosa.'),
            mc('Que vinhos acompanham queijos de crosta branca?', 'Brancos de mais corpo e espumantes', ['Brancos muito leves e neutros', 'Tintos muito tânicos', 'Vinhos de sobremesa muito doces'], 'Para os queijos de crosta branca, indicam-se brancos de mais corpo e espumantes.'),
            mc('Que tinto, em clima quente, pode acompanhar brie e camembert?', 'Pinot Noir', ['Cabernet Sauvignon', 'Barbera', 'Syrah'], 'Pinot Noir de clima quente, em versão tinta ou rosé, é uma opção para a crosta branca.'),
            mc('Que característica define os queijos azuis?', 'Massa mole com veios de fungos Penicillium azulados ou esverdeados', ['Massa elástica mergulhada em água quente', 'Pasta dura com maturação muito longa', 'Coalhada fresca sem maturação'], 'Os fungos da família Penicillium ficam entremeados na massa cremosa e quebradiça.'),
            mc('Como é o sabor típico dos queijos azuis?', 'Salgado bem pronunciado, às vezes picante', ['Suave e levemente ácido', 'Neutro e lácteo', 'Doce e amanteigado'], 'Os queijos azuis têm sabor salgado bem pronunciado, às vezes picante.'),
            mc('Que grupo de vinhos é a harmonização clássica dos queijos azuis?', 'Fortificados, como Porto, Jerez e Madeira', ['Brancos leves e secos', 'Rosés delicados', 'Vinhos sem álcool'], 'Gorgonzola, roquefort e stilton combinam com fortificados; espumantes e tintos frutados também funcionam.'),
            mc('Que tinto frutado combina com queijos azuis?', 'Zinfandel', ['Montepulciano d\'Abruzzo', 'Barbera', 'Sangiovese'], 'Zinfandel e Cabernet Sauvignon são os tintos frutados citados para os azuis.'),
          ] },
        { id: 'que-3', title: 'Pasta semidura e pasta dura', level: 'avancado',
          tip: 'Os semiduros maturam de 3 a 12 meses: jovens pedem Chardonnay de barrica ou Pinot Noir; mais maturados, tintos frutados de corpo médio. Os de pasta dura pedem tintos mais robustos.',
          questions: [
            mc('Quanto dura, em geral, a maturação dos queijos de pasta semidura?', 'De 3 a 12 meses', ['De 2 a 7 dias', 'De 2 a 3 semanas', 'Mais de 5 anos'], 'A pasta semidura é levemente mais resistente, maleável e elástica.'),
            mc('Qual destes é um queijo de pasta semidura?', 'Gouda', ['Ricota', 'Roquefort', 'Grana padano'], 'Gouda, cheddar inglês, emmental, edam e gruyère são semiduros.'),
            mc('Que vinho combina com um queijo semiduro jovem?', 'Chardonnay com passagem por barrica', ['Porto vintage', 'Vinho Verde', 'Barbera robusto'], 'Nos semiduros jovens, brancos encorpados (Chardonnay de barrica) ou tintos leves (Pinot Noir) funcionam.'),
            mc('Que tintos combinam com um semiduro mais maturado?', 'Tintos frutados de corpo médio, como Syrah e Merlot', ['Brancos leves e cítricos', 'Espumantes brut', 'Vinhos fortificados doces'], 'Para os semiduros mais maturados, indicam-se tintos frutados de corpo médio; Cabernet Sauvignon também serve.'),
            mc('Qual destes é um queijo de pasta dura ou extra dura?', 'Parmigiano-reggiano', ['Brie', 'Mascarpone', 'Edam'], 'Parmigiano-reggiano, pecorino romano, grana padano e manchego têm pasta dura.'),
            mc('Que tintos acompanham queijos de pasta dura?', 'Tintos mais robustos, como Barbera e Sangiovese', ['Brancos leves e frescos', 'Rosés delicados', 'Espumantes doces'], 'Os de pasta dura combinam com tintos mais robustos; Montepulciano d\'Abruzzo, Cabernet Sauvignon e Merlot também aparecem.'),
            mc('O que diferencia a pasta dura da semidura na produção?', 'O tempo de maturação', ['O tipo de leite, sempre de cabra', 'A presença de bolor azul', 'O mergulho em água quente'], 'A produção é parecida; o que muda é o tempo de maturação.'),
            match('Ligue o queijo ao tipo de pasta', [['Manchego', 'Pasta dura'], ['Emmental', 'Pasta semidura'], ['Camembert', 'Mole com crosta branca'], ['Gorgonzola', 'Azul']], 'Cada tipo de queijo tem seu estilo de vinho.')
          ] },
        { id: 'que-4', title: 'Revisão: queijo e vinho', level: 'avancado',
          tip: 'Resumo: quanto mais intenso e maturado o queijo, mais corpo e estrutura o vinho pede; frescos ficam com brancos leves, azuis com fortificados.',
          questions: [
            match('Ligue o vinho ao grupo de queijos', [['Vinho Verde', 'Queijos frescos'], ['Chardonnay com barrica', 'Semiduro jovem'], ['Porto', 'Queijos azuis'], ['Barbera', 'Pasta dura']], 'Revisão dos pares principais.'),
            mc('Qual par queijo e vinho está correto?', 'Roquefort com Jerez ou Madeira', ['Ricota com Barbera', 'Mozzarella com Porto', 'Parmigiano com Vinho Verde'], 'Os azuis combinam com fortificados; frescos ficam com brancos leves; duros, com tintos robustos.'),
            mc('Que queijo combina com Albariño?', 'Queijo fresco', ['Queijo de pasta dura', 'Queijo azul', 'Queijo semiduro muito maturado'], 'O Albariño é um branco leve de acidez moderada.'),
            mc('Qual destes queijos combina com Sangiovese?', 'Pecorino romano', ['Cottage', 'Mascarpone', 'Brie'], 'Sangiovese é um dos tintos robustos indicados para a pasta dura.'),
            mc('Que tipo de vinho aparece como opção tanto para queijos de crosta branca quanto para azuis?', 'Espumante', ['Vinho Verde', 'Barbera', 'Montepulciano d\'Abruzzo'], 'Nos dois grupos, o espumante está entre os vinhos indicados.'),
            mc('Que uva branca pode ser servida tanto sem barrica (massa filada) quanto com barrica (semiduro jovem)?', 'Chardonnay', ['Albariño', 'Sauvignon Blanc', 'Riesling'], 'O estilo do Chardonnay muda com a barrica, e cada estilo se encaixa em um queijo diferente.'),
            mc('Que tinto aparece como opção para queijos azuis, semiduros maturados e pasta dura?', 'Cabernet Sauvignon', ['Pinot Noir', 'Barbera', 'Zinfandel'], 'Cabernet Sauvignon é citado nesses três grupos.')
          ] }
      ] },

    /* ============================ CERVEJA ============================ */
    { id: 'cerveja', title: 'Cerveja', country: 'Módulo 5 · Bebidas',
      lessons: [
        { id: 'cer-1', title: 'O que é cerveja', level: 'medio',
          tip: 'Cerveja é fermentação do mosto de malte de cevada e água potável por levedura, com lúpulo. A água é de 90 a 95% da bebida. Parte do malte pode ser trocada por adjuntos, até um limite.',
          questions: [
            mc('Quais são os ingredientes básicos da cerveja?', 'Malte de cevada, água, levedura e lúpulo', ['Uva, água e levedura', 'Arroz polido, koji e água', 'Cana-de-açúcar, melaço e levedura'], 'O mosto de malte e água é fermentado pela levedura, com adição de lúpulo.'),
            mc('Que proporção da cerveja é água?', 'De 90 a 95%', ['De 20 a 30%', 'Cerca de 50%', 'Menos de 10%'], 'A água influencia sabor, cor e amargor; os cervejeiros ajustam sais, minerais e pH conforme o estilo.'),
            mc('O que é o malte?', 'Grão de cevada, ou outro cereal, germinado de forma controlada e depois seco', ['Flor da planta do lúpulo', 'Levedura que sobe à superfície', 'Açúcar adicionado ao mosto'], 'A germinação controlada seguida de secagem prepara o grão para a cervejaria.'),
            mc('Por que a cevada é o principal cereal da cerveja?', 'É rica em amido e enzimas, e a casca dura filtra o mosto', ['Não contém amido', 'Dá cor azul à bebida', 'É o único cereal que fermenta'], 'Amido, enzimas, proteínas, pouca gordura, sabor agradável e casca que filtra o mosto fazem dela a escolha clássica.'),
            mc('O que são adjuntos cervejeiros?', 'Cereais, amidos e açúcares vegetais que substituem parte do malte', ['Leveduras selvagens', 'Variedades de lúpulo de amargor', 'Barris usados na maturação'], 'A legislação brasileira limita a substituição a 45% do extrato primitivo.'),
            mc('Qual é o limite de adjuntos em relação ao extrato primitivo, na legislação brasileira?', '45%', ['5%', '15%', '80%'], 'Parte do malte de cevada pode ser substituída por adjuntos, até 45%.'),
            mc('Quais são as três grandes famílias de cerveja?', 'Ales, Lagers e Lambics', ['Stouts, Porters e Pilsens', 'Trapistas, Abadias e Weiss', 'Brancas, rosés e tintas'], 'A divisão se baseia sobretudo no tipo de levedura e na forma de fermentação.')
          ] },
        { id: 'cer-2', title: 'Lúpulo e levedura', level: 'medio',
          tip: 'O lúpulo é o tempero da cerveja: amargor, aroma, conservação, brilho e espuma. A levedura é um fungo unicelular; as de baixa fermentação formam as Lagers, as de alta formam as Ales.',
          questions: [
            mc('Qual é o papel principal do lúpulo na cerveja?', 'Dar amargor e aroma, como um tempero', ['Fornecer o açúcar para a fermentação', 'Filtrar o mosto', 'Fermentar o mosto'], 'O lúpulo é o principal ingrediente de aroma e paladar da cerveja.'),
            mc('Que substâncias do lúpulo causam o amargor?', 'Alfa-ácidos', ['Óleos essenciais', 'Taninos do malte', 'Aspergillus'], 'Os óleos essenciais dão aroma; os alfa-ácidos trazem o amargor.'),
            mc('Como é o lúpulo de aroma?', 'Rico em óleos essenciais e pobre em alfa-ácidos', ['Pobre em óleos essenciais e rico em alfa-ácidos', 'Sem óleos e sem alfa-ácidos', 'Rico em amido'], 'O de amargor é o oposto: poucos óleos e muito alfa-ácido.'),
            mc('O que significa dizer que o lúpulo tem efeito bacteriostático?', 'Inibe o crescimento das bactérias sem matá-las de imediato', ['Mata todas as bactérias instantaneamente', 'Acelera a fermentação', 'Clareia a cerveja'], 'Por isso é um conservante natural, e foi rapidamente adotado nas cervejarias dos mosteiros.'),
            mc('Que outras funções o lúpulo tem, além do sabor?', 'Conservação, brilho e qualidade da espuma', ['Aumentar o teor de álcool', 'Dar cor escura', 'Gaseificar a bebida'], 'Ele age como conservante e dá estabilidade coloidal, o que se vê no brilho e na espuma.'),
            mc('A levedura da cerveja pertence a qual reino?', 'Fungos', ['Plantas', 'Bactérias', 'Animais'], 'É um microrganismo unicelular do Reino Fungi.'),
            match('Ligue o lúpulo à sua característica', [['Lúpulo de aroma', 'Muitos óleos essenciais e poucos alfa-ácidos'], ['Lúpulo de amargor', 'Poucos óleos essenciais e muitos alfa-ácidos'], ['Efeito bacteriostático', 'Inibe as bactérias sem matá-las de imediato'], ['Estabilidade coloidal', 'Brilho e qualidade da espuma']], 'O lúpulo reúne sabor, aroma e conservação.')
          ] },
        { id: 'cer-3', title: 'Ales, Lagers e Lambics', level: 'avancado',
          tip: 'Ales usam levedura de alta fermentação (sobe) e têm perfil frutado e complexo. Lagers, de baixa fermentação, são limpas e frescas e maturam frias. Lambics são ácidas, de fermentação espontânea, de Bruxelas.',
          questions: [
            mc('Que levedura fermenta as Ales?', 'Saccharomyces cerevisiae', ['Aspergillus oryzae', 'Brettanomyces apenas', 'Botrytis cinerea'], 'É a levedura de alta fermentação.'),
            mc('Que perfil têm as Ales?', 'Mais frutado e complexo', ['Sempre neutro e limpo', 'Sempre ácido', 'Sempre sem aroma'], 'As leveduras de alta fermentação geram mais subprodutos, o que dá complexidade.'),
            mc('De onde vem o nome Lager?', 'Do alemão lagern, armazenar', ['Do latim lagena, garrafa', 'Do inglês large, grande', 'Do francês laguer, lago'], 'As Lagers são maturadas por semanas ou meses em temperatura bem baixa.'),
            mc('Onde surgiram as Lagers?', 'Na Europa Central, em Plzeň (Pilsen)', ['No Japão', 'No Caribe', 'Na Escócia'], 'A Pilsen nasceu na República Tcheca.'),
            mc('Por que as Lagers são chamadas de cervejas de baixa fermentação?', 'A levedura se deposita no fundo em vez de formar camada espessa na superfície', ['Fermentam em barris baixos', 'Têm pouco álcool', 'Usam pouca água'], 'A levedura decanta no fim da fermentação.'),
            mc('De que cidade é típica a Lambic?', 'Bruxelas, na Bélgica, e arredores', ['Munique', 'Londres', 'Praga'], 'Lambic é uma cerveja de trigo ácida da região de Bruxelas.'),
            mc('Como se dá a fermentação da Lambic?', 'Espontânea, por bactérias e leveduras selvagens do ambiente', ['Por uma única levedura de laboratório', 'Sem nenhum microrganismo', 'Apenas por Aspergillus'], 'Os microrganismos vêm da própria cervejaria e do entorno, em técnica medieval anterior a Pasteur.'),
            match('Ligue a família ao traço', [['Ale', 'Levedura sobe, perfil frutado'], ['Lager', 'Levedura decanta, maturação fria'], ['Lambic', 'Fermentação espontânea e ácida'], ['Pilsen', 'Origem na República Tcheca']], 'Cada família tem levedura e perfil próprios.')
          ] },
        { id: 'cer-4', title: 'História da cerveja', level: 'medio',
          tip: 'A cerveja é muito antiga: o Código de Hamurabi já regulava seu consumo. Na Idade Média os monges guardaram a técnica; o lúpulo veio na Idade Média e, no século XIX, Pasteur estudou as leveduras.',
          questions: [
            mc('Que código de leis antigo regulava a produção e o consumo de cerveja?', 'O Código de Hamurabi, da Babilônia', ['A Lei de Pureza Alemã', 'O Código Napoleônico', 'O Decreto da Lei Seca'], 'Era o primeiro código de leis escrito e punia severamente a cerveja ruim ou adulterada.'),
            mc('No Código de Hamurabi, quanto de cerveja recebia por dia um trabalhador comum?', '2 litros', ['1 litro', '10 litros', '5 litros'], 'Funcionários públicos recebiam 3 litros; administradores e sacerdotes, 5 litros.'),
            mc('Qual ingrediente as cervejas antigas ainda não usavam?', 'Lúpulo', ['Cereais', 'Água', 'Levedura'], 'O lúpulo não era conhecido; usavam-se ervas, frutos e raízes para dar sabor.'),
            mc('Por que a cerveja era comum na Europa medieval?', 'A água era de má qualidade e a cerveja, por ser fervida, era mais segura', ['Era proibida a água potável', 'Era mais cara que o vinho', 'Só os reis podiam bebê-la'], 'Os monges detinham o conhecimento e criaram muitas receitas nos mosteiros.'),
            mc('Que povo da Antiguidade preferia o vinho à cerveja, embora a conhecesse?', 'Os romanos', ['Os babilônios', 'Os germanos', 'Os gauleses'], 'A cerveja era apreciada nas regiões dominadas por Roma, sobretudo entre gauleses e germanos.'),
            mc('Que estilo nasceu em Burton-on-Trent, graças à água rica em sulfatos?', 'A IPA', ['A Pilsen', 'A Lambic', 'A Trapista'], 'A água de excelente qualidade e rica em sulfatos marcou as cervejas inglesas dessa cidade.'),
            mc('Que estilo foi criado na República Tcheca no século XIX?', 'A Pilsen', ['A IPA', 'A Lambic', 'A Stout'], 'Também no século XIX Pasteur estudou as leveduras.'),
            order('Ordene do mais antigo ao mais recente', ['Código de Hamurabi regula a cerveja', 'Primeiro registro do uso do lúpulo (Idade Média)', 'Estudos de Pasteur sobre leveduras (século XIX)'], 'Da Babilônia antiga, passando pela Idade Média, até a ciência moderna.')
          ] },
        { id: 'cer-5', title: 'Escolas cervejeiras e Brasil', level: 'avancado',
          tip: 'Escola cervejeira é reconhecida pela tradição e pela influência: Alemanha (com a República Tcheca), Bélgica, Inglaterra e Estados Unidos. No Brasil, a cerveja chegou com os europeus; Brahma e Antarctica se fundiram e formaram a AB InBev.',
          questions: [
            mc('Que país, origem da Pilsen, está incluído na área da escola cervejeira alemã?', 'República Tcheca', ['Bélgica', 'Inglaterra', 'Holanda'], 'A área da escola alemã inclui a República Tcheca.'),
            mc('Que país concentra a maioria dos mosteiros cervejeiros, com destaque para os trapistas?', 'Bélgica', ['Alemanha', 'Estados Unidos', 'Japão'], 'A Bélgica é símbolo de diversidade e ousadia cervejeira.'),
            mc('O que é a CAMRA?', 'Movimento inglês de resgate das verdadeiras Ales', ['Escola cervejeira belga', 'Associação de cervejeiros caseiros do Brasil', 'Lei de pureza da Inglaterra'], 'A sigla vem de Campaign for Real Ale e marcou o renascimento da cerveja.'),
            mc('Qual país preservou a tradição das tabernas e criou os pubs?', 'Inglaterra', ['Bélgica', 'Alemanha', 'República Tcheca'], 'A raiz cervejeira inglesa remonta aos vikings.'),
            mc('Qual país tem o maior movimento de cervejeiros caseiros e microcervejarias da história contemporânea?', 'Estados Unidos', ['Alemanha', 'Bélgica', 'Inglaterra'], 'Os EUA reinterpretaram a cultura cervejeira nas últimas décadas.'),
            mc('Que empresa nasceu da fusão das cervejarias Brahma e Antarctica?', 'A AB InBev', ['A CAMRA', 'A ACervA', 'A Lindores'], 'A empresa é a que tem mais marcas de cerveja no mundo.'),
            mc('Por que a qualidade das cervejas brasileiras caiu durante a Primeira Guerra Mundial?', 'Faltaram malte e lúpulo importados, e passou-se a usar milho, arroz e trigo', ['Proibiram a fermentação', 'A água ficou salgada', 'Os cervejeiros trocaram a levedura por bactérias'], 'O malte e o lúpulo vinham da Alemanha e da Áustria.'),
            mc('Qual é a diferença da cerveja artesanal para a industrial, além da escala?', 'Matéria-prima de melhor qualidade e produtos regionais, com sabores mais marcantes', ['Uso exclusivo de adjuntos', 'Ausência de lúpulo', 'Fermentação sem levedura'], 'Isso gera sabores mais robustos e únicos.')
          ] },
        { id: 'cer-6', title: 'Harmonizar com cerveja', level: 'avancado',
          tip: 'A harmonização busca um terceiro produto melhor que cada item isolado. Quatro pilares: equilíbrio de forças (o principal), semelhança, contraste e complementação. A cor nem sempre indica corpo.',
          questions: [
            mc('Qual é o principal pilar da harmonização com cerveja?', 'Equilíbrio de forças', ['Semelhança', 'Contraste', 'Tradição'], 'Cerveja leve vai com prato leve; cerveja intensa, com prato potente.'),
            mc('Quais são os quatro pilares da harmonização com cerveja?', 'Equilíbrio de forças, semelhança, contraste e complementação', ['Cor, espuma, preço e marca', 'Aroma, cor, rótulo e copo', 'Doçura, acidez, tanino e álcool'], 'Os pilares devem funcionar juntos.'),
            mc('O que é o chamado terceiro produto numa harmonização?', 'Resultado melhor do que cada item separado', ['Uma terceira bebida servida depois', 'Um molho adicionado ao prato', 'Uma sobremesa'], 'Comida e cerveja devem estar juntas na boca.'),
            mc('Com o pilar do contraste, a gordura do prato é contrabalançada por quê?', 'Amargor, álcool, acidez ou carbonatação', ['Mais gordura', 'Apenas açúcar', 'Apenas sal'], 'Nenhuma parte deve se sobrepor à outra.'),
            mc('Que reação gera notas caramelizadas e tostadas, usadas no pilar da semelhança?', 'A reação de Maillard', ['A fermentação malolática', 'A pasteurização', 'A osmose reversa'], 'Caramelização e tostas do prato podem se espelhar nas da cerveja.'),
            mc('Que cervejas pedem alimentos de maior intensidade e untuosidade?', 'As lupuladas e amargas', ['As leves e refrescantes', 'As neutras de final seco', 'Todas igualmente'], 'Nelas o lúpulo é o sabor principal e o malte fica em segundo plano.'),
            mc('A cor escura de uma cerveja significa que ela é sempre mais pesada?', 'Não, a cor pode enganar', ['Sim, sempre', 'Só nas Lagers', 'Só quando tem lúpulo'], 'A cor vem da secagem, caramelização e tosta dos maltes, e não indica corpo por si só.'),
            match('Ligue o perfil à descrição', [['Leves e refrescantes', 'Neutras, limpas e de final seco'], ['Tostadas', 'Notas de cacau e café'], ['Ácidas e rústicas', 'Notas terrosas, vinosas e balsâmicas'], ['Frutadas e condimentadas', 'Aromas vindos da fermentação ou de adições']], 'Cada perfil orienta a escolha do prato.')
          ] }
      ] },

    /* ============================ SAQUÊ ============================ */
    { id: 'saque', title: 'Saquê', country: 'Módulo 5 · Bebidas',
      lessons: [
        { id: 'saq-1', title: 'O que é saquê', level: 'medio',
          tip: 'Saquê é a bebida tradicional do Japão, feita da fermentação do arroz. Parece-se mais com a cerveja do que com o vinho, porque o amido do arroz precisa virar açúcar antes de virar álcool.',
          questions: [
            mc('De que matéria-prima é feito o saquê?', 'Arroz', ['Uva', 'Cevada maltada', 'Agave'], 'É a bebida alcoólica mais famosa e tradicional do Japão.'),
            mc('Com qual bebida a fermentação do saquê mais se parece?', 'Cerveja', ['Vinho tinto', 'Rum', 'Conhaque'], 'Nos dois casos o amido vira açúcares e só depois álcool.'),
            mc('Por que o vinho não precisa dessa etapa de transformação do amido?', 'A uva já tem açúcar', ['A uva tem álcool pronto', 'O vinho usa koji', 'O vinho é destilado'], 'No arroz, o amido precisa ser convertido em açúcares.'),
            mc('Que fungo é usado para transformar o amido do arroz em açúcares?', 'Aspergillus oryzae, o koji', ['Penicillium camemberti', 'Botrytis cinerea', 'Saccharomyces pastorianus'], 'Aspergillus oryzae é o nome científico do koji, um fungo filamentoso (bolor).'),
            mc('Como era feito o saquê antigo, no método kuchikami?', 'Mastigando o arroz para fermentá-lo', ['Pisando o arroz', 'Queimando o arroz', 'Moendo o arroz em pedra'], 'A saliva ajudava a fermentar o arroz mastigado.'),
            mc('Qual é o nome do polimento do arroz no saquê?', 'Seimai', ['Moromi', 'Roka', 'Hi-ire'], 'O polimento retira gorduras e proteínas da parte externa do grão.'),
            mc('Para que se poli o arroz do saquê?', 'Retirar gorduras e proteínas da parte externa do grão', ['Dar cor ao saquê', 'Adicionar açúcar', 'Tornar o grão maior'], 'Quanto mais polido, maiores as chances de requinte.')
          ] },
        { id: 'saq-2', title: 'Koji, shubo e moromi', level: 'avancado',
          tip: 'O arroz cozido a vapor encontra o koji e vira arroz-koji. Parte dele, com levedura, forma o shubo; o shubo junta-se ao restante do arroz-koji no moromi, que fermenta cerca de 30 dias.',
          questions: [
            mc('Como o arroz é cozido antes de receber o koji?', 'A vapor', ['Fritando', 'Assando em forno de barro', 'Fervendo no vinho'], 'Depois do polimento vem a lavagem e o cozimento a vapor.'),
            mc('O que acontece com o amido do arroz quando o koji age?', 'É hidrolisado em açúcares menores', ['É queimado', 'Vira gordura', 'É destilado'], 'É a sacarificação, que também libera aminoácidos e ácidos graxos.'),
            mc('O que é o shubo?', 'Fermento inicial: levedura somada a parte do arroz-koji', ['O bolo que sobra da filtração', 'O saquê sem álcool', 'O método de pasteurização'], 'É a base de levedura que dá início à fermentação principal.'),
            mc('O que é o moromi?', 'A mistura do shubo com o restante do arroz-koji', ['O arroz mastigado', 'O copo tradicional', 'O polimento do arroz'], 'É nele que ocorre a fermentação principal.'),
            mc('Quanto tempo, aproximadamente, o moromi leva para virar saquê?', 'Cerca de 30 dias', ['Cerca de 2 dias', 'Cerca de 2 anos', 'Cerca de 10 anos'], 'Depois vêm a filtração, a pasteurização e o envelhecimento.'),
            mc('O que se fermenta no saquê, além da levedura?', 'Apenas o arroz', ['Arroz e cevada', 'Arroz e uva', 'Arroz e cana'], 'Nenhum outro grão ou açúcar é fermentado.'),
            order('Ordene as etapas de produção do saquê', ['Polimento do arroz', 'Formação do arroz-koji', 'Fermentação (shubo e moromi)', 'Filtração', 'Pasteurização', 'Envelhecimento'], 'O arroz é preparado, sacarificado, fermentado e só depois filtrado, estabilizado e amadurecido.')
          ] },
        { id: 'saq-3', title: 'Filtrar, pasteurizar, envelhecer', level: 'avancado',
          tip: 'A filtração (roka) tira o arroz não dissolvido e a levedura; o bolo vira sakekasu. A pasteurização (hi-ire) inativa as enzimas. O envelhecimento dura de 6 meses a 1 ano e ameniza as mudanças causadas pelo calor.',
          questions: [
            mc('Como se chama a filtração do saquê?', 'Roka', ['Seimai', 'Hi-ire', 'Shubo'], 'Filtra-se com pano, tirando arroz não dissolvido e levedura.'),
            mc('O que é o sakekasu?', 'O bolo residual da filtração', ['O arroz polido', 'O fungo koji', 'O copo de cerâmica'], 'É nutritivo e usado, por exemplo, em conservas de legumes e no shochu.'),
            mc('Como se chama a pasteurização do saquê?', 'Hi-ire', ['Moromi', 'Roka', 'Seimai'], 'Serve para esterilizar a bebida e inativar enzimas antes do armazenamento.'),
            mc('Por que se inativam as enzimas na pasteurização?', 'Se continuassem agindo, aumentariam a doçura e mudariam o aroma', ['Para tornar o saquê mais claro', 'Para aumentar o amargor', 'Para formar bolhas'], 'A enzima ativa alteraria o perfil da bebida durante o armazenamento.'),
            mc('Qual é a duração do envelhecimento do saquê?', 'De 6 meses a 1 ano', ['De 20 dias', 'De 5 a 10 anos', 'Não existe envelhecimento'], 'Ele ameniza a alteração de aroma e sabor causada pelo aquecimento.'),
            mc('Para que se pode filtrar e pasteurizar de novo na etapa final?', 'Ajustar o teor alcoólico antes de embalar', ['Colorir o saquê', 'Adicionar koji', 'Retirar a levedura inicial'], 'É a etapa de ajuste e embalagem.'),
            mc('Como se chama o saquê fresco, que não passou pela pasteurização?', 'Nama ou mamazake', ['Amazake', 'Guenshu', 'Nigorizake'], 'Ele mantém aroma e sabor originais se for refrigerado.')
          ] },
        { id: 'saq-4', title: 'Tipos, serviço e conservação', level: 'avancado',
          tip: 'Nigorizake não é filtrado, mamazake não é pasteurizado, amazake não tem álcool, guenshu não é diluído. O saquê pode ser servido de gelado a quente, não se guarda por muito tempo e depois de aberto deve ser consumido logo.',
          questions: [
            match('Ligue o tipo ao seu significado', [['Nigorizake', 'Não filtrado'], ['Mamazake', 'Não pasteurizado'], ['Amazake', 'Sem álcool, feito da borra'], ['Guenshu', 'Sem diluição']], 'Cada nome descreve uma característica do processo.'),
            mc('Em que faixa de temperatura o saquê pode ser servido?', 'De 5 a 55 °C', ['De -10 a 0 °C', 'Somente a 100 °C', 'Somente a 20 °C'], 'Pode ser servido gelado, em temperatura ambiente ou quente.'),
            mc('Em que temperatura se serve o nama?', 'Gelado, entre 5 e 7 °C', ['Fervente', 'A 40 °C', 'Congelado'], 'Pode ser bebido puro ou em drinks.'),
            mc('O que significa um número positivo no índice nihonshu-do do rótulo?', 'Saquê mais seco', ['Saquê mais doce', 'Saquê sem álcool', 'Saquê espumante'], 'Números negativos indicam mais açúcar.'),
            mc('Como se deve guardar o saquê?', 'Em pé e ao abrigo da luz', ['Deitado, na luz do sol', 'Congelado', 'Aberto, por meses'], 'O saquê não é para guardar por muito tempo; depois de aberto, consuma rápido.'),
            mc('Como se obtêm saquês frisantes?', 'Com gás carbônico ou com segunda fermentação na garrafa', ['Adicionando koji extra', 'Aumentando o polimento', 'Destilando duas vezes'], 'A segunda fermentação na garrafa é a técnica usada no champanhe.'),
            mc('Em que século o hi-ire, pasteurização do saquê, foi descoberto, bem antes de Pasteur?', 'No século XV', ['No século XIX', 'No século XX', 'No século V'], 'Pasteur só trabalhou no século XIX.'),
            mc('Qual é a distinção básica entre saquê junmai e honjozo?', 'Junmai não leva etanol adicionado; honjozo leva uma pequena adição', ['Junmai é sem arroz', 'Honjozo é sem álcool', 'Junmai é espumante'], 'A adição de etanol destilado é o que distingue o honjozo.')
          ] }
      ] },

    /* ============================ DESTILADOS ============================ */
    { id: 'destilados', title: 'Destilados e envelhecidos', country: 'Módulo 5 · Bebidas',
      lessons: [
        { id: 'des-1', title: 'Destilação e aguardente', level: 'medio',
          tip: 'Destilados têm alto teor de álcool etílico e resultam da purificação de bebidas fermentadas. A destilação pode ser simples, fracionada, a pressão reduzida ou por arraste a vapor.',
          questions: [
            mc('O que são os destilados?', 'Bebidas de alto teor de álcool, obtidas pela purificação de fermentados', ['Bebidas sem álcool', 'Sucos concentrados', 'Cervejas de baixa fermentação'], 'O álcool é separado em uma ou duas operações.'),
            mc('Que tipo de destilação separa dois líquidos de pontos de ebulição diferentes em frações?', 'Fracionada', ['Simples', 'Por arraste a vapor', 'Por pressão reduzida'], 'O líquido que ferve primeiro passa pela coluna de retificação, que condensa o vapor.'),
            mc('Quando é usada a destilação simples?', 'Quando há grande diferença entre os pontos de ebulição', ['Quando os pontos de ebulição são iguais', 'Só em bebidas sem álcool', 'Só com gás carbônico'], 'Ela separa, por exemplo, uma mistura de líquido e sólido, como água e açúcar.'),
            mc('Para que serve a destilação a pressão reduzida?', 'Para substâncias que se decompõem antes de atingir o ponto de ebulição', ['Para acelerar a fermentação', 'Para aumentar a pressão do vapor', 'Para colorir o destilado'], 'É a destilação usada para componentes que se decompõem abaixo do ponto de ebulição.'),
            mc('Como se chama a destilação em que um componente vira vapor e é condensado, para misturas homogêneas de ponto de ebulição baixo?', 'Arraste a vapor', ['Fracionada', 'Simples', 'Maceração'], 'Pressão reduzida e arraste a vapor são usados, por exemplo, no gin The Botanist.'),
            mc('O que significa o termo aguardente?', 'Nome dado a destilados de várias matérias-primas', ['Água com gás', 'Vinho fortificado', 'Cerveja sem álcool'], 'O nome vem da ideia de água que solta fogo, "acqua ardens".'),
            mc('A diferença entre destilados e destilo-retificados está em quê?', 'Em uma ou duas operações de separação do álcool', ['Na cor', 'No tipo de copo', 'No país de origem'], 'Daí vem a divisão entre destiladas e destilo-retificadas.')
          ] },
        { id: 'des-2', title: 'Whisky escocês e irlandês', level: 'avancado',
          tip: 'Whisky vem do gaélico "uisge beatha", água da vida. O Scotch só pode ser feito na Escócia, com regras claras: carvalho por pelo menos 3 anos e no mínimo 40% de álcool. O irlandês é triplamente destilado.',
          questions: [
            mc('O que significa "uisge beatha", origem da palavra whisky?', 'Água da vida', ['Fogo líquido', 'Grão dourado', 'Ouro de malte'], 'É o equivalente gaélico de aqua vitae.'),
            mc('Qual é a primeira menção escrita ao whisky escocês?', 'O registro de 1494 de malte entregue a um frei para fazer aqua vitae', ['Um tratado romano', 'Uma carta de São Patrício', 'Um anúncio de jornal de 1836'], 'O fisco escocês registrou oito bolls de malte ao frei John Cor, da Abadia de Lindores.'),
            mc('Qual é o teor alcoólico mínimo de um Scotch?', '40% de álcool por volume', ['20%', '30%', '60%'], 'É uma das exigências legais.'),
            mc('Por quanto tempo, no mínimo, o Scotch deve envelhecer em barris de carvalho?', '3 anos', ['6 meses', '1 ano', '12 anos'], 'O envelhecimento ocorre em armazém na Escócia.'),
            mc('Quando um whisky pode usar a palavra Scotch no rótulo?', 'Quando é fabricado exclusivamente na Escócia', ['Quando usa malte escocês importado', 'Quando é engarrafado em Londres', 'Quando é de qualquer país do Reino Unido'], 'Mesmo com malte escocês, se for feito fora da Escócia não é Scotch.'),
            mc('Que região escocesa é associada a whiskies defumados e fica numa ilha?', 'Islay', ['Speyside', 'Lowlands', 'Irlanda do Norte'], 'Islay é uma ilha das Hébridas Interiores, na costa oeste da Escócia.'),
            mc('Quantas vezes o whisky irlandês é destilado?', 'Três vezes', ['Uma vez', 'Duas vezes', 'Cinco vezes'], 'A tripla destilação deixa o whisky mais suave.'),
            match('Ligue o tipo de whisky escocês à sua base', [['Single Malt', 'Cevada maltada, água e levedura'], ['Whisky de grão', 'Milho ou trigo'], ['Blended Scotch', 'Mistura de malte único e de grão']], 'Três tipos de Scotch.')
          ] },
        { id: 'des-3', title: 'Whisky japonês e americano', level: 'avancado',
          tip: 'No Japão, o whisky é feito desde 1920. Nos EUA há Bourbon (mínimo 51% de milho), Tennessee (mesma produção, com diferença na filtragem) e Rye (mínimo 51% de centeio).',
          questions: [
            mc('Que cereal deve compor pelo menos 51% do Bourbon?', 'Milho', ['Centeio', 'Cevada maltada', 'Arroz'], 'É o que define o Bourbon.'),
            mc('Que cereal deve compor pelo menos 51% do Rye americano?', 'Centeio', ['Milho', 'Trigo', 'Aveia'], 'O Rye segue a regra do Bourbon, trocando o milho pelo centeio.'),
            mc('Como é o sabor do Rye?', 'Apimentado e frutado, bom para coquetéis', ['Defumado e salgado', 'Muito doce e licoroso', 'Neutro como a vodka'], 'É um estilo apreciado na coquetelaria.'),
            mc('Qual é a idade mínima do Straight Bourbon?', '2 anos, sem aditivos como sabores ou corantes', ['6 meses', '10 anos', 'Não há idade mínima'], 'O Blended Bourbon, ao contrário, pode incluir outras bebidas e sabores.'),
            mc('Qual marca domina a categoria do whisky Tennessee?', 'Jack Daniel\'s', ['Yamazaki', 'Cutty Sark', 'Bruichladdich'], 'A produção é igual à do Bourbon, com diferença na filtragem.'),
            mc('Que destilaria é citada como exemplo de whisky japonês?', 'Yamazaki', ['Hendrick\'s', 'Lindores', 'Cuervo'], 'O whisky japonês é feito desde 1920, com fermentação mais prolongada e maturação também em carvalho japonês.'),
            mc('Quais são as três categorias principais de whisky americano?', 'Bourbon, Tennessee e Rye', ['Single Malt, Blended e Grão', 'Lager, Ale e Lambic', 'Blanco, Reposado e Añejo'], 'O Rye também é feito no Canadá.'),
            mc('Que parcela das vendas de whisky escocês no mundo corresponde ao Blended?', 'Cerca de 90%', ['Cerca de 10%', 'Cerca de 50%', 'Menos de 1%'], 'O blended é a mistura de whiskies de malte único e de grão.')
          ] },
        { id: 'des-4', title: 'Gin (gim)', level: 'avancado',
          tip: 'Gin é o destilado de cereais aromatizado com zimbro. London Dry é seco, sem açúcar; Old Tom é adocicado. Exemplos: Hendrick\'s (11 botânicos) e The Botanist (31).',
          questions: [
            mc('Que botânico dá o aroma característico do gin?', 'Zimbro', ['Baunilha', 'Agave', 'Cravo'], 'O gin é um destilado de cereais com aroma de bagas de zimbro.'),
            mc('Que estilo de gin não leva adição de açúcar?', 'London Dry', ['Old Tom', 'Gin adoçado', 'Gin licoroso'], 'O London Dry é seco e de zimbro marcante, usado no Dry Martini e na gin-tônica.'),
            mc('Que estilo de gin é adocicado por açúcar?', 'Old Tom', ['London Dry', 'Navy Strength', 'Brazilian Dry'], 'O Old Tom é difícil de encontrar no Brasil.'),
            mc('O que caracteriza o Brazilian Dry?', 'É um gin seco, contemporâneo, com ingredientes brasileiros', ['É sempre adocicado', 'É feito de arroz', 'É um whisky de Islay'], 'Foi popularizado no Brasil a partir de 2016.'),
            mc('Que ingredientes marcam o gin Hendrick\'s, além de 11 botânicos?', 'Pétalas de rosa e pepino', ['Cacau e maxixe', 'Agave e limão', 'Café e baunilha'], 'É um gin super premium destilado na Escócia.'),
            mc('Quantos botânicos tem o gin The Botanist?', '31', ['5', '11', '60'], '22 deles são exclusivos de Islay e colhidos à mão.'),
            mc('Que destilaria produz o The Botanist, descrito como Islay Dry Gin?', 'Bruichladdich', ['Yamazaki', 'Brugal', 'Barceló'], 'Foi criado em 2010 pelo master distiller Jim McEwan.'),
            mc('De onde vem a palavra gin, no sentido de bebida?', 'Do inglês, derivada de genebra e do holandês genever', ['Do japonês gin, prata', 'Do tupi guaraní', 'Do latim gignere'], 'O gin deriva de genebra, que vem do holandês genever ou jenever.'),
          ] },
        { id: 'des-5', title: 'Rum e cachaça', level: 'avancado',
          tip: 'O rum nasceu do melaço da cana e a cachaça, do caldo fresco. A cachaça só pode ser feita no Brasil; o rum pode ser feito em qualquer lugar.',
          questions: [
            mc('De que matéria-prima parte o rum?', 'Do melaço, subproduto do açúcar', ['Do caldo fresco de cana', 'Do agave', 'Do arroz'], 'Ele é fermentado e destilado de forma simples.'),
            mc('E de que matéria-prima parte a cachaça?', 'Do suco fresco da cana-de-açúcar', ['Do melaço', 'Da uva', 'Do arroz'], 'A cachaça vem de caldo fermentado e destilado.'),
            mc('Por que publicações estrangeiras chamam a cachaça de "Brazilian rum"?', 'Porque ambos partem da cana, mas a cachaça só pode ser feita no Brasil', ['Porque o rum só é feito no Brasil', 'Porque a cachaça usa agave', 'Porque o rum é feito de uva'], 'Rum pode ser feito em qualquer lugar; cachaça, só em solo nacional.'),
            mc('Que graduação alcoólica tem a cachaça?', 'De 38 a 48%', ['De 10 a 15%', 'De 60 a 70%', 'Menos de 5%'], 'O teor é definido na destilação.'),
            mc('Qual era a dose inicial de rum servida aos marinheiros da Royal Navy?', 'Meia pint, duas vezes ao dia', ['Um litro por semana', 'Uma dose por mês', 'Um barril por navio por dia'], 'O costume durou mais de 300 anos e foi suspenso em 1970.'),
            mc('Qual é a idade mínima de envelhecimento do rum em Cuba?', '2 anos', ['6 meses', '10 anos', '30 anos'], 'Não há lei internacional; cada país define sua maturação mínima.'),
            mc('Que madeiras podem ser usadas para maturar a cachaça?', 'Ipê, amburana, bálsamo, jequitibá e carvalho', ['Só carvalho francês', 'Apenas pinho', 'Só castanheira'], 'A cachaça não tem exigência legal de envelhecimento, mas a maturação traz sabor, cor e suavidade.')
          ] },
        { id: 'des-6', title: 'Tequila e vodka', level: 'avancado',
          tip: 'Tequila é destilada do agave-azul, sobretudo em Jalisco (México). Os tipos vão do blanco ao extra añejo conforme o tempo em carvalho. Vodka é uma bebida pura de água e álcool, filtrada em carvão ativado.',
          questions: [
            mc('De que planta é feita a tequila?', 'Agave-azul', ['Cana-de-açúcar', 'Uva', 'Cevada'], 'O nome científico é Agave tequilana Weber.'),
            mc('Qual é a região principal da tequila?', 'Jalisco, no México', ['Oaxaca, no Peru', 'Havana, em Cuba', 'Texas, nos EUA'], 'A cidade de Tequila fica a cerca de 65 km a nordeste de Guadalajara.'),
            mc('Como é a tequila blanco?', 'Engarrafada logo ou com até 2 meses em aço inox ou carvalho neutro', ['Sempre 5 anos em carvalho', 'Misturada com rum', 'Feita só de milho'], 'Também chamada de plata.'),
            mc('Quanto tempo a tequila reposado passa em carvalho?', 'De 2 meses a menos de 1 ano', ['De 2 a 3 dias', 'De 5 a 10 anos', 'Nenhum'], 'Reposado significa "descansado".'),
            mc('Quanto tempo mínimo tem a tequila extra añejo?', '3 anos', ['2 meses', '1 ano', '6 meses'], 'Añejo fica no mínimo 1 ano e menos de 3.'),
            order('Ordene as tequilas da menor para a maior maturação', ['Blanco', 'Reposado', 'Añejo', 'Extra añejo'], 'O tempo em carvalho cresce de até 2 meses até 3 anos ou mais.'),
            mc('Que bebida de agave é vendida, em algumas marcas, com um verme na garrafa?', 'Mezcal', ['Tequila', 'Rum', 'Gin'], 'É estratégia de marketing; o conselho regulador da tequila não permite vermes nem escorpiões nas garrafas.'),
            mc('Como se obtém uma vodka pura e cristalina?', 'Destilação fracionada e filtragem em carvão ativado', ['Envelhecimento em carvalho', 'Adição de caramelo', 'Maceração de ervas'], 'A filtragem em colunas de carvão ativado ocorre após algumas destilações.'),
          ] },
        { id: 'des-7', title: 'Conhaque e armagnac', level: 'expert',
          tip: 'Conhaque e armagnac são aguardentes de vinho branco da França. O conhaque se classifica em V.S., V.S.O.P. e X.O. por idade; o armagnac tem três sub-regiões.',
          questions: [
            mc('Qual é a idade mínima de um V.S.?', '2 anos', ['6 meses', '4 anos', '10 anos'], 'V.S. também é chamado de "três estrelas".'),
            mc('Qual é a idade mínima de um V.S.O.P.?', '4 anos', ['2 anos', '10 anos', '30 anos'], 'Significa Very Special Old Pale.'),
            mc('Qual é a idade mínima de um X.O.?', '10 anos', ['2 anos', '4 anos', '1 ano'], 'X.O. quer dizer Old Extra.'),
            mc('O que vale para a idade no rótulo de um conhaque?', 'A idade da aguardente mais jovem do corte', ['A média das idades', 'A idade da mais velha', 'O ano da vinha'], 'Mesmo com aguardentes muito antigas, vale a fração mais nova.'),
            mc('Qual uva é usada no conhaque, em solo calcário de Charente?', 'Ugni Blanc', ['Chardonnay', 'Riesling', 'Pinot Noir'], 'O vinho é ácido e de baixo teor alcoólico.'),
            mc('Em que região francesa fica o armagnac?', 'Gasconha, no extremo sul da França', ['Charente', 'Champagne', 'Bretanha'], 'A produção se estende por Gers, Landes e Lot-et-Garonne.'),
            match('Ligue a sub-região do Armagnac à sua posição', [['Bas-Armagnac', 'Oeste'], ['Ténarèze', 'Centro'], ['Haut-Armagnac', 'Leste']], 'São as três sub-regiões da denominação.'),
            mc('O que é a casta Baco?', 'Cruzamento de Folle Blanche com Noah', ['Cruzamento de Ugni Blanc com Merlot', 'Uma mutação do Chardonnay', 'Uma uva tinta italiana'], 'Foi criada para substituir a frágil Folle Blanche depois da filoxera.'),
          ] }
      ] },

    /* ============================ LICORES E COQUETELARIA ============================ */
    { id: 'licores-coquetelaria', title: 'Licores, bitters e coquetelaria', country: 'Módulo 5 · Bebidas',
      lessons: [
        { id: 'lic-1', title: 'ABV, proof e bitters', level: 'medio',
          tip: 'ABV é o álcool por volume, medido a 20 °C. Nos EUA o proof é o dobro do ABV. Bitters são bebidas amargas de ervas: os potáveis são bebidos, os não potáveis temperam coquetéis.',
          questions: [
            mc('O que significa ABV?', 'Alcohol By Volume, álcool por volume', ['Alcohol By Value', 'Amargo Bruto de Vinho', 'Aroma de Barril Velho'], '5% ABV quer dizer 5% de álcool no volume total.'),
            mc('A que temperatura se mede o teor volumétrico segundo a recomendação da OIML?', '20 °C', ['0 °C', '4 °C', '100 °C'], 'A mistura água e álcool é medida a 20 °C.'),
            mc('Nos EUA, como se calcula o proof?', 'É o dobro do ABV', ['É a metade do ABV', 'É igual ao ABV', 'É o ABV mais 10'], 'Whisky de 50% tem 100 proof.'),
            mc('Quantos graus ABV tem uma bebida de 86 proof?', '43%', ['86%', '172%', '21,5%'], 'O proof é o dobro do ABV; 86 dividido por 2 é 43.'),
            mc('O que são bitters?', 'Bebidas alcoólicas com essências herbais de sabor amargo ou agridoce', ['Sucos cítricos', 'Cervejas escuras', 'Vinhos doces'], 'Antes eram vendidos como medicamento; hoje são digestivos ou ingredientes de coquetéis.'),
            mc('Qual destes é um bitter potável?', 'Campari', ['Angostura', 'Peychaud', 'Cointreau'], 'Campari e Fernet são aperitivos bebidos puros.'),
            mc('Qual destes é um bitter não potável?', 'Angostura', ['Campari', 'Fernet', 'Cointreau'], 'Angostura e Peychaud temperam coquetéis, dão aroma e equilíbrio.'),
            match('Ligue o bitter ao seu tipo', [['Campari', 'Potável'], ['Fernet', 'Potável'], ['Angostura', 'Não potável'], ['Peychaud', 'Não potável']], 'Potáveis são bebidos; não potáveis são ingredientes de coquetel.')
          ] },
        { id: 'lic-2', title: 'O que é um licor', level: 'medio',
          tip: 'Licor é uma bebida adocicada e aromatizada com frutas, flores, sementes ou ervas por maceração. A legislação brasileira o define pelo teor alcoólico e pela quantidade de açúcar.',
          questions: [
            mc('De que palavra latina vem licor?', 'Liquifacere, dissolver', ['Lactare, amamentar', 'Lucere, brilhar', 'Liber, livre'], 'O licor dissolve substâncias vegetais no álcool.'),
            mc('Como o licor adquire seus aromas?', 'Por maceração de frutas, flores, sementes ou ervas', ['Por adição de gás carbônico', 'Por envelhecimento em carvalho', 'Por fermentação da cevada'], 'É uma bebida adocicada e aromatizada.'),
            mc('Qual é a faixa de teor alcoólico do licor na legislação brasileira?', 'De 15 a 54% em volume', ['De 0 a 5%', 'De 60 a 80%', 'De 90 a 96%'], 'Também deve ter mais de 30 g/L de açúcar.'),
            mc('Quanto açúcar tem um licor "creme"?', 'Mais de 350 g/L', ['Até 30 g/L', 'De 30 a 100 g/L', 'De 100 a 350 g/L'], 'Seco: mais de 30 a 100 g/L; fino: mais de 100 a 350 g/L.'),
            mc('Quanto açúcar tem um licor seco?', 'Mais de 30 e até 100 g/L', ['Mais de 350 g/L', 'Nenhum açúcar', 'Mais de 100 e até 350 g/L'], 'Seco: mais de 30 e até 100 g/L de açúcar.'),
            mc('O que é um licor cristalizado?', 'Saturado de açúcares parcialmente cristalizados', ['Sem açúcar nenhum', 'Congelado', 'Sem álcool'], 'O licor cristalizado é o saturado de açúcares parcialmente cristalizados.'),
            match('Ligue a categoria de licor ao açúcar', [['Seco', 'Mais de 30 e até 100 g/L'], ['Fino', 'Mais de 100 e até 350 g/L'], ['Creme', 'Mais de 350 g/L']], 'A divisão é feita pelo teor de açúcar.')
          ] },
        { id: 'lic-3', title: 'Fazendo e escolhendo licores', level: 'avancado',
          tip: 'Maceração coloca o ingrediente no álcool em temperatura ambiente; infusão usa água fervente. Na escolha, conta o teor alcoólico, o sabor e a base: álcool neutro ou à base de rum ou whisky.',
          questions: [
            mc('O que é a maceração?', 'Imersão do ingrediente no álcool, à temperatura ambiente, em recipiente bem fechado', ['Cozimento do ingrediente em água fervente', 'Destilação em coluna', 'Fermentação com koji'], 'Pode ser fruta, casca, suco, raízes ou ervas.'),
            mc('O que é a infusão?', 'Água fervente sobre o ingrediente, tampado até esfriar', ['Imersão em álcool frio', 'Filtração em carvão', 'Fermentação espontânea'], 'Recomendam-se recipientes de parede grossa.'),
            mc('Que álcool é neutro e não interfere no sabor da fruta?', 'Vodka', ['Rum escuro', 'Whisky', 'Conhaque'], 'Álcoois à base de rum ou whisky têm sabores próprios.'),
            mc('O que significa um licor de 30%?', '30 ml de álcool em cada 100 ml', ['30 g de açúcar por litro', '30 dias de maceração', '30 anos de idade'], 'É o teor alcoólico em volume.'),
            mc('Que tipos de licor são os mais apreciados e fáceis de achar?', 'Os de frutas', ['Os de essência', 'Os de ervas', 'Os de baunilha'], 'Os de ervas são frescos e aromáticos, como os de hortelã e canela.'),
            mc('Qual destes aromas se encaixa nos licores de essência?', 'Baunilha, cravo e anis', ['Laranja e limão', 'Hortelã e canela', 'Melancia'], 'Os licores de essência têm aroma intenso de sementes.'),
            mc('Que cuidado se recomenda ao fazer infusão de ingredientes para licor?', 'Usar recipientes de parede grossa', ['Usar recipientes de papel', 'Abrir a tampa durante o resfriamento', 'Congelar a água antes'], 'A água fervente é despejada sobre o ingrediente, que é tampado até esfriar.')
          ] },
        { id: 'lic-4', title: 'Cointreau e licor de laranja', level: 'avancado',
          tip: 'O Cointreau é um licor de laranja feito com cascas de laranja doce e amarga, em garrafa quadrada. É ingrediente do Side Car e foi inspirado no Curaçao.',
          questions: [
            mc('Que tipo de licor é o Cointreau?', 'Licor de laranja', ['Licor de cereja', 'Licor de café', 'Licor de anis'], 'Também é usado como digestivo e em coquetéis.'),
            mc('Que cascas são maceradas no Cointreau?', 'De laranja doce e de laranja amarga', ['De limão e lima', 'De toranja e tangerina', 'Só de limão-siciliano'], 'A laranja amarga é a de Curaçao.'),
            mc('Que formato tem a garrafa do Cointreau?', 'Quadrada', ['Redonda e alta', 'Triangular', 'Cilíndrica e fina'], 'Está em quase todos os bares.'),
            mc('Que licor inspirou a receita do Cointreau?', 'O Curaçao', ['A Chartreuse', 'O Amaretto', 'O Campari'], 'O estilo é conhecido como triple-sec.'),
            mc('Que coquetel leva Cointreau, limão e conhaque?', 'Side Car', ['Cosmopolitan', 'Margarita', 'Mojito'], 'Foi criado no Harry\'s Bar, em Paris.'),
            mc('O Cointreau é um bitter potável?', 'Não, é um licor adocicado', ['Sim, é um bitter potável', 'Sim, é um bitter não potável', 'Não, é uma aguardente envelhecida'], 'Bitters potáveis, como Campari e Fernet, são amargos; o Cointreau é licor de laranja.')
          ] },
        { id: 'lic-5', title: 'Classificando drinks', level: 'avancado',
          tip: 'Drinks se classificam pelo preparo (mexidos, montados, batidos), por volume (short, long, hot, frozen) e por finalidade. Há também grupos clássicos como sours, fizzes e juleps.',
          questions: [
            mc('O que é um drink?', 'Mistura de dois ou mais ingredientes, um deles alcoólico', ['Só uma dose de destilado', 'Bebida sem álcool', 'Vinho com água'], 'Cocktail é um grupo de drinks, como os sours e fizzes.'),
            mc('Como se prepara um drink mexido?', 'No mixing glass, com ingredientes de densidade parecida', ['Na coqueteleira', 'No liquidificador', 'Direto no copo, sem mexer'], 'Costuma ter base de destilados, sem açúcar, suco ou xarope.'),
            mc('Como se prepara um drink batido?', 'Na coqueteleira, quando as densidades são diferentes', ['Mexendo suavemente', 'Direto na taça', 'Em fogo brando'], 'Os drinks batidos vão à coqueteleira porque seus ingredientes têm densidades diferentes.'),
            mc('Como se prepara um drink montado?', 'Direto no copo, com ingredientes de densidades iguais', ['Na coqueteleira', 'No liquidificador', 'No mixing glass'], 'Misturam-se com facilidade.'),
            match('Ligue o tipo de drink ao copo ou traço', [['Long drink', 'Copo highball, muito gelo'], ['Hot drink', 'Caneca tipo Irish Coffee'], ['Frozen drink', 'Liquidificador, textura cremosa'], ['Short drink', 'Copo old-fashioned ou taça']], 'Classificação por volume e tipo.'),
            mc('Que ingredientes definem um sour?', 'Destilado, suco de limão, gelo e açúcar', ['Vinho e espumante', 'Leite e chocolate', 'Cerveja e refrigerante'], 'É um dos grupos clássicos.'),
            mc('Que drinks estimulam o apetite antes das refeições?', 'Os amargos ou ácidos, com pouco açúcar', ['Os muito doces e cremosos', 'Os quentes e nutritivos', 'Os frozen'], 'Entram destilados, bitters, licores e vermutes.'),
            mc('Que drinks são feitos para após as refeições?', 'Os digestivos, com licores, destilados e muito açúcar', ['Os refrescantes', 'Os estimulantes de apetite', 'Os highball'], 'Os digestivos incluem cremes.')
          ] }
      ] }

  ]);
})();
