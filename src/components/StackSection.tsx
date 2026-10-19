import React from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { techStackItems } from '../data/portfolioData';
import { Code, Database, Wrench, AlertCircle } from 'lucide-react';

interface StackSectionProps {
  lang: Language;
  t: Translations['stack'];
}

export const StackSection: React.FC<StackSectionProps> = ({ lang, t }) => {
  const frontendStack = techStackItems.filter((i) => i.category === 'frontend');
  const backendStack = techStackItems.filter((i) => i.category === 'backend-learning');
  const toolingStack = techStackItems.filter((i) => i.category === 'tooling');

  return (
    <section id="stack" style={{ paddingBlock: 'clamp(64px, 9vw, 112px)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span className="section-index">{t.sectionIndex}</span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            // VERIFIED CAPABILITIES
          </span>
        </div>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {/* Rigorous Architectural Tiers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* TIER 1: Core Frontend Architecture */}
          <div
            style={{
              background: 'var(--bg-surface-1)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              padding: 'clamp(20px, 3vw, 32px)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '14px',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Code size={18} color="var(--accent-cyan)" />
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{t.frontendTitle}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{t.frontendSubtitle}</p>
                </div>
              </div>
              <span
                className="mono"
                style={{
                  fontSize: '0.70rem',
                  padding: '3px 8px',
                  background: 'var(--accent-cyan-dim)',
                  border: '1px solid rgba(124, 231, 232, 0.3)',
                  color: 'var(--accent-cyan)',
                  borderRadius: '2px'
                }}
              >
                CONFIRMED STACK
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '14px'
              }}
            >
              {frontendStack.map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: 'var(--bg-obsidian)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '16px',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      marginBottom: '6px'
                    }}
                  >
                    {item.name}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.note ? item.note[lang] : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 2: Backend Learning Tier */}
          <div
            style={{
              background: 'var(--bg-surface-1)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              padding: 'clamp(20px, 3vw, 32px)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '14px',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Database size={18} color="var(--accent-cyan)" />
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{t.backendTitle}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{t.backendSubtitle}</p>
                </div>
              </div>
              <span
                className="mono"
                style={{
                  fontSize: '0.70rem',
                  padding: '3px 8px',
                  background: 'rgba(240, 242, 244, 0.08)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-primary)',
                  borderRadius: '2px'
                }}
              >
                {t.exploringTag}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '14px'
              }}
            >
              {backendStack.map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: 'var(--bg-obsidian)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '16px',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px'
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {item.name}
                    </span>
                    <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)' }}>
                      [ACTIVE STUDY]
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.note ? item.note[lang] : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 3: Tooling & Workflow */}
          <div
            style={{
              background: 'var(--bg-surface-1)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px',
              padding: 'clamp(20px, 3vw, 32px)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '14px',
                marginBottom: '20px'
              }}
            >
              <Wrench size={18} color="var(--accent-cyan)" />
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{t.toolingTitle}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{t.toolingSubtitle}</p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '14px'
              }}
            >
              {toolingStack.map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: 'var(--bg-obsidian)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '16px',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      marginBottom: '6px'
                    }}
                  >
                    {item.name}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.note ? item.note[lang] : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ethical Standards Note */}
        <div
          className="mono"
          style={{
            marginTop: '24px',
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <AlertCircle size={14} color="var(--accent-cyan)" />
          <span>{t.noFakeStatsNotice}</span>
        </div>
      </div>
    </section>
  );
};
