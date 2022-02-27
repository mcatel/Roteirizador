import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';
import calculateAndDisplayRoute from '../../utils/calculateAndDisplayRoute';
import './styles.css';

export class MapContainer extends Component {
    handleMapReady = (mapPros, map) => {
      const { setMap } = this.props;

      calculateAndDisplayRoute(map, this.props.coordinates);

      this.setState({
        map,
      });

      setMap(map);
    };

    handleClick = () => {
      calculateAndDisplayRoute(this.state.map, this.props.coordinates);
    };

    render() {
      const { coordinates } = this.props;

      const style = {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '0.8rem',
        border: '1px solid var(--color-primary)',
      };

      return (
        <div id="map">
          <Map
            google={this.props.google}
            zoom={8}
            initialCenter={this.props.initialCenter}
            onReady={this.handleMapReady}
            coordinates={coordinates}
            style={style}
            containerStyle={style}
          />
        </div>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
  language: 'pt-br',

  LoadingContainer: () => (
    <div className="loading">Carregando!</div>
  ),
})(MapContainer);
