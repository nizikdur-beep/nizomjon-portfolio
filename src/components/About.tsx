import React from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { personalContacts } from '../data/portfolioData';
import { GraduationCap, MapPin, Target } from 'lucide-react';

interface AboutProps {
  lang?: Language;
  t: Translations['about'];
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" style={{ paddingBlock: 'clamp(64px, 9vw, 112px)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span className="section-index">{t.sectionIndex}</span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            // PERSONAL ARCHITECTURE
          </span>
        </div>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {/* Editorial Split Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(32px, 6vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left: Authentic Framed Portrait */}
          <div>
            <div
              style={{
                position: 'relative',
                background: 'var(--bg-surface-1)',
                border: '1px solid var(--border-strong)',
                borderRadius: '2px',
                padding: '16px',
                boxShadow: '0 16px 36px rgba(0,0,0,0.4)'
              }}
            >
              {/* Corner Crosshair Marks */}
              <div
                style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  width: '10px',
                  height: '10px',
                  borderTop: '2px solid var(--accent-cyan)',
                  borderLeft: '2px solid var(--accent-cyan)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  width: '10px',
                  height: '10px',
                  borderTop: '2px solid var(--accent-cyan)',
                  borderRight: '2px solid var(--accent-cyan)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '-5px',
                  width: '10px',
                  height: '10px',
                  borderBottom: '2px solid var(--accent-cyan)',
                  borderLeft: '2px solid var(--accent-cyan)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  right: '-5px',
                  width: '10px',
                  height: '10px',
                  borderBottom: '2px solid var(--accent-cyan)',
                  borderRight: '2px solid var(--accent-cyan)'
                }}
              />

              {/* Real Portrait Photo Container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt={t.portraitAlt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(25%) contrast(105%)',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback visual if image fails
                    const target = e.currentTarget as HTMLElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Subtle Technical Reticle Overlay */}
                <div
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontSize: '0.68rem',
                    color: 'var(--accent-cyan)',
                    background: 'rgba(11, 13, 16, 0.75)',
                    padding: '2px 6px',
                    borderRadius: '2px'
                  }}
                >
                  LOC // {personalContacts.coordinates}
                </div>
              </div>

              {/* Caption & Metadata */}
              <div
                className="mono"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  fontSize: '0.72rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>{t.portraitCaption}</span>
                <span style={{ color: 'var(--accent-cyan)' }}>VERIFIED SUBJECT</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Fact Architecture */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Lead Narrative */}
            <div>
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  lineHeight: 1.7,
                  marginBottom: '16px'
                }}
              >
                {t.introParagraph}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '16px' }}>
                {t.bodyParagraph1}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                {t.bodyParagraph2}
              </p>
            </div>

            {/* Fact Architecture Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px'
              }}
            >
              {/* Card 1: Education */}
              <div
                style={{
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '16px'
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.70rem',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '6px'
                  }}
                >
                  <GraduationCap size={13} />
                  <span>{t.educationLabel}</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  {t.educationValue}
                </div>
              </div>

              {/* Card 2: Location */}
              <div
                style={{
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '16px'
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.70rem',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '6px'
                  }}
                >
                  <MapPin size={13} />
                  <span>{t.locationLabel}</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  {t.locationValue}
                </div>
              </div>

              {/* Card 3: Ambition */}
              <div
                style={{
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '16px',
                  gridColumn: '1 / -1'
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.70rem',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '6px'
                  }}
                >
                  <Target size={13} />
                  <span>{t.ambitionLabel}</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  {t.ambitionValue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
