import React from 'react'
import "./Services.css"
import management from "../../assets/services.jpg"
import air from "../../assets/AIicon.jpg"
// src\assets\AIicon.jpg
import anddev from "../../assets/anddev.jpg"
import back from "../../assets/back2.jpg"
import cybersec from "../../assets/cybersec.jpg"
import instal from "../../assets/installations.jpg"
import Constructor from './Constructor'
// src\assets\installations.jpg

const Services = () => {
  const Developement = ["Web Development & design","App Developement","Software dev","Database", "Final year projects"]
  const Installations = ["CCTV installations","Acls Installations","Software Installations","Final year projects"]
  const Networking = ["Networking", "Troubleshooting networks", "Network installations"]
  const manage = ["Web Management & maintenance","App management & maintenance","database Management & maintenance"]
  const ai = ["building models","data analysis and statistics","Final year projects"]
  const security = ["data security ", "firewall configuration and installations"]
  return (
    <div className='services'>
      <Constructor title= "Development" dic={Developement} image= {anddev}/>
      <Constructor title= "Installations" dic={Installations} image= {instal}/>
      <Constructor title= "Networking" dic={Networking} image= {back}/>
      <Constructor title= "Management & Maintenance" dic={manage} image= {management}/>
      <Constructor title= "Cyber security" dic={security} image= {cybersec}/>
      <Constructor title= "Artifitial intelligence" dic={ai} image= {air}/>

      
    </div>
  )
}

export default Services