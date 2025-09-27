import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Saturn() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('saturn');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`saturn-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={handleClick}>
            <Link to="/saturn">
              <div className="saturn">
                <div className="rings"></div>
                <div className="tops"></div>
              </div>
            </Link>      
          </div>  
          <div className="orbit orbit-sa hover:border-gray-300 z-[30]" style={FocusStyle.orbitStyle} onClick={handleClick}></div>
        </>
      ) : (
        <>
          <div className="saturn-i">
            <div className="rings-i"></div>
            <div className="tops-i"></div>
          </div>
        </>
      )}
    </>
  );
}
export default Saturn