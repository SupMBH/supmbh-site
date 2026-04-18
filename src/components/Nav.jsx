import { useState } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { useLanguage } from '../context/LanguageContext';
import { getNavLinks } from '../data/i18n';
import LanguageToggle from './LanguageToggle';

export default function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  const navLinks = getNavLinks(lang);

  return (
    <nav
      className={`site-nav${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}
    >
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label={lang === 'fr' ? 'Retour en haut' : 'Back to top'}>
          A.N
        </a>

        <div className="nav-right">
          <LanguageToggle />
          <button
            className="burger"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={lang === 'fr' ? 'Menu de navigation' : 'Navigation menu'}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        <ul
          className={`nav-links${open ? ' open' : ''}`}
          id="nav-menu"
          role="menubar"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href} role="none">
              <a href={href} role="menuitem" onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}