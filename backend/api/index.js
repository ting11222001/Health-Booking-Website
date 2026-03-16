import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "../Routes/auth.js";
import userRoute from "../Routes/user.js";
import doctorRoute from "../Routes/doctor.js";
import reviewRoute from "../Routes/review.js";
import bookingRoute from "../Routes/booking.js";
import blogRoute from "../Routes/blog.js";
import feedbackRoute from "../Routes/feedback.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {  // confirms the server is alive
  res.send("Api is working")
})
app.use(cors())          // allows the React frontend (different port) to call this API
app.use(express.json())  // parses incoming request body as JSON, puts it on req.body

app.use('/api/v1/auth', authRoute) // mounts the auth router at that path prefix e.g. domain/api/v1/auth/register
app.use('/api/v1/users', userRoute) // e.g. domain/api/v1/users/
app.use('/api/v1/doctors', doctorRoute) // e.g. domain/api/v1/doctors/
app.use('/api/v1/reviews', reviewRoute) // e.g. domain/api/v1/reviews/
app.use('/api/v1/bookings', bookingRoute) // e.g. domain/api/v1/bookings/
app.use('/api/v1/blogs', blogRoute) // e.g. domain/api/v1/blogs/
app.use('/api/v1/feedbacks', feedbackRoute) // e.g. domain/api/v1/feedbacks/

mongoose.set('strictQuery', false) // Mongoose won't enforce strict schema validation for queries

async function connectAndStart() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB successfully!");
   
    app.listen(port, () => console.log("Server is running on port: " + port));

  } catch (error) {
    console.error("Connection failed: ", error);
  }

}

connectAndStart();