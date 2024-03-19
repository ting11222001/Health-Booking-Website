import Blog from "../Models/BlogSchema.js"
import Doctor from "../Models/DoctorSchema.js"

export const createBlog = async (req, res) => {
  const id = req.params.doctorId // "doctorId": depends on the id variable passed from the routes
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

export const getAllBlog = async (req, res) => {
  try {

    const { query } = req.query
    let blogs

    if (query) {
      blogs = await Blog.find({
        isPublished: 'published',
        $or: [
          { title: { $regex: query, $options: "i" } },
          { content: { $regex: query, $options: "i" } }
        ]
      })
    } else {
      blogs = await Blog.find({ isPublished: 'published' })
    }

    res.status(200).json({
      success: true,
      message: 'All Blogs found',
      data: blogs
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Blogs found'
    })
  }
}

export const getSingleBlog = async (req, res) => {
  const id = req.params.id

  try {

    const singleBlog = await Blog.findById(id)

    res.status(200).json({
      success: true,
      message: 'Blog successfully found',
      data: singleBlog
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Blog found'
    })
  }
}