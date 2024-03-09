import express from "express"
import { updateUser, deleteUser, getSingleUser, getAllUser } from "../Controllers/userController.js"

const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getSingleUser) // path params: a dynamic route to get one user by id
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router

