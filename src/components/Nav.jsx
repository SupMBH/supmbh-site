import { useState } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { navLinks } from '../data/content';

export default function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`site-nav${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="Retour en haut">
          A.N
        </a>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Menu de navigation"
        >
          {open ? '✕' : '☰'}
        </button>

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
