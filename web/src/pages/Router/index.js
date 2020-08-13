import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import Map from '../../components/Map';
import './styles.css';

function RouterContainer() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [globalMap, setMap] = useState("");
    const [coordinates, setCoordinates] = React.useState([]);
    const [propsRoute, setpropsRoute] = React.useState({});
    const isRouted = false;

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
                    propsRoute={propsRoute}
                    map={globalMap}
                    setMap={setMap}
                    setpropsRoute={setpropsRoute}
                />

                {isRouted &&

                    <footer>
                        <p>Distância: 2 Km</p>
                        <p>Tempo estimado: 6 minutos</p>
                    </footer>
                }
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