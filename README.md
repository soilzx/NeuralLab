# AI & Cybersecurity — Major Explorer

A bilingual (English / Arabic) website that helps prospective students understand KFUPM's B.S. in Artificial Intelligence and Cybersecurity. Built for the Computer Club exhibition booth.

## Run it

No build step and no internet connection needed. Open `index.html` in a browser.

For the booth, open it full screen (F11). The layout is tuned for 1366×768, 1440×900 and 1920×1080, and also works on tablets and phones.

To open directly in Arabic, use `index.html?lang=ar`. The language choice is remembered on that computer.

## Sections

| Section | What it does |
| --- | --- |
| Overview | Program introduction, institutional facts with the official credit totals, the two fields with their required courses, and links to every section |
| Study plan | Choose **Summer Training** (127 CR) or **Internship** (129 CR), then **Freshman / Sophomore / Junior / Senior**, and select a course for its explanation and official prerequisites |
| Courses | All program courses and the 27 official technical electives, searchable and grouped by the official areas |
| Careers | Eight illustrative careers linked to real program courses |
| Future | Opportunities after and beyond the degree |
| My journey | Six questions that produce an interest-based educational suggestion: main interest, related courses, career directions and a future challenge |

## Academic data

All academic facts come from the official program document *Bachelor of Science in Artificial Intelligence and Cybersecurity* (KFUPM ICS Department, 20 January 2026).

| File | Contents |
| --- | --- |
| `js/academic.js` | **Official facts only:** codes, titles, credits, prerequisites, both degree plans, technical elective list |
| `js/data.js` | Explanations, Arabic explanatory titles, careers, journey, future (not official) |
| `docs/VERIFICATION.md` | Sources, corrections, unresolved discrepancies in the source, accreditation status, test results |

After any change to the data, run:

```
node tools/check-data.js
```

It confirms that every term total, program total and area total still matches the published figures, and that every course referenced in the content exists in the official data.

## Editing

- **Academic facts:** `js/academic.js`. Change only to match a newer official document.
- **Explanations and guidance:** `js/data.js`
- **Interface text:** `js/i18n.js`
- **Design** (type scale, colors, spacing): the tokens at the top of `css/styles.css`

Every text field has an English (`en`) and Arabic (`ar`) version.

## Design system

- Fonts: IBM Plex Sans (English) and IBM Plex Sans Arabic (Arabic), self-hosted in `fonts/` under the SIL Open Font License. Regular and SemiBold weights only.
- Type scale: 26px page headings, 21px section headings, 17px body, 16px buttons and navigation, 15px secondary text.
- One accent color, taken from the club logo blue.

## Files

```
index.html
css/styles.css
js/academic.js     official academic data
js/data.js         explanations and guidance
js/i18n.js         interface text
js/app.js          routing and interactions
tools/check-data.js
docs/VERIFICATION.md
assets/            club logo (original file) and university logo
fonts/             self-hosted fonts and license
```
