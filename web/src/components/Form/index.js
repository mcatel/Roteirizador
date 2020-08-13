import React, { useState } from 'react';
import { FaRoad, FaPlus } from 'react-icons/fa';
import Autocomplete from '../Autocomplete';
import './styles.css';

function Form(props) {

    const { coordinates, setCoordinates, propsRoute, setpropsRoute, map } = props;
    const [fields, setFields] = useState([
        { name: "origem", label: "Origem" },
        { name: "parada", label: "Parada" }
    ]);

    function addNewField(name, label) {
        setFields([...fields, { name, label }]);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className="form-container">

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

            <div className="buttons-container">
                <button className="button-router" onClick={handleSubmit}>
                    <FaRoad className="button-router-icon" />
                    Roteirizar
                </button>

                <button type="button" onClick={() => addNewField("parada", "Parada")} className="button-add">
                    <FaPlus />
                </button>
            </div>
        </form >
    );
}

export default Form;