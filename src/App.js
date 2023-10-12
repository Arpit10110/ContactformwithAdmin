import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import ContactForm from "./Components/ContactForm.jsx"
import Navbar from "./Components/Navbar.jsx"
import Admin from "./Components/Admin.jsx"
import "./Style/style.css"
const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ContactForm/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
   </Router>
  )
}
export default App