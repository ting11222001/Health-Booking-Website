import Doctor from "../Models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
  const id = req.params.id

  try {

    const updateDoctor = await Doctor.findByIdAndUpdate(
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
      message: 'Doctor successfully updated',
      data: updateDoctor
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Failed to update'
    })
  }
}

export const deleteDoctor = async (req, res) => {
  const id = req.params.id

  try {

    const deleteDoctor = await Doctor.findByIdAndDelete(
      id
    )

    res.status(200).json({
      success: true,
      message: 'Doctor successfully deleted'
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete'
    })
  }
}

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id

  try {

    const singleDoctor = await Doctor.findById(id).select("-password") // remove the password field when returned

    res.status(200).json({
      success: true,
      message: 'Doctor successfully found',
      data: singleDoctor
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Doctor found'
    })
  }
}

export const getAllDoctor = async (req, res) => {

  try {

    const doctors = await Doctor.find({}).select("-password") // remove the password field when returned

    res.status(200).json({
      success: true,
      message: 'All Doctors found',
      data: doctors
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Doctors found'
    })
  }
}