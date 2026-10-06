/**
 * Catálogo: validação de entrada, resolução de nomes em entidades (país, região,
 * produtor, uva), aromas e perfis sensoriais. Usado pelos serviços de vinhos e uvas.
 */
var Validate = (function () {
  function str(v, max, label) {
    if (Util.isBlank(v)) return '';
    if (typeof v !== 'string' && typeof v !== 'number') throw new Error('Valor inválido em ' + (label || 'campo'));
    var s = String(v).trim();
    if (s.length > (max || 500)) throw new Error((label || 'Campo') + ' excede ' + (max || 500) + ' caracteres.');
    return s;
  }
  function required(v, max, label) {
    var s = str(v, max, label);
    if (!s) throw new Error((label || 'Campo') + ' é obrigatório.');
    return s;
  }
  function num(v, min, max, label) {
    if (Util.isBlank(v)) return '';
    var n = Util.parseNumber(v);
    if (n === null || n < min || n > max) throw new Error((label || 'Número') + ' deve estar entre ' + min + ' e ' + max + '.');
    return n;
  }
  function oneOf(v, list, label) {
    if (Util.isBlank(v)) return '';
    if (list.indexOf(v) < 0) throw new Error('Valor inválido para ' + (label || 'campo') + ': ' + v);
    return v;
  }
  function id(v, entity) {
    if (Util.isBlank(v)) return '';
    if (!/^[A-Z]{3}_[0-9A-Z]+$/.test(String(v))) throw new Error('Identificador inválido.');
    if (entity && !Repo.get(entity, v)) throw new Error('Registro não encontrado: ' + v);
    return String(v);
  }
  function ids(list, entity) {
    if (!Array.isArray(list)) return [];
    return list.map(function (x) { return id(x, entity); }).filter(Boolean);
  }
  function source(v) {
    if (Util.isBlank(v)) return 'usuario';
    return oneOf(v, CONFIG.SOURCES, 'origem');
  }
  return { str: str, required: required, num: num, oneOf: oneOf, id: id, ids: ids, source: source };
})();

