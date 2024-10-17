import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>SupMBH &copy; {new Date().getFullYear()} Tous droits réservés</p>
    </footer>
  );
}

export default Footer;
