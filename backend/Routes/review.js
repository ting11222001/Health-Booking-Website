import express from "express"
import { getAllReviews, createReview } from "../Controllers/reviewController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"

const router = express.Router()

// When a GET request is made to the root endpoint (/), the getAllReviews function is executed.
// If the user passes these checks(i.e., authenticated and has the 'patient' role), the createReview function is then executed.
// In many RESTful API designs, creating a new resource (like a review) is done by sending a POST request to the collection endpoint (/). The server then generates a new ID for the created resource.
router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReview)

// However, when we create a review we need to associate with a specific doctor,
// and show this information in the route. So, we need to do nested routes.
// e.g. /doctor/doctorId/reviews


export default router