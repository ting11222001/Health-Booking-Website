# Thriveful - Mental Health Booking Website

Welcome to the Thriveful Mental Health Website repository! 

This project is a comprehensive application constructed using the MERN (MongoDB, Express.js, React, Node.js) stack. It serves as a prototype website dedicated to advancing mental health and well-being, offering affordable online counseling sessions and curated articles from experts, fostering the development of a supportive peer community among users. Future plans for this project include the integration of a discussion forum, events page, and an admin dashboard page

## Demo

Check out the live demo [here](https://health-booking-website-client.vercel.app/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Features](#features)
- [Test User Login Information](#test-user-login-information)
- [Acknowledgements](#acknowledgements)

## Installation

Follow these steps to set up and run the project locally:

1. Clone the project:

```bash
git clone https://github.com/ting11222001/Health-Booking-Website.git
```

2. Change into the front and backend project directory to install the dependencies:

```bash
cd frontend/
npm install

cd backend/
npm install
```

## Running Locally

You need **three things running** at the same time: MongoDB (Docker), the backend, and the frontend.

### 1. Start MongoDB in Docker

**First time only** — creates and starts the container. Make sure Docker Desktop is open,
then run this from the **project root**:

```bash
docker compose up -d
```

**From the second time onwards** — the container already exists, so you can either:
- Click the **▶ play button** next to `thriveful-mongo` in Docker Desktop, or
- Run `docker compose up -d` again (safe to re-run, does the same thing)

Data is persisted in a Docker volume so it survives restarts.
To stop it: `docker compose down`.

To connect with **MongoDB Compass** (GUI to inspect your data):
```
mongodb://root:example@localhost:27017/thriveful?authSource=admin
```

### 2. Set up environment variables

```bash
cp backend/.env.example  backend/.env
cp frontend/.env.example frontend/.env
```

Fill in your real values. See each `.env.example` file for instructions on where
to find each value (Cloudinary dashboard, Stripe dashboard, etc.).

### 3. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 4. Start the backend

```bash
cd backend
npm run start-dev
```

Express server runs at **http://localhost:8000**.

### 5. Start the frontend

```bash
cd frontend
npm run dev
```

Vite dev server runs at **http://localhost:5173** — open this in your browser.

---

## API Authorization

Routes are protected based on three user roles: `admin`, `patient`, `doctor`.

| Rule | Who it applies to |
|------|------------------|
| Get all users / doctors data | `admin` only |
| Get / update / delete own profile | the user themselves (`patient` or `doctor`) |
| Create a review for a doctor | `patient` only |
| Submit a Contact Us feedback | anyone (no login required) |
| Appear in the doctors listing | `doctor` with `isApproved: "approved"` only |

When a doctor registers, their `isApproved` status defaults to `"pending"` until approved.

## Technologies

- Vite
- React
- MongoDB
- Stripe

## Features

### Frontend

- Implemented loading animations and toast notifications to provide users with a seamless interface experience during data submission from frontend to backend.
- Ensured responsive design across all devices for optimal user experience.

### Backend

- Established protected routes to enforce restricted operations on specific API routes; for instance, only "patients" are permitted to create reviews for doctors.
- Implemented bcryptjs for cryptographic hashing to fortify the security of users' passwords during registration, guaranteeing that only hashed strings are stored in the database.
- Implemented user authentication using JWT tokens, enabling persistent user sessions even after closing the browser window, and granting access to designated features such as individual user profile pages.
- Implemented a mechanism for dropping databases and seeding data to facilitate easy testing processes.


## Test User Login Information
To test the credential authentication functionality, you can use the following admin and user (patients/doctors) login information:

admin:
```bash
{
    "email": "admin@gmail.com",
    "password": "1234"
}
```

users (i.e. patient):
```bash
{
    "email": "mila@gmail.com",
    "password": "123"
}

{
    "email": "emma@gmail.com",
    "password": "123"
}
```

doctors:
```bash
{
    "email": "anna@gmail.com",
    "password": "1234"
}

{
    "email": "john@gmail.com",
    "password": "1234"
}
```

## Stripe test card's information:

```bash
4242 4242 4242 4242
```

## Acknowledgements

A part of the UI design was inspired by [Coding With Muhib](https://www.youtube.com/watch?v=K4_J3ShsUOY&t=22s&ab_channel=CodingWithMuhib).

The rest API settings and media assets were created by me ✨

Feel free to reach out with any questions or feedback!