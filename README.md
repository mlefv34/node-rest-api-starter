# node-rest-api-starter

A minimal REST API boilerplate built with Express. Designed to be cloned and
customized — gets you from zero to a running JSON API in under a minute.

Pas de dépendance lourde, pas de framework par-dessus Express, structure plate
et lisible. Sert de point de départ à tous mes side projects.

## Stack

- Node.js 18+
- Express 4
- dotenv
- node:test pour les tests (suite native, pas de Jest)

## Quick start

```bash
git clone https://github.com/mlefv34/node-rest-api-starter.git
cd node-rest-api-starter
npm install
cp .env.example .env
npm start
```

Le serveur écoute sur `http://localhost:3000` par défaut.

## Project structure

```
node-rest-api-starter/
├── src/
│   ├── server.js              # Entry point Express
│   ├── routes/
│   │   ├── health.js
│   │   └── example.js
│   └── middleware/
│       ├── errors.js
│       └── logger.js
├── tests/
│   └── example.test.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Default endpoints

| Method | Route       | Description                       |
|--------|-------------|-----------------------------------|
| GET    | `/health`   | Service status (returns `{ ok: true }`) |
| GET    | `/example`  | Sample endpoint with JSON output  |
| POST   | `/example`  | Echo body (validation example)    |

## Configuration

Tout passe par `.env` :

```
PORT=3000
LOG_LEVEL=info
NODE_ENV=development
```

## Scripts

```bash
npm start        # Production
npm run dev      # Avec nodemon (hot reload)
npm test         # Suite node:test native
npm run lint     # eslint sur src/
```

## Why not a framework ?

J'ai testé NestJS, Fastify, Adonis — sympas, mais pour 90% de mes side projects
c'est overkill. Express + une structure propre suffit. Si tu cherches plus
opinionated, regarde du côté de NestJS.

## License

MIT
