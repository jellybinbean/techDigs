import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Header from './Components/Navbar/Header'
import About from './Components/About/About'
import Title from './Components/Titles/Title'
import Team from './Components/Team/Team'
import Contacts from './Components/Contacts/Contacts'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/Testimonials/Testimonials'
const App = () => {
  return (
   
   <>
  
  <Navbar/>
  <Home/>
  
  <div className="container">
  <Title subtitle="About Us" title="Whats about Tech Digs Firm"/>
  <About/>
  <Team/>
  <Title subtitle="Our Services" title="What we Offer"/>
  <Services/>
  <Title subtitle="Portfolio" title=" See Our Recent works"/>
  <Portfolio/>
  <Testimonials/>
  <Title subtitle="Contacts" title="Reach us Through"/>
  <Contacts/>
  </div>
  <Footer/>


   </>
  )
}

export default App