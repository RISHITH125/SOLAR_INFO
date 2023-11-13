import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Jupiter() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
        <div className="jupiter-hb">
          <Link to="/jupiter">
              <div className="jupiter"></div>
          </Link>
      
        </div>
        <div className="orbit orbit-ju"></div>
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