import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLang } from '../i18n';
import { screenshots } from '../data/media';
import { Chip } from './Section';
import { Button } from './Buttons';
import Lightbox from './Lightbox';

export default function ProjectModal({ project, onClose }) {
  const { t, pick } = useLang();
  const ref = useRef(null);
  const [shot, setShot] = useState(null);

  useEffect(() => {
    const d = ref.current;
    if (project && d && !d.open) d.showModal();
    if (!project && d?.open) d.close();
  }, [project]);

  if (!project) return <dialog ref={ref} className="hidden" />;
  const d = pick(project.details);
  const m = t.modal;
  const shots = (screenshots[project.id] || []).map((url, i) => ({ url, caption: `${project.title} · ${i + 1}` }));

  const Block = ({ title, children }) => (
    <div><h4 className="mb-1.5 font-mono text-[13px] font-semibold uppercase tracking-wider text-accent">{title}</h4>{children}</div>
  );

  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && ref.current.close()} aria-labelledby="modal-title"
      className="project-modal m-auto max-h-[calc(100vh-48px)] w-[min(780px,calc(100vw-24px))] rounded-[20px] bg-surface p-0 text-ink shadow-[0_40px_80px_-30px_rgba(11,22,48,.6)]">
      <div className="relative bg-night px-7 py-6 text-white">
        <p className="font-mono text-xs font-medium text-[#8fa2d6]">{pick(project.context)}{project.team && ` · ${t.projects.team}`}</p>
        <h3 id="modal-title" className="mt-1.5 pr-12 font-display text-[26px] font-bold">{project.title}</h3>
        <button type="button" onClick={() => ref.current.close()} aria-label={m.close} className="absolute right-[18px] top-[18px] grid h-[38px] w-[38px] place-items-center rounded-[10px] border border-white/20 hover:border-white/60"><X size={18} /></button>
      </div>
      <div className="grid gap-5 px-7 pb-8 pt-6">
        <Block title={m.overview}><p>{d.overview}</p></Block>
        <Block title={m.problem}><p>{d.problem}</p></Block>
        <Block title={m.objectives}><ul className="list-disc space-y-1 pl-5">{d.objectives.map((o) => <li key={o}>{o}</li>)}</ul></Block>
        <Block title={m.solution}><p>{d.solution}</p></Block>
        <Block title={m.architecture}><p>{d.architecture}</p></Block>
        <Block title={m.tech}><div className="flex flex-wrap gap-1.5">{project.tech.map((x) => <Chip key={x} small>{x}</Chip>)}</div></Block>
        {project.team && <Block title={m.contribution}><p className="border-l-[3px] border-accent pl-3 text-sm text-muted">{m.teamNote}</p></Block>}
        {d.results && <Block title={m.results}><p>{d.results}</p></Block>}
        {shots.length > 0 && (
          <Block title={m.screenshots}>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {shots.map((s, i) => (
                <button key={s.url} type="button" onClick={() => setShot(i)} className="overflow-hidden rounded-lg border border-line">
                  <img src={s.url} alt={s.caption} loading="lazy" className="aspect-video w-full object-cover object-top transition-transform hover:scale-105" />
                </button>
              ))}
            </div>
          </Block>
        )}
        {project.youtube && (
          <Block title={m.demo}>
            <div className="aspect-video overflow-hidden rounded-xl bg-night">
              <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${project.youtube}`} title={`${project.title} demo`} loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </Block>
        )}
        {(project.repo || project.demoUrl) && (
          <div className="flex flex-wrap gap-2.5">
            {project.repo && <Button variant="outline" href={project.repo}><Github size={17} />{m.repo}</Button>}
            {project.demoUrl && <Button variant="outline" href={project.demoUrl}><ExternalLink size={17} />{t.projects.demo}</Button>}
          </div>
        )}
      </div>
      <Lightbox images={shots} index={shot} onChange={setShot} onClose={() => setShot(null)} />
    </dialog>
  );
}
