import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
function FirstSection (){
    return(
        <>
        <div className="FirstSection">
        <div className="FirstSection-1">
        <div className="FirstSection-1_text"> 
        Nourish Body Live Health <span>Today</span>
        </div>
        
        <div className="FirstSection-1_Inputbox">
            <input type="text" placeholder="Your Email..." />
            <button>Get Started</button>
        </div>
        
        <div className="FirstSectio-1_logos">
            <label>
                Feature On:
                </label>
                <div>

          
                <img src="https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/Greenish-Color.png" />
                <img src="https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/Blossom.png" />
                </div>
        </div>
        </div>
        <div className="FirstSection-2">
        <img src="https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/a-sporty-woman-in-sportswear-holds-a-smoothie-cocktail-in-her-hand-the-concept-of-healthy-eating-e1682306162902.jpg" />
        </div>
        
        <div className="FirstSection-3">
        <div className="FirstSection-3_button"> <button> <FontAwesomeIcon icon={faArrowDown} /></button></div>
        <div className="FirstSection-3_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        <div className="FirstSection-3_logo"> 
        <div>
        <img src="https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/smiling-fit-young-african-sportswoman-carrying-spo-2021-08-27-18-29-01-utc.jpg" />
                <img src="https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/smiling-fit-young-african-sportswoman-carrying-spo-2021-08-27-18-29-01-utc.jpg" />
                <img src="https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/smiling-fit-young-african-sportswoman-carrying-spo-2021-08-27-18-29-01-utc.jpg" />
                <img src="https://templatekit.jegtheme.com/nouriv/wp-content/uploads/sites/365/2023/04/smiling-fit-young-african-sportswoman-carrying-spo-2021-08-27-18-29-01-utc.jpg" />
        </div>
        <div className="Logo_text">
        475 +    <br />
        Satisfied clients
        </div>
         </div>
        </div>

        </div>

        </>
    )
}

export default FirstSection;