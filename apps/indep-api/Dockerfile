FROM node:22.15.1

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY package.json ./

COPY . .

RUN pnpm install --filter ./apps/indep-api...

WORKDIR /app/apps/indep-api

RUN pnpm run build

EXPOSE 3000

CMD ["node", "dist/main"]