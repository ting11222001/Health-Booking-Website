import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../config"
import { toast } from "react-toastify"
import HashLoader from "react-spinners/HashLoader"
import { AuthContext } from "../context/AuthContext"

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // e.target.name will be "email" or "password"
    // console.log(formData)
  }

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const submitHandler = async (e) => {
    // console.log(formData)
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()
      // console.log("log in: ", result)

      if (!res.ok) {
        throw new Error(result.message)
      }

      // update the global state of auth
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          role: result.role,
          token: result.token,
        }
      })

      setLoading(false)
      toast.success(result.message)
      navigate('/')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>

        <form onSubmit={submitHandler} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          <div className="mt-5">
            <button type="submit" className="w-full btn">
              {loading ? <HashLoader size={25} color="#ffffff" /> : 'Log in'}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? <Link to="/register" className="text-primaryColor font-medium">Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login