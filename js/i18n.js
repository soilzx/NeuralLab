/* Interface text. Academic facts live in academic.js; explanations in data.js. */
window.STRINGS = {
  en: {
    pageTitle: 'Artificial Intelligence & Cybersecurity — KFUPM',
    skip: 'Skip to content',
    clubLogo: 'Computer Club',
    uniLogo: 'King Fahd University of Petroleum & Minerals',
    switchLang: 'العربية',
    switchLangLabel: 'Switch to Arabic',
    mainNav: 'Main',
    comma: ', ',
    all: 'All',
    show: 'Show',

    nav: { home: 'Overview', plan: 'Study plan', courses: 'Courses', careers: 'Careers', future: 'Future', journey: 'My journey' },

    /* Home */
    homeTitle: 'Artificial Intelligence & Cybersecurity',
    homeIntro: 'Build strong foundations in AI, cybersecurity and computing, and learn to use them responsibly for society and industry.',
    homeExplore: 'Explore the Major',
    homePlan: 'View Study Plan',
    credDept: 'Information & Computer Science Department',
    credCollege: 'College of Computing and Mathematics',
    credPlans: (st, int) => 'Official degree plans: ' + st + ' credit hours with Summer Training, or ' + int + ' with an Internship.',
    officialPage: 'Official program page',
    fieldsTitle: 'The two fields',
    requiredCourses: 'Required courses',
    exploreLabel: 'Explore the site',
    exploreText: {
      plan: 'Every course, year by year',
      courses: 'Search all courses and electives',
      careers: 'Where this major can lead',
      journey: 'Six quick questions about you',
      future: 'Opportunities beyond the degree'
    },

    /* Study plan */
    planTitle: 'Study plan',
    planOptionLabel: 'Degree plan',
    planOptions: { st: 'Summer Training', int: 'Internship' },
    planShort: { st: 'Summer Training plan', int: 'Internship plan' },
    yearLabel: 'Academic year',
    years: { freshman: 'Freshman', sophomore: 'Sophomore', junior: 'Junior', senior: 'Senior' },
    terms: ['Term 1', 'Term 2'],
    summer: 'Summer Session',
    credits: n => n + (n === 1 ? ' credit hour' : ' credit hours'),
    planNote: {
      st: n => n + ' credit hours in total. Summer Training (AISC 399) takes place in the summer after the Junior year.',
      int: n => n + ' credit hours in total. A full-term Internship (AISC 398) in the Senior year replaces Summer Training and the technical elective.'
    },
    planHint: 'Select a course to see what it covers and its official prerequisites.',
    prerequisite: 'Prerequisite',
    corequisite: 'Co-requisite',
    notStated: 'Not stated in the program document.',
    standing: { 'Senior Standing': 'You must have reached Senior (fourth-year) status.', 'Junior Standing': 'You must have reached Junior (third-year) status.' },
    leadsTo: 'Prerequisite for',
    officialTitle: 'Official title',
    fromElectiveList: 'Technical elective option',
    teOptions: 'Options',
    teOptionsText: n => 'Choose one course from the official list of ' + n + ' technical electives.',
    viewElectives: 'View technical electives',
    sourceNote: 'Source: KFUPM degree plan, 20 January 2026. Course explanations are simplified.',

    /* Courses */
    coursesTitle: 'Courses',
    search: 'Search by name or code',
    areaLabel: 'Course areas',
    allCourses: 'All courses',
    noResults: 'No courses match your search.',
    usedIn: 'Related careers',

    /* Careers */
    careersTitle: 'Careers',
    whatYouDo: 'What you’ll do',
    skills: 'Key skills',
    prepCourses: 'Related courses in this program',
    workplaces: 'Where you could work',
    careersNote: 'Career connections are illustrative examples, not official program outcomes.',

    /* Future */
    futureTitle: 'Future opportunities',

    /* Journey */
    journeyTitle: 'My journey',
    stepOf: (i, n) => 'Question ' + i + ' of ' + n,
    back: 'Back',
    next: 'Next',
    seeResult: 'See my result',
    resultTitle: 'Your result',
    mainArea: 'Main interest',
    areaNames: { ai: 'Artificial Intelligence', sec: 'Cybersecurity', both: 'AI and Cybersecurity together' },
    areaLead: {
      ai: 'You are drawn to building systems that learn from data.',
      sec: 'You are drawn to protecting systems and investigating threats.',
      both: 'You are drawn to where AI and cybersecurity meet.'
    },
    subjects: 'Courses you may enjoy most',
    careerDirections: 'Career directions to explore',
    challenge: 'A future challenge for you',
    disclaimer: 'This is an educational suggestion based on the interests you selected. It is not an assessment or a prediction of career success.',
    changeAnswers: 'Change my answers',
    startOver: 'Start over'
  },

  ar: {
    pageTitle: 'الذكاء الاصطناعي والأمن السيبراني — جامعة الملك فهد للبترول والمعادن',
    skip: 'تخطَّ إلى المحتوى',
    clubLogo: 'نادي الحاسب الآلي',
    uniLogo: 'جامعة الملك فهد للبترول والمعادن',
    switchLang: 'English',
    switchLangLabel: 'التبديل إلى الإنجليزية',
    mainNav: 'القائمة الرئيسية',
    comma: '، ',
    all: 'الكل',
    show: 'عرض',

    nav: { home: 'نظرة عامة', plan: 'الخطة الدراسية', courses: 'المقررات', careers: 'الوظائف', future: 'المستقبل', journey: 'رحلتي' },

    homeTitle: 'الذكاء الاصطناعي والأمن السيبراني',
    homeIntro: 'ابنِ أساسًا متينًا في الذكاء الاصطناعي والأمن السيبراني والحوسبة، وتعلّم توظيفها بمسؤولية لخدمة المجتمع والصناعة.',
    homeExplore: 'استكشف التخصص',
    homePlan: 'اعرض الخطة الدراسية',
    credDept: 'قسم علم الحاسب الآلي والمعلومات',
    credCollege: 'كلية الحوسبة والرياضيات',
    credPlans: (st, int) => 'الخطط الدراسية الرسمية: ' + st + ' ساعة معتمدة مع التدريب الصيفي، أو ' + int + ' ساعة معتمدة مع التدريب العملي.',
    officialPage: 'صفحة البرنامج الرسمية',
    fieldsTitle: 'المجالان',
    requiredCourses: 'مقررات إلزامية',
    exploreLabel: 'استكشف الموقع',
    exploreText: {
      plan: 'كل المقررات سنة بعد سنة',
      courses: 'ابحث في جميع المقررات والاختيارية',
      careers: 'إلى أين يمكن أن يقودك التخصص',
      journey: 'ستة أسئلة سريعة عنك',
      future: 'فرص تتجاوز الشهادة'
    },

    planTitle: 'الخطة الدراسية',
    planOptionLabel: 'الخطة الدراسية',
    planOptions: { st: 'التدريب الصيفي', int: 'التدريب العملي (Internship)' },
    planShort: { st: 'خطة التدريب الصيفي', int: 'خطة التدريب العملي' },
    yearLabel: 'السنة الدراسية',
    years: { freshman: 'السنة الأولى', sophomore: 'السنة الثانية', junior: 'السنة الثالثة', senior: 'السنة الرابعة' },
    terms: ['الفصل الأول', 'الفصل الثاني'],
    summer: 'الفصل الصيفي',
    credits: n => n + (n >= 3 && n <= 10 ? ' ساعات معتمدة' : ' ساعة معتمدة'),
    planNote: {
      st: n => 'المجموع ' + n + ' ساعة معتمدة. يكون التدريب الصيفي (AISC 399) في الصيف الذي يلي السنة الثالثة.',
      int: n => 'المجموع ' + n + ' ساعة معتمدة. يحل التدريب العملي (AISC 398) لمدة فصل كامل في السنة الرابعة محل التدريب الصيفي والمقرر الاختياري التقني.'
    },
    planHint: 'اختر مقررًا لتعرف محتواه ومتطلباته السابقة الرسمية.',
    prerequisite: 'المتطلب السابق',
    corequisite: 'المتطلب المصاحب',
    notStated: 'غير مذكور في وثيقة البرنامج.',
    standing: { 'Senior Standing': 'أي أن تكون قد بلغت مستوى السنة الرابعة.', 'Junior Standing': 'أي أن تكون قد بلغت مستوى السنة الثالثة.' },
    leadsTo: 'متطلب سابق لـ',
    officialTitle: 'الاسم الرسمي',
    fromElectiveList: 'خيار ضمن المقررات الاختيارية التقنية',
    teOptions: 'الخيارات',
    teOptionsText: n => 'اختر مقررًا واحدًا من القائمة الرسمية التي تضم ' + n + ' مقررًا اختياريًا تقنيًا.',
    viewElectives: 'اعرض المقررات الاختيارية التقنية',
    sourceNote: 'المصدر: الخطة الدراسية لجامعة الملك فهد للبترول والمعادن، 20 يناير 2026. الأسماء العربية للمقررات ترجمات توضيحية، وشروحها مبسطة.',

    coursesTitle: 'المقررات',
    search: 'ابحث بالاسم أو الرمز',
    areaLabel: 'مجالات المقررات',
    allCourses: 'جميع المقررات',
    noResults: 'لا توجد مقررات مطابقة لبحثك.',
    usedIn: 'وظائف ذات صلة',

    careersTitle: 'الوظائف',
    whatYouDo: 'ماذا ستعمل',
    skills: 'المهارات الأساسية',
    prepCourses: 'مقررات ذات صلة في البرنامج',
    workplaces: 'أين يمكنك العمل',
    careersNote: 'الربط بين الوظائف والمقررات أمثلة توضيحية، وليس مخرجات رسمية للبرنامج.',

    futureTitle: 'فرص المستقبل',

    journeyTitle: 'رحلتي',
    stepOf: (i, n) => 'السؤال ' + i + ' من ' + n,
    back: 'السابق',
    next: 'التالي',
    seeResult: 'اعرض النتيجة',
    resultTitle: 'نتيجتك',
    mainArea: 'اهتمامك الرئيسي',
    areaNames: { ai: 'الذكاء الاصطناعي', sec: 'الأمن السيبراني', both: 'الذكاء الاصطناعي والأمن السيبراني معًا' },
    areaLead: {
      ai: 'يجذبك بناء أنظمة تتعلّم من البيانات.',
      sec: 'يجذبك حماية الأنظمة والتحقيق في التهديدات.',
      both: 'يجذبك المجال الذي يلتقي فيه الذكاء الاصطناعي بالأمن السيبراني.'
    },
    subjects: 'مقررات قد تستمتع بها أكثر',
    careerDirections: 'مسارات مهنية تستحق الاستكشاف',
    challenge: 'تحدٍّ مستقبلي يناسبك',
    disclaimer: 'هذه نتيجة تعليمية مقترحة بناءً على الاهتمامات التي اخترتها، وليست تقييمًا ولا تنبؤًا بالنجاح المهني.',
    changeAnswers: 'غيّر إجاباتي',
    startOver: 'ابدأ من جديد'
  }
};
