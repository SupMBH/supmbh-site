// src/components/Projets.js

import React, { useState, useEffect } from 'react';
import './Projets.css';

function Projets() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Récupérer la liste des dépôts
        const response = await fetch('https://api.github.com/users/SupMBH/repos');
        const data = await response.json();

        // Trier les dépôts par date de création (du plus récent au plus ancien)
        const sortedData = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        // Pour chaque dépôt, récupérer les langages utilisés
        const reposWithLanguages = await Promise.all(
          sortedData.map(async (repo) => {
            try {
              const languagesResponse = await fetch(repo.languages_url);
              const languagesData = await languagesResponse.json();
              const languages = languagesData ? Object.keys(languagesData) : [];
              return {
                ...repo,
                languages,
              };
            } catch (error) {
              console.error(
                `Erreur lors de la récupération des langages pour le dépôt ${repo.name}:`,
                error
              );
              return {
                ...repo,
                languages: [],
              };
            }
          })
        );

        setRepos(reposWithLanguages);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des dépôts:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <p>Chargement des projets...</p>;
  }

  if (error) {
    return <p>Une erreur est survenue lors du chargement des projets.</p>;
  }

  return (
    <section className="projets-section">
      <h2 className="projets-title">Mes Projets (mis à jour lorsque vous avez cliqué sur la page)</h2>
      <div className="gallery">
        {repos.map((repo) => (
          <div key={repo.id} className="card" tabIndex="0">
            <h3>{repo.name}</h3>
            <p>{repo.description ? repo.description : 'Pas de description'}</p>
            <p>
              <strong>Langages :</strong>{' '}
              {repo.languages && repo.languages.length > 0
                ? repo.languages.join(', ')
                : 'Non spécifiés'}
            </p>
            <p>
              <strong>Date de création :</strong>{' '}
              {new Date(repo.created_at).toLocaleDateString('fr-FR')}
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


