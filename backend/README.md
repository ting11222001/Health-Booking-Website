# Backend

Node.js + Express API server for Thriveful.

For product features, API authorization rules, MongoDB setup, and test accounts,
see the **[project root README](../README.md)**.

## Installation (first-time project creation — reference only)

```bash
npm i express mongodb mongoose cors jsonwebtoken cookie-parser dotenv bcryptjs nodemon
npm i stripe
```

## Installation (when pulling the project for the first time)

```bash
cd backend/
npm install
```

## Seed data

Seed scripts are in `backend/seed/seed.js`. To populate a fresh database:
```
npm run seed
```

Then, start the server once (`npm run start-dev`)


## Run the server

```bash
# Development (this script uses nodemon in backend/package.json, which watches the files and auto-restarts the server on every save)
npm run start-dev

# Production-style (this script used plain node, no file watching, no auto-restart)
npm run start
```

Server runs at **http://localhost:8000** (controlled by `PORT` in `backend/.env`).

## Environment variables

Copy the template and fill in your values:

```bash
cp .env.example .env
```

See **`backend/.env.example`** for what each variable does and where to find the values.

## Testing API routes with Postman

### Sending a request

Go to an API tab in Postman:
```
Body → raw → JSON → provide a JSON object with the required fields
```

### Using a Bearer Token for authenticated routes

After logging in, copy the `token` value from the response, then in another request:
```
Authorization tab → Type: Bearer Token → paste token into the Token field
```