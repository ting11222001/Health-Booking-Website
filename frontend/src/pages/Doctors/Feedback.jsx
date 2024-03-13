import avatar from "../../assets/images/avatar-icon.png"
import { formatDate } from "../../../src/utils/formatDate"
import { AiFillStar } from "react-icons/ai"
import { useState } from "react"
import FeedbackForm from "./FeedbackForm"

const Feedback = () => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>

        {/* === each review === */}
        <div className="flex justify-between gap-10 mb-[30px]">
          {/* === avatar, name, date, comments === */}
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} className="w-full" alt="" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Adam Joy
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate('02-03-2023')}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Good services, highly recommended ✨
              </p>
            </div>
          </div>

          {/* === stars === */}
          <div className="flex gap-1">
            {/* create 5 slots in a new array, get the keys of those items, and copy those keys into a new array */}
            {[...Array(5).keys()].map((_, index) =>
              <AiFillStar key={index} color="#0067FF" />
            )}
          </div>
        </div>
      </div>

      {/* === feedback form === */}
      {!showFeedbackForm && (
        <div className="text-center">
          <button onClick={() => setShowFeedbackForm(!showFeedbackForm)} className="btn">
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && (
        <FeedbackForm />
      )}
    </div>
  )
}

export default Feedback