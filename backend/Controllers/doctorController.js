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

    const singleDoctor = await Doctor.findById(id)
      .populate("reviews") // not just populate reviewsId, but the reviews content
      .select("-password") // remove the password field when returned

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

    const { query } = req.query
    let doctors

    // This is for the "find the doctors" search/filter bar.
    // Filter only those "approved" doctors AND
    // all the documents where the value of the name field is xxx, OR
    // the value of the specialization field is xxx.
    // If no query specified, then find all doctors.
    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved',
        $or: [
          { name: { $regex: query, $options: "i" } }, // "i" is for case insensitive match
          { specialization: { $regex: query, $options: "i" } }
        ]
      }).select("-password")
    } else {
      doctors = await Doctor.find({ isApproved: 'approved' }).select("-password")
      // remove the password field when returned
    }

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