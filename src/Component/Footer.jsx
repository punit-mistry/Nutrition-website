import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiFillLinkedin} from "react-icons/ai";
const Footer = () => {
  return (
    

<footer class="text-center bg-orange-500 footer flex flex-row gap-10 justify-between p-20">
    <div className='text-left '>
        <span className='font-bold'> Company Logo</span>
        <br/>
        <span>
        Unlock Your Health
Potential
Personalized Nutrition Meals
        </span>
        <br/>  <br/>
        <span className='font-bold'>Contact
            </span>
        
        <span className=' flex text-3xl '> <AiFillInstagram /> <AiFillFacebook /> <AiFillLinkedin /></span>
    </div>
    <div className='text-left'>
        <span className='font-bold'> Feature</span>
        <ul>
            <li>Meeting</li>
            <li>Blog</li>
            <li>Press</li>
        </ul>
    </div>
    <div className='text-left'>
        <span className='font-bold'> Resources</span>
        <ul>
            <li>Feature</li>
            <li>Products</li>
            <li>Support</li>
        </ul>
    </div>
    <div className='text-left'>
    <span className='font-bold'> Resources</span>
        <ul>
            <li>Feature</li>
            <li>Products</li>
            <li>Support</li>
        </ul>
    </div>
</footer>
  )
}

export default Footer