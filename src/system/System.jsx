import './system.css'
import { useEffect, useRef } from 'react'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from './Heaven/hbods'
import {PlanetComponent} from './Heaven/PlanetClass'
import { Link } from 'react-router-dom'
import Ui from './UserInterface'
import { IoPlayForwardCircleOutline } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
const System = ({ intro, setIntro, scaleFactor, setScaleFactor, translateFactor, setTranslateFactor, opacity, setOpacity, getInitialScaleFactor, isPlanetFocused, focusedPlanet, animationsPaused, setAnimationsPaused, setIsPlanetFocused, setFocusedPlanet }) => {
  const main = useRef(null);
  let mainStyle = {
    transform: `scale(${scaleFactor}%) translateX(${translateFactor}%)`
  }
  let opacityClass = {
    opacity: `${opacity}`
  }

  const animatingRef = useRef(false);

 const handleIntroZoomOut = () => {
  const targetScale = 80; 
  const duration = 900;   
  const startScale = scaleFactor; 
  const startTranslate = translateFactor;
  const startOpacity = opacity;
  const startTime = performance.now();
  setIntro(false);
  if(animatingRef.current) return; 
  animatingRef.current = true;

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // clamp 0 → 1

    // Smooth easing
    const easeOut = 1 - Math.pow(1 - progress, 7);

    setScaleFactor(startScale - (startScale - targetScale) * easeOut);
    setTranslateFactor(startTranslate + (translateFactor - startTranslate + 0.03) * easeOut);
    setOpacity(startOpacity - (startOpacity - 0) * easeOut); // fade out smoothly

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      animatingRef.current = false;
    }
  };

  requestAnimationFrame(animate);
};




  // useEffect(() => {
  //   main.current.addEventListener('wheel', (e) => {
  //     if (e.deltaY > 0) {
  //       setScaleFactor((current) => {
  //         if (current < 100) return current;
  //         setTranslateFactor((c) => c + 0.03);
  //         setOpacity(o => o - 0.02)
  //         return current - 20;
  //       })
  //     } else {
  //       setScaleFactor((current) => {
  //         if (current < 100 || current >= getInitialScaleFactor()) return current;
  //         setTranslateFactor((c) => c - 0.03);
  //         setOpacity(o => o + 0.02)
  //         return current + 20;
  //       })

  //     }
  //   })
  // }, [main])

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
          {/* <Mercury isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} />
          <Venus isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} />
          <Earth isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} />
          <Mars isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} />
          <Jupiter isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} />
          <Saturn isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} />
          <Uranus isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} />
          <Neptune isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused} /> */}
          <PlanetComponent planet="mercury" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
          <PlanetComponent planet="venus" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
          <PlanetComponent planet="earth" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
          <PlanetComponent planet="mars" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
          <PlanetComponent planet="jupiter" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
          <PlanetComponent planet="saturn" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
          <PlanetComponent planet="uranus" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
          <PlanetComponent planet="neptune" isPlanetFocused={isPlanetFocused} focusedPlanet={focusedPlanet} setIsPlanetFocused={setIsPlanetFocused} setFocusedPlanet={setFocusedPlanet} animationsPaused={animationsPaused} setAnimationsPaused={setAnimationsPaused}/>
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