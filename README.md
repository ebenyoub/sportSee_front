# SportSee - Page Profil Utilisateur

## Description

SportSee est une startup en pleine croissance dédiée au coaching sportif. Dans le cadre de notre expansion, nous lançons une nouvelle version de la page profil utilisateur. Cette page permet aux utilisateurs de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

## Aperçu du Projet

Pour ce sprint, notre objectif est d'intégrer les User Stories de la section TODO du tableau kanban. La page profil utilisateur sera développée en utilisant React et inclura des graphiques affichant l'activité sportive de l'utilisateur.

## Technologies

- **React** : Pour la création de l'interface utilisateur.
- **D3 ou Recharts** : Pour créer des graphiques affichant les données d'activité utilisateur. Recharts est recommandé pour sa facilité d'utilisation.
- **Node.js** : Pour le serveur backend fournissant des données d'exemple.
- **Fetch ou Axios** : Pour effectuer les appels HTTP afin de récupérer les données du backend.

## Détails Techniques

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votrenomutilisateur/sportsee-profile.git
   cd sportsee-profile
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm start
   ```

### Serveur Backend

Un serveur backend est fourni pour récupérer des données d'exemple. Vous pouvez trouver le serveur backend [ici](lien-vers-le-depot-backend). Suivez les instructions dans le dépôt backend pour le configurer et le démarrer.

### Intégration de l'API

- Les appels de données doivent être effectués en dehors des composants React en utilisant un service séparé.
- Mockez initialement les données de l'API pour s'assurer que le frontend fonctionne.
- Une fois la configuration des données mockées terminée, intégrez l'API.
- Standardisez le format des données provenant de l'API avant de les utiliser dans l'application.

### Intégration CSS

Concentrez-vous sur la vue bureau pour le moment, en assurant la lisibilité sur des écrans d'au moins 1024x780 pixels. Les versions mobile et tablette seront abordées dans les futurs sprints.

## Structure du Projet

```
/sportsee-profile
├── README.md
├── index.html
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── assets
│   ├── components
│   ├── iconComponents
│   ├── main.jsx
│   ├── pages
│   ├── style
│   └── utils
├── vite.config.js
└── yarn.lock
```

## Utilisation

1. **Démarrer le Développement** : Commencez par mocker les données du backend.
2. **Appels API** : Implémentez le service pour les appels API en utilisant Fetch ou Axios.
3. **Intégration des Graphiques** : Utilisez D3 ou Recharts pour créer les graphiques d'activité.
4. **Stylisation** : Appliquez le CSS pour assurer un design responsive pour bureau.

## Contribution

Veuillez vous assurer que votre code est bien documenté. Vous pouvez utiliser JSDoc ou PropTypes pour la documentation. Assurez-vous de mettre à jour ce README avec toute nouvelle information ou modification.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Contact

Si vous avez des questions ou besoin de clarifications supplémentaires, n'hésitez pas à contacter le lead developer, Antoine, ou le product owner, Charles.

---

Bon développement !
