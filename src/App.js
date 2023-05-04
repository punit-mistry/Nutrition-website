import React from 'react'
import { Router ,Routes,Route, Link} from 'react-router-dom'
import Nutrition from './Nutrition'
import Information from './Component/information'
const App = () => {
  return (
<>

           <div className="Navbar">  
          <div className='Logo'>
            <img src='https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/logo-nouriv.png'  />
          </div>
          <div className='Content'><div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>About</Link></li>
              <li><Link to='/'>Page</Link></li>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/search'>Blog</Link></li>
            </ul>
            </div></div>
          <div className='Button'>
            <div>
            <button >Contact Us</button>
            </div>
            </div>

          </div>  
          <Routes>
            <Route path='/' element={<Nutrition />}></Route>
            <Route path='/search/:id' element={<Information />}></Route>
          </Routes>
   
    </>
  )
}

export default App