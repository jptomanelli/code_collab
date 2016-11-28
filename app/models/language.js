'use strict';
module.exports = function(sequelize, DataTypes) {
  var language = sequelize.define('language', {
    lang_Name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return language;
};