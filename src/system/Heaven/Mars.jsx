import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Mars({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('mars');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`mars-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
            <span>
              <div className="mars"></div>
            </span>
          </div>
          <div className="orbit orbit-ma hover:border-white/60 z-[50] cursor-pointer" style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}></div>
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