'use strict';
var features = require('../database/places');


exports.select = function(query, limit) {
  return features.select(query, limit)
    .then(function(result){
      return result;
    })
    .catch(function(err){
      return {};
    });
};
