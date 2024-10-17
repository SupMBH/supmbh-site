import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';
import hardSkillsData from '../data/hardSkills.json';

function HardSkills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Compétences Techniques</h2>
      <div className="gallery">
        {hardSkillsData.map((skill, index) => (
          <Link to={skill.link} key={index} className="card-link">
            <div className="card" tabIndex="0">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HardSkills;

