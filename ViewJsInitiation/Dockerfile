# syntax=docker/dockerfile:1
FROM node:22-alpine

WORKDIR /app


COPY domaine.SRV-AD-REN-CA.crt /usr/local/share/ca-certificates/domaine.SRV-AD-REN-CA.crt
RUN apk add --no-cache ca-certificates && update-ca-certificates

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/domaine.SRV-AD-REN-CA.crt
RUN npm config set cafile /usr/local/share/ca-certificates/domaine.SRV-AD-REN-CA.crt


COPY package.json package-lock.json* ./


RUN npm ci

# Copie du reste du projet (écrasé par le volume mount en dev)
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]