# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers nécessaires
COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY apps/world-service/package.json ./apps/world-service/
COPY apps/world-service/tsconfig*.json ./apps/world-service/
COPY apps/world-service/src ./apps/world-service/src

# Installer les dépendances
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build l'app
WORKDIR /app/apps/world-service
RUN pnpm run build

# Final stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/apps/world-service/dist ./dist
COPY apps/world-service/package.json ./

RUN npm install -g pnpm && pnpm install --prod

EXPOSE 4002
CMD ["node", "dist/main"]
