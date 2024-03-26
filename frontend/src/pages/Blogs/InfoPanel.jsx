/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const InfoPanel = ({ doctor }) => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-center">
        <figure className="max-w-[200px] max-h-[200px]">
          <img src={doctor?.photo} alt="" className="w-full" />
        </figure>
      </div>

      <div className="mt-[30px]">
        <p className="text__para font-semibold text-headingColor text-center">
          Ready to take the next step towards personal growth?
        </p>
      </div>

      <Link to={`/doctors-details/${doctor?._id}`}>
        <button className="btn px-2 w-full rounded-md">
          Talk to Dr. {doctor?.name}
        </button>
      </Link>
    </div>
  )
}

export default InfoPanel