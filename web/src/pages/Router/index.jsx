import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import GoogleMapComponent from '../../components/GoogleMapComponent';
import './styles.css';

const RouterContainer = ({ gmapsLoaded }) => {
  const [center, setCenter] = useState({ lat: -14.94478488, lng: -50.00976563 });
  const [googleMap, setGoogleMap] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [routeData, setRouteData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCenter({ lat: latitude, lng: longitude });
    }, () => {
      setCenter({ lat: -14.94478488, lng: -50.00976563 });
    }, {
      timeout: 30000,
    });
  }, []);

  return (
    <div id="router-container">
      <header>
        <Form
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          routeData={routeData}
          map={googleMap}
          setRouteData={setRouteData}
          center={center}
          gmapsLoaded={gmapsLoaded}
        />

        {(routeData.distance || routeData.time) && (
          <footer>
            {routeData.distance && (
              <p>
                Distância:
                {' '}
                {routeData.distance}
                {' '}
                Km
              </p>
            )}
            {routeData.time && (
              <p>
                Tempo estimado:
                {' '}
                {routeData.time}
                {' '}
                Horas
              </p>
            )}
          </footer>
        )}
      </header>

      <main>
        <GoogleMapComponent
          center={center}
          setMap={setGoogleMap}
          gmapsLoaded={gmapsLoaded}
        />
      </main>
    </div>
  );
};

export default RouterContainer;
