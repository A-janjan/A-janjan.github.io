# Production-ish image for the Vite build.
# Vite 5 needs Node 18+, so this no longer runs on the old node:10 base.

FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies from the lockfile first (better layer caching).
COPY package.json package-lock.json ./
RUN npm ci

# Bundle app source and build.
COPY . .
RUN npm run build

# ---- runtime ----
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

RUN npm install -g serve@14

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l", "4173"]
