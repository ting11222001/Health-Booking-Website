import mongoose from "mongoose";
import Doctor from "../Models/DoctorSchema.js"

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// Populate the user information of the person who provided the review.
// 1. "Pre": this line sets up a Mongoose middleware that will be triggered "before" any find operation on the documents using the reviewSchema.
// (/^find/ is a regular expression that matches any method starting with "find")
// 2. It specifies that the "name" and "photo" fields should be selected from the "user" collection and added to the "user" field in the documents of the reviewSchema.
// 3. The next() function is called to indicate that the middleware has completed its processing, and the execution should move on to the next middleware or the actual find operation.
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  })

  next()
})

// calculate total ratings and avg ratings
reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  // "this" points to the caller object i.e. the review instance.
  const stats = await this.aggregate([
    {
      $match: {
        doctor: doctorId
      }
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: {
          $sum: 1
        },
        avgRating: {
          $avg: "$rating"
        }
      }
    }
  ])

  // stats: [{ _id: new ObjectId('65ebff27068ad8891d3e1642'), numOfRating: 6, avgRating: 4.5}]

  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating
  })
}

// "Post": after a review document is saved, then do the calcAverageRatings function.
reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.doctor)
  // this.doctor:  new ObjectId('65ebff27068ad8891d3e1642')
})

export default mongoose.model("Review", reviewSchema);