import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLang } from '../i18n';

// Visionneuse d'images plein écran. images : [{ url, caption }], index : image ouverte ou null.
export default function Lightbox({ images, index, onChange, onClose }) {
  const { t } = useLang();
  const ref = useRef(null);
  const open = index !== null && images.length > 0;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, images.length, onChange]);

  const img = open ? images[index] : null;
  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}
      className="lightbox m-auto max-h-[92vh] w-[min(1100px,calc(100vw-24px))] rounded-2xl bg-night p-0 text-white">
      {img && (
        <figure className="relative m-0">
          <img src={img.url} alt={img.caption || ''} className="max-h-[80vh] w-full object-contain" />
          {img.caption && <figcaption className="px-5 py-3 font-mono text-[13px] text-[#a9b6d6]">{img.caption}</figcaption>}
          <button type="button" onClick={onClose} aria-label={t.lightbox.close} className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-[10px] bg-night/70 hover:bg-night"><X size={18} /></button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => onChange((index - 1 + images.length) % images.length)} aria-label={t.lightbox.prev} className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-[10px] bg-night/70 hover:bg-night"><ChevronLeft size={20} /></button>
              <button type="button" onClick={() => onChange((index + 1) % images.length)} aria-label={t.lightbox.next} className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-[10px] bg-night/70 hover:bg-night"><ChevronRight size={20} /></button>
            </>
          )}
        </figure>
      )}
    </dialog>
  );
}
