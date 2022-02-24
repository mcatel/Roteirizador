import { DataTypes, Model } from 'sequelize';

class Stop extends Model {
  static init(sequelize) {
    super.init({
      stop_point: {
        type: DataTypes.GEOGRAPHY,
        allowNull: false,
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Route, {
      foreignKey: 'route_id',
      as: 'route',
    });
  }
}

export default Stop;
