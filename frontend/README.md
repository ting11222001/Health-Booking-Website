# Frontend

Built with React + Vite.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

Create Vite and install libraries:
```bash
npm create vite@latest ./
npm install react-router-dom react-icons react-spinners react-toastify swiper
npm i stripe
```

Install tailwind css:
https://tailwindcss.com/docs/guides/vite

```bash
# after created a vite + react project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# ... the rest followed the documentaton
```

## Installation (when first time pull the project down)

```bash
npm install
```

## Run the frontend

```bash
npm run dev
```

## Stripe for testing checkout
```bash
card information: 4242 4242 4242 4242
```

## .env and .env.local are required

Parameters include:
```bash
VITE_CLOUD_NAME=
VITE_UPLOAD_PRESET=
VITE_BASE_URL=
```

VITE_BASE_URL in the .env and .env.local:
```bash
Local:
VITE_BASE_URL=http://localhost:5000

Production: 
VITE_BASE_URL=https://health-booking-website-server.vercel.app
```

