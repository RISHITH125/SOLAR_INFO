import { Link, useLocation } from 'react-router-dom'
function Mars({ isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused, setAnimationsPaused }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`mars-hb  ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
            setAnimationsPaused(true);
            setFocusedPlanet('mars');
            setIsPlanetFocused(true);
          }}>
            <Link to="/mars">
              <div className="mars"></div>
            </Link>
          </div>
          <div className={`orbit orbit-ma hover:border-gray-300 z-[50] ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
            setAnimationsPaused(true);
            setFocusedPlanet('mars');
            setIsPlanetFocused(true);
          }}></div>
        </>
      ) :
        (
          <>
            <div className="mars-i"></div>
          </>
        )}

    </>
  );
}
export default Mars