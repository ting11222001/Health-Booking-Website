import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import { Link } from "react-router-dom"
import { BiRightArrowAlt } from "react-icons/bi"
import About from "../components/About/About"
import ServiceList from "../components/Services/ServiceList"
import featureImg from "../assets/images/feature-img.png"
import videoImg from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import DoctorList from "../components/Doctors/DoctorList"
import faqImg from "../assets/images/faq-img.png"
import FaqList from "../components/Faq/FaqList"
import Testimonial from "../components/Testimonial/Testimonial"

const Home = () => {
  return (
    <>
      {/* === hero section === */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* === hero left === */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Empower Yourself with Affordable Mental Health Support
                </h1>
                <p className="text__para">At <span className="font-bold">Thriveful</span>, we believe everyone deserves access to quality mental health care.</p>

                <button className="btn">
                  <Link
                    to={`/doctors`}>
                    Request an Appointment
                  </Link>
                </button>
              </div>

              {/* === hero counter === */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor block rounded-full mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]font-[700] text-headingColor">15+</h2>
                  <span className="w-[100px] h-2 bg-purpleColor block rounded-full mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]font-[700] text-headingColor">99%</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor block rounded-full mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>

            </div>

            {/* === hero right === */}
            <div className="flex gap-[30px] justify-end">
              <div className="w-1/2">
                <img className="object-contain rounded-lg" src={heroImg01} alt="" />
              </div>
              <div className="w-1/2 mt-[30px]">
                <img className="w-80 object-contain rounded-lg mb-[30px]" src={heroImg03} alt="" />
                <img className="w-64 object-scale-down rounded-lg" src={heroImg02} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === services section === */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Discover Affordable Online Counseling
            </h2>
            <p className="text__para text-center">Take the first step towards better mental health with our accessible online counseling services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[50px]">
            <div className="pt-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Our licensed therapists offer personalized treatment plans to support your journey to wellness.</p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="pt-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find an article</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Dive into our library of educational content curated by our team of mental health professionals.</p>

                <Link
                  to="/blog"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="pt-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Contact us</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Whether &apos;re a user with ideas or a mental health professional looking to collaborate, we&apos;re here for you.</p>

                <Link
                  to="/contact"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* === about section === */}
      <About />

      {/* === services detail section === */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our mental health professionals provide these services
            </h2>
            <p className="text__para text-center">World-class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* === feature section === */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* === feature content === */}
            <div className="xl:w-[670px]">
              <h2 className="heading">Get virtual treatment <br /> anytime.</h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your therapist here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our therapists who are accepting new patients, use the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/doctors">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* === feature img === */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4 rounded-lg" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00AM</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoImg} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Wayne Collins</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* === our great therapists === */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Therapists</h2>
            <p className="text__para text-center">
              We&apos;re ready to help.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* === faq section === */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" className="w-[500px] rounded-lg" />
            </div>

            <div className="w-full md:w-3/4">
              <h2 className="heading">
                Frequently asked questions
              </h2>
              <FaqList />
            </div>
          </div>

        </div>
      </section>

      {/* === testimonial section === */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__para text-center">
              World-class care for everyone.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Home