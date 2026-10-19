/**
 * Fotos das uvas: a administradora envia a foto (já reduzida no navegador); o arquivo vai para uma pasta do Drive dela
 * ("Wine Study Lab · Fotos das uvas", criada na primeira foto), compartilhada por link, e a ficha guarda só o ID do arquivo.
 * Usa o Drive avançado v3 com o escopo drive.file (só enxerga arquivos criados pelo próprio app).
 */
var GrapePhotos = (function () {
  var MAX_BYTES = 1800 * 1024;       // depois de reduzida, a foto fica em ~200–500 KB
  var MAX_PER_GRAPE = 8;
  var FOLDER_NAME = 'Wine Study Lab · Fotos das uvas';

  function url_(fileId) { return 'https://drive.google.com/thumbnail?id=' + encodeURIComponent(fileId) + '&sz=w1400'; }

  /**
   * Fotos prontas, de fontes abertas (Wikimedia Commons), com crédito e licença. Arquivos em src/photos/uvas/
   * (publicados junto com o site); os dados em 38_GrapePhotoSeed.js, por nome da uva.
   */
  function seedFor_(name) {
    var list = (typeof GRAPE_PHOTO_SEED !== 'undefined' && GRAPE_PHOTO_SEED[Util.normKey(name)]) || [];
    return list.map(function (x) {
      return { id: 'seed:' + x.f, url: 'uvas/' + x.f, caption: '', credit: x.by, license: x.lic, source: x.src, locked: true };
    });
  }

  function listFor(grapeId) {
    var g = Repo.get('grapes', grapeId);
    var mine = Repo.where('grape_photos', { grape_id: grapeId })
      .sort(function (a, b) { return (a.sort || 0) - (b.sort || 0); })
      .map(function (p) { return { id: p.id, url: url_(p.file_id), caption: p.caption || '', locked: false }; });
    return (g ? seedFor_(g.name) : []).concat(mine);
  }

  /** Primeira foto de cada uva (para os cartões da lista). */
  function covers() {
    var out = {};
    var seed = typeof GRAPE_PHOTO_SEED !== 'undefined' ? GRAPE_PHOTO_SEED : {};
    Repo.all('grapes').forEach(function (g) { var l = seed[Util.normKey(g.name)]; if (l && l.length) out[g.id] = 'uvas/' + l[0].f; });
    Repo.all('grape_photos').sort(function (a, b) { return (a.sort || 0) - (b.sort || 0); }).forEach(function (p) { if (!out[p.grape_id]) out[p.grape_id] = url_(p.file_id); });
    return out;
  }

  function folderId_() {
    var id = Settings.get('grape_photo_folder', '');
    if (id) return id;
    var f = Drive.Files.create({ name: FOLDER_NAME, mimeType: 'application/vnd.google-apps.folder' }, null, { fields: 'id' });
    Settings.set('grape_photo_folder', f.id);
    return f.id;
  }

  function slug_(s) { return Util.normKey(s).replace(/[^a-z0-9]+/g, '-').slice(0, 40) || 'uva'; }

  function add(a) {
    Ctx.requireAdmin();
    var grape = Repo.get('grapes', Validate.id(a.grape_id, 'grapes'));
    if (!grape) throw new Error('Uva não encontrada.');
    var m = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+\/=]+)$/.exec(String(a.image || ''));
    if (!m) throw new Error('Envie uma imagem JPEG, PNG ou WebP.');
    var existing = Repo.where('grape_photos', { grape_id: grape.id });
    if (existing.length >= MAX_PER_GRAPE) throw new Error('Esta uva já tem ' + MAX_PER_GRAPE + ' fotos. Remova alguma antes.');
    var bytes = Utilities.base64Decode(m[2]);
    if (bytes.length > MAX_BYTES) throw new Error('A foto ficou grande demais (máx. ' + Math.round(MAX_BYTES / 1024) + ' KB).');
    var ext = m[1] === 'jpeg' ? 'jpg' : m[1];
    var blob = Utilities.newBlob(bytes, 'image/' + m[1], 'uva-' + slug_(grape.name) + '-' + Date.now() + '.' + ext);
    var file = Drive.Files.create({ name: blob.getName(), parents: [folderId_()] }, blob, { fields: 'id' });
    Drive.Permissions.create({ type: 'anyone', role: 'reader' }, file.id);
    var sort = existing.reduce(function (mx, p) { return Math.max(mx, p.sort || 0); }, 0) + 1;
    Repo.insert('grape_photos', [{ grape_id: grape.id, file_id: file.id, caption: String(a.caption || '').slice(0, 120), sort: sort, source: 'usuario' }]);
    return listFor(grape.id);
  }

  function remove(a) {
    Ctx.requireAdmin();
    if (/^seed:/.test(String(a.id || ''))) throw new Error('Esta foto vem da enciclopédia e não pode ser removida aqui.');
    var p = Repo.get('grape_photos', Validate.id(a.id, 'grape_photos'));
    if (!p) throw new Error('Foto não encontrada.');
    try { Drive.Files.remove(p.file_id); } catch (e) { console.error('foto uva: remover do Drive', e); }   // se já sumiu do Drive, segue
    Repo.remove('grape_photos', [p.id]);
    return listFor(p.grape_id);
  }

  return { listFor: listFor, covers: covers, add: add, remove: remove };
})();
