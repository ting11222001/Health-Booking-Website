/* eslint-disable react/prop-types */

const BlogArticle = ({ title, content }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {title}
          </span>
        </h3>
        <p className="text__para">
          {content}
        </p>
      </div>
    </div>
  )
}

export default BlogArticle