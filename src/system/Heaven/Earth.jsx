
import { Link, useLocation } from 'react-router-dom';

function Earth(
  
) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`earth-hb ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
            setAnimationsPaused(true);
            setFocusedPlanet('earth');
            setIsPlanetFocused(true);
            // Add zoom logic here
          }}>
            <Link to="/earth">
              <div className="earth"></div>
            </Link>
          </div>
          <div className={`orbit orbit-ea hover:border-gray-300 z-[60] ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={()=>{
              setAnimationsPaused(true);
              setFocusedPlanet('earth');
            setIsPlanetFocused(true);
          }}></div>
        </>
      ):
      (
        <>
              <div className="earth-i"></div>
        </>
      )}

    </>
  );
}

export default Earth;
