import { Download, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLang } from '../i18n';
import { profile } from '../data/profile';
import { Reveal } from './Section';
import { Button } from './Buttons';
import { cv } from '../data/media';

export default function Contact() {
  const { t, pick } = useLang();
  const cvs = ['en', 'fr'].filter((l) => cv[l]);
  const rows = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/meryem-ammari', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/meryemammari23', href: profile.github },
    { icon: MapPin, label: t.contact.location, value: pick(profile.location) },
  ];

  return (
    <section id="contact" className="py-[88px]">
      <div className="mx-auto max-w-site px-6">
        <Reveal className="contact-card grid items-center gap-10 rounded-[28px] bg-night px-6 py-9 text-[#e6ecfa] md:grid-cols-[1.2fr_1fr] md:p-14">
          <div>
            <p className="font-mono text-[13px] font-medium text-[#9fb3ff]">{t.contact.eyebrow}</p>
            <h2 className="mt-2 font-display text-[clamp(30px,4vw,44px)] font-bold text-white">{t.contact.title}</h2>
            <p className="mt-3 max-w-[48ch] text-[#a9b6d6]">{t.contact.sub}</p>
            <div className="no-print mt-6 flex flex-wrap gap-3">
              <Button href={profile.linkedin}><Linkedin size={17} />{t.contact.connect}</Button>
              <Button variant="ghostDark" href={`mailto:${profile.email}`}><Mail size={17} />{t.contact.email}</Button>
            </div>
            {cvs.length > 0 && (
              <div className="no-print mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#6f8dff]/15 text-[#9fb3ff]"><FileText size={22} /></span>
                <div className="mr-auto">
                  <strong className="block text-white">{t.contact.cvTitle}</strong>
                  <span className="text-sm text-[#a9b6d6]">{t.contact.cvSub}</span>
                </div>
                <div className="flex gap-2">
                  {cvs.map((l) => (
                    <a key={l} href={cv[l]} download={`CV_Meryem_AMMARI_${l.toUpperCase()}.pdf`}
                      className="inline-flex items-center gap-1.5 rounded-[10px] bg-accent px-3.5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
                      <Download size={15} />{t.contact.cvLang[l]}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <ul className="m-0 grid list-none gap-2.5 p-0">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="grid grid-cols-[40px_1fr] items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#6f8dff]/15 text-[#9fb3ff]"><Icon size={18} /></span>
                <div className="min-w-0">
                  <small className="block font-mono text-xs text-[#8796bb]">{label}</small>
                  {href
                    ? <a href={href} {...(/^https?:/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="break-all font-medium text-white hover:underline">{value}</a>
                    : <span className="font-medium text-white">{value}</span>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
