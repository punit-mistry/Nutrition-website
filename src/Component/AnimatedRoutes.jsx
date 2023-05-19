import React from 'react'
import { Routes,Route ,useLocation} from 'react-router-dom'
import Nutrition from '../Nutrition'
import Information from './information'
import About  from './About'
import Page from './Page'
import { AnimatePresence } from "framer-motion"
import Contact from './Contact'

const AnimatedRoutes = () => {
const location =useLocation()

  return (
    <AnimatePresence>
            <Routes location={location}key={location.pathname}>
        <Route path='/' element={<Nutrition />}></Route>
    <Route path='/search/:id' element={<Information />}></Route>
    <Route path='/about' element={<About />}></Route>
        <Route path='/page' element={<Page />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes