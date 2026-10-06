/**
 * Código de barras (EAN/UPC) → ficha do vinho, pela base pública Open Food Facts (grátis, colaborativa).
 *
 * O texto do produto (nome, marca, origem, categorias, selos, uvas, teor alcoólico) passa pelo mesmo
 * cruzamento com a enciclopédia da foto do rótulo (LabelParse). Cada sugestão aponta para a página do
 * produto como fonte (origem "pesquisado"); a usuária revisa antes de salvar.
 */
var Barcode = (function () {
  var API = 'https://world.openfoodfacts.org/api/v2/product/';
  var FIELDS = ['product_name', 'product_name_pt', 'generic_name', 'generic_name_pt', 'brands', 'brand_owner', 'countries',
    'origins', 'manufacturing_places', 'categories', 'labels', 'quantity', 'alcohol_value', 'nutriments', 'ingredients_text',
    'ingredients_text_pt', 'image_front_small_url'].join(',');

  function clean(code) {
    code = String(code || '').replace(/\D/g, '');
    if (!/^\d{8,14}$/.test(code)) throw new Error('Código de barras deve ter de 8 a 14 números.');
    return code;
  }

  function text_(v) { return Array.isArray(v) ? v.join(', ') : (v === null || v === undefined ? '' : String(v)); }

  /** Consulta a base. Devolve o produto ou null (não encontrado). Lança erro só em falha de rede. */
  function fetch_(code) {
    var res = UrlFetchApp.fetch(API + code + '.json?fields=' + FIELDS, {
      muteHttpExceptions: true, headers: { 'User-Agent': 'WineStudyLab/1.0 (estudo pessoal de vinhos)' }
    });
    var status = res.getResponseCode();
    if (status === 404) return null;
    if (status !== 200) throw new Error('A base de códigos de barras não respondeu (' + status + '). Tente mais tarde.');
    var d = JSON.parse(res.getContentText());
    return Number(d.status) === 1 && d.product ? d.product : null;
  }

  /** Sugestões para o formulário de vinho. */
  function lookup(code) {
    code = clean(code);
    var existing = Repo.all('wines').filter(function (w) { return String(w.barcode || '') === code; })[0];
    var p = fetch_(code);
    var url = 'https://world.openfoodfacts.org/product/' + code;
    if (!p) return { found: false, code: code, existing: existing ? { id: existing.id, name: existing.name } : null };

    var name = text_(p.product_name_pt || p.product_name || p.generic_name_pt || p.generic_name).trim();
    var brand = text_(p.brands || p.brand_owner).split(',')[0].trim();
    var abv = p.alcohol_value !== undefined && p.alcohol_value !== '' ? p.alcohol_value : (p.nutriments && (p.nutriments.alcohol_value || p.nutriments.alcohol_100g));
    var lines = [name, brand, text_(p.origins), text_(p.manufacturing_places), text_(p.countries), text_(p.categories), text_(p.labels),
      text_(p.ingredients_text_pt || p.ingredients_text), abv ? 'alc. ' + abv + '% vol' : ''].filter(Boolean);
    var r = LabelParse.parse(lines.join('\n'), Label.catalog());
    var fields = r.fields;
    Object.keys(fields).forEach(function (k) { fields[k].how = 'enciclopedia'; fields[k].evidence = 'Open Food Facts: ' + String(fields[k].evidence || '').replace('escrito no rótulo', 'informado no produto'); fields[k].ref = url; });
    if (name) fields.name = { value: Util.clampStr(name, 200), evidence: 'nome no Open Food Facts', how: 'enciclopedia', ref: url, options: [] };
    if (brand && !fields.producer) fields.producer = { value: Util.clampStr(brand, 120), evidence: 'marca no Open Food Facts', how: 'enciclopedia', ref: url, options: [] };
    return {
      found: true, code: code, url: url, image: /^https:\/\//.test(p.image_front_small_url || '') ? p.image_front_small_url : '',
      fields: fields, grapes: r.grapes, lines: [], text: lines.join('\n'),
      existing: existing ? { id: existing.id, name: existing.name } : null
    };
  }

  return { lookup: lookup, clean: clean };
})();
