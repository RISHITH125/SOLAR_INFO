
import { Link, useLocation } from 'react-router-dom';
import { usePlanet } from '../hooks/usePlanet';

function Earth({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('earth');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`earth-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
            <span>
              <div className="earth"></div>
            </span>
          </div>

          <div className={`orbit orbit-ea hover:border-white/60 z-[60] cursor-pointer`} style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}></div>
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
