/**
 * Testes das partes puras do servidor (Util, ScaleUtil, ImportParse, Scoring).
 * Uso: node tests/run.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const ctx = vm.createContext({ console, Date, Math, JSON });
['00_Config.js', '01_Util.js', '14_Settings.js', '20_ImportParse.js', '51_Scoring.js', '34_LabelParse.js'].forEach((f) => {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../src/server', f), 'utf8'), ctx, { filename: f });
});
const { Util, ScaleUtil, ImportParse, Scoring, LabelParse } = vm.runInContext('({Util, ScaleUtil, ImportParse, Scoring, LabelParse})', ctx);

let passed = 0;
function test(name, fn) {
  try { fn(); passed++; console.log('  ✓ ' + name); }
  catch (e) { console.error('  ✗ ' + name + '\n    ' + e.message); process.exitCode = 1; }
}

// Escalas mínimas (espelham 13_Seeds.js)
const lv = (arr) => arr.map((a, i) => ({ key: a[0], label: a[0], position: i + 1, synonyms: a[1] }));
const scales = {
  acidity: lv([['baixa', 'baixa'], ['media-', 'media-|média-baixa|media-baixa'], ['media', 'media|média'], ['media+', 'media+|média-alta|média+'], ['alta', 'alta']]),
  tannin: lv([['baixo', 'baixo|baixa'], ['medio-', 'média-baixa|media-baixa|médio-'], ['medio', 'medio|médio|media|média'], ['medio+', 'média-alta|media-alta|médio+'], ['alto', 'alto|alta']]),
  body: lv([['leve', 'leve'], ['medio-', 'médio-'], ['medio', 'medio|médio|médio e macio|corpo médio e macio'], ['medio+', 'médio+'], ['encorpado', 'encorpado']]),
  alcohol: lv([['baixo', 'baixo'], ['medio', 'medio|médio|equilibrado'], ['alto', 'alto']]),
  sweetness: lv([['seco', 'seco'], ['meio_seco', 'meio seco'], ['doce', 'doce']]),
  finish: lv([['curta', 'curta'], ['media', 'média'], ['longa', 'longa']])
};

console.log('Util');
test('smartTitle', () => {
  assert.strictEqual(Util.smartTitle("BARBERA D'ASTI"), "Barbera d'Asti");
  assert.strictEqual(Util.smartTitle('PRIMITIVO DI MANDURIA'), 'Primitivo di Manduria');
  assert.strictEqual(Util.smartTitle('DUCA DI SARAGNANO'), 'Duca di Saragnano');
});
test('parseNumber', () => {
  assert.strictEqual(Util.parseNumber('13,5'), 13.5);
  assert.strictEqual(Util.parseNumber('$8.00'), 8);
  assert.strictEqual(Util.parseNumber('R$ 1.234,56'), 1234.56);
  assert.strictEqual(Util.parseNumber('abc'), null);
});
test('isAiErrorText', () => {
  assert.ok(Util.isAiErrorText('I do not have enough information to answer the query.'));
  assert.ok(Util.isAiErrorText('Não tenho informações suficientes para responder'));
  assert.ok(!Util.isAiErrorText('Vermelho rubi intenso'));
});

console.log('ScaleUtil');
test('resolve synonyms keeps +/- distinct', () => {
  assert.strictEqual(ScaleUtil.resolve(scales.acidity, 'Alta'), 'alta');
  assert.strictEqual(ScaleUtil.resolve(scales.acidity, 'Média'), 'media');
  assert.strictEqual(ScaleUtil.resolve(scales.acidity, 'Média-alta'), 'media+');
  assert.strictEqual(ScaleUtil.resolve(scales.tannin, 'Média-baixa'), 'medio-');
  assert.strictEqual(ScaleUtil.resolve(scales.alcohol, 'Equilibrado'), 'medio');
  assert.strictEqual(ScaleUtil.resolve(scales.acidity, 'xyz'), '');
});

console.log('ImportParse');
const H = ['', 'ROTULO', 'PRODUTOR', 'PAIS', 'REGIÃO', 'BLEND', '', '', 'PREÇO', 'ANALISE VISUAL', 'TRAÇOS AROMATICOS', 'ACIDEZ', 'TANICIDADE', 'MACIEZ', 'CORPO', 'ALCOOL', 'AÇUCAR', 'AMARGOR'];
const row = (n, name, prod, price, acid, extra) => [n, name, prod, name ? 'ITALIA' : '', name ? 'PIEMONTE' : '', name ? 'DOLCETTO' : '', name ? 2025 : '', name ? 13 : '', price,
  'Rubi', 'Cereja', acid, 'Média', 'Macio', 'Médio e macio', 'Equilibrado', 'Seco', 'Baixa'].concat(extra || []);
const values = [H,
  [1, 'DÓURO', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [2, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  row(19, "DOLCETTO D'ALBA", 'LIVIO PAVESE', '$18.99', 'Média'),
  row(20, "DOLCETTO D'ALBA", 'LIVIO PAVESE', 'I do not have enough information to provide the price', 'Média'),
  row(21, "DOLCETTO D'ALBA", 'LIVIO PAVESE', '$14.99', 'Alta'),
  row(99, '', '', '', 'I do not have enough information to answer the query. Please')
];
const parsed = ImportParse.parseWines(values, scales);
test('detects unlabeled columns (number, vintage, abv)', () => {
  assert.strictEqual(parsed.map.number, 0);
  assert.strictEqual(parsed.map.vintage, 6);
  assert.strictEqual(parsed.map.abv, 7);
  assert.strictEqual(parsed.map.alcohol, 15);
});
test('groups rows into one wine with bottles', () => {
  assert.strictEqual(parsed.wines.length, 1);
  const w = parsed.wines[0];
  assert.strictEqual(w.name, "Dolcetto d'Alba");
  assert.strictEqual(w.producer, 'Livio Pavese');
  assert.strictEqual(w.vintage, 2025);
  assert.strictEqual(w.abv, 13);
  assert.deepStrictEqual(Array.from(w.bottles), [19, 20, 21]);
  assert.strictEqual(w.grapes[0].name, 'Dolcetto');
});
test('conflicting prices are not guessed', () => {
  const w = parsed.wines[0];
  assert.strictEqual(w.price, null);
  assert.ok(w.conflicts.some((c) => c.field === 'price'));
});
test('sensory mode + divergence logged', () => {
  const w = parsed.wines[0];
  assert.strictEqual(w.profile.acidity, 'media');
  assert.strictEqual(w.profile.alcohol, 'medio');
  assert.ok(w.conflicts.some((c) => c.field === 'acidity'));
});
test('incomplete and empty rows skipped with warnings', () => {
  assert.ok(parsed.warnings.some((x) => /DÓURO/.test(x)));
  assert.ok(parsed.warnings.some((x) => /sem rótulo/.test(x)));
});
test('parseGrapes with percentages', () => {
  const g = ImportParse.parseGrapes('Cabernet Sauvignon 60%, Merlot 40%');
  assert.strictEqual(g.length, 2);
  assert.strictEqual(g[0].name, 'Cabernet Sauvignon');
  assert.strictEqual(g[0].percent, 60);
});
test('grape sheet skips unnamed AI rows', () => {
  const r = ImportParse.parseGrapeSheet([
    ['UVAS', 'POSSUI OUTRO NOME?', 'REGIÕES ENCONTRADA', 'DESCRIÇÃO', 'COM QUAL UVA SE PARECE?', 'COMO PODE SER RECONHECIDA?'],
    ['DOLCETO', 'Sim, possui:  - Ormeasco (Ligúria, Itália)\n  - Douce Noire (Saboia, França)', 'Piemonte', 'desc', 'Gamay', 'baixa acidez'],
    ['', 'Não tenho informações suficientes', 'x', 'y', 'Merlot', 'z']
  ]);
  assert.strictEqual(r.grapes.length, 1);
  assert.strictEqual(r.grapes[0].name, 'Dolceto');
  assert.deepStrictEqual(Array.from(r.grapes[0].synonyms), ['Ormeasco (Ligúria, Itália)', 'Douce Noire (Saboia, França)']);
});
test('notes split by numbered titles', () => {
  const n = ImportParse.parseNotes([['1. Descobrindo o Corpo 🍷'], ['O álcool...'], ['Leve: até 12,5%'], ['2. Outra'], ['texto']]);
  assert.strictEqual(n.length, 2);
  assert.strictEqual(n[0].title, 'Descobrindo o Corpo 🍷');
  assert.strictEqual(n[0].body, 'O álcool...\nLeve: até 12,5%');
});

console.log('Scoring');
const rules = [
  { criterion: 'grape', weight: 25, compare: 'hypothesis', active: true },
  { criterion: 'region', weight: 20, compare: 'hierarchical', active: true },
  { criterion: 'country', weight: 10, compare: 'exact', active: true },
  { criterion: 'vintage', weight: 5, compare: 'numeric', params: { hit: 0, near: 2 }, active: true },
  { criterion: 'abv', weight: 5, compare: 'numeric', params: { hit: 0.5, near: 1 }, active: true },
  { criterion: 'aromas', weight: 15, compare: 'set_overlap', params: { hit: 0.6, near: 0.3 }, active: true },
  { criterion: 'acidity', weight: 5, compare: 'ordinal', scale: 'acidity', params: { near: 1 }, active: true },
  { criterion: 'alcohol', weight: 0, compare: 'ordinal', scale: 'alcohol', params: { near: 1 }, active: true }
];
const regions = { R_PIE: { country_id: 'IT' }, R_LAN: { parent_id: 'R_PIE', country_id: 'IT' }, R_TOS: { country_id: 'IT' }, R_MEN: { country_id: 'AR' } };
const aromas = { A_CER: { subcategory: 'vermelhas' }, A_FRA: { subcategory: 'vermelhas' }, A_ROS: { subcategory: 'flores' }, A_ALC: { subcategory: 'esp' }, A_CAS: { subcategory: 'negras' } };
const baseCtx = (answers, truthOver) => ({
  rules, scales, regions, aromas,
  settings: { near_credit: 0.5, aroma_subcategory_credit: 0.5, alcohol_thresholds: [11, 14] },
  answers,
  truth: Object.assign({ grape_ids: ['NEB'], country_id: 'IT', region_id: 'R_LAN', vintage: 2022, abv: 14,
    aroma_ids: ['A_CER', 'A_ROS', 'A_ALC'], aromas_trusted: true, profile: { acidity: 'media+' }, profile_trusted: true }, truthOver || {})
});
test('perfect answer = 100', () => {
  const r = Scoring.scoreSample(baseCtx({
    grape: { value_json: ['NEB'] }, region: { value: 'R_LAN' }, country: { value: 'IT' }, vintage: { value: '2022' },
    abv: { value: '14' }, aromas: { value_json: ['A_CER', 'A_ROS', 'A_ALC'] }, acidity: { value: 'media+' }, alcohol: { value: 'alto' }
  }));
  assert.strictEqual(r.score, 100);
});
test('three states + hierarchy', () => {
  const r = Scoring.scoreSample(baseCtx({
    grape: { value_json: ['SAN', 'NEB'] }, region: { value: 'R_PIE' }, country: { value: 'AR' },
    vintage: { value: '2020' }, abv: { value: '13' }, aromas: { value_json: ['A_FRA', 'A_ROS'] }, acidity: { value: 'alta' }
  }));
  const s = Object.fromEntries(r.results.map((x) => [x.criterion, x.state]));
  assert.strictEqual(s.grape, 'near');     // palpite secundário
  assert.strictEqual(s.region, 'hit');     // Piemonte é mãe de Langhe
  assert.strictEqual(s.country, 'miss');
  assert.strictEqual(s.vintage, 'near');   // 2 anos
  assert.strictEqual(s.abv, 'near');       // 1 ponto
  assert.strictEqual(s.acidity, 'near');   // alta × média+
  assert.strictEqual(s.aromas, 'near');    // (1 + 0.5)/3 = 0.5
  assert.strictEqual(s.alcohol, 'miss');   // sem resposta
});
test('region: same country = near', () => {
  const r = Scoring.scoreSample(baseCtx({ region: { value: 'R_TOS' } }));
  assert.strictEqual(r.results.find((x) => x.criterion === 'region').state, 'near');
});
test('untrusted profile → no_ref and excluded from max', () => {
  const r = Scoring.scoreSample(baseCtx({ acidity: { value: 'alta' } }, { profile_trusted: false, aromas_trusted: false }));
  const ac = r.results.find((x) => x.criterion === 'acidity');
  assert.strictEqual(ac.state, 'no_ref');
  assert.strictEqual(r.max_points, 65);    // 100 − aromas 15 − acidez 5 − alcohol 0
});
test('aroma spam is penalized', () => {
  const r = Scoring.scoreSample(baseCtx({ aromas: { value_json: ['A_CER', 'A_ROS', 'A_ALC', 'A_CAS', 'A_FRA', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7'] } }));
  assert.strictEqual(r.results.find((x) => x.criterion === 'aromas').state, 'miss'); // 3/12
});
test('alcohol level derived from label abv', () => {
  const r = Scoring.scoreSample(baseCtx({ alcohol: { value: 'alto' } }, { abv: 14.5 }));
  assert.strictEqual(r.results.find((x) => x.criterion === 'alcohol').state, 'hit');
});
test('aggregate rates', () => {
  const a = Scoring.aggregate([{ criterion: 'grape', state: 'hit' }, { criterion: 'grape', state: 'near' }, { criterion: 'grape', state: 'no_ref' }], 0.5);
  assert.strictEqual(a[0].total, 2);
  assert.strictEqual(a[0].rate, 75);
});

console.log('LabelParse');
const cat = {
  countries: [{ name: 'Itália' }, { name: 'Espanha' }, { name: 'Portugal' }, { name: 'França' }],
  regions: [
    { name: 'Piemonte', parent: '', country: 'Itália' }, { name: 'Barolo', parent: 'Piemonte', country: 'Itália' },
    { name: 'Rioja', parent: '', country: 'Espanha' }, { name: 'Rioja Alta', parent: 'Rioja', country: 'Espanha' },
    { name: 'Douro', parent: '', country: 'Portugal' }, { name: 'Loire', parent: '', country: 'França' }
  ],
  producers: [{ name: 'Bodega Exemplo', regions: ['Rioja'] }, { name: 'Cantina Fittizia', regions: ['Piemonte'] }],
  grapes: [{ name: 'Nebbiolo', synonyms: ['Spanna'] }, { name: 'Tempranillo', synonyms: ['Tinta Roriz', 'Tinto Fino'] },
    { name: 'Sauvignon Blanc', synonyms: [] }, { name: 'Graciano', synonyms: [] }]
};
test('Barolo: subregion → region/country, DOCG, abv, vintage', () => {
  const r = LabelParse.parse('CANTINA FITTIZIA\nBAROLO\nDenominazione di Origine Controllata e Garantita\n2019\n14,5% vol\n750 ml\nPRODOTTO IN ITALIA', cat, { year: 2026 });
  assert.strictEqual(r.fields.subregion.value, 'Barolo');
  assert.strictEqual(r.fields.region.value, 'Piemonte');
  assert.strictEqual(r.fields.country.value, 'Itália');
  assert.strictEqual(r.fields.country.how, 'rotulo');
  assert.strictEqual(r.fields.classification.value, 'DOCG');
  assert.strictEqual(r.fields.abv.value, 14.5);
  assert.strictEqual(r.fields.vintage.value, 2019);
  assert.strictEqual(r.fields.producer.value, 'Cantina Fittizia');
});
test('Rioja: grapes with %, Gran Reserva, founded year ignored', () => {
  const r = LabelParse.parse('Bodega Exemplo · desde 1890\nRIOJA\nDenominación de Origen Calificada\nGRAN RESERVA 2015\n85% Tempranillo 15% Graciano\nVino tinto\nAlc. 13,5% vol.', cat, { year: 2026 });
  assert.strictEqual(r.fields.vintage.value, 2015);
  assert.strictEqual(r.fields.region.value, 'Rioja');
  assert.strictEqual(r.fields.country.how, 'enciclopedia');
  assert.ok(/DOCa/.test(r.fields.classification.value) && /Gran Reserva/.test(r.fields.classification.value));
  assert.ok(!/\bReserva\b/.test(r.fields.classification.value.replace('Gran Reserva', '')));
  assert.strictEqual(JSON.stringify(r.grapes.map((g) => [g.name, g.percent])), JSON.stringify([['Tempranillo', 85], ['Graciano', 15]]));
  assert.strictEqual(r.fields.color.value, 'tinto');
  assert.strictEqual(r.fields.abv.value, 13.5);
});
test('grape synonyms and grape names do not set colour', () => {
  const r = LabelParse.parse('Douro\nTinta Roriz\nSauvignon Blanc', cat, { year: 2026 });
  assert.strictEqual(JSON.stringify(r.grapes.map((g) => g.name)), JSON.stringify(['Tempranillo', 'Sauvignon Blanc']));
  assert.ok(!r.fields.color);
  assert.ok(!r.fields.vintage);
});
test('several years without keyword → options, no value', () => {
  const r = LabelParse.parse('Loire\n2018\n2020', cat, { year: 2026 });
  assert.strictEqual(r.fields.vintage.value, '');
  assert.strictEqual(JSON.stringify(r.fields.vintage.options), JSON.stringify([2018, 2020]));
});
test('bottler line gives producer when not in encyclopedia; technical data', () => {
  const r = LabelParse.parse('Engarrafado por Quinta Nova do Teste - Pinhão\nAçúcar residual: 2,1 g/L\nAcidez total 5.6 g/l\nEstagiou 12 meses em barricas de carvalho francês\nServir entre 16 e 18 °C', cat, { year: 2026 });
  assert.strictEqual(r.fields.producer.value, 'Quinta Nova do Teste');
  assert.strictEqual(r.fields.residual_sugar.value, '2,1 g/L');
  assert.strictEqual(r.fields.acidity_gl.value, '5,6 g/L');
  assert.ok(/12 meses em barricas de carvalho/.test(r.fields.aging.value));
  assert.strictEqual(r.fields.serving_temp.value, '16–18 °C');
});
test('sparkling detected; no invented country', () => {
  const r = LabelParse.parse('Espumante Brut\nMétodo Tradicional', cat, { year: 2026 });
  assert.strictEqual(r.fields.type.value, 'espumante');
  assert.ok(!r.fields.country && !r.fields.region);
});

console.log('\n' + passed + ' testes passaram' + (process.exitCode ? ' (com falhas)' : ''));
