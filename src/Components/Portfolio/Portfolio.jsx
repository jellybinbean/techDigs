import React from 'react'
import "./Portfolio.css"
import jellybean from "../../assets/jellybean.png"
import disease from "../../assets/screen1.png"

const Portfolio = () => {
  return (
    <div>
      <div className='project1'>
        <div className="text-content">
            <h2><span>project name:</span>Jellybean University</h2>
            <h2><span>clients name:</span>Jellybean University</h2>
            <h4><span>Project decsription:</span>This project was a university 
            portfolio project for Jellybean university</h4>
            <h4><span>project link:</span>Jellybean University</h4>
            
        </div>
        <div className="img">
          <img src={jellybean} alt="" />

        </div>
      </div>
      <div className='project1'>
      <div className="img">
          <img src={disease} alt="" />

        </div>
        <div className="text-content">
            <h2><span>project name:</span>Online Lab</h2>
            <h2><span>clients name:</span>Final Year's Project</h2>
            <h4><span>Project decsription:</span>An ai project that allows users to
            predict diseases basing on the symptoms they experience. it also allows medical officers 
            to check for cancer cells in mri images for patients</h4>
            <h4><span>project link:</span>Jellybean University</h4>
            
        </div>
        
      </div>
      
    </div>
  )
}

export default Portfolio