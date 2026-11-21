import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLang } from '../i18n';
import { profile } from '../data/profile';
import { cv } from '../data/media';
import { Button, IconLink } from './Buttons';
import photo from '../assets/profile.jpg';

const STAGES = ['ingest', 'OCR', 'parse', 'normalize', 'store'];

export default function Hero() {
  const { t, lang, pick } = useLang();
  // Un bouton par version disponible (EN / FR), la langue du site en premier.
  const cvs = [lang, lang === 'en' ? 'fr' : 'en'].filter((l) => cv[l]);

  return (
    <header id="home" className="pb-[72px] pt-14">
      <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-[1.15fr_.85fr]">
        <div className="hero-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[13px] font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_0_4px_rgba(22,163,74,.18)]" aria-hidden="true" />
            {t.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-[clamp(42px,6.4vw,72px)] font-extrabold leading-[1.02] tracking-tight">{profile.name}</h1>
          <p className="mt-5 font-display text-[clamp(19px,2.2vw,23px)] font-semibold">AI &amp; Software <span className="text-accent">Engineering</span></p>
          <p className="mt-1.5 font-mono text-[15px] font-medium text-muted">{profile.subtitle}</p>
          <p className="mt-6 max-w-[56ch] text-muted">{t.hero.lede}</p>
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <Button href="#projects">{t.hero.projects}<ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" /></Button>
            {cvs.length > 0 && (
              <div className="inline-flex overflow-hidden rounded-[10px] border border-night bg-night text-white" role="group" aria-label={t.hero.cv}>
                <span className="inline-flex items-center gap-2 px-4 py-3 text-[15px] font-semibold"><Download size={17} />{t.hero.cv}</span>
                {cvs.map((l) => (
                  <a key={l} href={cv[l]} download={`CV_Meryem_AMMARI_${l.toUpperCase()}.pdf`}
                    className="inline-flex items-center border-l border-white/20 px-3.5 font-mono text-sm font-semibold transition-colors hover:bg-accent">
                    {l.toUpperCase()}
                  </a>
                ))}
              </div>
            )}
            <Button variant="outline" href="#contact">{t.hero.contact}</Button>
          </div>
          <div className="no-print mt-6 flex gap-2.5">
            <IconLink href={profile.github} label="GitHub"><Github size={19} /></IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn"><Linkedin size={19} /></IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email"><Mail size={19} /></IconLink>
          </div>
        </div>

        <div className="hero-in relative mx-auto w-full max-w-[460px] rounded-3xl bg-night p-[22px] text-[#dfe6f7] shadow-portrait [animation-delay:.12s]">
          <img src={photo} alt="Meryem Ammari" width="520" height="520" className="aspect-square w-full rounded-2xl bg-white object-cover" />
          <span className="absolute left-[34px] top-[34px] inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[13px] font-semibold text-ink">
            <MapPin size={14} className="text-accent" />{pick(profile.location)}
          </span>
          <div className="mt-[18px] flex flex-wrap items-center gap-1.5 font-mono text-xs font-medium" aria-hidden="true">
            {STAGES.map((s, i) => (
              <span key={s} className="flex items-center gap-1.5">
                <span className={`pipe-stage rounded-md border px-2.5 py-1 ${s === 'OCR' ? 'border-[#6f8dff] bg-accent/35 text-white' : 'border-white/15 bg-white/5'}`} style={{ animationDelay: `${0.4 + i * 0.15}s` }}>{s}</span>
                {i < STAGES.length - 1 && <span className="text-[#6f8dff]">→</span>}
              </span>
            ))}
          </div>
          <p className="mt-2.5 font-mono text-xs text-[#93a1c2]">{t.hero.pipelineCaption}</p>
        </div>
      </div>
    </header>
  );
}
