import signupImg from "../assets/images/signup.gif"
import avatar from "../assets/images/doctor-img02.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import uploadImageCloudinary from "../utils/uploadCloudinary"
import { BASE_URL } from "../config"
import { toast } from "react-toastify"
import HashLoader from "react-spinners/HashLoader"

console.log("BASE_URL: ", `${BASE_URL}/auth/register`)

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient'
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (e) => {
    // console.log(e.target.files) // e.target.files returns a FileList object {0: File, length: 1}
    const file = e.target.files[0]

    // use cloudinary to upload images
    const data = await uploadImageCloudinary(file)
    console.log(data)
    setPreviewURL(data.secure_url)
    setSelectedFile(data.secure_url)
    setFormData({ ...formData, photo: data.secure_url })
  }

  const submitHandler = async (e) => {
    // console.log(formData)
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      const { message } = await res.json()

      if (!res.ok) {
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/login')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className="px-5 xl:px-8">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* === image box === */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* === sign up form === */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
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

              <div className="mb-5 flex items-center justify-between">
                <label
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    className="text-textColor font-semibold text-[15px] 
                  leading-7 px-4 py3 focus:outline-none"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Gender:
                  <select
                    name="gender"
                    className="text-textColor font-semibold text-[15px] 
                  leading-7 px-4 py-3 focus:outline-none"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && <figure className="w-[60px] h-[60px] rounded-full 
                  border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={previewURL} alt="" className="w-full rounded-full" />
                </figure>}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full 
                  flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                  bg-[#0066ff46] text-headingColor font-semibold rounded-lg">
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-5">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full btn"
                  onClick={handleInputChange}
                >
                  {loading ? <HashLoader size={35} color="#ffffff" /> : 'Sign Up'}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account? <Link to="/login" className="text-primaryColor font-medium">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup