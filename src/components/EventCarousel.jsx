import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useLang } from '../i18n';
import { gallery } from '../data/gallery';
import { galleryFiles } from '../data/media';
import Lightbox from './Lightbox';

// Galerie défilante de toutes les photos de vie étudiante.
// Défile toute seule (pause au survol, au clavier, ou si l'utilisateur réduit les animations).
export default function EventCarousel() {
  const { t, pick } = useLang();
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const [photo, setPhoto] = useState(null);
  const track = useRef(null);

  const photos = gallery.filter((g) => galleryFiles[g.file])
    .map((g) => ({ url: galleryFiles[g.file], caption: pick(g.caption), group: g.tag }));

  const step = useCallback((dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('button');
    const w = card ? card.offsetWidth + 14 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir > 0 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
    else el.scrollBy({ left: dir * w, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!playing || hover || reduce || photos.length < 2) return;
    const id = setInterval(() => step(1), 3500);
    return () => clearInterval(id);
  }, [playing, hover, photos.length, step]);

  if (!photos.length) return null;

  return (
    <div className="no-print mt-10" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[13px] font-medium text-accent">{t.experience.gallery}</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? t.experience.pause : t.experience.play}
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-line bg-surface hover:border-accent hover:text-accent">
            {playing ? <Pause size={17} /> : <Play size={17} />}
          </button>
          <button type="button" onClick={() => step(-1)} aria-label={t.experience.prev}
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-line bg-surface hover:border-accent hover:text-accent"><ChevronLeft size={19} /></button>
          <button type="button" onClick={() => step(1)} aria-label={t.experience.next}
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-line bg-surface hover:border-accent hover:text-accent"><ChevronRight size={19} /></button>
        </div>
      </div>
      <div ref={track} className="carousel flex snap-x snap-mandatory gap-3.5 overflow-x-auto scroll-smooth pb-2">
        {photos.map((p, i) => (
          <button key={p.url} type="button" onClick={() => setPhoto(i)}
            className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-night sm:w-[46%] lg:w-[31.5%]">
            <img src={p.url} alt={p.caption} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent px-3.5 pb-3 pt-8 text-left">
              <span className="block font-mono text-[11px] text-[#9fb3ff]">{p.group}</span>
              <span className="block text-sm font-medium text-white">{p.caption}</span>
            </span>
          </button>
        ))}
      </div>
      <Lightbox images={photos} index={photo} onChange={setPhoto} onClose={() => setPhoto(null)} />
    </div>
  );
}
