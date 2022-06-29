import { Model } from 'sequelize';

export default class Route extends Model {
  static init(sequelize) {
    return super.init({}, {
      tableName: 'routes',
      sequelize,
    });
  }

  static associate(models) {
    this.stopAssociaton = models.Route.hasMany(models.Stop, {
      foreignKey: 'route_id',
      as: 'stops',
    });
  }
}
