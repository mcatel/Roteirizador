import { Sequelize } from 'sequelize';
import config from './config';
import Route from '../models/Route';
import Stop from '../models/Stop';

const connection = new Sequelize(config);

Route.init(connection);
Stop.init(connection);

Stop.associate(connection.models);
Route.associate(connection.models);

export default connection;
