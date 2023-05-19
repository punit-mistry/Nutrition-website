import React from 'react'
import FirstSection from './Component/FirstSection'
import SectionSection from './Component/SectionSection'
import ThirdSection from './Component/ThirdSection'
import {motion} from 'framer-motion'
const Nutrition = () => {
  return (
    <motion.div   initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    >
    <div><FirstSection /></div>
    <motion.div ><SectionSection /></motion.div>
    <div className='ThirdSection'><ThirdSection /></div>
    </motion.div>

  )
}

export default Nutrition