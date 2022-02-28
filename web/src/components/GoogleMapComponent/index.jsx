import {
  GoogleMap,
} from '@react-google-maps/api';
import React from 'react';

const mapContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '0.8rem',
  border: '1px solid var(--color-primary)',
};

const GoogleMapComponent = (props) => {
  const {
    setMap,
    center,
    gmapsLoaded,
  } = props;

  const onMapLoaded = (map) => {
    setMap(map);
  };

  if (!gmapsLoaded) {
    return <p>Mapa não carregado</p>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      onLoad={onMapLoaded}
    />
  );
};

export default GoogleMapComponent;
