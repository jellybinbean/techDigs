import React,{useRef} from 'react'
import stevo from "../../assets/img11.jpg"
import kareithi from "../../assets/kareithi.jfif"
import mrodi from "../../assets/mrodi.jfif"
import osoer from "../../assets/osoer.jfif"
import ziggy from "../../assets/ziggy.jfif"
import Ianoh from "../../assets/Ianoh.jfif"
import daudi from "../../assets/daudi.jfif"
import nxtImg from '../../assets/next-icon.png'
import backImg from '../../assets/back-icon.png'


import "./Team.css"
const Team = () => {
  const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx> -80){
            tx -= 21;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
    const slideback = () =>{
        if(tx < 0){
            tx += 21;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
  return (
    <div className='team'>
      <div className="team-header">
        
        <h3>Our Able Team</h3>
         
      </div>
      <div className="team-body">
        <div className="team-lead">
            <div className="card">
              <div className="img-holder">
                <img src={stevo} alt="" />

              </div>
              <div className="holder-content">
                <h1>Team Lead</h1>
                <h3>Mukhebi Stephen Mayende</h3>
                <h4>Software Engineer</h4>
                <h4>+254 708934321</h4>
                <h5>stephenmukhebi20@gmail.com <span><a href="mailto:stephenmukhebi20@gmail.com">Send Email</a></span></h5>
              </div>
            </div>
        </div>
        <div className="team-teams">
        <img src={nxtImg} onClick = {slideForward} alt="" className='next-btn'/>
        <img src={backImg} onClick = {slideback} alt="" className='back-btn'/>
        <div className="slider">
          <ul ref={slider}>
            <li>
            <div className="card">
              <div className="img-holder">
                <img src={kareithi} alt="" />

              </div>
              <div className="holder-content">
                <h1>Cyber sec Lead</h1>
                <h3>Gideon Karethi Gitonga</h3>
                <h4>Cyber Forensic</h4>
                <h4>+254 712345678</h4>
                <h5>kareithigideon@gmail.com <span><a href="mailto:kareithigideon@gmail.com">Send Email</a></span></h5>
              </div>
            </div>

            </li>
            <li>
            <div className="card">
              <div className="img-holder">
                <img src={osoer} alt="" />

              </div>
              <div className="holder-content">
                <h1>Development lead</h1>
                <h3>Hannibal Osore Bulasia</h3>
                <h4>Web Developer</h4>
                <h4>+254 712345678</h4>
                <h5>osorelasia@gmail.com <span><a href="mailto:osorelasia@gmail.com">Send Email</a></span></h5>
              </div>
            </div>

            </li>
            <li>
            <div className="card">
              <div className="img-holder">
                <img src={daudi} alt="" />

              </div>
              <div className="holder-content">
                <h1>Data Lead</h1>
                <h3>David Wesamba</h3>
                <h4>Software Engineer</h4>
                <h4>+254 769923569</h4>
                <h5>davidwesamba@gmail.com <span><a href="mailto:Davidwesamba@gmail.com">Send Email</a></span></h5>
              </div>
            </div>

            </li>
            <li>
            <div className="card">
              <div className="img-holder">
                <img src={ziggy} alt="" />

              </div>
              <div className="holder-content">
                <h1>Networking Head</h1>
                <h3>Jeff Opiyo</h3>
                <h4>Network Engineer</h4>
                <h4>+254 712345678</h4>
                <h5>ziggy@gmail.com <span><a href="mailto:ziggy@gmail.com">Send Email</a></span></h5>
              </div>
            </div>

            </li>
            <li>
            <div className="card">
              <div className="img-holder">
                <img src={Ianoh} alt="" />

              </div>
              <div className="holder-content">
                <h1>Market Director</h1>
                <h3>Ian Sharmah Ojala</h3>
                <h4>Designer</h4>
                <h4>+254 708934321</h4>
                <h5>cr7@gmail.com <span><a href="mailto:cr7@gmail.com">Send Email</a></span></h5>
              </div>
            </div>

            </li>
            <li>
            <div className="card">
              <div className="img-holder">
                <img src={mrodi} alt="" />

              </div>
              <div className="holder-content">
                <h1>Android Dev Head</h1>
                <h3>Nimrod Omondi Ouko</h3>
                <h4>Software Engineer</h4>
                <h4>+254 743822583</h4>
                <h5>ouko@gmail.com <span><a href="mailto:stephenmukhebi20@gmail.com">Send Email</a></span></h5>
              </div>
            </div>

            </li>
          </ul>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Team