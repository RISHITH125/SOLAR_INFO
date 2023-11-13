import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Mars() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className="mars-hb">
            <Link to="/mars">
              <div className="mars"></div> 
            </Link>
        </div>
        <div className="orbit orbit-ma"></div>
      </>
      ):
      (
        <>
              <div className="mars-i"></div>
        </>
      )}

    </>
  );
}
export default Mars