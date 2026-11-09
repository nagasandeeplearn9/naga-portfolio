import type { ComponentType } from 'react';

export interface SocialLink {
  label: string;
  url: string;
  icon: 'linkedin' | 'github' | 'email' | 'web';
}

export interface Profile {
  name: string;
  initials: string;
  headline: string;
  location: string;
  email: string;
  pitch: string;
  summary: string[];
  socials: SocialLink[];
  /** Path under /public, e.g. "photo.jpg". Falls back to initials avatar when empty. */
  photo?: string;
  /** Path under /public, e.g. "resume.pdf". Download button is hidden when empty. */
  resumeUrl?: string;
  stats: { value: string; label: string }[];
}

export interface SkillGroup {
  title: string;
  icon: 'ai' | 'code' | 'cloud' | 'data';
  skills: string[];
}

export interface Role {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  /** Stable id; reserved for future per-project pages (e.g. #/projects/:slug). */
  slug: string;
  title: string;
  tagline: string;
  category: 'Generative AI' | 'AI / Document Processing' | 'Modernization' | 'Integration' | 'Full Stack';
  featured: boolean;
  problem: string;
  approach: string[];
  impact: string[];
  stack: string[];
  links?: ProjectLink[];
}

export interface Certification {
  name: string;
  code: string;
  issuer: string;
  url?: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
}

export interface SectionConfig {
  id: string;
  label: string;
  component: ComponentType;
  /** Hide from nav (still rendered), e.g. the hero. */
  hideInNav?: boolean;
  enabled: boolean;
}
