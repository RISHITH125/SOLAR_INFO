import React, { useEffect, useState } from 'react'
import './system.css'
import { useRef } from 'react'

const System = () => {
  const main = useRef(null); // main is like a pointer | main.current = *main
  const [scaleFactor, setScaleFactor] = useState(1100);
  const [translateFactor, setTranslateFactor] = useState(-3);
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
            if (current < 110) return current;
            setTranslateFactor((c) => c + 0.009);
            setOpacity(o => o - 0.01)
            return current - 5;
          })
        } else {
          setScaleFactor((current) => {
            if (current < 110 || current > 1100) return current;
            setTranslateFactor((c) => c - 0.009);
            setOpacity(o => o + 0.01)
            return current + 5;
          })
          
        }
    })
  }, [main])

  return ( 
    <>
        <div ref={main} className={`main`} style={mainStyle}>
            <div className="sun flex items-center">
              <h1 className={`relative font-thin text-orange-400 left-[3vw]`} style={opacityClass}>SOLAR</h1>
              <h1 className={`relative text-white left-[4vw] info`} style={opacityClass}>INFO</h1>
            </div>
            <div className="mercury"></div>
            <div className="venus"></div>    
            <div className="earth"></div> 
            <div className="mars"></div> 
            <div className="jupyter"></div>
            <div className="saturn">
              <div className="rings"></div>
              <div className="tops"></div>
            </div>
            <div className="uranus">
              <div className="ringu"></div>
              <div className="topu"></div>
            </div>
            <div className="neptune"></div>
        </div>
    </>
  )
}

export default System