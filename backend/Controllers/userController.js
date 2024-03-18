import User from "../Models/UserSchema.js"
import Booking from "../Models/BookingSchema.js"
import Doctor from "../Models/DoctorSchema.js"

export const updateUser = async (req, res) => {
  const id = req.params.id

  try {

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      {
        new: true  // if true, return the modified document rather than the original
      }
    )

    res.status(200).json({
      success: true,
      message: 'User successfully updated',
      data: updateUser
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Failed to update'
    })
  }
}

export const deleteUser = async (req, res) => {
  const id = req.params.id

  try {

    const deleteUser = await User.findByIdAndDelete(
      id
    )

    res.status(200).json({
      success: true,
      message: 'User successfully deleted'
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete'
    })
  }
}

export const getSingleUser = async (req, res) => {
  const id = req.params.id

  try {

    const singleUser = await User.findById(id).select("-password") // remove the password field when returned

    res.status(200).json({
      success: true,
      message: 'User successfully found',
      data: singleUser
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No user found'
    })
  }
}

export const getAllUser = async (req, res) => {

  try {

    const users = await User.find({}).select("-password") // remove the password field when returned

    res.status(200).json({
      success: true,
      message: 'All users found',
      data: users
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No users found'
    })
  }
}

export const getUserProfile = async (req, res) => {
  const userId = req.userId
  // console.log("userId: ", userId)

  try {
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json(
        {
          success: false,
          messsage: "User not found"
        }
      )
    }

    const { password, ...rest } = user._doc
    // console.log("user._doc: ", user._doc)

    res.status(200).json({
      success: true,
      message: 'Profile info is getting',
      data: {
        ...rest
      }
    })
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Something went wrong, cannot get profile"
      }
    )
  }
}

export const getMyAppointments = async (req, res) => {

  try {

    // step 1: retrieve appointments for a specific user
    const bookings = await Booking.find({
      user: req.userId
    })

    // step 2: extract doctor id from appointment bookings
    const doctorIds = bookings.map(
      e => e.doctor.id
    )

    // step 3: retrieve doctors using doctor ids
    const doctors = await Doctor.find({
      _id: {
        $in: doctorIds
      }
    }).select("-password")

    res.status(200).json({
      success: true,
      message: "Get appointments successfully",
      data: doctors
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Can't get appointments"
    })
  }
}