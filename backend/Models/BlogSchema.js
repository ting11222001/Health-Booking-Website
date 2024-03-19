import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  isPublished: {
    type: String,
    enum: ["pending", "published"],
    default: "pending",
  },
},
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);