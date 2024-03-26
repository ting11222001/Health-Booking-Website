import DoctorCard from './DoctorCard'
import useFetchData from "../../hooks/useFetchData"
import Loader from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"


const DoctorList = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`)

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {
        !loading && !error && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 
            lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {doctors.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))}
          </div>
        )
      }
    </>
  )
}

export default DoctorList