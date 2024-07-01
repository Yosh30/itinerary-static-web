import React from 'react';
import Map from './components/Map';
import DestinationForm from './components/DestinationForm';
import { MapProvider } from './contexts/MapContext';
import Sidebar from './components/ListLoc';
import './styles/App.css';
import ListLoc from './components/ListLoc';

const App = () => {
  return (
    <MapProvider>
      <div className="App">
        {/* <h1>Japaannn Itinerary!!</h1> */}
        <ListLoc/>
        {/* <DestinationForm /> */}
        <Map />
      </div>
    </MapProvider>
  );
};

export default App;
