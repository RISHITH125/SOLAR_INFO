import React from 'react'
import { Link } from 'react-router-dom'
function Neptune() {
  return (
    <>
      <div className="neptune-hb">
        <Link to="/neptune">
            <div className="neptune"></div>
        </Link>
    </div>
    <div className="orbit orbit-ne"></div>
    </>
  )
}

export default Neptune