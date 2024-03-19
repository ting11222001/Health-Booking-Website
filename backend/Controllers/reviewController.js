import Review from "../Models/ReviewSchema.js"
import Doctor from "../Models/DoctorSchema.js"

// get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})

    res.status(200).json({
      success: true,
      message: 'All Reviews found',
      data: reviews
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Reviews found'
    })
  }
}

// create review
// Associate the review with the correct doctor.
// Also, associate which user is creating this review.
// When a review is created, the "doctor" and "user" fields of the request will be created
// according to the values.
export const createReview = async (req, res) => {
  /*
  req.body: {
    reviewText: 'water',
    rating: 3
  }
   */

  if (!req.body.doctor) {
    req.body.doctor = req.params.doctorId // req.params: { doctorId: '65f65e77f4a06dc7a086b263' }
  }
  if (!req.body.user) {
    req.body.user = req.userId // req.userId is from the "authenticate" function in verifyToken.js
  }

  /*
  req.body: {
    reviewText: 'water',
    rating: 3,
    doctor: '65f65e77f4a06dc7a086b263',
    user: '65f4de9be8d53c7532be1331'
  }
  */

  // once we have all the details, save this new review to the database
  const newReview = new Review(req.body)

  try {

    const savedReview = await newReview.save()

    // Populate the review for a specific doctor.
    // A relationship between them was created.
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: {
        reviews: savedReview._id
      }
    })

    res.status(200).json({
      success: true,
      message: "Review Submitted",
      data: savedReview
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}