import React, { useState, useContext } from 'react';
import { MapContext } from '../contexts/MapContext';
import { geocodePlace } from '../utils/Geocode';
import './DestinationForm.css'

const DestinationForm = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const { setDestination, setPlaceName } = useContext(MapContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { coordinates, placeName } = await geocodePlace(input);
      setDestination(coordinates);
      setPlaceName(placeName);
    } catch (error) {
      setError(error.message);
      return;
    }
  };

  return (

    <form onSubmit={handleSubmit}>

        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="mo kamana?"
            />

      <button>
        <div className="svg-wrapper-1">
            <div className="svg-wrapper">
                <span>Go</span>
            </div>
        </div>
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default DestinationForm;
