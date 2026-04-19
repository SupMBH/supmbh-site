import { useState } from 'react';
import FadeSection from './FadeSection';
import { useLanguage } from '../context/LanguageContext';
import { getProfile, getUiLabels } from '../data/i18n';

function LinkedInNotice() {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();
  const ui = getUiLabels(lang);

  return (
    <div className="linkedin-notice">
      <div className="linkedin-notice-header">
        <span className="linkedin-notice-icon" aria-hidden="true">in</span>
        <span className="linkedin-notice-label">LinkedIn</span>
        <span className="linkedin-notice-status">{ui.linkedInStatus}</span>
      </div>

      <p className="linkedin-notice-text">{ui.linkedInNotice}</p>

      <button
        className="linkedin-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="linkedin-details"
      >
        {expanded ? ui.linkedInReduce : ui.linkedInWhy}
        <span className={`linkedin-toggle-arrow ${expanded ? 'open' : ''}`} aria-hidden="true">›</span>
      </button>

      {expanded && (
        <div className="linkedin-details" id="linkedin-details">
          <p className="linkedin-details-intro">{ui.linkedInIntro}</p>
          <ul className="linkedin-details-list">
            <li>
              <strong>2021</strong> — {ui.linkedIn2021}
            </li>
            <li>
              <strong>2024–2025</strong> — {ui.linkedIn2024}
            </li>
            <li>
              <strong>{lang === 'en' ? 'Late 2025' : 'Fin 2025'}</strong> — {ui.linkedIn2025}
            </li>
          </ul>
          <p className="linkedin-details-conclusion">{ui.linkedInConclusion}</p>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const { lang } = useLanguage();
  const profile = getProfile(lang);
  const ui = getUiLabels(lang);

  const telHref = "tel:" + profile.phone.replace(/\s/g, '');
  const mailHref = "mailto:" + profile.email;

  return (
    <FadeSection className="section" id="contact" style={{ paddingBottom: '4rem' }}>
      <h2 className="section-title">Contact</h2>

      <div className="contact-box">
        <h3>{ui.letWorkTogether}</h3>
        <p>{profile.availability}</p>

        <div className="contact-links">
          {profile.upworkUrl ? (
            <a
              href={profile.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-link-upwork"
            >
              {ui.viewUpwork}
            </a>
          ) : null}

          <a href={mailHref} className="contact-link">
            {ui.emailPrefix} {profile.email}
          </a>

          <a href={telHref} className="contact-link">
            {ui.phonePrefix} {profile.phone}
          </a>
        </div>

        <LinkedInNotice />
      </div>
    </FadeSection>
  );
}