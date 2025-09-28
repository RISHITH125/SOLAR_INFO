import { useSolarSystem } from '../contexts/SolarSystemContext';

export const usePlanet = (planetName) => {
  const { handlePlanetClick, animationsPaused, focusedPlanet, planetInfo, planetFocusStyles } = useSolarSystem();

  // Get the specific style for this planet (or empty object if none)
  const FocusStyle = planetFocusStyles[planetName] || { planetStyle: {}, orbitStyle: {} };

  const planetData = planetInfo[planetName] || {};

  const handleClick = () => {
    handlePlanetClick(planetName);
  };

  const isThisPlanetFocused = focusedPlanet === planetName;
  const animationClass = animationsPaused ? 'animation-paused' : 'animation-resumed';

  return {
    handleClick,
    isThisPlanetFocused,
    animationClass,
    animationsPaused,
    FocusStyle,
    focusedPlanet,
    planetData,
  };
};