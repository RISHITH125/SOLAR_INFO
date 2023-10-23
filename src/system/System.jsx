import React, { useEffect, useState } from 'react'
import './system.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


const System = () => {
  const main = useRef(null); // main is like a pointer | main.current = *main
  const [scaleFactor, setScaleFactor] = useState(1000);
  const [translateFactor, setTranslateFactor] = useState(-2);
  const [opacity, setOpacity] = useState(1);

  let mainStyle = {
    transform: `scale(${scaleFactor}%) translateX(${translateFactor}%)`
  }

  let opacityClass = {
    opacity: `${opacity}`
  }

  useEffect(()=>{
    main.current.addEventListener('wheel', (e)=>{
        if (e.deltaY > 0) {
          setScaleFactor((current) => {
            console.log(current)
            if (current < 100) return current;
            setTranslateFactor((c) => c + 0.01);
            setOpacity(o => o - 0.01)
            return current - 10;
          })
        } else {
          setScaleFactor((current) => {
            if (current < 100 || current > 1100) return current;
            setTranslateFactor((c) => c - 0.01);
            setOpacity(o => o + 0.01)
            return current + 10;
          })
          
        }
    })
  }, [main])

  return ( 
    <div className=''>
        <div ref={main} className={`main flex justify-center items-center`} style={mainStyle}>
            <div className="sun flex absolute items-center">
              <h1 className={`relative font-thin text-white left-[3vw] info`} style={opacityClass}>SOLAR</h1>
              <h1 className={`relative text-white left-[4vw] info`} style={opacityClass}>INFO</h1>
              <Link to="/sun">
              <div className="sun-shadow"></div>
              </Link>
            </div>
            <div className='absolute'>
                    
                    <div className='mercury-hb'>
                      <Link to="/mercury">
                        <div className="mercury"></div>	
                      </Link>
                    </div>

                    <div className='venus-hb'>
                      <Link to="/venus">
                        <div className="venus"></div>    
                      </Link>
                    </div>
                      
                    <div className="earth-hb">
                      <Link to="/earth">
                        <div className="earth"></div> 
                      </Link>
                    </div>


                    <div className="mars-hb">
                      <Link to="/mars">
                        <div className="mars"></div> 
                      </Link>
                    </div>
                         

                    <div className="jupyter-hb">
                      <Link to="/jupyter">
                        <div className="jupyter"></div>
                      </Link>
                    </div>  

                    <div className="saturn-hb">
                      <Link to="/saturn">
                        <div className="saturn">
                        <div className="rings"></div>
                        <div className="tops"></div>
                        </div>
                      </Link>
                    </div>  
                       

                    <div className="uranus-hb">
                      <Link to="/uranus">
                        <div className="uranus">
                        <div className="ringu"></div>
                        <div className="topu"></div>
                        </div>
                      </Link>
                    </div>
 

                    <div className="neptune-hb">
                      <Link to="/neptune">
                        <div className="neptune"></div>
                      </Link>
                    </div>
                      
            </div>
            
        </div>
    </div>
  )
}

export default System