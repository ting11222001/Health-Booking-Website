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

## Usage for Local Development

After the installation, run the frontend project using the following command:

```bash
npm run dev
```

After the installation, run the backend project using the following command:

```bash
npm run start-dev
```

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