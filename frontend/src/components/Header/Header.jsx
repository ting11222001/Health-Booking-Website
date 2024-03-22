import { useContext, useEffect, useRef } from "react"
import logo from "../../assets/images/logo.png"
import { NavLink, Link } from "react-router-dom"
import { BiMenu } from "react-icons/bi"
import { AuthContext } from "../../context/AuthContext"
import { ProfileContext } from "../../context/ProfileContext"

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/blog',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  // access the global state of auth
  const { user, role, token, dispatch } = useContext(AuthContext)
  // access the global state of profile
  const { profile, dispatch: dispatchProfile } = useContext(ProfileContext)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current?.classList?.add('sticky__header')
      } else {
        headerRef.current?.classList?.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


  const handleLogOut = () => {
    localStorage.removeItem('user')

    dispatch({
      type: "LOGOUT",
    })

    dispatchProfile({
      type: "PROFILE_LOGOUT",
    })
  }

  return (
    <header
      className="header flex items-center"
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* === logo === */}
          <div className="w-32 h-32">
            <img src={logo} alt="" className="w-full rounded-lg" />
          </div>

          {/* === menu === */}
          <div
            className="navigation"
            ref={menuRef}
            onClick={toggleMenu}
          >
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* === nav right === */}
          <div className="flex items-center gap-4">
            {
              token && user ? (
                <>
                  {/* === user avatar === */}
                  <div>
                    <Link
                      to={`${role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}`}
                    >
                      <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                        <img src={profile ? profile.photo : user.photo} className="w-full rounded-full" alt="" />
                      </figure>
                    </Link>
                  </div>
                  {/* === log out button === */}
                  <Link to="/login">
                    <button
                      onClick={handleLogOut}
                      className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
                      flex items-center justify-center rounded-[50px]">
                      Log out
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  {/* === log in button === */}
                  <Link to="/login">
                    <button
                      className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
                      flex items-center justify-center rounded-[50px]">
                      Log in
                    </button>
                  </Link>
                </>
              )
            }

            {/* === menu button === */}
            <span
              className="md:hidden"
              onClick={toggleMenu}
            >
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header