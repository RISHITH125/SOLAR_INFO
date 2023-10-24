import React from 'react'
import { Link } from 'react-router-dom'
function Venus() {
  return (
    <>
      <div className='venus-hb'>
        <Link to="/venus">
            <div className="venus"></div>    
        </Link>
        
    </div>
    <div className="orbit orbit-ve"></div>
    </>
  )
}

export default Venus