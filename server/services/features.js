'use strict';
// var Promise = require('bluebird');
// var Rates = Promise.promisifyAll(require('../database/rates'));

// Generate fake data for Stefano and Cyprien <3
exports.getData = function() {
  var data = [
    {
      "num_acc" : 20,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 10,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 15,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 19,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 150,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 45,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 2,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 50,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 15,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    }
  ];
  return data;
};
exports.findOneByQuery = function(query) {
  return Rates.findOneAsync(query);
};

exports.find = function(query) {
  var data = [
    {
      "num_acc" : 1,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 1,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    },
    {
      "num_acc" : 1,
      "mois" : 1,
      "jour" : 1,
      "hrmn" : 1,
      "lum" : 1,
      "isAgglo" : 1,
      "inter" : 1,
      "atm" : 1,
      "col" : 1,
      "com" : 1,
      "dep" : 1
    }
  ];
  return Rates.findAsync(query);
};