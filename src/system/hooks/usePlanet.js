import { useSolarSystem } from '../contexts/SolarSystemContext';

export const usePlanet = (planetName) => {
  const { handlePlanetClick, handleNotPlanetClicked, animationsPaused, focusedPlanet, isPlanetFocused, zoomLevel, planetFocusStyles } = useSolarSystem();

  // Get the specific style for this planet (or empty object if none)
  const FocusStyle = planetFocusStyles[planetName] || { planetStyle: {}, orbitStyle: {} };

  const handleClick = () => {
    handlePlanetClick(planetName);
  };

  const handleNotClicked = () => {
    handleNotPlanetClicked(planetName);
  }

  const isThisPlanetFocused = focusedPlanet === planetName;
  // const animationClass = animationsPaused ? '' : '';
  const animationClass = animationsPaused ? 'animation-paused' : 'animation-resumed';

  return {
    handleClick,
    handleNotClicked,
    isThisPlanetFocused,
    animationClass,
    animationsPaused,
    zoomLevel,
    FocusStyle,
    focusedPlanet,
  };
};