import express from "express"
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
  getUserProfile,
  getMyAppointments
} from "../Controllers/userController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"

const router = express.Router()

// Path params ('/:id'): a dynamic route to get one user by id.
// After the authentication middleware, apply the restrict modular.
// e.g. only allow "patient" to access this getSingleUser route.
router.get('/', authenticate, restrict(['admin']), getAllUser)
router.get('/:id', authenticate, restrict(['patient']), getSingleUser)
router.put('/:id', authenticate, restrict(['patient']), updateUser)
router.delete('/:id', authenticate, restrict(['patient']), deleteUser)
router.get('/profile/me', authenticate, restrict(['patient']), getUserProfile)
router.get('/appointments/my-appointments', authenticate, restrict(['patient']), getMyAppointments)

export default router

