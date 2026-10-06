/**
 * Foto do rótulo → sugestões para o cadastro de vinho.
 *
 * 1) Leitura grátis: a foto vira um Google Doc temporário com OCR do Google Drive
 *    (escopo drive.file: o app só enxerga os arquivos que ele mesmo cria), o texto é
 *    exportado e o arquivo é apagado na hora. A foto não fica guardada.
 * 2) O texto é cruzado com a enciclopédia (LabelParse): produtor, região, país, uvas,
 *    safra, teor alcoólico, classificação… cada sugestão com o trecho que a justifica.
 * A leitura com IA (opcional, paga) fica em Enrichment.label().
 */
var Label = (function () {
  var MIMES = ['image/jpeg', 'image/png', 'image/webp'];
  var MAX_B64 = 4500000;          // ~3,3 MB de imagem; o navegador já reduz a foto antes de enviar.

  function validateImage(image, mime) {
    if (MIMES.indexOf(mime) < 0) throw new Error('Formato de imagem não aceito (use JPG, PNG ou WebP).');
    if (typeof image !== 'string' || !image || image.length > MAX_B64 || !/^[A-Za-z0-9+/=]+$/.test(image)) {
      throw new Error('Imagem inválida ou grande demais.');
    }
    return image;
  }

  /** OCR pelo Google Drive. Devolve o texto lido. */
  function ocr_(image, mime) {
    if (typeof Drive === 'undefined') throw new Error('O serviço do Google Drive não está ativo neste projeto.');
    var blob = Utilities.newBlob(Utilities.base64Decode(image), mime, 'rotulo');
    var file = Drive.Files.create({ name: 'wsl-rotulo-ocr-' + Date.now(), mimeType: MimeType.GOOGLE_DOCS }, blob, { fields: 'id' });
    var auth = { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() };
    try {
      var res = UrlFetchApp.fetch('https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(file.id) + '/export?mimeType=text%2Fplain',
        { headers: auth, muteHttpExceptions: true });
      if (res.getResponseCode() !== 200) throw new Error('Não consegui ler o texto da foto (Drive ' + res.getResponseCode() + ').');
      return res.getContentText('UTF-8').replace(/^﻿/, '');
    } finally {
      try {
        UrlFetchApp.fetch('https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(file.id), { method: 'delete', headers: auth, muteHttpExceptions: true });
      } catch (e) { console.error('OCR: arquivo temporário não apagado', file.id, e); }
    }
  }

  /** Enciclopédia em forma compacta para o cruzamento. */
  function catalog_() {
    var countries = Repo.all('countries');
    var cById = Util.indexBy(countries, 'id');
    var regions = Repo.all('regions');
    var rById = Util.indexBy(regions, 'id');
    var linkByProducer = Util.groupBy(Repo.all('region_producers'), 'producer_id');
    return {
      countries: countries.map(function (c) { return { name: c.name }; }),
      regions: regions.map(function (r) {
        var parent = r.parent_id && rById[r.parent_id];
        return { name: r.name, parent: parent ? parent.name : '', country: cById[r.country_id] ? cById[r.country_id].name : '' };
      }),
      producers: Repo.all('producers').map(function (p) {
        var regs = (linkByProducer[p.id] || []).map(function (l) { return rById[l.region_id]; }).filter(Boolean)
          .map(function (r) { return r.parent_id && rById[r.parent_id] ? rById[r.parent_id].name : r.name; });
        if (!regs.length && p.region_id && rById[p.region_id]) regs = [rById[p.region_id].name];
        return { name: p.name, regions: regs.filter(function (x, i) { return regs.indexOf(x) === i; }) };
      }),
      grapes: Repo.all('grapes').map(function (g) { return { name: g.name, synonyms: (g.synonyms || []).map(function (x) { return String(x).replace(/\(.*\)/, '').trim(); }) }; })
    };
  }

  /** Lê a foto (OCR grátis) e devolve {text, lines, fields, grapes}. */
  function read(image, mime) {
    validateImage(image, mime);
    var text = ocr_(image, mime);
    if (!String(text).trim()) return { text: '', lines: [], fields: {}, grapes: [] };
    return fromText(text);
  }

  function fromText(text) {
    text = Validate.str(text, 20000, 'Texto do rótulo');
    var r = LabelParse.parse(text, catalog_());
    r.text = text;
    return r;
  }

  return { read: read, fromText: fromText, validateImage: validateImage, catalog: catalog_ };
})();
