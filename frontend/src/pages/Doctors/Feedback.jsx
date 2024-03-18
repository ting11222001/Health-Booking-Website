/* eslint-disable react/prop-types */
import { formatDate } from "../../../src/utils/formatDate"
import { AiFillStar } from "react-icons/ai"
import { useState } from "react"
import FeedbackForm from "./FeedbackForm"

const Feedback = ({ reviews, totalRating }) => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>

        {/* === each review === */}
        {reviews?.map((review, index) =>
          <>
            <div
              key={index}
              className="flex justify-between gap-10 mb-[30px]">
              {/* === avatar, name, date, comments === */}
              <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                  <img src={review?.user?.photo} className="w-full" alt="" />
                </figure>

                <div>
                  <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                    {review?.user?.name}
                  </h5>
                  <p className="text-[14px] leading-6 text-textColor">
                    {formatDate(review?.createdAt)}
                  </p>
                  <p className="text__para mt-3 font-medium text-[15px]">
                    {/* Good services, highly recommended ✨ */}
                    {review?.reviewText}
                  </p>
                </div>
              </div>

              {/* === stars === */}
              <div className="flex gap-1">
                {/* create 5 slots in a new array, get the keys of those items, and copy those keys into a new array */}
                {[...Array(review?.rating).keys()].map((_, index) =>
                  <AiFillStar key={index} color="#0067FF" />
                )}
              </div>
            </div>
          </>
        )}

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