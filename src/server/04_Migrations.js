/**
 * Migrações de dados (só acrescentam/preenchem; nunca apagam). Idempotentes: rodar de novo não muda nada.
 *
 * v5 (vários usuários):
 *  - cria a usuária administradora (a dona da planilha);
 *  - linhas pessoais antigas (garrafinhas, degustações, notas…) sem dono passam a ser da administradora;
 *  - "Minhas notas" de cada vinho viram notas pessoais da administradora (wine_notes).
 *    A coluna antiga my_notes fica intacta, como histórico.
 */
var Migrations = (function () {
  function run() {
    return Ctx.asSystem(function () {
      var report = [];
      if (!Auth.ownerEmail()) return report;      // instalação ainda não feita
      var admin = Auth.ensureAdmin();
      SCOPES.personal.forEach(function (entity) {
        var orphans = Repo.all(entity).filter(function (r) { return !r.user_id; });
        if (!orphans.length) return;
        Repo.update(entity, orphans.map(function (r) { return { id: r.id, user_id: admin.id }; }));
        report.push(entity + ': ' + orphans.length + ' linha(s) → ' + admin.email);
      });
      var have = {};
      Repo.all('wine_notes').forEach(function (n) { have[n.user_id + '|' + n.wine_id] = true; });
      var notes = Repo.all('wines').filter(function (w) { return !Util.isBlank(w.my_notes) && !have[admin.id + '|' + w.id]; })
        .map(function (w) { return { user_id: admin.id, wine_id: w.id, my_notes: w.my_notes, source: 'usuario' }; });
      if (notes.length) {
        Repo.insert('wine_notes', notes);
        report.push('wine_notes: ' + notes.length + ' nota(s) copiadas de my_notes');
      }
      return report;
    });
  }
  return { run: run };
})();
