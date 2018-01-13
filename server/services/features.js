'use strict';
var features = require('../database/features');

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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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

exports.select = function(query, limit) {
  return features.select(query, limit)
    .then(function(result){
      return result;
    })
    .catch(function(err){
      return {};
    });
};

exports.graph1 = function(dateStart, dateEnd) {
  return features.graph1(dateStart, dateEnd)
    .then(function(result){
      return countByHours(result.rows);
    })
    .catch(function(err){
      return {"err": err};
    });
};

/* Return the right filter for hour */
function filterHours(hour) {
  let filter;

  if(hour.length === 2){
    filter = function(item) {
      return item["HRMM"].length === 4 && item["HRMM"].startsWith(hour);
    };
  } else if(hour !== "0") {
    filter = function(item) {
      return item["HRMM"].length === 3 && item["HRMM"].startsWith(hour);
    };
  } else {
    filter = function(item) {
      return item["HRMM"].length === 2 || item["HRMM"].length === 1;
    };
  }

  return filter;
}

let countByHours = function (data) {
  let filtered = [];
  let hour, i;

  for (i = 0; i < 24; i++) {
    hour = i.toString();

    filtered[i] = { "hour": i, "nb" : data.filter(filterHours(hour)).length};
  }

  return filtered;
};

