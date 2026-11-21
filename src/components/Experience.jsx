import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useLang } from '../i18n';
import { internships, activities } from '../data/experience';
import { Reveal, SectionHead } from './Section';
import EventCarousel from './EventCarousel';

export default function Experience() {
  const { t, pick } = useLang();
  const [openId, setOpenId] = useState(null);

  return (
    <section id="experience" className="py-[88px]">
      <div className="mx-auto max-w-site px-6">
        <SectionHead eyebrow={t.experience.eyebrow} title={t.experience.title} />
        <Reveal as="ol" className="m-0 list-none p-0">
          {internships.map((e, i) => (
            <li key={i} className="tl grid grid-cols-[22px_1fr] gap-x-[18px] pb-[34px] last:pb-0 sm:grid-cols-[170px_28px_1fr]">
              <span className="col-start-2 row-start-1 pt-[3px] font-mono text-[13px] font-medium tabular-nums text-muted sm:col-start-1">{pick(e.when)}</span>
              <span className={`tl-dot relative col-start-1 row-span-2 row-start-1 sm:col-start-2 ${e.current ? 'is-current' : ''}`} aria-hidden="true" />
              <div className="col-start-2 sm:col-start-3 sm:row-start-1">
                <h3 className="font-display text-[19px] font-semibold">{pick(e.role)}</h3>
                <p className="text-[15px] font-medium text-accent">{pick(e.org)}</p>
                <ul className="mt-2 list-disc space-y-1 pl-[18px] text-muted">{pick(e.points).map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          ))}
        </Reveal>

        <h3 className="mb-[18px] mt-[52px] font-mono text-[15px] font-semibold uppercase tracking-[.06em] text-muted">{t.experience.activities}</h3>
        {['role', 'event'].map((kind) => (
          <div key={kind} className="mb-6">
            <p className="mb-3 text-sm font-semibold text-ink">{kind === 'role' ? t.experience.roles : t.experience.events}</p>
            <Reveal className={`grid gap-4 sm:grid-cols-2 ${kind === 'event' ? 'lg:grid-cols-3' : ''}`}>
              {activities.filter((a) => a.kind === kind).map((a) => <ActivityCard key={a.id} a={a} onOpen={setOpenId} />)}
            </Reveal>
          </div>
        ))}
        <EventCarousel />
      </div>
      <ActivityModal activity={activities.find((a) => a.id === openId) || null} onClose={() => setOpenId(null)} />
    </section>
  );
}

function ActivityCard({ a, onOpen }) {
  const { t, pick } = useLang();
  return (
    <article className="card-lift flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface">
      <div className="flex flex-1 flex-col p-[18px]">
        <p className="font-mono text-xs font-medium text-muted">{pick(a.when)}</p>
        <strong className="mt-1.5 block">{pick(a.title)}</strong>
        <span className="text-[15px] text-muted">{pick(a.text)}</span>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
          <button type="button" onClick={() => onOpen(a.id)} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            {t.experience.details}<ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

function ActivityModal({ activity, onClose }) {
  const { t, pick } = useLang();
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (activity && d && !d.open) d.showModal();
    if (!activity && d?.open) d.close();
  }, [activity]);

  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && ref.current.close()} aria-labelledby="activity-title"
      className="m-auto max-h-[calc(100vh-48px)] w-[min(760px,calc(100vw-24px))] rounded-[20px] bg-surface p-0 text-ink shadow-[0_40px_80px_-30px_rgba(11,22,48,.6)]">
      {activity && (
        <>
          <div className="relative bg-night px-7 py-6 text-white">
            <p className="font-mono text-xs font-medium text-[#8fa2d6]">{pick(activity.when)}</p>
            <h3 id="activity-title" className="mt-1.5 pr-12 font-display text-2xl font-bold">{pick(activity.title)}</h3>
            <button type="button" onClick={() => ref.current.close()} aria-label={t.experience.close}
              className="absolute right-[18px] top-[18px] grid h-[38px] w-[38px] place-items-center rounded-[10px] border border-white/20 hover:border-white/60"><X size={18} /></button>
          </div>
          <div className="grid gap-5 px-7 pb-8 pt-6">
            <ul className="list-disc space-y-1.5 pl-5">{pick(activity.points).map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </>
      )}
    </dialog>
  );
}
