import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet'

function Neptune({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('neptune');

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className={`neptune-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
          <span>
              <div className="neptune"></div>
          </span>
        </div>
      <div className= {`orbit orbit-ne hover:border-white/60 z-[10] cursor-pointer ${animationClass}`} style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}></div>
      </>
      ):
      (
        <>
              <div className="neptune-i"></div>
        </>
      )}

    </>
  );
}
export default Neptune