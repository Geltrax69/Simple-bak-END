# Simple-bak-END

> ## Status: 🟡 In Progress
>
> <progress value="65" max="100"></progress>
>
> **Progress: 65%** — full product CRUD API works in code, but needs security fixes, a start script, and tests

<p align="center">
  <img src="banner.webp" alt="Simple-bak-END banner" width="100%" />
</p>

![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)

## What it is

A simple REST API backend built with Express and MongoDB (via Mongoose). It exposes CRUD endpoints for products (name, quantity, price, image) under `/api/products`, with a Mongoose schema enforcing required fields. A classic learning-project backend — the kind you'd pair with a frontend shop UI.

## What works (verified)

- ✅ All five CRUD handlers exist and are wired: `GET /api/products`, `GET /api/products/:id`, `POST /api/products`, `PUT /api/products/:id`, `DELETE /api/products/:id` — verified by reading `routes/product.route.js` and `controllers/product.controller.js`
- ✅ Mongoose Product model validates name/quantity/price with defaults — verified in `models/product.model.js`
- ✅ `GET /` health route returns "Working" — verified in `index.js`
- ✅ Dependencies declared in `package.json` (express 4, mongoose 8, mongodb 6) with lockfile

## Tech stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express 4 |
| Database | MongoDB via Mongoose 8 |
| Dev | nodemon |

## How to run

```bash
npm install
npm run dev
```

The server connects to MongoDB and listens on port 3000. Try it:

```bash
curl http://localhost:3000/                  # "Working"
curl http://localhost:3000/api/products      # list products
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Apple","quantity":10,"price":50}'
```

> Note: the MongoDB connection string is currently hardcoded in `index.js`. It works, but move it to an env var before any real use.

## Screenshots

No UI — this is an API backend. The banner above is the visual.

## What you can add more

- [ ] Move the MongoDB URI to an environment variable — credentials are currently hardcoded in `index.js` (security issue)
- [ ] Fix the schema option `Timestamp: true` → `timestamps: true` — the capitalised version is ignored, so no createdAt/updatedAt are stored
- [ ] Add a `start` script (`node index.js`) — only `dev` (nodemon) exists, so production has no entry point
- [ ] Add request validation (e.g. zod or express-validator) — currently any JSON body is accepted
- [ ] Add basic tests (supertest + an in-memory MongoDB) — no tests exist

## Project structure

```
Simple-bak-END/
├── index.js                    # Express app, MongoDB connect, port 3000
├── controllers/
│   └── product.controller.js   # getProducts, getProduct, create/update/delete
├── models/
│   └── product.model.js        # Mongoose Product schema
├── routes/
│   └── product.route.js        # /api/products route wiring
├── banner.webp
├── package.json / package-lock.json
└── README.md
```

---
*README written after code audit on 2026-10-08.*
