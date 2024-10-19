import React from 'react';
import presentationText from '../data/presentationText.json';
import './Home.css';

function Presentation() {
  return (
    <section className="presentation-section">
      <div className="presentation-text">
        <h2>Presentation</h2>
        <p>{presentationText.introduction}</p>
        <p>{presentationText.paragraph1}</p>
        <p>{presentationText.paragraph2}</p>
        <p>{presentationText.conclusion}</p>
      </div>
      <div className="presentation-photo">
        <img src="/src/assets/images/profile.png" alt="Profile" />
      </div>
    </section>
  );
}

export default Presentation;

