# Indep.com 🌐

**Plateforme de mise en relation entre freelances/indépendants et clients.**

---

## 🔍 Objectif du projet

Créer une application web permettant aux freelances de proposer leurs compétences et aux clients de publier des missions, avec un système de candidature, de messagerie privée, de notifications et de paiements.

Projet réalisé en architecture **microservices** pour garantir la scalabilité, la performance et la maintenabilité.

---

## 📈 Stack technique

- **Frontend** : Next.js / React
- **Backend** : NestJS (API REST)
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Authentification** : JWT (access + refresh tokens)

---

## 🔄 Architecture microservices

- **Auth Service** : Gestion des utilisateurs, login, register, rafraîchissement de tokens
- **Mission Service** : Création, modification et fermeture des missions
- **Application Service** : Gestion des candidatures freelances
- **Messaging Service** : Système de chat entre freelances et clients

---

## 🛋 Fonctionnalités principales

- Inscription et connexion utilisateurs (Freelance / Client)
- Gestion de profils indépendants et d'entreprise
- Publication de missions
- Candidature à des missions
- Système de messagerie privée en temps réel (avec WebSocket + Redis)

---

## 📚 Guide de déploiement local

### 1. Prérequis

- Node.js (>=18)
- PostgreSQL
- Redis
- Docker

### 2. Cloner le projet

```bash
git clone https://github.com/Indep-com/indep.git
cd indep
```

### 3. Installer les dépendances

Frontend, Backend et les différents microservices :

```bash
cd apps/indep-api
pnpm install
cd ../indep-front
pnpm install
cd ../messaging-service
pnpm install
cd ../mission-service
pnpm install
cd ../candidature-service
pnpm install
cd ../auth-service
pnpm install
cd ../candidature-service
pnpm install
```

### 4. Configurer les environnements

Créer un fichier `.env` pour chaque partie :

**Backend `.env`**

```bash
DATABASE_URL=postgresql://user:password@db:5432/indepcom
```

**Messaging `.env`**
```bash
DATABASE_MESSAGING_URL=postgresql://user:password@db:5432/indepcom
```

### 5. Lancer les services avec Docker

**Depuis la racine du projet** :

```bash
docker-compose up --build
```

Cela lancera :

- Frontend (Next.js)
- Backend (NestJS)
- Base de données PostgreSQL

---

## 🔬 Commandes utiles
```bash
cd prisma/api
npx prisma generate

cd ../messaging
npx prisma generate
```
---

## 📅 Auteurs

- Guy Boireau
- Adel Djahnit
- Erwan Nea
