import React,{useState} from 'react'
import Image from '../Images/contact-image.png'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
const [userdata,setUsetData]   =useState({
    name:"",
    number:"",
    email:"",
    message:"",
})

    const postuserdata =(e)=>{
     
        const name = e.target.name
        const value = e.target.value
        setUsetData({...userdata,[name]:value});
        console.log(userdata)
    }

    const submitData=async(e)=>{
        e.preventDefault()
        let data = userdata
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://contact-form-data-4a590-default-rtdb.firebaseio.com/userdatabase.json',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data)
            alert("Thank you !!")
            setUsetData({
                name:"",
    number:"",
    email:"",
    message:"",
            })
          })
          .catch((error) => {
            alert("Oops Something went wrong!!")
            console.log(error);
          });
          
    }

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
            
<div className='form-context'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            rhoncus quam.
            <br /><br />
<img src={Image} />

</div>
<div className='form'>
<form>
                
                <input placeholder='Name' required value={userdata.name}onChange={postuserdata} name="name" type='text' className='contact'/>
               
                <br/>
                <input placeholder='Number' required value={userdata.number}onChange={postuserdata}name='number' type='number' className='contact'/>
                <br/>
                <input placeholder='Email' required value={userdata.email}onChange={postuserdata} name='email'type='text' className='contact'/>
                <br/>
                <textarea placeholder='Message' required value={userdata.message}onChange={postuserdata}name='message' cols={57} rows={5}></textarea>
              
                <br/>      <br/>
                <button onClick={submitData}>Send !!</button>
            </form>

</div>
           
        </div>

    </motion.div>
  )
}

export default Contact