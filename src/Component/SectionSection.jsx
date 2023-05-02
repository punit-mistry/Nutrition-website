import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const SectionSection = () => {
  return (
  <>
  <div className='SecondSection'>

  <div className='SecondSection_1'>
    <h1><FontAwesomeIcon icon={faQuoteRight} style={{color: "#000000",}} /></h1>
  </div>
  <div className='SecondSection_2'>
    <h1>"We believe that nutrition does not have to be difficult or confusing, nor should you feel restricted in your food choices"</h1>
  </div>
  <div className='SecondSection_3'>
    <div>
    <img className='img1' src=" https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/fresh-vegetables-flat-lay-healthy-lifestyle-e1682306341695.jpg" />
   <img  className='img2' src=" https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/a-sporty-woman-in-sportswear-holds-a-smoothie-cocktail-in-her-hand-the-concept-of-healthy-eating-1-e1682306425363.jpg" />
    </div>
    <div>
    <span className='Heading1'>Passion for Helping People Live Healthier Through Optimal <span style={{fontStyle:"italic"}}>Nutrition</span></span> <br />
    <span className='Heading2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore quo dolore magna aliqum erat, sed diam voluptua. At vero eos et mea accusam et justo duo dolores et ea rebum stet clita deam dignissimos ducimus.<br />
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
   </span> <br /><br /><br />
<button className='SecondSection_Button'>More About Us</button>
    </div>
    </div>
  </div>
  
  </>
  )
}

export default SectionSection