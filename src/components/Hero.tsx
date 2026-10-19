import React, { useState, useEffect } from 'react';
import type { Translations } from '../i18n/translations';
import { System01Canvas } from './System01Canvas';
import { personalContacts } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { ArrowDown, ExternalLink, Terminal, MapPin, Clock } from 'lucide-react';

interface HeroProps {
  t: Translations['hero'];
  sigT: Translations['signature'];
}

export const Hero: React.FC<HeroProps> = ({ t, sigT }) => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Tashkent',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);
        setLocalTime(formatted);
      } catch {
        setLocalTime('UTC+5');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: 'calc(var(--header-height) + clamp(24px, 4vw, 48px))',
        paddingBottom: 'clamp(40px, 6vw, 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Top Architectural Telemetry Row */}
        <div
          className="mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingBottom: '16px',
            marginBottom: 'clamp(24px, 4vw, 40px)',
            borderBottom: '1px solid var(--border-subtle)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-indicator" style={{ width: '6px', height: '6px' }} />
            <span style={{ color: 'var(--text-secondary)' }}>{t.systemTag}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={12} color="var(--accent-cyan)" />
              {personalContacts.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }} className="tabular">
              <Clock size={12} color="var(--accent-cyan)" />
              {localTime ? `${localTime} TJT` : 'UTC+5'}
            </span>
          </div>
        </div>

        {/* Asymmetric Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Typographic Architecture & Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Identity & Personal Uzbek Name */}
            <div>
              <div
                className="mono"
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-cyan)',
                  marginBottom: '8px'
                }}
              >
                // IDENTITY ARCHITECTURE
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                  marginBottom: '6px'
                }}
              >
                {t.fullName}
              </h1>
              <p
                className="mono"
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em'
                }}
              >
                {t.uzbekFullName}
              </p>
            </div>

            {/* Distinctive Statement Headline */}
            <div
              style={{
                borderLeft: '2px solid var(--accent-cyan)',
                paddingLeft: '18px',
                marginBlock: '4px'
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}
              >
                {t.headline}
              </h2>
              <p
                style={{
                  fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '520px'
                }}
              >
                {t.subheadline}
              </p>
            </div>

            {/* Current Verified Role Callout */}
            <div
              style={{
                background: 'var(--bg-surface-1)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                maxWidth: '520px'
              }}
            >
              <Terminal size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem' }}>
                <span className="mono" style={{ color: 'var(--accent-cyan)', marginRight: '6px' }}>
                  ROLE:
                </span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  {t.currentRole}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginTop: '8px'
              }}
            >
              <a href="#work" className="btn-primary">
                <span>{t.exploreWork}</span>
                <ArrowDown size={14} />
              </a>

              <a href="#about" className="btn-secondary">
                <span>{t.aboutMe}</span>
              </a>

              <a
                href={personalContacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="GitHub Profile (opens in new window)"
                title="GitHub"
              >
                <GithubIcon size={15} />
                <span>GITHUB</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>

          {/* Right Column: Signature Interaction Canvas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              className="mono"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                paddingInline: '4px'
              }}
            >
              <span>{sigT.title}</span>
              <span style={{ color: 'var(--accent-cyan)' }}>{personalContacts.coordinates}</span>
            </div>

            <System01Canvas t={sigT} />

            <div
              className="mono"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.70rem',
                color: 'var(--text-muted)',
                paddingInline: '4px'
              }}
            >
              <span>{sigT.subtitle}</span>
              <span>{t.terminalStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Cue */}
      <div
        className="container"
        style={{
          marginTop: 'clamp(24px, 4vw, 40px)',
          paddingTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.72rem'
        }}
      >
        <span className="mono" style={{ color: 'var(--text-muted)' }}>
          {t.scrollPrompt}
        </span>
        <a
          href="#work"
          className="mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--accent-cyan)'
          }}
          aria-label="Scroll to Selected Work"
        >
          <span>INDEX // 01</span>
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
};
