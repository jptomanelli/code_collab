'use strict';
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1,15],
        notEmpty: true,
        is: ["^[a-z]+$",'i'],
      },
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1,15],
        notEmpty: true,
        is: ["^[a-z]+$",'i'],
      },
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [3,20],
        isUnique: function(value, next) {
          User.find({ where: {username: value} })
          .then(function (user) {
            if (user && this.id !== user.id) {
              return next('Username already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          });
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
        len: [7,20],
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
        len: [3,25],
        isUnique: function(value, next) {
          User.find({ where: {email: value} })
          .then(function (user) {
            if (user && this.id !== user.id) {
              return next('Email already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          });
        },
      },
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
