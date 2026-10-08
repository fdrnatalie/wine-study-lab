/**
 * Cartões de estudo (material de aula): tópicos curtos que complementam as páginas de país e região
 * e as seções "História do vinho", "Produção de vinho" e "Harmonizações".
 *
 * Os dados ficam em src/server/23_SeedStudy*.js (STUDY_PACKS) e são importados por pacote e versão.
 * O material pode ter erros: cartão com status "revisar" aparece marcado e fora do quiz.
 */
var Study = (function () {
  var TOPICS = { historia: 'História do vinho', producao: 'Produção de vinho', harmonizacao: 'Harmonizações' };

  function view_(c) {
    return { id: c.id, topic: c.topic, group: c.group, title: c.title, kind: c.kind, items: c.items || [], status: c.status || '', sort: c.sort || 0, level: c.level || 'avancado' };
  }
  function bySort_(a, b) { return (a.sort - b.sort) || String(a.title).localeCompare(String(b.title), 'pt'); }

  function forCountry(countryId) {
    return Repo.where('study_cards', { topic: 'pais', country_id: countryId }).map(view_).sort(bySort_);
  }
  /** Cartões da região e de cada sub-região, por id da região. */
  function forRegions(ids) {
    var set = {}; ids.forEach(function (i) { set[i] = true; });
    var out = {};
    Repo.where('study_cards', function (c) { return c.topic === 'regiao' && set[c.region_id]; }).forEach(function (c) {
      (out[c.region_id] = out[c.region_id] || []).push(view_(c));
    });
    Object.keys(out).forEach(function (k) { out[k].sort(bySort_); });
    return out;
  }

  /** Seção temática: cartões agrupados na ordem em que aparecem. */
  function topic(name) {
    if (!TOPICS[name]) throw new Error('Seção desconhecida.');
    var cards = Repo.where('study_cards', { topic: name }).map(view_).sort(bySort_);
    var groups = [], idx = {};
    cards.forEach(function (c) {
      var g = c.group || 'Geral';
      if (idx[g] === undefined) { idx[g] = groups.length; groups.push({ name: g, cards: [] }); }
      groups[idx[g]].cards.push(c);
    });
    return { topic: name, title: TOPICS[name], count: cards.length, groups: groups };
  }

  function counts() {
    var c = {};
    Repo.all('study_cards').forEach(function (x) { c[x.topic] = (c[x.topic] || 0) + 1; });
    return c;
  }

  return { forCountry: forCountry, forRegions: forRegions, topic: topic, counts: counts, TOPICS: TOPICS };
})();

/**
 * Importa STUDY_PACKS. Idempotente: casa por (pack, key); atualiza só cartões ainda com origem "aula" (o que você
 * editou fica intacto); remove cartões do pacote que saíram do arquivo.
 */
var SeedStudy = (function () {
  function packs() { SeedData.load('study'); return STUDY_PACKS; }

  function find_(arr, name) {
    var k = Util.normKey(name);
    return arr.filter(function (x) { return x.name_key === k; })[0] || null;
  }

  /** Resolve [país, região, sub-região?] para ids; null quando a região ainda não existe. */
  function resolve_(ref, countries, regions) {
    var c = find_(countries, ref[0]);
    if (!c) return null;
    if (ref.length < 2) return { country_id: c.id, region_id: '' };
    var top = regions.filter(function (r) { return r.country_id === c.id && !r.parent_id && r.name_key === Util.normKey(ref[1]); })[0];
    if (!top) return null;
    if (ref.length < 3) return { country_id: c.id, region_id: top.id };
    var sub = regions.filter(function (r) { return r.parent_id === top.id && r.name_key === Util.normKey(ref[2]); })[0];
    return sub ? { country_id: c.id, region_id: sub.id } : { country_id: c.id, region_id: top.id, fallback: true };
  }

  function runPack(E) {
    return Repo.withLock(function () {
      var report = { added: 0, updated: 0, removed: 0, skipped: 0, unresolved: [] };
      var countries = Repo.all('countries'), regions = Repo.all('regions');
      var existing = Repo.where('study_cards', { pack: E.code });
      var byKey = Util.indexBy(existing, 'key');
      var seen = {}, inserts = [], updates = [];
      E.cards.forEach(function (s, i) {
        var scope = { country_id: '', region_id: '' };
        if (s.topic === 'pais' || s.topic === 'regiao') {
          scope = resolve_(s.ref, countries, regions);
          if (!scope) { report.unresolved.push(s.ref.join('/') + ' · ' + s.title); return; }
        }
        var key = s.topic + '|' + (s.ref ? s.ref.join('/') : '') + '|' + Util.normKey(s.title);
        seen[key] = true;
        var rec = { key: key, pack: E.code, topic: s.topic, country_id: scope.country_id, region_id: scope.region_id,
          group: s.group || '', title: s.title, kind: s.kind, items: s.items, sort: s.sort === undefined ? i : s.sort, status: s.status || 'ok', level: s.level || 'avancado' };
        var cur = byKey[key];
        if (!cur) { rec.source = 'aula'; inserts.push(rec); report.added++; return; }
        if (cur.source !== 'aula') { report.skipped++; return; }
        if (JSON.stringify([cur.group, cur.title, cur.kind, cur.items, cur.sort, cur.status, cur.level, cur.country_id, cur.region_id]) ===
            JSON.stringify([rec.group, rec.title, rec.kind, rec.items, rec.sort, rec.status, rec.level, rec.country_id, rec.region_id])) return;
        rec.id = cur.id; updates.push(rec); report.updated++;
      });
      if (inserts.length) Repo.insert('study_cards', inserts);
      if (updates.length) Repo.update('study_cards', updates);
      var gone = existing.filter(function (c) { return !seen[c.key] && c.source === 'aula'; });
      if (gone.length) { Repo.remove('study_cards', gone.map(function (c) { return c.id; })); report.removed = gone.length; }
      return report;
    });
  }

  /** Importa cada pacote uma vez por versão (pelo manifesto, sem carregar os dados quando nada mudou). */
  function ensure() {
    var props = PropertiesService.getScriptProperties();
    var all = props.getProperties();
    var pending = SEED_MANIFEST.study.some(function (m) { return all['STUDY_PACK_' + m.code + '_VERSION'] !== String(m.version); });
    if (!pending) return [];
    var done = [];
    packs().forEach(function (E) {
      var key = 'STUDY_PACK_' + E.code + '_VERSION';
      if (props.getProperty(key) === String(E.version)) return;
      var r = runPack(E);
      props.setProperty(key, String(E.version));
      Repo.insert('import_log', [{ run_at: Util.nowIso(), level: r.unresolved.length ? 'warn' : 'ok',
        message: 'Cartões de estudo ' + E.code + ' v' + E.version + ': +' + r.added + ' novos, ' + r.updated + ' atualizados, ' + r.removed + ' removidos.', details: r, source: 'sistema' }]);
      done.push(E.code);
    });
    return done;
  }

  return { run: runPack, ensure: ensure };
})();
