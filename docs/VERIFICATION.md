# Academic data verification report

Program: **Bachelor of Science in Artificial Intelligence and Cybersecurity (AISC)**, King Fahd University of Petroleum & Minerals, Information & Computer Science Department, College of Computing and Mathematics.

## Sources

| Source | Status |
| --- | --- |
| Program document *Bachelor of Science in Artificial Intelligence and Cybersecurity*, dated 20-Jan-2026 (file `BSc_AI_CyS_v7.pdf`, 27 pages), supplied by the club | **Used.** All pages read: Courses By Areas (pp. 3–6), Summer Training degree plan (pp. 7–8), Internship degree plan (pp. 9–10), flow charts (pp. 11–12 and 26–27), course descriptions (pp. 13–25). Fully legible. |
| Official program page: https://ics.kfupm.edu.sa/academics/undergraduate-programs/b.s.-in-artificial-intelligence-and-cybersecurity | **Not reachable** from the build environment (network policy). The site links to it but nothing on the site depends on it. Someone with access should confirm that the page's degree-plan images match the PDF. |
| ABET accredited-program search (amspub.abet.org) | **Not reachable** from the build environment. |

## How the data is organized

| File | Contains | Status |
| --- | --- | --- |
| `js/academic.js` | Course codes, official English titles, LT-LB-CR, credit hours, area, published prerequisite text, both degree plans with published term totals, the technical elective list | **Official facts only**, transcribed from the PDF |
| `js/data.js` | Explanatory Arabic titles, plain-language course explanations, homepage field text, careers, future opportunities, journey questions | **Explanatory / illustrative.** Not official |
| `tools/check-data.js` | Automated consistency checks | Run `node tools/check-data.js` |

Every course shown anywhere on the site (plan, course explorer, careers, journey results, homepage) is looked up by code in `js/academic.js`. `tools/check-data.js` fails if any content references a code that is not in the official dataset.

## Confirmed totals

| | Summer Training option | Internship option |
| --- | --- | --- |
| Freshman (Term 1 / Term 2) | 16 / 16 | 16 / 16 |
| Sophomore | 18 / 16 | 18 / 18 |
| Junior | 15 / 15 | 18 / 19 |
| Summer Session (after Junior) | 1 (AISC 399) | — |
| Senior | 15 / 15 | 6 / 18 (AISC 398 in Term 1) |
| **Program total** | **127** | **129** |

The automated checks recompute every term total, both program totals and every "Courses By Areas" total (Math 20, General Studies 22, Digital & Business Foundations 12, Computer Science 39, AI 12, Cybersecurity 12, AI + SC 6, Technical Electives 3) from the individual course credits. **All match the published figures.**

The difference between the options is consistent: Internship = 127 − AISC 399 (1) − XE xxx technical elective (3) + AISC 398 (6) = 129.

## Corrections to the previous website

The previous site used a made-up plan (126 credit hours, 45 courses). Only 10 of its course records matched the official code and title. Everything has been replaced from the PDF.

**Removed (not in the program):** MATH 225, PHYS 101, PHYS 102, ICS 390, COE 202, ICS 233, ICS 431, ICS 413, ICS 399, ICS 411, ICS 412, ICS 264, ICS 446, ICS 448, ICS 484, ICS 443, ICS 447, ICS 449.

**Wrong titles fixed (code exists, title was wrong):**

| Code | Previously shown | Official |
| --- | --- | --- |
| ICS 471 | Natural Language Processing | Deep Learning |
| ICS 472 | Deep Learning | Natural Language Processing |
| ICS 442 | Network Security | Penetration Testing and Ethical Hacking |
| ICS 445 | Secure Software Development | Network Management and Security (technical elective) |
| ICS 487 | Machine Learning for Cybersecurity | Intelligent Decision Support Systems (technical elective) |
| ICS 486 | Generative AI and Large Language Models | Agent-Based Systems and Swarm Intelligence (technical elective) |
| ICS 440 | Cryptography | Cryptography and Blockchain Applications |
| ICS 343 | Computer Networks | Fundamentals of Computer Networks |
| ICS 104 | Introduction to Programming in Python | Intro. to Program. in Python & C |
| IAS 111 | Islamic Studies | Belief and its Consequences |
| IAS 121 | Arabic Writing | Language Foundation |
| STAT 201 | Probability and Statistics | Probability and Statistics for Engineers and Scientists |
| ENGL 214 | Academic and Professional Communication | Academic & Prof. Communication |

**Wrong placements fixed:** ICS 253 (now Freshman T2), ICS 343 (Sophomore T2), ICS 381 (Junior T1), ICS 321 (Junior T2), ICS 353 (Junior T2), ICS 440 (Junior T1), ICS 472 (Senior T2), and ICS 483 (was an elective; it is a required Senior course).

