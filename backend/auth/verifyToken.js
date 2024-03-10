import jwt from "jsonwebtoken"
import Doctor from "../Models/DoctorSchema.js"
import User from "../Models/UserSchema.js"

// Authenticate an user first
export const authenticate = async (req, res, next) => {
  // get token from headers
  const authToken = req.headers.authorization

  // check if token exists
  // if not, deny authorization
  if (!authToken || !authToken.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'No token found, authorization denied'
    })
  }

  try {
    // console.log(authToken) // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...
    const token = authToken.split(' ')[1]

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    // console.log("decoded: ", decoded)

    req.userId = decoded.id
    req.role = decoded.role

    next() // must be called; pass the request to the next middleware
  } catch (error) {
    console.log(error)

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token is expired"
      })
    }

    return res.status(401).json({
      success: false,
      message: "Invalid token"
    })
  }
}

// Then, authorization i.e. specify what a role or multiple roles can do
// This function takes roles as a parameter and returns an asynchronous middleware function that takes req, res, and next as parameters.
export const restrict = roles => async (req, res, next) => {
  // this restricted user id is assumed to have been added by a previous authentication middleware
  const userId = req.userId

  let user

  const patient = await User.findById(userId)
  const doctor = await Doctor.findById(userId)

  if (patient) {
    user = patient
  }
  if (doctor) {
    user = doctor
  }

  if (!roles.includes(user.role)) {
    return res.status(401).json({
      success: false,
      message: "You are not authorized"
    })
  }

  // if the user role is authorized, then we call the next() function to pass control
  // to the next middleware
  next()
}