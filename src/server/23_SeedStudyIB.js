/**
 * CARTÕES DE ESTUDO — Península Ibérica: Portugal (aulas 26 e 27) e Espanha (aulas 28 e 29).
 * Tópicos curtos; o material pode ter erros: "corrigido" = conferido em fonte aberta e o slide estava errado;
 * "conferir" = não confirmado em fonte aberta (fica fora do quiz).
 * Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

// =====================================================================
// PORTUGAL
// =====================================================================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Portugal'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Portugal', region, sub] : ['Portugal', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, kind, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: kind, items: mk(items) }); }

  // ---------- País ----------
  P('Portugal em números', 'numeros', [
    ['230 mil ha', 'Área plantada, segundo o slide'],
    ['650 milhões L', 'Produção anual aproximada'],
    ['55%', 'Tintos na produção; brancos 30% e outros estilos 15%'],
    ['250', 'Castas autóctones (mais uma centena de internacionais autorizadas)']
  ]);
  P('Marcos do vinho português', 'linha', [
    ['Séc. VII a.C.', 'Fenícios chegam à região e introduzem a agricultura'],
    ['Séc. I a.C. a II d.C.', 'Romanos: estilo de vida organizado (arquitetura, alimentos, gastronomia)'],
    ['Após os romanos', 'Visigodos criam o conceito de "defeso", em vigor até hoje'],
    ['Domínio mouro', 'Muçulmanos proibiam o vinho, mas acrescentaram aves e borrego à dieta'],
    ['1232 a 1238', 'Reconquista cristã, segundo o slide; mosteiros e conventos ajudam a formar a cozinha local', 'conferir'],
    ['1756', 'Marquês de Pombal demarca o Douro e proíbe outras regiões de produzir, para proteger o vinho do Douro'],
    ['Séc. XIX', 'Filoxera, a maior praga da história da viticultura, atinge os vinhedos'],
    ['Era Salazar', 'Imposições do governo: regiões voltam a plantar cereais'],
    ['1986', 'Entrada na União Europeia traz investimento e modernização; o slide diz 1984', 'corrigido']
  ]);
  P('Povos antigos em Portugal', 'fatos', [
    ['Fenícios', 'Chegaram por volta do séc. VII a.C. e introduziram a agricultura'],
    ['Celtas', 'Agricultura, caça, metalurgia e criação de animais para leite'],
    ['Romanos', 'Do séc. I a.C. ao II d.C., modernizaram a vida e a gastronomia'],
    ['Visigodos', 'Ocuparam a região após os romanos e criaram o "defeso"'],
    ['Mouros', 'Árabes muçulmanos: vinho proibido; contribuíram com a cozinha']
  ]);
  P('Regiões vinícolas de Portugal', 'lista', [
    ['', 'Vinho Verde, Trás-os-Montes, Porto e Douro, Távora e Varosa'],
    ['', 'Dão, Bairrada, Beira Interior'],
    ['', 'Tejo, Lisboa, Península de Setúbal'],
    ['', 'Alentejo, Algarve'],
    ['', 'Ilhas: Madeira e Açores']
  ]);
  P('Castas emblemáticas de Portugal', 'fatos', [
    ['Vinho Verde', 'Alvarinho (branca) e Vinhão (tinta)'],
    ['Douro', 'Gouveio (branca) e Tinta Roriz (tinta)'],
    ['Dão', 'Encruzado (branca) e Touriga Nacional (tinta)'],
    ['Bairrada', 'Maria Gomes (branca) e Baga (tinta)'],
    ['Alentejo', 'Antão Vaz (branca) e Trincadeira (tinta)'],
    ['Ilha da Madeira', 'Sercial (branca) e Tinta Negra (tinta)']
  ]);
  P('Touriga Nacional', 'fatos', [
    ['Origem', 'Natural do Dão, no centro-norte de Portugal'],
    ['Fama', 'Ficou conhecida no fim dos anos 1970, quando voltou a ser cultivada e vinificada após a revolução'],
    ['Importância', 'Segundo especialistas, a que melhor se adapta às suas principais regiões e a de maior aceitação do mercado']
  ]);
  P('Classificação dos vinhos portugueses', 'fatos', [
    ['DOC', 'Denominação de Origem Controlada'],
    ['IGP', 'Vinho regional (exemplo do slide: Alentejo)']
  ]);
  P('Grandes produtores citados nas aulas de Alentejo, Dão e Madeira', 'produtores', [
    ['João Portugal Ramos', ''], ['Esporão', ''], ['Cartuxa', ''], ['Casa de Sabicos', ''], ['Quinta da Cabriz', ''],
    ['Adega de Borba', ''], ['Quinta do Serrado', ''], ['Pêra Grave', ''], ['Vinha do Contador', ''], ['Justino\'s', '']
  ]);

  // ---------- Vinho Verde ----------
  R('Vinho Verde (Minho)', '', 'Vinho Verde em resumo', 'fatos', [
    ['Perfil', 'Vinho extremamente fresco, com características específicas'],
    ['Demarcação', 'Área demarcada pelo governo em 1908'],
    ['Área', 'Cerca de 21 mil ha (9% do total do país); o slide diz 34 mil ha', 'corrigido'],
    ['Tamanho', 'A maior DOC do país, segundo o slide', 'conferir'],
    ['Zonas-chave', 'Monção e Melgaço, no extremo norte']
  ]);
  R('Vinho Verde (Minho)', '', 'Castas do Vinho Verde', 'fatos', [
    ['Alvarinho', 'Uma das mais nobres: brancos complexos, florais, frutados, com acidez refrescante'],
    ['Loureiro', 'Aromas florais e cítricos; elegância e frescura; vinhos leves e aromáticos'],
    ['Trajadura', 'Suavidade e frescura, notas florais; muito usada em blends'],
    ['Amaral', 'Tinta menos comum: frutas e taninos suaves'],
    ['Padeiro', 'Também chamada Espadeiro: frutas vermelhas frescas, taninos suaves, tintos jovens'],
    ['Vinhão', 'Tinta característica: cor intensa e alta acidez, dá complexidade e cor']
  ]);
  R('Vinho Verde (Minho)', '', 'Grandes produtores do Vinho Verde', 'produtores', [
    ['Sogrape', ''], ['Avelada', ''], ['Soalheiro', ''], ['Emeal', '']
  ]);
  R('Vinho Verde (Minho)', 'Monção e Melgaço', 'Monção e Melgaço', 'fatos', [
    ['Local', 'Extremo norte do país'],
    ['Importância', 'Estão entre as áreas mais importantes do Vinho Verde'],
    ['Uva', 'Alvarinho, a casta nobre do Vinho Verde']
  ]);

  // ---------- Douro e Porto ----------
  R('Douro e Porto', '', 'Douro em resumo', 'numeros', [
    ['43 mil ha', 'Vinhedos da região mais importante de Portugal, no nordeste do país'],
    ['200 milhões L', 'Produção média anual'],
    ['27%', 'Parcela do volume do país, segundo o slide (200 de 650 milhões daria cerca de 31%)', 'conferir'],
    ['Porto', 'Principal centro econômico; região com pouco mais de 200 mil habitantes']
  ]);
  R('Douro e Porto', '', 'Estilos do Douro', 'fatos', [
    ['Berço dos fortificados', 'Nasceu aqui o Vinho do Porto, símbolo da enologia portuguesa'],
    ['Império dos tintos', 'Apesar da diversidade de climas, solos e castas, a região é representada sobretudo pelos tintos']
  ]);
  R('Douro e Porto', '', 'Castas do Douro', 'lista', [
    ['', 'Mais de 80 castas viníferas; 29 incentivadas pelo IVDP'],
    ['', 'Brancas: Viosinho, Malvasia Fina, Gouveio, Rabigato, Esgana Cão, Rabo de Ovelha'],
    ['', 'Tintas: Touriga Franca, Tinta Roriz, Touriga Nacional, Tinta Barroca, Tinto Cão, Tinta Amarela']
  ]);
  R('Douro e Porto', '', 'Xisto do Douro', 'lista', [
    ['', 'Rocha porosa, rica em matéria orgânica: o elemento mais importante do solo'],
    ['', 'Permite boa drenagem e retenção de calor, além de nutrientes']
  ]);
  R('Douro e Porto', 'Baixo Corgo', 'Baixo Corgo', 'fatos', [
    ['Posição', 'A mais ocidental das 3 áreas, com mais chuva'],
    ['Vinhos', 'Mais frescos (acidez elevada); os brancos sobressaem entre os secos'],
    ['Produtores', 'Calheiros Cruz, Casa da Fonte Pequena, Dona Matilde']
  ]);
  R('Douro e Porto', 'Cima Corgo', 'Cima Corgo', 'fatos', [
    ['Posição', 'Parte central da zona de produção, com condições climáticas ideais'],
    ['Produtores', 'Quinta do Vale Dona Maria, Quinta da Foz, Quinta do Panascal, Quinta das Carvalhas']
  ]);
  R('Douro e Porto', 'Douro Superior', 'Douro Superior', 'fatos', [
    ['Posição', 'Parte alta do rio, com pouca chuva'],
    ['Vinhos', 'Tendem a ser mais alcoólicos e potentes'],
    ['Produtores', 'Quinta do Vale Meão, Quinta de Vila Maior, Quinta do Reguengo, Dona Berta']
  ]);
  R('Douro e Porto', '', 'Vinho do Porto', 'fatos', [
    ['O que é', 'Vinho fortificado, produção iniciada no séc. XVII; símbolo maior da enologia portuguesa'],
    ['Elaboração', 'Uvas maduras são prensadas e iniciam a fermentação'],
    ['Fortificação', 'A fermentação é interrompida pela adição de álcool'],
    ['Envelhecimento', 'Conforme a categoria desejada'],
    ['Mudança de rumo', 'Com o Porto, o Douro passou a se dedicar só a ele, até o Barca Velha (1952)']
  ]);
  R('Douro e Porto', '', 'Categorias de Vinho do Porto', 'fatos', [
    ['Ruby', 'Entre 2 e 3 anos em barris, segundo o slide', 'conferir'],
    ['Tawny', 'Mínimo de 5 anos em barris, segundo o slide', 'conferir'],
    ['Old Tawny', '10, 20, 30 ou 40 anos'],
    ['LBV', 'De uma boa safra, entre 4 e 6 anos no barril'],
    ['Colheita', 'Ótima safra, mínimo de 7 anos em barril'],
    ['Vintage', 'Safra excelente: 2 a 3 anos no barril, feito para evoluir na garrafa']
  ]);
  R('Douro e Porto', '', 'Barca Velha', 'fatos', [
    ['Criador', 'Fernando Nicolau de Almeida, enólogo da Casa Ferreirinha'],
    ['1ª safra', '1952, para mostrar o potencial do Douro em vinhos secos'],
    ['Quando sai', 'Só em safras excepcionais'],
    ['Castas', 'Touriga Nacional, Tinta Roriz, Touriga Franca e Tinta Barroca'],
    ['Safras', '1952, 1953, 1954, 1957, 1964, 1965, 1966, 1978, 1981, 1983, 1985, 1991, 1995, 1999, 2000, 2004, 2008, 2011 (slide)', 'conferir']
  ]);
  R('Douro e Porto', '', 'Grandes produtores do Douro', 'produtores', [
    ['Casa Ferreirinha', ''], ['Taylor\'s', ''], ['Quinta do Portal', ''], ['Niepoort', ''], ['Quinta da Pacheca', ''],
    ['Quinta do Valado', ''], ['Alves de Sousa', ''], ['Quinta da Pedra Alta', ''], ['Quinta do Vale Meão', ''], ['Quinta do Bucheiro', '']
  ]);

  // ---------- Dão ----------
  R('Dão', '', 'Dão em resumo', 'fatos', [
    ['Local', 'Ao sul do rio Douro; uma das regiões mais antigas e tradicionais do país'],
    ['Fama', 'Berço da Touriga Nacional'],
    ['Produção', 'Cerca de 200 empresas, mais de 80 milhões de litros por ano'],
    ['Área', 'Mais de 20 mil ha, segundo o slide', 'conferir'],
    ['Sub-regiões', 'Viseu, Guarda, Coimbra e Serra da Estrela (a mesma do famoso queijo de ovelha)']
  ]);
  R('Dão', '', 'História do Dão', 'linha', [
    ['1908', 'Área demarcada (como o Vinho Verde)'],
    ['Décadas depois', 'Perdeu quase todos os vinhedos para o cultivo de cereais'],
    ['Após 1974', 'Com a revolução, os produtores ganham espaço e Portugal descobre a Touriga Nacional'],
    ['Hoje', 'Vinhos que rivalizam com o Douro; brancos de Encruzado, encorpados e complexos, em geral passam por carvalho']
  ]);
  R('Dão', '', 'Castas do Dão', 'fatos', [
    ['Permitidas', '49 castas: 25 brancas e 24 tintas'],
    ['Recomendadas', 'A Comissão Vitivinícola recomenda 18 (9 tintas e 9 brancas)'],
    ['Brancas', 'Encruzado, Bical, Verdelho, Barcelo, Terrantez, Uva-Cão, Cerceal, Malvasia Fina, Rabo de Ovelha'],
    ['Tintas', 'Touriga Nacional, Alfrocheiro, Trincadeira, Aragonez, Tinto Cão, Jaen, Bastardo, Rufete, Alvarelhão'],
    ['Internacionais permitidas', 'Semillon, Pinot Blanc, Cabernet Sauvignon, Pinot Noir']
  ]);

  // ---------- Bairrada ----------
  R('Bairrada', '', 'Bairrada em resumo', 'fatos', [
    ['Tintos', '80% da produção'],
    ['Espumantes', 'Uma das melhores regiões para espumantes'],
    ['Castas', 'Baga é de longe a mais importante; também Touriga Nacional, Castelão e Jaen'],
    ['Brancas', 'Sercial, Arinto, Bical e outras'],
    ['Mateus Rosé', 'Por muitos anos o vinho mais conhecido da região, da Sogrape e feito de Baga, segundo o slide', 'conferir']
  ]);
  R('Bairrada', '', 'Baga', 'fatos', [
    ['O que é', 'Tinta cultivada principalmente na Bairrada; resistente a condições climáticas adversas'],
    ['Cachos', 'Compactos, com bagos pequenos e espessos'],
    ['Vinhos', 'Cor profunda, taninos firmes, acidez elevada e longa guarda'],
    ['Uso', 'Em blends ou monovarietal']
  ]);
  R('Bairrada', '', 'Produtores da Bairrada', 'produtores', [
    ['Luis Pato', ''], ['Filipa Pato', ''], ['Sidónio de Sousa', '']
  ]);
  R('Bairrada', 'Anadia', 'Anadia', 'fatos', [
    ['Apelido', 'Conhecida como "Capital do Espumante"'],
    ['Peso', 'A região responde por cerca de dois terços do espumante nacional']
  ]);
  R('Bairrada', '', 'Luis Pato e a Baga', 'fatos', [
    ['Luis Pato', 'Líder na promoção da Baga; exemplo: o Baga Natural'],
    ['Filipa Pato e Sidónio de Sousa', 'Também elevam a Baga a padrões de excelência']
  ]);

  // ---------- Alentejo ----------
  R('Alentejo', '', 'Alentejo em resumo', 'numeros', [
    ['22 mil ha', 'Vinhedos; região no centro-sul de Portugal, capital Évora'],
    ['107 milhões L', 'Produção média anual (cerca de 14% do volume do país)'],
    ['700 mil', 'Habitantes, pouco mais; Évora é o principal centro econômico'],
    ['8', 'Denominações (DOC) para sub-regiões; também IGP (vinho regional)']
  ]);
  R('Alentejo', '', 'Estilos do Alentejo', 'fatos', [
    ['Portfólio', 'Tintos, brancos, rosés, espumantes e aguardentes'],
    ['Perfil', 'Não há "perfil de vinho" único: solos e climas diversos, a pluralidade é a regra']
  ]);
  R('Alentejo', '', 'Castas do Alentejo', 'fatos', [
    ['Diversidade', '36 variedades brancas e 37 tintas'],
    ['Foco', 'A produção se concentra em pouco mais de 15 castas']
  ]);
  R('Alentejo', '', 'Melhores castas brancas do Alentejo', 'fatos', [
    ['Antão Vaz', '1.251 ha; destaque em Évora e Vidigueira'],
    ['Síria (Roupeiro)', '2ª branca mais cultivada (872 ha); grande intensidade aromática'],
    ['Arinto', '3ª mais cultivada (776 ha); alta acidez e potencial de guarda']
  ]);
  R('Alentejo', '', 'Melhores castas tintas do Alentejo', 'fatos', [
    ['Aragonez (Tempranillo)', 'A mais plantada (4.244 ha); baixa acidez, muito aromática, compõe bem os cortes'],
    ['Trincadeira', '2ª mais plantada (3.029 ha) e considerada a melhor; vinhos encorpados e aromáticos'],
    ['Alicante Bouschet', '3ª mais plantada (2.551 ha); nasceu na França do cruzamento de Grenache e Petit Bouschet']
  ]);
  R('Alentejo', '', 'Outras castas do Alentejo (área)', 'numeros', [
    ['1.980 ha', 'Syrah'],
    ['1.305 ha', 'Touriga Nacional'],
    ['1.016 ha', 'Castelão (Periquita)'],
    ['838 ha', 'Cabernet Sauvignon'],
    ['409 ha', 'Touriga Franca'],
    ['398 ha', 'Alfrocheiro'],
    ['265 ha', 'Rabo de Ovelha'],
    ['261 ha', 'Ferão Pires'],
    ['108 ha', 'Manteúdo'],
    ['72 ha', 'Perrum'],
    ['28 ha', 'Trincadeira das Pratas'],
    ['4 ha', 'Tamarez']
  ]);
  R('Alentejo', '', 'Solos das sub-regiões do Alentejo', 'fatos', [
    ['Portalegre', 'Granito nas partes altas e xisto nas baixas'],
    ['Borba', 'Mármore e xisto vermelho: solo pobre'],
    ['Redondo', 'Granito e xisto em proporção equilibrada'],
    ['Reguengos', 'Solo extremamente pobre, de xisto'],
    ['Évora', 'Pardo-mediterrânico com presença de mármore'],
    ['Granja-Amareleja', 'Solo extremamente pobre, de xisto'],
    ['Moura', 'Barro e calcário, com boa retenção de água'],
    ['Vidigueira', 'Granito e xisto, pobre e de baixo rendimento']
  ]);
  R('Alentejo', 'Portalegre', 'Portalegre', 'fatos', [
    ['Posição', 'Extremo norte do Alentejo e a mais alta sub-região'],
    ['Altitude', 'Média de mil metros, na Serra de São Mamede; vinhos mais frescos'],
    ['Destaque', 'Casta tinta exótica Grand Noir'],
    ['Produtores', 'Tapada do Chaves, Altas Quintas, Rui Reguinga, Quinta da Fonte Souto']
  ]);
  R('Alentejo', 'Borba', 'Borba', 'fatos', [
    ['Clima', 'Maior pluviosidade e menos horas de sol, segundo o slide; vinhos menos alcoólicos e mais ácidos', 'conferir'],
    ['Área', '3.874 ha: a 2ª maior área plantada do Alentejo'],
    ['Produtores', 'Quinta do Zambujeiro, Herdade da Cardeira, Herdade do Penedo Gordo, Adega de Borba']
  ]);
  R('Alentejo', 'Redondo', 'Redondo', 'fatos', [
    ['Local', 'Serra d\'Ossa'],
    ['Fama', 'Consistência na qualidade, graças ao clima equilibrado'],
    ['Castas', 'Trincadeira e Aragonez dão grandes resultados'],
    ['Produtores', 'Herdade do Freixo, Herdade da Maroteira, Solar dos Lobos, Adega de Redondo']
  ]);
  R('Alentejo', 'Reguengos', 'Reguengos', 'fatos', [
    ['Área', '4.549 ha: a maior sub-região do Alentejo'],
    ['Clima', 'Extremamente continental: invernos muito frios e verões muito quentes'],
    ['Particularidades', 'Alguns dos vinhedos mais velhos da região e as menores propriedades'],
    ['Produtores', 'Monte das Serras, Luis Duarte, Carmim, Monte dos Perdigões']
  ]);
  R('Alentejo', 'Évora', 'Évora', 'fatos', [
    ['Área', 'Cerca de 1.418 ha de vinhedos'],
    ['Papel', 'Grande centro econômico; abriga algumas das melhores vinícolas do país'],
    ['Vinhos', 'Por solo e clima quente, tendem a ser mais encorpados e longevos'],
    ['Produtores', 'Cartuxa (Eugénio de Almeida), Pêra Grave, Herdade da Fonte Coberta, Casa Relvas']
  ]);
  R('Alentejo', 'Granja-Amareleja', 'Granja-Amareleja', 'fatos', [
    ['Clima', 'A sub-região mais árida, na fronteira com a Espanha; clima extremamente quente'],
    ['Solo', 'Barro e xisto'],
    ['Vinhos', 'Safras de maturação precoce e alto teor alcoólico'],
    ['Destaque', 'Casta tinta exótica Moreto'],
    ['Produtores', 'Encostas do Alqueva, Cooperativa Agrícola da Granja, Sociedade Agrícola do Voltamujinho']
  ]);
  R('Alentejo', 'Vidigueira', 'Vidigueira', 'fatos', [
    ['Fama', 'Considerada a mais especial das sub-regiões'],
    ['Clima e solo', 'Ameno pela influência marítima; granito e xisto'],
    ['Área', '2.668 ha com várias castas'],
    ['Destaque', 'Casta tinta exótica Tinta Grossa'],
    ['Produtores', 'Cortes de Cima, Paulo Laureano, Herdade do Peso']
  ]);
  R('Alentejo', 'Moura', 'Moura', 'fatos', [
    ['Tamanho', 'A menor sub-região: menos de 100 ha'],
    ['Solo', 'Calcário e barro'],
    ['Destaque', 'Castelão (Periquita)'],
    ['Produtores', 'Herdade dos Coteis, Encostas do Alqueva, Herdade dos Machados']
  ]);
  R('Alentejo', '', 'Vinho de talha', 'fatos', [
    ['O que é', 'Vinho natural fiel à tradição romana, com 2 mil anos'],
    ['Método', 'Fermentado em ânforas de barro, sem aditivos'],
    ['Filtragem', 'Rústica, usando as próprias cascas'],
    ['Exclusividade', 'O Alentejo é a única região portuguesa a produzir vinho de talha']
  ]);

  // ---------- Madeira ----------
  R('Madeira', '', 'Vinho Madeira', 'fatos', [
    ['História', 'Negligenciado por anos e usado sobretudo na culinária europeia; voltou ao circuito dos grandes vinhos'],
    ['Torna-viagem', 'Um dos poucos vinhos do mundo expostos a altas temperaturas'],
    ['Por quê', 'O calor dá ao açúcar as notas aromáticas características']
  ]);
  R('Madeira', '', 'Uvas do Madeira', 'fatos', [
    ['Brancas', 'Sercial, Verdelho, Bual (Boal) e Malvasia'],
    ['Tinta', 'Tinta Negra']
  ]);
  R('Madeira', '', 'Estilos do Madeira', 'fatos', [
    ['Finest', '3 anos'],
    ['Reserva', '5 anos'],
    ['Reserva Especial (Reserva Velha)', '10 anos'],
    ['Reserva Extra', '15 anos'],
    ['Colheita (safrado)', '5 anos'],
    ['Vintage (safrado)', '20 anos']
  ]);

  // ---------- Harmonização ----------
  H('Minho e Douro', 'Cozinha do Minho e do Douro', 'lista', [
    ['', 'Elementos mais importantes: bacalhau, chouriço, cabrito, vinho, porco, azeite, batatas e hortaliças']
  ]);
  H('Minho', 'Cozinha do Minho', 'fatos', [
    ['Bacalhau à Braga', 'Variação de bacalhau com batatas, ovos, azeitonas e outros ingredientes locais; receita tradicional']
  ]);
  H('Douro', 'Cozinha do Douro', 'fatos', [
    ['Cabrito duriense', 'Cabrito assado com ervas locais, cozido lentamente para manter a suculência'],
    ['Posta à mirandesa', 'Bife de carne mirandesa grelhado, com acompanhamentos simples que destacam a carne']
  ]);
  H('Alentejo', 'Base da cozinha alentejana', 'lista', [
    ['', 'Pão, azeite, vinho, porco, borrego e hortaliças'],
    ['', 'A identidade vem do uso criativo dos alimentos']
  ]);
  H('Alentejo', 'Cozinha do Alentejo', 'fatos', [
    ['Pão alentejano', 'Trigo, sal, fermento e água morna; segundo o slide, considerado recentemente o melhor do mundo', 'conferir'],
    ['Porco preto', 'Também chamado porco da raça alentejana; origina embutidos, cozidos e presuntos'],
    ['Pata Negra', 'Segundo o slide, um dos presuntos mais caros do mundo, do porco preto alentejano', 'conferir'],
    ['Borrego', 'Cordeiro alentejano; segundo o slide, tem IGP própria em Portalegre', 'conferir'],
    ['Azeite', 'Alentejo está no topo do ranking mundial; Galega cobre 80% da área plantada'],
    ['Outras azeitonas', 'Cobrançosa (de Trás-os-Montes), Cordovil de Serpa (a mais amarga), Verdeal Alentejana']
  ]);

  var LEVELS = {
    'Portugal em números': 'medio',
    'Marcos do vinho português': 'avancado',
    'Povos antigos em Portugal': 'avancado',
    'Regiões vinícolas de Portugal': 'medio',
    'Castas emblemáticas de Portugal': 'medio',
    'Touriga Nacional': 'medio',
    'Classificação dos vinhos portugueses': 'avancado',
    'Grandes produtores citados nas aulas de Alentejo, Dão e Madeira': 'expert',
    'Vinho Verde em resumo': 'medio',
    'Castas do Vinho Verde': 'avancado',
    'Grandes produtores do Vinho Verde': 'expert',
    'Monção e Melgaço': 'avancado',
    'Douro em resumo': 'medio',
    'Estilos do Douro': 'medio',
    'Castas do Douro': 'avancado',
    'Xisto do Douro': 'avancado',
    'Baixo Corgo': 'avancado',
    'Cima Corgo': 'avancado',
    'Douro Superior': 'avancado',
    'Vinho do Porto': 'medio',
    'Categorias de Vinho do Porto': 'medio',
    'Barca Velha': 'avancado',
    'Grandes produtores do Douro': 'expert',
    'Dão em resumo': 'avancado',
    'História do Dão': 'avancado',
    'Castas do Dão': 'expert',
    'Bairrada em resumo': 'avancado',
    'Baga': 'avancado',
    'Produtores da Bairrada': 'expert',
    'Anadia': 'expert',
    'Luis Pato e a Baga': 'expert',
    'Alentejo em resumo': 'medio',
    'Estilos do Alentejo': 'medio',
    'Castas do Alentejo': 'avancado',
    'Melhores castas brancas do Alentejo': 'avancado',
    'Melhores castas tintas do Alentejo': 'avancado',
    'Outras castas do Alentejo (área)': 'expert',
    'Solos das sub-regiões do Alentejo': 'expert',
    'Portalegre': 'expert',
    'Borba': 'expert',
    'Redondo': 'expert',
    'Reguengos': 'expert',
    'Évora': 'avancado',
    'Granja-Amareleja': 'expert',
    'Vidigueira': 'expert',
    'Moura': 'expert',
    'Vinho de talha': 'avancado',
    'Vinho Madeira': 'medio',
    'Uvas do Madeira': 'avancado',
    'Estilos do Madeira': 'avancado',
    'Cozinha do Minho e do Douro': 'medio',
    'Cozinha do Minho': 'avancado',
    'Cozinha do Douro': 'avancado',
    'Base da cozinha alentejana': 'medio',
    'Cozinha do Alentejo': 'avancado' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'PT', version: 1, cards: cards };
})());

// =====================================================================
// ESPANHA
// =====================================================================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Espanha'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Espanha', region, sub] : ['Espanha', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, kind, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: kind, items: mk(items) }); }

  // ---------- País ----------
  P('A Espanha em números', 'numeros', [
    ['955 mil ha', 'Vinhedos'],
    ['3,5 bilhões L', 'Produção, que ultrapassa esse volume'],
    ['52%', 'Tintos no volume; brancos 24% e espumantes, rosés e outros 24%'],
    ['4.300', 'Vinícolas'],
    ['29,3 L', 'Consumo por habitante por ano, segundo o slide', 'conferir']
  ]);
  P('Classificação dos vinhos espanhóis', 'lista', [
    ['', 'D.O.P. (denominação de origem protegida)'],
    ['', 'I.G.P. (indicação geográfica protegida)'],
    ['', 'Vino']
  ]);
  P('Crianza', 'fatos', [
    ['Tintos', '6 meses em barril e 18 em garrafa'],
    ['Brancos e rosés', '18 meses entre barril e garrafa, sem mínimo exigido de barril']
  ]);
  P('Reserva', 'fatos', [
    ['Tintos', '12 meses em barril e 24 em garrafa'],
    ['Brancos e rosés', '24 meses no total, com 6 em barril; o slide diz 6 em barril e 12 em garrafa', 'corrigido']
  ]);
  P('Gran Reserva', 'fatos', [
    ['Tintos', '18 meses em barril e 42 em garrafa'],
    ['Brancos e rosés', '6 meses em barril e 42 em garrafa']
  ]);
  P('Climas da Espanha', 'fatos', [
    ['Noroeste (Galícia)', 'Clima marítimo, cerca de 1.300 mm de chuva por ano'],
    ['Nordeste e Sul', 'Clima mediterrânico, média de 800 mm'],
    ['Meseta central', 'Clima continental, média de 400 mm']
  ]);
  P('Marcos do vinho espanhol', 'linha', [
    ['Séc. IX a V a.C.', 'Fenícios introduzem a viticultura na Península Ibérica, seguidos pelos gregos', 'conferir'],
    ['Séc. I a.C. a II d.C.', 'Romanos criam um estilo de vida moderno e organizado'],
    ['Domínio mouro', 'Muçulmanos proibiam o vinho, mas contribuíram com a gastronomia local'],
    ['Colônias', 'Produção atinge o ápice, com demanda interna e comércio com as colônias americanas'],
    ['', 'Guerras e filoxera causam declínio'],
    ['Séc. XX e XXI', 'Transformação em qualidade e diversidade; as Denominações de Origem (DO) regulam e promovem as regiões']
  ]);
  P('Tempranillo', 'fatos', [
    ['Papel', 'Reconhecida há tempos como a uva mais importante da Espanha'],
    ['Sinônimos', 'Tinta del Toro, Tinta del País, Cencibel, Ull de Llebre, entre outros'],
    ['Perfil', 'Maturação precoce, bons níveis de açúcar e acidez, muito resistente']
  ]);
  P('Castas brancas da Espanha', 'fatos', [
    ['Verdejo', 'Sobretudo em Rueda: brancos frescos e aromáticos, acidez vibrante e boa estrutura'],
    ['Albariño', 'Sobretudo na Galícia: intensidade aromática e frescor'],
    ['Viura', 'Também chamada Macabeo; versátil, em Rioja e na Catalunha']
  ]);
  P('Castas tintas da Espanha', 'fatos', [
    ['Garnacha', 'Origem espanhola; cultivada em várias regiões e também na França e na Austrália'],
    ['Cariñena', 'Frutas vermelhas escuras e especiarias, ameixa seca em regiões quentes; taninos e acidez'],
    ['Monastrell', 'Sobretudo em Jumilla e no sul da França; aromática e estruturada']
  ]);
  P('Grandes produtores citados na aula de Castela e Leão, Catalunha e Andaluzia', 'produtores', [
    ['Emilio Moro', ''], ['Vega-Sicilia', ''], ['Pingus', ''], ['Aalto', ''], ['Álvaro Palacios', ''],
    ['Clos Mogador', ''], ['Clos Erasmus', ''], ['Maestro Sierra', ''], ['Píntia', ''], ['Tio Pepe', '']
  ]);

  // ---------- Rioja ----------
  R('Rioja', '', 'Rioja em resumo', 'fatos', [
    ['Área', 'Cerca de 65.000 ha de vinhedos'],
    ['Vinícolas', 'Cerca de 2.600, segundo o slide', 'conferir'],
    ['Produção', 'Em torno de 300 milhões de litros por ano'],
    ['Geografia', 'Três sub-regiões; o Rio Ebro corta toda a região'],
    ['Cidades', 'Logroño (capital) e Haro'],
    ['Casta', 'Tempranillo é a grande casta']
  ]);
  R('Rioja', '', 'Curiosidades de Rioja', 'lista', [
    ['', 'Na filoxera, Rioja recebeu mão de obra de Bordeaux: a praga chegou aqui décadas depois'],
    ['', 'Marquês de Murrieta usou o primeiro barril de carvalho francês em Rioja, em 1852, segundo o slide']
  ]);
  cards[cards.length - 1].items[1].tag = 'conferir';
  R('Rioja', 'Rioja Alta', 'Rioja Alta', 'fatos', [
    ['Importância', 'A mais importante das três sub-regiões'],
    ['Área', 'Pouco mais de 27 mil ha, segundo o slide', 'conferir'],
    ['Perfil', 'Clima e solos perfeitos para a Tempranillo']
  ]);
  R('Rioja', 'Rioja Alavesa', 'Rioja Alavesa', 'fatos', [
    ['Importância', '2ª sub-região mais importante'],
    ['Local', 'Na zona do País Basco'],
    ['Área', 'Pouco mais de 13 mil ha, segundo o slide', 'conferir']
  ]);
  R('Rioja', 'Rioja Oriental', 'Rioja Oriental', 'fatos', [
    ['Nome antigo', 'Rioja Baja'],
    ['Perfil', 'A mais simples; no sudeste, com solos pobres'],
    ['Área', 'Pouco mais de 24 mil ha, segundo o slide', 'conferir']
  ]);
  R('Rioja', '', 'Grandes produtores de Rioja', 'produtores', [
    ['Bodegas Roda', ''], ['Marqués de Murrieta', ''], ['Marqués de Vargas', ''], ['Bodega Muga', ''],
    ['Bodegas Faustino', ''], ['Finca Allende', ''], ['Viña Tondonia', '']
  ]);

  // ---------- Navarra ----------
  R('Navarra', '', 'Navarra em resumo', 'fatos', [
    ['Área', 'Cerca de 11.000 ha de vinhedos'],
    ['Vinícolas', 'Cerca de 90, segundo o slide', 'conferir'],
    ['Produção', 'Cerca de 52 milhões de litros por ano, segundo o slide', 'conferir'],
    ['Fama', 'Seus rosés são considerados os melhores do país'],
    ['Castas', 'Tempranillo, Garnacha, Cabernet, Syrah, Chardonnay, Viura']
  ]);
  R('Navarra', '', 'Sub-regiões de Navarra', 'lista', [
    ['', 'Valdizarbe'], ['', 'Tierra Estella'], ['', 'Ribera Alta'], ['', 'Baja Montaña'], ['', 'Ribera Baja']
  ]);
  R('Navarra', '', 'Grandes produtores de Navarra', 'produtores', [
    ['Julián Chivite', ''], ['Gran Feudo', ''], ['Viña Zorzal', '']
  ]);

  // ---------- Castela e Leão ----------
  R('Castela e Leão', 'Ribera del Duero', 'Ribera del Duero em resumo', 'fatos', [
    ['Início', '1864, com a fundação da Bodega Vega-Sicilia'],
    ['Área', 'Cerca de 20.000 ha, segundo o slide', 'conferir'],
    ['DO', 'Criada em 1982, quando havia apenas 24 vinícolas; hoje mais de 200 bodegas'],
    ['Madeira', 'Usa carvalho americano, uma das poucas regiões europeias a fazê-lo'],
    ['Geografia', 'A DO corta 4 províncias; 85% dos vinhedos em Burgos, segundo o slide', 'conferir']
  ]);
  R('Castela e Leão', 'Ribera del Duero', 'Castas de Ribera del Duero', 'fatos', [
    ['Tempranillo', 'Aqui chamada Tinta del País; cerca de 80% dos vinhedos'],
    ['Outras tintas', 'Garnacha Tinta, Cabernet Sauvignon, Merlot e Malbec'],
    ['Branca', 'Albillo é a única reconhecida pela DO'],
    ['Altitude', 'Média de 800 m, com amplitude térmica de 20°']
  ]);
  R('Castela e Leão', 'Ribera del Duero', 'Vega-Sicilia', 'fatos', [
    ['Fama', 'O vinho mais aclamado da Espanha'],
    ['Fundador', 'Eloy Lecanda, em 1864'],
    ['Único', 'Só em grandes safras; sem Único, as uvas vão para outros rótulos, como o Valbuena 5º'],
    ['Uvas', 'Tempranillo (Tinta del País) e Cabernet Sauvignon'],
    ['Envelhecimento', '7 anos em carvalho americano e mais 3 em garrafa antes de sair'],
    ['Reserva Especial', 'Versão não safrada, ao lado do Único (safrado)']
  ]);
  R('Castela e Leão', '', 'Outras regiões de Castela e Leão', 'fatos', [
    ['Toro', 'Tintos robustos de Tinta del Toro (Tempranillo)'],
    ['Rueda', 'Brancos refrescantes de Verdejo'],
    ['Bierzo', 'Tintos encorpados de Mencía'],
    ['Cigales', 'Excelentes rosés de Tempranillo'],
    ['León', 'Tintos de Tempranillo']
  ]);
  R('Castela e Leão', '', 'DOs de Castela e Leão', 'lista', [
    ['', 'Bierzo, León, Cigales, Arlanza'],
    ['', 'Ribera del Duero, Rueda, Toro'],
    ['', 'Tierra del Vino de Zamora e Arribes']
  ]);

  // ---------- Catalunha ----------
  R('Catalunha', 'Priorat', 'Priorat em resumo', 'fatos', [
    ['Local', 'Província de Tarragona, Catalunha'],
    ['Status', 'DOQ (Denominació d\'Origen Qualificada); o slide diz D.O.', 'corrigido'],
    ['Área da DO', 'Cerca de 19,8 mil ha demarcados; o slide diz 17 mil', 'corrigido'],
    ['Vinhedos', 'Cerca de 2.000 ha (2.010 em 2018); o slide diz 1.900', 'corrigido'],
    ['Produção', 'Cerca de 2,8 milhões de litros (2008); o slide diz 700 mil', 'corrigido'],
    ['Vinícolas', 'Pouco menos de 100, segundo o slide', 'conferir']
  ]);
  R('Catalunha', 'Priorat', 'Castas e solo do Priorat', 'fatos', [
    ['Tintas', 'Garnacha, Cariñena e Syrah'],
    ['Brancas', 'Garnacha Blanca, Macabeo e Viognier'],
    ['Llicorella', 'Solo nobre de xisto, granito e ardósia, muito escuro e úmido'],
    ['Rendimentos', 'Muito baixos, mas vinhos nobres e potentes']
  ]);
  R('Catalunha', 'Priorat', 'História do Priorat', 'linha', [
    ['1979', 'René Barbier funda a Clos Mogador e apresenta o Priorat ao mundo'],
    ['1993', 'Álvaro Palacios lança o L\'Ermita, vendido acima do preço do Vega-Sicilia, segundo o slide'],
    ['', 'Carlos Pastrana, José Luis Pérez e Daphne Glorian ajudam a consolidar a reputação']
  ]);
  cards[cards.length - 1].items[1].tag = 'conferir';
  R('Catalunha', 'Priorat', 'Rendimento e classificação do Priorat', 'fatos', [
    ['Máximo', '6.000 kg de uva por hectare (outras regiões aclamadas: 7 a 10 mil)'],
    ['Vi de Vila', '5.000 kg/ha, vinhedos com mínimo de 10 anos, segundo o slide', 'conferir'],
    ['Vi de Paratge', '4.000 kg/ha, mínimo de 15 anos, segundo o slide', 'conferir'],
    ['Vinya Classificada', '3.000 kg/ha, 20 anos, segundo o slide', 'conferir'],
    ['Gran Vinya Classificada', '3.000 kg/ha, 35 anos, segundo o slide', 'conferir'],
    ['Vinhas Velhas', 'Vinhedos plantados antes de 1945, segundo o slide', 'conferir']
  ]);
  R('Catalunha', 'Cava', 'Cava em resumo', 'fatos', [
    ['O que é', 'Espumante espanhol de método clássico; Penedès é o principal polo'],
    ['Criação', 'Josep Raventós, da Codorníu, fez o primeiro em 1872; o slide diz entre 1860 e 1870', 'corrigido'],
    ['Peso da Catalunha', 'Cerca de 95% do Cava; o slide diz 90%', 'corrigido'],
    ['Capital', 'Sant Sadurní d\'Anoia, em Penedès'],
    ['Abrangência', 'Único vinho espanhol com DO produzido em várias regiões do país'],
    ['Área', '31.000 ha somando todas as áreas, segundo o slide', 'conferir']
  ]);
  R('Catalunha', 'Cava', 'Uvas do Cava', 'fatos', [
    ['Permitidas', '9 uvas; as melhores: Chardonnay, Parellada, Macabeo e Xarel·lo'],
    ['Brancas', 'Chardonnay, Parellada, Macabeo, Xarel·lo e Subirat'],
    ['Tintas', 'Pinot Noir, Garnacha, Monastrell e Trepat']
  ]);
  R('Catalunha', 'Cava', 'Classificações do Cava', 'fatos', [
    ['Cava', '9 meses sobre as borras (sur lie)'],
    ['Cava Reserva', '15 meses sur lie'],
    ['Cava Gran Reserva', '30 meses sur lie']
  ]);
  R('Catalunha', 'Cava', 'Regiões e produtores do Cava', 'fatos', [
    ['Municípios', '159 podem produzir, 115 deles na Catalunha, segundo o slide', 'conferir'],
    ['Regiões com DO', 'Catalunha, Aragão, Rioja, Navarra, País Basco, Extremadura e Valência'],
    ['Produtores', 'Freixenet, Codorníu, Faustino e Juvé y Camps']
  ]);

  // ---------- Andaluzia: Jerez ----------
  R('Andaluzia', 'Jerez-Xérès-Sherry', 'Jerez em resumo', 'fatos', [
    ['Localização', 'Sul do país; de importância histórica maior que qualquer outra região da Espanha'],
    ['Área', 'Cerca de 10.000 ha plantados, segundo o slide', 'conferir'],
    ['Albariza', 'Solo branco de muito calcário e pouca argila, rico em minerais, retém a água'],
    ['Chuva', 'Média de 600 mm por ano'],
    ['Ventos', 'Poniente e Levante beneficiam os vinhedos, com pouco histórico de pragas']
  ]);
  R('Andaluzia', 'Jerez-Xérès-Sherry', 'O vinho de Jerez', 'fatos', [
    ['Zona', 'Entre Jerez de la Frontera, Puerto de Santa María e Sanlúcar de Barrameda'],
    ['Uvas', 'Palomino (principal), Moscatel de Alexandria e Pedro Ximénez'],
    ['Álcool', 'De 15,5% a 18%, segundo o slide', 'conferir'],
    ['Envelhecimento', 'Mínimo de 2 anos em barris de carvalho americano; o slide diz 3', 'corrigido'],
    ['Botas', 'Barris de 600 litros, segundo o slide (a fonte aberta fala em 500 L)', 'conferir'],
    ['Flor', 'Barris não cheios, para o oxigênio agir sobre a camada de Saccharomyces beticus']
  ]);
  R('Andaluzia', 'Jerez-Xérès-Sherry', 'Estilos secos de Jerez', 'fatos', [
    ['Fino', 'Pálido e seco, com 15% por causa da "flor"'],
    ['Manzanilla', 'Como o Fino, feita em Sanlúcar de Barrameda'],
    ['Amontillado', 'Oxidado pelo rompimento da "flor"'],
    ['Palo Cortado', 'Muito oxidado'],
    ['Oloroso', 'Oxidado; fica mais de 10 anos na solera, segundo o slide', 'conferir']
  ]);
  R('Andaluzia', 'Jerez-Xérès-Sherry', 'Estilos doces de Jerez', 'fatos', [
    ['Pedro Ximénez', 'Doce natural, feito com a casta Pedro Ximénez'],
    ['Moscatel', 'Doce natural, feito com a casta Moscatel'],
    ['Pale Cream, Cream e Medium', 'Doces por adição de mosto concentrado de P.X., segundo o slide', 'conferir'],
    ['Base dos adoçados', 'Os vinhos doces por adição de mosto são feitos com a casta Palomino']
  ]);
  R('Andaluzia', 'Jerez-Xérès-Sherry', 'Solera de Jerez', 'lista', [
    ['', 'Barris empilhados em andanas: solera embaixo, 1ª e 2ª criaderas acima'],
    ['', 'A saca retira vinho da solera; o rocío repõe com o vinho da fileira de cima']
  ]);

  // ---------- Harmonização ----------
  H('Espanha', 'Tapas espanholas', 'fatos', [
    ['Conceito', 'Pequenas porções servidas em bares para acompanhar bebidas'],
    ['Origem', 'Da prática de cobrir (tapar) as bebidas'],
    ['Cortesia', 'Tapa oferecida ao pedir uma bebida cria ambiente informal e de convivência']
  ]);
  H('Rioja e Navarra', 'Cozinha de Rioja e Navarra', 'lista', [
    ['', 'Chorizo riojano (embutido) e cordeiro'],
    ['', 'Pimientos del piquillo (pimentões) e pochas (feijões)'],
    ['', 'Queso Roncal (queijo de ovelha) e hortaliças']
  ]);
  H('Catalunha', 'Cozinha da Catalunha', 'fatos', [
    ['Azeite', 'A Catalunha orgulha-se de produzir um dos melhores azeites do mundo'],
    ['Paella catalã', 'Versão com frutos do mar'],
    ['Escudella i Carn', 'Sopa de carne'],
    ['Ingredientes', 'Açafrão, tomates e hortaliças']
  ]);
  H('Ribera del Duero', 'Cozinha de Ribera del Duero', 'fatos', [
    ['Lechazo asado', 'Cordeiro assado'],
    ['Morcilla de Burgos', 'Embutido típico'],
    ['Queso de oveja', 'Queijo de ovelha'],
    ['Pimentões marinados', 'Também entre os pratos de destaque']
  ]);
  H('Jerez de la Frontera', 'Cozinha de Jerez', 'fatos', [
    ['Andaluzia', 'Encontro da cultura alimentar europeia com influências árabes e africanas'],
    ['Ingredientes', 'Azeites, amêndoas, especiarias, alhos e peixes'],
    ['Salmorejo', 'Sopa fria de tomate, pão, azeite e alho'],
    ['Cazón en adobo', 'Peixe marinado e frito'],
    ['Pescado a la sal', 'Peixe assado em crosta de sal']
  ]);

  var LEVELS = {
    'A Espanha em números': 'medio',
    'Classificação dos vinhos espanhóis': 'medio',
    'Crianza': 'medio',
    'Reserva': 'medio',
    'Gran Reserva': 'medio',
    'Climas da Espanha': 'avancado',
    'Marcos do vinho espanhol': 'avancado',
    'Tempranillo': 'medio',
    'Castas brancas da Espanha': 'medio',
    'Castas tintas da Espanha': 'medio',
    'Grandes produtores citados na aula de Castela e Leão, Catalunha e Andaluzia': 'expert',
    'Rioja em resumo': 'medio',
    'Curiosidades de Rioja': 'expert',
    'Rioja Alta': 'avancado',
    'Rioja Alavesa': 'avancado',
    'Rioja Oriental': 'avancado',
    'Grandes produtores de Rioja': 'avancado',
    'Navarra em resumo': 'avancado',
    'Sub-regiões de Navarra': 'expert',
    'Grandes produtores de Navarra': 'expert',
    'Ribera del Duero em resumo': 'medio',
    'Castas de Ribera del Duero': 'avancado',
    'Vega-Sicilia': 'avancado',
    'Outras regiões de Castela e Leão': 'avancado',
    'DOs de Castela e Leão': 'expert',
    'Priorat em resumo': 'avancado',
    'Castas e solo do Priorat': 'avancado',
    'História do Priorat': 'expert',
    'Rendimento e classificação do Priorat': 'expert',
    'Cava em resumo': 'medio',
    'Uvas do Cava': 'avancado',
    'Classificações do Cava': 'avancado',
    'Regiões e produtores do Cava': 'expert',
    'Jerez em resumo': 'avancado',
    'O vinho de Jerez': 'medio',
    'Estilos secos de Jerez': 'medio',
    'Estilos doces de Jerez': 'avancado',
    'Solera de Jerez': 'avancado',
    'Tapas espanholas': 'medio',
    'Cozinha de Rioja e Navarra': 'avancado',
    'Cozinha da Catalunha': 'avancado',
    'Cozinha de Ribera del Duero': 'avancado',
    'Cozinha de Jerez': 'avancado' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'ES', version: 1, cards: cards };
})());
