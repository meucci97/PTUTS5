'use strict';
let testDB = require('../database/testDB');

exports.select = function(query, limit) {
  return testDB.select(query, limit)
    .then(function(result){
      return result;
    })
    .catch(function(err){
      console.log(err);
      return {};
    });
};
