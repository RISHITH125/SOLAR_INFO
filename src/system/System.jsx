import React, { useEffect, useState } from 'react'
import './system.css'
import { useRef } from 'react'
import {Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune,Sun} from './Heaven/hbods'
import { Link } from 'react-router-dom'


const System = () => {
  const main = useRef(null); // main is like a pointer | main.current = *main
  const [scaleFactor, setScaleFactor] = useState(1200);
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
            if (current < 100) return current;
            setTranslateFactor((c) => c + 0.03);
            setOpacity(o => o - 0.02)
            return current - 20;
          })
        } else {
          setScaleFactor((current) => {
            if (current < 100 || current > 1200) return current;
            setTranslateFactor((c) => c - 0.03);
            setOpacity(o => o + 0.02)
            return current + 20;
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
            <div className="sun-shadow" />
        </Link>
    </div>           
            <div className='absolute'>
                    <Mercury/>
                    <Venus/>
                    <Earth/>
                    <Mars/>
                    <Jupiter/>  
                    <Saturn/>
                    <Uranus/>   
                    <Neptune/>    
            </div>
        </div>
    </div>
  )
}

export default System