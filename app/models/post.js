'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    post_Content: DataTypes.STRING,
    cat_Date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        

      }
    }
  });
  return post;
};