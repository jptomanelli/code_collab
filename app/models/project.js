'use strict';
module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define('project', {
    project_Subject: DataTypes.STRING,
    project_Descr: DataTypes.STRING,
    project_Date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    }
  });
  return project;
};