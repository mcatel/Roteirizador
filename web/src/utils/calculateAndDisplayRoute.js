function calculateAndDisplayRoute(map, coordinates, setpropsRoute) {
  const directionsService = new window.google.maps.DirectionsService();
  const directionsDisplay = new window.google.maps.DirectionsRenderer();

  directionsDisplay.setMap(null);
  directionsDisplay.setMap(map);

  if (coordinates.length <= 1) return;

  const waypoints = coordinates.map(coord => ({
    location: { lat: coord.lat, lng: coord.lng },
    stopover: true
  }));

  const origin = waypoints.shift().location;
  const destination = waypoints.pop().location;

  directionsService.route(
    {
      origin: origin,
      destination: destination,

      waypoints: waypoints,
      travelMode: "DRIVING"
    },
    (response, status) => {
      if (status === "OK") {
        directionsDisplay.setDirections(response);

        const distancia = response.routes[0].legs.reduce(
          (soma, dist) => soma + dist.distance.value,
          0
        );

        const tempo = response.routes[0].legs.reduce(
          (soma, t) => soma + t.duration.value,
          0
        )

        setpropsRoute({
          distance: (distancia / 1000).toFixed(2),
          time: (tempo / 3600).toFixed(2)
        });
      } else {
        alert("Falha ao calcular rota: " + status);
      }
    }
  );
}

export default calculateAndDisplayRoute;
