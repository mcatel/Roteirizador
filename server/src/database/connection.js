import { Sequelize } from 'sequelize';
import config from './config';
import Route from '../models/Route';
import Stop from '../models/Stop';

const connection = new Sequelize(config);

const models = {
  Route: Route.init(connection),
  Stop: Stop.init(connection),
};

Object.values(models).filter(
  (model) => typeof model.associate === 'function',
).forEach((model) => model.associate(models));

export default connection;
