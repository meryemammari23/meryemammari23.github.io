import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../i18n';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const { active, scrolled } = useActiveSection(SECTIONS);
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main" className={`no-print sticky top-0 z-40 border-b bg-bg/85 backdrop-blur-md transition-[border-color,box-shadow] ${scrolled ? 'border-line shadow-[0_6px_24px_-18px_rgba(11,22,48,.4)]' : 'border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-6">
        <a href="#home" className="whitespace-nowrap font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
          Meryem <span className="text-accent">Ammari</span>
        </a>
        <ul className="hidden gap-0.5 xl:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
                className={`block rounded-full px-3 py-1.5 text-[15px] font-medium transition-colors ${active === id ? 'bg-accent-soft text-accent' : 'text-muted hover:text-ink'}`}>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <div role="group" aria-label={t.langLabel} className="inline-flex rounded-full border border-line bg-surface p-[3px]">
            {['en', 'fr'].map((l) => (
              <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold uppercase transition-colors ${lang === l ? 'bg-night text-white' : 'text-muted hover:text-ink'}`}>
                {l}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={t.menu}
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-line bg-surface xl:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="grid gap-1 border-t border-line bg-bg px-6 pb-4 pt-2 xl:hidden">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
              className={`border-b border-line py-2.5 font-medium ${active === id ? 'text-accent' : 'text-ink'}`}>
              {t.nav[id]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
