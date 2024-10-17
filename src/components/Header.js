import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/hard-skills">Hard Skills</Link>
          </li>
          <li>
            <Link to="/soft-skills">Soft Skills</Link>
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
