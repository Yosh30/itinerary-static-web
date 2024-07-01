import React, { useState, useEffect } from 'react';
import './ListLoc.css';
import DataGeoJson from '../utils/DataGeoJson';
import { getRouteDistance } from '../utils/routeDistance';

const ListLoc = ({ onLocationClick, filterCategory, setFilterCategory, show, userLocation, updateDistance  }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFeatures, setFilteredFeatures] = useState(DataGeoJson.features);

  useEffect(() => {
    const fetchDistances = async () => {
      let filteredData = DataGeoJson.features.filter(feature => {
        const description = feature.properties.description.toLowerCase();
        const term = searchTerm.toLowerCase();
        return description.includes(term);
      });

      if (userLocation) {
        filteredData = await Promise.all(filteredData.map(async feature => {
          const distance = await getRouteDistance(
            userLocation,
            feature.geometry.coordinates
          );
          return {
            ...feature,
            distance,
          };
        }));

        filteredData.sort((a, b) => a.distance - b.distance);
      }

      setFilteredFeatures(filteredData);
    };

    fetchDistances();
  }, [searchTerm, filterCategory, userLocation]);

  return (
    <aside className={`sidebar ${show ? '' : 'hidden'}`}>
      <div className="top-menu">
        <ul onClick={() => setFilterCategory('all')}>all</ul>
        <ul onClick={() => setFilterCategory('anime')}>anime</ul>
        <ul onClick={() => setFilterCategory('togo')}>togo</ul>
        <ul onClick={() => setFilterCategory('event')}>events</ul>
      </div>
      <div className="input-wrap">
        <input
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="container-list">
        <div className="side-nav">
          {filteredFeatures
            .filter(feature => filterCategory === 'all' || feature.properties.icon.includes(filterCategory))
            .map((feature, index) => (
              <div key={index} className="location-item" onClick={() => onLocationClick(feature.geometry.coordinates)}>
                <div dangerouslySetInnerHTML={{ __html: feature.properties.description }} />
                
                {userLocation && (
                  <p>Distance: {feature.distance ? `${(feature.distance / 1000).toFixed(2)} km` : 'Calculating...'}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default ListLoc;
