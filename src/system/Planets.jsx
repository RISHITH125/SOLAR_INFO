import React, { useEffect, useState } from 'react'
import './PreLoader.css'
import { less } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune , Sun } from './Heaven/hbods'

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
  let heading = props.name[0].toUpperCase() + props.name.slice(1);
  const [data, setData] = useState(null);
  let arrow = "<-";

  useEffect(() => {
    if (data) return;
    fetch(`http://localhost:8000/planets/${props.name}`)
      .then((res) => {
        return res.json();
      }).then((d) => {
        setData(d.data[0]);
      }).catch((err) => {
        console.log("Couldn't connect to the server :(");
        console.log("The reason might be: ");
        console.log(err);
      })
  }, [setData]);
  const DynamicPlanets = () => {
    switch (planetName) {
      case 'sun':
        return <Sun />;
      case 'mercury':
        return <Mercury />;
      case 'venus':
        return <Venus />;
      case 'earth':
        return <Earth />;
      case 'mars':
        return <Mars />;
      case 'jupiter':
        return <Jupiter />;
      case 'saturn':
        return <Saturn />;
      case 'uranus':
        return <Uranus />;
      case 'neptune':
        return <Neptune />;
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