import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Marker = ({ map, coordinates }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (map && coordinates) {
      if (!markerRef.current) {
        markerRef.current = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
      } else {
        markerRef.current.setLngLat(coordinates);
      }
    }
  }, [map, coordinates]);

  return null;
};

export default Marker;
