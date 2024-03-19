import Blog from "../Models/BlogSchema.js"
import Doctor from "../Models/DoctorSchema.js"

export const createBlog = async (req, res) => {
  const id = req.params.id
  const newBlog = new Blog(req.body)

  try {

    const savedBlog = await newBlog.save()

    await Doctor.findByIdAndUpdate(id, {
      $push: {
        blogs: savedBlog._id
      }
    })

    res.status(200).json({
      success: true,
      message: "Blog Submitted",
      data: savedBlog
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}