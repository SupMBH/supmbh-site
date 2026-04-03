import { CURRENT_YEAR } from '../data/year';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        © {CURRENT_YEAR} Antoine Naget — Droit du numérique · IT · Gouvernance SI
      </div>
      <div className="footer-credit">
        Site conçu et développé par Antoine Naget
      </div>
    </footer>
  );
}
