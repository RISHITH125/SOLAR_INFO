import './system.css'
import { useEffect, useRef, useState } from 'react'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from './Heaven/hbods'
import { Link } from 'react-router-dom'
import Ui from './UserInterface'
import { IoPlayForwardCircleOutline } from "react-icons/io5";

import { useSolarSystem } from './contexts/SolarSystemContext';

const System = ({ intro, setIntro, scaleFactor, setScaleFactor, translateFactor, setTranslateFactor, opacity, setOpacity, getInitialScaleFactor }) => {
  const animatingRef = useRef(false);
  const main = useRef(null);
  let mainStyle

  const { focusedPlanet, getMetrics, isPlanetFocused } = useSolarSystem();
  
  // ⭐ NEW STATE for the two-step approach
  const [currentTransform, setCurrentTransform] = useState(`scale(${scaleFactor}%) translateX(${translateFactor}%)`);
  const [transformOrigin, setTransformOrigin] = useState('center center');
  
  // Reset to initial state when un-focused
  useEffect(() => {
    if (!isPlanetFocused) {
      setCurrentTransform(`scale(${scaleFactor}%) translateX(${translateFactor}%)`);
      setTransformOrigin('center center');
    }
  }, [isPlanetFocused, scaleFactor, translateFactor]);

  // Two-phase planet focusing animation
  useEffect(() => {
    if (isPlanetFocused && focusedPlanet) {
      const metrics = getMetrics(focusedPlanet);
      if (!metrics) return;

      const scale = metrics.scale;
      const targetTx = metrics.SystemTranslation.x;
      const targetTy = metrics.SystemTranslation.y;

      // Step 1: Translate to center the planet
      const step1Duration = 500; // ms
      if (main.current) {
        main.current.style.transition = `transform ${step1Duration}ms ease-out`;
      }
      setCurrentTransform(`translateX(${targetTx}px) translateY(${targetTy}px)`);

      // Step 2: Add scale after translation completes
      const timeoutId = setTimeout(() => {
        setTransformOrigin(`translateX(${targetTx * scale}px) translateY(${targetTy * scale}px)`); // Scale from center
        
        if (main.current) {
          const step2Duration = 400; // ms
          main.current.style.transition = `transform ${step2Duration}ms ease-in-out`;
        }

        setCurrentTransform(`translateX(${ targetTx * scale}px) translateY(${ targetTy * scale}px) scale(${scale})`);
      }, step1Duration);

      return () => clearTimeout(timeoutId); // Cleanup
    }
  }, [isPlanetFocused, focusedPlanet, getMetrics]);

  // 🧪 ADD DEBUG LOGGING
  // console.log('🔍 System render:', { 
  //   isPlanetFocused, 
  //   focusedPlanet,
  //   intro 
  // });

  // Apply the dynamic styles
  if (isPlanetFocused && focusedPlanet) {
    mainStyle = {
      transform: currentTransform,
      transformOrigin: transformOrigin,
      // Transition is handled directly in useEffect
    };
  } else {
    mainStyle = {
      transform: `scale(${scaleFactor}%) translateX(${translateFactor}%)`,
      transformOrigin: 'center center'
    };
  }

  let opacityClass = {
    opacity: `${opacity}`
  }


  const handleIntroZoomOut = () => {
    const targetScale = 80;
    const duration = 900;
    const startScale = scaleFactor;
    const startTranslate = translateFactor;
    const startOpacity = opacity;
    const startTime = performance.now();
    setIntro(false);
    if (animatingRef.current) return;
    animatingRef.current = true;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // clamp 0 → 1

      // Smooth easing
      const easeOut = 1 - Math.pow(1 - progress, 7);

      setScaleFactor(startScale - (startScale - targetScale) * easeOut);
      setTranslateFactor(startTranslate + (translateFactor - startTranslate + 1) * easeOut);
      setOpacity(startOpacity - (startOpacity - 0) * easeOut); // fade out smoothly

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        animatingRef.current = false;
      }
    };

    requestAnimationFrame(animate);
  };


  const viewportWidth = window.innerWidth;
  const leftvalue = viewportWidth >= 800 ? '3vw' : '0.2vw'
  const leftvaluesep = viewportWidth >= 800 ? '7vw' : '6.5vw'
  // const leftvalue='3vw'


  return (
    <div className=''>
      <div ref={main} className={`main flex justify-center items-center`} style={mainStyle}>
        <div className="sun flex absolute items-center">
          <h1 className={`absolute font-thin text-white left-[${leftvalue}] info`} style={opacityClass}>SOLAR</h1>
          <h1 className={`absolute text-white left-[${leftvaluesep}] info`} style={opacityClass}>INFO</h1>
        </div>


        <div className='absolute'>
          <Link to="/sun">
            <div className="sun-shadow" />
          </Link>
          <Mercury />
          <Venus />
          <Earth />
          <Mars />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
        </div>

      </div>
      {scaleFactor <= 100 && <div className='UI'><Ui /></div>}
      {intro && <div className="absolute left-[calc(50%-5%)] bottom-10 text-white flex items-center gap-2 group" onClick={handleIntroZoomOut}>
        <IoPlayForwardCircleOutline
          className="text-white scale-[400%] m-4 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(220,176,122,1)] group-hover:scale-[450%] group-hover:mr-6"
        />
        <p className="text-2xl select-none font-bold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(220,176,122,1)] group-hover:scale-[112.5%] ">
          Click here
        </p>
      </div>}



    </div>
  )
}

export default System