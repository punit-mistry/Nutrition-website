import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Navbar'
import Footer from './Component/Footer'
import Services from './Component/Pages/Services'
import Aboutme from './Component/Pages/Aboutme'
import Contact from './Component/Pages/Contact'
const App = () => {
  return (
        <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/services" element={<Services />} />
            <Route path ="/aboutme" element={<Aboutme />} />
            <Route path ="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer  />
        </>
  )
}

export default App