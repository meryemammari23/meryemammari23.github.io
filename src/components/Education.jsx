import { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useLang } from '../i18n';
import { education, certifications } from '../data/experience';
import { Reveal, SectionHead } from './Section';
import Lightbox from './Lightbox';
import { certificateFiles } from '../data/media';

export default function Education() {
  const { t, pick } = useLang();
  return (
    <section id="education" className="border-y border-line bg-surface py-[88px]">
      <div className="mx-auto max-w-site px-6">
        <SectionHead eyebrow={t.education.eyebrow} title={t.education.title} />
        <Reveal className="grid gap-[18px] md:grid-cols-2">
          {education.map((e) => (
            <article key={e.when} className={`rounded-2xl border bg-surface p-6 ${e.main ? 'border-[#c7d3fb] shadow-[inset_4px_0_0_#1f4fe0]' : 'border-line'}`}>
              <p className="font-mono text-[13px] font-medium text-muted">{e.when}</p>
              <h3 className="mt-2 font-display text-[19px] font-semibold">{pick(e.title)}</h3>
              <p className="mt-1.5 text-muted">{pick(e.text)}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// Section Certifications et attestations, avec aperçu cliquable. Masquée si la liste est vide.
export function Certifications() {
  const { t, pick } = useLang();
  const [open, setOpen] = useState(null);
  if (!certifications.length) return null;
  const images = certifications.map((c) => ({ url: certificateFiles[c.image], caption: pick(c.name) }));
  return (
    <section id="certifications" className="py-[88px]">
      <div className="mx-auto max-w-site px-6">
      <SectionHead eyebrow={t.certifications.eyebrow} title={t.certifications.title} />
      <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <article key={c.image} className="card-lift flex flex-col overflow-hidden rounded-[14px] border border-line bg-bg">
            {certificateFiles[c.image] && (
              <button type="button" onClick={() => setOpen(i)} aria-label={`${t.certifications.view} : ${pick(c.name)}`} className="overflow-hidden border-b border-line bg-white">
                <img src={certificateFiles[c.image]} alt={pick(c.name)} loading="lazy" className="aspect-[4/3] w-full object-contain p-2 transition-transform hover:scale-[1.03]" />
              </button>
            )}
            <div className="flex flex-1 gap-3 p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-accent-soft text-accent"><Award size={17} /></span>
              <div>
                <strong className="block text-[15px] leading-snug">{pick(c.name)}</strong>
                <span className="text-sm text-muted">{c.issuer} · {pick(c.date)}</span>
                {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-1 text-sm font-semibold text-accent">{t.certifications.verify}<ExternalLink size={13} /></a>}
              </div>
            </div>
          </article>
        ))}
      </Reveal>
      <Lightbox images={images} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      </div>
    </section>
  );
}
