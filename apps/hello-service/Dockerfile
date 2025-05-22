# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers nécessaires
COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY apps/hello-service/package.json ./apps/hello-service/
COPY apps/hello-service/tsconfig*.json ./apps/hello-service/
COPY apps/hello-service/src ./apps/hello-service/src

# Installer les dépendances
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build l'app
WORKDIR /app/apps/hello-service
RUN pnpm run build

# Final stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/apps/hello-service/dist ./dist
COPY apps/hello-service/package.json ./

RUN npm install -g pnpm && pnpm install --prod

EXPOSE 4001
CMD ["node", "dist/main"]
