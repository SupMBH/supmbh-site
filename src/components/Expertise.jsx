import FadeSection from './FadeSection';
import { expertises } from '../data/content';

export default function Expertise() {
  return (
    <FadeSection className="section" id="expertise">
      <h2 className="section-title">Domaines d'expertise</h2>

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
