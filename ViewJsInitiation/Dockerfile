# syntax=docker/dockerfile:1
FROM node:22-alpine

WORKDIR /app

# Copie des manifestes en premier pour profiter du cache Docker
COPY package.json package-lock.json* ./

# Installation des dépendances
RUN npm ci

# Copie du reste du projet (écrasé par le volume mount en dev)
COPY . .

# Port du serveur de développement Vite
EXPOSE 5173

CMD ["npm", "run", "dev"]
