/**
 * Planilha SIMULADA para testes locais. Reproduz só a ESTRUTURA das abas
 * VINHOS / UVAS / NOTAS (colunas, agrupamento das garrafinhas, textos de erro de IA,
 * preços divergentes, linhas vazias). Produtores e preços são FICTÍCIOS.
 */
(function (g) {
  var H = ['', 'ROTULO', 'PRODUTOR', 'PAIS', 'REGIÃO', 'BLEND', '', '', 'PREÇO', 'ANALISE VISUAL', 'TRAÇOS AROMATICOS', 'ACIDEZ', 'TANICIDADE', 'MACIEZ', 'CORPO', 'ALCOOL', 'AÇUCAR', 'AMARGOR'];
  var AI_ERR = 'I do not have enough information to answer the query. Please specify the wine.';
  var wines = [
    [3, 18, "BARBERA D'ASTI", 'CANTINA EXEMPLO', 'ITALIA', 'PIEMONTE', 'BARBERA', 2024, 13.5, ['$10.00'], ['Alta'], ['Baixa'], 'Vermelho rubi intenso com reflexos violáceos.', 'Frutas vermelhas (cereja, framboesa), especiarias e toques florais.'],
    [19, 38, "DOLCETTO D'ALBA", 'TENUTA FICTÍCIA', 'ITALIA', 'PIEMONTE', 'DOLCETTO', 2025, 13, ['$15.00', AI_ERR, '$14.00', '$16.00'], ['Média', 'Baixa', 'Média', 'Alta'], ['Média', 'Média-baixa'], 'Rubi intenso com reflexos violáceos.', 'Frutas vermelhas (cereja, ameixa), amêndoa.'],
    [39, 58, 'BAROLO', 'PRODUTOR DEMO', 'ITALIA', 'PIEMONTE', 'NEBBIOLO', 2022, 14, ['$40.00'], ['Alta'], ['Alta'], 'Granada translúcido com reflexos alaranjados.', 'Rosas, cereja, alcatrão, alcaçuz.'],
    [59, 78, "MONTEPULCIANO D'ABRUZZO", 'FATTORIA TESTE', 'ITALIA', 'ABRUZZO', 'MONTEPULCIANO', 2024, 13.5, ['$12.00', '$13.00'], ['Média'], ['Média-alta'], 'Rubi profundo com reflexos violáceos.', 'Frutas negras, ameixa, especiarias.'],
    [79, 98, 'PRIMITIVO DI MANDURIA', 'MASSERIA MODELO', 'ITALIA', 'PUGLIA', 'PRIMITIVO', 2024, 14.5, ['$12.00'], ['Média'], ['Média'], 'Rubi escuro, quase opaco.', 'Frutas negras maduras, geleia, baunilha.']
  ];
  var rows = [H, [1, 'DÓURO', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], [2, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']];
  wines.forEach(function (w) {
    for (var n = w[0]; n <= w[1]; n++) {
      var i = n - w[0];
      rows.push([n, w[2], w[3], w[4], w[5], w[6], w[7], w[8], w[9][i % w[9].length], w[12], w[13], w[10][i % w[10].length], w[11][i % w[11].length],
        'Macio', i % 3 ? 'Médio' : 'Médio e macio', 'Equilibrado', 'Seco', 'Baixa']);
    }
  });
  for (var n = 99; n <= 135; n++) {
    rows.push([n, '', '', '', '', '', '', '', '', n % 2 ? AI_ERR : 'Vermelho rubi intenso com reflexos violáceos', AI_ERR, n % 3 ? 'Média' : AI_ERR, 'Média-alta', '', '', '', '', '']);
  }

  g.__FIXTURE = {
    VINHOS: rows,
    UVAS: [
      ['UVAS', 'POSSUI OUTRO NOME?', 'REGIÕES ENCONTRADA', 'DESCRIÇÃO', 'COM QUAL UVA SE PARECE?', 'COMO PODE SER RECONHECIDA?'],
      ['DOLCETO', 'Sim, a uva Dolcetto possui outros nomes:  - Ormeasco (Ligúria, Itália)\n  - Douce Noire (Saboia, França)\n  - Charbono (Califórnia, EUA)', 'Piemonte e Ligúria (Itália), Califórnia (EUA), Austrália.', 'Aromas de cereja negra, amora, ameixa, violeta e alcaçuz. (texto abreviado)', 'Gamay', 'Baixa acidez natural, taninos marcantes. (texto abreviado)'],
      ['BARBERA', 'Sim: Barbera Nera, Barbera Amaro, Barbera Riccia.', 'Piemonte, Lombardia, Emilia-Romagna (Itália), Califórnia, Argentina.', 'Cereja vermelha, framboesa, ameixa, violeta. (texto abreviado)', 'Gamay', 'Alta acidez natural com baixos taninos. (texto abreviado)'],
      ['NEBBIOLO', 'Sim: Spanna, Chiavennasca, Picotener.', 'Piemonte, Lombardia e Vale de Aosta (Itália).', 'Rosas, cereja, alcatrão. (texto abreviado)', 'Pinot Noir', 'Cor clara, taninos e acidez altos. (texto abreviado)'],
      ['', 'Não tenho informações suficientes para responder.', 'Piemonte, Lombardia…', 'Não tenho informações suficientes…', 'Pinot Noir', ''],
      ['', 'Não tenho informações suficientes…', 'Piemonte…', 'I do not have enough information…', 'Merlot', ''],
      ['', '', '', '', 'I do not have enough information to answer the query because the grape name in cell A8 is blank.', '']
    ],
    NOTAS: [
      ['1. Descobrindo o Corpo pelo Teor Alcoólico 🍷'],
      ['O álcool é o principal responsável por dar densidade e viscosidade ao vinho. Olhando a graduação alcoólica no rótulo, você tem uma regra geral excelente:'],
      ['Leve: Até 12,5% de álcool.'], ['Médio corpo: Entre 12,5% e 13,5% de álcool.'], ['Encorpado: Acima de 13,5% de álcool.']
    ]
  };
})(window);
