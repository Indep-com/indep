# apps/indep-front/Dockerfile

# Étape 1 : Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copie tous les fichiers
COPY . .

# Installation des dépendances
RUN corepack enable && pnpm install --no-frozen-lockfile

# Build du frontend Next.js uniquement
RUN pnpm --filter=indep-front build

# Étape 2 : Image finale
FROM node:20-alpine

WORKDIR /app

# Copie le build et les fichiers nécessaires
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/indep-front/apps/indep-front/.next ./apps/indep-front/.next
COPY --from=builder /app/apps/indep-front/package.json ./apps/indep-front/package.json
COPY --from=builder /app/apps/indep-front/public ./apps/indep-front/public

# Définit le répertoire de travail pour Next
WORKDIR /app/apps/indep-front

# Lancement de l'app Next.js
CMD ["pnpm", "start"]

EXPOSE 3000
