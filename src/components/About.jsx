import FadeSection from './FadeSection';
import profile from '../data/profile';
import { presentation } from '../data/content';

export default function About() {
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
