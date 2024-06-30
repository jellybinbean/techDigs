import React,{useEffect, useState} from 'react'
// import { CgInstagram } from "react-icons/cg";
import './Navbar.css'
import { Link } from "react-scroll"
import logo from "../../assets/dlogo.png"
import Header from './Header';
import menu from '../../assets/menu-icon.png'


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 15 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const togg = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

  }
  return (
    <>
    <Header/>
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
        <div className="title">
            <img src={logo} alt="" />
        </div>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li> <Link to='header' offset={0} smooth={true} duration={500} >Home</Link> </li> 
        <li> <Link to='about' offset={-260} smooth={true} duration={260} >About</Link> </li> 
        <li> <Link to='services' offset={-160} smooth={true} duration={260} >Services</Link> </li>
        <li><Link to='project1' offset={-260} smooth={true} duration={500} >Portfolio</Link></li>  
        <li><Link to='testimonials' offset={-150} smooth={true} duration={500} >testimmonials</Link></li>
        </ul>
      <div className="cot-container">
        
        
        <button  className="btn"><Link to='contact' offset={-260} smooth={true} duration={500} >Contact us</Link></button>
        
        <button className='btn'><Link to='contact' offset={-260} smooth={true} duration={500} >Hire us</Link></button>
      </div> 
      <img src={menu} alt="" onClick={togg} className="menu-icon" />   
    </nav>
    </>
    
  )
}

export default Navbar