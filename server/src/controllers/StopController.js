const Stop = require('../models/Stop');
const Route = require('../models/Route');

module.exports = {
    async store(req, res) {
        const { route_id } = req.params;
        const { stop_point } = req.body;

        const route = await Route.findByPk(route_id);

        if (!route) {
            return res.status(400).json({ error: "Route not found" })
        }

        const stop = await Stop.create({ stop_point, route_id });

        return res.json(stop);
    },

    async index(req, res) {
        const { route_id } = req.params;

        const route = await Route.findByPk(route_id, {
            include: {
                association: 'stops'
            }
        });

        if (!route) {
            return res.status(400).json({ error: "Route not found" })
        }

        return res.json(route);
    }
}