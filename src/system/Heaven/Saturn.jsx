import React from 'react'
import { Link } from 'react-router-dom'
function Saturn() {
  return (
    <>
       <div className="saturn-hb">
        <Link to="/saturn">
            <div className="saturn">
                <div className="rings"></div>
                <div className="tops"></div>
            </div>
        </Link>
        
    </div>  
    <div className="orbit orbit-sa"></div>
    </>
  )
}

export default Saturn