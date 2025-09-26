import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Function to get planet configuration
function getPlanetData(planet) {
    switch (planet) {
        case 'mercury':
            return {
                component: 'mercury',
                href: '/mercury',
                divClass: 'mercury-hb',
                orbitClass: 'orbit orbit-me hover:border-gray-300 z-[80]',
                innerDivClass: 'mercury',
                innerFocusedDivClass: 'mercury-i'
            };
        case 'venus':
            return {
                component: 'venus',
                href: '/venus',
                divClass: 'venus-hb',
                orbitClass: 'orbit orbit-ve hover:border-gray-300 z-[70]',
                innerDivClass: 'venus',
                innerFocusedDivClass: 'venus-i'
            };
        case 'earth':
            return {
                component: 'earth',
                href: '/earth',
                divClass: 'earth-hb',
                orbitClass: 'orbit orbit-ea hover:border-gray-300 z-[60]',
                innerDivClass: 'earth',
                innerFocusedDivClass: 'earth-i'
            };
        case 'mars':
            return {
                component: 'mars',
                href: '/mars',
                divClass: 'mars-hb',
                orbitClass: 'orbit orbit-ma hover:border-gray-300 z-[50]',
                innerDivClass: 'mars',
                innerFocusedDivClass: 'mars-i'
            };
        case 'jupiter':
            return {
                component: 'jupiter',
                href: '/jupiter',
                divClass: 'jupiter-hb',
                orbitClass: 'orbit orbit-ju hover:border-gray-300 z-[40]',
                innerDivClass: 'jupiter',
                innerFocusedDivClass: 'jupiter-i'
            };
        case 'saturn':
            return {
                component: 'saturn',
                href: '/saturn',
                divClass: 'saturn-hb',
                orbitClass: 'orbit orbit-sa hover:border-gray-300 z-[30]',
                innerDivClass: 'saturn',
                innerFocusedDivClass: 'saturn-i',
                hasRings: true
            };
        case 'uranus':
            return {
                component: 'uranus',
                href: '/uranus',
                divClass: 'uranus-hb',
                orbitClass: 'orbit orbit-ur hover:border-gray-300 z-[20]',
                innerDivClass: 'uranus',
                innerFocusedDivClass: 'uranus-i',
                hasRings: true
            };
        case 'neptune':
            return {
                component: 'neptune',
                href: '/neptune',
                divClass: 'neptune-hb',
                orbitClass: 'orbit orbit-ne hover:border-gray-300 z-[10]',
                innerDivClass: 'neptune',
                innerFocusedDivClass: 'neptune-i'
            };
        default:
            return {};
    }
}

// React component for rendering planets
function PlanetComponent({ isPlanetFocused, focusedPlanet, setIsPlanetFocused, setFocusedPlanet, animationsPaused, setAnimationsPaused, planet }) {
    const location = useLocation();
    const planetData = getPlanetData(planet);

    const handlePlanetClick = () => {
        setAnimationsPaused(true);
        setFocusedPlanet(planetData.component);
        setIsPlanetFocused(true);
    };

    const renderPlanetInner = () => {
        if (planet === 'saturn') {
            return (
                <div className={planetData.innerDivClass}>
                    <div className="rings"></div>
                    <div className="tops"></div>
                </div>
            );
        } else if (planet === 'uranus') {
            return (
                <div className={planetData.innerDivClass}>
                    <div className="ringu"></div>
                    <div className="topu"></div>
                </div>
            );
        } else {
            return <div className={planetData.innerDivClass}></div>;
        }
    };

    const renderFocusedPlanet = () => {
        if (planet === 'saturn') {
            return (
                <div className={planetData.innerFocusedDivClass}>
                    <div className="rings-i"></div>
                    <div className="tops-i"></div>
                </div>
            );
        } else if (planet === 'uranus') {
            return (
                <div className="uranushb-i">
                    <div className={planetData.innerFocusedDivClass}>
                        <div className="ringu-i"></div>
                        <div className="topu-i"></div>
                    </div>
                </div>
            );
        } else {
            return <div className={planetData.innerFocusedDivClass}></div>;
        }
    };

    return (
        <>
            {location.pathname === '/' ? (
                <>
                    <div 
                        className={`${planetData.divClass} ${animationsPaused ? 'animation-paused' : 'animation-resumed'}`} 
                        onClick={handlePlanetClick}
                    >
                        <Link to={planetData.href}>
                            {renderPlanetInner()}
                        </Link>
                    </div>

                    <div 
                        className={`${planetData.orbitClass}`} 
                        onClick={handlePlanetClick}
                    ></div>
                </>
            ) : (
                <>
                    {renderFocusedPlanet()}
                </>
            )}
        </>
    );
}

export { PlanetComponent };
