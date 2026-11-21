import { useState } from 'react';
import { useLang } from '../i18n';
import { projects } from '../data/projects';
import { Reveal, SectionHead } from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import InProgress from './InProgress';

const FILTERS = ['all', 'ai', 'data', 'fullstack', 'se'];

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);
  const list = projects.filter((p) => filter === 'all' || p.cats.includes(filter));

  return (
    <section id="projects" className="border-y border-line bg-surface py-[88px]">
      <div className="mx-auto max-w-site px-6">
        <SectionHead eyebrow={t.projects.eyebrow} title={t.projects.title}>
          <div role="group" aria-label="Filter" className="no-print flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f}
                className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${filter === f ? 'border-night bg-night text-white' : 'border-line bg-surface text-muted hover:text-ink'}`}>
                {t.projects.filters[f]}
              </button>
            ))}
          </div>
        </SectionHead>
        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {list.map((p) => <ProjectCard key={p.id} project={p} onOpen={setOpenId} />)}
        </div>
        {list.length === 0 && <p className="text-muted">{t.projects.empty}</p>}

        <InProgress />
      </div>
      <ProjectModal project={projects.find((p) => p.id === openId) || null} onClose={() => setOpenId(null)} />
    </section>
  );
}
