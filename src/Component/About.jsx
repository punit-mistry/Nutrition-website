import React from 'react'
import {motion,useScroll} from 'framer-motion'
import LoremIpsum from './LoremIpsum'
const About = () => {

  return (
    
    <motion.div
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{y:window.innerWidth,transition:{duration:
    0.9}}}
        className='about'
    >
     <LoremIpsum />
    </motion.div>
  )
}

export default About