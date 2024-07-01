import React, { createContext, useState } from 'react';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [destination, setDestination] = useState(null);
  const [placeName, setPlaceName] = useState(null);

  return (
    <MapContext.Provider value={{ map, setMap, destination, setDestination, placeName, setPlaceName }}>
      {children}
    </MapContext.Provider>
  );
};
