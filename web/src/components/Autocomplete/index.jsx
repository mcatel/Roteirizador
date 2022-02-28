import React from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import './styles.css';

function Autocomplete(props) {
  const {
    coordinates, setCoordinates, label, name, index,
  } = props;

  const handleSelect = async ({ value }) => {
    const geocode = await geocodeByAddress(value.description);
    const latLng = await getLatLng(geocode[0]);

    setCoordinates([
      ...coordinates.slice(0, index),
      latLng,
      ...coordinates.slice(index + 1, coordinates.length),
    ]);
  };

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <GooglePlacesAutocomplete
        minLengthAutocomplete={3}
        selectProps={{
          placeholder: 'Informe uma parada',
          onChange: handleSelect,
          styles: {
            input: (provided) => ({
              ...provided,
              height: '30px',
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: '#E6E6F0',
              borderRadius: '8px',
            }),
            singleValue: (provided) => ({
              ...provided,
              '-webkit-transform': null,
              transform: null,
            }),
          },
        }}
      />
    </div>
  );
}

export default Autocomplete;
