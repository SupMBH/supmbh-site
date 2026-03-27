# Site Personnel — Antoine Naget

Site portfolio React (Vite) déployé sur GitHub Pages.  
DPO · Chef de Projet IT · Cybersécurité

## Structure du projet

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Composants React (1 par section)
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Expertise.jsx
│   │   ├── Experience.jsx
│   │   ├── Formations.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FadeSection.jsx
│   ├── data/             # Données séparées du rendu
│   │   ├── profile.js
│   │   └── content.js
│   ├── hooks/            # Hooks personnalisés
│   │   └── useScrolled.js
│   ├── styles/           # CSS séparé (global + composants)
│   │   ├── global.css
│   │   └── components.css
│   ├── App.jsx
│   └── main.jsx
├── index.html            # Entry point avec SEO + JSON-LD
├── vite.config.js
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Ouvre http://localhost:5173/supmbh-site/

## Build de production

```bash
npm run build
```

## Déploiement sur GitHub Pages

### Première fois

1. Crée un repo GitHub (ex: `supmbh-site`)
2. Dans `vite.config.js`, vérifie que `base` correspond au nom du repo :
   ```js
   base: '/supmbh-site/',
   ```
3. Dans `index.html`, mets à jour les URLs `og:url` et `canonical`
4. Lance :
   ```bash
   git init
   git remote add origin git@github.com:supmbh/supmbh-site.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   npm run deploy
   ```
5. Dans les **Settings** du repo GitHub → **Pages** → Source : **gh-pages branch**

### Mises à jour suivantes

```bash
git add .
git commit -m "Update"
git push
npm run deploy
```

Le site sera accessible à : `https://supmbh.github.io/supmbh-site/`

## Stack

- **React 18** + **Vite 6**
- CSS vanilla (variables, pas de framework)
- Fonts : DM Sans + JetBrains Mono (Google Fonts)
- SEO : meta tags, Open Graph, JSON-LD structured data
- Accessibilité : skip link, ARIA roles, focus-visible, progressbar roles
- Responsive : mobile-first, burger nav
- Performance : pas de dépendance lourde, fonts preconnect

## Personnalisation

Toutes les données sont dans `src/data/` :
- `profile.js` → infos personnelles (email, téléphone, etc.)
- `content.js` → textes, compétences, expériences, formations

Les styles sont dans `src/styles/` :
- `global.css` → variables, reset, utilitaires
- `components.css` → styles par composant
