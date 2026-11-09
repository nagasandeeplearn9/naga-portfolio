import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
}

/** Standard section shell: anchor id, eyebrow, heading, optional lead. */
export function Section({ id, eyebrow, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          {lead && <p className="section__lead">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
