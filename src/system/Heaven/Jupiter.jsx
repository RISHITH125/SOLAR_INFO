import { Link ,useLocation} from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';


function Jupiter() {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('jupiter');
  return (
    <>
      {location.pathname === '/' ? (
        <>
        <div className={`jupiter-hb ${animationClass} ${FocusStyle.focusClass}`} style={FocusStyle.planetStyle} onClick={() => {handleClick();}}>
          <Link to="/jupiter">
              <div className="jupiter"></div>
          </Link>
      
        </div>
        <div className="orbit orbit-ju hover:border-gray-300 z-[40]" style={FocusStyle.orbitStyle} onClick={() => {handleClick();}}>
        </div>

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