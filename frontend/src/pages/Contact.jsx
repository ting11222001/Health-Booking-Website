import { useState } from "react"
import HashLoader from "react-spinners/HashLoader"
import { BASE_URL } from "../config"
import { toast } from "react-toastify"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitFeedback = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/feedbacks/create`, {
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

      setLoading(false)
      toast.success(result.message)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }

  }

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Whether you&apos;re a user with ideas or a mental health professional looking to collaborate, we&apos;re here for you. And if you&apos;d like to donate to support the website, let us know!
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="name" className="form__label">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="form__input mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="form__label">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">Message</label>
            <textarea
              rows="6"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave a comment..."
              className="form__input mt-1"
            />
          </div>

          <button
            type="submit"
            className="btn rounded sm:w-fit"
            onClick={handleSubmitFeedback}
          >
            {loading ? <HashLoader size={25} color="#fff" /> : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact