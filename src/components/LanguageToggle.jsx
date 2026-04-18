import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <span className={lang === 'fr' ? 'active' : ''}>FR</span>
      <span className="separator">|</span>
      <span className={lang === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
}