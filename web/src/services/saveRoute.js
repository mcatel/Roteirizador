import api from './api';

async function saveRoute(coordinates) {

    await api.post("routes", {
        coordinates: coordinates.map(coordinate => ({
            longitude: coordinate.lat,
            latitude: coordinate.lng
        }))
    }).then(response => {
        //console.log(response);
        //alert("Rota cadastrada com sucesso");
    }).catch(err => {
        console.log(err);
        alert("Erro ao salvar a rota no banco de dados");
    });
}

export default saveRoute;