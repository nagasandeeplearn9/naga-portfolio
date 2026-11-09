import { skillGroups } from '../data/skills';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Core expertise"
      lead="Generative AI on Azure, backed by solid software engineering and deep integration experience."
    >
      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} className="card skill-card" delay={i * 80}>
            <div className="skill-card__head">
              <span className="skill-card__icon">
                <Icon name={group.icon} />
              </span>
              <h3 className="skill-card__title">{group.title}</h3>
            </div>
            <ul className="chip-list">
              {group.skills.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
