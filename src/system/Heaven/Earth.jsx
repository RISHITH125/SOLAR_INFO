import React from 'react'
import { Link } from 'react-router-dom'
function Earth() {
  return (
    <div className="earth-hb">
        <Link to="/earth">
            <div className="earth"></div> 
        </Link>
    </div>
  )
}

export default Earth