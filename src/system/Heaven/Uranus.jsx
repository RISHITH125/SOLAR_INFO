import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Uranus() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
          <div className="uranus-hb">
            <Link to="/uranus">
                <div className="uranus">
                    <div className="ringu"></div>
                    <div className="topu"></div>
                </div>
            </Link>

        </div>
        <div className="orbit orbit-ur"></div>
      </>
      ):
      (
        <>
                <div className="uranus-i">
                    <div className="ringu-i"></div>
                    <div className="topu-i"></div>
                </div>
        </>
      )}

    </>
  );
}
export default Uranus