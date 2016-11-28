isUnique = (modelName, field) => {
  return (value, next) => {
    let Model = require("../models")[modelName];
    let query = {};
    query[field] = value;
    Model.find({where: query, attributes: ["id"]})
      .then( (obj) => {
        if (obj) {
          next(field + ' "' + value + '" is already in use');
        } else {
          next();
        }
    });
  };
}
module.exports = isUnique;
