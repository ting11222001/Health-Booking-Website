import express from "express"
import { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor, getDoctorProfile }
  from "../Controllers/doctorController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"
import reviewRouter from "./review.js"

const router = express.Router()

// Path params ('/:id'): a dynamic route to get one doctor by id.
router.get('/', authenticate, restrict(['admin']), getAllDoctor)
router.get('/:id', authenticate, restrict(['doctor']), getSingleDoctor)
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor)
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor)

router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile)

// nested route
router.use('/:doctorId/reviews', reviewRouter)

export default router

