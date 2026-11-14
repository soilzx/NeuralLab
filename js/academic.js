/*
 * OFFICIAL ACADEMIC DATA — single source of truth for every course,
 * credit hour, prerequisite and semester placement shown on the site.
 *
 * Source: "Bachelor of Science in Artificial Intelligence and
 * Cybersecurity" program document, KFUPM Information & Computer Science
 * Department, dated 20-Jan-2026 (file BSc_AI_CyS_v7.pdf):
 *   - "Courses By Areas" tables (pp. 3–6): code, title, LT-LB-CR, credits
 *   - "Degree Plan" — Summer Training Option (pp. 7–8)
 *   - "Degree Plan" — Internship Option (pp. 9–10)
 *   - Course flow charts (pp. 11–12, 26–27)
 *   - Course descriptions (pp. 13–25): prerequisite text
 *
 * Rules for this file:
 *   - Only facts printed in the source document. No inferred data.
 *   - `title` is the official English title exactly as published in the
 *     "Courses By Areas" table (abbreviations kept).
 *   - `prereq` is the prerequisite text exactly as published in the
 *     course description. `null` means the document gives none.
 *   - Arabic titles and plain-language explanations are NOT here; they
 *     live in data.js and are explanatory, not official.
 *
 * Known discrepancies inside the source are recorded in `notes` and in
 * docs/VERIFICATION.md.
 */
