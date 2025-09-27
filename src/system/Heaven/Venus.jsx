import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Venus() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('venus');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`venus-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={handleClick}>
            <Link to="/venus">
              <div className="venus"></div>
            </Link>
          </div>
          <div className="orbit orbit-ve hover:border-gray-300 z-[70]" style={FocusStyle.orbitStyle} onClick={handleClick}></div>
        </>
      ) : (
        <>
          <div className="venus-i"></div>
        </>
      )}
    </>
  );
}

export default Venus