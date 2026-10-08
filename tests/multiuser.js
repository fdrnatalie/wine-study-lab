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
const run_ = (c) => run(c, 'x');
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
test('código de barras → ficha; rotina de fichas técnicas', () => {
  const r = ok(post('barcode.lookup', { code: '8001234567893' }, owner.token));
  assert.strictEqual(r.found, true);
  assert.strictEqual(r.fields.subregion.value, 'Barolo');
  assert.strictEqual(r.fields.abv.value, 14.5);
  assert.strictEqual(r.fields.producer.value, 'Cantina Demo');
  assert.strictEqual(ok(post('barcode.lookup', { code: '7890000000000' }, owner.token)).found, false);
  assert.strictEqual(post('barcode.lookup', { code: '12' }, owner.token).ok, false);
  // vinho incompleto com código → rotina preenche campos vazios com a fonte
  const w = ok(post('wines.save', { wine: { name: 'Sem ficha', barcode: '8001234567893' } }, owner.token));
  assert.strictEqual(post('routine.run', {}, ana.token).ok, false);
  const st = ok(post('routine.configure', { enabled: true, use_ai: false, max_per_run: 20, max_cost_month: 1 }, owner.token));
  assert.strictEqual(st.scheduled, true);
  const run = ok(post('routine.run', {}, owner.token));
  assert.ok(run.barcode_fields > 0, JSON.stringify(run));
  const after = ok(post('wines.get', { id: w.id }, owner.token));
  assert.strictEqual(after.abv, 14.5);
  assert.strictEqual(after.field_sources.abv, 'pesquisado');
  assert.ok(/openfoodfacts/.test(after.field_refs.abv));
  assert.strictEqual(after.name, 'Sem ficha');
  // com IA: sugestões vão para a revisão, nada entra direto
  run_('__setMockKey()');
  ok(post('wines.save', { wine: { name: 'Outro sem ficha' } }, owner.token));
  ok(post('routine.configure', { enabled: true, use_ai: true, max_per_run: 20, max_cost_month: 5 }, owner.token));
  const run2 = ok(post('routine.run', {}, owner.token));
  assert.ok(run2.ai_runs > 0 && run2.ai_proposals > 0, JSON.stringify(run2));
  assert.ok(ok(post('ai.pending', {}, owner.token)).length > 0);
  // teto de gasto: com teto 0, a IA não roda
  ok(post('wines.save', { wine: { name: 'Terceiro sem ficha' } }, owner.token));
  ok(post('routine.configure', { enabled: true, use_ai: true, max_per_run: 20, max_cost_month: 0 }, owner.token));
  assert.strictEqual(ok(post('routine.run', {}, owner.token)).ai_runs, 0);
});
test('numeração: escolher números, lacunas e conflitos', () => {
  const w = ok(post('wines.list', {}, owner.token))[0];
  const fr = (extra) => post('bottles.fractionate', Object.assign({ wine_id: w.id, original_volume_ml: 750, bottle_volume_ml: 30 }, extra), ana.token);
  const r1 = ok(fr({ numbering: 'manual', numbers: '5, 9, 12-14' }));
  assert.strictEqual(JSON.stringify(r1.numbers), JSON.stringify([5, 9, 12, 13, 14]));
  // conflito: 9 e 13 já estão em uso
  const bad = fr({ numbering: 'manual', numbers: '9, 20, 13' });
  assert.strictEqual(bad.ok, false); assert.ok(/9, 13/.test(bad.error), bad.error);
  assert.strictEqual(fr({ numbering: 'manual', numbers: 'abc' }).ok, false);
  assert.strictEqual(fr({ numbering: 'manual', numbers: '0' }).ok, false);
  // nada foi gravado pela tentativa com conflito
  assert.strictEqual(ok(post('bottles.list', {}, ana.token)).length >= 5, true);
  assert.ok(!ok(post('bottles.list', {}, ana.token)).some((b) => b.number === 20));
  // libera o 9 e preenche as lacunas: os menores números livres (1,2,3,4 ...)
  const b9 = ok(post('bottles.list', {}, ana.token)).find((b) => b.number === 9);
  ok(post('bottles.setStatus', { ids: [b9.id], status: 'utilizada' }, ana.token));
  assert.strictEqual(ok(fr({ numbering: 'manual', numbers: '9' })).numbers[0], 9);          // número liberado é reaproveitado
  assert.strictEqual(fr({ numbering: 'manual', numbers: '9' }).ok, false);                  // e volta a ficar em uso
  const active = new Set(ok(post('bottles.list', {}, ana.token)).filter((b) => b.status === 'disponivel' || b.status === 'reservada').map((b) => b.number));
  const expected = []; for (let n = 1; expected.length < 6; n++) if (!active.has(n)) expected.push(n);
  const r2 = ok(fr({ numbering: 'lacunas', count: 6 }));
  assert.strictEqual(JSON.stringify(r2.numbers), JSON.stringify(expected));
  // a numeração é por usuário: a dona pode usar o mesmo número livremente
  // (a dona tem a sua numeração: escolhe um número que ela não usa, mesmo que a Ana use)
  const ownerUsed = new Set(ok(post('bottles.list', {}, owner.token)).filter((x) => ['disponivel', 'em_uso', 'reservada'].includes(x.status)).map((x) => x.number));
  let free = 1; while (ownerUsed.has(free)) free++;
  assert.strictEqual(ok(post('bottles.fractionate', { wine_id: w.id, count: 1, numbering: 'manual', numbers: String(free), original_volume_ml: 750, bottle_volume_ml: 30 }, owner.token)).numbers[0], free);
});
test('perfil do vinho: equilíbrio, complexidade e conclusão', () => {
  const w = ok(post('wines.save', { wine: { name: 'Vinho do perfil' } }, owner.token));
  const p = ok(post('profiles.save', { entity_type: 'wine', entity_id: w.id, profile: { source: 'usuario', acidity: 'alta', visual_text: 'rubi', nose_text: 'cereja', palate_text: 'fresco',
    balance: 'harmonico', complexity: 'complexa', conclusion_text: 'harmônico, guarda 5 anos' } }, owner.token));
  assert.strictEqual(p.balance, 'harmonico'); assert.strictEqual(p.complexity, 'complexa'); assert.ok(/guarda/.test(p.conclusion_text));
  assert.strictEqual(post('profiles.save', { entity_type: 'wine', entity_id: w.id, profile: { source: 'usuario', balance: 'perfeito' } }, owner.token).ok, false);
});
test('garrafinha só acaba quando você decide: em uso continua disponível', () => {
  const lk = ok(post('wines.list', {}, owner.token));
  const bottles = ok(post('bottles.list', {}, owner.token)).filter((b) => b.status === 'disponivel').slice(0, 2);
  const t = ok(post('tastings.create', { bottle_ids: bottles.map((b) => b.id) }, owner.token));
  const play = ok(post('tastings.play', { id: t.id }, owner.token));
  play.samples.forEach((sm) => ok(post('tastings.saveAnswers', { sample_id: sm.id, answers: { acidity: { value: 'alta' } }, completed: true }, owner.token)));
  const rep = ok(post('tastings.reveal', { id: t.id }, owner.token));
  // revelar NÃO finaliza: continuam separadas, aguardando decisão
  assert.ok(rep.samples.every((s) => s.bottle_status === 'reservada'));
  const ids = bottles.map((b) => b.id);
  const waiting = ok(post('bottles.list', {}, owner.token)).filter((b) => b.awaiting && ids.includes(b.id));
  assert.strictEqual(waiting.length, 2);
  // uma acabou, a outra ainda tem vinho
  ok(post('bottles.setStatus', { ids: [bottles[0].id], status: 'utilizada' }, owner.token));
  ok(post('bottles.setStatus', { ids: [bottles[1].id], status: 'em_uso' }, owner.token));
  const after = ok(post('bottles.list', {}, owner.token));
  assert.strictEqual(after.find((b) => b.id === bottles[0].id).status, 'utilizada');
  assert.strictEqual(after.find((b) => b.id === bottles[1].id).status, 'em_uso');
  assert.strictEqual(after.filter((b) => b.awaiting && ids.includes(b.id)).length, 0);
  // em uso entra em nova degustação; finalizada não
  const again = post('tastings.create', { bottle_ids: [bottles[1].id] }, owner.token);
  assert.ok(again.ok, again.error);
  assert.strictEqual(post('tastings.create', { bottle_ids: [bottles[0].id] }, owner.token).ok, false);
  // o número da finalizada foi liberado; o da em uso continua ocupado
  const w = lk[0];
  assert.strictEqual(post('bottles.fractionate', { wine_id: w.id, numbering: 'manual', numbers: String(bottles[1].number), original_volume_ml: 750, bottle_volume_ml: 30 }, owner.token).ok, false);
  assert.ok(post('bottles.fractionate', { wine_id: w.id, numbering: 'manual', numbers: String(bottles[0].number), original_volume_ml: 750, bottle_volume_ml: 30 }, owner.token).ok);
});
test('cartões de estudo: membro lê, aparecem em país/região e no quiz', () => {
  const hist = ok(post('study.topic', { topic: 'historia' }, ana.token));
  assert.ok(hist.count > 0 && hist.groups.length > 1);
  assert.strictEqual(post('study.topic', { topic: 'xyz' }, ana.token).ok, false);
  const countries = ok(post('regions.countries', {}, ana.token));
  const it = countries.find((c) => c.name === 'Itália');
  const country = ok(post('regions.country', { id: it.id }, ana.token));
  assert.ok(country.cards.length > 0);
  const tosc = ok(post('regions.get', { id: country.regions.find((r) => r.name === 'Toscana').id }, ana.token));
  assert.ok(tosc.cards.length > 0 && tosc.subregions.some((s) => s.cards.length));
  const q = ok(post('quiz.generate', { cards: 'todos', n: 6 }, ana.token));
  assert.ok(q.questions.length > 0 && q.questions.every((x) => x.type === 'cartao' && x.options.length >= 3 && x.answer >= 0));
  const qi = ok(post('quiz.generate', { cards: 'todos', country_id: it.id, n: 4 }, ana.token));
  assert.ok(qi.questions.length > 0);
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
