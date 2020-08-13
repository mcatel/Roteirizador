const express = require('express');
const routes = express.Router();

const RouteController = require('./controllers/RouteController');
const StopController = require('./controllers/StopController');

routes.post('/routes', RouteController.store);
routes.get('/routes', RouteController.index);

routes.get('/routes/:route_id/stops', StopController.index);

module.exports = routes;