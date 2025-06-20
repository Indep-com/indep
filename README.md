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
- **Cache / Queue** : Redis + BullMQ
- **ORM** : Prisma
- **Authentification** : JWT (access + refresh tokens)
- **Infrastructure** : Railway, Vercel, Render, Docker

---

## 🔄 Architecture microservices

- **Auth Service** : Gestion des utilisateurs, login, register, rafraîchissement de tokens
- **Mission Service** : Création, modification et fermeture des missions
- **Application Service** : Gestion des candidatures freelances
- **Messaging Service** : Système de chat entre freelances et clients
- **Notification Service** : Gestion des envois d'e-mails et notifications en asynchrone
- **Payment Service** : Gestion des paiements et commissions
- **Admin Service** : Interface d'administration et statistiques

---

## 🛋 Fonctionnalités principales

- Inscription et connexion utilisateurs (Freelance / Client)
- Gestion de profils indépendants et d'entreprise
- Publication de missions
- Candidature à des missions
- Système de messagerie privée en temps réel (avec WebSocket + Redis)
- Notifications internes et par e-mail
- Gestion des paiements client → freelance
- Dashboard de gestion pour les utilisateurs

---

## 📚 Guide de déploiement local

### 1. Prérequis

- Node.js (>=18)
- PostgreSQL
- Redis
- Docker (obligatoire pour lancer toute la solution)

### 2. Cloner le projet

```bash
git clone https://github.com/Indep-com/indep.git
cd indep-com
```

### 3. Installer les dépendances

Frontend et Backend :

```bash
cd frontend && pnpm install
cd ../backend && pnpm install
```

### 4. Configurer les environnements

Créer un fichier `.env` pour chaque partie :

**Backend `.env`**

```bash
DATABASE_URL=postgresql://user:password@db:5432/indepcom
REDIS_HOST=redis
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret
```

**Frontend `.env.local`**

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
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
- Redis

---

## 🔬 Commandes utiles

| Action | Commande |
|:-------|:---------|
| Générer client Prisma | `npx prisma generate` |
| Appliquer migration DB | `npx prisma migrate dev` |
| Lancer Bull board (dashboard des jobs) | `npm run bull:ui` |
| Build frontend | `npm run build` |

---

## 📅 Avancement

- [x] Authentification JWT
- [x] Gestion Missions / Candidatures
- [x] Système de messagerie temps réel
- [x] Notifications asynchrones avec BullMQ
- [ ] Paiement intégré (Stripe en sandbox)
- [ ] Interface Admin Dashboard

---

## 📅 Auteurs

- Guy Boireau
- Adel Djahnit
- Erwan Nea
