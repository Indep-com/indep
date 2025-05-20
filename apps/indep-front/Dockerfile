FROM node:22.15.1

FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY package.json ./

COPY . .

RUN pnpm install --filter ./apps/indep-front...

WORKDIR /app/apps/indep-front

RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "start"]
