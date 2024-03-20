/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { BiRightArrowAlt } from "react-icons/bi"
import tempImg from "../../assets/images/icon01.png"

const BlogCard = ({ blog }) => {
  const { title, content } = blog
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={tempImg} className="w-full" alt="" />
      </div>

      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9
      text-headingColor font-[700] mt-3 lg:mt-5
      ">
        {title}
      </h2>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between gap-5">
        <p className="text-[14px] leading-6 font-[400] text-textColor truncate overflow-hidden w-64">
          {content}
        </p>
        <Link
          to={`/blog/${blog._id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
          flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard