import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Uranus( {isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused,setAnimationsPaused} ) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
          <div className={`uranus-hb ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
            setAnimationsPaused(true);
            setFocusedPlanet('uranus');
            setIsPlanetFocused(true);
          }}>
            <Link to="/uranus">
                <div className="uranus">
                    <div className="ringu"></div>
                    <div className="topu"></div>
                </div>
            </Link>

        </div>
        <div className={`orbit orbit-ur hover:border-gray-300 z-[20] ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
          setAnimationsPaused(true);
          setFocusedPlanet('uranus');
          setIsPlanetFocused(true);
        }}></div>
      </>
      ):
      (
        <>
              <div className='uranushb-i'>
                <div className="uranus-i">
                    <div className="ringu-i"></div>
                    <div className="topu-i"></div>
                </div>
              </div>
                
        </>
      )}

    </>
  );
}
export default Uranus