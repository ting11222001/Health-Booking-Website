import express from "express"
import { createBlog } from "../Controllers/blogController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"

const router = express.Router()

// router.post('/:id', authenticate, restrict(['doctor']), createBlog)
router.post('/:id', createBlog)

export default router