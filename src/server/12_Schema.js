/**
 * Criação e evolução das abas `db_*`.
 * ensure() é idempotente: cria abas ausentes e acrescenta colunas novas no fim,
 * sem nunca apagar ou reordenar dados.
 */
var Schema = (function () {
  function columns(entity) {
    var d = SCHEMA[entity];
    var all = [COMMON_COLUMNS[0]].concat(d.cols, COMMON_COLUMNS.slice(1));
    return all.map(function (spec) {
      var p = spec.split(':');
      return { name: p[0], type: p[1] || 'string' };
    });
  }

  function ensure() {
    var ss = Repo.spreadsheet();
    var report = [];
    Object.keys(SCHEMA).forEach(function (entity) {
      var d = SCHEMA[entity];
      var cols = columns(entity);
      var sh = ss.getSheetByName(d.sheet);
      if (!sh) {
        sh = ss.insertSheet(d.sheet);
        sh.getRange(1, 1, 1, cols.length).setValues([cols.map(function (c) { return c.name; })]);
        formatColumns_(sh, cols, 1);
        sh.setFrozenRows(1);
        sh.getRange(1, 1, 1, cols.length).setFontWeight('bold').setBackground('#f3ece4');
        sh.setTabColor('#6b1f2a');
        report.push('criada: ' + d.sheet);
        return;
      }
      var lastCol = Math.max(sh.getLastColumn(), 1);
      var header = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
      var missing = cols.filter(function (c) { return header.indexOf(c.name) < 0; });
      if (missing.length) {
        var start = header.filter(String).length + 1;
        sh.getRange(1, start, 1, missing.length).setValues([missing.map(function (c) { return c.name; })])
          .setFontWeight('bold').setBackground('#f3ece4');
        formatColumns_(sh, missing, start);
        report.push(d.sheet + ': +' + missing.map(function (c) { return c.name; }).join(', '));
      }
    });
    return report;
  }

  // Colunas de texto/json/data ficam em formato texto para o Sheets não converter valores.
  function formatColumns_(sh, cols, startCol) {
    cols.forEach(function (c, i) {
      if (c.type === 'string' || c.type === 'json' || c.type === 'date') {
        sh.getRange(2, startCol + i, sh.getMaxRows() - 1, 1).setNumberFormat('@');
      }
    });
  }

  return { columns: columns, ensure: ensure };
})();
