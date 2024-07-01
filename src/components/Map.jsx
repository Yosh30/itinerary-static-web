import React, { useContext, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapContext } from '../contexts/MapContext';
import Marker from './Marker';
import ListLoc from './ListLoc';
import DataGeoJson from '../utils/DataGeoJson';
import { getRouteDistance } from '../utils/routeDistance';
// import './assets'
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoieW9zdWFtYW5hbm9tYSIsImEiOiJja21qMm1oem4wbjQ1Mm90bnp2dHZkc2JxIn0.2NHkrsIv8sHqh30FEBiqjw';

const Map = () => {
  const { map, setMap, destination, placeName } = useContext(MapContext);
  const [userLocation, setUserLocation] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [showListLoc, setShowListLoc] = useState(true); // State untuk mengontrol visibility ListLoc
  const [locationData, setLocationData] = useState([]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([139.77346882657466,35.672413700625384]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (!map && userLocation) {
      const mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/standard', // Ganti dengan style yang sesuai
        center: [139.77346882657466, 35.672413700625384], // Ganti dengan koordinat pusat yang sesuai
        zoom: 14,
      });

      mapInstance.on('load', () => {
        setMap(mapInstance);

        new mapboxgl.Marker({ color: 'blue' })
          .setLngLat(userLocation)
          .addTo(mapInstance);

        // Load custom markers
        const markers = [
          { name: 'event-place', src: '/assets/event.png' },
          { name: 'choir', src: '/assets/choir.png' },
          { name: 'togo-place', src: '/assets/togo.png' },
          { name: 'anime-place', src: '/assets/anime-place.png' },
          { name: 'hotels', src: '/assets/hotels.png' }
        ];

        markers.forEach(marker => {
          mapInstance.loadImage(marker.src, (error, image) => {
            if (error) {
              console.error('Error loading image:', error);
              return;
            }
            if (!mapInstance.hasImage(marker.name)) {
              mapInstance.addImage(marker.name, image);
            }
          });
        });

        mapInstance.addSource('places', {
          type: 'geojson',
          data: DataGeoJson,
        });

        mapInstance.addLayer({
          id: 'places',
          type: 'symbol',
          source: 'places',
          layout: {
            'icon-image': ['get', 'icon'],
            'icon-size': [
              'match',
              ['get', 'icon'],
              'anime-place', 0.15,  // Ukuran khusus untuk anime-place
              0.06  // Ukuran default untuk ikon lainnya
            ],
            'icon-allow-overlap': true,
          },
        });

        mapInstance.on('click', 'places', async (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          let distanceText = 'Distance: Click on location to calculate';
          if (userLocation) {
            const clickedLocation = locationData.find(loc => loc.geometry.coordinates[0] === coordinates[0] && loc.geometry.coordinates[1] === coordinates[1]);
            if (clickedLocation && clickedLocation.distance) {
              distanceText = `Distance: ${(clickedLocation.distance / 1000).toFixed(2)} km`;
            } else {
              const distance = await getRouteDistance(userLocation, coordinates);
              distanceText = `Distance: ${(distance / 1000).toFixed(2)} km from your location.`;
            }
          }

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`${description}<p>${distanceText}</p>`)
            .addTo(mapInstance);
        });

        mapInstance.on('mouseenter', 'places', () => {
          mapInstance.getCanvas().style.cursor = 'pointer';
        });

        mapInstance.on('mouseleave', 'places', () => {
          mapInstance.getCanvas().style.cursor = '';
        });
      });
    }

    if (map && destination) {
      map.flyTo({ center: destination, essential: true });
    }
  }, [map, setMap, destination, userLocation]);

  useEffect(() => {
    if (map) {
      const filteredData = {
        ...DataGeoJson,
        features: DataGeoJson.features.filter((feature) => {
          if (filterCategory === 'all') {
            return true;
          } else if (filterCategory === 'anime' || filterCategory === 'hotels') {
            return feature.properties.icon.includes('anime') || feature.properties.icon.includes('hotels');
          } else if (filterCategory === 'togo' || filterCategory === 'hotels') {
            return feature.properties.icon.includes('togo') || feature.properties.icon.includes('hotels');
          } else if (filterCategory === 'event' || filterCategory === 'hotels') {
            return feature.properties.icon.includes('event') || feature.properties.icon.includes('hotels');
          } else {
            return feature.properties.icon.includes(filterCategory);
          }
        }),
      };

      const source = map.getSource('places');
      if (source) {
        source.setData(filteredData);
        map.flyTo({ center: [139.6917, 35.6895], zoom: 11, essential: true });
      }
    }
  }, [map, filterCategory]);

  const handleLocationClick = (coordinates) => {
    if (map) {
      map.flyTo({ center: coordinates, zoom: 14, essential: true });
    }
  };

  const toggleListLoc = () => {
    setShowListLoc(!showListLoc);
  };

  const updateDistance = (data) => {
    setLocationData(data);
  };

  return (
    <div className='map-wrapper'>
      <button onClick={toggleListLoc}>{showListLoc ? 'Hide Locations' : 'Show Locations'}</button>
      <ListLoc
        onLocationClick={handleLocationClick}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        show={showListLoc} // Memberikan prop show ke ListLoc
        userLocation={userLocation} // Memberikan userLocation ke ListLoc
        updateDistance={updateDistance}
      />
      <div id="map" className='map-cont' />
      {map && destination && <Marker map={map} coordinates={destination} />}
      {placeName && <p>Destination: {placeName}</p>}
    </div>
  );
};

export default Map;
