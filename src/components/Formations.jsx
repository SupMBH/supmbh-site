import FadeSection from './FadeSection';
import { formations } from '../data/content';

export default function Formations() {
  return (
    <FadeSection className="section" id="formations">
      <h2 className="section-title">Formations & Certifications</h2>

      <div className="formations-list">
        {formations.map((f, i) => (
          <article className="form-item" key={i}>
            <div>
              <div className="form-title">{f.title}</div>
              <div className="form-org">{f.org}</div>
            </div>
            <div className="form-date">{f.date}</div>
          </article>
        ))}
      </div>
    </FadeSection>
  );
}
