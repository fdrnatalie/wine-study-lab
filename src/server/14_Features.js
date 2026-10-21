/**
 * Funcionalidades liberadas por público.
 *
 * Cada funcionalidade em construção começa liberada só para a administradora ('admin').
 * Quando estiver pronta, a administradora a libera para todos ('todos') em Configurações
 * (setting "feature_<id>"). A regra vale no servidor: esconder o menu não basta.
 */
var Features = (function () {
  var DEFS = [
    { id: 'curso', label: 'Curso (trilha de lições)' },
    { id: 'historia', label: 'História do vinho' },
    { id: 'producao', label: 'Produção de vinho' },
    { id: 'harmonizacao', label: 'Harmonizações' },
    { id: 'cartoes', label: 'Cartões de estudo nas páginas de país e região' }
  ];
  var BY_TOPIC = { historia: 'historia', producao: 'producao', harmonizacao: 'harmonizacao', pais: 'cartoes', regiao: 'cartoes' };

  function known_(id) { return DEFS.some(function (d) { return d.id === id; }); }

  function audience(id) {
    return Settings.get('feature_' + id, 'admin') === 'todos' ? 'todos' : 'admin';
  }

  function allowed(id) {
    if (!known_(id)) return false;
    return Ctx.isAdmin() || audience(id) === 'todos';
  }

  function require(id) {
    if (!allowed(id)) throw new Error('Esta área ainda não está disponível.');
  }

  /** Cartões de um tema (pais, regiao, historia, producao, harmonizacao) podem ser vistos? */
  function allowedTopic(topic) { return allowed(BY_TOPIC[topic] || 'cartoes'); }

  /** {id: true|false} para o usuário atual. */
  function mine() {
    var o = {};
    DEFS.forEach(function (d) { o[d.id] = allowed(d.id); });
    return o;
  }

  /** Para a tela de Configurações (administradora). */
  function list() {
    Ctx.requireAdmin();
    return DEFS.map(function (d) { return { id: d.id, label: d.label, audience: audience(d.id) }; });
  }

  function set(id, value) {
    Ctx.requireAdmin();
    if (!known_(id)) throw new Error('Funcionalidade desconhecida.');
    Validate.oneOf(value, ['admin', 'todos'], 'público');
    Settings.set('feature_' + id, value);
    return list();
  }

  return { allowed: allowed, require: require, allowedTopic: allowedTopic, mine: mine, list: list, set: set };
})();
