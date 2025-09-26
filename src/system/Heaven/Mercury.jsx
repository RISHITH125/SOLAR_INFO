import { Link ,useLocation} from 'react-router-dom'
function Mercury( {isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused,setAnimationsPaused} ) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className={`mercury-hb ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
          setAnimationsPaused(true);
          setFocusedPlanet('mercury');
          setIsPlanetFocused(true);

          // Add zoom logic here
        }}>
          <Link to="/mercury">
              <div className="mercury"></div>	
          </Link>
        </div>

        <div className={`orbit orbit-me hover:border-gray-300 z-[80] ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
          setAnimationsPaused(true);
          setFocusedPlanet('mercury');
          setIsPlanetFocused(true);
          // Add zoom logic here
        }}></div>
      </>
      ):
      (
        <>
              <div className="mercury-i"></div>
        </>
      )}

    </>
  );
}
export default Mercury