/**
 * Testes de ponta a ponta do modo multiusuário (v5), com o servidor REAL sobre a planilha simulada.
 * Uso: node tests/multiuser.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = path.join(__dirname, '..');
const sandbox = { console: { log() {}, error() {}, warn() {} }, Date, Math, JSON, setTimeout, Proxy, location: { hash: '' },
  btoa: (s) => Buffer.from(s, 'binary').toString('base64'), atob: (s) => Buffer.from(s, 'base64').toString('binary'),
  unescape, encodeURIComponent, decodeURIComponent };
sandbox.window = sandbox;
const ctx = vm.createContext(sandbox);
const run = (code, file) => vm.runInContext(code, ctx, { filename: file });
run(fs.readFileSync(path.join(root, 'tools/gas-mock.js'), 'utf8'), 'gas-mock.js');
run(fs.readFileSync(path.join(root, 'tools/fixture.js'), 'utf8'), 'fixture.js');
fs.readdirSync(path.join(root, 'src/server')).filter((f) => f.endsWith('.js') && !/^00_Local/.test(f)).sort()
  .forEach((f) => run(fs.readFileSync(path.join(root, 'src/server', f), 'utf8'), f));
run('__loadSourceSheets(__FIXTURE); setup(); configurarLogin("123-abc.apps.googleusercontent.com");', 'boot');

let passed = 0;
function test(name, fn) {
  try { fn(); passed++; console.log('  ✓ ' + name); } catch (e) { console.error('  ✗ ' + name + '\n    ' + e.message); process.exitCode = 1; }
}
const post = (method, args, token) => JSON.parse(run(`doPost({ postData: { contents: ${JSON.stringify(JSON.stringify({ method, args, token }))} } }).getContent()`, 'call'));
const ok = (r) => { if (!r.ok) throw new Error(r.error); return r.data; };
const login = (email, name) => ok(post('auth.login', { credential: run(`__mockCredential(${JSON.stringify(email)}, ${JSON.stringify(name)})`) }));

console.log('Multiusuário');
const owner = login('dev@local', 'Dona');
const ana = login('ana@example.com', 'Ana');
const bia = login('bia@example.com', 'Bia');

test('papéis: dona = admin, demais = membro', () => {
  assert.strictEqual(owner.user.role, 'admin');
  assert.strictEqual(ana.user.role, 'membro');
});
test('sem token / token inválido → pede login', () => {
  const r = post('wines.list', {}, '');
  assert.strictEqual(r.ok, false); assert.strictEqual(r.auth, true);
  assert.strictEqual(post('wines.list', {}, 'f'.repeat(64)).auth, true);
});
test('dados antigos são da dona; membros começam vazios', () => {
  assert.ok(ok(post('bottles.list', {}, owner.token)).length > 0);
  assert.strictEqual(ok(post('bottles.list', {}, ana.token)).length, 0);
  assert.strictEqual(ok(post('notes.list', {}, ana.token)).length, 0);
});
test('catálogo de vinhos é comum', () => {
  assert.strictEqual(ok(post('wines.list', {}, ana.token)).length, ok(post('wines.list', {}, owner.token)).length);
});
let anaWine;
test('membro cadastra vinho (só com país/região da enciclopédia)', () => {
  const bad = post('wines.save', { wine: { name: 'X', country: 'Atlântida' } }, ana.token);
  assert.strictEqual(bad.ok, false); assert.ok(/enciclopédia/.test(bad.error));
  anaWine = ok(post('wines.save', { wine: { name: 'Vinho da Ana', country: 'Itália', region: 'Piemonte', my_notes: 'nota da Ana', grapes: [{ name: 'Nebbiolo' }] } }, ana.token));
  assert.strictEqual(anaWine.can_edit, true);
  assert.strictEqual(anaWine.my_notes, 'nota da Ana');
});
test('outro membro vê o vinho, não edita a ficha, e tem notas próprias', () => {
  const w = ok(post('wines.get', { id: anaWine.id }, bia.token));
  assert.strictEqual(w.can_edit, false);
  assert.strictEqual(w.my_notes, '');
  const r = ok(post('wines.save', { wine: { id: anaWine.id, name: 'Hackeado', my_notes: 'nota da Bia' } }, bia.token));
  assert.strictEqual(r.name, 'Vinho da Ana');
  assert.strictEqual(r.my_notes, 'nota da Bia');
  assert.strictEqual(ok(post('wines.get', { id: anaWine.id }, ana.token)).my_notes, 'nota da Ana');
});
test('membro não altera perfil de vinho alheio nem enciclopédia', () => {
  assert.strictEqual(post('profiles.save', { entity_type: 'wine', entity_id: anaWine.id, profile: { acidity: 'alta', source: 'usuario' } }, bia.token).ok, false);
  const g = ok(post('grapes.list', {}, bia.token))[0];
  assert.strictEqual(post('grapes.save', { grape: { id: g.id, name: g.name, origin: 'x' } }, bia.token).ok, false);
  assert.strictEqual(post('profiles.save', { entity_type: 'grape', entity_id: g.id, profile: { acidity: 'alta' } }, bia.token).ok, false);
});
test('garrafinhas e notas são isoladas, mesmo com id de outra pessoa', () => {
  const w = ok(post('wines.list', {}, owner.token))[0];
  ok(post('bottles.fractionate', { wine_id: w.id, original_volume_ml: 750, bottle_volume_ml: 50, count: 3, numbering: 'sequencial' }, ana.token));
  const anaBottles = ok(post('bottles.list', {}, ana.token));
  assert.strictEqual(anaBottles.length, 3);
  assert.strictEqual(anaBottles[0].number, 1);
  assert.strictEqual(ok(post('bottles.list', {}, bia.token)).length, 0);
  const r = post('bottles.setStatus', { ids: [anaBottles[0].id], status: 'descartada' }, bia.token);
  assert.strictEqual(r.ok === false || ok(post('bottles.list', {}, ana.token)).every((b) => b.status === 'disponivel'), true);
  const note = ok(post('notes.save', { note: { title: 'Segredo da Ana', body: 'x', kind: 'descoberta' } }, ana.token));
  assert.strictEqual(ok(post('notes.list', {}, bia.token)).length, 0);
  assert.strictEqual(post('notes.remove', { id: note.id }, bia.token).ok, false);
  assert.ok(!JSON.stringify(ok(post('search', { q: 'Segredo' }, bia.token))).includes('Segredo da Ana'));
});
test('degustação completa de um membro, invisível para os outros', () => {
  const ana2 = login('ana@example.com', 'Ana');
  const t = ok(post('tastings.create', { count: 2, difficulty: 'medio', allow_repeat: true }, ana2.token));
  const play = ok(post('tastings.play', { id: t.id }, ana2.token));
  assert.strictEqual(play.samples.length, 2);
  play.samples.forEach((sm) => ok(post('tastings.saveAnswers', { sample_id: sm.id, answers: { acidity: { value: 'alta' } }, completed: true }, ana2.token)));
  ok(post('tastings.reveal', { id: t.id }, ana2.token));
  const rep = ok(post('tastings.report', { id: t.id }, ana2.token));
  assert.ok(rep.samples.length === 2);
  assert.strictEqual(post('tastings.report', { id: t.id }, owner.token).ok, false);
  assert.ok(!ok(post('tastings.list', {}, owner.token)).some((x) => x.id === t.id));
  assert.ok(ok(post('dashboard', {}, ana2.token)));
});
test('degustar garrafinhas escolhidas + "o que aprender"', () => {
  const bottles = ok(post('bottles.list', {}, owner.token)).filter((b) => b.status === 'disponivel');
  const wines = ok(post('wines.list', {}, owner.token));
  const pick = bottles.filter((b) => (wines.find((w) => w.id === b.wine_id) || { grapes: [] }).grapes.length).slice(0, 3);
  assert.ok(pick.length >= 2, 'precisa de garrafinhas com uva');
  const t = ok(post('tastings.create', { bottle_ids: pick.map((b) => b.id) }, owner.token));
  // outra pessoa não consegue usar garrafinhas da dona
  assert.strictEqual(post('tastings.create', { bottle_ids: [pick[0].id] }, login('zed@example.com').token).ok, false);
  const play = ok(post('tastings.play', { id: t.id }, owner.token));
  assert.strictEqual(play.samples.length, pick.length);
  const lk = ok(post('lookups', {}, owner.token));
  const nebbiolo = lk.grapes.find((g) => g.name === 'Pinot Noir') || lk.grapes[0];
  const someRegion = lk.regions.find((r) => !r.parent_id);
  play.samples.forEach((sm) => ok(post('tastings.saveAnswers', { sample_id: sm.id, completed: true,
    answers: { grape: { value_json: [nebbiolo.id] }, region: { value: someRegion.id }, acidity: { value: 'baixa' } } }, owner.token)));
  const rep = ok(post('tastings.reveal', { id: t.id }, owner.token));
  const all = rep.samples.flatMap((s) => s.lessons);
  assert.ok(all.length > 0, 'sem lições');
  assert.ok(all.every((l) => l.title && l.text && !/undefined|null/.test(l.text + l.title)), JSON.stringify(all.slice(0, 3)));
  console.log('    ex.: ' + all.slice(0, 4).map((l) => l.title + ' — ' + l.text).join('\n    ex.: '));
});
test('IA, sincronização e usuários: só a administradora', () => {
  ['ai.status', 'sync.run', 'users.list', 'seed.grapes'].forEach((m) => assert.strictEqual(post(m, {}, ana.token).ok, false, m));
  assert.ok(ok(post('users.list', {}, owner.token)).length >= 3);
  assert.strictEqual(ok(post('lookups', {}, ana.token)).ai_enabled, false);
});
test('bloquear derruba a sessão', () => {
  ok(post('users.setStatus', { id: bia.user.id, status: 'bloqueado' }, owner.token));
  assert.strictEqual(post('wines.list', {}, bia.token).auth, true);
  assert.strictEqual(post('auth.login', { credential: run('__mockCredential("bia@example.com","Bia")') }).ok, false);
});
test('logout invalida o token', () => {
  post('auth.logout', {}, ana.token);
  assert.strictEqual(post('wines.list', {}, ana.token).auth, true);
});

console.log('\n' + passed + ' testes passaram' + (process.exitCode ? ' (com falhas)' : ''));
