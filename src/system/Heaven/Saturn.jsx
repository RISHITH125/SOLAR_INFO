import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
function Saturn() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
      <>
        <div className="saturn-hb">
          <Link to="/saturn">
              <div className="saturn">
                  <div className="rings"></div>
                  <div className="tops"></div>
              </div>
          </Link>      
      </div>  
      <div className="orbit orbit-sa"></div>
      </>
      ):
      (
        <>
              <div className="saturn-i">
              <div className="rings-i"></div>
              <div className="tops-i"></div>
              </div>
        </>
      )}

    </>
  );
}
export default Saturn