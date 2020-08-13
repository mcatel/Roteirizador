import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import './styles.css';

function Map(props) {
    const { latitude, longitude } = props;

    function MapComponent() {
        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{
                    lat: latitude,
                    lng: longitude
                }}
            />
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

    return (
        <WrappedMap
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing"}
            loadingElement={<div className="map-element" />}
            containerElement={<div className="map-element" />}
            mapElement={<div className="map-element" />}
        />
    );
}

export default Map;