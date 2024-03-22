import BlogCard from "../../components/Blog/BlogCard"
import { BASE_URL } from "../../config"
import useFetchData from "../../hooks/useFetchData"
import Loader from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import { useEffect, useState } from "react"

const Blog = () => {
  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState('')

  const { data: blogs, loading, error } = useFetchData(`${BASE_URL}/blogs?query=${debounceQuery}`)

  const handleSearch = () => {
    setQuery(query.trim())
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query)
    }, 700)

    return () => clearTimeout(timeout)
  }, [query])
  return (
    <>
      {/* === banner === */}
      <section className="hero__section pt-[60px]">
        <div className="container text-center">
          <h2 className="heading">Find an Article</h2>
          <p className="text__para">Dive into our library of educational content curated by our team of mental health professionals.</p>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search blog post by keywords"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* === List of Blog Posts === */}
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {
            !loading && !error && (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Blog