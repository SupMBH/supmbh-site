import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projets">Repositories</a>
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
