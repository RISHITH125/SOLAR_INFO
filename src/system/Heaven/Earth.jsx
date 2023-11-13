import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Earth() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className="earth-hb">
            <Link to="/earth">
              <div className="earth"></div>
            </Link>
          </div>
          <div className="orbit orbit-ea"></div>
        </>
      ):
      (
        <>
              <div className="earth-i"></div>
        </>
      )}

    </>
  );
}

export default Earth;
