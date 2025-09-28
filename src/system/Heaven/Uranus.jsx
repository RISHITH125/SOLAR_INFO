import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Uranus({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('uranus');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`uranus-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
            <span>
              <div className="uranus">
                <div className="ringu"></div>
                <div className="topu"></div>
              </div>
            </span>
          </div>
          <div className="orbit orbit-ur hover:border-white/60 z-[20] cursor-pointer" style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}></div>
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