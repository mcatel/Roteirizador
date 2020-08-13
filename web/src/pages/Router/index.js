import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import Map from '../../components/Map';
import './styles.css';

function RouterContainer() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [googleMap, setGoogleMap] = useState('');
    const [coordinates, setCoordinates] = React.useState([]);
    const [routeData, setRouteData] = React.useState({});

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
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
                <Map
                    latitude={latitude}
                    longitude={longitude}
                />
            </main>
        </div>
    );
}

export default RouterContainer;