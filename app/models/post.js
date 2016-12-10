'use strict';
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
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
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    skill: {
      type: Sequelize.STRING,
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
        models.Post.belongsTo(models.User);
        models.Post.hasMany(models.Comment);
      }
    }
  });
  return Post;
};
