import FadeSection from './FadeSection';
import { useLanguage } from '../context/LanguageContext';
import { getProfile, getPresentation, getUiLabels } from '../data/i18n';

export default function About() {
  const { lang } = useLanguage();
  const ui = getUiLabels(lang);
  const profile = getProfile(lang);
  const presentation = getPresentation(lang);
  return (
    <FadeSection className="section" id="about">
      <h2 className="section-title">{ui.sectionProfile}</h2>
      <p className="about-text">{presentation}</p>
      <div className="about-availability">
        <span className="pulse" aria-hidden="true" />
        {profile.availability}
      </div>
    </FadeSection>
  );
}
