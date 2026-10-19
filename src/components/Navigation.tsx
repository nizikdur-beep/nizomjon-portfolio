import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations['nav'];
}

export const Navigation: React.FC<NavigationProps> = ({ lang, onLanguageChange, t }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile drawer
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const navLinks = [
    { href: '#work', label: t.work },
    { href: '#about', label: t.about },
    { href: '#stack', label: t.stack },
    { href: '#achievements', label: t.achievements },
    { href: '#experience', label: t.experience },
    { href: '#contact', label: t.contact }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(11, 13, 16, 0.92)' : 'rgba(11, 13, 16, 0.75)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
        transition: 'background-color 0.2s ease, border-color 0.2s ease'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Monogram Brand */}
        <a
          href="#"
          className="mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.88rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--text-primary)'
          }}
          aria-label="Nizomjon Husanov Home"
        >
          <span
            style={{
              padding: '2px 6px',
              border: '1px solid var(--accent-cyan)',
              color: 'var(--accent-cyan)',
              background: 'var(--accent-cyan-dim)',
              fontSize: '0.78rem'
            }}
          >
            NH
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>//</span>
          <span>SYS.01</span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono"
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Right (Language + Status) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          {/* Language Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-surface-1)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              padding: '2px'
            }}
            role="group"
            aria-label="Language Selector"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className="mono"
              style={{
                padding: '4px 8px',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: lang === 'en' ? 'var(--bg-obsidian)' : 'var(--text-secondary)',
                backgroundColor: lang === 'en' ? 'var(--accent-cyan)' : 'transparent',
                borderRadius: '2px',
                transition: 'all 0.15s ease'
              }}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('uz')}
              className="mono"
              style={{
                padding: '4px 8px',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: lang === 'uz' ? 'var(--bg-obsidian)' : 'var(--text-secondary)',
                backgroundColor: lang === 'uz' ? 'var(--accent-cyan)' : 'transparent',
                borderRadius: '2px',
                transition: 'all 0.15s ease'
              }}
              aria-pressed={lang === 'uz'}
            >
              UZ
            </button>
          </div>

          {/* Quick Contact Link (Desktop) */}
          <a
            href="#contact"
            className="btn-secondary mono desktop-nav"
            style={{
              display: 'none',
              padding: '6px 14px',
              fontSize: '0.76rem'
            }}
          >
            <span>{t.contact}</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t.closeMenu : t.toggleMenu}
            aria-expanded={mobileOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              background: 'var(--bg-surface-1)',
              borderRadius: '2px'
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 'var(--header-height) 0 0 0',
            backgroundColor: 'rgba(11, 13, 16, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '32px 24px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
              // INDEX NAVIGATION
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBlock: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                <span>{link.label}</span>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div
            style={{
              paddingTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span className="pulse-indicator" />
              <span>{t.status}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
