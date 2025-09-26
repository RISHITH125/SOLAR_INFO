import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Saturn({isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused,setAnimationsPaused}) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className={`saturn-hb ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
          setAnimationsPaused(true);
          setFocusedPlanet('saturn');
          setIsPlanetFocused(true);
        }}>
          <Link to="/saturn">
              <div className="saturn">
                  <div className="rings"></div>
                  <div className="tops"></div>
              </div>
          </Link>      
      </div>  
      <div className={`orbit orbit-sa hover:border-gray-300 z-[30] ${animationsPaused ? 'animation-paused' : 'animation-resumed'}` } onClick={() => {
        setAnimationsPaused(true);
        setFocusedPlanet('saturn');
        setIsPlanetFocused(true);
      }}></div>
      </>
      ):
      (
        <>
              <div className="saturn-i">
              <div className="rings-i"></div>
              <div className="tops-i"></div>
              </div>
        </>
      )}

    </>
  );
}
export default Saturn