

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import System from './system/System'
import Planet from './system/Planets'
import About from './system/About'
import { useState } from 'react';

function App() {
  const [scaleFactor, setScaleFactor] = useState(getInitialScaleFactor());
  const [translateFactor, setTranslateFactor] = useState(getInitialTranslateFactor());
  const [opacity, setOpacity] = useState(getInitialOpacity());

  function getInitialScaleFactor() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 800) {
      return 1200
    } else{
      return 600
    } 
  }
  function getInitialTranslateFactor() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 800) 
    {
      return -3.3;
    } 
    else
    {
      return 0
    }
  }

  function getInitialOpacity() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 800) 
    {
      return 1
    } 
    else
    {
      return 1
    }

  }

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<System  scaleFactor={scaleFactor}
                                            setScaleFactor={setScaleFactor}
                                            translateFactor={translateFactor}
                                            setTranslateFactor={setTranslateFactor}
                                            opacity={opacity}
                                            setOpacity={setOpacity}
                                            getInitialOpacity={getInitialOpacity}
                                            getInitialScaleFactor={getInitialScaleFactor}
                                            getInitialTranslateFactor={getInitialTranslateFactor}  />} />
        <Route path="/sun" element={<Planet name="sun"/>}/>
        <Route path="/mercury" element={<Planet name="mercury" />} />
        <Route path="/venus" element={<Planet name="venus" />} />
        <Route path="/earth" element={<Planet name="earth" />} />
        <Route path="/mars" element={<Planet name="mars"  />} />
        <Route path="/jupiter" element={<Planet name="jupiter" />} />
        <Route path="/saturn" element={<Planet name="saturn" />} />
        <Route path="/uranus" element={<Planet name="uranus" />} />
        <Route path="/neptune" element={<Planet name="neptune" />} />
        <Route path="/About" element={<About/>}/>

      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
