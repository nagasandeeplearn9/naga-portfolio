import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import { Section } from './Section';

const ALL = 'All';

export function Projects() {
  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const categories = useMemo(() => [ALL, ...new Set(featured.map((p) => p.category))], [featured]);
  // Filters appear automatically once a category holds 2+ projects.
  const showFilters = categories.slice(1).some((c) => featured.filter((p) => p.category === c).length > 1);
  const [filter, setFilter] = useState(ALL);
  const visible = filter === ALL ? featured : featured.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title={<>Featured <span className="gradient-text">case studies</span></>}
      lead="Production systems I've designed and built: what the problem was, how I approached it, and what it changed."
    >
      {showFilters && (
        <Reveal className="projects__filters" as="div">
          {categories.map((c) => (
            <button key={c} type="button" className="filter-btn" aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </Reveal>
      )}
      <div className="projects__grid">
        {visible.map((p) => (
          <Reveal key={p.slug}>
            <ProjectCard project={p} index={featured.indexOf(p)} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
