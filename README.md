# Indep.com 

**Plateforme de mise en relation entre freelances/indépendants et clients.**

---

## Objectif du projet

Créer une application web permettant aux freelances de proposer leurs compétences et aux clients de publier des missions, avec un système de candidature, de messagerie privée, de notifications et de paiements.

Projet réalisé en architecture **microservices** pour garantir la scalabilité, la performance et la maintenabilité.

---

## Stack technique

- **Frontend** : Next.js / React
- **Backend** : NestJS (API REST)
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Authentification** : JWT (access + refresh tokens)

---

## Architecture microservices

- **Auth Service** : Gestion des utilisateurs, login, register, rafraîchissement de tokens
- **Mission Service** : Création, modification et fermeture des missions
- **Application Service** : Gestion des candidatures freelances
- **Messaging Service** : Système de chat entre freelances et clients

---

## Fonctionnalités principales

- Inscription et connexion utilisateurs (Freelance / Client)
- Gestion de profils indépendants et d'entreprise
- Publication de missions
- Candidature à des missions
- Système de messagerie privée en temps réel (avec WebSocket + Redis)

---

## Guide de déploiement local

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

**Candidature `.env`**
```bash
DATABASE_URL=postgresql://user:password@db:5432/indepcom
```

### 5. Lancer les différents services 
```bash
pnpm --filter indep-api start:dev            # API Gateway
pnpm --filter auth-service start:dev         # Authentification
pnpm --filter mission-service start:dev      # Missions
pnpm --filter candidature-service start:dev  # Candidatures
pnpm --filter messaging-service dev          # Messagerie
pnpm --filter indep-front dev                # Frontend Next.js
```

### 6. Lancer le serveur NATS avec Docker

**Depuis la racine du projet** :

```bash
docker run --rm -p 4222:4222 --name nats-server nats -D
```
---

## Commandes utiles pour génerer les services prisma
```bash
cd prisma/api
npx prisma generate

cd ../messaging
npx prisma generate
```
---

## Auteurs

- Guy Boireau
- Adel Djahnit
- Erwan Nea
