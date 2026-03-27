import FadeSection from './FadeSection';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <FadeSection className="section" id="experience">
      <h2 className="section-title">Parcours professionnel</h2>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <article className="tl-item" key={i}>
            <div className="tl-header">
              <h3 className="tl-title">{exp.title}</h3>
              <span className="tl-period">{exp.period}</span>
            </div>
            <div className="tl-org">{exp.org}</div>
            <ul className="tl-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </FadeSection>
  );
}
