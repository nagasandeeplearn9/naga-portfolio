import { profile } from '../data/profile';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Contact() {
  const linkedin = profile.socials.find((s) => s.icon === 'linkedin');
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="card contact">
          <p className="section__eyebrow">06 · Contact</p>
          <h2 id="contact-title" className="contact__title">
            Let's build something <span className="gradient-text">intelligent</span>
          </h2>
          <p className="contact__text">
            Open to conversations about AI engineering roles, generative AI projects, and integration modernization. The fastest way to reach me is email or LinkedIn.
          </p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <Icon name="email" /> Email me
            </a>
            {linkedin && (
              <a className="btn" href={linkedin.url} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> Connect on LinkedIn
              </a>
            )}
          </div>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
