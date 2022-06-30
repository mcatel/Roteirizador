import { Sequelize } from 'sequelize';
import Route from './models/Route';
import Stop from './models/Stop';
import config from './config/config';

let connection = null;

if (config.use_env_variable) {
  connection = new Sequelize(process.env[config.use_env_variable], config);
} else {
  connection = new Sequelize(config);
}

const sequelizeConnection = connection;

const models = {
  Route: Route.init(sequelizeConnection),
  Stop: Stop.init(sequelizeConnection),
};

Object.values(models).filter(
  (model) => typeof model.associate === 'function',
).forEach((model) => model.associate(models));

export default sequelizeConnection;
