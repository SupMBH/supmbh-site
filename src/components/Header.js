import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={closeMenu}><Link to="/">Home</Link></li>
          <li onClick={closeMenu}><Link to="/hard-skills">Hard Skills</Link></li>
          <li onClick={closeMenu}><Link to="/soft-skills">Soft Skills</Link></li>
          <li onClick={closeMenu}><Link to="/projets">Repositories</Link></li>
          <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


