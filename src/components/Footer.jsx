export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        © {year} Antoine Naget — Droit du numérique · IT · Gouvernance SI
      </div>
      <div className="footer-credit">
        Site conçu et développé par Antoine Naget
      </div>
    </footer>
  );
}