var Catalog = (function () {

  /** Dados compactos que a interface usa em selects, filtros e busca local. */
  function lookups() {
    return {
      countries: Repo.all('countries').map(pick_('id', 'name')).sort(byName_),
      regions: Repo.all('regions').map(pick_('id', 'name', 'country_id', 'parent_id')).sort(byName_),
      producers: Repo.all('producers').map(pick_('id', 'name', 'region_id')).sort(byName_),
      grapes: Repo.all('grapes').map(pick_('id', 'name', 'color')).sort(byName_),
      aromas: Repo.all('aromas').sort(function (a, b) { return a.order - b.order; }).map(pick_('id', 'name', 'category', 'subcategory')),
      scales: Settings.scales(),
      rules: Settings.rules(),
      ai_enabled: AiProvider.hasKey() && Ctx.isAdmin(),
      me: Auth.publicUser(Ctx.current()),
      is_admin: Ctx.isAdmin(),
      encyclopedia: { version: SEED_MANIFEST.grapes.version, grapes: SEED_MANIFEST.grapes.count,
        region_packs: SeedRegions.summary() },
      enums: {
        sources: CONFIG.SOURCES, bottleStatuses: CONFIG.BOTTLE_STATUSES, noteKinds: CONFIG.NOTE_KINDS,
        aromaCategories: CONFIG.AROMA_CATEGORIES, wineColors: CONFIG.WINE_COLORS, wineTypes: CONFIG.WINE_TYPES
      }
    };
  }

  function pick_() {
    var keys = Array.prototype.slice.call(arguments);
    return function (o) { var r = {}; keys.forEach(function (k) { r[k] = o[k]; }); return r; };
  }
  function byName_(a, b) { return String(a.name).localeCompare(String(b.name), 'pt'); }

  /** Encontra por nome (sem acento/maiúsculas) ou cria com origem "usuario". */
  function resolveByName(entity, name, extra) {
    name = Validate.str(name, 120, entity);
    if (!name) return null;
    var key = Util.normKey(name);
    var scopeKey = extra && extra.country_id !== undefined ? 'country_id' : null;
    var found = Repo.all(entity).filter(function (r) {
      return r.name_key === key && (!scopeKey || r[scopeKey] === extra[scopeKey]);
    })[0];
    if (found) return found;
    // Enciclopédia (países, regiões, uvas): só a administradora cria. Os demais escolhem da lista.
    if (Policy.scope(entity) === 'admin' && !Ctx.isAdmin()) {
      var LABEL = { countries: 'País', regions: 'Região', grapes: 'Uva' };
      throw new Error((LABEL[entity] || entity) + ' "' + name + '" não está na enciclopédia. Escolha uma opção da lista.');
    }
    return Repo.insert(entity, [Object.assign({ name: name, name_key: key, source: 'usuario' }, extra || {})])[0];
  }

  // ---------- Aromas ----------
  function aromasOf(entityType, entityId) {
    var aromas = Util.indexBy(Repo.all('aromas'), 'id');
    return Repo.where('entity_aromas', function (x) { return x.entity_type === entityType && x.entity_id === entityId; })
      .map(function (x) {
        var a = aromas[x.aroma_id];
        return a ? { id: a.id, name: a.name, category: a.category, subcategory: a.subcategory, kind: x.kind || 'nariz', source: x.source } : null;
      }).filter(Boolean);
  }

  /** Substitui o conjunto de aromas de uma entidade. */
  function setAromas(entityType, entityId, aromaIds, source, sourceRef) {
    var ids = Validate.ids(aromaIds, 'aromas');
    var existing = Repo.where('entity_aromas', function (x) { return x.entity_type === entityType && x.entity_id === entityId; });
    var keep = {};
    existing.forEach(function (x) { keep[x.aroma_id] = x; });
    var toRemove = existing.filter(function (x) { return ids.indexOf(x.aroma_id) < 0; }).map(function (x) { return x.id; });
    var toAdd = ids.filter(function (id) { return !keep[id]; }).map(function (id) {
      return { entity_type: entityType, entity_id: entityId, aroma_id: id, kind: 'nariz', source: source, source_ref: sourceRef || '' };
    });
    var toRetag = existing.filter(function (x) { return ids.indexOf(x.aroma_id) >= 0 && x.source !== source; })
      .map(function (x) { return { id: x.id, source: source, source_ref: sourceRef || '' }; });
    Repo.remove('entity_aromas', toRemove);
    Repo.insert('entity_aromas', toAdd);
    Repo.update('entity_aromas', toRetag);
  }

  // ---------- Perfis sensoriais ----------
  var PROFILE_SCALES = ['acidity', 'tannin', 'body', 'alcohol', 'sweetness', 'intensity', 'finish', 'color_intensity', 'color_hue'];

  function profileOf(entityType, entityId) {
    return Repo.where('profiles', function (p) { return p.entity_type === entityType && p.entity_id === entityId; })[0] || null;
  }

  /**
   * Salva o perfil (gabarito do vinho ou perfil típico da uva) e seus aromas.
   * Valores de escala são validados contra db_scales. Uvas aceitam faixa "media..alta".
   */
  function saveProfile(entityType, entityId, data) {
    Validate.oneOf(entityType, ['wine', 'grape'], 'tipo de perfil');
    Validate.id(entityId, entityType === 'wine' ? 'wines' : 'grapes');
    var scales = Settings.scales();
    var src = Validate.source(data.source);
    var rec = { entity_type: entityType, entity_id: entityId, source: src, source_ref: Validate.str(data.source_ref, 500, 'referência') };
    PROFILE_SCALES.forEach(function (f) {
      var v = Validate.str(data[f], 40, f);
      if (!v) { rec[f] = ''; return; }
      var parts = v.split('..');
      if (parts.length > 2 || (parts.length === 2 && entityType !== 'grape')) throw new Error('Faixa inválida em ' + f);
      parts.forEach(function (p) {
        if (ScaleUtil.position(scales[f], p) === null) throw new Error('Valor "' + p + '" não existe na escala ' + f);
      });
      rec[f] = v;
    });
    ['oak', 'texture'].forEach(function (f) { rec[f] = Validate.str(data[f], 200, f); });
    ['visual_text', 'nose_text', 'palate_text'].forEach(function (f) { rec[f] = Validate.str(data[f], 3000, f); });
    var existing = profileOf(entityType, entityId);
    if (existing) Repo.update('profiles', [Object.assign({ id: existing.id }, rec)]);
    else Repo.insert('profiles', [rec]);
    if (Array.isArray(data.aroma_ids)) setAromas(entityType, entityId, data.aroma_ids, src, rec.source_ref);
    return profileOf(entityType, entityId);
  }

  function isTrusted(source) { return CONFIG.TRUSTED_SOURCES.indexOf(source) >= 0; }

  function notesFor(entityType, entityId) {
    var links = Repo.where('note_links', function (l) { return l.entity_type === entityType && l.entity_id === entityId; });
    var notes = Util.indexBy(Repo.all('notes'), 'id');
    return links.map(function (l) { return notes[l.note_id]; }).filter(Boolean)
      .map(function (n) { return { id: n.id, title: n.title, kind: n.kind, date: n.date }; });
  }

  return { lookups: lookups, resolveByName: resolveByName, aromasOf: aromasOf, setAromas: setAromas,
    profileOf: profileOf, saveProfile: saveProfile, isTrusted: isTrusted, notesFor: notesFor, PROFILE_SCALES: PROFILE_SCALES };
})();
