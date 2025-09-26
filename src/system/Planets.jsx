/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './PreLoader.css'
import { less } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune , Sun } from './Heaven/hbods'
import { PlanetComponent } from './Heaven/PlanetClass'

const PreLoader = () => {
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className='loadingAnimation w-5 h-5 bg-white rounded-full'></div>
      </div>
    </>
  )
}
const Planet = (props) => {
  const location = useLocation();
  const planetName = location.pathname.slice(1);
  // eslint-disable-next-line react/prop-types
  let heading = props.name[0].toUpperCase() + props.name.slice(1);
  const [data, setData] = useState(null);

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:8000/planets/${props.name}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const d = await res.json();
      setData(d.data[0]);
    } catch (err) {
      setError(err.message);
      console.log("Couldn't connect to the server :(");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [setData]);
  const DynamicPlanets = () => {
    switch (planetName) {
      case 'sun':
        return <Sun />;
      case 'mercury':
        return <PlanetComponent planet="mercury" {...props} />;
      case 'venus':
        return <PlanetComponent planet="venus" {...props} />;
      case 'earth':
        return <PlanetComponent planet="earth" {...props} />;
      case 'mars':
        return <PlanetComponent planet="mars" {...props} />;
      case 'jupiter':
        return <PlanetComponent planet="jupiter" {...props} />;
      case 'saturn':
        return <PlanetComponent planet="saturn" {...props} />;
      case 'uranus':
        return <PlanetComponent planet="uranus" {...props} />;
      case 'neptune':
        return <PlanetComponent planet="neptune" {...props} />;
      default:
        return null;
    }
  };

  return (
    <>
      {!data ? <PreLoader /> : <div className='m-6 text-white flex flex-col items-center gap-6 w-[95vw] h-fit'>
        <Link to="/" className='absolute left-10'>
          <img src={less} className="w-[20px] h-fit"/>
        </Link>
        <div className='text-3xl m-2 border-b-2'>{heading}</div>
        <div className={`flex md:flex-row flex-col w-[95vw] h-fit items-center ${props.name === "saturn" || props.name === "uranus" ? "md:justify-between" : "md:justify-around"}`}>
          {props.name !== "sun" ? <div className={`px-4 h-fit ${props.name === "uranus" || props.name === "saturn" ? "w-[85vw] flex flex-row px-20" : "w-fit"}`}>
            {DynamicPlanets()}
          </div> : <div className="w-fit mr-10">< Sun /></div>}
          <div className={`w-[84vw] ${props.name !== "sun" ? "md:w-[45vw]" : "md:w-[84vw]"} h-fit border-l-white border-l-2 px-4`}>
            {data.info}
          </div>
        </div>
      </div>}
    </>
  )
}

export default Planet