import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './data/translations';

const LangContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'fr') return saved;
  } catch { /* stockage indisponible */ }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch { /* ignore */ }
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t: translations[lang],
    // Renvoie la bonne langue pour un champ { en, fr } ; laisse passer une simple chaîne.
    pick: (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.en : v),
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
