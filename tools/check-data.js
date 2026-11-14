/*
 * Consistency checks for the academic data. Run with:  node tools/check-data.js
 *
 * Verifies that the dataset reproduces the totals printed in the official
 * program document, and that every course code used anywhere in the
 * content (careers, journey, home) exists in the official dataset.
 */
'use strict';
global.window = {};
require('../js/academic.js');
require('../js/data.js');
const A = window.ACADEMIC;
const D = window.DATA;

let failures = 0;
function check(ok, msg) {
  console.log((ok ? 'ok   ' : 'FAIL ') + msg);
  if (!ok) failures++;
}

const byCode = {};
A.courses.forEach(c => {
  check(!byCode[c.code], 'unique code ' + c.code);
  byCode[c.code] = c;
});

/* Published "Courses By Areas" totals (p. 3) */
const areaTotals = { math: [6, 20], gen: [10, 22], found: [4, 12], cs: [13, 39], ai: [4, 12], sec: [4, 12], aisec: [2, 6], te: [1, 3] };
Object.keys(areaTotals).forEach(area => {
  const list = A.courses.filter(c => c.area === area && !c.elective);
  const cr = list.reduce((s, c) => s + c.cr, 0);
  check(list.length === areaTotals[area][0] && cr === areaTotals[area][1],
    `area ${area}: ${list.length} courses / ${cr} CR (published ${areaTotals[area].join(' / ')})`);
});

/* Degree plans */
Object.keys(A.plans).forEach(id => {
  const plan = A.plans[id];
  let total = 0;
  const seen = {};
  plan.years.forEach(y => {
    const terms = y.terms.slice();
    if (y.summer) terms.push(y.summer);
    terms.forEach((t, i) => {
      t.courses.forEach(code => {
        check(!!byCode[code], `${id} ${y.id} term ${i + 1}: ${code} exists`);
        check(!seen[code], `${id}: ${code} appears once`);
        seen[code] = true;
      });
      const sum = t.courses.reduce((s, code) => s + (byCode[code] ? byCode[code].cr : 0), 0);
      check(sum === t.cr, `${id} ${y.id} term ${i + 1}: course sum ${sum} = published ${t.cr}`);
      total += sum;
    });
  });
  check(total === plan.total, `${id}: program total ${total} = published ${plan.total}`);
  /* Every required (non-elective) course must be in each plan, except the other option's training course */
  A.courses.filter(c => !c.elective).forEach(c => {
    const other = id === 'st' ? 'AISC 398' : id === 'int' ? 'AISC 399' : '';
    if (c.code === other) return;
    if (id === 'int' && c.code === 'XE xxx') return; // internship replaces the technical elective
    check(!!seen[c.code], `${id}: required course ${c.code} is placed`);
  });
});

/* Content references */
function refs(label, codes) {
  codes.forEach(code => check(!!byCode[code], `${label} references real course ${code}`));
}
D.careers.forEach(k => refs('career ' + k.id, k.courses));
Object.keys(D.journeyResults.subjects).forEach(k => refs('journey subjects ' + k, D.journeyResults.subjects[k]));
Object.keys(D.fields).forEach(k => refs('home field ' + k, D.fields[k].courses));
A.courses.forEach(c => check(!!D.courseText[c.code], `explanation exists for ${c.code}`));
Object.keys(D.courseText).forEach(code => check(!!byCode[code], `explanation ${code} matches an official course`));

console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed');
process.exit(failures ? 1 : 0);
