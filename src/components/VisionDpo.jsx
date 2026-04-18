import { useState } from 'react';
import FadeSection from './FadeSection';

import { CURRENT_YEAR } from '../data/year';
import profile from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { getVisionIntro, getVisionBlocks, getVisionConclusion } from '../data/i18n';

function DpoBlock({ block, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="dpo-block">
      <div className="dpo-block-header" onClick={() => setExpanded(!expanded)} role="button" tabIndex={0} aria-expanded={expanded} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded(!expanded); } }}>
        <span className="dpo-block-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className="dpo-block-icon" aria-hidden="true">{block.icon}</span>
        <h3 className="dpo-block-title">{block.title}</h3>
        <span className={`dpo-block-toggle ${expanded ? 'open' : ''}`} aria-hidden="true">+</span>
      </div>

      {expanded && (
        <div className="dpo-block-body">
          <div className="dpo-block-section">
            <span className="dpo-block-label">L'enjeu</span>
            <p>{block.position}</p>
          </div>
          <div className="dpo-block-section">
            <span className="dpo-block-label">Mon approche</span>
            <p>{block.approach}</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default function VisionDpo() {
  const { lang } = useLanguage();
  const visionDpoIntro = getVisionIntro(lang);
  const visionDpoBlocks = getVisionBlocks(lang);
  const visionDpoConclusion = getVisionConclusion(lang);
  return (
    <FadeSection className="section" id="vision-dpo">
      <h2 className="section-title">Être DPO en {CURRENT_YEAR}</h2>

      <div className="dpo-intro">
        <p>{visionDpoIntro}</p>
      </div>

      <div className="dpo-blocks">
        {visionDpoBlocks.map((block, i) => (
          <DpoBlock key={block.id} block={block} index={i} />
        ))}
      </div>

      <div className="dpo-conclusion">
        <p>{visionDpoConclusion}</p>
        <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.25rem' }}>
          Me contacter
        </a>
      </div>
    </FadeSection>
  );
}
