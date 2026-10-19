/**
 * Curso: trilha de lições curtas (dados em 57_CourseData.js). Progresso, pontos, sequência de dias e revisão espaçada
 * são PESSOAIS: ficam nas abas course_* e cada usuário só enxerga as próprias linhas (política "personal").
 *
 * Fluxo: course.get (trilha) → course.lesson (perguntas) → [cliente corrige na hora] → course.finish (resultado).
 * As respostas certas viajam com a lição para o feedback ser imediato; o curso é de estudo pessoal, sem ranking.
 */
var Course = (function () {
  var PASS = 70;                    // % mínimo para concluir uma lição
  var INTERVALS = [1, 3, 7, 14];    // dias até a próxima revisão de uma pergunta errada
  var REVIEW_BATCH = 8;

  function today_() { return new Date(Date.now() - 3 * 3600 * 1000).toISOString().slice(0, 10); }   // fuso de Brasília
  function addDays_(day, n) { var d = new Date(day + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }

  function unit_(id) { return COURSE_UNITS.filter(function (u) { return u.id === id; })[0]; }
  function lessonById_(id) {
    for (var i = 0; i < COURSE_UNITS.length; i++) for (var j = 0; j < COURSE_UNITS[i].lessons.length; j++) if (COURSE_UNITS[i].lessons[j].id === id) return { unit: COURSE_UNITS[i], lesson: COURSE_UNITS[i].lessons[j], index: j };
    return null;
  }
  function questionById_(id) {
    for (var i = 0; i < COURSE_UNITS.length; i++) for (var j = 0; j < COURSE_UNITS[i].lessons.length; j++) {
      var qs = COURSE_UNITS[i].lessons[j].questions;
      for (var k = 0; k < qs.length; k++) if (qs[k].id === id) return qs[k];
    }
    return null;
  }

  function stats_() {
    var s = Repo.all('course_stats')[0];   // a política já filtra pelo usuário
    return s || { xp_total: 0, streak: 0, best_streak: 0, last_day: '' };
  }
  /** Sequência vigente: continua se estudou hoje ou ontem; senão zera. */
  function liveStreak_(s) {
    if (!s.last_day) return 0;
    var t = today_();
    return s.last_day === t || s.last_day === addDays_(t, -1) ? (s.streak || 0) : 0;
  }

  function regionHref_(u) {
    var c = Repo.all('countries').filter(function (x) { return x.name_key === Util.normKey(u.country); })[0];
    if (!c) return '';
    var r = Repo.all('regions').filter(function (x) { return x.country_id === c.id && !x.parent_id && x.name_key === Util.normKey(u.region); })[0];
    return r ? '#/regioes/' + r.id : '';
  }

  function dueReviews_() {
    var t = today_();
    return Repo.all('course_reviews').filter(function (r) { return r.due_day <= t && questionById_(r.question_id); })
      .sort(function (a, b) { return String(a.due_day).localeCompare(String(b.due_day)); });
  }

  function get() {
    var prog = Util.indexBy(Repo.all('course_progress'), 'lesson_id');
    var st = stats_();
    var reviews = Repo.all('course_reviews');
    var units = COURSE_UNITS.map(function (u) {
      var prev = true, doneCount = 0;
      var lessons = u.lessons.map(function (l) {
        var p = prog[l.id], done = !!(p && p.completed_day);
        var status = done ? 'done' : (prev ? 'open' : 'locked');
        if (done) doneCount++;
        prev = done;
        return { id: l.id, title: l.title, level: l.level, questions: l.questions.length, status: status, best_score: p ? p.best_score : null };
      });
      var allDone = doneCount === u.lessons.length;
      var wrongInUnit = reviews.filter(function (r) { return r.question_id.indexOf(u.lessons[0].id.split('-')[0] + '-') === 0; }).length;
      return { id: u.id, title: u.title, country: u.country, href: regionHref_(u), lessons: lessons, done: doneCount,
        challenge: { status: allDone ? 'open' : 'locked', pending_review: wrongInUnit } };
    });
    return { units: units, stats: { xp: st.xp_total || 0, streak: liveStreak_(st), best_streak: st.best_streak || 0, studied_today: st.last_day === today_() },
      review_due: dueReviews_().length };
  }

  function lesson(id) {
    var f = lessonById_(Validate.str(id, 40, 'Lição'));
    if (!f) throw new Error('Lição não encontrada.');
    var prog = Util.indexBy(Repo.all('course_progress'), 'lesson_id');
    if (f.index > 0 && !(prog[f.unit.lessons[f.index - 1].id] || {}).completed_day) throw new Error('Conclua a lição anterior primeiro.');
    return { id: f.lesson.id, title: f.lesson.title, unit: f.unit.title, level: f.lesson.level, tip: f.lesson.tip, href: regionHref_(f.unit), questions: f.lesson.questions };
  }

  /** Desafio da unidade: 10 perguntas, dando prioridade às que você errou. */
  function challenge(unitId) {
    var u = unit_(Validate.str(unitId, 40, 'Unidade'));
    if (!u) throw new Error('Unidade não encontrada.');
    var prog = Util.indexBy(Repo.all('course_progress'), 'lesson_id');
    if (!u.lessons.every(function (l) { return (prog[l.id] || {}).completed_day; })) throw new Error('Conclua todas as lições da unidade primeiro.');
    var wrong = {};
    Repo.all('course_reviews').forEach(function (r) { wrong[r.question_id] = r.wrong_count || 1; });
    var all = [];
    u.lessons.forEach(function (l) { l.questions.forEach(function (q) { all.push(q); }); });
    var picked = Util.shuffle(all.slice()).sort(function (a, b) { return (wrong[b.id] || 0) - (wrong[a.id] || 0); }).slice(0, 10);
    return { id: 'challenge:' + u.id, title: 'Desafio: ' + u.title, unit: u.title, level: 'avancado', tip: 'Perguntas de toda a unidade — as que você mais errou vêm primeiro.', href: regionHref_(u), questions: Util.shuffle(picked) };
  }

  function review() {
    var due = dueReviews_().slice(0, REVIEW_BATCH);
    if (!due.length) return { id: 'review', title: 'Revisão do dia', unit: '', level: '', tip: '', questions: [] };
    return { id: 'review', title: 'Revisão do dia', unit: '', level: '', tip: 'Perguntas que você errou e que voltam agora, até fixar.', questions: due.map(function (r) { return questionById_(r.question_id); }) };
  }

  /**
   * results: [{id, ok}] de cada pergunta da lição/revisão/desafio. Atualiza pontos, sequência, progresso e revisões.
   * Só aceita ids que existem no curso (nada vindo do navegador é gravado sem validação).
   */
  function finish(a) {
    var kind = String(a.lesson_id || '');
    var results = (Array.isArray(a.results) ? a.results : []).slice(0, 30).filter(function (r) { return r && questionById_(String(r.id)); })
      .map(function (r) { return { id: String(r.id), ok: !!r.ok }; });
    if (!results.length) throw new Error('Nenhuma resposta para registrar.');
    var isLesson = !/^(review|challenge:)/.test(kind);
    var f = isLesson ? lessonById_(kind) : null;
    if (isLesson && !f) throw new Error('Lição não encontrada.');
    var prog = Util.indexBy(Repo.all('course_progress'), 'lesson_id');
    if (isLesson && f.index > 0 && !(prog[f.unit.lessons[f.index - 1].id] || {}).completed_day) throw new Error('Conclua a lição anterior primeiro.');
    if (isLesson) {
      var ids = f.lesson.questions.map(function (q) { return q.id; });
      if (results.some(function (r) { return ids.indexOf(r.id) < 0; })) throw new Error('Respostas de outra lição.');
    }
    var right = results.filter(function (r) { return r.ok; }).length;
    var score = Math.round(right / results.length * 100);
    var passed = score >= PASS;
    var t = today_();

    return Repo.withLock(function () {
      // Revisão espaçada: errou → volta amanhã; acertou numa revisão vencida → intervalo maior.
      var existing = Util.indexBy(Repo.all('course_reviews'), 'question_id');
      var ins = [], upd = [], del = [];
      results.forEach(function (r) {
        var cur = existing[r.id];
        if (!r.ok) {
          if (cur) upd.push({ id: cur.id, step: 0, due_day: addDays_(t, INTERVALS[0]), wrong_count: (cur.wrong_count || 0) + 1 });
          else ins.push({ question_id: r.id, step: 0, due_day: addDays_(t, INTERVALS[0]), wrong_count: 1, source: 'sistema' });
        } else if (cur && cur.due_day <= t) {
          var step = (cur.step || 0) + 1;
          if (step >= INTERVALS.length) del.push(cur.id);
          else upd.push({ id: cur.id, step: step, due_day: addDays_(t, INTERVALS[step]) });
        }
      });
      if (ins.length) Repo.insert('course_reviews', ins);
      if (upd.length) Repo.update('course_reviews', upd);
      if (del.length) Repo.remove('course_reviews', del);

      // Pontos: 3 por acerto, +6 por concluir uma lição (a primeira vez ou melhorando a nota).
      var firstPass = isLesson && passed && !(prog[kind] || {}).completed_day;
      var xp = right * 3 + (firstPass ? 6 : 0);
      if (isLesson) {
        var p = prog[kind];
        var patch = { best_score: Math.max(score, p ? p.best_score || 0 : 0), attempts: (p ? p.attempts || 0 : 0) + 1, xp: (p ? p.xp || 0 : 0) + xp };
        if (passed && !(p && p.completed_day)) patch.completed_day = t;
        if (p) { patch.id = p.id; Repo.update('course_progress', [patch]); }
        else Repo.insert('course_progress', [Object.assign({ unit_id: f.unit.id, lesson_id: kind, source: 'sistema' }, patch)]);
      }
      var st = Repo.all('course_stats')[0], streak = 1;
      if (st && st.last_day === t) streak = st.streak || 1;
      else if (st && st.last_day === addDays_(t, -1)) streak = (st.streak || 0) + 1;
      var next = { xp_total: ((st && st.xp_total) || 0) + xp, streak: streak, best_streak: Math.max(streak, (st && st.best_streak) || 0), last_day: t };
      if (st) Repo.update('course_stats', [Object.assign({ id: st.id }, next)]);
      else Repo.insert('course_stats', [Object.assign({ source: 'sistema' }, next)]);

      var nextLesson = null;
      if (isLesson && passed) { var nl = f.unit.lessons[f.index + 1]; nextLesson = nl ? { id: nl.id, title: nl.title } : null; }
      return { score: score, right: right, total: results.length, passed: isLesson ? passed : true, xp: xp, streak: streak,
        to_review: results.filter(function (r) { return !r.ok; }).length, next: nextLesson, unit_done: isLesson && passed && !nextLesson, pass_mark: PASS };
    });
  }

  return { get: get, lesson: lesson, challenge: challenge, review: review, finish: finish };
})();
