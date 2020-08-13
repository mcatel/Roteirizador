import api from './api';

async function saveRoute(coordinates) {

    const { id } = await api.post("routes");

    await api.post("stops", {
        route_id: id,
        stop_point: {
            type: "point",
            coordinates: [
                coordinates.latitude,
                coordinates.longitude
            ]
        }
    }).then(response => {
        console.log(response);
        alert("Rota cadastrada com sucesso");
    }).catch(err => {
        console.log(err);
        alert("Erro ao cadastrar rota");
    });
}

export default saveRoute;