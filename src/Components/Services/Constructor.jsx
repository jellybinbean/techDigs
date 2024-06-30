import React from 'react'
import "./Constructor.css"

const Constructor = ({dic,image,title}) => {
  return (
    <div className='main-constructor'>
    <div className='constructor'>
        <img src={image} alt="" />
        <div className="caption">
            <ul>
                <li>{dic[0]}</li>
                <li>{dic[1]}</li>
                <li>{dic[2]}</li>
                <li>{dic[3]}</li>
                <li>{dic[4]}</li>
            </ul>
        </div>
        <h2>{title}</h2>
    </div>
    
    
    </div>
    
  )
}

export default Constructor