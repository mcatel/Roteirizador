import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';

import './styles.css';

function Autocomplete({ label, name }) {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <GooglePlacesAutocomplete
                onSelect={console.log}
                apiKey={"AIzaSyC09lOsJr2ZebDd2CHt_3X0JCoP-yrZUJk"}
                placeholder={"Digite um endereço"}
            />
        </div>
    );
};

export default Autocomplete;