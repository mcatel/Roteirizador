import Route from '../models/Route';
import Stop from '../models/Stop';
import connection from '../database/connection';

const store = async (req, res) => {
    const { coordinates } = req.body;

    try {
        if (coordinates && coordinates.length > 0) {
            const route = await connection.transaction((t) => Route.create(null, { transaction: t }));

            coordinates.map((coord) => {
                return connection.transaction((t) => {
                    return Stop.create({
                        stop_point: {
                            type: "point",
                            coordinates: [
                                coord.latitude,
                                coord.longitude
                            ]
                        },
                        route_id: route.id
                    }, {
                        transaction: t
                    });
                });
            });

            return res.status(200).json(route);
        } else {
            return res.status(400).json({
                error: "Nenhuma coordenada encontrada."
            });
        }
    } catch (error) {
        return res.status(400).json({
            error: "Unexpected error while creating new route"
        });
    }
};

export default { store };