import mongoose from "mongoose";
import dotenv from "dotenv";
import Doctor from "../Models/DoctorSchema.js";
import { doctors } from "../Seed/doctors.js";
import User from "../Models/UserSchema.js";
import { users } from "../Seed/users.js";
import Blog from "../Models/BlogSchema.js";
import { blogs } from "../Seed/blogs.js";
import Review from "../Models/ReviewSchema.js";
import { reviews } from "../Seed/reviews.js";

// To read .env file variables
dotenv.config();

// Database connection - Drop collections and Seed data
async function connectAndSeed() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB successfully!");

        const collections = mongoose.connection.collections;
        for (const key in collections) {
          await collections[key].drop();
          console.log(`Collection ${key} dropped.`);
        }
        console.log("All collections dropped successfully!");

        // seed the database
        await Doctor.insertMany(doctors);
        console.log("Seeded Doctors...");

        await User.insertMany(users);
        console.log("Seeded Users...");

        await Blog.insertMany(blogs);
        console.log("Seeded Blogs...");
        
        await Review.insertMany(reviews);
        console.log("Seeded Reviews...");

        await mongoose.disconnect();
        process.exit(0); // Exit the process after seeding

    } catch (error) {
        console.error("Seed failed: ", error);
        process.exit(1); // Exit the process with an error code
    }
}

connectAndSeed();