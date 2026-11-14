/*
 * EDUCATIONAL CONTENT — explanations written for prospective students.
 *
 * Official facts (codes, titles, credits, prerequisites, placements) are
 * NOT in this file; they come only from js/academic.js. This file adds:
 *   - courseText: an explanatory Arabic title (not an official
 *     translation) and a short plain-language explanation per course,
 *     based on the official course description where one is published.
 *   - fields: homepage introduction to the two fields.
 *   - careers: illustrative career directions. The links between careers
 *     and courses are illustrative, not official program outcomes.
 *   - future, journey: general guidance.
 * Every course code used here must exist in academic.js
 * (checked by tools/check-data.js).
 */
window.DATA = {
  areas: {
    math: { en: 'Math & Science', ar: 'الرياضيات والعلوم' },
    gen: { en: 'General Studies', ar: 'الدراسات العامة' },
    found: { en: 'Digital & Business Foundations', ar: 'الأسس الرقمية وأسس الأعمال' },
    cs: { en: 'Computer Science', ar: 'علوم الحاسب' },
    ai: { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
    sec: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
    aisec: { en: 'AI + Cybersecurity', ar: 'الذكاء الاصطناعي + الأمن السيبراني' },
    te: { en: 'Technical Electives', ar: 'المقررات الاختيارية التقنية' },
    train: { en: 'Summer Training or Internship', ar: 'التدريب الصيفي أو التدريب العملي' }
  },

  /* ar = explanatory Arabic title; s = simplified explanation */
  courseText: {
    'MATH 101': { ar: 'التفاضل والتكامل 1', s: { en: 'Limits, derivatives and integrals: the mathematics of change.', ar: 'النهايات والمشتقات والتكاملات: رياضيات التغيّر.' } },
    'MATH 102': { ar: 'التفاضل والتكامل 2', s: { en: 'Continues Calculus I with more integration and its applications.', ar: 'استكمال التفاضل والتكامل 1 بمزيد من التكامل وتطبيقاته.' } },
    'MATH 201': { ar: 'التفاضل والتكامل 3', s: { en: 'Calculus with functions of several variables.', ar: 'التفاضل والتكامل للدوال متعددة المتغيرات.' } },
    'MATH 208': { ar: 'المعادلات التفاضلية والجبر الخطي', s: { en: 'Differential equations plus vectors and matrices, the language behind machine learning.', ar: 'المعادلات التفاضلية مع المتجهات والمصفوفات، وهي اللغة التي يقوم عليها تعلّم الآلة.' } },
    'STAT 201': { ar: 'مقدمة في الاحتمالات والإحصاء', s: { en: 'Probability and statistics for reasoning about data and uncertainty.', ar: 'الاحتمالات والإحصاء للتفكير المنطقي في البيانات وعدم اليقين.' },
      note: { en: 'The degree plans list this course as “Introduction to Probability and Statistics”.', ar: 'تذكر الخطط الدراسية هذا المقرر باسم “Introduction to Probability and Statistics”.' } },
    'ICS 253': { ar: 'التراكيب المتقطعة', s: { en: 'Logic, proofs, sets, counting and probability: the mathematical toolkit of computing.', ar: 'المنطق والبراهين والمجموعات والعدّ والاحتمالات: الأدوات الرياضية للحوسبة.' } },

    'ENGL 101': { ar: 'مدخل إلى الخطاب الأكاديمي', s: { en: 'Academic reading, writing and discussion in English.', ar: 'القراءة والكتابة والنقاش الأكاديمي باللغة الإنجليزية.' } },
    'ENGL 102': { ar: 'مدخل إلى كتابة التقارير', s: { en: 'Writing clear, well-organized reports in English.', ar: 'كتابة تقارير واضحة ومنظمة باللغة الإنجليزية.' } },
    'ENGL 214': { ar: 'التواصل الأكاديمي والمهني', s: { en: 'Communicating in academic and professional settings.', ar: 'التواصل في البيئات الأكاديمية والمهنية.' } },
    'IAS 111': { ar: 'العقيدة وآثارها', s: { en: 'An Islamic studies course on belief and its effect on life.', ar: 'مقرر في الدراسات الإسلامية عن العقيدة وأثرها في الحياة.' } },
    'IAS 121': { ar: 'أسس اللغة', s: { en: 'Foundations of the Arabic language.', ar: 'أسس اللغة العربية.' } },
    'IAS 212': { ar: 'الأخلاق والحوكمة', s: { en: 'Ethics and governance from an Islamic perspective.', ar: 'الأخلاق والحوكمة من منظور إسلامي.' } },
    'CGS 392': { ar: 'أساسيات المسار المهني', s: { en: 'Practical skills for planning your career.', ar: 'مهارات عملية لتخطيط مسارك المهني.' } },
    'PE 101': { ar: 'الصحة والتربية البدنية 1', s: { en: 'Health and physical activity.', ar: 'الصحة والنشاط البدني.' } },
    'GS xxx': { ar: 'مقرر اختياري في الدراسات العامة', s: { en: 'A general studies course of your choice.', ar: 'مقرر في الدراسات العامة تختاره بنفسك.' } },
    'IAS xxx': { ar: 'مقرر اختياري إسلامي أو عربي', s: { en: 'An Islamic studies or Arabic course of your choice.', ar: 'مقرر في الدراسات الإسلامية أو اللغة العربية تختاره بنفسك.' } },

    'ICS 104': { ar: 'مقدمة في البرمجة بلغتي بايثون وC', s: { en: 'Your first programming course, in Python and C.', ar: 'أول مقرر في البرمجة، بلغتي بايثون وC.' } },
    'DATA 211': { ar: 'مقدمة في علم البيانات', s: { en: 'Collecting, cleaning and analyzing data, with a first look at machine learning methods.', ar: 'جمع البيانات وتنظيفها وتحليلها، مع أول اطلاع على أساليب تعلّم الآلة.' } },
    'COE 292': { ar: 'مقدمة في الذكاء الاصطناعي', s: { en: 'A broad first tour of AI: search, reasoning, learning from data and the ethics of AI.', ar: 'جولة أولى شاملة في الذكاء الاصطناعي: البحث والاستدلال والتعلّم من البيانات وأخلاقيات الذكاء الاصطناعي.' } },
    'BUS 200': { ar: 'الأعمال وريادة الأعمال', s: { en: 'An introduction to business and entrepreneurship.', ar: 'مدخل إلى الأعمال وريادة الأعمال.' } },

    'ICS 108': { ar: 'البرمجة كائنية التوجه', s: { en: 'Building larger programs with classes, inheritance and event-driven code.', ar: 'بناء برامج أكبر باستخدام الأصناف والوراثة والبرمجة القائمة على الأحداث.' } },
    'ICS 202': { ar: 'هياكل البيانات والخوارزميات', s: { en: 'Lists, trees, graphs and hash tables, and how to measure an algorithm’s efficiency.', ar: 'القوائم والأشجار والرسوم البيانية وجداول التجزئة، وكيف نقيس كفاءة الخوارزمية.' } },
    'ICS 343': { ar: 'أساسيات شبكات الحاسب', s: { en: 'How the internet works, from cables to applications, with an introduction to network security.', ar: 'كيف يعمل الإنترنت من الكابلات إلى التطبيقات، مع مدخل إلى أمن الشبكات.' } },
    'ICS 321': { ar: 'نظم قواعد البيانات', s: { en: 'Designing databases and querying them with SQL.', ar: 'تصميم قواعد البيانات والاستعلام منها بلغة SQL.' } },
    'ICS 381': { ar: 'مبادئ الذكاء الاصطناعي', s: { en: 'Intelligent agents, search, logic, planning and the basics of machine learning.', ar: 'الوكلاء الأذكياء والبحث والمنطق والتخطيط وأساسيات تعلّم الآلة.' } },
    'ICS 353': { ar: 'تصميم الخوارزميات وتحليلها', s: { en: 'Techniques for designing fast algorithms, and the limits of what computers can solve.', ar: 'أساليب تصميم خوارزميات سريعة، وحدود ما يستطيع الحاسب حله.' } },
    'ICS 344': { ar: 'أمن المعلومات', s: { en: 'Core security ideas: attacks, risk, encryption, authentication, firewalls and secure coding.', ar: 'أساسيات الأمن: الهجمات والمخاطر والتشفير والتحقق من الهوية والجدران النارية والبرمجة الآمنة.' } },
    'ICS 433': { ar: 'نظم التشغيل', s: { en: 'How operating systems manage processes, memory, files and security.', ar: 'كيف تدير نظم التشغيل العمليات والذاكرة والملفات والأمن.' } },
    'AISC 411': { ar: 'مشروع التصميم الختامي 1', s: { en: 'Form a team, define your capstone project and plan it.', ar: 'تكوين فريق وتحديد مشروعك الختامي والتخطيط له.' },
      note: { en: 'The program document publishes this course’s description under the code ICS 411.', ar: 'تنشر وثيقة البرنامج وصف هذا المقرر تحت الرمز ICS 411.' } },
    'AISC 412': { ar: 'مشروع التصميم الختامي 2', s: { en: 'Build and deliver the working solution for your capstone project.', ar: 'بناء الحل العملي لمشروعك الختامي وتسليمه.' },
      note: { en: 'The program document publishes this course’s description under the code ICS 412; its prerequisite ICS 411 corresponds to AISC 411 in the degree plans.', ar: 'تنشر وثيقة البرنامج وصف هذا المقرر تحت الرمز ICS 412، ومتطلبه السابق ICS 411 يقابل AISC 411 في الخطط الدراسية.' } },
    'SWE 206': { ar: 'مقدمة في هندسة البرمجيات', s: { en: 'How software is planned, specified and designed, and the professional issues involved.', ar: 'كيف تُخطط البرمجيات وتُحدد متطلباتها وتُصمم، والقضايا المهنية المرتبطة بها.' } },
    'COE 233': { ar: 'المنطق الرقمي وتنظيم الحاسب', s: { en: 'From logic gates to processors and memory: how a computer works inside.', ar: 'من البوابات المنطقية إلى المعالجات والذاكرة: كيف يعمل الحاسب من الداخل.' } },
    'DATA 391': { ar: 'السياقات الإنسانية وأخلاقيات البيانات', s: { en: 'The ethical and social side of collecting and using data: privacy, fairness and trust.', ar: 'الجانب الأخلاقي والاجتماعي لجمع البيانات واستخدامها: الخصوصية والعدالة والثقة.' } },

    'ICS 485': { ar: 'تعلّم الآلة', s: { en: 'Supervised and unsupervised learning, from regression to neural networks, applied to real problems.', ar: 'التعلّم الموجّه وغير الموجّه، من الانحدار إلى الشبكات العصبية، مع تطبيقات على مشكلات حقيقية.' } },
    'ICS 471': { ar: 'التعلّم العميق', s: { en: 'Neural networks in depth: CNNs, RNNs, transformers and generative models.', ar: 'الشبكات العصبية بعمق: الشبكات الالتفافية والتكرارية والمحوّلات والنماذج التوليدية.' } },
    'ICS 483': { ar: 'الرؤية الحاسوبية', s: { en: 'Teaching computers to understand images and video: segmentation, detection and tracking.', ar: 'تعليم الحاسب فهم الصور ومقاطع الفيديو: التقطيع والكشف والتتبع.' } },
    'ICS 472': { ar: 'معالجة اللغات الطبيعية', s: { en: 'Teaching computers to work with human language: translation, question answering and summarization.', ar: 'تعليم الحاسب التعامل مع اللغة البشرية: الترجمة والإجابة عن الأسئلة والتلخيص.' } },

    'ICS 442': { ar: 'اختبار الاختراق والاختراق الأخلاقي', s: { en: 'Legally attacking systems to find weaknesses, using professional tools, then reporting them.', ar: 'اختبار الأنظمة بهجمات مصرّح بها لاكتشاف نقاط ضعفها بأدوات احترافية، ثم كتابة التقارير.' } },
    'COE 426': { ar: 'خصوصية البيانات', s: { en: 'Protecting personal data: privacy attacks, laws, anonymization and privacy-preserving technologies.', ar: 'حماية البيانات الشخصية: هجمات الخصوصية والأنظمة وإخفاء الهوية وتقنيات حفظ الخصوصية.' },
      note: { en: 'In the Internship plan this course is in the Junior year, and the flow chart shows ICS 344 as its co-requisite.', ar: 'في خطة التدريب العملي يأتي هذا المقرر في السنة الثالثة، ويوضح المخطط الانسيابي أن ICS 344 متطلب مصاحب له.' } },
    'ICS 440': { ar: 'التشفير وتطبيقات سلسلة الكتل', s: { en: 'Encryption, digital signatures and the security of blockchain systems.', ar: 'التشفير والتواقيع الرقمية وأمن أنظمة سلسلة الكتل (البلوك تشين).' } },
    'SWE 445': { ar: 'تطوير البرمجيات الآمنة', s: { en: 'Building software with security in mind from the start.', ar: 'بناء البرمجيات مع مراعاة الأمن منذ البداية.' } },

    'ICS 467': { ar: 'الأمن في أنظمة الذكاء الاصطناعي', s: { en: 'Attacking and defending AI models: adversarial attacks, data poisoning and secure AI design.', ar: 'مهاجمة نماذج الذكاء الاصطناعي والدفاع عنها: الهجمات العدائية وتسميم البيانات والتصميم الآمن.' } },
    'ICS 476': { ar: 'الذكاء الاصطناعي للأمن السيبراني', s: { en: 'Using AI planning and machine learning to defend against, and understand, cyberattacks.', ar: 'استخدام التخطيط الآلي وتعلّم الآلة لفهم الهجمات السيبرانية والدفاع ضدها.' } },

    'XE xxx': { ar: 'مقرر اختياري تقني', s: { en: 'One advanced course you choose from the official list of technical electives.', ar: 'مقرر متقدم واحد تختاره من القائمة الرسمية للمقررات الاختيارية التقنية.' } },
    'AISC 399': { ar: 'التدريب الصيفي', s: { en: 'Practical training during the summer after the Junior year.', ar: 'تدريب عملي في الصيف الذي يلي السنة الثالثة.' } },
    'AISC 398': { ar: 'التدريب العملي (Internship)', s: { en: 'A full term of work experience in the Senior year. In this option it replaces Summer Training and the technical elective.', ar: 'فصل دراسي كامل من الخبرة العملية في السنة الرابعة، ويحل في هذا الخيار محل التدريب الصيفي والمقرر الاختياري التقني.' } },

    'ICS 477': { ar: 'التحقيق الجنائي الحاسوبي المدعوم بالذكاء الاصطناعي', s: { en: 'Investigating digital crimes, with AI used to analyze evidence.', ar: 'التحقيق في الجرائم الرقمية باستخدام الذكاء الاصطناعي لتحليل الأدلة.' } },
    'ICS 478': { ar: 'الأمن السيبراني القائم على البيانات', s: { en: 'Machine learning for detecting malware, intrusions, phishing and fraud.', ar: 'تعلّم الآلة لكشف البرمجيات الخبيثة والتسلل والتصيّد والاحتيال.' } },
    'ICS 479': { ar: 'أمن الأنظمة السيبرانية الفيزيائية', s: { en: 'Securing industrial control systems that run plants and infrastructure.', ar: 'تأمين أنظمة التحكم الصناعي التي تدير المصانع والبنية التحتية.' } },
    'ICS 480': { ar: 'الهندسة العكسية واستغلال الثغرات', s: { en: 'Taking programs apart to find and understand low-level vulnerabilities.', ar: 'تفكيك البرامج لاكتشاف الثغرات منخفضة المستوى وفهمها.' } },
    'ICS 410': { ar: 'لغات البرمجة', s: { en: 'Programming paradigms and how languages are designed and implemented.', ar: 'أنماط البرمجة وكيف تُصمم لغات البرمجة وتُنفذ.' } },
    'ICS 445': { ar: 'إدارة الشبكات وأمنها', s: { en: 'Managing networks and defending them against common attacks.', ar: 'إدارة الشبكات وحمايتها من الهجمات الشائعة.' } },
    'ICS 474': { ar: 'تحليل البيانات الضخمة', s: { en: 'Storing and analyzing very large datasets with tools such as Hadoop and Spark.', ar: 'تخزين البيانات الضخمة جدًا وتحليلها بأدوات مثل Hadoop وSpark.' } },
    'ICS 486': { ar: 'الأنظمة القائمة على الوكلاء وذكاء السرب', s: { en: 'Many intelligent agents working together, inspired by swarms in nature.', ar: 'وكلاء أذكياء متعددون يعملون معًا، بإلهام من أسراب الكائنات في الطبيعة.' } },
    'ICS 487': { ar: 'أنظمة دعم القرار الذكية', s: { en: 'Systems that help people make better decisions, such as recommenders.', ar: 'أنظمة تساعد الناس على اتخاذ قرارات أفضل، مثل أنظمة التوصية.' } },
    'ICS 488': { ar: 'الأنظمة القائمة على المعرفة والحوسبة المرنة', s: { en: 'Fuzzy logic, genetic algorithms and other ways of handling uncertainty.', ar: 'المنطق الضبابي والخوارزميات الجينية وطرق أخرى للتعامل مع عدم اليقين.' } },
    'MATH 405': { ar: 'التعلّم من البيانات', s: { en: 'The linear algebra and optimization behind machine learning.', ar: 'الجبر الخطي وطرق التحسين التي يقوم عليها تعلّم الآلة.' } },
    'STAT 310': { ar: 'تحليل الانحدار', s: { en: 'Building and checking regression models for prediction.', ar: 'بناء نماذج الانحدار واختبارها للتنبؤ.' } },
    'SWE 363': { ar: 'هندسة الويب وتطويره', s: { en: 'Building web and mobile apps, front end and back end.', ar: 'بناء تطبيقات الويب والأجهزة المحمولة، من الواجهة إلى الخادم.' } },
    'SWE 463': { ar: 'تطوير تطبيقات الأجهزة المحمولة', s: { en: 'Building apps for Android and iOS.', ar: 'بناء تطبيقات لنظامي أندرويد وiOS.' } },
    'CIE 464': { ar: 'تقنيات إنترنت الأشياء الصناعي', s: { en: 'Connected devices and control systems in industry and smart cities.', ar: 'الأجهزة المتصلة وأنظمة التحكم في الصناعة والمدن الذكية.' } },
    'DATA 311': { ar: 'هندسة البيانات', s: { en: 'Building pipelines that collect, clean and deliver data for analytics and AI.', ar: 'بناء مسارات تجمع البيانات وتنظفها وتوصلها للتحليل والذكاء الاصطناعي.' } },
    'DATA 321': { ar: 'نظرية المصفوفات لعلم البيانات', s: { en: 'Matrix theory used throughout data science.', ar: 'نظرية المصفوفات المستخدمة في علم البيانات.' } },
    'DATA 322': { ar: 'النمذجة الرياضية لعلم البيانات', s: { en: 'Choosing and evaluating mathematical models for data problems.', ar: 'اختيار النماذج الرياضية وتقييمها لمشكلات البيانات.' } },
    'DATA 341': { ar: 'الأساليب الإحصائية لعلم البيانات', s: { en: 'Statistical methods and reproducible analysis of real data.', ar: 'الأساليب الإحصائية والتحليل القابل لإعادة الإنتاج لبيانات حقيقية.' } },
    'DATA 471': { ar: 'تحليل البيانات الضخمة', s: { en: 'Mining very large datasets with machine learning.', ar: 'التنقيب في البيانات الضخمة جدًا باستخدام تعلّم الآلة.' } },
    'COE 403': { ar: 'معمارية الحاسب', s: { en: 'Parallel processors, caches and how modern computers achieve speed.', ar: 'المعالجات المتوازية والذاكرة المخبئية وكيف تحقق الحواسيب الحديثة سرعتها.' } },
    'COE 427': { ar: 'الحوسبة الموزعة', s: { en: 'How many computers work together reliably as one system.', ar: 'كيف تعمل حواسيب متعددة معًا بموثوقية كنظام واحد.' } },
    'COE 452': { ar: 'مبادئ الأنظمة السحابية', s: { en: 'How cloud platforms are designed, operated and managed.', ar: 'كيف تُصمم المنصات السحابية وتُشغّل وتُدار.' } },
    'COE 453': { ar: 'الحوسبة السحابية والطرفية', s: { en: 'Building cloud-native and edge applications with modern tools.', ar: 'بناء تطبيقات سحابية وطرفية بأدوات حديثة.' } },
    'COE 454': { ar: 'إنترنت الأشياء', s: { en: 'Designing connected-device systems, including their security.', ar: 'تصميم أنظمة الأجهزة المتصلة، بما في ذلك أمنها.' } },
    'COE 466': { ar: 'المعمارية والخوارزميات الكمّية', s: { en: 'An introduction to quantum computers and quantum algorithms.', ar: 'مدخل إلى الحواسيب الكمّية والخوارزميات الكمّية.' } },
    'COE 484': { ar: 'مقدمة في الروبوتات', s: { en: 'How robots move, sense and plan.', ar: 'كيف تتحرك الروبوتات وتستشعر وتخطط.' } }
  },

  /* Homepage field explorer — courses are the official core courses of each area */
  fields: {
    ai: {
      t: { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
      d: { en: 'Build systems that learn from data, understand language and see images.',
           ar: 'بناء أنظمة تتعلّم من البيانات وتفهم اللغة وترى الصور.' },
      courses: ['ICS 485', 'ICS 471', 'ICS 483', 'ICS 472']
    },
    sec: {
      t: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
      d: { en: 'Protect systems and data: find weaknesses, encrypt information and build secure software.',
           ar: 'حماية الأنظمة والبيانات: اكتشاف نقاط الضعف وتشفير المعلومات وبناء برمجيات آمنة.' },
      courses: ['ICS 442', 'COE 426', 'ICS 440', 'SWE 445']
    },
    aisec: {
      t: { en: 'Where they meet', ar: 'حيث يلتقيان' },
      d: { en: 'Two required courses combine both fields: keeping AI secure, and using AI for security.',
           ar: 'مقرران إلزاميان يجمعان المجالين: حماية الذكاء الاصطناعي، واستخدامه في الأمن.' },
      courses: ['ICS 467', 'ICS 476']
    }
  },

  sectors: {
    tech: { en: 'Technology companies', ar: 'شركات التقنية' },
    gov: { en: 'Government', ar: 'الجهات الحكومية' },
    energy: { en: 'Energy and industry', ar: 'الطاقة والصناعة' },
    finance: { en: 'Banking and finance', ar: 'البنوك والقطاع المالي' },
    health: { en: 'Healthcare', ar: 'الرعاية الصحية' },
    telecom: { en: 'Telecommunications', ar: 'الاتصالات' },
    consulting: { en: 'Consulting firms', ar: 'شركات الاستشارات' },
    research: { en: 'Universities and research labs', ar: 'الجامعات ومراكز الأبحاث' },
    startup: { en: 'Startups', ar: 'الشركات الناشئة' }
  },

  /* Illustrative careers. `courses` = program courses related to the role (illustrative). */
  careers: [
    { id: 'mle', areas: ['ai'],
      t: { en: 'Machine Learning Engineer', ar: 'مهندس تعلّم الآلة' },
      s: { en: 'Builds and deploys AI models that power real products and services.', ar: 'يبني نماذج الذكاء الاصطناعي ويشغّلها داخل منتجات وخدمات حقيقية.' },
      tasks: { en: ['Train and evaluate models on large datasets', 'Turn prototypes into reliable systems', 'Monitor models in use and improve them'],
               ar: ['تدريب النماذج وتقييمها على بيانات كبيرة', 'تحويل النماذج التجريبية إلى أنظمة موثوقة', 'مراقبة النماذج أثناء الاستخدام وتحسينها'] },
      skills: { en: ['Python', 'Machine learning', 'Deep learning', 'Software engineering'], ar: ['بايثون', 'تعلّم الآلة', 'التعلّم العميق', 'هندسة البرمجيات'] },
      courses: ['ICS 485', 'ICS 471', 'ICS 483', 'SWE 206'],
      sectors: ['tech', 'energy', 'telecom', 'startup'] },
    { id: 'ds', areas: ['ai'],
      t: { en: 'Data Scientist', ar: 'عالم بيانات' },
      s: { en: 'Finds patterns in data and turns them into decisions.', ar: 'يكتشف الأنماط في البيانات ويحوّلها إلى قرارات.' },
      tasks: { en: ['Clean, explore and visualize data', 'Build predictive models', 'Explain findings to decision makers'],
               ar: ['تنظيف البيانات واستكشافها وتمثيلها بصريًا', 'بناء نماذج تنبؤية', 'شرح النتائج لصنّاع القرار'] },
      skills: { en: ['Statistics', 'SQL', 'Machine learning', 'Communication'], ar: ['الإحصاء', 'لغة SQL', 'تعلّم الآلة', 'مهارات التواصل'] },
      courses: ['DATA 211', 'STAT 201', 'ICS 321', 'ICS 485'],
      sectors: ['finance', 'health', 'energy', 'gov'] },
    { id: 'air', areas: ['ai'],
      t: { en: 'AI Researcher', ar: 'باحث في الذكاء الاصطناعي' },
      s: { en: 'Develops new methods that push what AI can do.', ar: 'يطوّر أساليب جديدة توسّع قدرات الذكاء الاصطناعي.' },
      tasks: { en: ['Design and run experiments', 'Publish and present research', 'Collaborate with other researchers'],
               ar: ['تصميم التجارب وتنفيذها', 'نشر الأبحاث وعرضها', 'التعاون مع باحثين آخرين'] },
      skills: { en: ['Mathematics', 'Deep learning', 'Scientific writing', 'Curiosity'], ar: ['الرياضيات', 'التعلّم العميق', 'الكتابة العلمية', 'حب الاستطلاع'] },
      courses: ['MATH 208', 'ICS 381', 'ICS 471', 'ICS 472'],
      sectors: ['research', 'tech'] },
    { id: 'soc', areas: ['sec'],
      t: { en: 'Cybersecurity Analyst', ar: 'محلل أمن سيبراني' },
      s: { en: 'Monitors an organization’s systems and responds to attacks as they happen.', ar: 'يراقب أنظمة المؤسسة ويتصدى للهجمات لحظة وقوعها.' },
      tasks: { en: ['Investigate suspicious activity', 'Contain and respond to incidents', 'Improve detection rules'],
               ar: ['التحقق من النشاط المشبوه', 'احتواء الحوادث الأمنية والاستجابة لها', 'تحسين قواعد الكشف'] },
      skills: { en: ['Networking', 'Log analysis', 'Operating systems', 'Calm under pressure'], ar: ['الشبكات', 'تحليل السجلات', 'نظم التشغيل', 'الهدوء تحت الضغط'] },
      courses: ['ICS 343', 'ICS 344', 'ICS 433', 'ICS 476'],
      sectors: ['gov', 'finance', 'telecom', 'energy'] },
    { id: 'pt', areas: ['sec'],
      t: { en: 'Penetration Tester', ar: 'مختبر اختراق' },
      s: { en: 'Legally attacks systems to find weaknesses before criminals do.', ar: 'يختبر الأنظمة بهجمات مصرّح بها لاكتشاف ثغراتها قبل المخترقين.' },
      tasks: { en: ['Test applications and networks for vulnerabilities', 'Write clear reports with fixes', 'Retest after issues are fixed'],
               ar: ['فحص التطبيقات والشبكات بحثًا عن الثغرات', 'كتابة تقارير واضحة مع الحلول', 'إعادة الاختبار بعد معالجة الثغرات'] },
      skills: { en: ['Networking', 'Web security', 'Scripting', 'Report writing'], ar: ['الشبكات', 'أمن تطبيقات الويب', 'كتابة السكربتات', 'كتابة التقارير'] },
      courses: ['ICS 442', 'ICS 343', 'ICS 344', 'SWE 445'],
      sectors: ['consulting', 'finance', 'gov', 'tech'] },
    { id: 'se', areas: ['sec'],
      t: { en: 'Security Engineer', ar: 'مهندس أمن معلومات' },
      s: { en: 'Designs and builds the defenses that keep systems and data safe.', ar: 'يصمّم الدفاعات التي تحمي الأنظمة والبيانات ويبنيها.' },
      tasks: { en: ['Design secure systems', 'Deploy and manage security tools', 'Review systems for risks'],
               ar: ['تصميم أنظمة آمنة', 'نشر الأدوات الأمنية وإدارتها', 'مراجعة الأنظمة لتحديد المخاطر'] },
      skills: { en: ['Cryptography', 'Operating systems', 'Secure coding', 'Privacy'], ar: ['التشفير', 'نظم التشغيل', 'البرمجة الآمنة', 'الخصوصية'] },
      courses: ['ICS 440', 'ICS 433', 'SWE 445', 'COE 426'],
      sectors: ['tech', 'energy', 'finance', 'telecom'] },
    { id: 'df', areas: ['sec'],
      t: { en: 'Digital Forensics Investigator', ar: 'محقق جنائي رقمي' },
      s: { en: 'Recovers and analyzes digital evidence after a cyberattack or crime.', ar: 'يستعيد الأدلة الرقمية ويحللها بعد الهجمات السيبرانية أو الجرائم.' },
      tasks: { en: ['Collect evidence from devices and networks', 'Reconstruct what happened', 'Present findings clearly'],
               ar: ['جمع الأدلة من الأجهزة والشبكات', 'إعادة بناء تسلسل الأحداث', 'عرض النتائج بوضوح'] },
      skills: { en: ['Operating systems', 'Networking', 'Attention to detail', 'Ethics'], ar: ['نظم التشغيل', 'الشبكات', 'الدقة والانتباه للتفاصيل', 'الأخلاقيات المهنية'] },
      courses: ['ICS 344', 'ICS 433', 'ICS 343', 'ICS 477'],
      sectors: ['gov', 'consulting', 'finance'] },
    { id: 'aisec', areas: ['ai', 'sec'],
      t: { en: 'AI Security Engineer', ar: 'مهندس أمن الذكاء الاصطناعي' },
      s: { en: 'Combines both fields: protects AI systems and uses AI to stop attacks.', ar: 'يجمع التخصصين: يحمي أنظمة الذكاء الاصطناعي ويستخدمه لإيقاف الهجمات.' },
      tasks: { en: ['Test AI models against manipulation', 'Build AI-based threat detection', 'Set safe practices for using AI'],
               ar: ['اختبار نماذج الذكاء الاصطناعي ضد التلاعب', 'بناء أنظمة كشف تهديدات قائمة على الذكاء الاصطناعي', 'وضع ممارسات آمنة لاستخدام الذكاء الاصطناعي'] },
      skills: { en: ['Machine learning', 'Security testing', 'Python', 'Risk analysis'], ar: ['تعلّم الآلة', 'الاختبار الأمني', 'بايثون', 'تحليل المخاطر'] },
      courses: ['ICS 467', 'ICS 476', 'ICS 485', 'ICS 442'],
      sectors: ['tech', 'gov', 'finance', 'startup'] }
  ],

  future: [
    { t: { en: 'Graduate studies', ar: 'الدراسات العليا' },
      d: { en: 'Continue to a master’s or PhD in AI, cybersecurity or data science, in Saudi Arabia or abroad.',
           ar: 'إكمال الماجستير أو الدكتوراه في الذكاء الاصطناعي أو الأمن السيبراني أو علم البيانات، داخل المملكة أو خارجها.' } },
    { t: { en: 'Work experience', ar: 'الخبرة العملية' },
      d: { en: 'Every student completes Summer Training or a full-term Internship before graduating.',
           ar: 'يُكمل كل طالب التدريب الصيفي أو تدريبًا عمليًا لفصل كامل قبل التخرج.' } },
    { t: { en: 'Professional certifications', ar: 'الشهادات المهنية' },
      d: { en: 'Add industry certifications in security or cloud AI to strengthen your profile.',
           ar: 'أضف شهادات مهنية في الأمن أو الذكاء الاصطناعي السحابي لتعزيز سيرتك المهنية.' } },
    { t: { en: 'Competitions', ar: 'المسابقات' },
      d: { en: 'Capture-the-flag (CTF) challenges, hackathons and data science competitions build real skills.',
           ar: 'تحديات التقاط العلم (CTF) والهاكاثونات ومسابقات علم البيانات تبني مهارات حقيقية.' } },
    { t: { en: 'A growing national field', ar: 'مجال وطني متنامٍ' },
      d: { en: 'Saudi Vision 2030 places AI and cybersecurity at the center of digital transformation, led by national bodies such as SDAIA and the National Cybersecurity Authority.',
           ar: 'تضع رؤية السعودية 2030 الذكاء الاصطناعي والأمن السيبراني في قلب التحول الرقمي، بقيادة جهات وطنية مثل سدايا والهيئة الوطنية للأمن السيبراني.' } },
    { t: { en: 'Entrepreneurship', ar: 'ريادة الأعمال' },
      d: { en: 'The plan includes Business & Entrepreneurship (BUS 200), and your senior project could become a startup idea.',
           ar: 'تتضمن الخطة مقرر الأعمال وريادة الأعمال (BUS 200)، وقد يصبح مشروعك الختامي فكرة لشركة ناشئة.' } }
  ],

  /*
   * My journey: six questions. Each option scores one area:
   * ai, sec or both. Question 4 ("impact") instead picks the challenge.
   */
  journey: [
    { id: 'interest',
      q: { en: 'What interests you most?', ar: 'ما الذي يثير اهتمامك أكثر؟' },
      options: [
        { id: 'a', area: 'ai', t: { en: 'Building intelligent systems', ar: 'بناء أنظمة ذكية' } },
        { id: 'b', area: 'sec', t: { en: 'Protecting digital systems', ar: 'حماية الأنظمة الرقمية' } },
        { id: 'c', area: 'both', t: { en: 'Both', ar: 'كلاهما' } }
      ] },
    { id: 'activity',
      q: { en: 'Which activity sounds more exciting?', ar: 'أي نشاط يبدو لك أكثر متعة؟' },
      options: [
        { id: 'a', area: 'ai', t: { en: 'Teaching AI to recognize patterns', ar: 'تعليم الذكاء الاصطناعي التعرّف على الأنماط' } },
        { id: 'b', area: 'sec', t: { en: 'Investigating suspicious online activity', ar: 'التحقيق في نشاط مشبوه على الإنترنت' } },
        { id: 'c', area: 'both', t: { en: 'Building a secure intelligent application', ar: 'بناء تطبيق ذكي وآمن' } }
      ] },
    { id: 'solving',
      q: { en: 'How do you prefer solving problems?', ar: 'كيف تفضّل حل المشكلات؟' },
      options: [
        { id: 'a', area: 'ai', t: { en: 'Finding patterns in information', ar: 'اكتشاف الأنماط في المعلومات' } },
        { id: 'b', area: 'sec', t: { en: 'Discovering why something went wrong', ar: 'معرفة سبب حدوث الخطأ' } },
        { id: 'c', area: 'both', t: { en: 'Designing a solution from scratch', ar: 'تصميم حل من الصفر' } }
      ] },
    { id: 'impact',
      q: { en: 'What would you most like to protect or improve?', ar: 'ما أكثر ما تود حمايته أو تطويره؟' },
      options: [
        { id: 'health', t: { en: 'Healthcare technology', ar: 'تقنيات الرعاية الصحية' } },
        { id: 'finance', t: { en: 'Banking and financial systems', ar: 'الأنظمة البنكية والمالية' } },
        { id: 'city', t: { en: 'Smart cities and connected devices', ar: 'المدن الذكية والأجهزة المتصلة' } }
      ] },
    { id: 'learning',
      q: { en: 'What would you enjoy learning?', ar: 'ماذا تحب أن تتعلّم؟' },
      options: [
        { id: 'a', area: 'ai', t: { en: 'How machines learn', ar: 'كيف تتعلّم الآلات' } },
        { id: 'b', area: 'sec', t: { en: 'How digital attacks are detected', ar: 'كيف تُكتشف الهجمات الرقمية' } },
        { id: 'c', area: 'both', t: { en: 'How AI can improve cybersecurity', ar: 'كيف يحسّن الذكاء الاصطناعي الأمن السيبراني' } }
      ] },
    { id: 'role',
      q: { en: 'Which future role sounds most interesting?', ar: 'أي دور مستقبلي يبدو لك أكثر إثارة؟' },
      options: [
        { id: 'a', area: 'ai', t: { en: 'AI Engineer', ar: 'مهندس ذكاء اصطناعي' } },
        { id: 'b', area: 'sec', t: { en: 'Cybersecurity Analyst', ar: 'محلل أمن سيبراني' } },
        { id: 'c', area: 'both', t: { en: 'AI Security Engineer', ar: 'مهندس أمن الذكاء الاصطناعي' } }
      ] }
  ],

  journeyResults: {
    /* Required courses from the official plan that match each interest area */
    subjects: {
      ai: ['ICS 381', 'ICS 485', 'ICS 471', 'ICS 483'],
      sec: ['ICS 344', 'ICS 442', 'ICS 440', 'SWE 445'],
      both: ['ICS 485', 'ICS 344', 'ICS 467', 'ICS 476']
    },
    careers: {
      ai: ['mle', 'ds', 'air'],
      sec: ['soc', 'pt', 'se'],
      both: ['aisec', 'mle', 'se']
    },
    challenges: {
      health: {
        ai: { en: 'Help doctors detect diseases earlier from medical images.', ar: 'مساعدة الأطباء على اكتشاف الأمراض مبكرًا من الصور الطبية.' },
        sec: { en: 'Protect hospital systems and medical devices from ransomware.', ar: 'حماية أنظمة المستشفيات والأجهزة الطبية من برمجيات الفدية.' },
        both: { en: 'Build medical AI that cannot be fooled by manipulated data.', ar: 'بناء ذكاء اصطناعي طبي لا يمكن خداعه ببيانات مُتلاعب بها.' }
      },
      finance: {
        ai: { en: 'Spot fraudulent payments in real time among millions of transactions.', ar: 'اكتشاف المدفوعات الاحتيالية لحظيًا بين ملايين العمليات.' },
        sec: { en: 'Defend banks against phishing and account takeover.', ar: 'حماية البنوك من التصيّد والاستيلاء على الحسابات.' },
        both: { en: 'Use AI to catch fraud while protecting that AI from attackers.', ar: 'استخدام الذكاء الاصطناعي لكشف الاحتيال مع حمايته هو نفسه من المهاجمين.' }
      },
      city: {
        ai: { en: 'Make traffic and energy use smarter with data from connected sensors.', ar: 'جعل حركة المرور واستهلاك الطاقة أذكى باستخدام بيانات المستشعرات المتصلة.' },
        sec: { en: 'Secure the millions of connected devices that run a smart city.', ar: 'تأمين ملايين الأجهزة المتصلة التي تدير المدينة الذكية.' },
        both: { en: 'Keep AI-controlled infrastructure safe from cyberattacks.', ar: 'حماية البنية التحتية التي يديرها الذكاء الاصطناعي من الهجمات السيبرانية.' }
      }
    }
  }
};
