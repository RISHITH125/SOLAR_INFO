import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Mercury({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('mercury');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`mercury-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
            <span>
              <div className="mercury"></div>	
            </span>
          </div>

          <div className="orbit orbit-me hover:border-gray-300 z-[80] cursor-pointer" style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}></div>
        </>
      ) : (
        <>
          <div className="mercury-i"></div>
        </>
      )}
    </>
  );
}
export default Mercury