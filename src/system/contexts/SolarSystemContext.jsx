import React, { createContext, useContext, useState } from 'react';

// Create the context
const SolarSystemContext = createContext();

// Custom hook to use the context
export const useSolarSystem = () => {
  const context = useContext(SolarSystemContext);
  if (!context) {
    throw new Error('useSolarSystem must be used within a SolarSystemProvider');
  }
  return context;
};

export const SolarSystemProvider = ({ children }) => {

  const [isPlanetFocused, setIsPlanetFocused] = useState(false);
  const [focusedPlanet, setFocusedPlanet] = useState(null);
  const [animationsPaused, setAnimationsPaused] = useState(false);



  // phase one zoom out (Disappear planets except focused one)
  const [isDisappearing, setIsDisappearing] = useState(false);
  const [otherPlanetsHidden, setOtherPlanetsHidden] = useState(false);




  // for phase 2 zooming
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZooming, setIsZooming] = useState(false);
  const [planetPosition, setPlanetPosition] = useState({ x: 0, y: 0 });

  const [planetFocusStyles, setPlanetFocusStyles] = useState({});



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

      // Hide all other planets by setting their opacity to 0
      const allPlanets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
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

        // 🎯 TARGET: CENTER OF VIEWPORT
        const destCenterX = window.innerWidth / 2;
        const destCenterY = window.innerHeight / 2;

        // Calculate movement based on PLANET CENTER position for accurate centering
        const planetCenterX = planetRect.x + planetRect.width / 2;
        const planetCenterY = planetRect.y + planetRect.height / 2;
        
        const deltaX = destCenterX - planetCenterX;
        const deltaY = destCenterY - planetCenterY;
        const SystemTranslation = { x: deltaX, y: deltaY };

        // 🔍 SCALE: Make planet bigger (reasonable zoom level)
        const scale = 7;

        const result = { SystemTranslation, scale };
        console.log('✅ getMetrics result:', result);
        return result;
      }
    } catch (error) {
      console.error('❌ Error getting metrics:', error);
    }
    return null;
  };

  // 📊 LOGGING FUNCTION FOR SYSTEM AND PLANET DIMENSIONS
  // const logSystemAndPlanetInfo = (planetName) => {
  //   try {
  //     // Get the main system container
  //     const mainSystem = document.querySelector('.main');
  //     const planetHolder = document.querySelector(`.${planetName}-hb`);
  //     const planet = document.querySelector(`.${planetName}`);

  //     if (mainSystem) {
  //       const systemRect = mainSystem.getBoundingClientRect();
  //       const systemStyle = window.getComputedStyle(mainSystem);

  //       console.group(`🌟 SYSTEM INFO (after ${planetName} click)`);
  //       console.log('📐 System Position:', {
  //         x: systemRect.x,
  //         y: systemRect.y,
  //         left: systemRect.left,
  //         top: systemRect.top
  //       });
  //       console.log('📏 System Size:', {
  //         width: systemRect.width,
  //         height: systemRect.height
  //       });
  //       console.log('🔄 System Transform:', systemStyle.transform);
  //       console.groupEnd();
  //     }

  //     if (planetHolder) {
  //       const holderRect = planetHolder.getBoundingClientRect();
  //       const holderStyle = window.getComputedStyle(planetHolder);

  //       console.group(`🪐 ${planetName.toUpperCase()} HOLDER INFO`);
  //       console.log('📐 Holder Position:', {
  //         x: holderRect.x,
  //         y: holderRect.y,
  //         left: holderRect.left,
  //         top: holderRect.top
  //       });
  //       console.log('📏 Holder Size:', {
  //         width: holderRect.width,
  //         height: holderRect.height
  //       });
  //       console.log('🔄 Holder Transform:', holderStyle.transform);
  //       console.groupEnd();
  //     }

  //     if (planet) {
  //       const planetRect = planet.getBoundingClientRect();
  //       const planetStyle = window.getComputedStyle(planet);

  //       console.group(`🌍 ${planetName.toUpperCase()} PLANET INFO`);
  //       console.log('📐 Planet Position:', {
  //         x: planetRect.x,
  //         y: planetRect.y,
  //         left: planetRect.left,
  //         top: planetRect.top
  //       });
  //       console.log('📏 Planet Size:', {
  //         width: planetRect.width,
  //         height: planetRect.height
  //       });
  //       console.log('🔄 Planet Transform:', planetStyle.transform);
  //       console.groupEnd();
  //     }

  //     console.log('🎯 SUMMARY:', {
  //       systemCenter: mainSystem ? {
  //         x: mainSystem.getBoundingClientRect().x + mainSystem.getBoundingClientRect().width / 2,
  //         y: mainSystem.getBoundingClientRect().y + mainSystem.getBoundingClientRect().height / 2
  //       } : null,
  //       planetCenter: planet ? {
  //         x: planet.getBoundingClientRect().x + planet.getBoundingClientRect().width / 2,
  //         y: planet.getBoundingClientRect().y + planet.getBoundingClientRect().height / 2
  //       } : null,
  //       focusedPlanet: planetName
  //     });

  //   } catch (error) {
  //     console.error('❌ Error logging system info:', error);
  //   }
  // };


  //   const handleNotPlanetClicked = (planetName) => {
  //         const targetZoom = 0;
  //         const duration = 100;

  //         const startTime = performance.now();

  //         const animateZoomOut = (currentTime) => {
  //             const elapsed = currentTime - startTime;
  //             const progress = Math.min(elapsed / duration, 1);
  //             const easeIn = Math.pow(progress, 3); // Ease-in effect
  //             setZoomLevel(1 - (1 - targetZoom) * easeIn);
  //             if (progress < 1) {
  //                 requestAnimationFrame(animateZoomOut);
  //             }
  //         };

  //         requestAnimationFrame(animateZoomOut);
  //     };


  const resetAnimation = () => {
    setAnimationsPaused(false);
    setIsPlanetFocused(false);
    setFocusedPlanet(null);
    setOtherPlanetsHidden(false);  // Reset this too
    setZoomLevel(1);
    setIsZooming(false);
    setPlanetFocusStyles({}); // Reset all planet styles
  };

  const value = {
    // States
    isPlanetFocused,
    focusedPlanet,
    animationsPaused,
    otherPlanetsHidden,
    zoomLevel,
    isZooming,
    planetPosition,

    planetFocusStyles,

    setIsPlanetFocused,
    setFocusedPlanet,
    setAnimationsPaused,
    setOtherPlanetsHidden,
    setZoomLevel,
    setIsZooming,
    setPlanetPosition,

    // Actions
    handlePlanetClick,
    resetAnimation,
    getMetrics,  // Only the metrics function



  };

  return (
    <SolarSystemContext.Provider value={value}>
      {children}
    </SolarSystemContext.Provider>
  );
};