/**
 * CARTÕES DE ESTUDO — Produção de vinho (material de aula 3 a 13, v1).
 * Panorama, viticultura, vinificação (brancos, tintos), amadurecimento, espumantes, fortificados e doces, naturais,
 * Velho e Novo Mundo, análise sensorial e ficha de degustação. Trechos de harmonização ficam com o pacote de harmonização.
 * O material pode ter erros: "corrigido" = conferi em fonte aberta e o slide estava errado; "conferir" = não consegui
 * confirmar (fica fora do quiz). Itens: [chave, texto, marca?]. Ordem: sort = grupo*100 + posição.
 */
var STUDY_PACKS = STUDY_PACKS || [];

STUDY_PACKS.push((function () {
  var cards = [];
  var GROUPS = ['Panorama', 'Viticultura', 'Vinificação de brancos', 'Vinificação de tintos', 'Amadurecimento', 'Espumantes',
    'Fortificados e doces', 'Vinhos naturais', 'Velho e Novo Mundo', 'Análise sensorial', 'Ficha de degustação'];
  var counters = {};
  function P(group, title, kind, items) {
    var gi = GROUPS.indexOf(group);
    if (gi < 0) throw new Error('grupo desconhecido: ' + group);
    counters[group] = (counters[group] || 0) + 1;
    cards.push({ topic: 'producao', group: group, title: title, kind: kind, sort: (gi + 1) * 100 + counters[group],
      items: items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }) });
  }

  // ======================= PANORAMA (Aula 3) =======================
  P('Panorama', 'Indústria do vinho em 100 anos', 'lista', [
    ['', 'Do início do séc. XX até hoje: avanços tecnológicos, mudança nas preferências e globalização'],
    ['', 'Viticultura e vinificação mais precisas e acesso a informação detalhada'],
    ['', 'Resultado: grande diversidade de vinhos para gostos variados no mundo todo']
  ]);
  P('Panorama', 'Área de vinhedos no mundo (2022)', 'numeros', [
    ['7,3 mi ha', 'Área mundial de vinhas (inclui uvas para vinho, suco e mesa e vinhas jovens ainda sem produção)'],
    ['-0,4%', 'Variação da área mundial em relação a 2021'],
    ['3,3 mi ha', 'Vinhedos da União Europeia, estáveis; desde 2016 os países podem autorizar até +1% ao ano'],
    ['2017', 'Ano desde o qual a área mundial parece estabilizada']
  ]);
  P('Panorama', 'Os três maiores vinhedos (2022)', 'numeros', [
    ['955 mil ha', 'Espanha: maior vinhedo do mundo (-0,8% sobre 2021)'],
    ['812 mil ha', 'França: 2ª maior (+0,8% sobre 2021)'],
    ['718 mil ha', 'Itália: estabilizada após a expansão de 2016 a 2020']
  ]);
  P('Panorama', 'Vinhedos da América do Sul (2022)', 'numeros', [
    ['207 mil ha', 'Argentina: em queda desde 2015 (-2% em 2022); seca, calor e falta de água podem explicar'],
    ['196 mil ha', 'Chile: quase inalterado em relação a 2021'],
    ['81 mil ha', 'Brasil: +0,8% em 2022, depois de oito anos de queda']
  ]);
  P('Panorama', 'Tendências da área plantada em 2022', 'fatos', [
    ['Diminuem', 'Moldávia, Turquia, Espanha, Argentina e EUA'],
    ['Aumentam', 'França, Índia, Rússia e Brasil'],
    ['Estáveis', 'China, Itália, Chile e Austrália'],
    ['Efeito global', 'As tendências opostas se equilibram e a área mundial fica estável']
  ]);
  P('Panorama', 'Produção mundial de vinho (2022)', 'numeros', [
    ['258 mhl', 'Produção mundial, sem sucos e mostos (-1% sobre 2021); estável perto de 260 mhl nos últimos quatro anos'],
    ['161,1 mhl', 'Produção da UE (+4% sobre 2021, alinhada à média de cinco anos)'],
    ['51%', 'Parte da produção mundial feita por Itália, França e Espanha juntas'],
    ['Causas da queda', 'Colheita menor que o esperado na Europa e nos EUA e produção média no Hemisfério Sul']
  ]);
  P('Panorama', 'Produção na Europa em 2022', 'fatos', [
    ['Itália', '-1% em relação a 2021'],
    ['França', '+21% em relação a 2021 e +7% sobre a média de cinco anos'],
    ['Espanha', '+1% sobre 2021, mas 5% abaixo da média de cinco anos'],
    ['Alemanha', '+6% sobre 2021'],
    ['Clima', 'Geada, granizo e calor excessivo marcaram a safra europeia']
  ]);
  P('Panorama', 'Produção fora da UE: Hemisfério Norte', 'fatos', [
    ['Rússia', '+4% sobre 2021'],
    ['Geórgia', '+2% (clima favorável)'],
    ['Moldávia', '-2%'],
    ['Suíça', '+63% sobre 2021 e +15% sobre a média de cinco anos'],
    ['China', '-29%'],
    ['EUA', '-7% sobre 2021 e -9% sobre a média de cinco anos']
  ]);
  P('Panorama', 'Produção fora da UE: Hemisfério Sul', 'fatos', [
    ['Chile', '12,4 mhl (-7% sobre 2021)'],
    ['Argentina', '-8% sobre 2021'],
    ['Brasil', '+9% sobre 2021'],
    ['África do Sul', '-6% sobre 2021'],
    ['Austrália', '12,7 mhl (-14% sobre 2021)'],
    ['Nova Zelândia', '3,8 mhl (+44% sobre 2021)']
  ]);
  P('Panorama', 'Maiores produtores: participação', 'numeros', [
    ['23,8%', 'Itália'],
    ['21,8%', 'França'],
    ['17,1%', 'Espanha'],
    ['10,7%', 'EUA'],
    ['6,1%', 'Austrália'],
    ['5,9%', 'Chile'],
    ['5,5%', 'Argentina'],
    ['4,9%', 'África do Sul'],
    ['4,3%', 'Alemanha'],
    ['147 mhl', 'Total dos nove países, segundo o slide; não bate com os 258 mhl mundiais e as participações', 'conferir']
  ]);
  P('Panorama', 'Uvas para vinho e uvas de mesa', 'numeros', [
    ['70,3%', 'Uvas para vinho na produção mundial de uvas em 2000 (mesa: 29,7%)'],
    ['51,6%', 'Uvas para vinho em 2022 (mesa: 48,4%)'],
    ['Tendência', 'Crescimento expressivo da produção de uvas de mesa (fonte: OIV)']
  ]);
  P('Panorama', 'Consumo mundial (2022)', 'numeros', [
    ['232 mhl', 'Consumo mundial estimado (-1% sobre 2021); queda regular desde 2018'],
    ['111 mhl', 'Consumo da UE: 48% do mundial (era 59% em 2000)'],
    ['-2 mhl/ano', 'Perda média da China desde 2018, principal causa da queda global'],
    ['Consumo aparente', 'Método das estimativas; não conta bem estoques, perdas e usos industriais']
  ]);
  P('Panorama', 'Desafios do consumo', 'lista', [
    ['', '2020: pandemia e confinamento; canal HoReCa (hotelaria, restaurantes e catering) e turismo interrompidos'],
    ['', '2021: reabertura do HoReCa e retomada do consumo'],
    ['', '2022: guerra na Ucrânia e crise energética'],
    ['', 'Falhas nas cadeias de abastecimento elevaram custos e os preços ao consumidor']
  ]);
  P('Panorama', 'Consumo na Europa (2022)', 'numeros', [
    ['25,3 mhl', 'França: maior consumo da UE, em alta após a Covid'],
    ['23,0 mhl', 'Itália (-5% sobre 2021)'],
    ['19,4 mhl', 'Alemanha (-3%)'],
    ['12,8 mhl', 'Reino Unido (-2%)'],
    ['10,8 mhl', 'Rússia (+3% desde 2018)'],
    ['10,3 mhl', 'Espanha, estável'],
    ['6,0 mhl', 'Portugal (+14% sobre 2021 e +19% sobre a média de cinco anos)'],
    ['2,6 mhl', 'Suíça (+3%)']
  ]);
  P('Panorama', 'Consumo fora da Europa (2022)', 'numeros', [
    ['34,0 mhl', 'EUA: maior consumidor do mundo (+3%), de volta ao nível pré-pandemia'],
    ['8,8 mhl', 'China (-16%, por demanda interna)'],
    ['8,3 mhl', 'Argentina (-1,3%)'],
    ['5,5 mhl', 'Austrália (-3%, segundo ano de queda)'],
    ['4,6 mhl', 'África do Sul (+16%)'],
    ['3,6 mhl', 'Brasil (-12,9%)'],
    ['3,4 mhl', 'Japão (+2% sobre 2021)']
  ]);
  P('Panorama', 'Comércio mundial de vinho (2022)', 'numeros', [
    ['107 mhl', 'Volume exportado no mundo (-5% sobre 2021)'],
    ['37,6 bi €', 'Valor das exportações (+9%), puxado pelo aumento dos preços médios'],
    ['21,9 mhl', 'Itália, maior exportadora em volume (20% do total mundial)'],
    ['12,3 bi €', 'França, maior exportadora em valor (cerca de um terço do total)']
  ]);
  P('Panorama', 'Os três maiores exportadores', 'fatos', [
    ['Volume', 'Itália 21,9 mhl (-0,6%), Espanha 21,2 (-10%), França 14,0 (-5%): juntas 57 mhl, 53% do mundo'],
    ['Valor', 'França 12,3 bi € (+10,9%), Itália 7,8 bi € (+10,1%), Espanha 3,0 bi € (+3,1%)'],
    ['Peso no valor', 'Os três somam 61% das exportações mundiais em valor']
  ]);
  P('Panorama', 'Comércio por tipo de produto', 'numeros', [
    ['53%', 'Do volume exportado é vinho engarrafado (< 2 L), 68% do valor; preço médio 4,5 €/L'],
    ['11%', 'Do volume são espumantes, mas 23% do valor; preço médio 7,7 €/L'],
    ['+5% / +18%', 'Espumantes em 2022: volume e valor; única categoria a crescer nos dois'],
    ['4%', 'Do volume é bag-in-box (> 2 L e < 10 L), 2% do valor; preço médio 1,8 €/L']
  ]);
  P('Panorama', 'Maiores importadores (2022)', 'fatos', [
    ['EUA', '14,4 mhl (+3%); líder em valor, 7,0 bi € (+17%)'],
    ['Alemanha', '13,4 mhl (-9,3%) e 2,7 bi € (-4%): 2º em volume'],
    ['Reino Unido', '13,0 mhl (-2%), mas valor em alta: 4,8 bi € (+22,1%)'],
    ['Juntos', '41 mhl: 38% do volume importado no mundo']
  ]);
  P('Panorama', 'Negócios do vinho no Brasil', 'lista', [
    ['', 'Mais de 570 importadoras no país; o mercado segue promissor'],
    ['Loja', 'Interesse crescente do brasileiro faz da loja um bom modelo de negócio'],
    ['Clube', 'Reunir profissionais e apreciadores pode gerar lucro']
  ]);

  // ======================= VITICULTURA (Aula 4) =======================
  P('Viticultura', 'O que é viticultura', 'lista', [
    ['', 'Disciplina agrícola do cultivo da videira, do plantio à colheita'],
    ['', 'Busca videiras saudáveis e bom desenvolvimento das uvas'],
    ['', 'Considera clima, solo, exposição solar e manejo de doenças e pragas']
  ]);
  P('Viticultura', 'O caminho da videira', 'linha', [
    ['Pré-história', 'Domesticação das primeiras videiras; uvas selvagens coletadas e fermentação descoberta'],
    ['6000 a.C.', 'Cáucaso e Ásia Ocidental: primeiras evidências de cultivo para vinho; depois sumérios e egípcios'],
    ['Séc. I a.C.', 'Romanos espalham a videira pela Europa, com conquistas e comércio'],
    ['Séc. XVI', 'Espanhóis e portugueses levam videiras às Américas; o slide traz séc. XV', 'corrigido'],
    ['Hoje', 'Cultivo sustentável, enologia moderna e valorização das regiões']
  ]);
  P('Viticultura', 'Espécies de Vitis', 'fatos', [
    ['Vitis vinifera', 'A espécie central do vinho no mundo, de milhares de anos de cultivo'],
    ['Vitis riparia', 'América do Norte; resistente a doenças e pragas; muito usada como porta-enxerto'],
    ['Vitis labrusca', 'Nativa das Américas; sabor característico; mesa, suco e geleia'],
    ['Vitis aestivalis', 'América do Norte; resistente ao calor; uvas de sabores variados'],
    ['Vitis rotundifolia', 'Muscadine, do sudeste dos EUA; uvas maiores e de sabor único']
  ]);
  P('Viticultura', 'Fatores no vinhedo: castas', 'lista', [
    ['', 'Boas castas, livres de doenças, dão uvas para vinhos de qualidade'],
    ['', 'Empresas especializadas produzem boas mudas para os agricultores'],
    ['', 'No Brasil, um exemplo é a Embrapa']
  ]);
  P('Viticultura', 'Fatores no vinhedo: clima', 'fatos', [
    ['Ideal', 'Clima mediterrâneo, ao qual as viníferas se aclimataram na Europa'],
    ['Inverno', 'Não muito frio: temperaturas raramente abaixo de -15 °C'],
    ['Primavera', 'Chuvas regulares para o crescimento da planta'],
    ['Verão', 'Ensolarado, com dias quentes e noites frescas para o amadurecimento dos cachos']
  ]);
  P('Viticultura', 'Fatores no vinhedo: solo', 'fatos', [
    ['Melhores', 'Solos minerais: calcários, argilo-calcários, argilosos, xistosos, graníticos, pedregosos'],
    ['Impróprios', 'Solos orgânicos como a terra preta'],
    ['Drenagem', 'Essencial: solo muito úmido incha as uvas de água e dilui açúcares e sais minerais'],
    ['Regiões chuvosas', 'Em Borgonha, Champagne e Serra Gaúcha, os melhores vinhedos ficam nas encostas']
  ]);
  P('Viticultura', 'Condução: latada e espaldeira', 'fatos', [
    ['Latada', 'Planta fixada em arames sobre mourões a 1,50 a 1,60 m; dá para andar por baixo; trazida ao Brasil pelos italianos'],
    ['Espaldeira', 'Arames na vertical e linhas separadas: sol dos dois lados, manhã e tarde, e melhor amadurecimento'],
    ['Guyot', 'O slide trata como sinônimo de espaldeira, mas Guyot é um sistema de poda', 'conferir']
  ]);
  P('Viticultura', 'Fatores no vinhedo: poda', 'lista', [
    ['', 'Mantém a planta num tamanho que dá os melhores frutos'],
    ['', 'Concentra açúcares e outros elementos nos cachos que ficam'],
    ['', 'Sem poda a videira cresce demais e divide energia com muita área verde'],
    ['', 'Menos cachos, mais qualidade; exige equilíbrio econômico para a atividade ser rentável']
  ]);
  P('Viticultura', 'Inimigo: filoxera', 'fatos', [
    ['O que é', 'Pulgão (Phylloxera vastatrix, cerca de 1 mm) que suga as raízes da videira'],
    ['Origem', 'Vivia nas raízes das videiras americanas, robustas e adaptadas a ele'],
    ['Chegada à Europa', 'Meados do séc. XIX, após a navegação a vapor: mudas americanas levadas com terra a jardins botânicos'],
    ['Alvo', 'As viníferas europeias, que não resistem ao pulgão']
  ]);
  P('Viticultura', 'Inimigo: míldio', 'fatos', [
    ['O que é', 'Praga fúngica da videira'],
    ['Data', 'Primeira observação em 1834, nos EUA; o slide traz a Europa por volta de 1835', 'corrigido'],
    ['Remédio', 'Calda bordalesa: sulfato de cobre e cal'],
    ['Descoberta', 'Millardet, de Bordeaux, notou seu efeito em 1882 (o slide não traz a data)', 'corrigido']
  ]);
  P('Viticultura', 'Botrytis cinerea', 'fatos', [
    ['Podridão nobre', 'Em certas regiões ataca os cachos de modo desigual e fura as cascas'],
    ['Efeito', 'Só a água evapora, concentrando açúcares e sais: vinho doce de sobremesa'],
    ['Onde', 'Sauternes (Bordeaux), Tokaj (Hungria), Mosel e Reno (Alemanha)'],
    ['Lado ruim', 'Na maior parte dos casos é praga: a podridão cinza']
  ]);
  P('Viticultura', 'Terroir', 'lista', [
    ['', 'Palavra francesa: originalmente uma extensão delimitada de terra'],
    ['', 'Hoje reúne geografia, geologia e clima de um lugar'],
    ['', 'Define a singularidade que cada uva ganha em cada região (Malbec argentino e francês diferem em aromas)'],
    ['', 'O slide cita o Master of Wine Alexander Hunt: o terroir molda até diferenças dentro de um mesmo vinhedo', 'conferir']
  ]);
  P('Viticultura', 'Castas de regiões francesas', 'fatos', [
    ['Champagne', 'Chardonnay, Pinot Noir, Pinot Meunier, Pinot Blanc, Pinot Gris, Arbane, Petit Meslier'],
    ['Alsácia', 'Riesling, Gewurztraminer, Pinot Gris, Muscat'],
    ['Borgonha', 'Chardonnay e Pinot Noir'],
    ['Bordeaux', 'Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, Sauvignon Blanc, Sémillon']
  ]);
  P('Viticultura', 'Melhores castas de Portugal', 'fatos', [
    ['Vinho Verde', 'Alvarinho (branca) e Vinhão (tinta)'],
    ['Douro', 'Gouveio (branca) e Tinta Roriz (tinta)'],
    ['Dão', 'Encruzado (branca) e Touriga Nacional (tinta)'],
    ['Bairrada', 'Maria Gomes (branca) e Baga (tinta)'],
    ['Alentejo', 'Antão Vaz (branca) e Trincadeira (tinta)'],
    ['Madeira', 'Sercial (branca) e Tinta Negra (tinta)']
  ]);
  P('Viticultura', 'Touriga Nacional', 'fatos', [
    ['Origem', 'Natural do Dão, no centro-norte de Portugal'],
    ['Fama', 'Tornou-se conhecida no fim dos anos 1970, quando voltou a ser cultivada e vinificada após a revolução'],
    ['Segundo especialistas', 'Variedade de melhor adaptação em suas regiões principais e de maior aceitação do mercado']
  ]);
  P('Viticultura', 'Melhores castas da Itália', 'fatos', [
    ['Vêneto', 'Garganega (branca) e Corvina (tinta)'],
    ['Piemonte', 'Arneis (branca) e Nebbiolo (tinta)'],
    ['Úmbria', 'Grechetto (branca) e Sagrantino (tinta)'],
    ['Toscana', 'Trebbiano (branca) e Sangiovese (tinta)'],
    ['Puglia', 'Verdeca (branca) e Primitivo (tinta); o slide põe as duas no Alentejo, que é português', 'corrigido'],
    ['Sicília', 'Grecanico (branca) e Nero d\'Avola (tinta)']
  ]);

  // ======================= VINIFICAÇÃO DE BRANCOS (Aula 7) =======================
  P('Vinificação de brancos', 'Fermentação alcoólica', 'fatos', [
    ['Quem faz', 'A levedura Saccharomyces cerevisiae converte açúcar em álcool, gás carbônico e compostos aromáticos'],
    ['Descoberta', 'Pasteur, nas décadas de 1850 e 1860, identificou as leveduras como agentes da fermentação'],
    ['Ésteres', 'Aromas frutados'],
    ['Terpenos', 'Notas florais'],
    ['Aldeídos e cetonas', 'Nuances de nozes e caramelo'],
    ['Outros álcoois', 'Metanol, propanol e butanol, em quantidades mínimas']
  ]);
  P('Vinificação de brancos', 'Acidez e malolática nos brancos', 'lista', [
    ['', 'O ácido málico da uva pode virar ácido lático, o que suaviza a acidez e muda a textura'],
    ['', 'Nos brancos esse processo (fermentação malolática) costuma ser evitado'],
    ['', 'A acidez dá vivacidade e estrutura e equilibra o sabor']
  ]);
  P('Vinificação de brancos', 'Algumas castas brancas', 'fatos', [
    ['Chardonnay', 'Adaptável: de frescos e minerais a voluptuosos e amanteigados'],
    ['Gewürztraminer', 'Complexidade aromática: perfumes florais intensos e sabores exóticos'],
    ['Sauvignon Blanc', 'Herbácea e frutada; prospera em clima fresco, com acidez vibrante'],
    ['Riesling', 'Mineralidade, acidez pulsante e notas florais; valorizada em regiões frias']
  ]);
  P('Vinificação de brancos', 'Anatomia da uva', 'fatos', [
    ['Casca', 'Pigmentos, flavonoides e taninos (cor, estrutura, textura) e compostos aromáticos'],
    ['Polpa', 'Açúcares, ácidos, nutrientes e compostos voláteis'],
    ['Sementes', 'Taninos, pigmentos e fenólicos: amargor e estrutura; uso criterioso'],
    ['Engaço', 'O caule costuma ser retirado antes da fermentação, para evitar amargor e notas herbáceas']
  ]);
  P('Vinificação de brancos', 'Solos para uvas brancas', 'fatos', [
    ['Drenagem', 'Solos bem drenados evitam excesso de água e dão videiras saudáveis'],
    ['Riqueza mineral', 'Cálcio, magnésio e potássio nutrem a videira'],
    ['Calcários', 'Dão estrutura refinada, acidez equilibrada e notas minerais sutis'],
    ['Vulcânicos', 'Trazem complexidade mineral distintiva']
  ]);
  P('Vinificação de brancos', 'Clima para uvas brancas', 'fatos', [
    ['Frios e moderados', 'Ideais: maturação gradual preserva acidez, frescor e aromas (Riesling, Sauvignon Blanc)'],
    ['Marítimos', 'Menor amplitude térmica e temperaturas estáveis: maturação lenta e vinhos equilibrados'],
    ['Ventos', 'Ventos regulares reduzem doenças na vinha']
  ]);
  P('Vinificação de brancos', 'Etapas da vinificação em branco', 'linha', [
    ['1', 'Colheita manual ou mecânica, no ponto ideal; alguns colhem à noite para a fruta ficar mais fria'],
    ['2', 'Desengace e prensagem: separa os cachos dos bagos e libera o suco'],
    ['3', 'Maceração (opcional): contato com cascas e sementes extrai cor, taninos e aromas'],
    ['4', 'Inoculação com leveduras Saccharomyces cerevisiae'],
    ['5', 'Fermentação alcoólica em tanques, com temperatura controlada'],
    ['6', 'Estabilização e filtração: evita depósitos e turvação'],
    ['7', 'Amadurecimento em barrica de carvalho ou garrafa (brancos encorpados)'],
    ['8', 'Rotulagem e comercialização']
  ]);
  P('Vinificação de brancos', 'Fermentação do branco: números', 'numeros', [
    ['13 a 18 °C', 'Faixa de fermentação segundo o slide; a fonte aberta cita 15 a 18 °C como típico', 'conferir'],
    ['7 a 20 dias', 'Duração média da fermentação'],
    ['2 a 4 °C', 'Temperatura do tanque de espera após a filtragem, para homogeneizar e evitar a malolática'],
    ['Acima de 18 °C', 'Substâncias aromáticas e voláteis se dispersam com o gás carbônico'],
    ['Abaixo de 13 °C', 'A fermentação fica muito difícil']
  ]);
  P('Vinificação de brancos', 'Fim da fermentação do branco', 'lista', [
    ['', 'Quando o açúcar acaba, as leveduras morrem e a fermentação termina'],
    ['', 'Vinho seco: as leveduras consumiram toda a glicose e a frutose'],
    ['', 'O vinho novo traz sólidos em suspensão: mucilagens, leveduras, restos de casca'],
    ['', 'É bombeado para outro tanque de aço, com filtro, e fica semanas até o engarrafamento']
  ]);

  // ======================= VINIFICAÇÃO DE TINTOS (Aula 8) =======================
  P('Vinificação de tintos', 'Castas tintas (1)', 'fatos', [
    ['Pinot Noir', 'Elegante e aromática: cereja e framboesa, muita complexidade, taninos suaves'],
    ['Cabernet Sauvignon', 'Encorpada: cassis e ameixa, estrutura e taninos firmes; envelhece bem'],
    ['Nebbiolo', 'Florais e frutas vermelhas, taninos poderosos e alta acidez; Barolo e Barbaresco'],
    ['Merlot', 'Macia: frutas vermelhas e notas herbáceas; menos taninos que a Cabernet']
  ]);
  P('Vinificação de tintos', 'Castas tintas (2)', 'fatos', [
    ['Syrah', 'Rica: frutas negras, especiarias e toques defumados; taninos médios a firmes'],
    ['Malbec', 'Intensa: amora e ameixa, taninos aveludados; muito associada à Argentina'],
    ['Zinfandel', 'Frutada: frutas vermelhas e negras, especiarias e estrutura média; notável na Califórnia'],
    ['Tempranillo', 'Frutas vermelhas e baunilha, taninos médios, acidez moderada; Rioja e Ribera del Duero']
  ]);
  P('Vinificação de tintos', 'Branca × tinta: o que muda', 'fatos', [
    ['Polpa', 'Igualmente esverdeada nas uvas brancas e tintas'],
    ['Diferença', 'A casca da tinta contém pigmentos vermelhos, os antocianos'],
    ['Vinificação', 'Mosto fermenta com as cascas, para extrair os pigmentos por maceração'],
    ['Cor', 'Quanto mais tempo de contato com as cascas, mais escuro o vinho']
  ]);
  P('Vinificação de tintos', 'Etapas da vinificação em tinto', 'linha', [
    ['1', 'Colheita no ponto de maturação, manual ou mecânica'],
    ['2', 'Desengace e esmagamento'],
    ['3', 'Maceração com cascas e sementes: extrai cor, taninos e aromas'],
    ['4', 'Inoculação com leveduras'],
    ['5', 'Fermentação alcoólica em tanques, com temperatura controlada'],
    ['6', 'Remontagem ou punching down: refaz o contato das cascas com o mosto'],
    ['7', 'Fermentação malolática (em alguns vinhos): ácido málico vira lático, acidez mais suave'],
    ['8', 'Estabilização e filtração'],
    ['9', 'Amadurecimento em barrica ou garrafa (tintos encorpados)'],
    ['10', 'Rotulagem e comercialização']
  ]);
  P('Vinificação de tintos', 'Fermentação do tinto: números', 'numeros', [
    ['10 a 18 dias', 'Duração da fermentação'],
    ['23 a 30 °C', 'Faixa do slide; fonte aberta cita 22 a 25 °C como típico, e o calor demais cozinha o aroma', 'conferir'],
    ['1 a 2 por dia', 'Remontagens, para romper o chapéu de cascas e extrair a cor'],
    ['A cada 2 h', 'Amostras para controlar cor, pH, densidade, açúcares e álcool']
  ]);
  P('Vinificação de tintos', 'Chapéu e remontagem', 'lista', [
    ['', 'A fermentação tumultuosa levanta as cascas e forma uma camada grossa: o chapéu'],
    ['', 'Para extrair mais cor, o mosto é remontado: bombeado de baixo para cima no tanque'],
    ['', 'Alternativa manual: o punching down, empurrando as cascas para baixo']
  ]);
  P('Vinificação de tintos', 'Do tinto leve ao encorpado', 'fatos', [
    ['Mais leve', 'Ao atingir a cor desejada, o enólogo drena o mosto para outro tanque, longe das cascas'],
    ['Mais encorpado', 'O mosto fica em contato com as cascas por mais tempo, até o fim da fermentação'],
    ['Vinho de prensa', 'Das cascas prensadas, muito escuro; usado para corrigir a cor do vinho principal']
  ]);
  P('Vinificação de tintos', 'Clarificação (colagem)', 'lista', [
    ['', 'Usa cola de peixe, clara de ovo, albumina, gelatina, caseína do leite'],
    ['', 'Essas substâncias coagulam no vinho e formam uma teia'],
    ['', 'A teia arrasta para o fundo as partículas em suspensão']
  ]);
  P('Vinificação de tintos', 'Vinificação em rosé', 'fatos', [
    ['Princípio', 'Parecida com a do tinto, mas com contato breve das cascas com o mosto'],
    ['Contato', 'Tipicamente 2 a 20 horas; o slide diz 18 a 30', 'corrigido'],
    ['Depois', 'Tiram-se as cascas e a fermentação segue em outro tanque, sem ganhar cor'],
    ['Malolática', 'Como o branco, o rosé não passa por ela, segundo o slide']
  ]);
  P('Vinificação de tintos', 'Regiões de rosé', 'fatos', [
    ['Provence', 'Mundialmente famosa: cor pálida, aromas frutados e perfil refrescante'],
    ['Tavel', 'Região só de rosés, encorpados e de cor mais intensa'],
    ['Languedoc-Roussillon', 'Variedade de rosés, muitos acessíveis e de alta qualidade'],
    ['Bandol', 'Rosés de alta qualidade, principalmente de Mourvèdre']
  ]);

  // ======================= AMADURECIMENTO (Aula 9) =======================
  P('Amadurecimento', 'Amadurecimento × envelhecimento', 'fatos', [
    ['Amadurecimento', 'Em barris de carvalho ou tanques de aço inox, antes do lançamento'],
    ['Envelhecimento', 'Processo mais longo, depois do engarrafamento; segredo da longevidade']
  ]);
  P('Amadurecimento', 'Breve história dos barris', 'linha', [
    ['Séc. I', 'Romanos usam barris de madeira, inclusive carvalho, para transportar e guardar vinho'],
    ['Séc. XVII', 'Em Bordeaux, notam que o carvalho acrescenta sabores e aromas'],
    ['Séc. XVIII', 'O uso se espalha pela Europa e além; vinhos de carvalho muito valorizados'],
    ['Séc. XIX', 'Com as exportações para o Novo Mundo, a técnica se espalha pelo globo'],
    ['Séc. XX', 'Surge a tostagem controlada do interior do barril']
  ]);
  P('Amadurecimento', 'Espécies de carvalho', 'fatos', [
    ['Quercus petraea', 'Carvalho sessile, da Europa central e ocidental: frutas secas, especiarias e estrutura sólida'],
    ['Quercus robur', 'Pedunculado, comum na França: influência mais suave, menos baunilha que o americano'],
    ['Quercus alba', 'Carvalho branco americano: baunilha, coco e especiarias; marca de muitos vinhos americanos']
  ]);
  P('Amadurecimento', 'Benefícios técnicos do carvalho', 'fatos', [
    ['Micro-oxigenação', 'A madeira porosa deixa o oxigênio passar: suaviza taninos, estabiliza a cor e evolui os aromas'],
    ['Estabilização', 'Certos ácidos e aldeídos voláteis indesejados podem diminuir'],
    ['Clarificação', 'A estrutura porosa age como filtro natural e reduz a filtração'],
    ['Complexidade', 'Lignina e hemicelulose se degradam na tosta: baunilha, coco, especiarias e tostados'],
    ['Longevidade', 'Condições ideais para vinhos de guarda evoluírem']
  ]);
  P('Amadurecimento', 'Origem do carvalho', 'fatos', [
    ['França', 'Limousin, Allier, Nevers e Vosges: muito valorizado'],
    ['EUA', 'Missouri, Pensilvânia e Virgínia: carvalho americano'],
    ['Hungria', 'Importante, sobretudo para o leste europeu; bom para tintos'],
    ['Espanha', 'Rioja e Navarra: sabores sutis', 'conferir'],
    ['Eslovênia', 'Grande fonte, usada na Europa central; contribui à estrutura']
  ]);
  P('Amadurecimento', 'Tipos de barril (1)', 'fatos', [
    ['Barrica bordalesa', 'Bordeaux: cerca de 225 L (300 garrafas); tintos de Bordeaux e outras regiões'],
    ['Barrica borgonhesa', 'Borgonha: cerca de 228 L (304 garrafas); forma mais larga'],
    ['Pipa', 'Portugal: 550 a 620 L; Porto e fortificados']
  ]);
  P('Amadurecimento', 'Tipos de barril (2)', 'fatos', [
    ['Gönc', 'Tokaj, Hungria: frequentemente 136 L; para o Tokaji Aszú'],
    ['Tonel', 'Portugal, Espanha e América Latina: de 600 a 30.000 L'],
    ['Puncheon', 'Austrália e Nova Zelândia: 450 a 600 L; tintos e brancos']
  ]);
  P('Amadurecimento', 'Barris franceses grandes', 'fatos', [
    ['Foudre', 'França: milhares de litros; vinhos tranquilos em grande escala'],
    ['Tonneau', 'França: de 350 a 500 L segundo o slide, valor que parece baixo', 'conferir'],
    ['Demi-muid', 'França: 600 a 700 L segundo o slide; fontes abertas costumam citar menos', 'conferir']
  ]);
  P('Amadurecimento', 'Dentro da garrafa', 'lista', [
    ['', 'Polimerização dos taninos: textura mais suave e sedosa'],
    ['', 'Aromas e ésteres mudam e formam novos compostos: mais complexidade'],
    ['', 'Oxidação lenta e controlada, útil sobretudo aos tintos'],
    ['', 'Integração de ácidos, taninos, álcool e açúcares residuais: mais harmonia'],
    ['', 'Precipitação de cristais e partículas: a sedimentação']
  ]);
  P('Amadurecimento', 'O que faz um vinho envelhecer bem', 'fatos', [
    ['Acidez', 'Equilibrada: conserva o vinho e mantém o frescor'],
    ['Taninos', 'Estruturados e em boa qualidade; taninos agressivos demais não suavizam'],
    ['Concentração', 'Base sólida para ganhar complexidade'],
    ['Álcool', 'Moderado; teor muito alto desequilibra'],
    ['Equilíbrio', 'Entre álcool, acidez, taninos e açúcares'],
    ['Origem', 'Uvas maduras e vinificação cuidadosa, sem defeitos']
  ]);
  P('Amadurecimento', 'Garrafas do mundo', 'fatos', [
    ['Fiasco', 'Toscana, Chianti: bojuda, pescoço fino, revestida de palha ou vime para proteger no transporte'],
    ['Flauta', 'Garrafa longa e estreita: usada no Reno, Mosel e Alsácia para vinhos tranquilos; o slide diz que é do Sekt alemão', 'corrigido'],
    ['Clavelin', 'Exclusiva do Vin Jaune, do Jura: 62 cl, o que sobra de 1 L após 6 anos e 3 meses; o slide diz outro motivo', 'corrigido'],
    ['Porto', 'Ombros largos e pescoço curto; nem sempre envelhece muito em garrafa']
  ]);
  P('Amadurecimento', 'Reserva, Gran Reserva e Reservado', 'fatos', [
    ['Reserva', 'Mais tempo de barril e/ou garrafa que o vinho padrão: em geral 1 a 3 anos; a regra varia por país'],
    ['Gran Reserva', 'Envelhecimento bem mais longo; muito regulamentada na Espanha e em Portugal (o slide escreve Grand)'],
    ['Reservado', 'Usado na América Latina (Argentina, Chile): envelhecimento entre o padrão e a Reserva', 'conferir'],
    ['Brasil', 'Reservado deve ser indicado para consumo jovem e ter ao menos 10% de álcool, segundo o slide', 'conferir']
  ]);

  // ======================= ESPUMANTES (Aula 11) =======================
  P('Espumantes', 'História dos espumantes', 'linha', [
    ['1531', 'Método ancestral: fermentação primária em garrafa, no sul da França (Limoux)'],
    ['1662', 'Champagne vira famosa por seus espumantes; Dom Pérignon não os inventou: foi encarregado de eliminar as bolhas', 'corrigido'],
    ['1710', 'Método champenoise (tradicional), de segunda fermentação em garrafa, é aprimorado em Champagne'],
    ['1870', 'Método Asti, criado na Itália para o Moscato d\'Asti, segundo o slide', 'conferir'],
    ['1895', 'Federico Martinotti patenteia a segunda fermentação em tanque; Charmat a aprimora e patenteia em 1907', 'corrigido']
  ]);
  P('Espumantes', 'Método ancestral', 'fatos', [
    ['Nomes', 'Também chamado "método rurale"; a técnica mais antiga de vinho efervescente'],
    ['Berço', 'Limoux, no sul da França, por volta de 1531'],
    ['Como', 'Fermenta uma vez em tanques ou barris; a queda de temperatura interrompe; termina na garrafa'],
    ['Resultado', 'Gás retido na garrafa: vinhos mais rústicos e naturalmente efervescentes']
  ]);
  P('Espumantes', 'Ancestral × champenoise', 'fatos', [
    ['Ancestral', 'Termina na garrafa de venda; sem dégorgement; sem licor de expedição; menos controle do açúcar; pressão menor'],
    ['Champenoise', 'Sedimentos removidos (dégorgement); licor de expedição ajusta o açúcar; mais controle da doçura'],
    ['Perfil', 'Champenoise dá espumantes mais refinados e elegantes']
  ]);
  P('Espumantes', 'Método champenoise: etapas', 'linha', [
    ['1', 'Prensagem suave das uvas'],
    ['2', 'Fermentação primária em tanques de aço: vinho-base'],
    ['3', 'Assemblage: mistura de variedades e vinhedos, a cuvée'],
    ['4', 'Engarrafamento com leveduras e açúcar'],
    ['5', '2ª fermentação na garrafa, fechada com tampa de coroa: forma o gás carbônico'],
    ['6', 'Sur lie: garrafas deitadas, às vezes anos sobre as leveduras'],
    ['7', 'Remuage: garrafas inclinadas e giradas aos poucos para levar o sedimento ao gargalo'],
    ['8', 'Dégorgement: gargalo congelado, tampa aberta para expulsar o sedimento; rolham rápido'],
    ['9', 'Dosagem: licor de expedição (vinho e açúcar) ajusta o açúcar'],
    ['10', 'Rolha de cortiça final com arame, para manter a pressão'],
    ['11', 'Envelhecimento mais longo em garrafa, depois rotulagem e embalagem']
  ]);
  P('Espumantes', 'Quem usa o método tradicional', 'lista', [
    ['', 'Champagne: é a essência do método'],
    ['', 'Crémants franceses, como Crémant de Bourgogne e Crémant d\'Alsace'],
    ['', 'Franciacorta, da Itália'],
    ['', 'Cava, da Espanha']
  ]);
  P('Espumantes', 'Método Charmat', 'fatos', [
    ['Nomes', 'Também chamado método italiano; fermentação secundária em tanques de aço'],
    ['Vantagem', 'Mais rápido e econômico; preserva o frescor e o frutado'],
    ['Perfil', 'Espumantes frescos e acessíveis']
  ]);
  P('Espumantes', 'Método Charmat: etapas', 'linha', [
    ['1', 'Fermentação primária em tanques de aço a temperatura controlada: vinho-base'],
    ['2', 'Assemblage das variedades e safras: a cuvée'],
    ['3', '2ª fermentação em tanque: açúcar e leveduras geram a efervescência'],
    ['4', 'Filtração: tira leveduras mortas e sedimentos'],
    ['5', 'Dosagem: um pouco de açúcar define a categoria (Nature, Brut, Demi-sec...)'],
    ['6', 'Engarrafamento e rotulagem']
  ]);
  P('Espumantes', 'Prosecco', 'fatos', [
    ['Método', 'Principalmente Charmat'],
    ['Uva', 'Glera: maçã verde e pera'],
    ['Origem', 'Vêneto, notadamente Valdobbiadene'],
    ['Estilo', 'Leve e fresco; aperitivo ou refeições leves']
  ]);
  P('Espumantes', 'Cava', 'fatos', [
    ['Método', 'Tradicional, o mesmo do Champagne: 2ª fermentação na garrafa'],
    ['Uvas', 'Macabeo, Xarel-lo e Parellada, com Chardonnay, Pinot Noir e outras autorizadas'],
    ['Região', 'Penedès, que o slide chama de a melhor']
  ]);
  P('Espumantes', 'Franciacorta', 'fatos', [
    ['Onde', 'Lombardia, Itália'],
    ['Método', 'Tradicional, 2ª fermentação na garrafa'],
    ['Uvas', 'Chardonnay (cítrico, elegância), Pinot Noir e Pinot Blanc']
  ]);
  P('Espumantes', 'Sekt', 'fatos', [
    ['O que é', 'O espumante alemão'],
    ['Método', 'Tradicional (champenoise) ou Charmat'],
    ['Uvas', 'Riesling, Pinot Blanc (Weißburgunder) e Pinot Gris (Grauburgunder)'],
    ['Regiões', 'Mosel, Rheingau e Pfalz']
  ]);

  // ======================= FORTIFICADOS E DOCES (Aula 10) =======================
  P('Fortificados e doces', 'O que é vinho fortificado', 'fatos', [
    ['Como', 'Aguardente vínica (destilado de uva) é adicionada durante a fermentação'],
    ['Efeito', 'Interrompe a fermentação e preserva o açúcar natural: mais álcool, 15% a 22%'],
    ['Exemplos', 'Porto, Madeira e Xerez'],
    ['Porto', 'Categorias Tawny, Ruby e Vintage'],
    ['Xerez', 'Fino, Amontillado e Oloroso'],
    ['Madeira', 'Sercial, Verdelho, Bual e Malmsey']
  ]);
  P('Fortificados e doces', 'Vinho do Porto', 'fatos', [
    ['O que é', 'Fortificado e doce, do Douro, no norte de Portugal'],
    ['Perfil', 'Sabores ricos e doces, álcool alto e equilíbrio entre doçura e acidez']
  ]);
  P('Fortificados e doces', 'História do Porto', 'linha', [
    ['1691', 'O slide diz que nasce o Vinho do Porto fortificado, para atender o mercado britânico', 'conferir'],
    ['1692', 'Taylor\'s é fundada; o slide inclui a Sandeman, que é de 1790', 'corrigido'],
    ['1703', 'Tratado de Methuen: impostos menores sobre vinhos portugueses para a Grã-Bretanha'],
    ['1756', 'Marquês de Pombal funda a Companhia Geral das Vinhas do Alto Douro; o slide liga a data à categoria Vintage', 'corrigido'],
    ['1865', 'Filoxera chega ao Douro por Sabrosa, segundo o slide; na Europa ela surge em 1863', 'conferir'],
    ['1933', 'Criado o instituto que regula o Porto, hoje IVDP, segundo o slide', 'conferir'],
    ['Séc. XX', 'Categorias Ruby, Tawny, Vintage e LBV são definidas'],
    ['2001', 'Alto Douro Vinhateiro é Patrimônio Mundial da UNESCO']
  ]);
  P('Fortificados e doces', 'Como se faz o Porto', 'linha', [
    ['1', 'Colheita entre setembro e outubro, com seleção cuidadosa dos cachos'],
    ['2', 'Desengace e esmagamento'],
    ['3', 'Fermentação alcoólica em tanques'],
    ['4', 'Adição de aguardente vínica, que interrompe a fermentação e guarda o açúcar'],
    ['5', 'Maturação em barris de carvalho, com oxidação lenta (Ruby, Tawny, LBV ou Vintage)'],
    ['6', 'Blending de safras e barris (comum em Tawny, Ruby e Old Tawny)'],
    ['7', 'Filtração e engarrafamento; os Vintages seguem evoluindo na garrafa']
  ]);
  P('Fortificados e doces', 'Vinhos doces: caminhos', 'lista', [
    ['', 'Vinhos do gelo (Canadá e Alemanha), colheita tardia, appassimento e botritizados'],
    ['', 'Appassimento: uvas postas quase ao ponto de passas'],
    ['', 'Denominador comum: desidratação das uvas, que concentra açúcares, ácidos e outros componentes']
  ]);
  P('Fortificados e doces', 'Vinhos botritizados', 'fatos', [
    ['Fungo', 'Botrytis cinerea, a "podridão nobre", com umidade alta e névoa matinal no outono'],
    ['Desidratação', 'Fura a casca; a água evapora e açúcares e sabores se concentram'],
    ['Acidez', 'Também sobe com a perda de água e equilibra a doçura'],
    ['Aromas', 'Mel, frutas secas, especiarias e flores']
  ]);
  P('Fortificados e doces', 'Regiões de botritizados', 'fatos', [
    ['Sauternes', 'França (Bordeaux): principalmente Sémillon'],
    ['Tokaj-Hegyalja', 'Hungria: Tokaji, principalmente de Furmint'],
    ['Mosel', 'Alemanha: Riesling para colheita tardia e vinho do gelo']
  ]);
  P('Fortificados e doces', 'Produtores de botritizados', 'fatos', [
    ['Château d\'Yquem', 'Sauternes: o mais prestigioso; um dos maiores vinhos de sobremesa do mundo'],
    ['Dr. Loosen', 'Mosel: colheita tardia, vinho do gelo e TBA; o slide chama a TBA de Riesling de colheita tardia, mas é Trockenbeerenauslese', 'corrigido'],
    ['Royal Tokaji', 'Tokaj: Tokaji Aszú de alta qualidade']
  ]);
  P('Fortificados e doces', 'Vinhos de colheita tardia', 'lista', [
    ['', 'Uvas colhidas mais tarde que o normal: mais maduras, sabores intensos e muito açúcar'],
    ['', 'Seleção cuidadosa; às vezes desidratação controlada'],
    ['', 'Açúcar residual alto, equilibrado pela acidez natural: doçura com frescor']
  ]);
  P('Fortificados e doces', 'Vin Santo', 'fatos', [
    ['Origem', 'Doce de sobremesa italiano; nome "Vinho Santo" lembra os mosteiros e celebrações religiosas'],
    ['Uvas', 'Principalmente brancas, secas em esteiras de palha ou locais ventilados (appassimento)'],
    ['Barris', 'Caratelli de carvalho, de 2 a 6 anos'],
    ['Perfil', 'Frutas secas, nozes, caramelo e mel; doçura equilibrada pela acidez'],
    ['Costume', 'Acompanha cantuccini toscanos ou entra em sobremesas como o tiramisù']
  ]);

  // ======================= VINHOS NATURAIS (Aula 12) =======================
  P('Vinhos naturais', 'Origem da agricultura biodinâmica', 'fatos', [
    ['Fundador', 'Rudolf Steiner, filósofo austríaco'],
    ['Quando', 'Palestras no início do séc. XX, reunidas em 1924 em "As Palestras sobre Agricultura"'],
    ['Base', 'Antroposofia; a fazenda é vista como um organismo vivo'],
    ['Motivo', 'Reação à degradação do solo e à qualidade dos alimentos']
  ]);
  P('Vinhos naturais', 'Como se pratica a biodinâmica', 'lista', [
    ['', 'Preparados biodinâmicos de ervas, minerais e esterco, aplicados ao solo e às plantas'],
    ['', 'Composto biodinâmico e rotação de culturas'],
    ['', 'Integração de animais na fazenda'],
    ['', 'Calendário lunar e ritmos cósmicos orientam plantio e colheita'],
    ['', 'Evita produtos químicos sintéticos e respeita o terroir']
  ]);
  P('Vinhos naturais', 'Viticultura biodinâmica', 'fatos', [
    ['Pioneiro', 'Nicolas Joly, em Savennières (Loire), no início dos anos 1980; Coulée de Serrant'],
    ['Primeira prática', 'O slide diz que a França foi a primeira expressão prática notável do movimento', 'conferir'],
    ['Difusão', 'Hoje há produtores nos EUA, Itália, Espanha, Austrália e outros países']
  ]);
  P('Vinhos naturais', 'Vinhos orgânicos', 'lista', [
    ['', 'Uvas cultivadas sem produtos químicos sintéticos, como pesticidas e herbicidas'],
    ['', 'Muitas vinícolas têm certificação orgânica'],
    ['', 'Adubo com compostos e esterco; controle de pragas com insetos benéficos e rotação de culturas'],
    ['', 'Mais sustentabilidade, saúde do solo, biodiversidade e menor pegada de carbono']
  ]);
  P('Vinhos naturais', 'Agrotóxicos na vinha', 'fatos', [
    ['Fungicidas', 'Contra míldio e oídio: oxicloreto de cobre e mancozebe'],
    ['Herbicidas', 'Contra plantas daninhas: glifosato e 2,4-D'],
    ['Inseticidas', 'Contra cochonilha e traça-da-uva: imidacloprido e clorpirifós'],
    ['Acaricidas', 'Contra ácaros: o slide cita o enxofre'],
    ['Reguladores de crescimento', 'Ácido giberélico e cloreto de mepiquat']
  ]);
  P('Vinhos naturais', 'Vinhos naturais: a ideia', 'lista', [
    ['', 'Abordagem minimalista: simplicidade, não intervenção e expressão pura do terroir'],
    ['', 'Popularidade cresceu nas últimas duas a três décadas'],
    ['', 'Resposta à busca por sabores genuínos e à preocupação com sustentabilidade']
  ]);
  P('Vinhos naturais', 'Práticas dos vinhos naturais', 'fatos', [
    ['Vinhedo', 'Uvas orgânicas ou biodinâmicas, sem pesticidas ou herbicidas'],
    ['Prensagem', 'Suave, sem esmagar demais nem aerar'],
    ['Fermentação', 'Espontânea, com leveduras selvagens da vinha e da adega'],
    ['Maturação', 'Em ânforas, recipientes de barro ou madeira, sem influência forte de sabor']
  ]);
  P('Vinhos naturais', 'Grandes nomes dos naturais', 'produtores', [
    ['Nicolas Joly', ''], ['Mickaël Bouges', ''], ['Château Peybonhomme', ''], ['Weingut Wittmann', ''],
    ['Era dos Ventos', ''], ['Duperu Holler', ''], ['Las Payas', ''], ['Bojador', '']
  ]);

  // ======================= VELHO E NOVO MUNDO (Aula 13) =======================
  P('Velho e Novo Mundo', 'Velho e Novo Mundo: o conceito', 'fatos', [
    ['Destaque', 'Os termos ganharam peso nas últimas décadas do séc. XX, quando o Novo Mundo foi de 3% a 23% do mercado', 'conferir'],
    ['Duas leituras', 'Terminologia (lugar) e estilo (como o vinho é feito e como é)']
  ]);
  P('Velho e Novo Mundo', 'Velho Mundo: termo e estilo', 'fatos', [
    ['Termo', 'Região onde se originou a Vitis vinifera: grande diversidade de uvas'],
    ['Visão', 'A personalidade do vinho vem de uva, solo, clima e vinificação'],
    ['Estilo', 'Tipicidade: pedir um Bordeaux, Borgonha, Chianti ou Rioja é pedir o jeito da região'],
    ['Vinho típico', 'Cores mais leves, corpo delicado, frutas frescas e flores, muitas vezes sem carvalho'],
    ['Leis', 'Denominações de origem rigorosas, como AOC e DOCG']
  ]);
  P('Velho e Novo Mundo', 'Novo Mundo: termo e estilo', 'fatos', [
    ['Termo', 'Américas, Austrália, Nova Zelândia e África do Sul, onde colonização levou a vinífera'],
    ['Rótulo', 'Destaca o nome da uva'],
    ['Produção', 'Técnicas modernas, vinhos prontos para beber cedo'],
    ['Estilo', 'Acessíveis, frutados e encorpados (regiões mais quentes), com menos acidez']
  ]);
  P('Velho e Novo Mundo', 'Principais países do Velho Mundo', 'fatos', [
    ['França, Itália e Espanha', 'Regiões icônicas: Bordeaux, Toscana e Rioja'],
    ['Portugal, Grécia e Áustria', 'Destaque pelas castas autóctones'],
    ['Alemanha', 'Brancos de alta qualidade, sobretudo no Mosel'],
    ['Bálcãs', 'Croácia e Eslovênia emergem com vinhos notáveis'],
    ['Hungria', 'Famosa pelos Tokaji']
  ]);
  P('Velho e Novo Mundo', 'Principais países do Novo Mundo', 'fatos', [
    ['EUA', 'Califórnia e Oregon'],
    ['Austrália', 'Barossa Valley e Margaret River'],
    ['Argentina', 'Os Malbecs'],
    ['Chile', 'Vale Central'],
    ['Nova Zelândia', 'Sauvignon Blanc'],
    ['África do Sul', 'Região do Cabo'],
    ['Canadá', 'Niagara e Vale do Okanagan'],
    ['Uruguai', 'Sobretudo Tannat'],
    ['Brasil e México', 'Vale dos Vinhedos e Valle de Guadalupe']
  ]);
  P('Velho e Novo Mundo', 'França e Itália em números', 'numeros', [
    ['≈ 800 mil ha', 'Vinhedos da França (OIV 2022: 812 mil); 40 a 50 mhl por ano'],
    ['Mais de 2.000', 'Variedades de uvas na França, segundo o slide', 'conferir'],
    ['10 milhões', 'Enoturistas por ano na França, segundo o slide', 'conferir'],
    ['> 700 mil ha', 'Vinhedos da Itália (OIV 2022: 718 mil); 40 a 50 mhl por ano'],
    ['França', 'Bordeaux, Borgonha, Champagne e Vale do Rhône; AOC'],
    ['Itália', 'Toscana, Piemonte, Vêneto e Sicília; DOCG']
  ]);
  P('Velho e Novo Mundo', 'Espanha e Portugal em números', 'numeros', [
    ['955 mil ha', 'Vinhedos da Espanha; o slide traz 975 mil, mas o próprio panorama (OIV 2022) diz 955 mil', 'corrigido'],
    ['> 40 mhl', 'Produção anual da Espanha, segundo o slide', 'conferir'],
    ['≈ 240 mil ha', 'Vinhedos de Portugal, segundo o slide', 'conferir'],
    ['6 a 7 mhl', 'Produção anual de Portugal'],
    ['Espanha', 'Rioja, Priorat, Ribera del Duero e Catalunha; Tempranillo, Garnacha e Albariño'],
    ['Portugal', 'Alentejo, Douro, Dão e Vinho Verde; Touriga Nacional, Alvarinho e Baga']
  ]);
  P('Velho e Novo Mundo', 'EUA e Chile em números', 'numeros', [
    ['≈ 450 mil ha', 'Vinhedos dos EUA, segundo o slide', 'conferir'],
    ['20 a 25 mhl', 'Produção anual dos EUA'],
    ['≈ 200 mil ha', 'Vinhedos do Chile (OIV 2022: 196 mil); produção de 10 a 12 mhl'],
    ['EUA', 'Califórnia (Napa Valley e Sonoma County); denominações chamadas AVAs'],
    ['Chile', 'Maipo, Casablanca e Colchagua; a Carménère, que o slide chama de autóctone, veio de Bordeaux', 'corrigido']
  ]);
  P('Velho e Novo Mundo', 'Argentina e Brasil em números', 'numeros', [
    ['207 mil ha', 'Vinhedos da Argentina (OIV 2022); o slide traz 230 mil', 'corrigido'],
    ['15 a 17 mhl', 'Produção da Argentina, segundo o slide', 'conferir'],
    ['≈ 80 mil ha', 'Vinhedos do Brasil (OIV 2022: 81 mil)'],
    ['Argentina', 'Mendoza é o centro da produção; destaque para o Malbec'],
    ['Brasil', 'Serra Gaúcha, Campanha Gaúcha, São Paulo, Minas Gerais e Nordeste']
  ]);
  P('Velho e Novo Mundo', 'Austrália e Nova Zelândia em números', 'numeros', [
    ['≈ 150 mil ha', 'Vinhedos da Austrália; 12 a 13 mhl por ano'],
    ['≈ 38 mil ha', 'Vinhedos da Nova Zelândia'],
    ['3,8 mhl', 'Produção da Nova Zelândia em 2022; o slide traz cerca de 3 mhl', 'corrigido'],
    ['Austrália', 'Barossa Valley, Margaret River, Hunter Valley e Yarra Valley; Shiraz, Chardonnay e Sauvignon Blanc'],
    ['Nova Zelândia', 'Marlborough, Central Otago, Hawke\'s Bay e Waipara; Sauvignon Blanc, Pinot Noir, Chardonnay e Riesling']
  ]);

  // ======================= ANÁLISE SENSORIAL (Aula 5) =======================
  P('Análise sensorial', 'Análise sensorial: introdução', 'lista', [
    ['', 'Mistura de ciência, arte e técnica; com treino fica mais fácil'],
    ['', 'A análise organoléptica é a mais importante que existe para o vinho'],
    ['', 'O laboratório mede a química, mas não distingue a qualidade intrínseca do vinho'],
    ['', 'Degustar é provar notando todas as características e anotando numa ficha ou mentalmente']
  ]);
  P('Análise sensorial', 'Os sentidos e o estímulo', 'fatos', [
    ['Visão', 'Estímulo físico'],
    ['Olfato', 'Estímulo químico'],
    ['Tato', 'Estímulo físico'],
    ['Audição', 'Estímulo físico'],
    ['Paladar', 'Estímulo químico']
  ]);
  P('Análise sensorial', 'Gosto × sabor', 'fatos', [
    ['Gosto', 'Sensação das papilas gustativas, na língua'],
    ['Sabor', 'Integração multissensorial de olfato, visão, tato e paladar'],
    ['Influências externas', 'Humor, sons, iluminação, frio e calor']
  ]);
  P('Análise sensorial', 'Sensação × percepção', 'fatos', [
    ['Sensação', 'Resposta fisiológica de um receptor a um estímulo externo'],
    ['Percepção', 'Julgamento e interpretação que cada pessoa faz do que os sentidos captaram']
  ]);
  P('Análise sensorial', 'A Roda de Aromas', 'fatos', [
    ['Autora', 'Ann C. Noble, química americana nascida em 1931, de UC Davis'],
    ['Contratação', 'Em 1974, 1ª mulher contratada pelo Departamento de Viticultura e Enologia de Davis'],
    ['Roda', 'Criada em 1984 para agrupar aromas em categorias, com terminologia específica'],
    ['Aposentadoria', '2002']
  ]);
  P('Análise sensorial', 'Condições da degustação', 'fatos', [
    ['Local', 'Bem iluminado (luz do dia ou lâmpadas brancas), paredes e mesas claras, clima confortável, sem cheiros fortes'],
    ['Degustador', 'Bem física e psicologicamente; sem perfume forte e cigarro; sem estômago cheio; água antes e durante']
  ]);
  P('Análise sensorial', 'Temperatura de serviço', 'fatos', [
    ['6 a 8 °C', 'Champagnes e espumantes'],
    ['8 a 10 °C', 'Brancos suaves ou doces'],
    ['10 a 12 °C', 'Brancos secos'],
    ['12 a 14 °C', 'Rosados'],
    ['14 a 16 °C', 'Tintos leves, jovens e frisantes'],
    ['16 a 18 °C', 'Médio corpo ou envelhecidos'],
    ['18 a 20 °C', 'Tintos encorpados', 'conferir']
  ]);
  P('Análise sensorial', 'Como fazer o exame visual', 'fatos', [
    ['Tonalidade', 'Copo pela haste, inclinado cerca de 45°, contra fundo branco; observa-se a cor do corpo'],
    ['Reflexo', 'Mesma posição: cor da borda, a "unha", pode diferir do corpo'],
    ['Limpidez', 'Contra a luz: sem sujeira, borra ou turvação'],
    ['Fluidez', 'Balançar o copo e ver quanto o líquido leva para voltar ao repouso, comparado à água']
  ]);
  P('Análise sensorial', 'O que o exame visual revela', 'lista', [
    ['', 'Se é branco, rosado ou tinto'],
    ['', 'Se é espumante ou tranquilo'],
    ['', 'Se é novo, maduro ou velho'],
    ['', 'Se é são ou doente'],
    ['', 'Qual é a estrutura (corpo)']
  ]);
  P('Análise sensorial', 'Pigmentos que dão a cor', 'fatos', [
    ['Fatores', 'Tipo de uva, solo do vinhedo e método de vinificação'],
    ['Antocianos', 'Polifenóis das uvas tintas (azul, violeta, vermelho); de "antos" flor e "kyanos" azul'],
    ['Flavonos', 'Cor amarela'],
    ['Leucoantocianos', 'Pigmento das uvas brancas: transparente'],
    ['Quercetina', 'Amarelo'],
    ['Clorofila', 'Verde ou esverdeado']
  ]);
  P('Análise sensorial', 'Cores dos vinhos brancos', 'fatos', [
    ['Branco papel', 'Brancos de regiões frias ou pouco ensolaradas, leves e acídulos; pouco contato com as cascas'],
    ['Verdeal', 'Brancos jovens, de colheita antecipada: acidez mais acentuada'],
    ['Amarelo palha', 'Maturação normal e acidez viva; leucoantocianos; a maioria dos brancos'],
    ['Amarelo ouro', 'Alguma maceração ou barril de madeira; mais encorpados e longevos, como grandes Bourgogne'],
    ['Âmbar', 'Nascem ouro e envelhecem muito em carvalho: Porto, Xerez Oloroso e Madeira']
  ]);
  P('Análise sensorial', 'Cores dos rosés', 'fatos', [
    ['Rosado', 'Contato muito breve com as cascas; Loire e Provence'],
    ['Cereja', 'Maceração mais longa, mais pigmento; Lirac e outros do Rhône'],
    ['Clarete', 'Maceração próxima à dos tintos; Tavel; alguns Beaujolais Nouveau']
  ]);
  P('Análise sensorial', 'Cores dos vinhos tintos', 'fatos', [
    ['Violáceo', 'Vinho estruturado recém-feito, adstringente e alcoólico; precisa de barril e garrafa'],
    ['Vermelho rubi', 'O vermelho mais vivo, "sangue"; tintos prontos, leves ou encorpados'],
    ['Vermelho granada', 'Menos vivo; tintos maduros no esplendor, com taninos menos intensos'],
    ['Vermelho alaranjado', 'Vinhos envelhecidos: antocianos vermelhos viram alaranjados'],
    ['Acastanhado', 'Muito estruturados e extra envelhecidos ou especiais: Porto, Xerez, Madeira, Málaga'],
    ['Marrom', 'Vinhos decrépitos ou mortos']
  ]);
  P('Análise sensorial', 'O que influencia o aroma', 'fatos', [
    ['Uva', 'Algumas são mais aromáticas: Moscatel, Gewürztraminer e Torrontés'],
    ['Solo', 'Alcalinos (pH > 7), como os calcários'],
    ['Inverno', 'Frio: regiões frias dão vinhos aromáticos'],
    ['Amplitude térmica', 'Diferença dia e noite na maturação'],
    ['Maceração', 'Mais contato de cascas e mosto, mais aromas']
  ]);
  P('Análise sensorial', 'Método do exame olfativo', 'linha', [
    ['1', 'Aproximar o copo do nariz sem balançar e aspirar suavemente: aromas mais voláteis, da borda'],
    ['2', 'Aspirar mais forte: aromas menos voláteis, logo acima do vinho'],
    ['3', 'Girar o vinho suavemente e repetir'],
    ['4', 'Girar vigorosamente e repetir'],
    ['5', 'Anotar as impressões numa ficha ou mentalmente']
  ]);
  P('Análise sensorial', 'Olfato: o órgão', 'fatos', [
    ['Mucosa', 'Cerca de 5 cm², na parte alta da cavidade nasal, ligada ao bulbo olfativo na base do cérebro'],
    ['Cobertura', 'Película oleosa com filme de água: percebe substâncias solúveis em óleo ou em água'],
    ['Treino', 'Narizes treinados distinguem de 1.500 a 2.000 aromas, segundo alguns autores', 'conferir']
  ]);
  P('Análise sensorial', 'Prisma do olfato', 'fatos', [
    ['Ideia', 'Vinho novo tem aromas frutados e florais; com o tempo as famílias evoluem'],
    ['Floral', 'Acácia, lírio, gerânio, jasmim, rosa, violeta; evolui para especiarias e animais'],
    ['Frutado', 'Pêssego, cassis, amora, morango, banana, groselha, maçã, damasco, pera'],
    ['Especiarias', 'Pimenta, noz-moscada, cravo, canela, gengibre, anis, alcaçuz; evoluem para animais e queimado'],
    ['Resinoso', 'Resina de pinho, breu; evolui como as especiarias'],
    ['Queimado', 'Café torrado, amêndoa ou amendoim torrado, caramelo'],
    ['Animais', 'Pele de salame, pelica, couro, suor, carnes, caça']
  ]);
  P('Análise sensorial', 'Aromas defeituosos', 'fatos', [
    ['Avinagrado', 'Ataque de bactérias acéticas'],
    ['Bouchonné', 'Mofo da rolha, principalmente pelo TCA (tricloroanisol)'],
    ['Fungos', 'O slide cita Armillaria mellea como causa do bouchonné', 'conferir']
  ]);
  P('Análise sensorial', 'Classificação dos aromas (1)', 'fatos', [
    ['Franco', 'Sem defeito de nenhuma espécie'],
    ['Amplo', 'Muitos aromas, sem destaque para nenhum'],
    ['Fragrante', 'Sensação de abertura olfativa, como hortelã e menta'],
    ['Defeituoso', 'Denota doença, defeito ou alteração'],
    ['Nítido', 'Aroma muito forte de um só tipo'],
    ['Etéreo', 'Próprio de vinhos envelhecidos']
  ]);
  P('Análise sensorial', 'Classificação dos aromas (2)', 'fatos', [
    ['Floral', 'Lembra flores'],
    ['Frutado', 'Lembra frutas'],
    ['Animal', 'Couro, pelica, suor, caça'],
    ['Vegetal', 'Ervas, mato, capim'],
    ['Vinoso', 'Aroma nítido de uvas frescas'],
    ['Especiarias', 'Notas que lembram especiarias'],
    ['Bouquet', 'Só existe em vinhos evoluídos']
  ]);
  P('Análise sensorial', 'Exame gustativo', 'fatos', [
    ['Peso', 'A etapa mais importante da análise e a de maior peso nas fichas'],
    ['Gostos básicos', 'Doce, salgado, ácido e amargo, sentidos pelas papilas da língua'],
    ['Sensações cutâneas', 'Maciez, adstringência, picância, sentidas na língua e na boca'],
    ['Retronasais', 'Aromas que sobem pelo nariz ao expirar após engolir: o "gosto" do vinho']
  ]);
  P('Análise sensorial', 'Tanicidade, acidez e maciez no tempo', 'fatos', [
    ['Tanicidade', 'O que mais melhora: tintos jovens são adstringentes; carvalho e garrafa reduzem muito os taninos'],
    ['Acidez', 'Diminui pouco e devagar, por reações lentas entre ácidos orgânicos e outros compostos'],
    ['Maciez', 'Mascarada em vinhos jovens; açúcar residual e glicerina não mudam com o tempo'],
    ['Álcool', 'Surge na fermentação e fica até o vinho ser consumido']
  ]);
  P('Análise sensorial', 'O vinho e o tempo', 'fatos', [
    ['Evolução', 'O vinho muda ao longo do tempo, de modo difícil de prever'],
    ['Tipo', 'Branco, rosé ou tinto'],
    ['Estrutura', 'Tanicidade, acidez e corpo'],
    ['Saúde', 'Bactérias, fungos e oxidação'],
    ['Armazenamento', 'Temperatura, luz e posição']
  ]);

  // ======================= FICHA DE DEGUSTAÇÃO (Aula 6) =======================
  P('Ficha de degustação', 'Para que serve a ficha', 'lista', [
    ['', 'É um mapa sensorial que guia cada aspecto do vinho, da cor aos sabores'],
    ['', 'Permite comparar vinhos ao longo do tempo'],
    ['', 'Treina paladar e olfato; muitos críticos a usam para avaliações objetivas e justas'],
    ['', 'Notas influenciam compras, reputação dos produtores e o mercado']
  ]);
  P('Ficha de degustação', 'Método Le Cordon Bleu', 'fatos', [
    ['Ficha', 'Inspirada no Método Giancarlo Bossi, no Diplôme Wine & Spirits'],
    ['Giancarlo Bossi', 'Sommelier italiano que dá nome ao método'],
    ['Uso', 'Também na formação de sommeliers em vários países, segundo o slide']
  ]);
  P('Ficha de degustação', 'Ficha: exame visual', 'fatos', [
    ['Tonalidade', 'Pode indicar idade, uva e amadurecimento'],
    ['Intensidade', 'Tom claro ou escuro'],
    ['Fluidez', 'Indica estrutura e até doçura'],
    ['Reflexos', 'Indicam estilo ou idade'],
    ['Limpidez', 'Indica técnicas e até saúde'],
    ['Transparência', 'Também indica técnicas e saúde'],
    ['Cor', 'Indica tipicidade do vinho']
  ]);
  P('Ficha de degustação', 'Ficha: exame olfativo', 'fatos', [
    ['Caráter geral', 'Defeitos, notas predominantes e perfis'],
    ['Qualidade', 'Separa os aromas grosseiros dos finos'],
    ['Intensidade', 'Indica a força dos aromas']
  ]);
  P('Ficha de degustação', 'Ficha: exame gustativo', 'fatos', [
    ['Açúcar', 'Indica o estilo do vinho pela doçura'],
    ['Acidez', 'Maturação da uva e até variedade'],
    ['Álcool', 'Maturação, região e até safra'],
    ['Maciez', 'Indica, entre outras coisas, harmonia'],
    ['Corpo', 'Estrutura, perfil, safra e até região'],
    ['Tanicidade', 'Indica casta, idade do vinho e maturação']
  ]);
  P('Ficha de degustação', 'A química da degustação', 'fatos', [
    ['Cor', 'Antocianinas das uvas dão as cores vibrantes dos tintos'],
    ['Lágrimas', 'Mostram tensão superficial e álcool: dão pista de teor alcoólico e viscosidade'],
    ['Ésteres e aldeídos', 'Criam aromas de frutas, flores e especiarias'],
    ['Pirazinas', 'Aromas herbáceos e verdes, como na Cabernet Sauvignon'],
    ['Ácido málico', 'Acidez brilhante e refrescante'],
    ['Taninos', 'Vêm das cascas das tintas: adstringência e potencial de envelhecimento']
  ]);
  P('Ficha de degustação', 'Pontuação', 'lista', [
    ['', 'A nota resume aromas, sabores, equilíbrio e personalidade num número'],
    ['', 'Cada quesito da ficha recebe pontos; a soma dá a nota geral'],
    ['', 'Permite comparar vinhos e embasa o mercado, influenciando preços e demanda']
  ]);

  // Nível no quiz, por notoriedade (avaliação editorial; ajustável): medio = conhecido no mundo todo.
  var LEVELS = {
    'Indústria do vinho em 100 anos': 'medio',
    'Área de vinhedos no mundo (2022)': 'avancado',
    'Os três maiores vinhedos (2022)': 'avancado',
    'Vinhedos da América do Sul (2022)': 'avancado',
    'Tendências da área plantada em 2022': 'expert',
    'Produção mundial de vinho (2022)': 'avancado',
    'Produção na Europa em 2022': 'expert',
    'Produção fora da UE: Hemisfério Norte': 'expert',
    'Produção fora da UE: Hemisfério Sul': 'expert',
    'Maiores produtores: participação': 'avancado',
    'Uvas para vinho e uvas de mesa': 'avancado',
    'Consumo mundial (2022)': 'avancado',
    'Desafios do consumo': 'medio',
    'Consumo na Europa (2022)': 'expert',
    'Consumo fora da Europa (2022)': 'expert',
    'Comércio mundial de vinho (2022)': 'avancado',
    'Os três maiores exportadores': 'avancado',
    'Comércio por tipo de produto': 'expert',
    'Maiores importadores (2022)': 'avancado',
    'Negócios do vinho no Brasil': 'avancado',
    'O que é viticultura': 'medio',
    'O caminho da videira': 'medio',
    'Espécies de Vitis': 'avancado',
    'Fatores no vinhedo: castas': 'avancado',
    'Fatores no vinhedo: clima': 'medio',
    'Fatores no vinhedo: solo': 'medio',
    'Condução: latada e espaldeira': 'avancado',
    'Fatores no vinhedo: poda': 'medio',
    'Inimigo: filoxera': 'medio',
    'Inimigo: míldio': 'avancado',
    'Botrytis cinerea': 'medio',
    'Terroir': 'medio',
    'Castas de regiões francesas': 'medio',
    'Melhores castas de Portugal': 'avancado',
    'Touriga Nacional': 'medio',
    'Melhores castas da Itália': 'avancado',
    'Fermentação alcoólica': 'medio',
    'Acidez e malolática nos brancos': 'avancado',
    'Algumas castas brancas': 'medio',
    'Anatomia da uva': 'medio',
    'Solos para uvas brancas': 'avancado',
    'Clima para uvas brancas': 'avancado',
    'Etapas da vinificação em branco': 'medio',
    'Fermentação do branco: números': 'expert',
    'Fim da fermentação do branco': 'avancado',
    'Castas tintas (1)': 'medio',
    'Castas tintas (2)': 'medio',
    'Branca × tinta: o que muda': 'medio',
    'Etapas da vinificação em tinto': 'medio',
    'Fermentação do tinto: números': 'expert',
    'Chapéu e remontagem': 'avancado',
    'Do tinto leve ao encorpado': 'avancado',
    'Clarificação (colagem)': 'expert',
    'Vinificação em rosé': 'avancado',
    'Regiões de rosé': 'medio',
    'Amadurecimento × envelhecimento': 'medio',
    'Breve história dos barris': 'avancado',
    'Espécies de carvalho': 'avancado',
    'Benefícios técnicos do carvalho': 'avancado',
    'Origem do carvalho': 'avancado',
    'Tipos de barril (1)': 'avancado',
    'Tipos de barril (2)': 'expert',
    'Barris franceses grandes': 'expert',
    'Dentro da garrafa': 'avancado',
    'O que faz um vinho envelhecer bem': 'medio',
    'Garrafas do mundo': 'avancado',
    'Reserva, Gran Reserva e Reservado': 'medio',
    'História dos espumantes': 'avancado',
    'Método ancestral': 'avancado',
    'Ancestral × champenoise': 'avancado',
    'Método champenoise: etapas': 'medio',
    'Quem usa o método tradicional': 'medio',
    'Método Charmat': 'medio',
    'Método Charmat: etapas': 'avancado',
    'Prosecco': 'medio',
    'Cava': 'medio',
    'Franciacorta': 'avancado',
    'Sekt': 'avancado',
    'O que é vinho fortificado': 'medio',
    'Vinho do Porto': 'medio',
    'História do Porto': 'expert',
    'Como se faz o Porto': 'medio',
    'Vinhos doces: caminhos': 'avancado',
    'Vinhos botritizados': 'medio',
    'Regiões de botritizados': 'medio',
    'Produtores de botritizados': 'avancado',
    'Vinhos de colheita tardia': 'medio',
    'Vin Santo': 'avancado',
    'Origem da agricultura biodinâmica': 'avancado',
    'Como se pratica a biodinâmica': 'avancado',
    'Viticultura biodinâmica': 'avancado',
    'Vinhos orgânicos': 'medio',
    'Agrotóxicos na vinha': 'expert',
    'Vinhos naturais: a ideia': 'medio',
    'Práticas dos vinhos naturais': 'avancado',
    'Grandes nomes dos naturais': 'expert',
    'Velho e Novo Mundo: o conceito': 'medio',
    'Velho Mundo: termo e estilo': 'medio',
    'Novo Mundo: termo e estilo': 'medio',
    'Principais países do Velho Mundo': 'medio',
    'Principais países do Novo Mundo': 'medio',
    'França e Itália em números': 'avancado',
    'Espanha e Portugal em números': 'avancado',
    'EUA e Chile em números': 'avancado',
    'Argentina e Brasil em números': 'avancado',
    'Austrália e Nova Zelândia em números': 'avancado',
    'Análise sensorial: introdução': 'medio',
    'Os sentidos e o estímulo': 'avancado',
    'Gosto × sabor': 'medio',
    'Sensação × percepção': 'avancado',
    'A Roda de Aromas': 'avancado',
    'Condições da degustação': 'medio',
    'Temperatura de serviço': 'medio',
    'Como fazer o exame visual': 'medio',
    'O que o exame visual revela': 'medio',
    'Pigmentos que dão a cor': 'avancado',
    'Cores dos vinhos brancos': 'avancado',
    'Cores dos rosés': 'avancado',
    'Cores dos vinhos tintos': 'avancado',
    'O que influencia o aroma': 'avancado',
    'Método do exame olfativo': 'medio',
    'Olfato: o órgão': 'expert',
    'Prisma do olfato': 'avancado',
    'Aromas defeituosos': 'avancado',
    'Classificação dos aromas (1)': 'expert',
    'Classificação dos aromas (2)': 'avancado',
    'Exame gustativo': 'medio',
    'Tanicidade, acidez e maciez no tempo': 'avancado',
    'O vinho e o tempo': 'medio',
    'Para que serve a ficha': 'medio',
    'Método Le Cordon Bleu': 'expert',
    'Ficha: exame visual': 'avancado',
    'Ficha: exame olfativo': 'avancado',
    'Ficha: exame gustativo': 'avancado',
    'A química da degustação': 'avancado',
    'Pontuação': 'medio'
  };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'PRO', version: 1, cards: cards };
})());
