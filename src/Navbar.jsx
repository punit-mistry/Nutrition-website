import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between p-6 font-bold shadow-lg shadow-orange-500/50 '>
        <div>
           <a href='/'> logo</a>
        </div>
        <div>
            <ul className='w-full flex gap-5' >
                <li><a href='/'>Home</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/aboutme'>About Me</a></li>
                <li><a href='/contact'>Contact Me</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar