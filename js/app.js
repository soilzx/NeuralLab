(function () {
  'use strict';

  var A = window.ACADEMIC;   // official academic facts
  var D = window.DATA;       // explanations and guidance
  var S = window.STRINGS;    // interface text
  var ROUTES = ['home', 'plan', 'courses', 'careers', 'future', 'journey'];
  var PLAN_IDS = ['st', 'int'];

  /* ---------- Storage (optional; the site works without it) ---------- */
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  function initialLang() {
    var m = /[?&]lang=(en|ar)\b/.exec(window.location.search);
    if (m) return m[1];
    var saved = store.get('lang');
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  }

  /* ---------- State ---------- */
  var state = {
    lang: initialLang(),
    route: 'home',
    home: { field: 'ai' },
    plan: { opt: 'st', year: 0, sel: null },
    courses: { q: '', f: 'all', sel: null },
    careers: { f: 'all', sel: D.careers[0].id },
    journey: { step: 0, answers: {}, done: false }
  };

  /* ---------- Indexes ---------- */
  var courseMap = {};
  A.courses.forEach(function (c) { courseMap[c.code] = c; });

  // Placement of each course in each degree plan: { st: { code: {year, term} }, int: {...} }
  // term: 0 = Term 1, 1 = Term 2, 2 = Summer Session
  var planPos = {};
  PLAN_IDS.forEach(function (id) {
    planPos[id] = {};
    A.plans[id].years.forEach(function (y, yi) {
      y.terms.forEach(function (t, ti) {
        t.courses.forEach(function (code) { planPos[id][code] = { year: yi, term: ti }; });
      });
      if (y.summer) y.summer.courses.forEach(function (code) { planPos[id][code] = { year: yi, term: 2 }; });
    });
  });

  // Course codes mentioned in a published prerequisite text
  var CODE_RE = /\b([A-Za-z]{2,4})\s?(\d{3})\b/g;
  function normCode(letters, num) { return letters.toUpperCase() + ' ' + num; }
  function codesIn(text) {
    var out = [];
    if (!text) return out;
    text.replace(CODE_RE, function (m, l, n) {
      var code = normCode(l, n);
      if (courseMap[code] && out.indexOf(code) < 0) out.push(code);
      return m;
    });
    return out;
  }

  var dependents = {};
  A.courses.forEach(function (c) {
    codesIn(c.prereq).concat(codesIn(c.coreq)).forEach(function (p) {
      (dependents[p] = dependents[p] || []).push(c.code);
    });
  });

  var careerMap = {};
  var careersByCourse = {};
  D.careers.forEach(function (k) {
    careerMap[k.id] = k;
    k.courses.forEach(function (code) { (careersByCourse[code] = careersByCourse[code] || []).push(k.id); });
  });

  // Course explorer order: Summer Training plan order, then Internship, then electives
  var orderedCourses = [];
  function pushOrdered(code) { if (orderedCourses.indexOf(courseMap[code]) < 0) orderedCourses.push(courseMap[code]); }
  PLAN_IDS.forEach(function (id) {
    A.plans[id].years.forEach(function (y) {
      y.terms.forEach(function (t) { t.courses.forEach(pushOrdered); });
      if (y.summer) y.summer.courses.forEach(pushOrdered);
    });
  });
  A.courses.forEach(function (c) { pushOrdered(c.code); });

  var electives = A.courses.filter(function (c) { return c.elective; });

  /* ---------- Helpers ---------- */
  function t() { return S[state.lang]; }
  function L(o) { return o ? o[state.lang] : ''; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function attr(s) { return esc(s); }
  function listSep() { return state.lang === 'ar' ? '، ' : ', '; }
  function pressed(b) { return ' aria-pressed="' + (b ? 'true' : 'false') + '"'; }
  function bdi(s) { return '<bdi>' + esc(s) + '</bdi>'; }

  /* Display title: official English title, or explanatory Arabic title */
  function title(code) {
    if (state.lang === 'ar' && D.courseText[code]) return D.courseText[code].ar;
    return courseMap[code].title;
  }
  function explain(code) { return D.courseText[code] ? L(D.courseText[code].s) : ''; }

  function yearName(yi, opt) { return t().years[A.plans[opt || state.plan.opt].years[yi].id]; }
  function termName(ti) { return ti === 2 ? t().summer : t().terms[ti]; }

  function seg(act, options, current, label) {
    return '<div class="seg" role="group" aria-label="' + attr(label) + '">' +
      options.map(function (o) {
        return '<button type="button" data-act="' + act + '" data-v="' + attr(o.v) + '"' + pressed(String(o.v) === String(current)) + '>' + esc(o.label) + '</button>';
      }).join('') + '</div>';
  }

  function sourceNote() {
    var s = t();
    return '<p class="source-note">' + esc(s.sourceNote) +
      ' <a href="' + attr(A.source.url) + '" target="_blank" rel="noopener">' + esc(s.officialPage) + '</a></p>';
  }

  /* ---------- Header ---------- */
  function renderChrome() {
    var s = t();
    var html = document.documentElement;
    html.lang = state.lang;
    html.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.title = s.pageTitle;

    document.querySelector('.skip-link').textContent = s.skip;
    document.getElementById('club-logo').alt = s.clubLogo;
    document.getElementById('uni-logo').alt = s.uniLogo;
    document.getElementById('main-nav').setAttribute('aria-label', s.mainNav);

    var btn = document.getElementById('lang-btn');
    btn.textContent = s.switchLang;
    btn.setAttribute('lang', state.lang === 'ar' ? 'en' : 'ar');
    btn.setAttribute('aria-label', s.switchLangLabel);

    document.getElementById('nav-list').innerHTML = ROUTES.map(function (r) {
      var href = r === 'home' ? '#/' : '#/' + r;
      var cur = r === state.route ? ' aria-current="page"' : '';
      return '<li><a href="' + href + '"' + cur + '>' + esc(s.nav[r]) + '</a></li>';
    }).join('');
  }

  /* ---------- Shared course pieces ---------- */
  function courseLinks(codes, act) {
    if (!codes || !codes.length) return '';
    return '<ul class="link-list">' + codes.map(function (code) {
      return '<li><button type="button" class="link-btn" data-act="' + act + '" data-v="' + attr(code) + '">' +
        '<bdi class="code">' + esc(code) + '</bdi><span>' + esc(title(code)) + '</span></button></li>';
    }).join('') + '</ul>';
  }

  /* Published prerequisite text, verbatim, with known course codes made clickable */
  function prereqHtml(text, act) {
    if (!text) return '<p class="muted">' + esc(t().notStated) + '</p>';
    var out = '';
    var last = 0;
    text.replace(CODE_RE, function (m, l, n, offset) {
      out += esc(text.slice(last, offset));
      var code = normCode(l, n);
      out += courseMap[code]
        ? '<button type="button" class="inline-link" data-act="' + act + '" data-v="' + attr(code) + '">' + esc(m) + '</button>'
        : esc(m);
      last = offset + m.length;
      return m;
    });
    out += esc(text.slice(last));
    var gloss = t().standing[text];
    return '<p class="prereq" dir="ltr">' + out + '</p>' + (gloss ? '<p class="muted">' + esc(gloss) + '</p>' : '');
  }

  function placementText(code) {
    var s = t();
    var c = courseMap[code];
    if (c.elective) return s.fromElectiveList;
    var st = planPos.st[code];
    var it = planPos.int[code];
    function one(p, opt) { return yearName(p.year, opt) + s.comma + termName(p.term); }
    if (st && it && st.year === it.year && st.term === it.term) return one(st, 'st');
    var parts = [];
    if (st) parts.push(s.planShort.st + ': ' + one(st, 'st'));
    if (it) parts.push(s.planShort.int + ': ' + one(it, 'int'));
    return parts.join(' · ');
  }

  function courseDetail(code, linkAct, withCareers) {
    var s = t();
    var c = courseMap[code];
    var meta = [code];
    if (typeof c.cr === 'number') meta.push(s.credits(c.cr));
    meta.push(placementText(code));

    var html = '<h2>' + esc(title(code)) + '</h2>' +
      '<div class="meta">' + meta.map(bdi).join(' · ') + '</div>';
    if (state.lang === 'ar') {
      html += '<div class="meta">' + esc(s.officialTitle) + ': <bdi lang="en">' + esc(c.title) + '</bdi></div>';
    }
    html += '<p>' + esc(explain(code)) + '</p>';

    if (code === 'XE xxx') {
      html += '<div class="detail-section"><h3>' + esc(s.teOptions) + '</h3><p>' + esc(s.teOptionsText(electives.length)) + '</p>' +
        '<button type="button" class="link-btn" data-act="goto-electives">' + esc(s.viewElectives) + '</button></div>';
    } else if (!c.slot) {
      html += '<div class="detail-section"><h3>' + esc(s.prerequisite) + '</h3>' + prereqHtml(c.prereq, linkAct) + '</div>';
      if (c.coreq) html += '<div class="detail-section"><h3>' + esc(s.corequisite) + '</h3>' + prereqHtml(c.coreq, linkAct) + '</div>';
      if (dependents[code]) {
        html += '<div class="detail-section"><h3>' + esc(s.leadsTo) + '</h3>' + courseLinks(dependents[code], linkAct) + '</div>';
      }
    }
    var note = D.courseText[code] && D.courseText[code].note;
    if (note) html += '<p class="detail-note">' + esc(L(note)) + '</p>';

    if (withCareers && careersByCourse[code]) {
      html += '<div class="detail-section"><h3>' + esc(s.usedIn) + '</h3><ul class="link-list">' +
        careersByCourse[code].map(function (id) {
          return '<li><button type="button" class="link-btn" data-act="goto-career" data-v="' + id + '">' + esc(L(careerMap[id].t)) + '</button></li>';
        }).join('') + '</ul></div>';
    }
    return html;
  }

  /* ---------- Home ---------- */
  function renderHome() {
    var s = t();
    var f = D.fields[state.home.field];
    var fieldTabs = ['ai', 'sec', 'aisec'].map(function (k) { return { v: k, label: L(D.fields[k].t) }; });

    var explore = ['plan', 'courses', 'careers', 'journey', 'future'].map(function (r) {
      return '<li><a href="#/' + r + '"><span class="explore-title">' + esc(s.nav[r]) + '</span>' +
        '<span class="explore-text">' + esc(s.exploreText[r]) + '</span></a></li>';
    }).join('');

    return '<div class="container page home">' +
      '<div class="home-grid">' +
        '<div class="home-intro">' +
          '<h1 tabindex="-1">' + esc(s.homeTitle) + '</h1>' +
          '<p class="home-lead">' + esc(s.homeIntro) + '</p>' +
          '<div class="home-actions">' +
            '<a class="btn btn-primary" href="#/courses">' + esc(s.homeExplore) + '</a>' +
            '<a class="btn btn-secondary" href="#/plan">' + esc(s.homePlan) + '</a>' +
          '</div>' +
          '<div class="credibility">' +
            '<p class="cred-uni">' + esc(s.uniLogo) + '</p>' +
            '<p class="cred-dept">' + esc(s.credDept) + s.comma + esc(s.credCollege) + '</p>' +
            '<p class="cred-plans">' + esc(s.credPlans(A.plans.st.total, A.plans.int.total)) + '</p>' +
            '<a class="cred-link" href="' + attr(A.source.url) + '" target="_blank" rel="noopener">' + esc(s.officialPage) + '</a>' +
          '</div>' +
        '</div>' +
        '<section class="fields" aria-labelledby="fields-title">' +
          '<h2 id="fields-title" class="visually-hidden">' + esc(s.fieldsTitle) + '</h2>' +
          seg('home-field', fieldTabs, state.home.field, s.fieldsTitle) +
          '<div class="field-panel" aria-live="polite">' +
            '<p class="field-desc">' + esc(L(f.d)) + '</p>' +
            '<h3>' + esc(s.requiredCourses) + '</h3>' +
            courseLinks(f.courses, 'goto-course') +
          '</div>' +
        '</section>' +
      '</div>' +
      '<nav class="explore" aria-label="' + attr(s.exploreLabel) + '"><ul>' + explore + '</ul></nav>' +
    '</div>';
  }

  /* ---------- Study plan ---------- */
  function planRow(code, related) {
    var sel = state.plan.sel === code;
    var cls = 'row' + (related[code] ? ' is-related' : '');
    var cr = courseMap[code].cr;
    return '<li><button type="button" class="' + cls + '" data-act="plan-sel" data-v="' + attr(code) + '"' + pressed(sel) + '>' +
      '<bdi class="code">' + esc(code) + '</bdi>' +
      '<span class="title">' + esc(title(code)) + '</span>' +
      '<span class="cr">' + cr + '</span></button></li>';
  }

  function termBlock(name, term, related, extraClass) {
    var s = t();
    return '<section class="term' + (extraClass || '') + '"><div class="term-head"><h2>' + esc(name) + '</h2>' +
      '<span>' + esc(s.credits(term.cr)) + '</span></div>' +
      '<ul class="rows">' + term.courses.map(function (code) { return planRow(code, related); }).join('') + '</ul></section>';
  }

  function renderPlan() {
    var s = t();
    var p = state.plan;
    var plan = A.plans[p.opt];
    var yr = plan.years[p.year];

    var related = {};
    if (p.sel && courseMap[p.sel]) {
      codesIn(courseMap[p.sel].prereq).forEach(function (c) { related[c] = true; });
      (dependents[p.sel] || []).forEach(function (c) { related[c] = true; });
    }

    var terms = yr.terms.map(function (term, ti) { return termBlock(s.terms[ti], term, related); }).join('');
    if (yr.summer) terms += termBlock(s.summer, yr.summer, related, ' summer');

    var detail = p.sel ? courseDetail(p.sel, 'goto-plan-course', false)
      : '<p class="detail-hint">' + esc(s.planHint) + '</p>';

    var opts = PLAN_IDS.map(function (id) { return { v: id, label: s.planOptions[id] }; });
    var years = plan.years.map(function (y, i) { return { v: i, label: s.years[y.id] }; });

    return '<div class="container page">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.planTitle) + '</h1>' +
        '<div class="controls">' + seg('plan-opt', opts, p.opt, s.planOptionLabel) + seg('plan-year', years, p.year, s.yearLabel) + '</div>' +
      '</div>' +
      '<p class="plan-note">' + esc(s.planNote[p.opt](plan.total)) + '</p>' +
      '<div class="split"><div class="terms">' + terms + '</div>' +
        '<aside class="detail" aria-live="polite">' + detail + '</aside></div>' +
      sourceNote() +
    '</div>';
  }

  /* ---------- Courses ---------- */
  var FILTERS = ['all', 'ai', 'sec', 'aisec', 'cs', 'found', 'math', 'gen', 'train', 'te'];

  function filteredCourses() {
    var c = state.courses;
    var q = c.q.trim().toLowerCase();
    return orderedCourses.filter(function (x) {
      if (c.f !== 'all' && x.area !== c.f) return false;
      if (!q) return true;
      var ar = D.courseText[x.code] ? D.courseText[x.code].ar : '';
      return (x.code + ' ' + x.code.replace(' ', '') + ' ' + x.title + ' ' + ar).toLowerCase().indexOf(q) >= 0;
    });
  }

  function renderCourseRows() {
    var list = filteredCourses();
    if (!list.length) return '<p class="empty">' + esc(t().noResults) + '</p>';
    return '<ul class="rows">' + list.map(function (c) {
      return '<li><button type="button" class="row" data-act="courses-sel" data-v="' + attr(c.code) + '"' + pressed(state.courses.sel === c.code) + '>' +
        '<bdi class="code">' + esc(c.code) + '</bdi>' +
        '<span class="title">' + esc(title(c.code)) + '</span>' +
        '<span class="cr">' + (typeof c.cr === 'number' ? c.cr : '') + '</span></button></li>';
    }).join('') + '</ul>';
  }

  function renderCourses() {
    var s = t();
    var c = state.courses;
    if (!c.sel) c.sel = orderedCourses[0].code;
    var filters = FILTERS.map(function (f) {
      return '<li><button type="button" class="filter-btn" data-act="courses-filter" data-v="' + f + '"' + pressed(c.f === f) + '>' +
        esc(f === 'all' ? s.allCourses : L(D.areas[f])) + '</button></li>';
    }).join('');

    return '<div class="container page">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.coursesTitle) + '</h1>' +
        '<input class="search" type="search" id="course-search" placeholder="' + attr(s.search) + '" aria-label="' + attr(s.search) + '" value="' + attr(c.q) + '" autocomplete="off">' +
      '</div>' +
      '<div class="courses-layout">' +
        '<nav class="filters" aria-label="' + attr(s.areaLabel) + '"><ul>' + filters + '</ul></nav>' +
        '<div class="list-scroll" id="course-rows">' + renderCourseRows() + '</div>' +
        '<aside class="detail" aria-live="polite">' + courseDetail(c.sel, 'goto-course', true) + '</aside>' +
      '</div>' +
      sourceNote() +
    '</div>';
  }

  /* ---------- Careers ---------- */
  function renderCareers() {
    var s = t();
    var st = state.careers;
    var list = D.careers.filter(function (k) { return st.f === 'all' || k.areas.indexOf(st.f) >= 0; });
    var k = careerMap[st.sel];

    var rows = '<ul class="rows">' + list.map(function (x) {
      return '<li><button type="button" class="row row-simple" data-act="careers-sel" data-v="' + x.id + '"' + pressed(st.sel === x.id) + '>' +
        '<span class="title">' + esc(L(x.t)) + '</span></button></li>';
    }).join('') + '</ul>';

    var detail = '<h2>' + esc(L(k.t)) + '</h2>' +
      '<p class="lead">' + esc(L(k.s)) + '</p>' +
      '<div class="detail-grid">' +
        '<div class="detail-section"><h3>' + esc(s.whatYouDo) + '</h3><ul class="bullets">' +
          L(k.tasks).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="detail-section"><h3>' + esc(s.prepCourses) + '</h3>' + courseLinks(k.courses, 'goto-course') + '</div>' +
        '<div class="detail-section"><h3>' + esc(s.skills) + '</h3><p>' + esc(L(k.skills).join(listSep())) + '</p></div>' +
        '<div class="detail-section"><h3>' + esc(s.workplaces) + '</h3><p>' +
          esc(k.sectors.map(function (x) { return L(D.sectors[x]); }).join(listSep())) + '</p></div>' +
      '</div>' +
      '<p class="detail-note">' + esc(s.careersNote) + '</p>';

    var filters = [{ v: 'all', label: s.all }, { v: 'ai', label: L(D.areas.ai) }, { v: 'sec', label: L(D.areas.sec) }];

    return '<div class="container page">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.careersTitle) + '</h1>' +
        '<div class="controls">' + seg('careers-filter', filters, st.f, s.show) + '</div></div>' +
      '<div class="split split-wide-detail"><div>' + rows + '</div>' +
        '<aside class="detail" aria-live="polite">' + detail + '</aside></div>' +
    '</div>';
  }

  /* ---------- Future ---------- */
  function renderFuture() {
    var s = t();
    return '<div class="container page">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.futureTitle) + '</h1></div>' +
      '<div class="future-grid">' + D.future.map(function (f) {
        return '<section class="future-item"><h2>' + esc(L(f.t)) + '</h2><p>' + esc(L(f.d)) + '</p></section>';
      }).join('') + '</div>' +
    '</div>';
  }

  /* ---------- Journey ---------- */
  function journeyResult() {
    var answers = state.journey.answers;
    var count = { ai: 0, sec: 0, both: 0 };
    var impact = 'health';
    D.journey.forEach(function (q) {
      var opt = q.options.filter(function (o) { return o.id === answers[q.id]; })[0];
      if (!opt) return;
      if (q.id === 'impact') impact = opt.id;
      else count[opt.area]++;
    });
    var max = Math.max(count.ai, count.sec, count.both);
    var top = ['ai', 'sec', 'both'].filter(function (a) { return count[a] === max; });
    var area = top.length === 1 ? top[0] : 'both';
    var R = D.journeyResults;
    return { area: area, impact: impact, subjects: R.subjects[area], careers: R.careers[area], challenge: R.challenges[impact][area] };
  }

  function renderJourney() {
    var s = t();
    var j = state.journey;
    var n = D.journey.length;

    if (j.done) {
      var r = journeyResult();
      return '<div class="container page"><div class="journey journey-result fade-in">' +
        '<div class="page-head"><h1 tabindex="-1">' + esc(s.resultTitle) + '</h1>' +
          '<div class="controls">' +
            '<button type="button" class="btn btn-secondary" data-act="j-edit">' + esc(s.changeAnswers) + '</button>' +
            '<button type="button" class="btn btn-secondary" data-act="j-reset">' + esc(s.startOver) + '</button>' +
          '</div></div>' +
        '<div class="result-main"><span class="muted">' + esc(s.mainArea) + '</span>' +
          '<h2>' + esc(s.areaNames[r.area]) + '</h2><p>' + esc(s.areaLead[r.area]) + '</p></div>' +
        '<div class="result-grid">' +
          '<section><h3>' + esc(s.subjects) + '</h3>' + courseLinks(r.subjects, 'goto-course') + '</section>' +
          '<section><h3>' + esc(s.careerDirections) + '</h3><ul class="link-list">' +
            r.careers.map(function (id) {
              return '<li><button type="button" class="link-btn" data-act="goto-career" data-v="' + id + '">' + esc(L(careerMap[id].t)) + '</button></li>';
            }).join('') + '</ul></section>' +
          '<section><h3>' + esc(s.challenge) + '</h3><p>' + esc(L(r.challenge)) + '</p></section>' +
        '</div>' +
        '<p class="disclaimer">' + esc(s.disclaimer) + '</p>' +
      '</div></div>';
    }

    var q = D.journey[j.step];
    var chosen = j.answers[q.id];
    var last = j.step === n - 1;
    var answered = D.journey.filter(function (x) { return j.answers[x.id]; }).length;

    return '<div class="container page page-journey"><div class="journey">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.journeyTitle) + '</h1>' +
        '<span class="journey-step">' + esc(s.stepOf(j.step + 1, n)) + '</span></div>' +
      '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + n + '" aria-valuenow="' + answered + '" aria-label="' + attr(s.stepOf(j.step + 1, n)) + '">' +
        '<span style="width:' + Math.round((answered / n) * 100) + '%"></span></div>' +
      '<div class="question fade-in" data-step="' + j.step + '">' +
        '<h2 id="q-title">' + esc(L(q.q)) + '</h2>' +
        '<div class="choices choices-' + q.options.length + '" role="group" aria-labelledby="q-title">' + q.options.map(function (o) {
          return '<button type="button" class="choice" data-act="j-choose" data-v="' + o.id + '"' + pressed(chosen === o.id) + '>' + esc(L(o.t)) + '</button>';
        }).join('') + '</div>' +
      '</div>' +
      '<div class="journey-nav">' +
        '<button type="button" class="btn btn-secondary" data-act="j-back"' + (j.step === 0 ? ' disabled' : '') + '>' + esc(s.back) + '</button>' +
        '<button type="button" class="btn btn-primary" data-act="j-next"' + (chosen ? '' : ' disabled') + '>' + esc(last ? s.seeResult : s.next) + '</button>' +
      '</div>' +
    '</div></div>';
  }

  /* ---------- Render & routing ---------- */
  var views = { home: renderHome, plan: renderPlan, courses: renderCourses, careers: renderCareers, future: renderFuture, journey: renderJourney };

  function render(focusHeading) {
    renderChrome();
    var main = document.getElementById('main');
    main.innerHTML = views[state.route]();
    if (focusHeading) {
      window.scrollTo(0, 0);
      var h = main.querySelector('h1');
      if (h) h.focus({ preventScroll: true });
    }
  }

  function routeFromHash() {
    var r = window.location.hash.replace(/^#\/?/, '').split(/[/?]/)[0];
    return ROUTES.indexOf(r) >= 0 ? r : 'home';
  }

  function navigate(route) {
    if (state.route === route) { render(true); return; }
    window.location.hash = route === 'home' ? '#/' : '#/' + route;
  }

  window.addEventListener('hashchange', function () {
    state.route = routeFromHash();
    render(true);
  });

  /* ---------- Interactions ---------- */
  var actions = {
    'home-field': function (v) { state.home.field = v; render(); },
    'plan-opt': function (v) {
      var p = state.plan;
      p.opt = v;
      // Keep the selected course if it exists in the new plan; follow it to its year
      if (p.sel && planPos[v][p.sel]) p.year = planPos[v][p.sel].year;
      else p.sel = null;
      render();
    },
    'plan-year': function (v) { state.plan.year = +v; state.plan.sel = null; render(); },
    'plan-sel': function (v) { state.plan.sel = state.plan.sel === v ? null : v; render(); },
    'goto-plan-course': function (v) {
      var pos = planPos[state.plan.opt][v];
      if (pos) { state.plan.year = pos.year; state.plan.sel = v; render(); }
      else actions['goto-course'](v);
    },
    'goto-course': function (v) {
      state.courses.sel = v; state.courses.f = 'all'; state.courses.q = '';
      navigate('courses');
    },
    'goto-electives': function () {
      state.courses.f = 'te'; state.courses.q = ''; state.courses.sel = electives[0].code;
      navigate('courses');
    },
    'goto-career': function (v) {
      state.careers.sel = v; state.careers.f = 'all';
      navigate('careers');
    },
    'courses-filter': function (v) {
      state.courses.f = v;
      var list = filteredCourses();
      if (list.length && !list.some(function (c) { return c.code === state.courses.sel; })) state.courses.sel = list[0].code;
      render();
    },
    'courses-sel': function (v) { state.courses.sel = v; render(); },
    'careers-filter': function (v) {
      state.careers.f = v;
      var k = careerMap[state.careers.sel];
      if (v !== 'all' && k.areas.indexOf(v) < 0) {
        state.careers.sel = D.careers.filter(function (x) { return x.areas.indexOf(v) >= 0; })[0].id;
      }
      render();
    },
    'careers-sel': function (v) { state.careers.sel = v; render(); },
    'j-choose': function (v) {
      state.journey.answers[D.journey[state.journey.step].id] = v;
      render();
    },
    'j-next': function () {
      if (state.journey.step < D.journey.length - 1) state.journey.step++;
      else state.journey.done = true;
      render(true);
    },
    'j-back': function () { if (state.journey.step > 0) state.journey.step--; render(true); },
    'j-edit': function () { state.journey.done = false; state.journey.step = 0; render(true); },
    'j-reset': function () { state.journey = { step: 0, answers: {}, done: false }; render(true); }
  };

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    var act = el.getAttribute('data-act');
    var fn = actions[act];
    if (!fn) return;
    var v = el.getAttribute('data-v');
    // Keep the course list scroll position across re-renders
    var scroller = document.getElementById('course-rows');
    var top = scroller ? scroller.scrollTop : 0;
    fn(v);
    var again = document.getElementById('course-rows');
    if (again && scroller) again.scrollTop = top;
    // Return keyboard focus to the equivalent control after a re-render
    if (document.activeElement === document.body && v !== null) {
      var same = document.querySelector('[data-act="' + act + '"][data-v="' + CSS.escape(v) + '"]');
      if (same) same.focus({ preventScroll: true });
    }
  });

  document.addEventListener('input', function (e) {
    if (e.target.id !== 'course-search') return;
    state.courses.q = e.target.value;
    document.getElementById('course-rows').innerHTML = renderCourseRows();
  });

  document.getElementById('lang-btn').addEventListener('click', function () {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    store.set('lang', state.lang);
    render();
  });

  /* ---------- Start ---------- */
  state.route = routeFromHash();
  render(false);
})();
