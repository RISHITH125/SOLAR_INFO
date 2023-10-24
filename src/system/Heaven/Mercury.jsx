import React from 'react'
import { Link } from 'react-router-dom'
function Mercury() {
  return (
    <>
      <div className='mercury-hb'>
        <Link to="/mercury">
            <div className="mercury"></div>	
        </Link>
      </div>
      <div className="orbit orbit-me"></div>
    </>
 
  )
}

export default Mercury