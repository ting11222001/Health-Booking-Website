import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* === about image === */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" className="w-3/4 rounded-lg" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[12%]">
              <img src={aboutCardImg} className="" alt="" />
            </div>
          </div>

          {/* === about content === */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">Therapy doesn&apos;t have to break the bank. With our low-cost online counseling services, you can access professional support without draining your wallet. </p>
            <p className="text__para mt-[30px]">
              Start your journey to better mental health today. Our team of licensed professionals is dedicated to providing affordable online counseling services tailored to your needs.
            </p>
            <p className="text__para mt-[30px]">
              Moreover, knowledge is power when it comes to improving your well-being. Explore our website for educational content written by our team of experts.
            </p>

            <Link to="/blog">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About