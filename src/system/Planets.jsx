/* eslint-disable react/prop-types */
import './PreLoader.css'
import { less } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune , Sun } from './Heaven/hbods'
import { useSolarSystem } from './contexts/SolarSystemContext';
import { usePlanet } from './hooks/usePlanet';

const TextLoader = () => {
  return (
    <div className='flex justify-center items-center py-8'>
      <div className='flex flex-col items-center gap-3'>
        <div className='loadingAnimation w-4 h-4 bg-white rounded-full'></div>
        <p className='text-gray-400 text-sm'>Loading planet information...</p>
      </div>
    </div>
  )
}

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className='flex justify-center items-center py-8'>
      <div className='flex flex-col items-center gap-3 text-center'>
        <p className='text-red-400'>Failed to load planet information</p>
        <p className='text-gray-400 text-sm'>{error}</p>
        {onRetry && (
          <button 
            onClick={onRetry} 
            className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors'
          >
            Retry
          </button>
        )}
      </div>
    </div>
  )
}
const Planet = (props) => {
  const { planetData } = usePlanet(props.name);
  const { resetAnimation, loading, error } = useSolarSystem();
  const location = useLocation();
  const planetName = location.pathname.slice(1);

  let heading = props.name[0].toUpperCase() + props.name.slice(1);

  // We'll use the context loading and error states instead of local ones
  const hasData = planetData && Object.keys(planetData).length > 0;
  const isLoading = loading || !hasData;

  const handleRetry = () => {
    // Force a page reload to retry fetching data
    window.location.reload();
  };

  const DynamicPlanets = () => {
    switch (planetName) {
      case 'sun':
        return <Sun />;
      case 'mercury':
        return <Mercury {...props} />;
      case 'venus':
        return <Venus {...props} />;
      case 'earth':
        return <Earth {...props} />;
      case 'mars':
        return <Mars {...props} />;
      case 'jupiter':
        return <Jupiter {...props} />;
      case 'saturn':
        return <Saturn {...props} />;
      case 'uranus':
        return <Uranus {...props} />;
      case 'neptune':
        return <Neptune {...props} />;
      default:
        return null;
    }
  };

  const renderTextContent = () => {
    if (error) {
      return <ErrorMessage error={error} onRetry={handleRetry} />;
    }
    
    if (isLoading) {
      return <TextLoader />;
    }
    
    if (planetData && planetData.info) {
      return planetData.info;
    }
    
    return <div className='text-gray-400 py-4'>No information available for this planet.</div>;
  };

  return (
    <div className='m-6 text-white flex flex-col items-center gap-6 w-[95vw] h-fit'>
      <Link to="/" className='absolute left-10' onClick={resetAnimation}>
        <img src={less} className="w-[20px] h-fit"/>
      </Link>
      <div className='text-3xl m-2 border-b-2'>{heading}</div>
      <div className={`flex md:flex-row flex-col w-[95vw] h-fit items-center ${props.name === "saturn" || props.name === "uranus" ? "md:justify-between" : "md:justify-around"}`}>
        {props.name !== "sun" ? (
          <div className={`px-4 h-fit ${props.name === "uranus" || props.name === "saturn" ? "w-[85vw] flex flex-row px-20" : "w-fit"}`}>
            {DynamicPlanets()}
          </div>
        ) : (
          <div className="w-fit mr-10">
            <Sun />
          </div>
        )}
        <div className={`w-[84vw] ${props.name !== "sun" ? "md:w-[45vw]" : "md:w-[84vw]"} h-fit border-l-white border-l-2 px-4`}>
          {renderTextContent()}
        </div>
      </div>
    </div>
  );
}

export default Planet