window.ACADEMIC = {
  source: {
    program: 'Bachelor of Science in Artificial Intelligence and Cybersecurity',
    university: 'King Fahd University of Petroleum & Minerals',
    college: 'College of Computing and Mathematics',
    department: 'Information & Computer Science Department',
    date: '2026-01-20',
    document: 'BSc_AI_CyS_v7.pdf',
    url: 'https://ics.kfupm.edu.sa/academics/undergraduate-programs/b.s.-in-artificial-intelligence-and-cybersecurity'
  },

  /* Areas as named in the "Courses By Areas" tables */
  areas: ['math', 'gen', 'found', 'cs', 'ai', 'sec', 'aisec', 'te', 'train'],

  courses: [
    /* ---- Math & Science (6 courses, 20 CR) ---- */
    { code: 'MATH 101', title: 'Calculus I', hours: '4-0-4', cr: 4, area: 'math', prereq: null },
    { code: 'MATH 102', title: 'Calculus II', hours: '4-0-4', cr: 4, area: 'math', prereq: null },
    { code: 'MATH 201', title: 'Calculus III', hours: '3-0-3', cr: 3, area: 'math', prereq: null },
    { code: 'MATH 208', title: 'Differential Equations & Linear Algebra', hours: '3-0-3', cr: 3, area: 'math', prereq: null },
    { code: 'STAT 201', title: 'Probability and Statistics for Engineers and Scientists', hours: '3-1-3', cr: 3, area: 'math', prereq: null,
      notes: 'The degree plans list this course as "Introduction to Probability and Statistics".' },
    { code: 'ICS 253', title: 'Discrete Structures', hours: '3-0-3', cr: 3, area: 'math', prereq: 'ICS 104' },

    /* ---- General Studies (10 courses, 22 CR) ---- */
    { code: 'ENGL 101', title: 'Introduction to Academic Discourse', hours: '3-0-3', cr: 3, area: 'gen', prereq: null },
    { code: 'ENGL 102', title: 'Introduction to Report Writing', hours: '3-0-3', cr: 3, area: 'gen', prereq: null },
    { code: 'ENGL 214', title: 'Academic & Prof. Communication', hours: '3-0-3', cr: 3, area: 'gen', prereq: null },
    { code: 'IAS 111', title: 'Belief and its Consequences', hours: '2-0-2', cr: 2, area: 'gen', prereq: null },
    { code: 'IAS 121', title: 'Language Foundation', hours: '2-0-2', cr: 2, area: 'gen', prereq: null },
    { code: 'IAS 212', title: 'Ethics and Governance', hours: '2-0-2', cr: 2, area: 'gen', prereq: null },
    { code: 'CGS 392', title: 'Career Essentials', hours: '0-2-1', cr: 1, area: 'gen', prereq: null },
    { code: 'PE 101', title: 'Health & Physical Education I', hours: '0-2-1', cr: 1, area: 'gen', prereq: null },
    { code: 'GS xxx', title: 'GS Elective', hours: '3-0-3', cr: 3, area: 'gen', prereq: null, slot: true },
    { code: 'IAS xxx', title: 'Islamic/Arabic Elective', hours: '2-0-2', cr: 2, area: 'gen', prereq: null, slot: true },

    /* ---- Digital & Business Foundations (4 courses, 12 CR) ---- */
    { code: 'ICS 104', title: 'Intro. to Program. in Python & C', hours: '2-3-3', cr: 3, area: 'found', prereq: null },
    { code: 'DATA 211', title: 'Intro. to Data Science', hours: '3-0-3', cr: 3, area: 'found', prereq: 'MATH 102 or MATH 106, ICS 104' },
    { code: 'COE 292', title: 'Intro. to Artificial Intelligence', hours: '3-0-3', cr: 3, area: 'found', prereq: 'DATA 211' },
    { code: 'BUS 200', title: 'Business & Entrepreneurship', hours: '3-0-3', cr: 3, area: 'found', prereq: null },

    /* ---- Core: Computer Science (10), Software Eng. (1), Computer Eng. (1), Data Science & Eng. (1) = 13 courses, 39 CR ---- */
    { code: 'ICS 108', title: 'Object-Oriented Programming', hours: '3-3-4', cr: 4, area: 'cs', prereq: 'ICS 104' },
    { code: 'ICS 202', title: 'Data Structures and Algorithms', hours: '3-3-4', cr: 4, area: 'cs', prereq: 'ICS 108' },
    { code: 'ICS 343', title: 'Fundamentals of Computer Networks', hours: '3-3-4', cr: 4, area: 'cs', prereq: 'ICS201 Or ICS108' },
    { code: 'ICS 321', title: 'Database Systems', hours: '3-0-3', cr: 3, area: 'cs', prereq: 'ICS 202' },
    { code: 'ICS 381', title: 'Principles of Artificial Intelligence', hours: '3-0-3', cr: 3, area: 'cs', prereq: 'ICS 253', coreq: 'STAT 319' },
    { code: 'ICS 353', title: 'Design and Analysis of Algorithms', hours: '3-0-3', cr: 3, area: 'cs', prereq: 'ICS 202, ICS 253' },
    { code: 'ICS 344', title: 'Information Security', hours: '3-0-3', cr: 3, area: 'cs', prereq: 'ICS 343 or COE 344' },
    { code: 'ICS 433', title: 'Operating Systems', hours: '3-1-3', cr: 3, area: 'cs', prereq: 'COE 233 or COE 301' },
    { code: 'AISC 411', title: 'Senior Design Project I', hours: '0-0-0', cr: 0, area: 'cs', prereq: 'ENGL 214, ICS 321, SWE 206, SWE 363',
      notes: 'The course description is published under the code ICS 411. The Summer Training degree plan prints the code as "ASIC 411".' },
    { code: 'AISC 412', title: 'Senior Design Project II', hours: '3-0-3', cr: 3, area: 'cs', prereq: 'ICS 411',
      notes: 'The course description is published under the code ICS 412 with prerequisite ICS 411 (listed in the plans as AISC 411). The Summer Training degree plan prints the code as "ASIC 412".' },
    { code: 'SWE 206', title: 'Introduction to Software Engineering', hours: '2-3-3', cr: 3, area: 'cs', prereq: 'ICS 108' },
    { code: 'COE 233', title: 'Digital Logic and Computer Organization', hours: '3-0-3', cr: 3, area: 'cs', prereq: 'ICS 104' },
    { code: 'DATA 391', title: 'Human Contexts and Ethics of Data', hours: '3-0-3', cr: 3, area: 'cs', prereq: 'COE 292' },

    /* ---- Core: Artificial Intelligence (4 courses, 12 CR) ---- */
    { code: 'ICS 485', title: 'Machine Learning', hours: '3-0-3', cr: 3, area: 'ai',
      prereq: '(COE 292 or ICS 381) and (MATH 202 or MATH 208 or MATH 260 or ICS 253) and STAT 319' },
    { code: 'ICS 471', title: 'Deep Learning', hours: '3-0-3', cr: 3, area: 'ai',
      prereq: '(COE 292 or ICS 381) and (MATH 202 or MATH 208 or MATH 260 or ICS 253) and STAT 319' },
    { code: 'ICS 483', title: 'Computer Vision', hours: '3-0-3', cr: 3, area: 'ai', prereq: 'ICS 485' },
    { code: 'ICS 472', title: 'Natural Language Processing', hours: '3-0-3', cr: 3, area: 'ai', prereq: 'ICS 471' },

    /* ---- Core: Cybersecurity (4 courses, 12 CR) ---- */
    { code: 'ICS 442', title: 'Penetration Testing and Ethical Hacking', hours: '3-0-3', cr: 3, area: 'sec', prereq: 'ICS 343 OR COE 344 OR COE 353' },
    { code: 'COE 426', title: 'Data Privacy', hours: '3-0-3', cr: 3, area: 'sec', prereq: 'Senior Standing',
      notes: 'The Internship flow chart shows ICS 344 as a co-requisite and places the course in the Junior year.' },
    { code: 'ICS 440', title: 'Cryptography and Blockchain Applications', hours: '3-0-3', cr: 3, area: 'sec', prereq: '[Math 208 OR MATH 260 OR ICS 253] AND STAT 319' },
    { code: 'SWE 445', title: 'Secure Software Development', hours: '3-0-3', cr: 3, area: 'sec', prereq: null },

    /* ---- Core: AI + SC intersectional (2 courses, 6 CR) ---- */
    { code: 'ICS 467', title: 'Security in Artificial Intelligence Systems', hours: '3-0-3', cr: 3, area: 'aisec', prereq: 'Senior Standing' },
    { code: 'ICS 476', title: 'Artificial Intelligence for Cybersecurity', hours: '3-0-3', cr: 3, area: 'aisec', prereq: 'Senior Standing' },

    /* ---- Technical elective slot (1 course, 3 CR) ---- */
    { code: 'XE xxx', title: 'Technical Elective', hours: '3-0-3', cr: 3, area: 'te', prereq: null, slot: true },

    /* ---- Summer Training OR Internship ---- */
    { code: 'AISC 399', title: 'Summer Training', hours: '0-0-1', cr: 1, area: 'train',
      prereq: 'ENGL 214 and SWE 206 and ICS 321 and ICS 381 and ICS 344', prereqSource: 'flowchart' },
    { code: 'AISC 398', title: 'Internship', hours: '0-0-6', cr: 6, area: 'train',
      prereq: 'ENGL 214 and SWE 206 and ICS 321 and ICS 381 and ICS 344', prereqSource: 'flowchart' },

    /* ---- List of Technical Electives (pp. 19–25) ---- */
    { code: 'ICS 477', title: 'AI-Driven Computational Forensics', area: 'te', elective: true, intersectional: true, prereq: 'Senior Standing' },
    { code: 'ICS 478', title: 'Data-Driven Cybersecurity', area: 'te', elective: true, intersectional: true, prereq: 'Senior Standing' },
    { code: 'ICS 479', title: 'Cyber-Physical System Security', area: 'te', elective: true, prereq: '(COE 233 and ICS 344) OR (COE 301 and ICS 344) OR (COE 301 and COE 346)' },
    { code: 'ICS 480', title: 'Reverse Engineering and Exploitation', area: 'te', elective: true, prereq: '(COE 233 and ICS 344) OR (COE 301 and ICS 344) OR (COE 301 and COE 346)' },
    { code: 'ICS 410', title: 'Programming Languages', area: 'te', elective: true, prereq: 'ICS 202' },
    { code: 'ICS 445', title: 'Network Management and Security', area: 'te', elective: true, prereq: 'COE 466' },
    { code: 'ICS 474', title: 'Big Data Analytics', area: 'te', elective: true, prereq: 'STAT 319' },
    { code: 'ICS 486', title: 'Agent-Based Systems and Swarm Intelligence', area: 'te', elective: true, prereq: 'ICS 381' },
    { code: 'ICS 487', title: 'Intelligent Decision Support Systems', area: 'te', elective: true, prereq: 'STAT 319' },
    { code: 'ICS 488', title: 'Knowledge Based System and Soft Computing', area: 'te', elective: true, prereq: 'ICS 381' },
    { code: 'MATH 405', title: 'Learning from Data', area: 'te', elective: true, prereq: 'MATH 102 and STAT 319 and ICS 104' },
    { code: 'STAT 310', title: 'Regression Analysis', area: 'te', elective: true, prereq: 'STAT201 Or STAT212 Or STAT214 Or STAT319 Or ISE315' },
    { code: 'SWE 363', title: 'Web Engineering and Development', area: 'te', elective: true, prereq: 'Junior Standing' },
    { code: 'SWE 463', title: 'Mobile Application Development', area: 'te', elective: true, prereq: 'ICS 108' },
    { code: 'CIE 464', title: 'Industrial Internet of Things (IoT) Technology', area: 'te', elective: true, prereq: 'ICS 343' },
    { code: 'DATA 311', title: 'Data Engineering', area: 'te', elective: true, prereq: 'DATA 211 and ICS 202 and MATH 208' },
    { code: 'DATA 321', title: 'Matrix Theory for Data Science', area: 'te', elective: true, prereq: 'MATH208 or MATH 225' },
    { code: 'DATA 322', title: 'Mathematical Modeling for Data Science', area: 'te', elective: true, prereq: 'DATA 211 and MATH 208' },
    { code: 'DATA 341', title: 'Statistical Methods for Data Science', area: 'te', elective: true, prereq: 'STAT 319 or STAT 214' },
    { code: 'DATA 471', title: 'Big Data Analytics', area: 'te', elective: true, prereq: '(MATH 101 Or MATH 106) And (STAT 319 Or STAT 201)' },
    { code: 'COE 403', title: 'Computer Architecture', area: 'te', elective: true, prereq: 'COE 233' },
    { code: 'COE 427', title: 'Distributed Computing', area: 'te', elective: true, prereq: 'Senior Standing' },
    { code: 'COE 452', title: 'Principles of Cloud-based Systems', area: 'te', elective: true, prereq: 'ICS 343' },
    { code: 'COE 453', title: 'Cloud and Edge Computing', area: 'te', elective: true, prereq: 'ICS 343' },
    { code: 'COE 454', title: 'Internet of Things', area: 'te', elective: true, prereq: 'ICS 343' },
    { code: 'COE 466', title: 'Quantum Architecture and Algorithms', area: 'te', elective: true, prereq: 'COE 292 and MATH 208' },
    { code: 'COE 484', title: 'Introduction to Robotics', area: 'te', elective: true, prereq: 'Senior Standing' }
  ],

  /*
   * Degree plans exactly as published. `cr` is the "Total Credit Hours"
   * printed under each term; the site checks it against the course sum.
   * Year ids: freshman, sophomore, junior, senior. Terms: Term 1, Term 2.
   */
  plans: {
    st: {
      total: 127,
      years: [
        { id: 'freshman', terms: [
          { cr: 16, courses: ['ENGL 101', 'IAS 111', 'ICS 104', 'MATH 101', 'PE 101', 'BUS 200'] },
          { cr: 16, courses: ['ENGL 102', 'ICS 108', 'MATH 102', 'ICS 253', 'IAS 121'] }
        ] },
        { id: 'sophomore', terms: [
          { cr: 18, courses: ['IAS 212', 'DATA 211', 'ICS 202', 'MATH 201', 'SWE 206', 'STAT 201'] },
          { cr: 16, courses: ['COE 292', 'MATH 208', 'ENGL 214', 'COE 233', 'ICS 343'] }
        ] },
        { id: 'junior', terms: [
          { cr: 15, courses: ['ICS 344', 'ICS 381', 'ICS 440', 'ICS 471', 'ICS 485'] },
          { cr: 15, courses: ['ICS 321', 'DATA 391', 'CGS 392', 'ICS 353', 'ICS 442', 'IAS xxx'] }
        ], summer: { cr: 1, courses: ['AISC 399'] } },
        { id: 'senior', terms: [
          { cr: 15, courses: ['AISC 411', 'ICS 433', 'GS xxx', 'ICS 467', 'COE 426', 'ICS 483'] },
          { cr: 15, courses: ['AISC 412', 'SWE 445', 'ICS 472', 'ICS 476', 'XE xxx'] }
        ] }
      ]
    },
    int: {
      total: 129,
      years: [
        { id: 'freshman', terms: [
          { cr: 16, courses: ['ENGL 101', 'IAS 111', 'ICS 104', 'MATH 101', 'PE 101', 'BUS 200'] },
          { cr: 16, courses: ['ENGL 102', 'ICS 108', 'MATH 102', 'ICS 253', 'IAS 121'] }
        ] },
        { id: 'sophomore', terms: [
          { cr: 18, courses: ['IAS 212', 'DATA 211', 'ICS 202', 'MATH 201', 'SWE 206', 'STAT 201'] },
          { cr: 18, courses: ['COE 292', 'MATH 208', 'ENGL 214', 'IAS xxx', 'COE 233', 'ICS 343'] }
        ] },
        { id: 'junior', terms: [
          { cr: 18, courses: ['ICS 344', 'ICS 381', 'ICS 440', 'ICS 471', 'ICS 485', 'COE 426'] },
          { cr: 19, courses: ['ICS 321', 'DATA 391', 'CGS 392', 'ICS 353', 'ICS 442', 'ICS 467', 'GS xxx'] }
        ] },
        { id: 'senior', terms: [
          { cr: 6, courses: ['AISC 411', 'AISC 398'] },
          { cr: 18, courses: ['AISC 412', 'ICS 472', 'SWE 445', 'ICS 476', 'ICS 483', 'ICS 433'] }
        ] }
      ]
    }
  }
};
