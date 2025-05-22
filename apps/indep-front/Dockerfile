# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier les fichiers nécessaires au build
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/indep-front/package.json apps/indep-front/tsconfig*.json ./apps/indep-front/
COPY apps/indep-front/next.config.ts ./apps/indep-front/
COPY apps/indep-front/public ./apps/indep-front/public
COPY apps/indep-front/src ./apps/indep-front/src

# Installer uniquement les deps nécessaires à l'app
RUN pnpm install --filter indep-front...

# Build Next.js
WORKDIR /app/apps/indep-front
RUN pnpm build

# Final image
FROM node:20-alpine

WORKDIR /app

# Copier les artefacts de build
COPY --from=builder /app/apps/indep-front/public ./public
COPY --from=builder /app/apps/indep-front/.next ./.next
COPY --from=builder /app/apps/indep-front/package.json ./
COPY --from=builder /app/apps/indep-front/next.config.ts ./

# Installer seulement les deps de prod de l'app front
RUN npm install -g pnpm && pnpm install --prod

EXPOSE 3000

CMD ["pnpm", "start"]
