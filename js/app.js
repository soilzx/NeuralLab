(function () {
  'use strict';

  var D = window.DATA;
  var S = window.STRINGS;
  var ROUTES = ['home', 'plan', 'courses', 'careers', 'future', 'journey'];

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
    plan: { year: 1, sel: null, show: 'all' },
    courses: { q: '', f: 'all', sel: null },
    careers: { f: 'all', sel: D.careers[0].id },
    journey: { step: 0, answers: {}, done: false }
  };

  /* ---------- Indexes ---------- */
  var courseMap = {};
  D.courses.forEach(function (c) { courseMap[c.code] = c; });

  var planPos = {};     // code -> { year, term }   term: 0 fall, 1 spring, 2 summer
  var planOrder = [];   // course codes in plan order
  var totalCredits = 0;
  var planCourseCount = 0;
  D.plan.forEach(function (y) {
    y.terms.forEach(function (items, ti) {
      items.forEach(function (it) {
        planCourseCount++;
        if (typeof it === 'string') {
          planPos[it] = { year: y.year, term: ti };
          planOrder.push(it);
          totalCredits += courseMap[it].cr;
        } else {
          totalCredits += it.cr;
        }
      });
    });
    if (y.summer) {
      planPos[y.summer] = { year: y.year, term: 2 };
      planOrder.push(y.summer);
    }
  });

  var dependents = {};
  D.courses.forEach(function (c) {
    c.pre.forEach(function (p) { (dependents[p] = dependents[p] || []).push(c.code); });
  });

  var careerMap = {};
  var careersByCourse = {};
  D.careers.forEach(function (k) {
    careerMap[k.id] = k;
    k.courses.forEach(function (code) { (careersByCourse[code] = careersByCourse[code] || []).push(k.id); });
  });

  var electives = D.courses.filter(function (c) { return c.elective; });

  var orderedCourses = planOrder.map(function (code) { return courseMap[code]; }).concat(electives);

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

  function termName(ti) { return ti === 2 ? t().summer : t().terms[ti]; }

  function seg(act, options, current, label) {
    return '<div class="seg" role="group" aria-label="' + attr(label) + '">' +
      options.map(function (o) {
        return '<button type="button" data-act="' + act + '" data-v="' + attr(o.v) + '"' + pressed(String(o.v) === String(current)) + '>' + esc(o.label) + '</button>';
      }).join('') + '</div>';
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

  /* ---------- Home ---------- */
  function renderHome() {
    var s = t();
    return '<div class="container home"><div class="home-grid">' +
      '<div class="home-intro">' +
        '<h1 tabindex="-1">' + esc(s.homeTitle) + '</h1>' +
        '<p>' + esc(s.homeIntro) + '</p>' +
        '<div class="home-actions">' +
          '<a class="btn btn-primary" href="#/journey">' + esc(s.homeStart) + '</a>' +
          '<a class="btn btn-secondary" href="#/plan">' + esc(s.homePlan) + '</a>' +
        '</div>' +
        '<div class="facts">' +
          '<div><strong>' + D.plan.length + '</strong>' + esc(s.factYears) + '</div>' +
          '<div><strong>' + totalCredits + '</strong>' + esc(s.factCredits) + '</div>' +
          '<div><strong>' + planCourseCount + '</strong>' + esc(s.factCourses) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="disciplines">' +
        '<section class="discipline"><h2>' + esc(L(D.areas.ai)) + '</h2><ul class="bullets">' +
          s.homeAiPoints.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></section>' +
        '<section class="discipline"><h2>' + esc(L(D.areas.sec)) + '</h2><ul class="bullets">' +
          s.homeSecPoints.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></section>' +
      '</div>' +
    '</div></div>';
  }

  /* ---------- Shared course detail ---------- */
  function courseLinks(codes, act) {
    if (!codes || !codes.length) return '<p class="muted">' + esc(t().none) + '</p>';
    return '<ul class="link-list">' + codes.map(function (code) {
      var c = courseMap[code];
      return '<li><button type="button" class="link-btn" data-act="' + act + '" data-v="' + attr(code) + '">' +
        '<span class="code">' + esc(code) + '</span>' + esc(L(c.t)) + '</button></li>';
    }).join('') + '</ul>';
  }

  function courseMeta(c) {
    var s = t();
    var parts = [c.code];
    if (c.cr > 0) parts.push(s.credits(c.cr));
    if (c.elective) parts.push(s.techElective);
    else if (planPos[c.code]) parts.push(s.inPlan(planPos[c.code].year, termName(planPos[c.code].term)));
    // Isolate each part so mixed Arabic/Latin text keeps its order in RTL
    return parts.map(function (x) { return '<bdi>' + esc(x) + '</bdi>'; }).join(' · ');
  }

  function courseDetail(code, linkAct, withCareers) {
    var s = t();
    var c = courseMap[code];
    var html = '<h2>' + esc(L(c.t)) + '</h2>' +
      '<div class="meta">' + courseMeta(c) + '</div>' +
      '<p>' + esc(L(c.d)) + '</p>' +
      '<div class="detail-section"><h3>' + esc(s.prerequisites) + '</h3>' + courseLinks(c.pre, linkAct) + '</div>' +
      '<div class="detail-section"><h3>' + esc(s.leadsTo) + '</h3>' + courseLinks(dependents[code], linkAct) + '</div>';
    if (withCareers && careersByCourse[code]) {
      html += '<div class="detail-section"><h3>' + esc(s.usedIn) + '</h3><ul class="link-list">' +
        careersByCourse[code].map(function (id) {
          return '<li><button type="button" class="link-btn" data-act="goto-career" data-v="' + id + '">' + esc(L(careerMap[id].t)) + '</button></li>';
        }).join('') + '</ul></div>';
    }
    return html;
  }

  /* ---------- Study plan ---------- */
  function planRow(code, related, show) {
    var c = courseMap[code];
    var sel = state.plan.sel === code;
    var dim = show !== 'all' && c.areas.indexOf(show) < 0;
    var cls = 'row' + (related[code] ? ' is-related' : '') + (dim ? ' is-dim' : '');
    return '<li><button type="button" class="' + cls + '" data-act="plan-sel" data-v="' + attr(code) + '"' + pressed(sel) + '>' +
      '<span class="code">' + esc(code) + '</span>' +
      '<span class="title">' + esc(L(c.t)) + '</span>' +
      '<span class="cr">' + (c.cr || '') + '</span></button></li>';
  }

  function slotRow(slot, key, show) {
    var s = t();
    var sel = state.plan.sel === key;
    var dim = show !== 'all' && slot.slot === 'free';
    return '<li><button type="button" class="row slot' + (dim ? ' is-dim' : '') + '" data-act="plan-sel" data-v="' + key + '"' + pressed(sel) + '>' +
      '<span class="code">—</span>' +
      '<span class="title">' + esc(slot.slot === 'tech' ? s.techElective : s.freeElective) + '</span>' +
      '<span class="cr">' + slot.cr + '</span></button></li>';
  }

  function renderPlan() {
    var s = t();
    var p = state.plan;
    var yr = D.plan[p.year - 1];

    var related = {};
    if (p.sel && courseMap[p.sel]) {
      courseMap[p.sel].pre.forEach(function (c) { related[c] = true; });
      (dependents[p.sel] || []).forEach(function (c) { related[c] = true; });
    }

    var terms = yr.terms.map(function (items, ti) {
      var credits = 0;
      var rows = items.map(function (it, i) {
        if (typeof it === 'string') { credits += courseMap[it].cr; return planRow(it, related, p.show); }
        credits += it.cr;
        return slotRow(it, 'slot:' + it.slot + ':' + ti + '-' + i, p.show);
      }).join('');
      return '<section class="term"><div class="term-head"><h2>' + esc(s.terms[ti]) + '</h2><span>' + esc(s.credits(credits)) + '</span></div>' +
        '<ul class="rows">' + rows + '</ul></section>';
    }).join('');

    if (yr.summer) {
      terms += '<section class="term summer"><div class="term-head"><h2>' + esc(s.summer) + '</h2></div>' +
        '<ul class="rows">' + planRow(yr.summer, related, p.show) + '</ul></section>';
    }

    var detail;
    if (!p.sel) {
      detail = '<p class="detail-hint">' + esc(s.planHint) + '</p>';
    } else if (p.sel.indexOf('slot:tech') === 0) {
      detail = '<h2>' + esc(s.techElective) + '</h2><div class="meta">' + esc(s.credits(3)) + '</div>' +
        '<p>' + esc(s.techElectiveText) + '</p>' +
        '<div class="detail-section"><h3>' + esc(s.options) + '</h3>' +
        courseLinks(electives.filter(function (c) { return p.show === 'all' || c.areas.indexOf(p.show) >= 0; })
          .map(function (c) { return c.code; }), 'goto-course') + '</div>';
    } else if (p.sel.indexOf('slot:free') === 0) {
      detail = '<h2>' + esc(s.freeElective) + '</h2><div class="meta">' + esc(s.credits(3)) + '</div>' +
        '<p>' + esc(s.freeElectiveText) + '</p>';
    } else {
      detail = courseDetail(p.sel, 'goto-plan-course', false);
    }

    var years = D.plan.map(function (y) { return { v: y.year, label: s.yearN(y.year) }; });
    var shows = [{ v: 'all', label: s.all }, { v: 'ai', label: s.areaShort.ai }, { v: 'sec', label: s.areaShort.sec }];

    return '<div class="container page">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.planTitle) + '</h1>' +
        '<div class="controls">' + seg('plan-year', years, p.year, s.year) + seg('plan-show', shows, p.show, s.show) + '</div>' +
      '</div>' +
      '<div class="split"><div class="terms">' + terms + '</div>' +
        '<aside class="detail" aria-live="polite">' + detail + '</aside></div>' +
    '</div>';
  }

  /* ---------- Courses ---------- */
  function filteredCourses() {
    var c = state.courses;
    var q = c.q.trim().toLowerCase();
    return orderedCourses.filter(function (x) {
      if (c.f === 'elective') { if (!x.elective) return false; }
      else if (c.f !== 'all' && x.areas.indexOf(c.f) < 0) return false;
      if (!q) return true;
      return (x.code + ' ' + x.code.replace(' ', '') + ' ' + x.t.en + ' ' + x.t.ar).toLowerCase().indexOf(q) >= 0;
    });
  }

  function renderCourseRows() {
    var list = filteredCourses();
    if (!list.length) return '<p class="empty">' + esc(t().noResults) + '</p>';
    return '<ul class="rows">' + list.map(function (c) {
      return '<li><button type="button" class="row" data-act="courses-sel" data-v="' + attr(c.code) + '"' + pressed(state.courses.sel === c.code) + '>' +
        '<span class="code">' + esc(c.code) + '</span>' +
        '<span class="title">' + esc(L(c.t)) + '</span>' +
        '<span class="cr">' + (c.cr || '') + '</span></button></li>';
    }).join('') + '</ul>';
  }

  function renderCourses() {
    var s = t();
    var c = state.courses;
    if (!c.sel) c.sel = orderedCourses[0].code;
    var filters = [{ v: 'all', label: s.all }].concat(['core', 'ai', 'sec', 'math', 'gen'].map(function (a) {
      return { v: a, label: s.areaShort[a] };
    })).concat([{ v: 'elective', label: s.electives }]);

    return '<div class="container page">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.coursesTitle) + '</h1>' +
        '<div class="controls">' + seg('courses-filter', filters, c.f, s.show) + '</div></div>' +
      '<div class="split"><div>' +
          '<input class="search" type="search" id="course-search" placeholder="' + attr(s.search) + '" aria-label="' + attr(s.search) + '" value="' + attr(c.q) + '" autocomplete="off">' +
          '<div class="list-scroll" id="course-rows">' + renderCourseRows() + '</div>' +
        '</div>' +
        '<aside class="detail" aria-live="polite">' + courseDetail(c.sel, 'goto-course', true) + '</aside></div>' +
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
      '</div>';

    var filters = [{ v: 'all', label: s.all }, { v: 'ai', label: s.areaShort.ai }, { v: 'sec', label: s.areaShort.sec }];

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
    var score = {};
    D.journey.forEach(function (q) {
      var opt = q.options.filter(function (o) { return o.id === answers[q.id]; })[0];
      if (!opt) return;
      Object.keys(opt.pts).forEach(function (k) { score[k] = (score[k] || 0) + opt.pts[k]; });
    });

    var ai = score.ai || 0;
    var sec = score.sec || 0;
    var dir = ai - sec >= 2 ? 'ai' : sec - ai >= 2 ? 'sec' : 'both';

    var ranked = D.careers.map(function (k, i) {
      var bonus = dir === 'both' ? (k.areas.length > 1 ? 1 : 0) : (k.areas.indexOf(dir) >= 0 ? 1 : 0);
      return { k: k, v: (score[k.id] || 0) + bonus, i: i };
    }).sort(function (a, b) { return b.v - a.v || a.i - b.i; }).slice(0, 3).map(function (x) { return x.k; });

    var picks = [];
    ranked.forEach(function (k) {
      k.courses.forEach(function (code) {
        if (courseMap[code].elective && picks.indexOf(code) < 0) picks.push(code);
      });
    });
    electives.forEach(function (c) {
      if ((dir === 'both' || c.areas.indexOf(dir) >= 0) && picks.indexOf(c.code) < 0) picks.push(c.code);
    });

    return { dir: dir, careers: ranked, electives: picks.slice(0, 3), place: answers.place || 'industry' };
  }

  function renderJourney() {
    var s = t();
    var j = state.journey;
    var n = D.journey.length;

    if (j.done) {
      var r = journeyResult();
      var m = s.milestones;
      var steps = [
        [s.yearN(1), m.y1],
        [s.yearN(2), m.y2[r.dir]],
        [s.yearN(3), m.y3[r.place]],
        [s.yearN(4), m.y4[r.dir]],
        [s.afterGrad, m.after[r.place]]
      ];
      return '<div class="container page">' +
        '<div class="page-head"><h1 tabindex="-1">' + esc(s.yourPath) + '</h1>' +
          '<button type="button" class="btn btn-secondary" data-act="j-reset">' + esc(s.startOver) + '</button></div>' +
        '<p class="result-lead">' + esc(s.direction[r.dir]) + '</p>' +
        '<div class="result-grid">' +
          '<section><h2>' + esc(s.fitCareers) + '</h2><ul class="link-list">' +
            r.careers.map(function (k) {
              return '<li><button type="button" class="link-btn" data-act="goto-career" data-v="' + k.id + '">' + esc(L(k.t)) + '</button></li>';
            }).join('') + '</ul></section>' +
          '<section><h2>' + esc(s.electivesToConsider) + '</h2>' + courseLinks(r.electives, 'goto-course') + '</section>' +
          '<section><h2>' + esc(s.yearByYear) + '</h2><ol class="timeline">' +
            steps.map(function (x) {
              return '<li><span class="when">' + esc(x[0]) + '</span><span>' + esc(x[1]) + '</span></li>';
            }).join('') + '</ol></section>' +
        '</div>' +
      '</div>';
    }

    var q = D.journey[j.step];
    var chosen = j.answers[q.id];
    var last = j.step === n - 1;

    return '<div class="container page"><div class="journey">' +
      '<div class="page-head"><h1 tabindex="-1">' + esc(s.journeyTitle) + '</h1></div>' +
      '<div class="journey-step">' + esc(s.stepOf(j.step + 1, n)) + '</div>' +
      '<div class="progress" aria-hidden="true"><span style="width:' + Math.round(((j.step + (chosen ? 1 : 0)) / n) * 100) + '%"></span></div>' +
      '<h2 id="q-title">' + esc(L(q.q)) + '</h2>' +
      '<div class="choices choices-' + q.options.length + '" role="group" aria-labelledby="q-title">' + q.options.map(function (o) {
        return '<button type="button" class="choice" data-act="j-choose" data-v="' + o.id + '"' + pressed(chosen === o.id) + '>' + esc(L(o.t)) + '</button>';
      }).join('') + '</div>' +
      '<div class="journey-nav">' +
        '<button type="button" class="btn btn-secondary" data-act="j-back"' + (j.step === 0 ? ' disabled' : '') + '>' + esc(s.back) + '</button>' +
        '<button type="button" class="btn btn-primary" data-act="j-next"' + (chosen ? '' : ' disabled') + '>' + esc(last ? s.seePath : s.next) + '</button>' +
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
    'plan-year': function (v) { state.plan.year = +v; state.plan.sel = null; render(); },
    'plan-show': function (v) { state.plan.show = v; render(); },
    'plan-sel': function (v) { state.plan.sel = state.plan.sel === v ? null : v; render(); },
    'goto-plan-course': function (v) {
      var pos = planPos[v];
      if (pos) state.plan.year = pos.year;
      state.plan.sel = v;
      render();
    },
    'goto-course': function (v) {
      state.courses.sel = v; state.courses.f = 'all'; state.courses.q = '';
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
    'j-reset': function () { state.journey = { step: 0, answers: {}, done: false }; render(true); }
  };

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    var fn = actions[el.getAttribute('data-act')];
    if (!fn) return;
    var act = el.getAttribute('data-act');
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
