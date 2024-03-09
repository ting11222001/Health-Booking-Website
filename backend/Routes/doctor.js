import express from "express"
import { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor }
  from "../Controllers/doctorController.js"

const router = express.Router()

router.get('/', getAllDoctor)
router.get('/:id', getSingleDoctor) // path params: a dynamic route to get one Doctor by id
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)

export default router

