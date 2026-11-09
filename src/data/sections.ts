import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Credentials } from '../components/Credentials';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import type { SectionConfig } from '../types';

/**
 * Page layout registry. Order here = order on the page and in the nav.
 * To add a section (Blog, Talks, Testimonials...): create a component that renders
 * <Section id="..."> and add an entry below. Set `enabled: false` to hide one.
 */
export const sections: SectionConfig[] = [
  { id: 'top', label: 'Home', component: Hero, hideInNav: true, enabled: true },
  { id: 'about', label: 'About', component: About, enabled: true },
  { id: 'skills', label: 'Skills', component: Skills, enabled: true },
  { id: 'projects', label: 'Projects', component: Projects, enabled: true },
  { id: 'experience', label: 'Experience', component: Experience, enabled: true },
  { id: 'credentials', label: 'Credentials', component: Credentials, enabled: true },
  { id: 'contact', label: 'Contact', component: Contact, enabled: true },
];
