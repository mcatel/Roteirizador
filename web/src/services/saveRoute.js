import api from './api';

async function saveRoute(coordinates) {

    if (typeof coordinates !== 'undefined' && coordinates.length > 0) {

        await api.post("routes", {
            coordinates: coordinates.map(coordinate => ({
                longitude: coordinate.lat,
                latitude: coordinate.lng
            }))
        }).then(response => {
            return response;
        }).catch(err => {
            console.error(err);
            alert("Erro ao salvar a rota no banco de dados");
            return null;
        });
    }
}

export default saveRoute;