'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
const isUnique = require('../middlewares/unique');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
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
        isUnique: isUnique("User", "username"),
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
        len: [5,20],
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
        len: [3,25],
        isUnique: isUnique("User", "email"),
        },
      },
  }, {
    classMethods: {
      associate: function(models) {
        models.User.hasMany(models.Post);
      }
    }
  });

  User.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password = hashedPw;
    })
  );

  return User;
};
