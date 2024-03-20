/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Tabs = ({ tab, setTab }) => {
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)

  const handleLogOut = () => {
    localStorage.removeItem('user')

    dispatch({
      type: "LOGOUT",
    })
    navigate('/')
  }


  return (
    <div>
      <span className='lg:hidden'>
        <BiMenu className='w-6 h-6 cursor-pointer' />
      </span>

      {/* === left panel (only shown on big screen) === */}
      <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
        <button
          onClick={() => setTab('overview')}
          className={`
          ${tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
          Overview
        </button>

        <button
          onClick={() => setTab('appointments')}
          className={`
          ${tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
          Appointments
        </button>

        <button
          onClick={() => setTab('settings')}
          className={`
          ${tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
          Profile
        </button>

        <button
          onClick={() => setTab('create-blog')}
          className={`
          ${tab === "create-blog"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
          Create Blog
        </button>

        <button
          onClick={() => setTab('list-blog')}
          className={`
          ${tab === "list-blog"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
          All Blog Posts
        </button>


        <div className="mt-[100px] w-full">
          <button
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
            onClick={handleLogOut}
          >
            Log out
          </button>
          <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tabs