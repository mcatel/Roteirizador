import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import MapContainer from '../../components/MapContainer';
import './styles.css';

function RouterContainer() {
    const [initialCenter, setInitialCenter] = useState({});

    const [googleMap, setGoogleMap] = useState('');
    const [coordinates, setCoordinates] = React.useState([]);
    const [routeData, setRouteData] = React.useState({});

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInitialCenter({
                lat: latitude,
                lng: longitude
            });

        }, err => {
            console.log(err);
        }, { timeout: 30000 });

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
                />

                {routeData.distance && (
                    <footer>
                        <p>Distância: {routeData.distance} Km</p>
                        <p>Tempo estimado: {routeData.time} Horas</p>
                    </footer>
                )}
            </header>

            <main>
                <MapContainer
                    initialCenter={initialCenter}
                    coordinates={coordinates}
                    setCoordinates={setCoordinates}
                    map={googleMap}
                    setMap={setGoogleMap}
                />
            </main>
        </div>
    );
}

export default RouterContainer;