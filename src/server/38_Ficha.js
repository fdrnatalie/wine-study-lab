/**
 * Ficha analítica descritiva (modelo Le Cordon Bleu — Wine & Spirits).
 *
 * Camada descritiva extra do perfil do vinho, ao lado das escalas WSET que corrigem as degustações:
 * não entra no placar das degustações às cegas. Fica em db_profiles.ficha (json) e a nota em
 * db_profiles.ficha_score (0–100: visual 18 + olfativa 32 + gustativa 50, como na ficha impressa).
 *
 * Vocabulário fixo do sistema (não é conhecimento sobre vinhos): opção = [chave, rótulo, pontos?, grupo?].
 * Campos com pontos somam na nota; os demais só descrevem.
 */
var Ficha = (function () {

  var SECTIONS = [
    { key: 'servico', title: 'Serviço', fields: [
      { key: 'temp_room', label: 'Temperatura ambiente (°C)', text: 10 },
      { key: 'temp_service', label: 'Temperatura de serviço (°C)', text: 10 }
    ] },
    { key: 'visual', title: 'Análise visual', max: 18, fields: [
      { key: 'hue', label: 'Tonalidade', options: [
        ['branco_papel', 'Branco papel', null, 'branco'], ['verdeal', 'Verdeal', null, 'branco'],
        ['amarelo_palha', 'Amarelo palha', null, 'branco'], ['amarelo_ouro', 'Amarelo ouro', null, 'branco'],
        ['amarelo_ambar', 'Amarelo âmbar', null, 'branco'],
        ['vermelho_purpura', 'Vermelho púrpura', null, 'tinto'], ['vermelho_rubi', 'Vermelho rubi', null, 'tinto'],
        ['vermelho_granada', 'Vermelho granada', null, 'tinto'], ['vermelho_alaranjado', 'Vermelho alaranjado', null, 'tinto'],
        ['vermelho_acastanhado', 'Vermelho acastanhado', null, 'tinto'],
        ['rosado', 'Rosado', null, 'rose'], ['cereja', 'Cereja', null, 'rose'], ['clarete', 'Clarete', null, 'rose']] },
      { key: 'reflexes', label: 'Reflexos', multi: true, options: [
        ['esverdeado', 'Esverdeado'], ['dourado', 'Dourado'], ['ambar', 'Âmbar'], ['violaceo', 'Violáceo'],
        ['granada', 'Granada'], ['amarelado', 'Amarelado']] },
      { key: 'depth', label: 'Intensidade', options: [['claro', 'Claro'], ['medio', 'Médio'], ['escuro', 'Escuro']] },
      { key: 'transparency', label: 'Transparência', options: [
        ['muito_transparente', 'Muito transparente'], ['transparente', 'Transparente'], ['regular', 'Regular'],
        ['leve_opacidade', 'Leve opacidade'], ['opaco', 'Opaco']] },
      { key: 'clarity', label: 'Limpidez', options: [
        ['muito_limpido', 'Muito límpido', 9], ['limpido', 'Límpido', 7], ['leve_turbidez', 'Leve turbidez', 5],
        ['velado', 'Velado', 3], ['turvo', 'Turvo', 1]] },
      { key: 'color', label: 'Cor', options: [
        ['otima', 'Ótima', 9], ['boa', 'Boa', 7], ['aceitavel', 'Aceitável', 5], ['pouco_tipica', 'Pouco típica', 3],
        ['atipica', 'Atípica', 1]] }
    ] },
    { key: 'olfativa', title: 'Análise olfativa', max: 32, fields: [
      { key: 'nose_general', label: 'Caracteres gerais', multi: true, options: [
        ['franco', 'Franco'], ['amplo', 'Amplo'], ['fragrante', 'Fragrante'], ['defeituoso', 'Defeituoso'],
        ['nitido', 'Nítido'], ['etereo', 'Etéreo']] },
      { key: 'nose_specific', label: 'Caracteres específicos', multi: true, options: [
        ['floral', 'Floral'], ['frutado', 'Frutado'], ['animal', 'Animal'], ['vegetal', 'Vegetal'],
        ['vinoso', 'Vinoso'], ['especiaria', 'Especiaria']] },
      { key: 'nose_quality', label: 'Qualidade', options: [
        ['finissimo', 'Finíssimo', 16], ['bastante_fino', 'Bastante fino', 12], ['fino', 'Fino', 8],
        ['comum', 'Comum', 4], ['grosseiro', 'Grosseiro', 0]] },
      { key: 'nose_intensity', label: 'Intensidade', options: [
        ['muito_intenso', 'Muito intenso', 12], ['intenso', 'Intenso', 9], ['ligeiro', 'Ligeiro', 6],
        ['sutil', 'Sutil', 3], ['tenue', 'Tênue', 0]] },
      { key: 'nose_persistence', label: 'Persistência', options: [
        ['muito_persistente', 'Muito persistente', 4], ['persistente', 'Persistente', 3],
        ['meio_persistente', 'Meio persistente', 2], ['pouco_persistente', 'Pouco persistente', 1], ['fugidio', 'Fugidio', 0]] }
    ] },
    { key: 'gustativa', title: 'Análise gustativa', max: 50, fields: [
      { key: 'sugar', label: 'Açúcares', options: [
        ['seco', 'Seco'], ['meio_seco', 'Meio seco'], ['meio_doce', 'Meio doce'], ['doce', 'Doce'], ['licoroso', 'Licoroso']] },
      { key: 'acidity', label: 'Acidez', options: [
        ['mole', 'Mole'], ['chato', 'Chato'], ['sapido', 'Sápido'], ['fresco', 'Fresco, vivo'], ['acidulo', 'Acídulo']] },
      { key: 'alcohol', label: 'Álcool', options: [
        ['fraco', 'Fraco'], ['pouco_alcoolico', 'Pouco alcoólico'], ['equilibrado', 'Equilibrado'], ['quente', 'Quente'],
        ['muito_quente', 'Muito quente']] },
      { key: 'softness', label: 'Maciez', options: [
        ['carente', 'Carente'], ['meio_carente', 'Meio carente'], ['macio', 'Macio'], ['redondo', 'Redondo'],
        ['muito_redondo', 'Muito redondo']] },
      { key: 'body', label: 'Corpo', options: [
        ['magro', 'Magro'], ['pouco_encorpado', 'Pouco encorpado'], ['bom_corpo', 'Bom corpo'], ['encorpado', 'Encorpado'],
        ['muito_encorpado', 'Muito encorpado']] },
      { key: 'tannin_intensity', label: 'Tanicidade — intensidade', options: [
        ['carente', 'Carente'], ['pouco_taninoso', 'Pouco taninoso'], ['equilibrado', 'Equilibrado'], ['taninoso', 'Taninoso'],
        ['muito_taninoso', 'Muito taninoso']] },
      { key: 'tannin_quality', label: 'Tanicidade — qualidade', options: [
        ['veludo', 'Veludo'], ['seda', 'Seda'], ['algodao', 'Algodão'], ['linho', 'Linho'], ['juta', 'Juta']] },
      { key: 'bitterness', label: 'Amargor', options: [
        ['carente', 'Carente'], ['correto', 'Correto'], ['amarguinho', 'Amarguinho'], ['amargo', 'Amargo'],
        ['muito_amargo', 'Muito amargo']] },
      { key: 'balance', label: 'Equilíbrio', options: [
        ['harmonico', 'Harmônico', 12], ['bastante_equilibrado', 'Bastante equilibrado', 9],
        ['suficientemente_equilibrado', 'Suficientemente equilibrado', 6],
        ['ligeiramente_desequilibrado', 'Ligeiramente desequilibrado', 3], ['desarmonico', 'Desarmônico', 0]] },
      { key: 'palate_quality', label: 'Qualidade', options: [
        ['finissimo', 'Finíssimo', 12], ['bastante_fino', 'Bastante fino', 9], ['fino', 'Fino', 6], ['comum', 'Comum', 3],
        ['grosseiro', 'Grosseiro', 0]] },
      { key: 'palate_intensity', label: 'Intensidade', options: [
        ['muito_intenso', 'Muito intenso', 10], ['intenso', 'Intenso', 7], ['ligeiro', 'Ligeiro', 4], ['sutil', 'Sutil', 1],
        ['tenue', 'Tênue', 0]] },
      { key: 'palate_persistence', label: 'Persistência', options: [
        ['muito_persistente', 'Muito persistente', 10], ['persistente', 'Persistente', 7],
        ['meio_persistente', 'Meio persistente', 4], ['pouco_persistente', 'Pouco persistente', 1], ['fugidio', 'Fugidio', 0]] },
      { key: 'mouth', label: 'Boca', options: [
        ['boca_otima', 'Boca ótima', 6], ['boca_plena', 'Boca plena', 4], ['termina_bem', 'Termina bem', 2],
        ['termina_mal', 'Termina mal', 0]] }
    ] },
    { key: 'conclusao', title: 'Evolução e final de boca', fields: [
      { key: 'evolution', label: 'Evolução', options: [
        ['jovem', 'Jovem'], ['pronto', 'Pronto'], ['maduro', 'Maduro'], ['envelhecido', 'Envelhecido'], ['velho', 'Velho']] },
      { key: 'final', label: 'Final de boca', multi: true, options: [
        ['fresca', 'Fresca'], ['enxuta', 'Enxuta'], ['arida', 'Árida'], ['com_fundo', 'Com fundo']] },
      { key: 'final_note', label: 'Com fundo de…', text: 120 }
    ] }
  ];

  var FIELDS = {};
  SECTIONS.forEach(function (s) { s.fields.forEach(function (f) { FIELDS[f.key] = Object.assign({ section: s.key }, f); }); });

  function option_(f, key) {
    return (f.options || []).filter(function (o) { return o[0] === key; })[0] || null;
  }
  function scored_(f) { return (f.options || []).some(function (o) { return typeof o[2] === 'number'; }); }

  /** Vocabulário para a interface (vai junto dos lookups). */
  function spec() {
    return SECTIONS.map(function (s) {
      return { key: s.key, title: s.title, max: s.max || 0, fields: s.fields.map(function (f) {
        var out = { key: f.key, label: f.label, multi: !!f.multi, scored: scored_(f) };
        if (f.text) out.text = f.text;
        else out.options = f.options.map(function (o) { return { v: o[0], t: o[1], points: o[2] === undefined ? null : o[2], group: o[3] || '' }; });
        return out;
      }) };
    });
  }

  /** Valida e normaliza a ficha recebida da interface. Campos vazios são descartados. */
  function clean(input) {
    if (Util.isBlank(input)) return {};
    if (typeof input !== 'object' || Array.isArray(input)) throw new Error('Ficha analítica inválida.');
    var out = {};
    Object.keys(input).forEach(function (k) {
      var f = FIELDS[k];
      if (!f) throw new Error('Campo desconhecido na ficha analítica: ' + k);
      var v = input[k];
      if (f.text) {
        v = Validate.str(v, f.text, f.label);
        if (v) out[k] = v;
        return;
      }
      var list = f.multi ? (Array.isArray(v) ? v : (Util.isBlank(v) ? [] : [v])) : [v];
      list = list.filter(function (x) { return !Util.isBlank(x); }).map(String);
      if (!f.multi && Array.isArray(v)) throw new Error('Escolha só uma opção em ' + f.label + '.');
      list.forEach(function (x) { if (!option_(f, x)) throw new Error('Valor inválido para ' + f.label + ': ' + x); });
      if (!list.length) return;
      if (f.multi) {
        // Mantém a ordem da ficha impressa e remove repetidos.
        out[k] = f.options.map(function (o) { return o[0]; }).filter(function (o) { return list.indexOf(o) >= 0; });
      } else out[k] = list[0];
    });
    return out;
  }

  /**
   * Nota da ficha: subtotal de cada parte (visual 18, olfativa 32, gustativa 50) e total sobre 100.
   * complete = todos os itens pontuados preenchidos; parcial mostra quanto já foi avaliado.
   */
  function score(ficha) {
    ficha = ficha || {};
    var parts = [], total = 0, filled = 0, count = 0;
    SECTIONS.forEach(function (s) {
      if (!s.max) return;
      var sum = 0, n = 0, items = 0;
      s.fields.forEach(function (f) {
        if (!scored_(f)) return;
        items++;
        var o = option_(f, ficha[f.key]);
        if (o) { sum += o[2]; n++; }
      });
      parts.push({ key: s.key, title: s.title, points: sum, max: s.max, filled: n, items: items });
      total += sum; filled += n; count += items;
    });
    return { parts: parts, total: total, max: 100, filled: filled, items: count, complete: filled === count };
  }

  function isEmpty(ficha) { return !ficha || !Object.keys(ficha).length; }

  return { SECTIONS: SECTIONS, FIELDS: FIELDS, spec: spec, clean: clean, score: score, isEmpty: isEmpty };
})();
