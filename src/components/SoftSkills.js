import React, { useState, useEffect } from 'react';
import './Skills.css';
import softSkillsData from '../data/softSkills.json';
import images from '../helpers/importImages';

function SoftSkills() {
  const [modalImage, setModalImage] = useState(null);

  const handleCardClick = (skill) => {
    if (skill.link) {
      window.open(skill.link, '_blank', 'noopener noreferrer');
    } else if (skill.photo) {
      const imagePath = images[skill.photo];
      setModalImage(imagePath);
    }
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Soft Skills</h2>
      <div className="gallery">
        {softSkillsData.map((skill, index) => (
          <div
            key={index}
            className="card"
            tabIndex="0"
            onClick={() => handleCardClick(skill)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCardClick(skill);
            }}
          >
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt={modalImage} />
        </div>
      )}
    </section>
  );
}

export default SoftSkills;


