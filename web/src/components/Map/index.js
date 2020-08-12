import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import './styles.css';

function Map() {

    function MapComponent() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{
                    lat: -29.201490,
                    lng: -51.238480
                }}
            />
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

    return (
        <WrappedMap
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div className="map-element" />}
            containerElement={<div className="map-element" />}
            mapElement={<div className="map-element" />}
        />
    );
}

export default Map;