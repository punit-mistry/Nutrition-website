import React from 'react'
import Image from '../Images/image2.webp'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
        initial={{width:0}}
        animate={{width:'100%'}}
        exit={{x:window.innerWidth,transition:{duration:
        0.1}}}
    className='contact'>
        <div className='contact-image'>
        <div className='contact-image-text'>
            <h1>Contact Page</h1>
        </div>
        </div>
      <div className='spline'>
        <p>* If it is not showing then open the inspect panel "Ctrl+Shift+I" *</p>
        <h2>Play Area</h2>
    <Spline scene="https://prod.spline.design/flnHw-qOqMAWzB3p/scene.splinecode" />
        </div>  
        <div className='contact-form'>
            <h1> Contact Form </h1>

            <form>
                <label>
                   Full Name:
                <input type='text' className='contact'/>
                </label>
                <label>
                    Phone Number:
                <input type='number' className='contact'/>
                </label>
                <label>
                    Email ID:
                <input type='text' className='contact'/>
                </label>
                <label>
                    Message:<br/>
                <textarea cols={72} rows={5}></textarea>
                </label>
                <br/>
                <button >Send !!</button>
            </form>
        </div>

    </motion.div>
  )
}

export default Contact