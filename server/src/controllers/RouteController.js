const Route = require('../models/Route');
const Stop = require('../models/Stop');
const connection = require('../database/connection');

module.exports = {
    async store(req, res) {
        const { coordinates } = req.body;

        try {

            if (coordinates.length > 0) {
                await connection.transaction(async (t) => {
                    const route = await Route.create(null, { transaction: t });

                    coordinates.forEach(async coordinate => {

                        await connection.transaction(async (t) => {
                            await Stop.create({
                                stop_point: {
                                    type: "point",
                                    coordinates: [
                                        coordinate.latitude,
                                        coordinate.longitude
                                    ]
                                },
                                route_id: route.id
                            }, {
                                transaction: t
                            });
                        });
                    });

                    return res.json(route);
                });
            } else {
                throw new Error("teste");
            }

        } catch (error) {

            return res.status(400).json({
                error: "Unexpected error while creating new route"
            });
        }
    }
}