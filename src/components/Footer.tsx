import React from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { personalContacts } from '../data/portfolioData';

interface FooterProps {
  lang?: Language;
  t: Translations['contact'];
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ t }) => {

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface-1)',
        paddingBlock: '32px 40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {/* Left Brand Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              className="mono"
              style={{
                padding: '2px 6px',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                fontSize: '0.74rem'
              }}
            >
              NH
            </span>
            <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {personalContacts.name} — {CURRENT_YEAR}
            </span>
          </div>

          {/* Center Coordinates & Location */}
          <div
            className="mono"
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span className="pulse-indicator" style={{ width: '5px', height: '5px' }} />
            <span>{personalContacts.coordinates} — GULISTAN, UZ</span>
          </div>

          {/* Right Architecture Tag */}
          <div
            className="mono"
            style={{
              fontSize: '0.70rem',
              color: 'var(--text-muted)'
            }}
          >
            {t.architectureTag}
          </div>
        </div>

        {/* Legal & Semantic Bottom Line */}
        <div
          style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.72rem',
            color: 'var(--text-muted)'
          }}
        >
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            © {CURRENT_YEAR} {personalContacts.uzbekName}. {t.copyright}
          </p>

          <a
            href="#hero"
            className="mono"
            style={{
              color: 'var(--accent-cyan)',
              fontSize: '0.72rem',
              transition: 'opacity 0.15s ease'
            }}
          >
            ↑ RETURN TO APEX
          </a>
        </div>
      </div>
    </footer>
  );
};
