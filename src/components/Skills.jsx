import { BarChart3, Brain, Cloud, Code2, Cpu, Database, LayoutTemplate, Server, Wrench } from 'lucide-react';
import { useLang } from '../i18n';
import { skills } from '../data/skills';
import { Chip, Reveal, SectionHead } from './Section';

const ICONS = { code: Code2, brain: Brain, chart: BarChart3, server: Server, layout: LayoutTemplate, db: Database, cloud: Cloud, tool: Wrench, cpu: Cpu };

export default function Skills() {
  const { t, lang } = useLang();
  return (
    <section id="skills" className="py-[88px]">
      <div className="mx-auto max-w-site px-6">
        <SectionHead eyebrow={t.skills.eyebrow} title={t.skills.title}><p className="m-0 max-w-[52ch] text-muted">{t.skills.sub}</p></SectionHead>
        <Reveal className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <article key={s.en} className="card-lift rounded-2xl border border-line bg-surface p-[22px]">
                <div className="mb-3.5 flex items-center gap-3">
                  <span className="icon-pop grid h-10 w-10 place-items-center rounded-[10px] bg-accent-soft text-accent"><Icon size={19} /></span>
                  <h3 className="font-display text-[17px] font-semibold">{s[lang]}</h3>
                </div>
                <div className="flex flex-wrap gap-[7px]">{s.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
                {s.basics?.length > 0 && (
                  <div className="mt-3.5 border-t border-dashed border-line pt-3">
                    <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">{t.skills.basics}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.basics.map((i) => <span key={i} className="rounded-full border border-dashed border-line px-2.5 py-0.5 text-xs text-muted">{i}</span>)}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
