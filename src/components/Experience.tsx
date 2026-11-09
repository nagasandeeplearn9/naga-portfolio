import { useState } from 'react';
import { experience } from '../data/experience';
import type { Role } from '../types';
import { Reveal } from './Reveal';
import { Section } from './Section';

const PREVIEW_COUNT = 4;

function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = role.highlights.length > PREVIEW_COUNT;
  const shown = expanded ? role.highlights : role.highlights.slice(0, PREVIEW_COUNT);

  return (
    <article className="card role">
      <div className="role__head">
        <h3 className="role__title">
          {role.title} <span className="role__company">@ {role.company}</span>
        </h3>
        <span className="role__period">
          {role.start} – {role.end}
        </span>
      </div>
      <p className="role__location">{role.location}</p>
      <ul className="bullets role__highlights">
        {shown.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {hasMore && (
        <button type="button" className="role__more" aria-expanded={expanded} onClick={() => setExpanded((e) => !e)}>
          {expanded ? 'Show less' : `Show ${role.highlights.length - PREVIEW_COUNT} more`}
        </button>
      )}
      <ul className="chip-list role__tags" aria-label="Skills used">
        {role.tags.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 · Experience" title="Where I've worked" lead="Nine years across AI, cloud modernization, and enterprise integration.">
      <ol className="timeline">
        {experience.map((role) => (
          <Reveal as="li" key={`${role.company}-${role.start}`} className="timeline__item">
            <span className="timeline__dot" aria-hidden="true" />
            <RoleCard role={role} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
