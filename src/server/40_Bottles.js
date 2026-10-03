/**
 * Minha Adega de Degustação: fracionamentos e garrafinhas.
 *
 * Um número de garrafinha fica "ocupado" enquanto a garrafinha estiver disponível ou
 * reservada; depois de utilizada/descartada, o número pode ser reaproveitado.
 */
var Bottles = (function () {
  var ACTIVE = { disponivel: 1, reservada: 1 };

  function list() {
    var wines = Util.indexBy(Repo.all('wines'), 'id');
    var grapes = Util.indexBy(Repo.all('grapes'), 'id');
    var wg = Util.groupBy(Repo.all('wine_grapes'), 'wine_id');
    return Repo.all('bottles').map(function (b) {
      var w = wines[b.wine_id] || {};
      return {
        id: b.id, number: b.number, status: b.status, volume_ml: b.volume_ml, batch_id: b.batch_id, notes: b.notes,
        wine_id: b.wine_id, wine_name: w.name || '?', vintage: w.vintage, color: w.color,
        grapes: (wg[b.wine_id] || []).map(function (x) { return grapes[x.grape_id] ? grapes[x.grape_id].name : ''; }).filter(Boolean)
      };
    }).sort(function (a, b) {
      var aa = ACTIVE[a.status] ? 0 : 1, bb = ACTIVE[b.status] ? 0 : 1;
      return aa - bb || a.number - b.number;
    });
  }

  function usedNumbers_() {
    var used = {};
    Repo.all('bottles').forEach(function (b) { if (ACTIVE[b.status]) used[b.number] = true; });
    return used;
  }

  /**
   * Registra o fracionamento de uma garrafa em N garrafinhas.
   * numbering: "aleatoria" (sorteia números livres de 1..max_number) ou "sequencial".
   */
  function fractionate(input) {
    return Repo.withLock(function () {
      var wine = Repo.get('wines', Validate.id(input.wine_id, 'wines'));
      var count = Validate.num(input.count, 1, 100, 'Quantidade de garrafinhas');
      if (!count) throw new Error('Informe a quantidade de garrafinhas.');
      var original = Validate.num(input.original_volume_ml, 50, 20000, 'Volume original') || 750;
      var each = Validate.num(input.bottle_volume_ml, 5, 1000, 'Volume da garrafinha') || Math.round(original / count);
      var numbering = Validate.oneOf(input.numbering || 'aleatoria', ['aleatoria', 'sequencial'], 'numeração');
      var maxNumber = Validate.num(input.max_number, 10, 9999, 'Número máximo') || 999;
      var used = usedNumbers_();
      var free = [];
      for (var n = 1; n <= maxNumber; n++) if (!used[n]) free.push(n);
      if (free.length < count) throw new Error('Não há números livres suficientes até ' + maxNumber + '.');
      var numbers;
      if (numbering === 'aleatoria') {
        numbers = Util.shuffle(free).slice(0, count);
      } else {
        var maxUsed = Object.keys(used).reduce(function (m, k) { return Math.max(m, +k); }, 0);
        numbers = free.filter(function (x) { return x > maxUsed; }).slice(0, count);
        if (numbers.length < count) numbers = free.slice(0, count);
      }
      numbers.sort(function (a, b) { return a - b; });
      var date = Validate.str(input.date, 30, 'data') || Util.nowIso().slice(0, 10);
      var batch = Repo.insert('bottling_batches', [{
        wine_id: wine.id, date: date, original_volume_ml: original, bottle_volume_ml: each, bottle_count: count,
        numbering: numbering, opened_at: date, notes: Validate.str(input.notes, 2000, 'observações'), source: 'usuario'
      }])[0];
      Repo.insert('bottles', numbers.map(function (num) {
        return { number: num, wine_id: wine.id, batch_id: batch.id, volume_ml: each, status: 'disponivel',
          status_changed_at: Util.nowIso(), source: 'usuario' };
      }));
      return { batch: batch, numbers: numbers, wine_name: wine.name };
    });
  }

  function setStatus(ids, status, notes) {
    Validate.oneOf(status, CONFIG.BOTTLE_STATUSES, 'status');
    var clean = Validate.ids(ids, 'bottles');
    var now = Util.nowIso();
    Repo.update('bottles', clean.map(function (id) {
      var p = { id: id, status: status, status_changed_at: now };
      if (!Util.isBlank(notes)) p.notes = Validate.str(notes, 1000, 'observações');
      return p;
    }));
    return clean.length;
  }

  function batches() {
    var wines = Util.indexBy(Repo.all('wines'), 'id');
    var bottles = Util.groupBy(Repo.all('bottles'), 'batch_id');
    return Repo.all('bottling_batches').map(function (b) {
      var bs = bottles[b.id] || [];
      return Object.assign({}, b, {
        wine_name: wines[b.wine_id] ? wines[b.wine_id].name : '?',
        available: bs.filter(function (x) { return x.status === 'disponivel'; }).length,
        total: bs.length
      });
    }).sort(function (a, b) { return String(b.date || b.created_at).localeCompare(String(a.date || a.created_at)); });
  }

  return { list: list, fractionate: fractionate, setStatus: setStatus, batches: batches };
})();
