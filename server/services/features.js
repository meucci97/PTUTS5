'use strict';
let features = require('../database/features');
let collisions = {
  1:"Deux véhicules - frontale",
  2:"Deux véhicules – par l’arrière ",
  3:"Deux véhicules – par le coté",
  4:"Trois véhicules et plus – en chaîne",
  5:"Trois véhicules et plus - collisions multiples",
  6:"Autre collision ",
  7:"Sans collision"
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

exports.graph5 = function(dateStart, dateEnd) {
  return features.graph5(dateStart, dateEnd)
    .then(function(result){
      console.log(result);
      return countByCollision(result.rows);
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

function filterCollisions(collision) {
  return function(item) {
    return item["COL"] === collision;
  };
}

function countByCollision (data) {
  let result = [], filteredByCollision = [];
  let collision, i;

  for (i = 0; i < 7; i++) {
    collision = i + 1;
    filteredByCollision= data.filter(filterCollisions(collision));
    result[i] = {
      "collision": collisions[collision],
      "nb" : filteredByCollision.length,
      "types" : countByType(filteredByCollision)
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

