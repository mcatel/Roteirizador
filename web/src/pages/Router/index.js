import React, { useState } from 'react';
import { FaPlus, FaRoad } from 'react-icons/fa';
import Input from '../../components/Input';
import Map from '../../components/Map';
import './styles.css';

function RouterContainer() {
    const [isRouted, setIsRouted] = useState(false);

    return (
        <div id="router-container">

            <div className="route-block">
                <div className="form-container">

                    <Input name="origem" label="Origem" />
                    <Input name="parada" label="Parada" />

                    <div className="buttons-container">
                        <button className="button-router">
                            <FaRoad className="button-router-icon" />
                            Roteirizar
                        </button>

                        <button className="button-add">
                            <FaPlus />
                        </button>
                    </div>

                </div>

                {isRouted &&

                    <div className="stats-container">
                        <p>Distância: 2 Km</p>
                        <p>Tempo estimado: 6 minutos</p>
                    </div>
                }
            </div>

            <div className="map-container">
                <Map />
            </div>
        </div>
    );
}

export default RouterContainer;