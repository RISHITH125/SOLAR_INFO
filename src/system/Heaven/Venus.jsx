import { Link, useLocation } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';

function Venus({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('venus');

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`venus-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
            <span>
              <div className="venus"></div>
            </span>
          </div>
          <div className="orbit orbit-ve hover:border-white z-[70] cursor-pointer" style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}></div>
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