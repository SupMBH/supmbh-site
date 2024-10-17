import React, { useState, useEffect } from 'react';
import './Projets.css';

function Projets() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/SupMBH/repos')
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sortedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des dépôts:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des projets...</p>;
  }

  if (error) {
    return <p>Une erreur est survenue lors du chargement des projets.</p>;
  }

  return (
    <section className="projets-section">
      <h2 className="projets-title">
        <span className="crocodile">
          <span className="left-part">M</span>
          <span className="right-part">es Projets</span>
          <span className="crocodile-description">
            Mes dépôts GitHub publics sont mis à jour en temps réel et distribués ici.
          </span>
        </span>
      </h2>
      <div className="gallery">
        {repos.map(repo => (
          <div key={repo.id} className="card" tabIndex="0">
            <h3>{repo.name}</h3>
            <p>{repo.description ? repo.description : 'Pas de description'}</p>
            <p>
              <strong>Langage :</strong>{' '}
              {repo.language ? repo.language : 'Non spécifié'}
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
