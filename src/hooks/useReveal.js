import { useEffect, useRef } from 'react';

// Fait apparaître un élément en fondu quand il entre dans l'écran.
// Sans IntersectionObserver ou avec « réduire les animations », l'élément reste simplement visible.
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    el.classList.add('reveal');
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    const safety = setTimeout(() => el.classList.add('in'), 2500);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);
  return ref;
}
