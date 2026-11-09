import { profile } from '../data/profile';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title={<>From enterprise integration to <span className="gradient-text">applied AI</span></>}>
      <div className="about__grid">
        <Reveal className="about__text">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
        <Reveal className="about__side" delay={120}>
          {profile.photo ? (
            <img className="avatar" src={profile.photo} alt={profile.name} width={96} height={96} />
          ) : (
            <div className="avatar avatar--initials" aria-hidden="true">
              {profile.initials}
            </div>
          )}
          <div className="stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="card stat">
                <div className="stat__value gradient-text">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
