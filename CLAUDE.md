# Thriveful — CLAUDE.md

Developer orientation for Claude Code and human contributors.

---

## Project Overview

**Thriveful** is a mental health booking web app built on the MERN stack. It lets patients find and book therapists, doctors write mental health blog posts, and handles payments via Stripe.

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB (via Mongoose), hosted on MongoDB Atlas |
| Auth | JWT (stored in `localStorage`) |
| Payments | Stripe |
| Image uploads | Cloudinary |
| Deployment | Vercel (frontend + backend, separate projects) |

---

## Local Setup

### Prerequisites
- Node.js (v18+)
- npm
- **MongoDB** — either Docker Desktop (recommended, see step 1) or a MongoDB Atlas URI
- Stripe test keys (from dashboard.stripe.com)
- Cloudinary account (for profile photo uploads)

### 1 — Start MongoDB with Docker

A `docker-compose.yml` is included at the repo root. With Docker Desktop running:

```bash
docker compose up -d
```

This starts a MongoDB 7 container on **port 27017** and persists data in a named Docker volume (`mongo-data`) so your data survives container restarts.

To stop it: `docker compose down`
To wipe all data: `docker compose down -v`

### 2 — Environment files

This project uses **three environments**. Here is how each one works:

| Environment | How config is supplied | Files involved |
|-------------|----------------------|----------------|
| **Local dev** | `.env` files in `backend/` and `frontend/` | `.env` (gitignored) |
| **Production** | Vercel dashboard → Environment Variables | No files — set in UI |
| **Template / docs** | `.env.example` files committed to git | `.env.example` |

#### Local dev — copy and fill in the templates

```bash
cp backend/.env.example  backend/.env
cp frontend/.env.example frontend/.env
```

Then open each `.env` and fill in your real values. The `.env.example` files explain exactly where to find each value (Cloudinary dashboard, Stripe dashboard, etc.).

**backend/.env** — quick reference for local Docker setup:
```env
PORT=8000
MONGO_URL=mongodb://root:example@localhost:27017/thriveful?authSource=admin
JWT_SECRET_KEY=<any long random string>
STRIPE_SECRET_KEY=sk_test_<your key from dashboard.stripe.com>
CLIENT_SITE_URL=http://localhost:5173
```

**frontend/.env** — quick reference:
```env
VITE_BASE_URL=http://localhost:8000
VITE_CLOUD_NAME=<your cloud name from cloudinary.com dashboard>
VITE_UPLOAD_PRESET=<your upload preset from cloudinary.com → Settings → Upload>
```

#### Production — Vercel dashboard only

Do **not** create `.env` files with production values. Instead, set them in:
- **Frontend project**: vercel.com → your frontend project → Settings → Environment Variables
- **Backend project**: vercel.com → your backend project → Settings → Environment Variables

Production values to set there:
```
# Backend project on Vercel:
MONGO_URL          = mongodb+srv://...  (your Atlas connection string)
JWT_SECRET_KEY     = <same strong secret>
STRIPE_SECRET_KEY  = sk_test_... (or sk_live_... when ready)
CLIENT_SITE_URL    = https://health-booking-website-client.vercel.app

# Frontend project on Vercel:
VITE_BASE_URL      = https://health-booking-website-server.vercel.app
VITE_CLOUD_NAME    = <your cloudinary cloud name>
VITE_UPLOAD_PRESET = <your cloudinary upload preset>
```

### 4 — Install & run

```bash
# Backend (runs on http://localhost:8000)
cd backend
npm install
npm run start-dev

# Frontend (runs on http://localhost:5173)
cd frontend
npm install
npm run dev
```

---

## Folder Structure

