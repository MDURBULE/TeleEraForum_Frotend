import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Loader from './Loader';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 21.094410, // Example: Latitude for New York City
  lng: 78.981560, // Example: Longitude for New York City
};

const GoogleMapCom = () => {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const onLoad = () => {
    setLoading(false);
  };

  const onError = () => {
    setLoadError(true);
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Company Location</h2>
      <div className="w-full h-96 relative">
        {/* Loading State */}
        {loading && (
          <Loader/>
        )}

        {/* Error State */}
        {loadError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-100">
            <p className="text-red-600 font-semibold">Failed to load map. Check API key or network.</p>
          </div>
        )}

        {/* Google Map */}
        {!loadError && (
          <LoadScript googleMapsApiKey={apiKey} onLoad={onLoad} onError={onError}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              onLoad={onLoad}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        )}
      </div>
      <p className="text-gray-500 mt-4">
        Visit us at our company headquarters located in the heart of the city.
      </p>
    </div>
  );
};

export default GoogleMapCom;
