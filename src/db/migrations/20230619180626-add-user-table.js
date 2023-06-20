'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      login: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
