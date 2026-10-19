import React from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { academicAchievements } from '../data/portfolioData';
import { Info } from 'lucide-react';

interface AchievementsProps {
  lang: Language;
  t: Translations['achievements'];
}

export const AchievementsSection: React.FC<AchievementsProps> = ({ lang, t }) => {
  return (
    <section id="achievements" style={{ paddingBlock: 'clamp(64px, 9vw, 112px)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span className="section-index">{t.sectionIndex}</span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            // VERIFIED ACADEMIC PROFILE
          </span>
        </div>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {/* Editorial Tabular Grid */}
        <div
          style={{
            background: 'var(--bg-surface-1)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}
        >
          {/* Table Header Row (Desktop) */}
          <div
            className="mono"
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 2.2fr 1.2fr 2fr 90px',
              padding: '14px 24px',
              background: 'var(--bg-surface-2)',
              borderBottom: '1px solid var(--border-subtle)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em'
            }}
          >
            <span>INDEX</span>
            <span>EXAMINATION / COMPETITION</span>
            <span>RESULT</span>
            <span>VALIDATING BODY / SCOPE</span>
            <span style={{ textAlign: 'right' }}>YEAR</span>
          </div>

          {/* Table Rows */}
          {academicAchievements.map((item, idx) => (
            <div
              key={item.id}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                padding: 'clamp(16px, 2vw, 22px) 24px',
                borderBottom: idx === academicAchievements.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                alignItems: 'center',
                gap: '12px',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {/* Code */}
              <div className="mono" style={{ fontSize: '0.74rem', color: 'var(--accent-cyan)' }}>
                {item.code}
              </div>

              {/* Title */}
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                  {item.title[lang]}
                </div>
                <span
                  className="mono"
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    display: 'inline-block',
                    marginTop: '2px'
                  }}
                >
                  CATEGORY: {item.category}
                </span>
              </div>

              {/* Score / Award */}
              <div>
                <span
                  className="mono"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    background: 'var(--accent-cyan-dim)',
                    padding: '4px 10px',
                    borderRadius: '2px',
                    border: '1px solid rgba(124, 231, 232, 0.3)',
                    display: 'inline-block'
                  }}
                >
                  {item.scoreOrAward}
                </span>
              </div>

              {/* Scope */}
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                {item.issuerOrScope[lang]}
              </div>

              {/* Year */}
              <div
                className="mono tabular"
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  textAlign: 'left'
                }}
              >
                {item.year}
              </div>
            </div>
          ))}
        </div>

        {/* District Stage Honesty Disclosure */}
        <div
          className="mono"
          style={{
            marginTop: '16px',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Info size={13} color="var(--accent-cyan)" />
          <span>{t.stageDisclaimer}</span>
        </div>
      </div>
    </section>
  );
};
