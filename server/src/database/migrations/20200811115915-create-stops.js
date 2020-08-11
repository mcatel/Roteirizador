'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stops', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      route_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'routes',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      },
      stop_point: {
        type: Sequelize.GEOGRAPHY('POINT'),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stops');
  }
};
