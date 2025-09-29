import './system.css'
import { useEffect, useRef, useState } from 'react'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from './Heaven/hbods'
import { Link, useNavigate } from 'react-router-dom'
import Ui from './UserInterface'
import { IoPlayForwardCircleOutline } from "react-icons/io5";

import { usePlanet } from './hooks/usePlanet'
import { useSolarSystem } from './contexts/SolarSystemContext';

const System = ({ intro, setIntro, scaleFactor, setScaleFactor, translateFactor, setTranslateFactor, opacity, setOpacity }) => {
  const { handleClick } = usePlanet("sun");
  const animatingRef = useRef(false);
  const main = useRef(null);
  const navigate = useNavigate();
  let mainStyle

  const { focusedPlanet, getMetrics, isPlanetFocused } = useSolarSystem();
  
  const [currentTransform, setCurrentTransform] = useState(`scale(${scaleFactor}%) translateX(${translateFactor}%)`);
  const [transformOrigin, setTransformOrigin] = useState('center center');
  
  useEffect(() => {
    if (!isPlanetFocused) {
      setCurrentTransform(`scale(${scaleFactor}%) translateX(${translateFactor}%)`);
      setTransformOrigin('center center');
    }
  }, [isPlanetFocused, scaleFactor, translateFactor]);


  useEffect(() => {
    if (isPlanetFocused && focusedPlanet) {
      const metrics = getMetrics(focusedPlanet);
      if (!metrics) return;

      const scale = metrics.scale;
      const targetTx = metrics.SystemTranslation.x;
      const targetTy = metrics.SystemTranslation.y;
      const errorX = metrics.SystemTranslation.errX;
      const errorY = metrics.SystemTranslation.errY;

    
      const step1Duration = 500; 
      if (main.current) {
        main.current.style.transition = `transform ${step1Duration}ms ease-out`;
      }
      setCurrentTransform(`translateX(${targetTx - errorX}px) translateY(${targetTy - errorY}px)`);

      const timeoutId = setTimeout(() => {
        const secondMetrics = getMetrics(focusedPlanet);
        if (!secondMetrics) return;

        const finalDeltaX = secondMetrics.SystemTranslation.x;
        const finalDeltaY = secondMetrics.SystemTranslation.y;
        const errorX = secondMetrics.SystemTranslation.errX;
        const errorY = secondMetrics.SystemTranslation.errY;

        // Use the actual planet position as transform origin for scaling
        setTransformOrigin(`translateX(${(finalDeltaX - errorX) * scale}px) translateY(${(finalDeltaY - errorY) * scale}px)`);
        
        if (main.current) {
          const step2Duration = 400; 
          main.current.style.transition = `transform ${step2Duration}ms ease-in-out`;
        }

        // Apply scaling with the corrected origin
        setCurrentTransform(`translateX(${(finalDeltaX - errorX) * scale}px) translateY(${(finalDeltaY - errorY) * scale}px) scale(${scale})`);

        // Navigate to planet route after scaling animation completes
        setTimeout(() => {
          navigate(`/${focusedPlanet}`);
        }, 400); // Wait for step2Duration to complete
      }, step1Duration);

      return () => clearTimeout(timeoutId); // Cleanup
    }
  }, [isPlanetFocused, focusedPlanet, getMetrics]);

  if (isPlanetFocused && focusedPlanet) {
    mainStyle = {
      transform: currentTransform,
      transformOrigin: transformOrigin,
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


  // Responsive viewport calculations
  const [viewportDimensions, setViewportDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive left value calculation
  const getLeftValue = () => {
    const { width, height } = viewportDimensions;
    
    // If height > width (portrait mode), use mobile values
    if (height > width) {
      return '3vw';
    }
    
    // Responsive breakpoints for landscape/desktop
    if (width >= 1200) return '6.5vw';      // Large desktop
    if (width >= 800) return '5.5vw';     // Desktop/tablet landscape
    if (width >= 600) return '4vw';       // Small tablet
    return '-1.5vw';                      // Mobile
  };

  const leftvalue = getLeftValue();



  return (
    <div className=''>
      <div ref={main} className={`main flex justify-center items-center`} style={mainStyle}>
        <div className="sun flex absolute items-center">
          <h1 className={`absolute font-Audiowide text-xs text-white left-[${leftvalue}] info`} style={opacityClass}>SOLAR INFO</h1>
          {/* <h1 className={`absolute font-Audiowide text-xs text-white left-[${leftvaluesep}] info`} style={opacityClass}></h1> */}
        </div>


        <div className='absolute'>
          <span className='sun-hb' onClick={intro ? null : handleClick}>
            <div className="sun-shadow" />
          </span>
          <Mercury intro={intro} />
          <Venus intro={intro} />
          <Earth intro={intro} />
          <Mars intro={intro} />
          <Jupiter intro={intro} />
          <Saturn intro={intro} />
          <Uranus intro={intro} />
          <Neptune intro={intro} />
        </div>

      </div>
      {scaleFactor <= 100 && <div className='UI'><Ui /></div>}
      {intro && <div className="absolute left-[calc(50%-5%)] bottom-10 text-white flex items-center gap-2 group cursor-pointer" onClick={handleIntroZoomOut}>
        <IoPlayForwardCircleOutline
          className="text-white scale-[400%] m-4 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(220,176,122,1)] group-hover:scale-[450%] group-hover:mr-6"
        />
        <p className="text-3xl select-none font-Rajdhani font-bold transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(220,176,122,1)] group-hover:scale-[112.5%] ">
          Click here
        </p>
      </div>}



    </div>
  )
}

export default System