import express from "express"
import { createBlog, getAllBlog, getSingleBlog } from "../Controllers/blogController.js"

const router = express.Router()

router.post('/:doctorId', createBlog)
router.get('/', getAllBlog)
router.get('/:blogId', getSingleBlog)

export default router