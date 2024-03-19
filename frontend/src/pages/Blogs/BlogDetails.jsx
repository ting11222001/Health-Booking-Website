import { useState } from "react"
import { BASE_URL } from "../../config"
import useFetchData from "../../hooks/useFetchData"
import Loader from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import { useParams } from "react-router-dom"
import { formatDate } from "../../utils/formatDate"
import BlogArticle from "./BlogArticle"
import BlogDiscussion from "./BlogDiscussion"

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, loading, error } = useFetchData(`${BASE_URL}/blogs/${id}`)
  const [tab, setTab] = useState('article')

  const {
    title,
    content,
    doctor
  } = blog

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            {/* === Left content === */}
            <div className="md:col-span-2">
              {/* === Doctor section === */}
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={doctor?.photo} alt="" className="w-full" />
                </figure>

                <div>
                  <h3 className="text-headingColor text-[22px] leading-9 font-bold mt-3">
                    {title}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5
                  lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      {doctor?.name}
                    </span>
                    <span className="text-[14px] leading-5
                  lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              {/* === About/Feedback section === */}
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab('article')}
                  className={`${tab === 'article' && 'border-b border-solid border-primaryColor'} 
                py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Article
                </button>

                <button
                  onClick={() => setTab('discussion')}
                  className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} 
                py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Discussion
                </button>
              </div>

              {/* === About doctor section === */}
              <div className="mt-[50px]">
                {
                  tab === "article" &&
                  <BlogArticle
                    title={title}
                    content={content}
                  />
                }
                {
                  tab === "discussion" &&
                  <BlogDiscussion
                  />
                }
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  )
}

export default BlogDetails