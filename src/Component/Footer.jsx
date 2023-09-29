// import React from "react";
// import {
//   AiFillInstagram,
//   AiFillFacebook,
//   AiFillLinkedin,
// } from "react-icons/ai";
// import { FaBowlFood } from "react-icons/fa6";
// import { GiIndiaGate } from "react-icons/gi";
// const Footer = () => {
//   return (
//     <footer class=" bg-orange-500 footer flex justify-center items-center  p-20">
//       {/* <div className='text-left '>
//         <span className='font-bold'> Company Logo</span>
//         <br/>
//         <span>
//         Unlock Your Health
// Potential
// Personalized Nutrition Meals
//         </span>
//         <br/>  <br/>
//         <span className='font-bold'>Contact
//             </span>

//         <span className=' flex text-3xl '> <AiFillInstagram /> <AiFillFacebook /> <AiFillLinkedin /></span>
//     </div>
//     <div className='text-left'>
//         <span className='font-bold'> Feature</span>
//         <ul>
//             <li>Meeting</li>
//             <li>Blog</li>
//             <li>Press</li>
//         </ul>
//     </div>
//     <div className='text-left'>
//         <span className='font-bold'> Resources</span>
//         <ul>
//             <li>Feature</li>
//             <li>Products</li>
//             <li>Support</li>
//         </ul>
//     </div>
//     <div className='text-left'>
//     <span className='font-bold'> Resources</span>
//         <ul>
//             <li>Feature</li>
//             <li>Products</li>
//             <li>Support</li>
//         </ul>
//     </div> */}
//       <div className="flex gap-3 items-center flex-col text-xl">
//         <FaBowlFood size={50} />
//         <span>orangeclinic.mumbai@gmail.com</span>
//         <span className="flex items-center ">
//           {/* <GiIndiaGate size={30} /> */}
//           +91-9821790372
//         </span>
//         <span>
//           <AiFillInstagram size={50} />
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaBowlFood } from "react-icons/fa6";
import { GiIndiaGate } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-orange-500 footer flex justify-center items-center p-20 absolute  w-full">
      {/* Your footer content */}
      <div className="flex gap-3 items-center flex-col text-xl">
        <FaBowlFood size={50} />
        <span>orangeclinic.mumbai@gmail.com</span>
        <span className="flex items-center">
          {/* <GiIndiaGate size={30} /> */}
          +91-9821790372
        </span>
        <span>
          <AiFillInstagram size={50} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
