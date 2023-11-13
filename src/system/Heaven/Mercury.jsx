import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Mercury() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className='mercury-hb'>
          <Link to="/mercury">
              <div className="mercury"></div>	
          </Link>
        </div>
        <div className="orbit orbit-me"></div>
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