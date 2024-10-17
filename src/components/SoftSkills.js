import React from 'react';
import './Skills.css';
import softSkillsData from '../data/softSkills.json';

function SoftSkills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Soft Skills</h2>
      <div className="gallery">
        {softSkillsData.map((skill, index) => (
          <div key={index} className="card" tabIndex="0">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SoftSkills;
