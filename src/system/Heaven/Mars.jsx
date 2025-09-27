import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Mars() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('mars');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`mars-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={handleClick}>
            <Link to="/mars">
              <div className="mars"></div>
            </Link>
          </div>
          <div className="orbit orbit-ma hover:border-gray-300 z-[50]" style={FocusStyle.orbitStyle} onClick={handleClick}></div>
        </>
      ) : (
        <>
          <div className="mars-i"></div>
        </>
      )}
    </>
  );
}
export default Mars