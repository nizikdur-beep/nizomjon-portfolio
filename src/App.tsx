import React, { useState, useEffect } from 'react';
import type { Language } from './types';
import { translations } from './i18n/translations';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { StackSection } from './components/StackSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('nh_portfolio_lang');
      if (stored === 'en' || stored === 'uz') {
        return stored;
      }
    } catch {
      // Fallback if storage access is restricted
    }
    return 'en';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('nh_portfolio_lang', newLang);
    } catch {
      // Ignore
    }
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const currentTranslations = translations[lang];

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 00 — Fixed Navigation */}
      <Navigation
        lang={lang}
        onLanguageChange={handleLanguageChange}
        t={currentTranslations.nav}
      />

      {/* Main Content Sections */}
      <main id="main-content" style={{ flex: 1 }}>
        {/* 01 — Hero & Signature Interaction */}
        <Hero
          t={currentTranslations.hero}
          sigT={currentTranslations.signature}
        />

        {/* 02 — Selected Work */}
        <SelectedWork
          lang={lang}
          t={currentTranslations.work}
        />

        {/* 03 — About Nizomjon */}
        <About
          lang={lang}
          t={currentTranslations.about}
        />

        {/* 04 — Technical Stack Architecture */}
        <StackSection
          lang={lang}
          t={currentTranslations.stack}
        />

        {/* 05 — Academic Achievements */}
        <AchievementsSection
          lang={lang}
          t={currentTranslations.achievements}
        />

        {/* 06 — Professional Experience */}
        <ExperienceSection
          lang={lang}
          t={currentTranslations.experience}
        />

        {/* 07 — Transmission & Contact */}
        <ContactSection
          lang={lang}
          t={currentTranslations.contact}
        />
      </main>

      {/* 08 — Architectural Footer */}
      <Footer
        lang={lang}
        t={currentTranslations.contact}
      />
    </div>
  );
};

export default App;
