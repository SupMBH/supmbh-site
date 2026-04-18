import FadeSection from './FadeSection';
import { useLanguage } from '../context/LanguageContext';
import { getProfile, getPresentation } from '../data/i18n';

export default function About() {
  const { lang } = useLanguage();
  const profile = getProfile(lang);
  const presentation = getPresentation(lang);
  return (
    <FadeSection className="section" id="about">
      <h2 className="section-title">Profil</h2>
      <p className="about-text">{presentation}</p>
      <div className="about-availability">
        <span className="pulse" aria-hidden="true" />
        {profile.availability}
      </div>
    </FadeSection>
  );
}
