import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js"
import blogRoute from "./Routes/blog.js"
import feedbackRoute from "./Routes/feedback.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
  origin: true,
}

app.get('/', (req, res) => {
  res.send("Api is working")
})

// database connection
mongoose.set('strictQuery', false)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)

    console.log("MongoDB database connection succeed!")
  } catch (error) {
    console.log("MongoDB database connection failed!")
  }
}

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authRoute) // e.g. domain/api/v1/auth/register
app.use('/api/v1/users', userRoute) // e.g. domain/api/v1/users/
app.use('/api/v1/doctors', doctorRoute) // e.g. domain/api/v1/doctors/
app.use('/api/v1/reviews', reviewRoute) // e.g. domain/api/v1/reviews/
app.use('/api/v1/bookings', bookingRoute) // e.g. domain/api/v1/bookings/
app.use('/api/v1/blogs', blogRoute) // e.g. domain/api/v1/blogs/
app.use('/api/v1/feedbacks', feedbackRoute) // e.g. domain/api/v1/feedbacks/


app.listen(port, () => {
  connectDB()
  console.log("server is running on port" + port)
})