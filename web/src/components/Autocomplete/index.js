import React from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';

import './styles.css';

function Autocomplete(props) {
    const { coordinates, setCoordinates, label, name, index } = props;

    async function handleSelect(value) {

        const geocode = await geocodeByAddress(value.description);
        const latLng = await getLatLng(geocode[0]);

        setCoordinates([...coordinates.slice(0, index), latLng, ...coordinates.slice(index + 1, coordinates.length)]);
    }

    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <GooglePlacesAutocomplete
                name={name}
                onSelect={handleSelect}
                apiKey={"AIzaSyC09lOsJr2ZebDd2CHt_3X0JCoP-yrZUJk"}
                placeholder={"Digite um endereço"}
            />
        </div>
    );
};

export default Autocomplete;