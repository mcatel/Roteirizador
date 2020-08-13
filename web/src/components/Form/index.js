import React, { useState } from 'react';
import { FaRoad, FaPlus } from 'react-icons/fa';
import Autocomplete from '../Autocomplete';
import saveRoute from '../../services/saveRoute';
import calculateAndDisplayRoute from '../../services/calculateAndDisplayRoute';

import './styles.css';

function Form(props) {
    const { coordinates, setCoordinates, setRouteData, map } = props;
    const [fields, setFields] = useState([
        { name: "origem", label: "Origem" },
        { name: "parada", label: "Parada" }
    ]);

    function addNewField(name, label) {
        setFields([...fields, { name, label }]);
    }

    function handleSubmit(e) {
        e.preventDefault();

        saveRoute(coordinates);
        calculateAndDisplayRoute(map, coordinates, setRouteData);
    }

    return (
        <form onSubmit={handleSubmit} id="form-container">

            {
                fields.map((field, index) => {
                    return (
                        <Autocomplete
                            key={index}
                            label={field.label}
                            index={index}
                            name={field.name + index}
                            coordinates={coordinates}
                            setCoordinates={setCoordinates}
                        />
                    );
                })
            }

            <section>
                <button type="submit" className="button-router">
                    <FaRoad className="button-router-icon" />
                    Roteirizar
                </button>

                <button
                    type="button"
                    className="button-add"
                    onClick={() => addNewField("parada", "Parada")}
                >
                    <FaPlus />
                </button>
            </section>
        </form >
    );
}

export default Form;