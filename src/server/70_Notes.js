/**
 * Meu Caderno de Vinhos.
 */
var Notes = (function () {
  var LINK_TYPES = { wine: 'wines', grape: 'grapes', region: 'regions', country: 'countries', tasting: 'tastings' };

  function list() {
    var links = Util.groupBy(Repo.all('note_links'), 'note_id');
    var names = {};
    ['wines', 'grapes', 'regions', 'countries', 'tastings'].forEach(function (e) {
      Repo.all(e).forEach(function (r) { names[r.id] = r.name || r.title; });
    });
    return Repo.all('notes').map(function (n) {
      return Object.assign({}, n, {
        links: (links[n.id] || []).map(function (l) { return { entity_type: l.entity_type, entity_id: l.entity_id, name: names[l.entity_id] || '?' }; })
      });
    }).sort(function (a, b) {
      return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || String(b.date || b.created_at).localeCompare(String(a.date || a.created_at));
    });
  }

  function save(input) {
    input = input || {};
    var rec = {
      title: Validate.required(input.title, 200, 'Título'),
      body: Validate.str(input.body, 20000, 'Texto'),
      kind: input.kind ? Validate.oneOf(input.kind, CONFIG.NOTE_KINDS, 'tipo') : 'impressao',
      pinned: !!input.pinned
    };
    var note;
    if (input.id) {
      var existing = Repo.get('notes', Validate.id(input.id, 'notes'));
      Repo.update('notes', [Object.assign({ id: existing.id }, rec)]);
      note = Repo.get('notes', existing.id);
    } else {
      note = Repo.insert('notes', [Object.assign(rec, { date: Util.nowIso(), source: 'usuario' })])[0];
    }
    if (Array.isArray(input.links)) {
      var wanted = input.links.slice(0, 30).map(function (l) {
        var entity = LINK_TYPES[l.entity_type];
        if (!entity) throw new Error('Tipo de vínculo inválido.');
        return { entity_type: l.entity_type, entity_id: Validate.id(l.entity_id, entity) };
      });
      var old = Repo.where('note_links', { note_id: note.id });
      Repo.remove('note_links', old.map(function (x) { return x.id; }));
      Repo.insert('note_links', wanted.map(function (l) { return Object.assign({ note_id: note.id, source: 'usuario' }, l); }));
    }
    return note;
  }

  function remove(id) {
    Validate.id(id, 'notes');
    Repo.remove('note_links', Repo.where('note_links', { note_id: id }).map(function (x) { return x.id; }));
    Repo.remove('notes', [id]);
    return true;
  }

  return { list: list, save: save, remove: remove };
})();
