import React, { useState, useEffect } from 'react';
import './Projets.css';

function Projets() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/SupMBH/repos')
      .then(response => response.json())
      .then(data => {
        // Trier les dépôts par date de mise à jour
        const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sortedData);
      })
      .catch(error => console.error('Erreur lors de la récupération des dépôts:', error));
  }, []);

  return (
    <section>
      <h2>Mes Projets</h2>
      <div className="gallery">
        {repos.map(repo => (
          <div key={repo.id} className="card">
            <h3>{repo.name}</h3>
            <p>{repo.description ? repo.description : 'Pas de description'}</p>
            <p>
              <strong>Langage :</strong> {repo.language ? repo.language : 'Non spécifié'}
            </p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Voir le dépôt sur GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;
