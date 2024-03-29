import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "../Routes/auth.js";
import userRoute from "../Routes/user.js";
import doctorRoute from "../Routes/doctor.js";
import reviewRoute from "../Routes/review.js";
import bookingRoute from "../Routes/booking.js"
import blogRoute from "../Routes/blog.js"
import feedbackRoute from "../Routes/feedback.js"
// For seed data
import Doctor from "../Models/DoctorSchema.js"
import { doctors } from "../seed/doctors.js"
import User from "../Models/UserSchema.js"
import { users } from "../seed/users.js"
import Blog from "../Models/BlogSchema.js"
import { blogs } from "../seed/blogs.js"
import Review from "../Models/ReviewSchema.js"
import { reviews } from "../seed/reviews.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

// Check if the root route is working
app.get('/', (req, res) => {
  res.send("Api is working")
})

// Enable CORS for all origins
app.use(cors())

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/auth', authRoute) // e.g. domain/api/v1/auth/register
app.use('/api/v1/users', userRoute) // e.g. domain/api/v1/users/
app.use('/api/v1/doctors', doctorRoute) // e.g. domain/api/v1/doctors/
app.use('/api/v1/reviews', reviewRoute) // e.g. domain/api/v1/reviews/
app.use('/api/v1/bookings', bookingRoute) // e.g. domain/api/v1/bookings/
app.use('/api/v1/blogs', blogRoute) // e.g. domain/api/v1/blogs/
app.use('/api/v1/feedbacks', feedbackRoute) // e.g. domain/api/v1/feedbacks/

// Mongoose won't enforce strict schema validation for queries
mongoose.set('strictQuery', false)

// Database connection - Drop collections and Seed data
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => app.listen(port, () => console.log("Server is running on port: " + port)))
//   .then(() => {
//     // Drop all collections
//     try {
//       const collections = mongoose.connection.collections;

//       for (const key in collections) {
//         collections[key].drop();
//         console.log(`Collection ${key} dropped.`);
//       }

//       console.log("All collections dropped successfully!");
//     } catch (error) {
//       console.error("Error dropping collections:", error);
//     }
//   })
//   .then(() => {
//     // seed the database
//     Doctor.insertMany(doctors)
//     console.log("Seeded Doctors...")
//     User.insertMany(users)
//     console.log("Seeded Users...")
//     Blog.insertMany(blogs)
//     console.log("Seeded Blogs...")
//     Review.insertMany(reviews)
//     console.log("Seeded Reviews...")
//   })
//   .catch((error) => console.log(`${error}: connection failed`))

// Database connection with no drop collections and seed data)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(port, () => console.log("Server is running on port: " + port)))
  .catch((error) => console.log(`${error}: connection failed`))