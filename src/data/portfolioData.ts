import type { Project, Achievement, ExperienceItem, TechItem } from '../types';

export const portfolioProjects: Project[] = [
  {
    id: 'yoshlarhub',
    title: 'YoshlarHub Platform',
    systemCode: 'PRJ-01 // BACKEND-SYS',
    featured: true,
    category: 'Fullstack / Backend',
    tagline: {
      en: 'Community platform & Telegram automation engine for regional youth engagement.',
      uz: 'Mintaqaviy yoshlar faolligi uchun jamoat platformasi va Telegram avtomatlashtirish tizimi.'
    },
    description: {
      en: 'Engineered as a practical backend system utilizing PHP and MySQL, integrated with Telegram bot webhooks to streamline student registration, notifications, and administrative queries.',
      uz: "PHP va MySQL asosida ishlab chiqilgan backend tizimi; talabalarni ro'yxatga olish, bildirishnomalar va ma'muriy so'rovlarni boshqarish uchun Telegram bot vebhuklari bilan integratsiya qilingan."
    },
    problemSolved: {
      en: 'Automated manual record-keeping by connecting Telegram bots directly to a relational MySQL database schema, reducing manual entry errors.',
      uz: "Telegram botni bevosita relyatsion MySQL ma'lumotlar bazasi bilan bog'lash orqali qo'lda yozish xatolarini bartaraf etdi."
    },
    tags: ['PHP', 'MySQL', 'Telegram Bot API', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/nizikdur-beep/yoshlarhub'
  },
  {
    id: 'studyhub',
    title: 'StudyHub Agency Portal',
    systemCode: 'PRJ-02 // FRONTEND-APP',
    featured: false,
    category: 'Frontend Web App',
    tagline: {
      en: 'High-performance educational agency web portal with modular course filtering.',
      uz: 'Modulli kurslar filtri bilan jihozlangan yuqori tezlikdagi taʼlim agentligi portali.'
    },
    description: {
      en: 'Architected with React, Vite, and Tailwind CSS. Features dynamic curriculum breakdown, responsive interactive cards, and frictionless layout adaptability.',
      uz: "React, Vite va Tailwind CSS yordamida yaratilgan. Dinamik o'quv dasturi, interaktiv kartochkalar va tezkor moslashuvchan dizaynga ega."
    },
    problemSolved: {
      en: 'Constructed reusable UI component hierarchies ensuring rapid initial page load and clean mobile navigation flows.',
      uz: "Sahifaning tez yuklanishi va toza mobil navigatsiyani ta'minlovchi qayta ishlatiluvchi UI komponentlar zanjirini qurdi."
    },
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
    githubUrl: 'https://github.com/nizikdur-beep/study-hub'
  },
  {
    id: 'nizomjontube',
    title: 'NizomjonTube Interface Architecture',
    systemCode: 'PRJ-03 // MEDIA-UI',
    featured: false,
    category: 'Interactive UI',
    tagline: {
      en: 'Streaming interface clone focusing on high-density video grid composition.',
      uz: 'Yuqori zichlikdagi video tarmoq kompozitsiyasiga eʼtibor qaratgan striming interfeysi.'
    },
    description: {
      en: 'A focused frontend study replicating modern video streaming UI mechanics, exploring complex state synchronization, responsive grid systems, and custom media preview controls.',
      uz: "Zamonaviy video platformalar UI mexanikasini o'rganish: murakkab holat sinxronizatsiyasi, moslashuvchan setkalar va maxsus ko'rish boshqaruvi."
    },
    problemSolved: {
      en: 'Resolved layout reflow issues during video thumbnail loading through strict aspect ratio containers and CSS grid mechanics.',
      uz: "Qat'iy proporsiyali konteynerlar va CSS grid orqali videolarni yuklash paytidagi siljishlarni (layout reflow) bartaraf etdi."
    },
    tags: ['React.js', 'CSS3 Grid', 'JavaScript', 'State Management'],
    githubUrl: 'https://github.com/nizikdur-beep/LOOK'
  },
  {
    id: 'clock-master',
    title: 'Clock Master & Temporal Vectors',
    systemCode: 'PRJ-04 // VECTOR-EXP',
    featured: false,
    category: 'Interactive UI',
    tagline: {
      en: 'Mathematical time representation utilizing real-time SVG trigonometry.',
      uz: "Haqiqiy vaqt trigonometriyasidan foydalangan holda vaqtni matematik ko'rsatish."
    },
    description: {
      en: 'Interactive experiment examining trigonometric angle calculations and hardware-accelerated CSS transforms to render smooth, analog-digital temporal transitions.',
      uz: "Silliq analog-raqamli o'tishlarni chizish uchun trigonometrik burchak hisob-kitoblari va apparat tezlatgichli CSS transformatsiyalari sinovi."
    },
    problemSolved: {
      en: 'Achieved sub-millisecond dial alignment without triggering continuous browser layout thrashing.',
      uz: "Brauzerning ortiqcha qayta hisoblashlarisiz (layout thrashing) yuqori aniqlikdagi strelka harakatiga erishildi."
    },
    tags: ['JavaScript', 'CSS3 Matrix', 'SVG', 'Math & UI'],
    githubUrl: 'https://github.com/nizikdur-beep/clock-master'
  },
  {
    id: 'mening-mahalla',
    title: 'Mening Mahalla Platform',
    systemCode: 'PRJ-05 // CIVIC-PORTAL',
    featured: false,
    category: 'Frontend Web App',
    tagline: {
      en: 'Community information portal engineered for local district accessibility.',
      uz: "Mahalliy tuman fuqarolari uchun mo'ljallangan qulay axborot portali."
    },
    description: {
      en: 'Clean, accessible citizen-oriented portal layout designed with semantic HTML5 and modern CSS, emphasizing readability across budget devices.',
      uz: "Semantik HTML5 va toza CSS yordamida yaratilgan, arzon qurilmalarda ham o'qilishi oson bo'lgan mahalla portali dizayni."
    },
    problemSolved: {
      en: 'Ensured high contrast and lightweight footprint for low-bandwidth mobile environments in regional areas.',
      uz: "Hududlardagi past tezlikdagi mobil internet sharoitida ham yuqori kontrast va engil yuklanishni ta'minladi."
    },
    tags: ['HTML5', 'CSS3', 'Semantic Web', 'Accessibility'],
    githubUrl: 'https://github.com/nizikdur-beep/mening-mahalla'
  }
];

export const techStackItems: TechItem[] = [
  // Frontend (Confirmed production skills)
  {
    name: 'HTML5',
    category: 'frontend',
    status: 'production',
    note: {
      en: 'Semantic landmarks, strict accessibility, and optimized document structure.',
      uz: 'Semantik belgilar, qatʼiy qulaylik va hujjat strukturasi.'
    }
  },
  {
    name: 'CSS3 / Modern CSS',
    category: 'frontend',
    status: 'production',
    note: {
      en: 'Custom properties, CSS Grid, Flexbox, fluid typography (clamp), responsive architecture.',
      uz: 'Oʻzgaruvchilar, CSS Grid, Flexbox, suyuq tipografiya va moslashuvchanlik.'
    }
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    status: 'production',
    note: {
      en: 'DOM manipulation, asynchronous pipelines, event architectures, modern ES features.',
      uz: 'DOM manipulyatsiyasi, asinxron oqimlar, hodisalar arxitekturasi.'
    }
  },
  {
    name: 'React.js',
    category: 'frontend',
    status: 'production',
    note: {
      en: 'Functional components, hooks, unidirectional data flow, modular UI composition.',
      uz: 'Funksional komponentlar, hooklar, modulli UI kompozitsiyasi.'
    }
  },

  // Backend Learning (Explicitly labeled as exploring)
  {
    name: 'PHP 8.x',
    category: 'backend-learning',
    status: 'exploring',
    note: {
      en: 'Server-side routing, request lifecycles, API endpoints, bot backend logic.',
      uz: 'Server yoʻnaltirishlari, soʻrov sikllari, API va bot mantiqi.'
    }
  },
  {
    name: 'Laravel',
    category: 'backend-learning',
    status: 'exploring',
    note: {
      en: 'Exploring MVC paradigm, Eloquent ORM, middleware, and structured web services.',
      uz: 'MVC arxitekturasi, Eloquent ORM, middleware va tizimli veb xizmatlar.'
    }
  },
  {
    name: 'MySQL',
    category: 'backend-learning',
    status: 'exploring',
    note: {
      en: 'Relational table design, foreign keys, index optimization, and CRUD operations.',
      uz: 'Relyatsion jadvallar tuzilishi, tashqi kalitlar va CRUD amallari.'
    }
  },

  // Tooling & Engineering
  {
    name: 'Vite & Modern Bundlers',
    category: 'tooling',
    status: 'workflow',
    note: {
      en: 'Lightning-fast ESM development and optimized production bundling.',
      uz: 'Tezkor ESM dasturlash muhiti va optimallashtirilgan yigʻish.'
    }
  },
  {
    name: 'Git & GitHub',
    category: 'tooling',
    status: 'workflow',
    note: {
      en: 'Branch management, commit hygiene, open-source repositories.',
      uz: 'Tarmoqlar, commit intizomi va ochiq kodli repozitoriylar.'
    }
  },
  {
    name: 'Creative Computation & UI Math',
    category: 'tooling',
    status: 'workflow',
    note: {
      en: 'Spatial coordinates, SVG rendering, micro-interactions, Swiss grid alignments.',
      uz: 'Koordinatalar, SVG chizish, mikro-interaksiyalar, shveysarcha setkalar.'
    }
  }
];

export const academicAchievements: Achievement[] = [
  {
    id: 'sat',
    title: {
      en: 'SAT (Scholastic Assessment Test)',
      uz: 'SAT (Standartlashtirilgan Akademik Test)'
    },
    scoreOrAward: '1280',
    issuerOrScope: {
      en: 'College Board International Assessment',
      uz: 'College Board Xalqaro Baholash Tizimi'
    },
    year: '2026',
    category: 'Standardized Exam',
    code: 'ACH-01 // SAT-1280'
  },
  {
    id: 'math-cert',
    title: {
      en: 'Mathematics Assessment Certificate',
      uz: 'Matematika Fani Sertifikati'
    },
    scoreOrAward: 'Grade B+',
    issuerOrScope: {
      en: 'Official Mathematics Proficiency Evaluation',
      uz: 'Rasmiy Matematik Bilim Darajasi Sertifikati'
    },
    year: '2026',
    category: 'Academic',
    code: 'ACH-02 // MATH-B+'
  },
  {
    id: 'english-cert',
    title: {
      en: 'English Proficiency Certificate',
      uz: 'Ingliz Tili Bilish Sertifikati'
    },
    scoreOrAward: 'CEFR B2',
    issuerOrScope: {
      en: 'Fluent Technical & Interpersonal Communication',
      uz: 'Xalqaro Texnik va Erkin Muloqot Darajasi'
    },
    year: '2026',
    category: 'Language',
    code: 'ACH-03 // ENG-B2'
  },
  {
    id: 'khwarizmi-olympiad',
    title: {
      en: 'Al-Khwarizmi Followers Olympiad',
      uz: 'Al-Xorazmiy Vorislari Fan Olimpiadasi'
    },
    scoreOrAward: '2nd Place',
    issuerOrScope: {
      en: 'Gulistan District Stage (Regional Competition)',
      uz: 'Guliston Tumani Bosqichi'
    },
    year: '2026',
    category: 'Olympiad',
    code: 'ACH-04 // OLYMP-MATH-2'
  },
  {
    id: 'foreign-lang-olympiad',
    title: {
      en: 'Foreign Languages Development Olympiad',
      uz: 'Xorijiy Tillar Rivojlanish Olimpiadasi'
    },
    scoreOrAward: '3rd Place',
    issuerOrScope: {
      en: 'Gulistan District Stage (Regional Competition)',
      uz: 'Guliston Tumani Bosqichi'
    },
    year: '2026',
    category: 'Olympiad',
    code: 'ACH-05 // OLYMP-LANG-3'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'itlive',
    company: 'ITLive Learning Center',
    role: {
      en: 'Assistant Instructor',
      uz: "Assistent O'qituvchi"
    },
    period: {
      en: 'October 2026 – Present',
      uz: 'Oktyabr 2026 – Hozirgacha'
    },
    location: {
      en: 'Gulistan, Syrdarya, Uzbekistan',
      uz: "Guliston, Sirdaryo, O'zbekiston"
    },
    statusTag: {
      en: 'ACTIVE ROLE // EDUCATION',
      uz: "FAOL MAVQE // TA'LIM"
    },
    responsibilities: {
      en: [
        'Supporting the daily classroom learning process across core web fundamentals (HTML, CSS, JavaScript).',
        'Communicating directly with students to debug syntax hurdles and foster problem-solving intuition.',
        'Explaining programming concepts with structured, step-by-step practical code walkthroughs.',
        'Actively developing communication, technical leadership, and collaborative mentorship capabilities.'
      ],
      uz: [
        "Veb dasturlash asoslari (HTML, CSS, JavaScript) bo'yicha o'quv jarayoniga amaliy ko'mak berish.",
        "O'quvchilar bilan to'g'ridan-to'g'ri muloqot qilib, kod xatolarini (debugging) tahlil qilish va yechim topishga o'rgatish.",
        "Dasturlash tushunchalarini bosqichma-bosqich amaliy misollar bilan tushuntirish.",
        "Muloqot, texnik yetakchilik va jamoada ishlash ko'nikmalarini amalda mustahkamlash."
      ]
    }
  }
];

export const personalContacts = {
  name: 'Nizomjon Husanov',
  uzbekName: "Husanov Nizomjon In'omjon o'g'li",
  email: 'nizikdur3@gmail.com',
  phone: '+998940314410',
  location: 'Gulistan District, Syrdarya Region, Uzbekistan',
  coordinates: '40.4907° N, 68.7842° E',
  github: 'https://github.com/nizikdur-beep',
  telegram: 'https://t.me/husanov_n',
  instagram: 'https://instagram.com/khusnv.n'
};
