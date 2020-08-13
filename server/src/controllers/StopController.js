const Stop = require('../models/Stop');
const Route = require('../models/Route');

module.exports = {

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