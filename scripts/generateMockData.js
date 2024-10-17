const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function generateMockData() {
  try {
    // Récupérer les dépôts
    const response = await axios.get('https://api.github.com/users/SupMBH/repos');
    const data = response.data;

    // Trier les dépôts par date de création
    const sortedData = data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    // Pour chaque dépôt, récupérer les langages utilisés
    const reposWithLanguages = await Promise.all(
      sortedData.map(async (repo) => {
        try {
          const languagesResponse = await axios.get(repo.languages_url);
          const languagesData = languagesResponse.data;
          const languages = languagesData ? Object.keys(languagesData) : [];
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            languages: languages,
            created_at: repo.created_at,
            html_url: repo.html_url,
          };
        } catch (error) {
          console.error(
            `Erreur lors de la récupération des langages pour le dépôt ${repo.name}:`,
            error
          );
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            languages: [],
            created_at: repo.created_at,
            html_url: repo.html_url,
          };
        }
      })
    );

    // Enregistrer les données dans un fichier JSON
    const filePath = path.join(__dirname, '../src/data/mockRepos.json');
    fs.writeFileSync(filePath, JSON.stringify(reposWithLanguages, null, 2));
    console.log('Les données mockées ont été générées avec succès.');
  } catch (error) {
    console.error('Erreur lors de la génération des données mockées:', error);
  }
}

generateMockData();