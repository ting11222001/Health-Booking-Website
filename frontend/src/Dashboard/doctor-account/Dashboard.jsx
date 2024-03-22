import Loader from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import useGetProfile from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import Tabs from "./Tabs"
import { useContext, useEffect, useState } from "react"
import { IoInformationCircle } from "react-icons/io5";
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from "../../pages/Doctors/DoctorAbout"
import Profile from "./Profile"
import Appointments from "./Appointments"
import CreateBlog from "./CreateBlog"
import ListBlog from "./ListBlog"
import { ProfileContext } from "../../context/ProfileContext"

const Dashboard = () => {
  const [tab, setTab] = useState('overview')

  const {
    data,
    loading,
    error
  } = useGetProfile(`${BASE_URL}/doctors/profile/me`)

  // update the global state of profile
  // and use the global state of profile for the data display
  const { dispatch, profile } = useContext(ProfileContext)

  useEffect(() => {
    if (data) {
      dispatch({
        type: "PROFILE_UPDATE",
        payload: {
          profile: data
        }
      });
    }
  }, [data, dispatch]);

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {
          !loading && !error && (
            <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
              <Tabs tab={tab} setTab={setTab} />
              <div className="lg:col-span-2">
                {profile?.isApproved === "pending" && (
                  <>
                    <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                      <IoInformationCircle />
                      <span className="sr-only">Info</span>
                      <div className="ml-3 text-sm font-medium">
                        To get approval, please complete your profile.
                        We&apos;ll review manually and approve within 3 days.
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-8">
                  {tab === 'overview' &&
                    <div>
                      <div className="flex items-center gap-4 mb-10">
                        <figure className="max-w-[200px] max-h-[200px]">
                          <img src={profile?.photo} alt="" className="w-full rounded-lg" />
                        </figure>

                        <div>
                          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6
                        rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                            {profile?.specialization}
                          </span>

                          <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                            {profile?.name}
                          </h3>

                          <div className="flex items-center gap-[6px]">
                            <span className="flex items-center gap-[6px] text-headingColor text-[14px]
                          leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                              <img src={starIcon} alt="" />
                              {profile?.averageRating}
                            </span>
                            <span className="text-textColor text-[14px]
                          leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                              ({profile?.totalRating})
                            </span>
                          </div>

                          <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                            {profile?.bio}
                          </p>
                        </div>
                      </div>

                      <DoctorAbout
                        name={profile?.name}
                        about={profile?.about}
                        qualifications={profile?.qualifications}
                        experiences={profile?.experiences}
                      />
                    </div>
                  }

                  {tab === 'appointments' &&
                    <div>
                      <Appointments appointments={profile?.appointments} />
                    </div>}

                  {tab === 'settings' &&
                    <div>
                      <Profile doctorData={profile} />
                    </div>}

                  {tab === 'create-blog' &&
                    <div>
                      <CreateBlog doctorData={profile} />
                    </div>
                  }

                  {tab === 'list-blog' &&
                    <div>
                      <ListBlog doctorData={profile} />
                    </div>
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Dashboard