/* Interface text. Program content lives in data.js. */
window.STRINGS = {
  en: {
    pageTitle: 'AI & Cybersecurity — Computer Club, KFUPM',
    skip: 'Skip to content',
    clubLogo: 'Computer Club',
    uniLogo: 'King Fahd University of Petroleum & Minerals',
    switchLang: 'العربية',
    switchLangLabel: 'Switch to Arabic',
    mainNav: 'Main',
    areaShort: { core: 'Computing', ai: 'AI', sec: 'Cybersecurity', math: 'Math & Science', gen: 'General' },

    nav: { home: 'Overview', plan: 'Study plan', courses: 'Courses', careers: 'Careers', future: 'Future', journey: 'My journey' },

    homeTitle: 'AI & Cybersecurity',
    homeIntro: 'A four-year bachelor’s degree where you learn to build intelligent systems and keep them secure.',
    homeStart: 'Start my journey',
    homePlan: 'View the study plan',
    homeAiPoints: ['Machine learning and deep learning', 'Language, vision and data analytics', 'Building AI that people can trust'],
    homeSecPoints: ['Network and software security', 'Cryptography and digital forensics', 'Ethical hacking and incident response'],
    factYears: 'years',
    factCredits: 'credit hours',
    factCourses: 'courses',

    planTitle: 'Study plan',
    year: 'Year',
    yearN: n => 'Year ' + n,
    terms: ['Fall', 'Spring'],
    summer: 'Summer',
    credits: n => n + (n === 1 ? ' credit hour' : ' credit hours'),
    show: 'Show',
    all: 'All',
    planHint: 'Select a course to see what it covers, what you need first, and what it leads to.',
    prerequisites: 'Prerequisites',
    leadsTo: 'Leads to',
    none: 'None',
    techElective: 'Technical elective',
    freeElective: 'Free elective',
    techElectiveText: 'Choose an advanced course in the area you enjoy most.',
    freeElectiveText: 'Any course from outside the major, chosen with your advisor.',
    options: 'Options',
    inPlan: (y, term) => 'Year ' + y + ', ' + term,

    coursesTitle: 'Courses',
    search: 'Search by name or code',
    electives: 'Electives',
    noResults: 'No courses match your search.',
    usedIn: 'Careers that use this course',

    careersTitle: 'Careers',
    whatYouDo: 'What you’ll do',
    skills: 'Key skills',
    prepCourses: 'Courses that prepare you',
    workplaces: 'Where you could work',

    futureTitle: 'Future opportunities',

    journeyTitle: 'My journey',
    stepOf: (i, n) => 'Question ' + i + ' of ' + n,
    back: 'Back',
    next: 'Next',
    seePath: 'See my path',
    yourPath: 'Your path',
    direction: {
      ai: 'You lean toward Artificial Intelligence.',
      sec: 'You lean toward Cybersecurity.',
      both: 'You fit where AI and Cybersecurity meet.'
    },
    fitCareers: 'Careers that fit you',
    electivesToConsider: 'Electives to consider',
    yearByYear: 'Year by year',
    afterGrad: 'After graduation',
    startOver: 'Start over',
    milestones: {
      y1: 'Build strong foundations in Python and calculus, and join the Computer Club.',
      y2: {
        ai: 'Start small machine learning projects using public datasets.',
        sec: 'Practice with beginner capture-the-flag (CTF) challenges.',
        both: 'Try small machine learning projects and beginner CTF challenges.'
      },
      y3: {
        industry: 'Aim for a summer training placement at a large company.',
        gov: 'Aim for a summer training placement at a government organization.',
        research: 'Aim for a summer training placement in a research lab.',
        startup: 'Aim for a summer training placement at a fast-moving startup.'
      },
      y4: {
        ai: 'Choose an AI senior project, such as an Arabic language model or a vision system.',
        sec: 'Choose a security senior project, such as an intrusion detection system.',
        both: 'Choose a senior project that uses AI to defend systems.'
      },
      after: {
        industry: 'Apply for graduate roles and development programs.',
        gov: 'Explore national cybersecurity and data programs.',
        research: 'Apply for a master’s or PhD.',
        startup: 'Turn your senior project into a product with an incubator.'
      }
    }
  },

  ar: {
    pageTitle: 'الذكاء الاصطناعي والأمن السيبراني — نادي الحاسب الآلي، جامعة الملك فهد للبترول والمعادن',
    skip: 'تخطَّ إلى المحتوى',
    clubLogo: 'نادي الحاسب الآلي',
    uniLogo: 'جامعة الملك فهد للبترول والمعادن',
    switchLang: 'English',
    switchLangLabel: 'التبديل إلى الإنجليزية',
    mainNav: 'القائمة الرئيسية',
    areaShort: { core: 'الحوسبة', ai: 'الذكاء الاصطناعي', sec: 'الأمن السيبراني', math: 'الرياضيات والعلوم', gen: 'العامة' },

    nav: { home: 'نظرة عامة', plan: 'الخطة الدراسية', courses: 'المقررات', careers: 'الوظائف', future: 'المستقبل', journey: 'رحلتي' },

    homeTitle: 'الذكاء الاصطناعي والأمن السيبراني',
    homeIntro: 'برنامج بكالوريوس مدته أربع سنوات، تتعلّم فيه بناء الأنظمة الذكية وحمايتها.',
    homeStart: 'ابدأ رحلتي',
    homePlan: 'اعرض الخطة الدراسية',
    homeAiPoints: ['تعلّم الآلة والتعلّم العميق', 'معالجة اللغات والرؤية الحاسوبية وتحليل البيانات', 'بناء ذكاء اصطناعي جدير بالثقة'],
    homeSecPoints: ['أمن الشبكات والبرمجيات', 'التشفير والتحقيق الجنائي الرقمي', 'الاختراق الأخلاقي والاستجابة للحوادث'],
    factYears: 'سنوات',
    factCredits: 'ساعة معتمدة',
    factCourses: 'مقررًا',

    planTitle: 'الخطة الدراسية',
    year: 'السنة',
    yearN: n => 'السنة ' + ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'][n - 1],
    terms: ['الفصل الأول', 'الفصل الثاني'],
    summer: 'الصيف',
    credits: n => n + (n >= 3 && n <= 10 ? ' ساعات معتمدة' : ' ساعة معتمدة'),
    show: 'عرض',
    all: 'الكل',
    planHint: 'اختر مقررًا لتعرف محتواه، وما تحتاجه قبله، وما يؤهلك له.',
    prerequisites: 'المتطلبات السابقة',
    leadsTo: 'يؤهلك لـ',
    none: 'لا يوجد',
    techElective: 'مقرر اختياري تخصصي',
    freeElective: 'مقرر اختياري حر',
    techElectiveText: 'اختر مقررًا متقدمًا في المجال الذي تستمتع به أكثر.',
    freeElectiveText: 'أي مقرر من خارج التخصص تختاره بالتنسيق مع مرشدك الأكاديمي.',
    options: 'الخيارات',
    inPlan: (y, term) => ['السنة الأولى', 'السنة الثانية', 'السنة الثالثة', 'السنة الرابعة'][y - 1] + '، ' + term,

    coursesTitle: 'المقررات',
    search: 'ابحث بالاسم أو الرمز',
    electives: 'الاختيارية',
    noResults: 'لا توجد مقررات مطابقة لبحثك.',
    usedIn: 'وظائف يفيدك فيها هذا المقرر',

    careersTitle: 'الوظائف',
    whatYouDo: 'ماذا ستعمل',
    skills: 'المهارات الأساسية',
    prepCourses: 'مقررات تؤهلك',
    workplaces: 'أين يمكنك العمل',

    futureTitle: 'فرص المستقبل',

    journeyTitle: 'رحلتي',
    stepOf: (i, n) => 'السؤال ' + i + ' من ' + n,
    back: 'السابق',
    next: 'التالي',
    seePath: 'اعرض مساري',
    yourPath: 'مسارك',
    direction: {
      ai: 'تميل إلى الذكاء الاصطناعي.',
      sec: 'تميل إلى الأمن السيبراني.',
      both: 'مكانك حيث يلتقي الذكاء الاصطناعي بالأمن السيبراني.'
    },
    fitCareers: 'وظائف تناسبك',
    electivesToConsider: 'مقررات اختيارية مقترحة',
    yearByYear: 'سنة بعد سنة',
    afterGrad: 'بعد التخرج',
    startOver: 'ابدأ من جديد',
    milestones: {
      y1: 'ابنِ أساسًا متينًا في بايثون والتفاضل والتكامل، وانضم إلى نادي الحاسب الآلي.',
      y2: {
        ai: 'ابدأ مشاريع صغيرة في تعلّم الآلة باستخدام بيانات مفتوحة.',
        sec: 'تدرّب على تحديات التقاط العلم (CTF) للمبتدئين.',
        both: 'جرّب مشاريع صغيرة في تعلّم الآلة وتحديات CTF للمبتدئين.'
      },
      y3: {
        industry: 'استهدف تدريبًا صيفيًا في شركة كبرى.',
        gov: 'استهدف تدريبًا صيفيًا في جهة حكومية.',
        research: 'استهدف تدريبًا صيفيًا في مركز أبحاث.',
        startup: 'استهدف تدريبًا صيفيًا في شركة ناشئة سريعة النمو.'
      },
      y4: {
        ai: 'اختر مشروع تخرج في الذكاء الاصطناعي، مثل نموذج للغة العربية أو نظام للرؤية الحاسوبية.',
        sec: 'اختر مشروع تخرج في الأمن، مثل نظام لكشف التسلل.',
        both: 'اختر مشروع تخرج يستخدم الذكاء الاصطناعي لحماية الأنظمة.'
      },
      after: {
        industry: 'تقدّم لوظائف الخريجين وبرامج تطوير الخريجين.',
        gov: 'استكشف البرامج الوطنية في الأمن السيبراني والبيانات.',
        research: 'تقدّم لبرنامج ماجستير أو دكتوراه.',
        startup: 'حوّل مشروع تخرجك إلى منتج بدعم من حاضنة أعمال.'
      }
    }
  }
};
