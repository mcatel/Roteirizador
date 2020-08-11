const Route = require('../models/Route')

module.exports = {
    async store(req, res) {
        const { start_point } = req.body;

        const route = await Route.create({ start_point });

        return res.json(route);
    },

    async index(req, res) {
        const routes = await Route.findAll();

        return res.json(routes);
    }
}