import { useEffect, useState } from 'react';

// Renvoie l'identifiant de la section visible pour surligner le lien de navigation.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = ids.at(-1);
      setActive(current);
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
  return { active, scrolled };
}
