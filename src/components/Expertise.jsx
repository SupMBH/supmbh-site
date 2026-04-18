import FadeSection from './FadeSection';
import { useLanguage } from '../context/LanguageContext';
import { getExpertises, getUiLabels } from '../data/i18n';

export default function Expertise() {
 
  const { lang } = useLanguage();
  const ui = getUiLabels(lang);
  const expertises = getExpertises(lang);
  return (
    <FadeSection className="section" id="expertise">
      <h2 className="section-title">{ui.sectionExpertise}</h2>

      <div className="expertise-grid">
        {expertises.map((e) => (
          <article className="exp-card" key={e.id}>
            <div className="exp-card-icon" aria-hidden="true">
              {e.icon}
            </div>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
            <div className="skill-tags">
              {e.skills.map((s) => (
                <span className="skill-tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </FadeSection>
  );
}
