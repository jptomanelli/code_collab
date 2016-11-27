'use strict';
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    text: {
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
        models.Comment.belongsTo(models.Post);
      }
    }
  });
  return Comment;
};
