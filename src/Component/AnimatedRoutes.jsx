import React from 'react'
import { Routes,Route ,useLocation} from 'react-router-dom'
import Nutrition from '../Nutrition'
import Information from './information'
import About  from './About'
import Page from './Page'
import { AnimatePresence } from "framer-motion"
import Contact from './Contact'
import Login from './Auth/login'
import Signup from './Auth/signup'
import Upload from './fileupload/upload'
const AnimatedRoutes = () => {
const location =useLocation()

  return (
    <AnimatePresence>
            <Routes location={location}key={location.pathname}>
        <Route path='/home' element={<Nutrition />}></Route>
    <Route path='/search/:id' element={<Information />}></Route>
    <Route path='/about' element={<About />}></Route>
        <Route path='/page' element={<Page />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes