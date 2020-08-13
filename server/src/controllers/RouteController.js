const Route = require('../models/Route');
const Stop = require('../models/Stop');

module.exports = {
    async store(req, res) {
        const { coordinates } = req.body;
        const route = await Route.create();

        coordinates.forEach(async coordinate => {
            await Stop.create({
                stop_point: {
                    type: "point",
                    coordinates: [
                        coordinate.latitude,
                        coordinate.longitude
                    ]
                },
                route_id: route.id
            });
        });

        return res.json(route);
    },

    async index(req, res) {
        const routes = await Route.findAll({
            include: {
                association: 'stops'
            }
        });

        return res.json(routes);
    }
}