const DishTypes = require("../models/DishTypesModel");

function handle_request(msg, callback) {
  DishTypes.find({}, (error, result) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, result);
    }
  });
}

exports.handle_request = handle_request;
