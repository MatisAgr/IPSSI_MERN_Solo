# Projet MERN - Le Coin Bon
[![wakatime](https://wakatime.com/badge/user/a16f794f-b91d-4818-8dfc-d768ce605ece/project/ae63bf7c-ff59-491f-a991-53241623c3f9.svg)](https://wakatime.com/badge/user/a16f794f-b91d-4818-8dfc-d768ce605ece/project/ae63bf7c-ff59-491f-a991-53241623c3f9)

Ce projet est une application web de type MERN (MongoDB, Express, React, Node.js) permettant aux utilisateurs de créer, modifier, supprimer et consulter des annonces.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (version `14` ou supérieure) (version utilisée `v22`)
- npm (version `6` ou supérieure) (version utilisée `10.9.2`)
- MongoDB (version compass `1.45.0`)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/MatisAgr/IPSSI_MERN_Solo.git
   cd IPSSI_MERN_Solo
   ```

2. Installez les dépendances pour le backend :

   ```bash
   cd back
   npm i
   ```

3. Installez les dépendances pour le frontend :

   ```bash
   cd ../front
   npm i
   ```

## Configuration

1. Editer et renommer le fichier `.env.exemple` dans le dossier `back` et modifiez les variables d'environnement si vous le souhaitez :

   ```env
   SERVER_PORT=8080
   DB_DIALECT=mongodb
   DB_HOST=XXX
   DB_PORT=XXX
   DB_NAME=XXX
   ```

## Lancer l'application

1. Démarrez le serveur backend :

   ```bash
   cd back
   node app.js
   ```

2. Démarrez le serveur frontend :

   ```bash
   cd ../front
   npm start
   ```

3. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir l'application en action.

## Fonctionnalités

- Inscription et connexion des utilisateurs (CRUD)
- Création, modification et suppression d'annonces (CRUD)
- Consultation des annonces par tous les utilisateurs (connecté ou non)
- Gestion du profil utilisateur
- Sécurité lié à la création d'annonce 
- Regex d'inscription
- Filtrage par Catégorie (client)
- Recherche par Nom (client)
- Détail de l'annonce en cliquant dessus *"plus de ligne pour la description"*

#### Tous les objectifs obligatoires, bonus et + ont bien été réussi

## Structure du projet

- `back/` : Contient le code backend (Node, Express, MongoDB)
- `front/` : Contient le code frontend (React, Tailwind CSS)

### Réalisé en 3H27min

Futures améliorations :
- Meilleure structure de composant
- Plus de sécurités
- Plus de fonctionalité
- Ajustement du style
- Prendre en charge les images et non uniquement les liens
- Mettre le token en cookie au lieu de localstorage
