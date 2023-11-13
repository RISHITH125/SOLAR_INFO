import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Neptune() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className="neptune-hb">
          <Link to="/neptune">
              <div className="neptune"></div>
          </Link>
        </div>
      <div className="orbit orbit-ne"></div>
      </>
      ):
      (
        <>
              <div className="neptune-i"></div>
        </>
      )}

    </>
  );
}
export default Neptune