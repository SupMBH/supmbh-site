import React, { useState, useEffect } from 'react';
import './Projets.css';
import mockData from '../data/mockRepos.json'; // Importation des données mockées

function Projets() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem('reposData');

    if (localData) {
      // Si des données sont déjà stockées localement, les utiliser
      setRepos(JSON.parse(localData));
      setLoading(false);
    } else {
      // Sinon, effectuer la requête pour récupérer les dépôts
      const fetchRepos = async () => {
        try {
          // Récupérer la liste des dépôts
          const response = await fetch('https://api.github.com/users/SupMBH/repos');
          if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
          }
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
                if (!languagesResponse.ok) {
                  throw new Error(`Erreur HTTP ! statut : ${languagesResponse.status}`);
                }
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

          // Enregistrer les données dans le localStorage
          localStorage.setItem('reposData', JSON.stringify(reposWithLanguages));

          setRepos(reposWithLanguages);
          setLoading(false);
        } catch (error) {
          console.error('Erreur lors de la récupération des dépôts:', error);
          // Utiliser les données mockées en cas d'erreur
          setRepos(mockData);
          setUsingMockData(true);
          // Enregistrer les données mockées dans le localStorage
          localStorage.setItem('reposData', JSON.stringify(mockData));
          setLoading(false);
        }
      };

      fetchRepos();
    }
  }, []);

  if (loading) {
    return <p>Chargement des projets...</p>;
  }

  return (
    <section className="projets-section">
      <h2 className="projets-title">
        My public Repositories (Updated in real-time on your first visit)
      </h2>
      {usingMockData && (
        <p className="warning-message">
          Une erreur est survenue lors du chargement en temps réel. Les données affichées
          sont des données sauvegardées.
        </p>
      )}
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
            See it on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;


