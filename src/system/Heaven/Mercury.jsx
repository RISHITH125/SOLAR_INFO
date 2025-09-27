import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Mercury() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('mercury');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`mercury-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={handleClick}>
            <Link to="/mercury">
              <div className="mercury"></div>	
            </Link>
          </div>

          <div className="orbit orbit-me hover:border-gray-300 z-[80]" style={FocusStyle.orbitStyle} onClick={handleClick}></div>
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