import React, { useState } from 'react';
import {
  FaPlus, FaRoad, FaTrash,
} from 'react-icons/fa';
import saveRoute from '../../services/saveRoute';
import calculateAndDisplayRoute from '../../utils/calculateAndDisplayRoute';
import Autocomplete from '../Autocomplete';
import './styles.css';

function Form(props) {
  const {
    coordinates,
    setCoordinates,
    setRouteData,
    map,
    gmapsLoaded,
  } = props;

  const [fields, setFields] = useState([
    { name: 'origem', label: 'Origem' },
    { name: 'parada', label: 'Parada' },
  ]);

  function addNewField(name, label) {
    setFields([...fields, { name, label }]);
  }

  function removeField(index) {
    const array = fields.filter((_, elementIndex) => elementIndex !== index);
    setCoordinates(coordinates.filter((_, coordIndex) => index !== coordIndex));
    setFields(array);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (coordinates && coordinates.length > 1) {
      saveRoute(coordinates);
      calculateAndDisplayRoute(map, coordinates, setRouteData);
    } else {
      setCoordinates([]);
      calculateAndDisplayRoute(map, [], setRouteData);
    }
  }

  if (!gmapsLoaded) {
    return <p>Mapa não carregado</p>;
  }

  return (
    <form onSubmit={handleSubmit} id="form-container">
      <legend>Rotas</legend>

      {fields.map((field, index) => (
        <div key={`${field.name + index}`} className="field-block">
          <Autocomplete
            label={field.label}
            index={index}
            name={field.name + index}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />

          {(index > 1) && (
            <button type="button" onClick={() => removeField(index)}>
              <FaTrash />
            </button>
          )}
        </div>
      ))}

      <section>
        <button type="submit" className="button-router">
          <FaRoad className="button-icon" />
          Roteirizar
        </button>

        <button
          type="button"
          className="button-add"
          onClick={() => addNewField('parada', 'Parada')}
        >
          <FaPlus />
        </button>

      </section>
    </form>
  );
}

export default Form;
