import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/projets">Projets</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/* Autres liens si nécessaire */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
