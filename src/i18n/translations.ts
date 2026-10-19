import type { Language } from '../types';

export interface Translations {
  nav: {
    brand: string;
    work: string;
    about: string;
    stack: string;
    achievements: string;
    experience: string;
    contact: string;
    status: string;
    toggleMenu: string;
    closeMenu: string;
  };
  hero: {
    systemTag: string;
    fullName: string;
    uzbekFullName: string;
    headline: string;
    subheadline: string;
    currentRole: string;
    locationCoord: string;
    exploreWork: string;
    aboutMe: string;
    githubLabel: string;
    scrollPrompt: string;
    terminalStatus: string;
  };
  signature: {
    title: string;
    subtitle: string;
    modeLabel: string;
    toggleGrid: string;
    coordinates: string;
    statusActive: string;
    metricFps: string;
  };
  work: {
    sectionIndex: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    stackLabel: string;
    viewCode: string;
    liveDemo: string;
    featuredTag: string;
    verifiedGitHub: string;
  };
  about: {
    sectionIndex: string;
    title: string;
    subtitle: string;
    portraitCaption: string;
    portraitAlt: string;
    introParagraph: string;
    bodyParagraph1: string;
    bodyParagraph2: string;
    educationLabel: string;
    educationValue: string;
    locationLabel: string;
    locationValue: string;
    ambitionLabel: string;
    ambitionValue: string;
  };
  stack: {
    sectionIndex: string;
    title: string;
    subtitle: string;
    frontendTitle: string;
    frontendSubtitle: string;
    backendTitle: string;
    backendSubtitle: string;
    exploringTag: string;
    toolingTitle: string;
    toolingSubtitle: string;
    noFakeStatsNotice: string;
  };
  achievements: {
    sectionIndex: string;
    title: string;
    subtitle: string;
    metricLabel: string;
    certLabel: string;
    olympiadLabel: string;
    stageDisclaimer: string;
  };
  experience: {
    sectionIndex: string;
    title: string;
    subtitle: string;
    currentTag: string;
    coreDuties: string;
  };
  contact: {
    sectionIndex: string;
    headline: string;
    subheadline: string;
    copyEmail: string;
    copied: string;
    directMail: string;
    telegramDirect: string;
    githubProfile: string;
    instagramProfile: string;
    phoneLabel: string;
    locationHeading: string;
    localTimeHeading: string;
    copyright: string;
    architectureTag: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      brand: "NH // SYS.01",
      work: "Selected Work",
      about: "About",
      stack: "Architecture",
      achievements: "Achievements",
      experience: "Experience",
      contact: "Contact",
      status: "GULISTAN, UZ • AVAILABLE",
      toggleMenu: "Open navigation menu",
      closeMenu: "Close navigation menu"
    },
    hero: {
      systemTag: "SYS.01 // EXPERIMENTAL FRONTEND ENVIRONMENT",
      fullName: "Nizomjon Husanov",
      uzbekFullName: "Husanov Nizomjon In'omjon o'g'li",
      headline: "BUILDING AT THE EDGE OF LOGIC & DESIGN.",
      subheadline: "Frontend developer exploring the space between functional interfaces, expressive interactions, and thoughtful engineering.",
      currentRole: "Assistant Instructor at ITLive • 10th-Grade Student",
      locationCoord: "40.4907° N, 68.7842° E — Syrdarya, UZ",
      exploreWork: "Explore selected work",
      aboutMe: "About me",
      githubLabel: "GitHub Profile",
      scrollPrompt: "SCROLL TO INITIALIZE ARCHITECTURE",
      terminalStatus: "SYS.STABLE // ZERO OVERHEAD"
    },
    signature: {
      title: "SYSTEM 01 : COORDINATE FIELD",
      subtitle: "Dynamic vector matrix reacting to cursor velocity and spatial orientation",
      modeLabel: "VECTOR TRACE",
      toggleGrid: "Toggle Calibration Rings",
      coordinates: "COORDINATES",
      statusActive: "INTERACTIVE MATRIX ACTIVE",
      metricFps: "60 FPS RENDER ENGINE"
    },
    work: {
      sectionIndex: "01 // REPOSITORY AUDIT",
      title: "Selected Work",
      subtitle: "Verified software projects and interfaces developed with real codebases.",
      problemLabel: "Engineering Context",
      stackLabel: "Verified Technologies",
      viewCode: "Source Code",
      liveDemo: "Live Preview",
      featuredTag: "FEATURED ARCHITECTURE",
      verifiedGitHub: "VERIFIED VIA GITHUB"
    },
    about: {
      sectionIndex: "02 // PERSONAL ARCHITECTURE",
      title: "About Nizomjon",
      subtitle: "Grounding creative experimentation in structural discipline.",
      portraitCaption: "FIG. 01 — NIZOMJON HUSANOV // GULISTAN, 2026",
      portraitAlt: "Photograph of Nizomjon Husanov",
      introParagraph: "I'm a frontend developer from Uzbekistan, interested in the details that make digital products feel considered rather than assembled. I work with HTML, CSS, JavaScript, and React, while actively expanding my understanding of backend systems with PHP, Laravel, and MySQL.",
      bodyParagraph1: "Currently in 10th grade, I divide my time between academic coursework and deep technical practice. Beyond self-directed projects, I contribute as an Assistant Instructor at the ITLive Learning Center, helping fellow learners untangle programming fundamentals and build practical web intuition.",
      bodyParagraph2: "I approach interfaces as architectural systems: every coordinate, border, and state transition must serve clarity and purpose. No artificial complexity, no superfluous decoration—just clean logic, thoughtful interaction, and high performance.",
      educationLabel: "CURRENT EDUCATION",
      educationValue: "10th-Grade School Student",
      locationLabel: "HEADQUARTERS",
      locationValue: "Gulistan District, Syrdarya, Uzbekistan",
      ambitionLabel: "CORE AMBITION",
      ambitionValue: "Exceptional Software Engineering & Creative Technology"
    },
    stack: {
      sectionIndex: "03 // TECHNICAL STACK",
      title: "Technical Stack",
      subtitle: "Separated by verified production capabilities and active backend exploration.",
      frontendTitle: "Core Frontend Technologies",
      frontendSubtitle: "Production-ready foundation for interfaces, component architectures, and responsive design systems.",
      backendTitle: "Backend Technologies (Active Learning)",
      backendSubtitle: "Currently studying server-side architecture, relational schemas, and MVC framework design.",
      exploringTag: "CURRENTLY EXPLORING // OCT 2026",
      toolingTitle: "Engineering & Environment",
      toolingSubtitle: "Development workflows, version management, and performance tooling.",
      noFakeStatsNotice: "Rigorous standards: No fabricated proficiency percentages or unverified tool claims."
    },
    achievements: {
      sectionIndex: "04 // ACADEMIC PROFILE",
      title: "Academic Achievements",
      subtitle: "Standardized examination results and competitive academic standings.",
      metricLabel: "Result",
      certLabel: "Validation",
      olympiadLabel: "District Olympiad Results",
      stageDisclaimer: "Note: District Olympiad results represent regional Gulistan district stages."
    },
    experience: {
      sectionIndex: "05 // APPLIED WORK",
      title: "Experience",
      subtitle: "Mentorship and instructional contribution at regional tech hub.",
      currentTag: "OCTOBER 2026 – PRESENT",
      coreDuties: "Core Responsibilities"
    },
    contact: {
      sectionIndex: "06 // TRANSMISSION",
      headline: "GOOD WORK STARTS WITH A CONVERSATION.",
      subheadline: "Have a project, an interesting problem, or an opportunity to collaborate? Let's talk.",
      copyEmail: "Copy Email Address",
      copied: "Copied to Clipboard",
      directMail: "Send Direct Email",
      telegramDirect: "Direct Telegram Message",
      githubProfile: "GitHub Profile",
      instagramProfile: "Instagram Profile",
      phoneLabel: "Phone Number",
      locationHeading: "Location Base",
      localTimeHeading: "Local Time (UTC+5)",
      copyright: "All rights reserved. Designed & Engineered by Nizomjon Husanov.",
      architectureTag: "SYSTEM 01 // REACT + TYPESCRIPT + ZERO RUNTIME BLOAT"
    }
  },
  uz: {
    nav: {
      brand: "NH // TIZIM.01",
      work: "Loyihalar",
      about: "Men haqimda",
      stack: "Texnologiyalar",
      achievements: "Yutuqlar",
      experience: "Tajriba",
      contact: "Aloqa",
      status: "GULISTON, O'ZB • ALOQADA",
      toggleMenu: "Navigatsiyani ochish",
      closeMenu: "Navigatsiyani yopish"
    },
    hero: {
      systemTag: "TIZIM.01 // EKSPERIMENTAL FRONTEND MUHITI",
      fullName: "Nizomjon Husanov",
      uzbekFullName: "Husanov Nizomjon In'omjon o'g'li",
      headline: "MANTIQ VA DIZAYN CHEGARASIDA YARATILGAN.",
      subheadline: "Funksional interfeyslar, ifodali interaksiyalar va puxta muhandislik uyg'unligini o'rganayotgan frontend dasturchi.",
      currentRole: "ITLive o'quv markazida assistent o'qituvchi • 10-sinf o'quvchisi",
      locationCoord: "40.4907° N, 68.7842° E — Sirdaryo, O'zbekiston",
      exploreWork: "Loyihalarni ko'rish",
      aboutMe: "Men haqimda",
      githubLabel: "GitHub Profil",
      scrollPrompt: "ARXITEKTURANI BOSHLASH UCHUN SILJITING",
      terminalStatus: "TIZIM BARQAROR // OPTIMAL TEZLIK"
    },
    signature: {
      title: "TIZIM 01 : KOORDINATA MAYDONI",
      subtitle: "Kursor harakati va fazoviy yo'nalishga javob beruvchi vektorli matritsa",
      modeLabel: "VEKTOR TRAEKTORIYASI",
      toggleGrid: "Kalibrlash halqalarini almashtirish",
      coordinates: "KOORDINATALAR",
      statusActive: "INTERAKTIV MATRITSA FAOL",
      metricFps: "60 FPS RENDER TEZLIGI"
    },
    work: {
      sectionIndex: "01 // REPOZITORIYLAR TAFTISHI",
      title: "Tanlangan Loyihalar",
      subtitle: "Haqiqiy kod bazalariga ega tasdiqlangan dasturiy loyihalar va veb-interfeyslar.",
      problemLabel: "Muhandislik Konteksti",
      stackLabel: "Tasdiqlangan Texnologiyalar",
      viewCode: "Dastur Kodi",
      liveDemo: "Jonli Ko'rinish",
      featuredTag: "ASOSIY ARXITEKTURA",
      verifiedGitHub: "GITHUB ORQALI TASDIQLANGAN"
    },
    about: {
      sectionIndex: "02 // SHAXSIY ARXITEKTURA",
      title: "Nizomjon Haqida",
      subtitle: "Ijodiy izlanishlarni tizimli intizom bilan birlashtirish.",
      portraitCaption: "FIG. 01 — NIZOMJON HUSANOV // GULISTON, 2026",
      portraitAlt: "Nizomjon Husanov fotosurati",
      introParagraph: "Men O'zbekistondan bo'lgan frontend dasturchiman. Raqamli mahsulotlarning shunchaki yig'ilgan emas, balki chuqur o'ylangan va qulay bo'lishini ta'minlovchi detallarga qiziqaman. HTML, CSS, JavaScript va React bilan ishlayman, shu bilan birga PHP, Laravel va MySQL yordamida backend tizimlarini faol o'rganmoqdaman.",
      bodyParagraph1: "Hozirda 10-sinf o'quvchisiman. Vaqtimni maktab darslari hamda chuqur dasturlash amaliyotiga ajrataman. Mustaqil loyihalardan tashqari, ITLive o'quv markazida assistent o'qituvchi sifatida yoshlarga dasturlash asoslarini o'zlashtirishda yordam bermoqdaman.",
      bodyParagraph2: "Men interfeyslarga arxitektura tizimi sifatida qarayman: har bir koordinata, chegara va holat o'zgarishi aniq maqsadga xizmat qilishi lozim. Soxta murakkablik va ortiqcha bezaklarsiz — faqat toza mantiq, puxta interaksiya va yuqori tezlik.",
      educationLabel: "HOZIRGI TA'LIM",
      educationValue: "10-sinf maktab o'quvchisi",
      locationLabel: "JOYLAShUV",
      locationValue: "Guliston tumani, Sirdaryo viloyati, O'zbekiston",
      ambitionLabel: "ASOSIY MAQSAD",
      ambitionValue: "Yetuk dasturiy ta'minot muhandisi bo'lish va IT sohasini chuqur egallash"
    },
    stack: {
      sectionIndex: "03 // TEXNOLOGIYALAR ZANJIRI",
      title: "Texnologiyalar",
      subtitle: "Mavjud frontend amaliyoti va o'rganilayotgan backend ko'nikmalari bo'yicha ajratilgan.",
      frontendTitle: "Asosiy Frontend Texnologiyalari",
      frontendSubtitle: "Interfeyslar, komponentlar arxitekturasi va moslashuvchan dizayn uchun ishlab chiqarish darajasidagi poydevor.",
      backendTitle: "Backend Texnologiyalari (O'rganish Bosqichida)",
      backendSubtitle: "Hozirda server tomoni arxitekturasi, ma'lumotlar bazasi va MVC freymvorklarini o'rganmoqdaman.",
      exploringTag: "O'RGANISH BOSQICHIDA // OKT 2026",
      toolingTitle: "Muhandislik va Ish Muhiti",
      toolingSubtitle: "Dasturlash jarayonlari, versiyalarni boshqarish va unumdorlik vositalari.",
      noFakeStatsNotice: "Haqiqiy yondashuv: Soxta foizlar yoki tasdiqlanmagan ko'nikmalar ko'rsatilmagan."
    },
    achievements: {
      sectionIndex: "04 // AKADEMIK NATIJALAR",
      title: "Akademik Yutuqlar",
      subtitle: "Standartlashtirilgan test natijalari va fan olimpiadalari ko'rsatkichlari.",
      metricLabel: "Natija",
      certLabel: "Tasdiq",
      olympiadLabel: "Tuman Bosqichi Olimpiadalari",
      stageDisclaimer: "Eslatma: Olimpiada natijalari Guliston tumani bosqichiga tegishli."
    },
    experience: {
      sectionIndex: "05 // AMALIY FAOLIYAT",
      title: "Tajriba",
      subtitle: "Mintaqaviy IT markazida mentorlik va ta'lim jarayoniga ko'mak.",
      currentTag: "OKTYABR 2026 – HOZIRGACHA",
      coreDuties: "Asosiy Vazifalar"
    },
    contact: {
      sectionIndex: "06 // BOG'LANISH",
      headline: "YAXSHI NATIJA SAMIMIY SUHBATDAN BOSHLANADI.",
      subheadline: "Loyihangiz, qiziqarli muammongiz yoki hamkorlik taklifingiz bormi? Muloqotga tayyorman.",
      copyEmail: "Emailni nusxalash",
      copied: "Nusxalandi",
      directMail: "To'g'ridan-to'g'ri xat yozish",
      telegramDirect: "Telegram orqali bog'lanish",
      githubProfile: "GitHub Profil",
      instagramProfile: "Instagram Profil",
      phoneLabel: "Telefon raqam",
      locationHeading: "Hudud",
      localTimeHeading: "Mahalliy vaqt (UTC+5)",
      copyright: "Barcha huquqlar himoyalangan. Nizomjon Husanov tomonidan ishlab chiqilgan.",
      architectureTag: "TIZIM 01 // REACT + TYPESCRIPT + ZERO OVERHEAD"
    }
  }
};
