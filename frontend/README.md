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
npm uninstall react-router-dom react-icons react-spinners react-toastify swiper
```

Install tailwind css:
https://tailwindcss.com/docs/guides/vite

```bash
# after created a vite + react project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# ... the rest followed the documentaton
```