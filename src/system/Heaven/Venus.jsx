import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Venus() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
          <div className='venus-hb'>
              <Link to="/venus">
                  <div className="venus"></div>    
              </Link>
              
          </div>
          <div className="orbit orbit-ve"></div>
      </>
      ):
      (
        <>
              <div className="venus-i"></div>
        </>
      )}

    </>
  );
}

export default Venus