# apps/indep-api/Dockerfile

# Étape 1 : Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copie tous les fichiers
COPY . .

# Installation des dépendances avec PNPM
RUN corepack enable && pnpm install --no-frozen-lockfile

# Build uniquement du indep-api
RUN pnpm --filter=indep-api build

# Étape 2 : Image finale
FROM node:20-alpine

WORKDIR /app

# Copie le build et les dépendances depuis l'étape de build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/apps/indep-api/package.json ./

# Lancement du microservice
CMD ["node", "dist/apps/indep-api/main"]

EXPOSE 3000
