'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Topics', {
      topic_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topic_date: {
        type: Sequelize.DATETIME
      },
      topic_subject: {
        type: Sequelize.STRING
      },
      topic_by: {
        type: Sequelize.STRING
      },
      topic_cat: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Topics');
  }
};