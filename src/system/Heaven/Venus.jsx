import { Link, useLocation } from 'react-router-dom'
function Venus({ isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused, setAnimationsPaused }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className={`venus-hb ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
            setAnimationsPaused(true);
            setFocusedPlanet('venus');
            setIsPlanetFocused(true);
            // Add zoom logic here
          }}>
            <Link to="/venus">
              <div className="venus"></div>
            </Link>

          </div>
          <div className={`orbit orbit-ve hover:border-gray-300 z-[70] ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
            setAnimationsPaused(true);
            setFocusedPlanet('venus');
            setIsPlanetFocused(true);
          }}></div>
        </>
      ) :
        (
          <>
            <div className="venus-i"></div>
          </>
        )}

    </>
  );
}

export default Venus