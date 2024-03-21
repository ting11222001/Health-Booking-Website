import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import patient4 from "../../assets/images/patient-4.png"
import { HiStar } from "react-icons/hi"

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:ml-[55px]">
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patient4} alt="" className="w-24 rounded-lg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Wayne Collins
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken the best medical services from them. They treat so well and
              they are providing the best care.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patient4} alt="" className="w-24 rounded-lg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  John Smiths
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken the best medical services from them. They treat so well and
              they are providing the best care.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patient4} alt="" className="w-24 rounded-lg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Adam Joy
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken the best medical services from them. They treat so well and
              they are providing the best care.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patient4} alt="" className="w-24 rounded-lg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Aaron Stringer
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken the best medical services from them. They treat so well and
              they are providing the best care.
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Testimonial