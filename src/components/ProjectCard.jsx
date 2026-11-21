import { ExternalLink, Github, Images } from 'lucide-react';
import { useLang } from '../i18n';
import { screenshots } from '../data/media';
import { Chip } from './Section';
import { Button } from './Buttons';

export function ProjectCover({ project, label }) {
  const shots = screenshots[project.id] || [];
  if (shots.length) {
    return (
      <div className="relative aspect-video overflow-hidden bg-night">
        <img src={shots[0]} alt={`${project.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-[1.03]" />
        <span className="absolute left-3 top-3 rounded-md bg-night/80 px-2 py-1 font-mono text-xs text-white">{label}</span>
      </div>
    );
  }
  return (
    <div className="cover-grid relative flex aspect-video flex-col justify-between overflow-hidden bg-night p-[18px] text-[#dfe6f7]">
      <span className="relative z-[1] self-start rounded-md bg-white/10 px-2 py-1 font-mono text-xs">{label}</span>
      <div className="relative z-[1] font-display text-[26px] font-bold leading-tight text-white">
        {project.title}
        <small className="mt-1 block font-mono text-xs font-medium text-[#8fa2d6]">{project.code}</small>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onOpen }) {
  const { t, pick } = useLang();
  const shots = screenshots[project.id] || [];
  return (
    <article className="group/card card-lift flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface">
      <ProjectCover project={project} label={t.projects.filters[project.cats[0]]} />
      <div className="flex flex-1 flex-col gap-2.5 p-5 pb-[22px]">
        <p className="font-mono text-xs font-medium text-muted">{pick(project.context)}{project.team && ` · ${t.projects.team}`}</p>
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="text-[15.5px] text-muted">{pick(project.short)}</p>
        <div className="flex flex-wrap gap-1.5">{project.tech.map((x) => <Chip key={x} small>{x}</Chip>)}</div>
        {shots.length > 1 && <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted"><Images size={14} />{shots.length} {t.projects.screenshots}</p>}
        <div className="no-print mt-auto flex flex-wrap gap-2 pt-2.5">
          {project.details && <Button className="!px-3 !py-2 !text-sm" onClick={() => onOpen(project.id)}>{t.projects.details}</Button>}
          {project.repo && <Button variant="outline" className="!px-3 !py-2 !text-sm" href={project.repo}><Github size={16} />{t.projects.github}</Button>}
          {project.demoUrl && <Button variant="outline" className="!px-3 !py-2 !text-sm" href={project.demoUrl}><ExternalLink size={16} />{t.projects.demo}</Button>}
        </div>
      </div>
    </article>
  );
}
