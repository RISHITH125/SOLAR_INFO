import './PreLoader.css'
import { useLocation } from 'react-router-dom'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Sun } from './Heaven/hbods'
import { useSolarSystem } from './contexts/SolarSystemContext';
import { usePlanet } from './hooks/usePlanet';
import {getScrollbarClass} from '../util/customScrollbar';
import BackButton from './components/Back';

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

  const scrollbar = getScrollbarClass('minimal')
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
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <BackButton />

      <div className='m-6 text-white flex items-center justify-center'>
        <div className={`flex md:flex-row flex-col items-center  ${props.name === "saturn" || props.name === "uranus" ? "md:justify-between gap-[25vw]" : "md:justify-around gap-[5vw]"}`}>
          {props.name !== "sun" ? (
            <div className={`px-4 `}>
              {DynamicPlanets()}
            </div>
          ) : (
            <div className="w-fit mr-10">
              <Sun />
            </div>
          )}
          <div>
            <div className='text-8xl pb-4 m-2 border-b-4 font-ZenDots'>{heading + "."}</div>
            <div className={`max-w-2xl max-h-[40vh] overflow-y-auto font-Rajdhani font-bold text-2xl ${props.name !== "sun" ? "md:w-[45vw]" : "md:w-[84vw]"} border-l-white border-l-4 px-4 pr-2 ${scrollbar}`}>
              {renderTextContent()}
            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>

    </div>


  );
}

export default Planet