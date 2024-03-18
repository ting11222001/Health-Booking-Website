import { Link } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa";


const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <div className="text-center">
          <FaCheckCircle className="text-green-600 w-16 h-16 mx-auto my-6" />
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <Link
              to="/home"
              className="px-12 bg-primaryColor text-white font-semibold py-3"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess