import React from 'react'
import { Link } from 'react-router-dom'
function Jupiter() {
  return (
    <>
      <div className="jupiter-hb">
        <Link to="/jupiter">
            <div className="jupiter"></div>
        </Link>
    
      </div>
      <div className="orbit orbit-ju"></div>
    </>
  )
}

export default Jupiter