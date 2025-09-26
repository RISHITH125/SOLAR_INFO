import { Link ,useLocation} from 'react-router-dom'
function Jupiter({isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused,setAnimationsPaused}) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
        <div className={`jupiter-hb ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} onClick={() => {
          setAnimationsPaused(true);
          setFocusedPlanet('jupiter');
          setIsPlanetFocused(true);
        }}>
          <Link to="/jupiter">
              <div className="jupiter"></div>
          </Link>
      
        </div>
        <div className="orbit orbit-ju hover:border-gray-300 z-[40]" onClick={() => {
          setAnimationsPaused(true);
          setFocusedPlanet('jupiter');
          setIsPlanetFocused(true);
        }}></div>

      </>
      ):
      (
        <>
              <div className="jupiter-i"></div>
        </>
      )}

    </>
  );
}
export default Jupiter