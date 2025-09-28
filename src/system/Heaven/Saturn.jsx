import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Saturn({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('saturn');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`saturn-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
            <span>
              <div className="saturn">
                <div className="rings"></div>
                <div className="tops"></div>
              </div>
            </span>      
          </div>  
          <div className="orbit orbit-sa hover:border-white/60 z-[30] cursor-pointer" style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}></div>
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