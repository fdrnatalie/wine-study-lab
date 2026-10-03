/**
 * Autenticação. O Web App é publicado como "Executar como: eu / Acesso: somente eu",
 * o que já impede outras contas de abrir o app. Esta checagem é uma segunda barreira:
 * toda chamada da API confere o e-mail ativo com o dono gravado na instalação.
 */
var Auth = (function () {
  function ownerEmail() {
    return PropertiesService.getScriptProperties().getProperty('OWNER_EMAIL');
  }

  function assertOwner() {
    var owner = ownerEmail();
    if (!owner) throw new Error('O sistema ainda não foi instalado. Execute a função setup() no editor do Apps Script.');
    var me = Session.getActiveUser().getEmail();
    if (!me || me.toLowerCase() !== owner.toLowerCase()) throw new Error('Acesso negado.');
  }

  function registerOwner() {
    var me = Session.getEffectiveUser().getEmail();
    if (!me) throw new Error('Não foi possível identificar o usuário.');
    PropertiesService.getScriptProperties().setProperty('OWNER_EMAIL', me);
    return me;
  }

  return { assertOwner: assertOwner, registerOwner: registerOwner, ownerEmail: ownerEmail };
})();
