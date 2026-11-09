import { certifications } from '../data/certifications';
import { education } from '../data/education';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="05 · Credentials" title="Certifications & education">
      <div className="creds__grid">
        <Reveal className="creds__col">
          <h3>
            <Icon name="award" /> Certifications
          </h3>
          <ul className="creds__list">
            {certifications.map((c) => {
              const body = (
                <>
                  <span className="cred__badge">{c.code}</span>
                  <div>
                    <p className="cred__title">{c.name}</p>
                    <p className="cred__sub">{c.issuer}</p>
                  </div>
                </>
              );
              return (
                <li key={c.code}>
                  {c.url ? (
                    <a className="card cred" href={c.url} target="_blank" rel="noopener noreferrer">
                      {body}
                    </a>
                  ) : (
                    <div className="card cred">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal className="creds__col" delay={120}>
          <h3>
            <Icon name="cap" /> Education
          </h3>
          <ul className="creds__list">
            {education.map((e) => (
              <li key={e.school} className="card cred">
                <span className="cred__badge">{e.degree.match(/\(([^)]+)\)/)?.[1] ?? e.degree}</span>
                <div>
                  <p className="cred__title">
                    {e.degree.replace(/\s*\(.*\)/, '')}, {e.field}
                  </p>
                  <p className="cred__sub">
                    {e.school} · {e.period}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
