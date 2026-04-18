import { CURRENT_YEAR } from '../data/year';
import { useLanguage } from '../context/LanguageContext';
import { getUiLabels } from '../data/i18n';

export default function Footer() {
  const { lang } = useLanguage();
  const ui = getUiLabels(lang);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        © {CURRENT_YEAR} {ui.footerMain}
      </div>
      <div className="footer-credit">
        {ui.footerCredit}
      </div>
    </footer>
  );
}