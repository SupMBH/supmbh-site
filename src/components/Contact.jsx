import { useState } from 'react';
import FadeSection from './FadeSection';
import profile from '../data/profile';

function LinkedInNotice() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="linkedin-notice">
      <div className="linkedin-notice-header">
        <span className="linkedin-notice-icon" aria-hidden="true">in</span>
        <span className="linkedin-notice-label">LinkedIn</span>
        <span className="linkedin-notice-status">Compte clôturé</span>
      </div>

      <p className="linkedin-notice-text">
        J'ai fait le choix de quitter LinkedIn après une analyse des risques
        inhérents à la plateforme. En tant que professionnel de la gouvernance
        SI et de la conformité, cette décision est cohérente avec mes
        convictions en matière de protection des données.
      </p>

      <button
        className="linkedin-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="linkedin-details"
      >
        {expanded ? 'Réduire' : 'Pourquoi ?'}
        <span className={`linkedin-toggle-arrow ${expanded ? 'open' : ''}`} aria-hidden="true">›</span>
      </button>

      {expanded && (
        <div className="linkedin-details" id="linkedin-details">
          <p className="linkedin-details-intro">
            Principaux incidents documentés sur LinkedIn :
          </p>
          <ul className="linkedin-details-list">
            <li>
              <strong>2021</strong> — Scraping massif via exploitation d'API :
              700 millions de profils exposés (noms, emails, téléphones,
              parcours professionnels). LinkedIn a qualifié l'incident de
              « scraping » et non de « breach », mais les données ont été
              mises en vente sur des forums.
            </li>
            <li>
              <strong>2024–2025</strong> — Sanctions de régulateurs européens
              pour usage abusif des données publicitaires. La CNIL a sanctionné
              une société tierce pour scraping de profils, confirmant que même
              des données « publiques » nécessitent des garanties strictes.
            </li>
            <li>
              <strong>Fin 2025</strong> — Découverte d'une base MongoDB
              exposée contenant 4,3 milliards d'enregistrements professionnels,
              incluant des données issues de LinkedIn : noms, postes, emails,
              téléphones, historiques d'emploi.
            </li>
          </ul>
          <p className="linkedin-details-conclusion">
            Ces incidents illustrent un risque structurel : sur une plateforme
            où les données professionnelles sont publiques par design, la
            surface d'attaque pour le phishing ciblé, l'ingénierie sociale
            et l'usurpation d'identité professionnelle reste élevée. Limiter
            son exposition est une mesure d'hygiène numérique élémentaire.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <FadeSection className="section" id="contact" style={{ paddingBottom: '4rem' }}>
      <h2 className="section-title">Contact</h2>

      <div className="contact-box">
        <h3>Travaillons ensemble</h3>
        <p>
          Disponible immédiatement · CDI · DPO · Chef de Projet IT · Gouvernance SI · Formation & Enseignement
        </p>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="contact-link">
            ✉ {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="contact-link"
          >
            ☎ {profile.phone}
          </a>
        </div>

        <LinkedInNotice />
      </div>
    </FadeSection>
  );
}
