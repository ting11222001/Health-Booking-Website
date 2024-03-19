import express from "express"
import { createFeedback } from "../Controllers/feedbackController.js"

const router = express.Router()

router.post('/create', createFeedback)

export default router