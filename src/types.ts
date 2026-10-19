export type Language = 'en' | 'uz';

export interface Project {
  id: string;
  title: string;
  tagline: {
    en: string;
    uz: string;
  };
  description: {
    en: string;
    uz: string;
  };
  problemSolved: {
    en: string;
    uz: string;
  };
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  category: 'Fullstack / Backend' | 'Frontend Web App' | 'Interactive UI';
  systemCode: string;
}

export interface Achievement {
  id: string;
  title: {
    en: string;
    uz: string;
  };
  scoreOrAward: string;
  issuerOrScope: {
    en: string;
    uz: string;
  };
  year: string;
  category: 'Standardized Exam' | 'Language' | 'Olympiad' | 'Academic';
  code: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: {
    en: string;
    uz: string;
  };
  period: {
    en: string;
    uz: string;
  };
  location: {
    en: string;
    uz: string;
  };
  statusTag: {
    en: string;
    uz: string;
  };
  responsibilities: {
    en: string[];
    uz: string[];
  };
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend-learning' | 'tooling';
  status: 'production' | 'exploring' | 'workflow';
  note?: {
    en: string;
    uz: string;
  };
}
