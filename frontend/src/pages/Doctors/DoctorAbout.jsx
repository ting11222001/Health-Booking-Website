/* eslint-disable react/prop-types */
import { formatDate } from "../../../src/utils/formatDate"

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis mollitia aperiam harum omnis assumenda. Fugit accusamus aliquam eos. Recusandae tenetur nostrum sed cum iusto odio placeat similique molestiae praesentium.
          {about}
        </p>
      </div>

      {/* === Education section === */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
          {qualifications}
        </h3>

        <ul className="pt-4 md:p-5">
          {experiences}
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end 
          md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate('06-24-2014')} - {formatDate('09-15-2024')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PhD in Psychology
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mass General Hospital, New York
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end 
          md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate('01-04-2004')} - {formatDate('01-30-2014')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Masters in Psychology
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New York Public Hospital, New York
            </p>
          </li>
        </ul>
      </div>

      {/* === Experience section === */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate('06-24-2014')} - {formatDate('09-15-2024')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Psychiatrist
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mass General Hospital, New York
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate('06-24-2004')} - {formatDate('09-15-2014')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Jr. Psychiatrist
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mass General Hospital, New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout