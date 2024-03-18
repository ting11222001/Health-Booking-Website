# Backend

Include step-by-step instructions on how to install and set up the backend project. This may include dependencies, environment setup, etc.

## Installation

```bash
# Example installation command
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
    "email": "user2@gmail.com",
    "password": "1234"
}
or
{
    "email": "user@gmail.com",
    "password": "123"
}
```

doctor:
```bash
{
    "email": "qweqwe@gmail.com", or "doctor@gmail.com"
    "password": "123"
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
- Only "patient" can create reviews for the doctors.


### Doctors specific
- Only "approved" doctors will be shown by getAllDoctors API.
- When a doctor is registered, his/her default "isApproved" field is "pending".
- Doctor bio, specilization are not in the DoctorSchema yet.

### Patients specific
- Only "patient" can create a review for the doctors.