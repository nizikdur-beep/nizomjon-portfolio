import React, { useState } from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { personalContacts } from '../data/portfolioData';
import { GithubIcon, InstagramIcon } from './SocialIcons';
import { Mail, Copy, Check, Send, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  lang?: Language;
  t: Translations['contact'];
}

export const ContactSection: React.FC<ContactProps> = ({ t }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalContacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" style={{ paddingBlock: 'clamp(80px, 11vw, 136px)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span className="section-index">{t.sectionIndex}</span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            // DIRECT COMMUNICATION
          </span>
        </div>

        {/* Big Editorial Headline */}
        <div style={{ maxWidth: '840px', marginBottom: 'clamp(36px, 6vw, 64px)' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.8vw, 4.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              marginBottom: '16px'
            }}
          >
            {t.headline}
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              lineHeight: 1.6
            }}
          >
            {t.subheadline}
          </p>
        </div>

        {/* Primary Contact Action Hub */}
        <div
          style={{
            background: 'var(--bg-surface-1)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            padding: 'clamp(24px, 4vw, 48px)',
            marginBottom: '40px',
            boxShadow: '0 20px 48px rgba(0,0,0,0.45)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center'
            }}
          >
            {/* Email Direct Module */}
            <div>
              <div
                className="mono"
                style={{
                  fontSize: '0.74rem',
                  color: 'var(--accent-cyan)',
                  marginBottom: '8px'
                }}
              >
                // PRIMARY INBOX
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  wordBreak: 'break-all'
                }}
              >
                {personalContacts.email}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${personalContacts.email}?subject=Collaboration%20Inquiry%20-%20Nizomjon%20Husanov`}
                  className="btn-primary"
                >
                  <Mail size={15} />
                  <span>{t.directMail}</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  aria-live="polite"
                >
                  {copied ? <Check size={15} color="var(--accent-cyan)" /> : <Copy size={15} />}
                  <span>{copied ? t.copied : t.copyEmail}</span>
                </button>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px'
              }}
            >
              {/* Telegram */}
              <a
                href={personalContacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--bg-obsidian)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '16px',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <Send size={16} color="var(--accent-cyan)" />
                  <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  Telegram
                </div>
                <div className="mono" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  @husanov_n
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalContacts.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--bg-obsidian)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '16px',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <GithubIcon size={16} color="var(--accent-cyan)" />
                  <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  GitHub
                </div>
                <div className="mono" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  @nizikdur-beep
                </div>
              </a>

              {/* Phone Direct */}
              <a
                href={`tel:${personalContacts.phone}`}
                style={{
                  background: 'var(--bg-obsidian)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '16px',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <Phone size={16} color="var(--accent-cyan)" />
                  <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  Phone
                </div>
                <div className="mono tabular" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  {personalContacts.phone}
                </div>
              </a>

              {/* Instagram */}
              <a
                href={personalContacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--bg-obsidian)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '16px',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <InstagramIcon size={16} color="var(--accent-cyan)" />
                  <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  Instagram
                </div>
                <div className="mono" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  @khusnv.n
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
