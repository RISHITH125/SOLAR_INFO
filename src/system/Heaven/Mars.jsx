import React from 'react'
import { Link } from 'react-router-dom'
function Mars() {
  return (
    <>
      <div className="mars-hb">
        <Link to="/mars">
          <div className="mars"></div> 
        </Link>
    </div>
    <div className="orbit orbit-ma"></div>
  </>
  )
}

export default Mars