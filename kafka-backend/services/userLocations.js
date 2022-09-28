const UserLocations = require("../models/UserLocationsModel");

function handle_request(msg, callback) {
  UserLocations.find({ userId: msg }, (error, doc) => {
    if (error) {
      callback(error, "Error");
    } else {
      callback(null, doc);
    }
  });
}

exports.handle_request = handle_request;
