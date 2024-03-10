import mongoose from "mongoose";

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
// 1. This line sets up a Mongoose middleware that will be triggered before any find operation on the documents using the reviewSchema.
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

export default mongoose.model("Review", reviewSchema);