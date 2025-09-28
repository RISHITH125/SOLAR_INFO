import { Link ,useLocation} from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanet';


function Jupiter({ intro }) {
  const location = useLocation();
  const { handleClick, animationClass, FocusStyle } = usePlanet('jupiter');
  return (
    <>
      {location.pathname === '/' ? (
        <>
        <div className={`jupiter-hb ${animationClass} ${FocusStyle.focusClass} cursor-pointer`} style={FocusStyle.planetStyle} onClick={intro ? null : handleClick}>
          <span>
              <div className="jupiter"></div>
          </span>
        </div>
        <div className="orbit orbit-ju hover:border-white/60 z-[40] cursor-pointer" style={FocusStyle.orbitStyle} onClick={intro ? null : handleClick}>
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