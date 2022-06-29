import { DataTypes, Model } from 'sequelize';

export default class Stop extends Model {
  static init(sequelize) {
    return super.init({
      latitude: DataTypes.DOUBLE,
      longitude: DataTypes.DOUBLE,
    }, {
      tableName: 'stops',
      sequelize,
    });
  }

  static associate(models) {
    this.routeAssociation = models.Stop.belongsTo(models.Route, {
      foreignKey: 'route_id',
      as: 'route',
    });
  }
}
