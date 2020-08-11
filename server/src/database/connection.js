const { Sequelize } = require('sequelize');

const dbConfig = require('./config');
const Route = require('../models/Route');
const Stop = require('../models/Stop');

const connection = new Sequelize(dbConfig);

Route.init(connection);
Stop.init(connection);

Stop.associate(connection.models);
Route.associate(connection.models);

module.exports = connection;