import React from 'react';
import './Skills.css'; 
import hardSkillsData from '../data/hardSkills.json';

function HardSkills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Hard Skills</h2>
      <div className="gallery">
        {hardSkillsData.map((skill, index) => (
          <div key={index} className="card" tabIndex="0">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HardSkills;
