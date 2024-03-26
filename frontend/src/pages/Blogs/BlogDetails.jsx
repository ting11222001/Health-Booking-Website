import { useState } from "react"
import useFetchData from "../../hooks/useFetchData"
import Loader from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import { useParams } from "react-router-dom"
import { formatDate } from "../../utils/formatDate"
import BlogArticle from "./BlogArticle"
import BlogDiscussion from "./BlogDiscussion"
import InfoPanel from "./InfoPanel"
import tempImg from "../../assets/images/hero-bg.png"

const BlogDetails = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL
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
              {/* === Intro section === */}
              <div>
                <figure className="w-full h-full">
                  <img src={tempImg} alt="" className="w-full" />
                </figure>

                <div className="mt-2 flex items-center gap-5">
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img src={doctor?.photo} className="w-full rounded-full" alt="" />
                  </figure>
                  <div className="gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5
                  lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      Dr. {doctor?.name}
                    </span>
                    <span className="text-[14px] leading-3
                  lg:text-[16px] lg:leading-5 font-[400] text-textColor">
                      Published on {formatDate(blog.createdAt)}
                    </span>
                  </div>
                </div>

              </div>

              {/* === Tab button section === */}
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

              {/* === Tab content section === */}
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

            {/* === Right Panel === */}
            <div>
              <InfoPanel
                doctor={doctor}
              />
            </div>
          </div>
        )}


      </div>
    </section>
  )
}

export default BlogDetails