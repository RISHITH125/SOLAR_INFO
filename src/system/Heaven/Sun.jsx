import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Sun() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className="sun flex absolute items-center">
            <h1 className={`relative font-thin text-white left-[3vw] info`} style={opacityClass}>SOLAR</h1>
            <h1 className={`relative text-white left-[4vw] info`} style={opacityClass}>INFO</h1>
            <Link to="/sun">
                <div className="sun-shadow" />
            </Link>
        </div>
      </>
      ):
      (
        <>
              <div className="sun-i"></div>
        </>
      )}

    </>
  );
}
export default Sun