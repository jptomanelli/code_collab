'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cat_name: {
        type: Sequelize.STRING
      },
      cat_description: {
        type: Sequelize.STRING
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Categories');
  }
};