import React from 'react'
import "./Header.css"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"


const Header = () => {
  return (
    <>
     <div className="header">
        
           <ul>
            <li><img src={phone} alt="" />+254 708934321</li>
            <li><img src={mail} alt="" />digsTech@gmail.com</li>
           </ul>           
       
            <ul>
            <li><img className='location' src={location} alt="" />digsTech@gmail.com</li>
            </ul>

        

    </div>  
    </>
   
    
  )
}

export default Header