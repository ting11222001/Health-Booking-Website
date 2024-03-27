# Backend

Include step-by-step instructions on how to install and set up the backend project. This may include dependencies, environment setup, etc.

## Installation

```bash
npm i express mongodb mongoose cors jsonwebtoken cookie-parser dotenv bcryptjs nodemon
npm i stripe
```

## Installation (when first time pull the project down)

```bash
npm install
```

## Run the Server

```bash
# For Development
npm run start-dev

# For Testing the Frontend
npm run start
```

## Postman

### Request
To send a request, go to an api tab:
```bash
Body > raw > JSON > give a JSON object with required fields.
```

### Roles
admin:
```bash
{
    "email": "admin@gmail.com",
    "password": "1234"
}
```

user (i.e. patient):
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

doctor:
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

### Authentication
After logged in, take the Bearer Token value from the "token" field:
```bash
paste the token in another api > Authorization > Type: Bearer Token > Token field.
```

### Authorization
Restrict API route access based on the user roles:
- Only "admin" can get all the users (i.e. "patients"/"doctors") data.
- Only "patient" or "doctor" themselves can get/update/delete their own data.
- Anyone can submit a feedback in the Contact Us page.


### Doctors specific
- Only "approved" doctors will be shown by getAllDoctors API.
- When a doctor is registered, his/her default "isApproved" field is "pending".


### Patients specific
- Only "patient" can create reviews for the doctors.


### Stripe
- test card's card information:
```bash
4242 4242 4242 4242
```

### .env

```bash
Local:
CLIENT_SITE_URL=http://localhost:5173

Production: 
CLIENT_SITE_URL=https://health-booking-website-client.vercel.app
```

### seed data

- It's better to do database dropping and seeding in the local environment.
- I commented all the related code in the index.js whenever pushing code.