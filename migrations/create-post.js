'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Post', {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_date: {
        type: Sequelize.DATETIME
      },
      post_content: {
        type: Sequelize.TEXT
      },
      post_by: {
        type: Sequelize.INTEGER
      },
      post_topic: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Post');
  }
};