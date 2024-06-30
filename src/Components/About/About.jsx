import React, { useState } from 'react'
import "./About.css"
import Mission from './Mission'
import Goals from './Goals'
import { GoBookmarkSlash } from 'react-icons/go'
import Achievement from './Achievement'

const About = () => {
  const [selected,setSelected] = useState(0)
  const handleChange = (index)=>{
    if (index != selected){
        setSelected(index)
        console.log("change, handled" )
    }
    
  }
  return (
    <>
    <div className="about">
        <div className="section-1">
            <h1>Digs tech</h1>
            <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Incidunt labore fuga, omnis
                 dolores ab magnam accusantium laborum perferendis aspernatur
                  non unde commodi adipisci iure culpa, eligendi quia 
                  veritatis. Soluta, quam.</p>
        </div>
        <div className="content">
        <div className="options">
           <button className={`${selected == 0 && "darkbutton"}`} onClick={()=>handleChange(0)}>mission</button>
           <button className={`${selected == 1 && "darkbutton" }`} onClick={()=>handleChange(1)}>future goals</button>
           <button className={`${selected == 2 && "darkbutton"}`} onClick={()=>handleChange(2)}>achievemments</button>
        </div>
        <div className="mcontainer">
           {selected == 0 ? <Mission/>:selected == 1 ? <Goals/>: <Achievement/> } 
        </div>
       
        </div>
    </div>

    </>
  )
}

export default About