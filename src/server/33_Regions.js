/**
 * Regiões: país → região → sub-região (db_regions com parent_id), castas (db_region_grapes),
 * produtores (db_producers.region_id) e os vinhos do seu estudo.
 * Mapas: contornos em GEO_REGIONS (18_Geo*.js) e pontos em GEO_PLACES (19_GeoPlaces.js).
 */
var Regions = (function () {

  function countries() {
    var regs = Repo.all('regions');
    var wines = Repo.all('wines');
    return Repo.all('countries').map(function (c) {
      var top = regs.filter(function (r) { return r.country_id === c.id && !r.parent_id; });
      return {
        id: c.id, name: c.name, description: c.description,
        regions: top.length,
        subregions: regs.filter(function (r) { return r.country_id === c.id && r.parent_id; }).length,
        wines: wines.filter(function (w) { return w.country_id === c.id; }).length
      };
    }).sort(function (a, b) { return (b.regions - a.regions) || String(a.name).localeCompare(String(b.name), 'pt'); });
  }

  function country(id) {
    var c = Repo.get('countries', Validate.id(id, 'countries'));
    var regs = Repo.all('regions');
    var wines = Repo.all('wines');
    var top = regs.filter(function (r) { return r.country_id === c.id && !r.parent_id; })
      .sort(function (a, b) { return String(a.name).localeCompare(String(b.name), 'pt'); });
    // Contornos: o navegador busca no arquivo estático do site (geo.js); aqui só a chave de cada região.
    var geoKeys = {};
    SEED_MANIFEST.geo_keys.forEach(function (k) { geoKeys[k] = true; });
    var geo = {};
    top.forEach(function (r) { if (r.geo_key && geoKeys[r.geo_key]) geo[r.id] = r.geo_key; });
    return {
      id: c.id, name: c.name, description: c.description, cards: Study.forCountry(c.id), source: c.source, source_ref: c.source_ref, field_refs: c.field_refs || {}, field_sources: c.field_sources || {},
      regions: top.map(function (r) {
        var subs = regs.filter(function (s) { return s.parent_id === r.id; });
        var ids = [r.id].concat(subs.map(function (s) { return s.id; }));
        // Região sem contorno (ilhas, DOCs pequenas): ponto médio das sub-regiões.
        var pts = geo[r.id] ? [] : subs.filter(function (s) { return s.lat !== '' && s.lat != null && s.lng !== '' && s.lng != null; });
        var point = pts.length ? [pts.reduce(function (t, s) { return t + Number(s.lat); }, 0) / pts.length,
          pts.reduce(function (t, s) { return t + Number(s.lng); }, 0) / pts.length] : null;
        return { id: r.id, name: r.name, subregions: subs.length, notable_wines: r.notable_wines, point: point,
          wines: wines.filter(function (w) { return ids.indexOf(w.region_id) >= 0 || ids.indexOf(w.subregion_id) >= 0; }).length };
      }),
      geo: geo
    };
  }

  function get(id) {
    var r = Repo.get('regions', Validate.id(id, 'regions'));
    if (r.parent_id) r = Repo.get('regions', r.parent_id);            // sub-região → abre a região-mãe
    var regs = Repo.all('regions');
    var grapes = Util.indexBy(Repo.all('grapes'), 'id');
    var rg = Util.groupBy(Repo.all('region_grapes'), 'region_id');
    var producersById = Util.indexBy(Repo.all('producers'), 'id');
    var links = Util.groupBy(Repo.all('region_producers'), 'region_id');
    var linked = {};
    Repo.all('region_producers').forEach(function (l) { linked[l.producer_id] = true; });
    var producers = Util.groupBy(Repo.all('producers').filter(function (p) { return !linked[p.id]; }), 'region_id');
    var c = Repo.get('countries', r.country_id) || {};
    var subs = regs.filter(function (s) { return s.parent_id === r.id; })
      .sort(function (a, b) { return classRank_(a.classification) - classRank_(b.classification) || String(a.name).localeCompare(String(b.name), 'pt'); });
    var ids = [r.id].concat(subs.map(function (s) { return s.id; }));
    var cards = Study.forRegions(ids);
    function grapeList(regionId) {
      return (rg[regionId] || []).map(function (x) {
        var g = grapes[x.grape_id];
        return g ? { id: g.id, name: g.name, color: g.color, role: x.role } : null;
      }).filter(Boolean);
    }
    function prodList(regionId) {
      var viaLinks = (links[regionId] || []).map(function (l) {
        var p = producersById[l.producer_id];
        return p ? { id: p.id, name: p.name, notable_labels: l.labels, source: l.source, source_ref: l.source_ref } : null;
      }).filter(Boolean);
      var direct = (producers[regionId] || []).map(function (p) {
        return { id: p.id, name: p.name, notable_labels: p.notable_labels, source: p.source, source_ref: p.source_ref };
      });
      return viaLinks.concat(direct);
    }
    var wines = Wines.list().filter(function (w) {
      var full = Repo.get('wines', w.id);
      return ids.indexOf(full.region_id) >= 0 || ids.indexOf(full.subregion_id) >= 0;
    });
    return {
      id: r.id, name: r.name, country_id: c.id, country: c.name,
      description: r.description, climate: r.climate, soils: r.soils, altitude: r.altitude, history: r.history,
      notable_wines: r.notable_wines, source: r.source, source_ref: r.source_ref,
      field_sources: r.field_sources || {}, field_refs: r.field_refs || {},
      grapes: grapeList(r.id),
      producers: prodList(r.id),
      geo_key: r.geo_key || '',
      cards: cards[r.id] || [],
      subregions: subs.map(function (s) {
        return { id: s.id, name: s.name, cards: cards[s.id] || [], classification: s.classification, description: s.description,
          notable_wines: s.notable_wines, lat: s.lat, lng: s.lng, source: s.source, source_ref: s.source_ref,
          grapes: grapeList(s.id), producers: prodList(s.id),
          wines: wines.filter(function (w) { return Repo.get('wines', w.id).subregion_id === s.id; }).map(function (w) { return w.id; }) };
      }),
      wines: wines
    };
  }

  function classRank_(c) {
    c = String(c || '');
    if (/DOCG/.test(c)) return 0;
    if (/DOC/.test(c)) return 1;
    return 2;
  }

  /** Regiões onde uma uva é cultivada (para a ficha da uva). */
  function forGrape(grapeId) {
    var regs = Util.indexBy(Repo.all('regions'), 'id');
    var seen = {};
    return Repo.where('region_grapes', { grape_id: grapeId }).map(function (x) {
      var r = regs[x.region_id];
      if (!r) return null;
      var top = r.parent_id ? regs[r.parent_id] : r;
      var key = r.id;
      if (seen[key]) return null;
      seen[key] = true;
      return { id: r.id, name: r.name, region: top ? top.name : '', is_sub: !!r.parent_id, classification: r.classification, role: x.role };
    }).filter(Boolean).sort(function (a, b) { return String(a.region + a.name).localeCompare(String(b.region + b.name), 'pt'); });
  }

  return { countries: countries, country: country, get: get, forGrape: forGrape };
})();

