import React from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { experienceData } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  lang: Language;
  t: Translations['experience'];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ lang, t }) => {
  return (
    <section id="experience" style={{ paddingBlock: 'clamp(64px, 9vw, 112px)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span className="section-index">{t.sectionIndex}</span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            // APPLIED INSTRUCTION &amp; MENTORSHIP
          </span>
        </div>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {/* Experience Timeline Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              style={{
                background: 'var(--bg-surface-1)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: 'clamp(24px, 4vw, 40px)',
                position: 'relative'
              }}
            >
              {/* Top Meta Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '16px',
                  marginBottom: '20px'
                }}
              >
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: '0.74rem',
                      color: 'var(--accent-cyan)',
                      marginBottom: '4px'
                    }}
                  >
                    {exp.statusTag[lang]}
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 700 }}>
                    {exp.company}
                  </h3>
                  <div
                    style={{
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      marginTop: '2px'
                    }}
                  >
                    {exp.role[lang]}
                  </div>
                </div>

                <div
                  className="mono"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '6px',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={13} color="var(--accent-cyan)" />
                    {exp.period[lang]}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} color="var(--accent-cyan)" />
                    {exp.location[lang]}
                  </span>
                </div>
              </div>

              {/* Responsibilities Breakdown */}
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px'
                  }}
                >
                  // {t.coreDuties}
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                    gap: '14px'
                  }}
                >
                  {exp.responsibilities[lang].map((resp, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--bg-obsidian)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        padding: '14px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
