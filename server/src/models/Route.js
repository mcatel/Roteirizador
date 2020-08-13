const { DataTypes, Model } = require('sequelize');

class Route extends Model {

    static init(sequelize) {

        super.init({}, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Stop, {
            foreignKey: 'route_id',
            as: 'stops'
        });
    }
}

module.exports = Route;