/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import { IoInformationCircle } from "react-icons/io5";
import { BASE_URL } from "../../config"
import { toast } from "react-toastify"
import { AuthContext } from "../../context/AuthContext"

const CreateBlog = ({ doctorData }) => {
  const { dispatch } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const uploadBlogPostHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/blogs/${doctorData?._id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message)
      }

      // update the global state of auth
      dispatch({
        type: "DOCTOR_ADD_BLOG",
        payload: {
          blog: result.data
        }
      })

      toast.success(result.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
        <IoInformationCircle />
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">
          Admin will review and grant publish permission to your article before you can see it published on the website.
        </div>
      </div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Create a Blog Post
      </h2>

      <form>
        {/* === Title === */}
        <div className="mb-5">
          <p className="form__label">Title*</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Blog Title"
            className="form__input"
          />
        </div>

        {/* === Content === */}
        <div className="mb-5">
          <p className="form__label">Content*</p>
          <textarea
            name="content"
            rows={5}
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write about the blog content"
            className="form__input"
          />
        </div>

        {/* === Upload article photo === */}

        {/* === final upload button === */}
        <div className="mt-7">
          <button
            type="submit"
            onClick={uploadBlogPostHandler}
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full
          py-3 px-4 rounded-lg">
            Upload Blog Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlog