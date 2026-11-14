# AI & Cybersecurity — Major Explorer

A bilingual (English / Arabic) website that helps prospective students understand the AI & Cybersecurity major. Built for the Computer Club exhibition booth.

## Run it

No build step and no internet connection needed. Open `index.html` in a browser.

For the booth, open it full screen (F11). The layout is tuned for 1366×768, 1440×900 and 1920×1080, and also works on tablets and phones.

To open directly in Arabic, use `index.html?lang=ar`. The language choice is remembered on that computer.

## Sections

| Section | What it does |
| --- | --- |
| Overview | What the major is, in one sentence, plus its two disciplines |
| Study plan | Four years, two semesters each. Select a course to see its prerequisites and what it leads to; filter to highlight AI or Cybersecurity courses |
| Courses | Search and filter every course, including electives |
| Careers | Eight careers with tasks, skills, preparing courses and employers |
| Future | Graduate studies, research, certifications, competitions and more |
| My journey | Three questions that produce a personal path: careers, electives and year-by-year steps |

## Editing content

- **Program content** (courses, study plan, careers, opportunities, journey questions): `js/data.js`
- **Interface text**: `js/i18n.js`
- **Design** (type scale, colors, spacing): the tokens at the top of `css/styles.css`

Every text field has an English (`en`) and Arabic (`ar`) version.

> **Before public use:** verify course codes, titles, credit hours and prerequisites in `js/data.js` against the official university catalog.

## Design system

- Fonts: IBM Plex Sans (English) and IBM Plex Sans Arabic (Arabic), self-hosted in `fonts/` under the SIL Open Font License. Regular and SemiBold weights only.
- Type scale: 26px page headings, 21px section headings, 17px body, 16px buttons and navigation, 15px secondary text.
- One accent color, taken from the club logo blue.

## Files

```
index.html
css/styles.css
js/data.js      program content
js/i18n.js      interface text
js/app.js       routing and interactions
assets/         club logo (original file) and university logo
fonts/          self-hosted fonts and license
```