```
Health-Booking-Website/
├── frontend/
│   └── src/
│       ├── assets/
│       │   ├── data/           # Static JS data files (faqs.js, services.js)
│       │   └── images/         # All static PNG/GIF assets
│       ├── components/         # Reusable UI components
│       │   ├── About/
│       │   ├── Blog/
│       │   ├── Doctors/
│       │   ├── Faq/
│       │   ├── Footer/
│       │   ├── Header/
│       │   ├── Loading/
│       │   ├── Services/
│       │   └── Testimonial/
│       ├── context/
│       │   └── AuthContext.jsx  # Global auth state (useReducer + localStorage)
│       ├── Dashboard/
│       │   ├── doctor-account/ # Doctor dashboard (profile, appointments, blogs)
│       │   └── user-account/   # Patient dashboard (profile, bookings)
│       ├── hooks/
│       │   └── useFetchData.jsx # Custom hook — GET with Bearer token header
│       ├── layout/
│       │   └── Layout.jsx       # Wraps Header + Routers + Footer
│       ├── pages/
│       │   ├── Blogs/           # Blog list + detail + discussion
│       │   ├── Doctors/         # Doctor list + detail + feedback
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Signup.jsx
│       │   ├── Contact.jsx
│       │   └── CheckoutSuccess.jsx
│       ├── routes/
│       │   ├── Routers.jsx      # All route definitions
│       │   └── ProtectedRoute.jsx # Role-based access guard
│       ├── config.js            # Exports BASE_URL from VITE_BASE_URL env var
│       └── main.jsx             # Entry — wraps app in BrowserRouter + AuthContextProvider
│
└── backend/
    ├── api/
    │   └── index.js             # Express app entry point, MongoDB connection
    ├── auth/
    │   └── verifyToken.js       # JWT middleware — sets req.userId and req.role
    ├── Controllers/             # Route handler functions
    │   ├── authController.js    # register, login
    │   ├── blogController.js
    │   ├── bookingController.js
    │   ├── doctorController.js
    │   ├── feedbackController.js
    │   ├── reviewController.js
    │   └── userController.js
    ├── Models/                  # Mongoose schemas
    │   ├── UserSchema.js
    │   ├── DoctorSchema.js
    │   ├── BookingSchema.js
    │   ├── BlogSchema.js
    │   ├── ReviewSchema.js
    │   └── FeedbackSchema.js
    ├── Routes/                  # Express routers (map URLs → Controllers)
    │   ├── auth.js
    │   ├── blog.js
    │   ├── booking.js
    │   ├── doctor.js
    │   ├── feedback.js
    │   ├── review.js
    │   └── user.js
    └── seed/                    # One-time seed scripts for dev data
        ├── blogs.js
        ├── doctors.js
        ├── reviews.js
        └── users.js
```

---

## Key Conventions

- **API prefix**: all endpoints are under `/api/v1/` (e.g. `GET /api/v1/doctors`)
- **Roles**: `patient` | `doctor` | `admin`
- **Auth flow**: login → JWT returned → stored in `localStorage` → sent as `Authorization: Bearer <token>` on protected requests
- **Protected backend routes**: use `verifyToken` middleware from `auth/verifyToken.js`
- **Protected frontend routes**: wrap in `<ProtectedRoute allowedRoles={[...]}>` from `routes/ProtectedRoute.jsx`
- **Data fetching**: use the `useFetchData(url)` custom hook — it automatically attaches the Bearer token and returns `{ data, loading, error }`

---

## Test Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@gmail.com | 1234 |
| Patient | mila@gmail.com | 123 |
| Patient | emma@gmail.com | 123 |
| Doctor | anna@gmail.com | 1234 |
| Doctor | john@gmail.com | 1234 |

**Stripe test card**: `4242 4242 4242 4242` — any future date, any CVC

---

## Seeding the Database

Seed scripts are in `backend/seed/`. To run them, temporarily uncomment the seed imports and calls in `backend/api/index.js`, start the server once, then comment them out again.

---

## Live Demo

[https://health-booking-website-client.vercel.app](https://health-booking-website-client.vercel.app)
