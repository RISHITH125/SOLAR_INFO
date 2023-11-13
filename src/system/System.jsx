import React, { useEffect, useState } from 'react'
import './system.css'
import { useRef } from 'react'
import {Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune} from './Heaven/hbods'
import { Link } from 'react-router-dom'
import Ui from './UserInterface'

const System = ({ scaleFactor, setScaleFactor, translateFactor, setTranslateFactor, opacity, setOpacity, getInitialScaleFactor}) => {
  const main = useRef(null);
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
            if (current < 100) return current;
            setTranslateFactor((c) => c + 0.03);
            setOpacity(o => o - 0.02)
            return current - 20;
          })
        } else {
          setScaleFactor((current) => {
            if (current < 100 || current >= getInitialScaleFactor()) return current;
            setTranslateFactor((c) => c - 0.03);
            setOpacity(o => o + 0.02)
            return current + 20;
          })
          
        }
    })
  }, [main])

  const viewportWidth = window.innerWidth;
  const leftvalue=viewportWidth >= 800?'3vw':'0.2vw'
  const leftvaluesep=viewportWidth >= 800? '6.5vw':'6.5vw'
  // const leftvalue='3vw'


  return ( 
    <div className=''>
        <div ref={main} className={`main flex justify-center items-center`} style={mainStyle}>
            <div className="sun flex absolute items-center">
                <h1 className={`absolute font-thin text-white left-[${leftvalue}] info`} style={opacityClass}>SOLAR</h1>
                <h1 className={`absolute text-white left-[${leftvaluesep}] info`} style={opacityClass}>INFO</h1>
                {/* <Sun/> */}
                {/* <Link to="/sun">
                  <div className="sun-shadow" />
                </Link>  */}

            </div> 

                   
            <div className='absolute'>

                <Link to="/sun">
                  <div className="sun-shadow" />
                </Link> 

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
        {scaleFactor <=100 &&  <div className='UI'><Ui/></div>}
      
    </div>
  )
}

export default System