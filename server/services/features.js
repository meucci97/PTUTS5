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

let regions = [
  {
    "label": "Alsace",
    "departments": [670,680]
  },
  {
    "label": "Aquitaine",
    "departments": [240,330,400,470,640]
  },
  {
    "label": "Auvergne",
    "departments": [30,150,420,630]
  },
  {
    "label": "Basse-Normandie",
    "departments": [140,500,610]
  },
  {
    "label": "Bourgogne",
    "departments": [210,580,710,890]
  },
  {
    "label": "Bretagne",
    "departments": [220,290,350,560]
  },
  {
    "label": "Centre",
    "departments": [180,280,360,370,410,450]
  },
  {
    "label": "Champagne-Ardenne",
    "departments": [80,100,510,520]
  },
  {
    "label": "Corse",
    "departments": [201,202]
  },
  {
    "label": "Franche-Comté",
    "departments": [250,390,700,900]
  },
  {
    "label": "Haute-Normandie",
    "departments": [270,760]
  },
  {
    "label": "Île-de-France",
    "departments": [750,770,780,910,920,930,940,950]
  },
  {
    "label": "Languedoc-Roussillon",
    "departments": [110,300,340,480,660]
  },
  {
    "label": "Limousin",
    "departments": [190,230,870]
  },
  {
    "label": "Lorraine",
    "departments": [540,550,570,880]
  },
  {
    "label": "Midi-Pyrénées",
    "departments": [90,120,310,320,460,650,810,820]
  },
  {
    "label": "Nord-Pas-de-Calais",
    "departments": [590,620]
  },
  {
    "label": "Pays de la Loire",
    "departments": [440,490,530,720,850]
  },
  {
    "label": "Picardie",
    "departments": [20,600,800]
  },
  {
    "label": "Poitou-Charentes",
    "departments": [160,170,790,860]
  },
  {
    "label": "Provence-Alpes-Côte-d'Azur",
    "departments": [40,50,60,130,830,840]
  },
  {
    "label": "Rhône-Alpes",
    "departments": [10,70,260,380,420,690,730,640]
  }
];


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
      return countByCollision(result.rows);
    })
    .catch(function(err){
      return {"err": err};
    });
};

exports.graph4 = function(dateStart, dateEnd) {
  return features.graph4(dateStart, dateEnd)
    .then(function(result){
      return countByRegion(result.rows);
    })
    .catch(function(err){
      return {"err": err};
    });
};

exports.graph2 = function(monthStart, monthEnd, years) {
  return features.graph2(monthStart, monthEnd, years)
    .then(function(result){
      let date, yearData, filteredByYear, filteredByDate, returnData = [];

      years.forEach(function(year){
        date = new Date(year+"-"+monthStart+"-01");
        filteredByYear = result.rows.filter(filterYear(year));

        yearData = {
          "label" : year,
          "count" : filteredByYear.length,
          "data" : []
        };

        do{
          filteredByDate = filteredByYear.filter(filterDate(date));

          yearData.data.push({
            "label": date.toISOString().substring(0, 10),
            "count" : filteredByDate.length
          });

          date.setDate(date.getDate() + 1);
        } while (date.getMonth()+1 <= monthEnd);
        returnData.push(yearData);
      });

      return returnData;
    })
    .catch(function(err){
      return {"err": err};
    });
};

function filterDate(date) {
  return function(item){
    return item["NUM_ACC"].startsWith(date.getFullYear()) && item["MOIS"] === date.getMonth()+1 && item["JOUR"] === date.getDate();
  }
}

function countByRegion (data) {
  let result = [], filteredByRegion= [];

  regions.forEach(function(region) {
    filteredByRegion = data.filter(filterDepartments(region.departments));
    result.push({
      "label": region.label,
      "count" : filteredByRegion.length
    });
  });

  return result;
}

function filterDepartments(departments) {
  return function(item) {
    return departments.indexOf(item["DEPA"]) !== -1;
  };
}

function filterYear(year) {
  return function(item) {
    return item["NUM_ACC"].startsWith(year);
  };
}

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
      "label": i,
      "count" : filteredByHour.length,
      "data" : countByType(filteredByHour)
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
      "label": collisions[collision],
      "count" : filteredByCollision.length,
      "data" : countByType(filteredByCollision)
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
          "label": "Sans Gravité",
          "count": data.filter(function(item){return item['GRAV'].indexOf("4") === -1 && item['GRAV'].indexOf("3") === -1 && item['GRAV'].indexOf("2") === -1}).length
        }
      );
    } else if (i === 1) {
      filtered.push(
        {
          "label": "Leger",
          "count": data.filter(function(item){return item['GRAV'].indexOf("4") === -1 && item['GRAV'].indexOf("3") === -1 && item['GRAV'].indexOf("2") !== -1}).length
        }
      );
    } else if (i === 2) {
      filtered.push(
        {
          "label": "Grave",
          "count": data.filter(function(item){return item['GRAV'].indexOf("4") === -1 && item['GRAV'].indexOf("3") !== -1}).length
        }
      );
    } else if (i === 3) {
      filtered.push(
        {
          "label": "mortel",
          "count": data.filter(function(item){return item['GRAV'].indexOf("4") !== -1}).length
        }
      );
    }

  }

  return filtered;
}

