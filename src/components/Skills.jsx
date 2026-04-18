import { useState, useEffect, useRef } from 'react';
import FadeSection from './FadeSection';
import { useLanguage } from '../context/LanguageContext';
import { getTechSkills, getLanguages, getDifferentiators, getUiLabels } from '../data/i18n';


export default function Skills() {
  const { lang } = useLanguage();
  const techSkills = getTechSkills(lang);
  const languages = getLanguages(lang);
  const differentiators = getDifferentiators(lang);
  const [animateLangs, setAnimateLangs] = useState(false);
  const langRef = useRef(null);
  const ui = getUiLabels(lang);

  useEffect(() => {
    const el = langRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateLangs(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeSection className="section" id="skills">
      <h2 className="section-title">{ui.sectionSkills}</h2>

      <div className="tech-grid" style={{ marginBottom: '2.5rem' }}>
        {techSkills.map((s) => (
          <span className="tech-chip" key={s}>
            {s}
          </span>
        ))}
      </div>

      <h3 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '1rem', fontWeight: 600 }}>
        {ui.languagesLabel}
      </h3>

      <div className="langs" ref={langRef}>
        {languages.map((l) => (
          <div className="lang-item" key={l.lang}>
            <div className="lang-header">
              <span className="lang-name">{l.lang}</span>
              <span className="lang-level">{l.level}</span>
            </div>
            <div
              className="lang-bar"
              role="progressbar"
              aria-valuenow={l.pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${l.lang}: ${l.level}`}
            >
              <div
                className="lang-fill"
                style={{ width: animateLangs ? `${l.pct}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: '1.1rem', color: 'var(--white)', margin: '2.5rem 0 1rem', fontWeight: 600 }}>
        {ui.differentiatorsLabel}
      </h3>

      <div className="diff-list">
        {differentiators.map((d, i) => (
          <article className="diff-item" key={i}>
            <div className="diff-title">{d.title}</div>
            <div className="diff-body">{d.body}</div>
          </article>
        ))}
      </div>
    </FadeSection>
  );
}
