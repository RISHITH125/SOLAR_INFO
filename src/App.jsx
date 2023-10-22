
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import System from './system/System'
import Planet from './system/Planet'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<System />} />
        <Route path="/sun" element={<Planet name="sun"/>}/>
        <Route path="/mercury" element={<Planet name="mercury" />} />
        <Route path="/venus" element={<Planet name="venus" />} />
        <Route path="/earth" element={<Planet name="earth" />} />
        <Route path="/mars" element={<Planet name="mars"  />} />
        <Route path="/jupyter" element={<Planet name="jupyter" />} />
        <Route path="/saturn" element={<Planet name="saturn" />} />
        <Route path="/uranus" element={<Planet name="uranus" />} />
        <Route path="/neptune" element={<Planet name="neptune" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
