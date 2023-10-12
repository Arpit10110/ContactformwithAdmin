import React from 'react'
import {Link} from "react-router-dom"
import "../Style/Navbar.css"
const Navbar = () => {
  return (
  <>
  <div className="nav">
  <button><Link to="/">Contact Form</Link></button>
  <button><Link to="/admin">Admin Panel</Link></button>
  </div>
  </>
  )
}

export default Navbar
