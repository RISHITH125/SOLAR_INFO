
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import System from './system/System'
import Planet from './system/Planets'
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

function App() {

  return (
    <>
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<System />} />
        <Route path="/sun" element={<Planet name="sun"/>}/>
        <Route path="/mercury" element={<Planet name="mercury" />} />
        <Route path="/venus" element={<Planet name="venus" />} />
        <Route path="/earth" element={<Planet name="earth" />} />
        <Route path="/mars" element={<Planet name="mars"  />} />
        <Route path="/jupiter" element={<Planet name="jupiter" />} />
        <Route path="/saturn" element={<Planet name="saturn" />} />
        <Route path="/uranus" element={<Planet name="uranus" />} />
        <Route path="/neptune" element={<Planet name="neptune" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
