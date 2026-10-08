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

  /** "5, 9, 12-15" (ou lista) → números inteiros únicos, em ordem de digitação. */
  function parseNumbers_(v, max) {
    var parts = Array.isArray(v) ? v.map(String) : String(v || '').split(/[\s,;]+/);
    var out = [], seen = {};
    parts.forEach(function (p) {
      p = String(p).trim();
      if (!p) return;
      var m = p.match(/^(\d{1,4})\s*[-–]\s*(\d{1,4})$/);
      var list = [];
      if (m) {
        var a = +m[1], b = +m[2];
        if (b < a || b - a > 200) throw new Error('Intervalo inválido: ' + p);
        for (var i = a; i <= b; i++) list.push(i);
      } else if (/^\d{1,4}$/.test(p)) list.push(+p);
      else throw new Error('Número inválido: "' + p + '". Use por exemplo 5, 9, 12-15.');
      list.forEach(function (n) {
        if (n < 1 || n > max) throw new Error('Os números vão de 1 a ' + max + '.');
        if (!seen[n]) { seen[n] = true; out.push(n); }
      });
    });
    return out;
  }

  /**
   * Registra o fracionamento de uma garrafa em N garrafinhas.
   * numbering: "aleatoria" (sorteia números livres), "sequencial" (depois do maior número ativo),
   * "lacunas" (os menores números livres: repõe os que foram acabando) ou "manual" (você escolhe os números).
   */
  function fractionate(input) {
    return Repo.withLock(function () {
      var wine = Repo.get('wines', Validate.id(input.wine_id, 'wines'));
      var numbering = Validate.oneOf(input.numbering || 'aleatoria', ['aleatoria', 'sequencial', 'lacunas', 'manual'], 'numeração');
      var maxNumber = Validate.num(input.max_number, 10, 9999, 'Número máximo') || 999;
      var chosen = numbering === 'manual' ? parseNumbers_(input.numbers, 9999) : null;
      var count = chosen ? chosen.length : Validate.num(input.count, 1, 100, 'Quantidade de garrafinhas');
      if (!count) throw new Error(chosen ? 'Informe os números das garrafinhas.' : 'Informe a quantidade de garrafinhas.');
      if (count > 100) throw new Error('No máximo 100 garrafinhas por fracionamento.');
      var original = Validate.num(input.original_volume_ml, 50, 20000, 'Volume original') || 750;
      var each = Validate.num(input.bottle_volume_ml, 5, 1000, 'Volume da garrafinha') || Math.round(original / count);
      var used = usedNumbers_();
      var free = [];
      for (var n = 1; n <= maxNumber; n++) if (!used[n]) free.push(n);
      var numbers;
      if (chosen) {
        var taken = chosen.filter(function (x) { return used[x]; });
        if (taken.length) throw new Error((taken.length === 1 ? 'O número ' : 'Os números ') + taken.join(', ') + (taken.length === 1 ? ' já está' : ' já estão') + ' em uso (garrafinha disponível ou reservada).');
        numbers = chosen;
      } else if (free.length < count) {
        throw new Error('Não há números livres suficientes até ' + maxNumber + '.');
      } else if (numbering === 'lacunas') {
        numbers = free.slice(0, count);
      } else if (numbering === 'aleatoria') {
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
