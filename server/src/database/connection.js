import { Sequelize } from 'sequelize';
import Route from '../models/Route';
import Stop from '../models/Stop';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const connection = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

const models = {
  Route: Route.init(connection),
  Stop: Stop.init(connection),
};

Object.values(models).filter(
  (model) => typeof model.associate === 'function',
).forEach((model) => model.associate(models));

export default connection;
