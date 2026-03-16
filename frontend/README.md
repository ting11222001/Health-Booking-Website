# Frontend

Built with React + Vite.

## First-time project creation (reference only — already done)

These commands are here for documentation purposes. You do **not** need to run them
to use this project — just run `npm install` instead (see below).

```bash
# Create a Vite + React project
npm create vite@latest ./

# Install runtime libraries
npm install react-router-dom react-icons react-spinners react-toastify swiper
npm i stripe
```

Install Tailwind CSS (followed the [official Vite guide](https://tailwindcss.com/docs/guides/vite)):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Installation (when pulling the project for the first time)

```bash
cd frontend/
npm install
```

## Run the frontend

```bash
npm run dev
```

Vite starts a dev server at **http://localhost:5173**.

## Environment variables

Copy the template and fill in your values:

```bash
cp .env.example .env
```

See **`frontend/.env.example`** for what each variable does and where to find the values.
