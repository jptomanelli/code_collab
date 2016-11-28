'use strict';
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('Posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    link: {
      type: Sequelize.STRING,
    },
    language: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    classMethods: {
      associate: function(models) {
        //this.belongsTo(models.User, {foreignKey: 'owner_id'});
      }
    }
  });
  return Posts;
};
