'use strict';
var features = require('../database/features');
let types = {
  1:"Sans Gravite",
  2:"Mortel",
  3:"Grave",
  4:"Leger"
};


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

function countByHours (data) {
  let result = [], filteredByHour = [];
  let hour, i;

  for (i = 0; i < 24; i++) {
    hour = i.toString();
    filteredByHour = data.filter(filterHours(hour));
    result[i] = {
      "hour": i,
      "nb" : filteredByHour.length,
      "types" : countByType(filteredByHour)
    };
  }

  return result;
}

function countByType(data) {
  let i, filtered = [];
  for(i = 0; i < 4; i++) {
    if(i === 0) {
      filtered.push(
        {
          "type": "Sans Gravité",
          "nb": data.filter(function(item){return item['GRAV'].indexOf("4") === -1 && item['GRAV'].indexOf("3") === -1 && item['GRAV'].indexOf("2") === -1}).length
        }
      );
    } else if (i === 1) {
      filtered.push(
        {
          "type": "Leger",
          "nb": data.filter(function(item){return item['GRAV'].indexOf("4") === -1 && item['GRAV'].indexOf("3") === -1 && item['GRAV'].indexOf("2") !== -1}).length
        }
      );
    } else if (i === 2) {
      filtered.push(
        {
          "type": "Grave",
          "nb": data.filter(function(item){return item['GRAV'].indexOf("4") === -1 && item['GRAV'].indexOf("3") !== -1}).length
        }
      );
    } else if (i === 3) {
      filtered.push(
        {
          "type": "mortel",
          "nb": data.filter(function(item){return item['GRAV'].indexOf("4") !== -1}).length
        }
      );
    }

  }

  return filtered;
}

