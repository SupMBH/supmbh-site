import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

function detectInitialLanguage() {
  // 1. Check localStorage first (user's explicit choice)
  const stored = localStorage.getItem('lang');
  if (stored === 'fr' || stored === 'en') return stored;

  // 2. Auto-detect from browser
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr';
  }

  // 3. Fallback
  return 'fr';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage);

  // Persist and update <html lang>
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}