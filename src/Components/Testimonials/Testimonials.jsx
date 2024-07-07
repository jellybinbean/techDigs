import React, { useRef } from 'react'
import './Testimonials.css'
import nxtImg from '../../assets/next-icon.png'
import backImg from '../../assets/back-icon.png'
import stevo from '../../assets/stevo.jpg'
import manu from '../../assets/manu.jpg'
import cliff from '../../assets/cliff.jpg'

const Testimony = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx> -50){
            tx -= 30;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
    const slideback = () =>{
        if(tx < 0){
            tx += 30;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
  return (
    <div className="testimonials">
        <img src={nxtImg} onClick = {slideForward} alt="" className='next-btn'/>
        <img src={backImg} onClick = {slideback} alt="" className='back-btn'/>
        <div className="slider">
            <ul ref= {slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={manu} alt="" />
                            <div>
                                <h3>Emmanuel Baraka</h3>
                                <span>Bungoma, Kenya</span>
                            </div>
                        </div>
                        <p>
                        DIGS Technology Services provided exceptional service for our CCTV and ACLS installations. 
                        Their team was professional, efficient, and communicative, ensuring minimal disruption. 
                        The high-quality equipment and thorough training they provided 
                        enhanced our security significantly. Highly recommended for reliable and expert security solutions.

                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={cliff} alt="" />
                            <div>
                                <h3>Cliffton Ngalu</h3>
                                <span>Rongo, Kenya</span>
                            </div>
                        </div>
                        <p>
                        DIGS Technology Services provided exceptional service for our CCTV and ACLS installations. 
                        Their team was professional, efficient, and communicative, ensuring minimal disruption. 
                        The high-quality equipment and thorough training they provided 
                        enhanced our security significantly. Highly recommended for reliable and expert security solutions. 

                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={stevo} alt="" />
                            <div>
                                <h3>Stephen Mukhebi</h3>
                                <span>Nairobi, Kenya</span>
                            </div>
                        </div>
                        <p>
                        DIGS Technology Services provided exceptional service for our CCTV and ACLS installations. 
                        Their team was professional, efficient, and communicative, ensuring minimal disruption. 
                        The high-quality equipment and thorough training they provided 
                        enhanced our security significantly. Highly recommended for reliable and expert security solutions.

                        </p>
                    </div>
                </li>
            </ul>
        </div>
    
    
    </div>
  )
}

export default Testimony