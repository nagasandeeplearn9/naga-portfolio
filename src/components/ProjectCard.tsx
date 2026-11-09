import { useId, useState } from 'react';
import type { Project } from '../types';
import { Icon } from './Icon';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <article className="card project" id={`project-${project.slug}`}>
      <div className="project__top">
        <span className="chip chip--accent">{project.category}</span>
        <span className="project__num">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__tagline">{project.tagline}</p>

      <ul className="chip-list project__stack" aria-label="Tech stack">
        {project.stack.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="project__toggle"
        aria-expanded={open}
        aria-controls={detailsId}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Hide case study' : 'Read case study'} <Icon name="chevron" />
      </button>

      <div id={detailsId} className={`project__details ${open ? 'is-open' : ''}`}>
        <div className="project__details-inner">
          <div className="project__block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="project__block">
            <h4>Approach</h4>
            <ul className="bullets">
              {project.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="project__block">
            <h4>Impact</h4>
            <ul className="bullets">
              {project.impact.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          {project.links && project.links.length > 0 && (
            <div className="project__links">
              {project.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
