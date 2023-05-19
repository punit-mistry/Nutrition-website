import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
const Navbar = () => {
const Navigate = useNavigate()

  const changepath =()=>{
    Navigate("/contact")
  }

  return (
    <div className="Navbar">  
    <div className='Logo'>
      <img src='https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/logo-nouriv.png'  />
    </div>
    <div className='Content'><div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/page'>Page</Link></li>
        <li><Link to='/'>Blog</Link></li>
      </ul>
      </div></div>
    <div className='Button'>
      <div>
      <button onClick={changepath}>Contact Us</button>
      </div>
      </div>

    </div>  
  )
}

export default Navbar