import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { useLang } from '../i18n';
import { profile } from '../data/profile';
import { IconLink } from './Buttons';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="pb-10 pt-12">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-[18px] px-6 text-sm text-muted">
        <div>
          <p className="font-display text-base font-bold text-ink">{profile.name}</p>
          <p>© {new Date().getFullYear()} · {t.footer.line}</p>
          <p className="print-only">{profile.siteUrl}</p>
        </div>
        <div className="no-print flex items-center gap-2.5">
          <IconLink href={profile.github} label="GitHub"><Github size={19} /></IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn"><Linkedin size={19} /></IconLink>
          <IconLink href="#home" label={t.footer.top}><ArrowUp size={19} /></IconLink>
        </div>
      </div>
    </footer>
  );
}
