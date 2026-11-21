import { CircleDot, ExternalLink } from 'lucide-react';
import { useLang } from '../i18n';
import { inProgress } from '../data/projects';
import { Chip, Reveal } from './Section';

export default function InProgress() {
  const { t, pick } = useLang();
  if (!inProgress.length) return null;
  return (
    <Reveal className="mt-16">
      <p className="font-mono text-[13px] font-medium text-accent">{t.now.eyebrow}</p>
      <h3 className="mt-1.5 font-display text-[26px] font-bold">{t.now.title}</h3>
      <div className="mt-6 grid gap-[18px] md:grid-cols-2">
        {inProgress.map((p) => (
          <article key={p.id} className="card-lift rounded-2xl border border-line bg-bg p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 font-mono text-xs font-medium text-green-700">
                <CircleDot size={13} className="animate-pulse motion-reduce:animate-none" />{t.now.badge}
              </span>
              <span className="font-mono text-xs text-muted">{pick(p.since)}</span>
            </div>
            <p className="mt-4 font-mono text-xs text-muted">{pick(p.kind)}</p>
            <h4 className="mt-1 font-display text-xl font-bold">{pick(p.title)}</h4>
            <p className="mt-2 text-[15.5px] text-muted">{pick(p.text)}</p>
            {p.results && <p className="mt-3 rounded-lg border-l-[3px] border-accent bg-accent-soft/60 px-3 py-2 text-sm font-medium text-ink">{pick(p.results)}</p>}
            <div className="mt-3.5 flex flex-wrap gap-1.5">{p.tags.map((x) => <Chip key={x} small>{x}</Chip>)}</div>
            {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">{t.now.open}<ExternalLink size={14} /></a>}
          </article>
        ))}
      </div>
    </Reveal>
  );
}
