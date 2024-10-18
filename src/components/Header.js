import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><Link to="/hard-skills">Hard Skills</Link></li>
          <li><Link to="/soft-skills">Soft Skills</Link></li>
          <li><a href="/projets">Repositories</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
