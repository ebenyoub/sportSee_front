# SportSee - Tableau de bord utilisateur

SportSee est un dashboard React realise dans le cadre d'un projet OpenClassrooms. L'objectif etait d'integrer une page profil permettant a un utilisateur de suivre son activite sportive a travers plusieurs visualisations de donnees.

## Ce que le projet montre

- Integration d'une interface dashboard en React.
- Routing avec React Router.
- Visualisation de donnees avec Recharts.
- Recuperation de donnees depuis une API ou depuis des mocks locaux.
- Decoupage en composants reutilisables : header, sidebar, cartes nutritionnelles, graphiques.
- Gestion des etats loading et erreur.

## Fonctionnalites

- Selection rapide d'un profil utilisateur.
- Affichage du prenom de l'utilisateur.
- Graphique d'activite quotidienne : poids et calories.
- Graphique des sessions moyennes.
- Graphique radar des performances.
- Graphique circulaire de progression de l'objectif.
- Cartes de synthese : calories, proteines, glucides, lipides.

## Stack

- React 18
- Vite
- React Router
- Recharts
- Axios
- Styled Components
- Sass

## Installation

```bash
npm install
```

## Lancement avec les donnees mockees

Le projet est configuré par defaut pour fonctionner avec les donnees mockees. Cela permet de tester l'interface sans lancer le backend.

```bash
npm run dev
```

Puis ouvrir l'URL indiquee par Vite.

## Lancement avec le backend

Créer un fichier `.env` a partir de `.env.example` :

```bash
cp .env.example .env
```

Puis configurer :

```env
VITE_API_URL=http://localhost:3000/
VITE_USE_MOCKED_DATA=false
```

Le backend attendu est disponible ici :

```txt
https://github.com/ebenyoub/sportSee_back
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Structure

```txt
src/
├── components/
│   ├── recharts/
│   ├── Card.jsx
│   ├── Header.jsx
│   ├── SidebarNav.jsx
│   └── Welcome.jsx
├── iconComponents/
├── pages/
├── style/
└── utils/
```

## Choix techniques

Les graphiques sont separes par type afin de garder chaque visualisation lisible. Le hook `useFetch` centralise la recuperation des donnees et permet de basculer entre API reelle et donnees mockees via les variables d'environnement.

Ce projet est volontairement centre sur la vue desktop, comme demande dans le brief initial. La version mobile pourrait etre traitee dans une evolution future.

## Ameliorations possibles

- Ajouter des tests sur les composants graphiques.
- Ajouter une meilleure experience mobile.
- Migrer vers TypeScript.
- Mettre a jour Recharts vers la version majeure la plus recente.
