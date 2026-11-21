import { GraduationCap, Target, Users } from 'lucide-react';
import { useLang } from '../i18n';
import { Reveal, SectionHead } from './Section';

const ICONS = { cap: GraduationCap, target: Target, users: Users };

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="border-y border-line bg-surface py-[88px]">
      <div className="mx-auto max-w-site px-6">
        <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-4">
            {t.about.paragraphs.map((p) => <p key={p.slice(0, 20)} className="max-w-[64ch]">{p}</p>)}
          </Reveal>
          <Reveal className="grid content-start gap-3">
            {t.about.facts.map(({ icon, title, text }) => {
              const Icon = ICONS[icon];
              return (
                <div key={title} className="grid grid-cols-[44px_1fr] items-start gap-3.5 rounded-[14px] border border-line bg-bg p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-accent-soft text-accent"><Icon size={20} /></span>
                  <div><strong className="block font-semibold">{title}</strong><span className="text-[15px] text-muted">{text}</span></div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
