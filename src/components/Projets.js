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

    // Durée de validité des données en millisecondes (1 heure)
    const CACHE_DURATION = 60 * 60 * 1000; // 3600000 ms
    
    const storedData = localStorage.getItem('reposData');

    if (storedData) {
      const { data, timestamp } = JSON.parse(storedData);
      const now = Date.now();

      // Vérifier si les données sont encore valides
      if (now - timestamp < CACHE_DURATION) {
        setRepos(data);
        setLoading(false);
        return; // Sortir de useEffect si les données sont valides
      } else {
        // Les données sont expirées, les supprimer du localStorage
        localStorage.removeItem('reposData');
      }
    }

    // Fonction pour récupérer les dépôts
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

        // Enregistrer les données et le timestamp dans le localStorage
        const dataToStore = {
          data: reposWithLanguages,
          timestamp: Date.now(),
        };
        localStorage.setItem('reposData', JSON.stringify(dataToStore));

        setRepos(reposWithLanguages);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des dépôts:', error);
        // Utiliser les données mockées en cas d'erreur
        setRepos(mockData);
        setUsingMockData(true);
        // Enregistrer les données mockées avec le timestamp dans le localStorage
        const mockDataToStore = {
          data: mockData,
          timestamp: Date.now(),
        };
        localStorage.setItem('reposData', JSON.stringify(mockDataToStore));
        setLoading(false);
      }
    };

    fetchRepos();
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
          <div
            key={repo.id}
            className="card"
            tabIndex="0"
            onClick={() => window.open(repo.html_url, '_blank', 'noopener noreferrer')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.open(repo.html_url, '_blank', 'noopener noreferrer');
              }
            }}
          >
            <div className="card-content">
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
              <p className="a">See it on GitHub</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;