**Added (official courses that were missing):** MATH 201, MATH 208, IAS 212, CGS 392, PE 101, GS xxx, IAS xxx, DATA 211, COE 292, BUS 200, ICS 433, AISC 411, AISC 412, SWE 206, COE 233, DATA 391, COE 426, SWE 445, ICS 467, ICS 476, XE xxx, AISC 399, AISC 398, and the 27 official technical electives.

**Prerequisites:** the previous site's prerequisites were invented. They are replaced by the published prerequisite text, shown word for word.

**Other fixes:**
- The homepage statistics (4 years / 126 credit hours / 40 courses) are removed.
- Both official totals are now shown, each labelled with its option.
- Careers, journey results and homepage now reference only official courses.
- The "Future" section no longer claims club activities or incubator support that could not be verified.

## Discrepancies inside the official document (unresolved)

These are inconsistencies in the source itself. The site shows the published data and, where it affects students, a short note. **Please confirm them with the ICS department.**

1. **Senior Design Project codes.** The course tables, Internship plan and flow charts use **AISC 411 / AISC 412**. The Summer Training plan prints **"ASIC 411 / ASIC 412"**, and the course descriptions use **ICS 411 / ICS 412** (AISC 412's prerequisite is printed as "ICS 411"). The site uses AISC and notes the ICS codes.
2. **STAT 201 title.** "Probability and Statistics for Engineers and Scientists" in the course table, but "Introduction to Probability and Statistics" in both degree plans. The site uses the course-table title and notes the other.
3. **STAT 319 in prerequisites.** ICS 381 (co-requisite), ICS 471, ICS 485 and ICS 440 list STAT 319, and so do several electives. STAT 319 is not in either degree plan; STAT 201 is. The site shows the text as published.
4. **SWE 363 in a prerequisite.** The Senior Design Project I prerequisite lists SWE 363, which appears only as a technical elective.
5. **"Senior Standing" courses placed in the Junior year.** COE 426 and ICS 467 require "Senior Standing", but the Internship plan places them in the Junior year. The Internship flow chart also shows ICS 344 as a co-requisite of COE 426.
6. **Number of technical electives replaced by the Internship.** Page 6 says "Two technical electives are replaced with internship – 6 CRs", but both plans contain only one technical elective (XE xxx, 3 CR). The published totals (127 / 129) are consistent with one elective.
7. **ICS 445 prerequisite.** Published as COE 466 (Quantum Architecture and Algorithms). This looks unusual and may be a typo.
8. **Area table row "Summer Training / Internship".** It shows "Total 1" credit, although AISC 398 is 6 credits.
9. **Not published.** Prerequisites for SWE 445, ICS 104, BUS 200, MATH 101/102/201/208, STAT 201 and the General Studies courses are not given. The site says "Not stated in the program document". Credit hours for the individual technical electives are also not listed; the elective slot (XE xxx) is 3 CR.
10. **Flow-chart arrows not transcribed.** Prerequisite relations come from the written course descriptions only. The one exception is AISC 399 / AISC 398, whose prerequisite box ("ENGL 214 and SWE 206 and ICS 321 and ICS 381 and ICS 344") is printed in the flow charts.
11. **Arabic course titles.** No official Arabic titles are published. The Arabic names on the site are explanatory translations, and the official English title is always shown in the Arabic course details.

## Accreditation

**Not verified. No accreditation claim or logo is displayed.**

- The program document makes no accreditation statement.
- The program appears to be new: several courses are marked "NEW", and the document is dated January 2026.
- Web searches found ABET information for other KFUPM programs (for example, Computer Engineering), but no source confirming ABET accreditation of *this* degree. The ABET database could not be reached.
- Accreditation of other programs or of the university does not transfer to this degree.

The homepage shows only institutional facts taken from the document (university, department, college), the official credit totals, and a link to the official program page.

## Test results

- `node tools/check-data.js`: all checks pass (codes unique; every placed code exists; every term, program and area total matches the PDF; every required course is placed in each plan; every content reference is a real code).
- **Browser tests:** for both options and all four years, the rendered plan equals the dataset course-for-course, with matching term credit totals.
- **Interactions tested:** plan option and year selection; course selection follows when switching options; prerequisite links; course search and area filters; career-to-course links; all six journey questions; Back; Change my answers; switching language mid-journey keeps progress; Start over; results for each answer pattern; homepage field tabs.
- **Layout:** every page fits without scrolling at 1366×768, 1440×900 and 1920×1080 in English and Arabic. No horizontal overflow at 390 px (phone). No console errors.
