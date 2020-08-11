const { DataTypes, Model } = require('sequelize');

class Route extends Model {

    static init(sequelize) {

        super.init({
            start_point: {
                type: DataTypes.GEOGRAPHY,
                allowNull: false
            },
        }, {
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