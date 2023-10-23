import React from 'react'
import { Link } from 'react-router-dom'
function Uranus() {
  return (
    <div className="uranus-hb">
        <Link to="/uranus">
            <div className="uranus">
                <div className="ringu"></div>
                <div className="topu"></div>
            </div>
        </Link>
    </div>
  )
}

export default Uranus