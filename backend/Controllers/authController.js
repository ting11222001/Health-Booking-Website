import User from "../Models/UserSchema.js"
import Doctor from "../Models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


export const register = async (req, res) => {

  const { email, password, name, role, photo, gender } = req.body

  try {
    let user = null

    if (role === "patient") {
      user = await User.findOne({ email })
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email }) // or { email: email }
    }

    // check if user exist
    if (user) {
      return res.status(400).json({ message: 'User exists!' })
    }

    // if no user is found, hash password before creating the new user
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      })
    }

    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      })
    }

    await user.save()

    res.status(200).json({
      success: true,
      message: 'User successfully created'
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error. Try again!'
    })
  }
}

export const login = async (req, res) => {
  try {

  } catch (error) {

  }
}