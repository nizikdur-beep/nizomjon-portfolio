import React from 'react';
import type { Language } from '../types';
import type { Translations } from '../i18n/translations';
import { portfolioProjects } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { ExternalLink, CheckCircle2, Terminal } from 'lucide-react';

interface SelectedWorkProps {
  lang: Language;
  t: Translations['work'];
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ lang, t }) => {

  const featured = portfolioProjects.find((p) => p.featured) || portfolioProjects[0];
  const otherProjects = portfolioProjects.filter((p) => p.id !== featured.id);

  return (
    <section id="work" style={{ paddingBlock: 'clamp(64px, 9vw, 112px)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span className="section-index">{t.sectionIndex}</span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            // 05 VERIFIED REPOSITORIES
          </span>
        </div>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {/* 1. Featured Project Showcase (Architectural Blueprint Style) */}
        <div
          style={{
            background: 'var(--bg-surface-1)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            marginBottom: 'clamp(32px, 5vw, 56px)',
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(0,0,0,0.35)'
          }}
        >
          {/* Featured Top Meta Bar */}
          <div
            className="mono"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 20px',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface-2)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-indicator" style={{ width: '6px', height: '6px' }} />
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{t.featuredTag}</span>
              <span>— {featured.systemCode}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)' }}>
              <CheckCircle2 size={13} />
              <span>{t.verifiedGitHub}</span>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              padding: 'clamp(24px, 4vw, 40px)'
            }}
          >
            {/* Left: Project Details & Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  PROJECT // 01
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBlock: '6px 10px'
                  }}
                >
                  {featured.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 500,
                    marginBottom: '12px'
                  }}
                >
                  {featured.tagline[lang]}
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {featured.description[lang]}
                </p>
              </div>

              {/* Engineering Problem Addressed Callout */}
              <div
                style={{
                  background: 'var(--bg-obsidian)',
                  borderLeft: '2px solid var(--accent-cyan)',
                  padding: '14px 18px',
                  borderRadius: '0 2px 2px 0'
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--accent-cyan)',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Terminal size={12} />
                  <span>{t.problemLabel}</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  {featured.problemSolved[lang]}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {t.stackLabel}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono"
                      style={{
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        background: 'var(--bg-surface-2)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '6px' }}>
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label={`${featured.title} Source Code (opens in new window)`}
                >
                  <GithubIcon size={14} />
                  <span>{t.viewCode}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right: Technical Blueprint Visualizer */}
            <div
              style={{
                background: 'var(--bg-obsidian)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Architectural Grid Schema Header */}
              <div
                className="mono"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.70rem',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '12px'
                }}
              >
                <span>SCHEMA ARCHITECTURE</span>
                <span style={{ color: 'var(--accent-cyan)' }}>PHP 8.x + MYSQL ENGINE</span>
              </div>

              {/* Visual Architectural Diagram */}
              <div
                style={{
                  paddingBlock: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                {/* Node 1: Telegram Client */}
                <div
                  className="mono"
                  style={{
                    padding: '10px 14px',
                    background: 'var(--bg-surface-1)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.78rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>[CLIENT] Telegram Bot User</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.70rem' }}>HTTPS / WEBHOOK</span>
                </div>

                <div
                  style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  ↓ JSON Payload Payload Dispatched
                </div>

                {/* Node 2: PHP Application Router */}
                <div
                  className="mono"
                  style={{
                    padding: '10px 14px',
                    background: 'var(--bg-surface-2)',
                    border: '1px solid var(--accent-cyan)',
                    fontSize: '0.78rem',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>[ROUTER] PHP Request Handler</span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.70rem' }}>VALIDATION &amp; LOGIC</span>
                </div>

                <div
                  style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  ↓ Prepared SQL Queries
                </div>

                {/* Node 3: MySQL Relational DB */}
                <div
                  className="mono"
                  style={{
                    padding: '10px 14px',
                    background: 'var(--bg-surface-1)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.78rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>[DATABASE] MySQL Schema</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.70rem' }}>RELATIONAL PERSISTENCE</span>
                </div>
              </div>

              {/* Bottom Blueprint Tag */}
              <div
                className="mono"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <span>SYS.AUDIT: AUTHENTIC CODEBASE</span>
                <span>GITHUB: nizikdur-beep/yoshlarhub</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Secondary Projects: Systematic Editorial Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: 'var(--bg-surface-1)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: 'clamp(18px, 2.5vw, 28px)',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '20px',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Project Index & Category */}
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '6px'
                  }}
                >
                  <span>0{index + 2} //</span>
                  <span>{project.systemCode}</span>
                </div>
                <h4
                  style={{
                    fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                    fontWeight: 700,
                    marginBottom: '6px'
                  }}
                >
                  {project.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  {project.tagline[lang]}
                </p>
              </div>

              {/* Problem Addressed Breakdown */}
              <div
                style={{
                  borderLeft: '1px solid var(--border-subtle)',
                  paddingLeft: '16px'
                }}
              >
                <div className="mono" style={{ fontSize: '0.70rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {t.problemLabel}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {project.problemSolved[lang]}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                  {project.tags.map((tItem) => (
                    <span
                      key={tItem}
                      className="mono"
                      style={{
                        fontSize: '0.68rem',
                        padding: '2px 7px',
                        background: 'var(--bg-surface-2)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mono"
                  style={{ fontSize: '0.75rem', padding: '8px 16px' }}
                  aria-label={`${project.title} Source Code (opens in new window)`}
                >
                  <GithubIcon size={14} />
                  <span>{t.viewCode}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
