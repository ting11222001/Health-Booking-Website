import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(port, () => {
  connectDB()
  console.log("server is running on port" + port)
})