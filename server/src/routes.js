const express = require('express');
const routes = express.Router();

const RouteController = require('./controllers/RouteController');

routes.post('/routes', RouteController.store);

module.exports = routes;