import React from 'react';
import presentationText from '../data/presentationText.json';
import './Home.css';
import profileImage from '../assets/images/profile.png';

function Presentation() {
  return (
    <section className="presentation-section">
      <div className="presentation-text">        
        <p className="bold-text">{presentationText.introduction}</p>
        <p>{presentationText.paragraph1}</p>
        <p>{presentationText.paragraph2}</p>
        <p>{presentationText.conclusion}</p>
      </div>
      <div className="presentation-photo">
      <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Presentation;

