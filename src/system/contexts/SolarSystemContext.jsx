import { createContext, useContext, useEffect, useState } from 'react';

const SolarSystemContext = createContext();

export const useSolarSystem = () => {
  const context = useContext(SolarSystemContext);
  if (!context) {
    throw new Error('useSolarSystem must be used within a SolarSystemProvider');
  }
  return context;
};

export const SolarSystemProvider = ({ children }) => {
  const allPlanets = ['sun','mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

  const [isPlanetFocused, setIsPlanetFocused] = useState(false);
  const [focusedPlanet, setFocusedPlanet] = useState(null);
  const [animationsPaused, setAnimationsPaused] = useState(false);
  const [planetFocusStyles, setPlanetFocusStyles] = useState({});

  const [planetInfo, setPlanetInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanetData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        for (const planet of allPlanets) {
          const res = await fetch(`http://localhost:8000/planets/${planet}`);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const d = await res.json();
          setPlanetInfo(prev => ({
            ...prev,
            [planet]: { ...d.data[0] }
          }));
        }
      } catch (err) {
        setError(err.message);
        console.log("Couldn't connect to the server :(");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetData();
  }, []);


  const handlePlanetClick = (planetName) => {
    setAnimationsPaused(true);
    setFocusedPlanet(planetName);
    setIsPlanetFocused(true);

    setTimeout(() => {
    }, 100);

    // Reset all planet styles first
    setPlanetFocusStyles({});

    const metrics = getMetrics(planetName);
    if (metrics) {
      // Set style only for the clicked planet
      setPlanetFocusStyles({
        [planetName]: {
          planetStyle: {
            transform: `translateX(${metrics.SystemTranslation.x}px) translateY(${metrics.SystemTranslation.y}px)`,
            transition: 'transform 0.5s ease-in-out'
          },
          orbitStyle: {
            opacity: 0,
            transition: 'opacity 0.5s ease-in-out'
          },
        }
      });


      const otherPlanets = allPlanets.filter(planet => planet !== planetName);

      setPlanetFocusStyles(prev => {
        const newStyles = { ...prev };
        otherPlanets.forEach(planet => {
          newStyles[planet] = {
            planetStyle: {
              opacity: 0,
              transition: 'opacity 0.5s ease-in-out'
            },
            orbitStyle: {
              opacity: 0,
              transition: 'opacity 0.5s ease-in-out'
            }
          };
        });
        return newStyles;
      });
    }

    console.log(`Planet ${planetName} clicked!`);
  };


  const getMetrics = (planetName) => {
    console.log('🔍 getMetrics called with:', planetName);

    const mainSystem = document.querySelector('.main');
    const planetHolder = document.querySelector(`.${planetName}-hb`);
    const planet = document.querySelector(`.${planetName}`);

    try {
      if (mainSystem && planetHolder && planet) {
        const planetRect = planet.getBoundingClientRect();
        const mainSystemRect = mainSystem.getBoundingClientRect();


        // 🎯 TARGET: CENTER OF VIEWPORT
        const destCenterX = window.innerWidth / 2;
        const destCenterY = window.innerHeight / 2;

        const errorX = destCenterX - (mainSystemRect.x + mainSystemRect.width / 2);
        const errorY = destCenterY - (mainSystemRect.y + mainSystemRect.height / 2);

        // Calculate movement based on PLANET CENTER position for accurate centering
        const planetCenterX = planetRect.x + planetRect.width / 2;
        const planetCenterY = planetRect.y + planetRect.height / 2;
        const deltaX = destCenterX - planetCenterX - 30;
        const deltaY = destCenterY - planetCenterY;
        const SystemTranslation = { x: deltaX, y: deltaY, errX: errorX, errY: errorY };
        console.log('errorX:', errorX, 'errorY:', errorY);
        console.log('deltaX:', deltaX, 'deltaY:', deltaY);

        // 🔍 SCALE: Make planet bigger (reasonable zoom level)
        const scale = 15;

        const result = { SystemTranslation, scale };
        console.log('✅ getMetrics result:', result);
        return result;
      }
    } catch (error) {
      console.error('❌ Error getting metrics:', error);
    }
    return null;
  };


  const resetAnimation = () => {
    setAnimationsPaused(false);
    setIsPlanetFocused(false);
    setFocusedPlanet(null);
    setPlanetFocusStyles({}); // Reset all planet styles
  };

  const value = {
    // States
    isPlanetFocused,
    focusedPlanet,
    animationsPaused,
    planetFocusStyles,
    planetInfo,
    loading,
    error,

    // Setters
    setIsPlanetFocused,
    setFocusedPlanet,
    setAnimationsPaused,

    // Actions
    handlePlanetClick,
    resetAnimation,
    getMetrics,
  };

  return (
    <SolarSystemContext.Provider value={value}>
      {children}
    </SolarSystemContext.Provider>
  );
};