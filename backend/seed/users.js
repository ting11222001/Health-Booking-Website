import bcrypt from "bcryptjs"

// hash doctor's password
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash("123", salt)

export const users = [
  {
    email: "mila@gmail.com",
    password: hashPassword,
    name: "Mila Osbourne",
    phone: 412345678,
    photo: "https://res.cloudinary.com/dcr3ib98u/image/upload/v1711084614/patient-temp_hhhy9a.jpg",
    role: "patient",
    gender: "female",
    bloodType: "A",
    appointments: [],
  },
  {
    email: "emma@gmail.com",
    password: hashPassword,
    name: "Emma Smith",
    phone: 412345678,
    photo: "https://res.cloudinary.com/dcr3ib98u/image/upload/v1711084668/patient-3_dsvuxp.png",
    role: "patient",
    gender: "female",
    bloodType: "B",
    appointments: [],
  }
]