import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Neptune({isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused,setAnimationsPaused}) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className={`neptune-hb ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
          setAnimationsPaused(true);
          setFocusedPlanet('neptune');
          setIsPlanetFocused(true);
        }}>
          <Link to="/neptune">
              <div className="neptune"></div>
          </Link>
        </div>
      <div className= {`orbit orbit-ne hover:border-gray-300 z-[10] ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
        setAnimationsPaused(true);
        setFocusedPlanet('neptune');
        setIsPlanetFocused(true);
      }}></div>
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