// SystemContext.js
import React, { createContext, useContext, useState } from 'react';

const SystemContext = createContext();

export function useSystem() {
  return useContext(SystemContext);
}

export function SystemProvider({ children }) {
  const [scaleFactor, setScaleFactor] = useState(getInitialScaleFactor());
  const [translateFactor, setTranslateFactor] = useState(getInitialTranslateFactor());
  const [opacity, setOpacity] = useState(getInitialOpacity());

  function getInitialScaleFactor() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 800) {
      return 1200;
    } else {
      return 800;
    }
  }

  function getInitialTranslateFactor() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 800) {
      return -3;
    } else {
      return 0;
    }
  }

  function getInitialOpacity() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 800) {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <SystemContext.Provider value={{ scaleFactor, setScaleFactor, translateFactor, setTranslateFactor, opacity, setOpacity }}>
      {children}
    </SystemContext.Provider>
  );
}
