import DoctorCard from "../../components/Doctors/DoctorCard"
import Testimonial from "../../components/Testimonial/Testimonial"
import useFetchData from "../../hooks/useFetchData"
import Loader from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import { useEffect, useState } from "react"

const Doctors = () => {
  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState('')
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)

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
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <h2 className="heading">Find a Doctor</h2>
            <p className="text__para">At <span className="font-bold">Thriveful</span>, we believe everyone deserves access to quality mental health care.</p>
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
              <input
                type="search"
                className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
                placeholder="Search doctor by name or specialization"
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
        </div>
      </section>

      {/* === List of Doctors === */}
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {
            !loading && !error && (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {doctors.map((doctor) => (
                  <DoctorCard doctor={doctor} key={doctor.id} />
                ))}
              </div>
            )
          }
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

export default Doctors