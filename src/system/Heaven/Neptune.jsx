import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet'

function Neptune() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('neptune');

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className={`neptune-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={handleClick}>
          <Link to="/neptune">
              <div className="neptune"></div>
          </Link>
        </div>
      <div className= {`orbit orbit-ne hover:border-gray-300 z-[10] ${animationClass}`} style={FocusStyle.orbitStyle} onClick={handleClick}></div>
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