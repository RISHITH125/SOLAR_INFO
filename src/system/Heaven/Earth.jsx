
import { Link, useLocation } from 'react-router-dom';
import { usePlanet } from '../hooks/usePlanet';
import { useEffect } from 'react';

function Earth() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('earth');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`earth-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={handleClick}>
            <Link to="/earth">
              <div className="earth"></div>
            </Link>
          </div>

          <div className={`orbit orbit-ea hover:border-gray-300 z-[60] `} style={FocusStyle.orbitStyle} onClick={handleClick}></div>
        </>
      ) : (
        <>
          <div className="earth-i"></div>
        </>
      )}
    </>
  );
}

export default Earth;
