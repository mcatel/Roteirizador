import React, { useState } from 'react';
import { FaPlus, FaRoad, FaTrash } from 'react-icons/fa';
import saveRoute from '../../services/saveRoute';
import calculateAndDisplayRoute from '../../utils/calculateAndDisplayRoute';
import Autocomplete from '../Autocomplete';
import './styles.css';

function Form(props) {
  const {
    coordinates, setCoordinates, setRouteData, map,
  } = props;

  const [fields, setFields] = useState([
    { name: 'origem', label: 'Origem' },
    { name: 'parada', label: 'Parada' },
  ]);

  function addNewField(name, label) {
    setFields([...fields, { name, label }]);
  }

  function removeField(index) {
    const array = [];

    fields.forEach((element, elementIndex) => {
      if (elementIndex !== index) {
        array.push(element);
      }
    });

    setFields(array);
  }

  function handleSubmit(e) {
    e.preventDefault();

    saveRoute(coordinates);
    calculateAndDisplayRoute(map, coordinates, setRouteData);
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

          {(index > 1)
              && (
                <button type="button" onClick={() => removeField(index)}>
                  <FaTrash />
                </button>
              )}
        </div>

      ))}

      <section>
        <button type="submit" className="button-router">
          <FaRoad className="button-router-icon" />
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
