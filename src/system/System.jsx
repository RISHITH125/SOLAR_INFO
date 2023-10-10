import React from 'react'
import './system.css'

const System = () => {
  return (
    <>
        <div className="main">
            <div className="sun"></div>
            <div className="mercury"></div>
            <div className="venus"></div>    
            <div className="earth"></div> 
            <div className="mars"></div> 
            <div className="jupyter"></div>
            <div className="saturn">
              <div className="ring"></div>
              <div className="top"></div>
            </div>
            <div className="uranus"></div>
            <div className="neptune"></div>
        </div>
    </>
  )
}

export default System