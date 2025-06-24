# Indep.com 🌐

Plateforme de mise en relation entre freelances et clients.

Ce monorepo PNPM regroupe l'ensemble des microservices NestJS et l'interface
Next.js nécessaires au fonctionnement du projet.

## Structure du dépôt

- **apps/indep-api** : passerelle API (NestJS) exposant les routes REST et
  déléguant aux microservices.
- **apps/auth-service** : service d'authentification avec JWT.
- **apps/mission-service** : gestion des missions (CRUD) stockées dans PostgreSQL.
- **apps/candidature-service** : traitement des candidatures via RabbitMQ.
- **apps/messaging-service** : messagerie temps réel (WebSocket + Prisma).
- **apps/indep-front** : application web Next.js accessible aux utilisateurs.

## Mise en place rapide

1. **Cloner le dépôt puis installer les dépendances**

```bash
pnpm install
```

2. **Configurer les variables d'environnement**

Chaque service accédant à une base de données attend une variable `DATABASE_URL`
(ou `DATABASE_MESSAGING_URL` pour le service de messagerie). Exemple :

```bash
DATABASE_URL=postgres://user:password@localhost:5432/indep
```

3. **Lancer les services en développement**

```bash
pnpm --filter indep-api start:dev            # API Gateway
pnpm --filter auth-service start:dev         # Authentification
pnpm --filter mission-service start:dev      # Missions
pnpm --filter candidature-service start:dev  # Candidatures
pnpm --filter messaging-service dev          # Messagerie
pnpm --filter indep-front dev                # Frontend Next.js
```

Une configuration Docker Compose est également disponible :

```bash
docker-compose up --build
```

## Tests

Chaque microservice possède des tests Jest. Ils peuvent être exécutés avec :

```bash
pnpm --filter <service> test
```

## Auteurs

- Guy Boireau
- Adel Djahnit
- Erwan Nea
