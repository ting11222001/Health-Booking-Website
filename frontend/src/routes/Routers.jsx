import Home from "../pages/Home"
import Blog from "../pages/Blogs/Blog"
import BlogDetails from "../pages/Blogs/BlogDetails"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import { Routes, Route } from "react-router-dom"
import MyAccount from "../../src/Dashboard/user-account/MyAccount"
import Dashboard from "../../src/Dashboard/doctor-account/Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import CheckoutSuccess from "../pages/CheckoutSuccess"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors-details/:id" element={<DoctorDetails />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/users/profile/me" element={
        <ProtectedRoute allowedRoles={['patient']}>
          <MyAccount />
        </ProtectedRoute>
      } />
      <Route path="/doctors/profile/me" element={
        <ProtectedRoute allowedRoles={['doctor']}>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default Routers