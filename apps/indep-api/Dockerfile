# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers nécessaires
COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/indep-api/package.json ./apps/indep-api/
COPY apps/indep-api/tsconfig*.json ./apps/indep-api/
COPY apps/indep-api/src ./apps/indep-api/src

# Installer les dépendances
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build l'app
WORKDIR /app/apps/indep-api
RUN pnpm run build

# Final stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/apps/indep-api/dist ./dist
COPY apps/indep-api/package.json ./

RUN npm install -g pnpm && pnpm install --prod

EXPOSE 3000
CMD ["node", "dist/main"]
