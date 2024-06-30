import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="header-text">
      <h1>TECH DIGS <span>simplified Technology</span></h1>
      <p>Tech Digs is a dynamic IT company specializing in 
        innovative software solutions. With a focus on 
        cutting-edge technologies, we deliver custom 
        applications, cloud services, and digital 
        transformation strategies. Our team of experts is 
        committed to helping businesses thrive in the 
        digital age through tailored, efficient tech solutions.</p>
      <button className='btn'>What we offer</button>
      <button className='btn dark'>Get in touch</button>
      </div>
    </div>
  )
}

export default Home