/**
 * Importa os packs de REGION_PACKS (17_SeedRegions*.js), um por país. Idempotente; só grava em campos vazios ou
 * cuja origem seja planilha / IA não verificada / pesquisado. Nunca apaga.
 */
var SeedRegions = (function () {
  var REPLACEABLE = { planilha: 1, ia_nao_verificada: 1, pesquisado: 1 };
  var FIELDS = ['description', 'climate', 'soils', 'altitude', 'history', 'notable_wines', 'classification', 'geo_key', 'lat', 'lng', 'level'];

  function patchFields_(entity, rec, values, ref, report) {
    var fs = Object.assign({}, rec.field_sources || {}), refs = Object.assign({}, rec.field_refs || {});
    var patch = { id: rec.id }, changed = false;
    Object.keys(values).forEach(function (f) {
      var v = values[f];
      if (Util.isBlank(v)) return;
      var cur = rec[f];
      var src = fs[f] || rec.source;
      if (!Util.isBlank(cur) && !REPLACEABLE[src]) { report.skipped_fields++; return; }
      if (String(cur) === String(v) && src === 'pesquisado') return;
      patch[f] = v; fs[f] = 'pesquisado'; refs[f] = ref; changed = true;
    });
    if (changed) { patch.field_sources = fs; patch.field_refs = refs; Repo.update(entity, [patch]); }
    return changed;
  }

  /** Importa um pack (um país). */
  function runPack(E) {
    return Repo.withLock(function () {
      var report = { regions_new: 0, regions_updated: 0, subregions_new: 0, producers_new: 0, region_grapes: 0, grapes_stub: 0, skipped_fields: 0 };

      E.countries.forEach(function (cs) {
        var c = Repo.all('countries').filter(function (x) { return x.name_key === Util.normKey(cs.name); })[0];
        if (!c) c = Repo.insert('countries', [{ name: cs.name, name_key: Util.normKey(cs.name), source: 'pesquisado', source_ref: cs.sources[0] }])[0];
        patchFields_('countries', c, { description: cs.description }, cs.sources[0], report);
      });
      var country = Repo.all('countries').filter(function (x) { return x.name_key === Util.normKey(E.country_of); })[0];
      var rgExisting = Repo.all('region_grapes');
      var newRG = [];

      function addProducers(list, regionId, defaultRef) {
        (list || []).forEach(function (ps) {
          var pref = ps.src || defaultRef;
          var p = Repo.all('producers').filter(function (x) { return x.name_key === Util.normKey(ps.name); })[0];
          if (!p) {
            p = Repo.insert('producers', [{ name: ps.name, name_key: Util.normKey(ps.name), region_id: regionId,
              source: 'pesquisado', source_ref: pref, field_sources: { name: 'pesquisado' }, field_refs: { name: pref } }])[0];
            report.producers_new++;
          } else if (Util.isBlank(p.region_id)) {
            Repo.update('producers', [{ id: p.id, region_id: regionId }]);
          }
          var link = Repo.all('region_producers').filter(function (l) { return l.region_id === regionId && l.producer_id === p.id; })[0];
          if (!link) {
            Repo.insert('region_producers', [{ region_id: regionId, producer_id: p.id, labels: ps.labels, source: 'pesquisado', source_ref: pref }]);
            report.producer_links = (report.producer_links || 0) + 1;
          } else if (link.source === 'pesquisado' && (link.labels !== ps.labels || link.source_ref !== pref)) {
            Repo.update('region_producers', [{ id: link.id, labels: ps.labels, source_ref: pref }]);
          }
        });
      }

      // Só nome ou sinônimo exatos: a busca aproximada juntaria uvas diferentes (Sercial × Cercial, Tintilla × Tintilia).
      // Nomes regionais de uvas que já existem na base com outro nome (sem sinônimo cadastrado).
      var ALIASES = { 'welschriesling': 'Riesling Italico', 'silvaner': 'Sylvaner', 'souson': 'Sousão' };
      function exactGrape_(n) {
        var k = Util.normKey(n), all = Repo.all('grapes');
        return all.filter(function (x) { return x.name_key === k; })[0] ||
          all.filter(function (x) { return (x.synonyms || []).some(function (s) { return Util.normKey(String(s).replace(/\(.*\)/, '')) === k; }); })[0] || null;
      }

      function linkGrapes(regionId, names, role, ref) {
        (names || []).forEach(function (n) {
          n = ALIASES[Util.normKey(n)] || n;
          var g = exactGrape_(n);
          if (!g) {
            g = Repo.insert('grapes', [{ name: n, name_key: Util.normKey(n), source: 'pesquisado', source_ref: ref,
              field_sources: { name: 'pesquisado' }, field_refs: { name: ref } }])[0];
            report.grapes_stub++;
          }
          var exists = rgExisting.concat(newRG).some(function (x) { return x.region_id === regionId && x.grape_id === g.id; });
          if (!exists) newRG.push({ region_id: regionId, grape_id: g.id, role: role, source: 'pesquisado', source_ref: ref });
        });
      }

      E.regions.forEach(function (rs) {
        var ref = rs.sources[0];
        var all = Repo.all('regions').filter(function (x) { return x.country_id === country.id && !x.parent_id; });
        var reg = all.filter(function (x) { return x.name_key === Util.normKey(rs.name) || x.name_key === Util.normKey(rs.geo); })[0];
        var values = { description: rs.description, climate: rs.climate, soils: rs.soils, altitude: rs.altitude, history: rs.history,
          notable_wines: rs.notable_wines, geo_key: rs.geo, level: 'regiao' };
        if (!reg) {
          reg = Repo.insert('regions', [{ name: rs.name, name_key: Util.normKey(rs.name), country_id: country.id, parent_id: '',
            source: 'pesquisado', source_ref: ref, field_sources: { name: 'pesquisado' }, field_refs: { name: ref } }])[0];
          report.regions_new++;
        }
        // Nome em português quando o registro veio da planilha com outra grafia (ex.: "Veneto" → "Vêneto").
        if (reg.name !== rs.name && (reg.field_sources && reg.field_sources.name || reg.source) !== 'usuario') {
          Repo.update('regions', [{ id: reg.id, name: rs.name, name_key: Util.normKey(rs.name) }]);
          reg = Repo.get('regions', reg.id);
        }
        if (patchFields_('regions', reg, values, ref, report)) report.regions_updated++;
        linkGrapes(reg.id, rs.grapes, 'principal', ref);
        linkGrapes(reg.id, rs.grapes_other, 'secundaria', ref);
        addProducers(rs.producers, reg.id, ref);

        rs.subregions.forEach(function (ss) {
          var subs = Repo.all('regions').filter(function (x) { return x.parent_id === reg.id; });
          var sub = subs.filter(function (x) { return x.name_key === Util.normKey(ss.name); })[0];
          // Sub-região renomeada numa versão nova do pack (só se ainda for dado pesquisado, nunca o que você editou).
          var old = !sub && ss.renamed_from ? subs.filter(function (x) { return x.name_key === Util.normKey(ss.renamed_from) && x.source === 'pesquisado'; })[0] : null;
          if (old) {
            Repo.update('regions', [{ id: old.id, name: ss.name, name_key: Util.normKey(ss.name) }]);
            sub = Repo.get('regions', old.id);
          }
          var pt = typeof GEO_PLACES !== 'undefined' ? GEO_PLACES[ss.place] : null;
          if (!sub) {
            sub = Repo.insert('regions', [{ name: ss.name, name_key: Util.normKey(ss.name), country_id: country.id, parent_id: reg.id,
              source: 'pesquisado', source_ref: ss.source, field_sources: { name: 'pesquisado' }, field_refs: { name: ss.source } }])[0];
            report.subregions_new++;
          }
          patchFields_('regions', sub, { description: ss.description, classification: ss.classification, notable_wines: ss.notable_wines,
            lat: pt ? pt[0] : '', lng: pt ? pt[1] : '', level: 'subregiao' }, ss.source, report);
          linkGrapes(sub.id, ss.grapes, 'principal', ss.source);

          addProducers(ss.producers, sub.id, ss.source);
        });
      });

      Repo.insert('region_grapes', newRG);
      report.region_grapes = newRG.length;
      Repo.insert('import_log', [{ run_at: Util.nowIso(), level: 'ok', message: 'Regiões ' + E.code + ' v' + E.version + ' importadas.', details: report, source: 'sistema' }]);
      return report;
    });
  }

  function packs() { SeedData.load('regions'); return typeof REGION_PACKS !== 'undefined' ? REGION_PACKS : []; }

  /** Importa todos os packs e soma os relatórios. */
  /**
   * Reimportação manual (Configurações). restart=true marca todos os packs como pendentes; cada chamada importa
   * o que couber em ~4 min e devolve quantos faltam, para o cliente chamar de novo.
   */
  function run(restart) {
    var props = PropertiesService.getScriptProperties();
    if (restart) packs().forEach(function (E) { props.setProperty('REGION_PACK_' + E.code + '_VERSION', '0'); });
    var total = {}, t0 = Date.now(), ran = 0;
    packs().forEach(function (E) {
      var key = 'REGION_PACK_' + E.code + '_VERSION';
      if (props.getProperty(key) === String(E.version)) return;
      if (ran && Date.now() - t0 > 240000) return;
      var r = runPack(E);
      props.setProperty(key, String(E.version));
      ran++;
      Object.keys(r).forEach(function (k) { total[k] = (total[k] || 0) + r[k]; });
    });
    total.remaining = packs().filter(function (E) { return props.getProperty('REGION_PACK_' + E.code + '_VERSION') !== String(E.version); }).length;
    return total;
  }

  /**
   * Importa cada pack uma vez por versão. maxMs limita o tempo desta chamada: com muitos países novos, cada
   * carregamento do app importa alguns e o restante fica para as chamadas seguintes (o Apps Script corta em 6 min).
   */
  function ensure(maxMs) {
    var props = PropertiesService.getScriptProperties();
    // Pelo manifesto (pequeno) vê se há algo pendente antes de carregar os packs (grandes).
    var all = props.getProperties();
    var pending = SEED_MANIFEST.packs.some(function (m) {
      var cur = all['REGION_PACK_' + m.code + '_VERSION'] || (m.code === 'IT' ? all.REGION_ENCYCLOPEDIA_VERSION : '');
      return cur !== String(m.version);
    });
    if (!pending) return [];
    var done = [], t0 = Date.now(), limit = maxMs || 20000;
    packs().forEach(function (E) {
      if (done.length && Date.now() - t0 > limit) return;
      var key = 'REGION_PACK_' + E.code + '_VERSION';
      var cur = props.getProperty(key);
      // Instalações anteriores registravam a Itália v1 em REGION_ENCYCLOPEDIA_VERSION.
      if (!cur && E.code === 'IT') cur = props.getProperty('REGION_ENCYCLOPEDIA_VERSION');
      if (cur === String(E.version)) return;
      runPack(E);
      props.setProperty(key, String(E.version));
      done.push(E.code);
    });
    return done;
  }

  function summary() {
    return SEED_MANIFEST.packs.map(function (m) { return { code: m.code, country: m.country, version: m.version, regions: m.regions }; });
  }

  return { run: run, ensure: ensure, summary: summary };
})();
