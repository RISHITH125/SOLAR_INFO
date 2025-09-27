import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Uranus() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('uranus');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`uranus-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={handleClick}>
            <Link to="/uranus">
              <div className="uranus">
                <div className="ringu"></div>
                <div className="topu"></div>
              </div>
            </Link>
          </div>
          <div className="orbit orbit-ur hover:border-gray-300 z-[20]" style={FocusStyle.orbitStyle} onClick={handleClick}></div>
        </>
      ) : (
        <>
          <div className='uranushb-i'>
            <div className="uranus-i">
              <div className="ringu-i"></div>
              <div className="topu-i"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Uranus