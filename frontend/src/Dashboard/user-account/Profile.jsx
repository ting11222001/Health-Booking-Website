/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import uploadImageCloudinary from "../../utils/uploadCloudinary"
import { BASE_URL } from "../../config"
import { toast } from "react-toastify"
import HashLoader from "react-spinners/HashLoader"
import { AuthContext } from "../../context/AuthContext"

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const { token, dispatch } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    bloodType: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType
    })
  }, [user])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (e) => {
    // console.log(e.target.files) // e.target.files returns a FileList object {0: File, length: 1}
    const file = e.target.files[0]

    // use cloudinary to upload images
    const data = await uploadImageCloudinary(file)

    setSelectedFile(data.secure_url)
    setFormData({ ...formData, photo: data.secure_url })
  }

  const submitHandler = async (e) => {
    // console.log(formData)
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message)
      }

      // update the global state of auth
      dispatch({
        type: "PROFILE_UPDATE",
        payload: {
          profile: result.data
        }
      })

      setLoading(false)
      toast.success(result.message)
      navigate('/users/profile/me')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="mt-10">
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
            aria-readonly
            readOnly
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
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor cursor-pointer"
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
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
          {formData.photo && <figure className="w-[60px] h-[60px] rounded-full 
                  border-2 border-solid border-primaryColor flex items-center justify-center">
            <img src={formData.photo} alt="" className="w-full rounded-full" />
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
            {loading ? <HashLoader size={35} color="#ffffff" /> : 'Update'}
          </button>
        </div>
      </form>

    </div>
  )
}

export default Profile