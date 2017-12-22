const express = require('express');
const router = express.Router();
var features = require('../services/features');
var vehicles = require('../services/vehicles');
var users = require('../services/users');
var places = require('../services/places');
var sorts = require('../services/sorts');

let response = {
  status: 200,
  data: [],
  message: null
};

/* GET api listing. */
router.get('/', function (req, res) {
  res.send('toto')
});

router.get('/test-database', function (req, res) {
  console.log('features : ');
  var toto = require('../database/features');
  console.log('features : '+toto);
  res.send(toto)
});

router.get('/accidents', function (req, res){
  // Check if the client asked for json
  if (req.accepts('application/json')) {
    /*
    var query = {
      "MOIS" : "1",
      "DEPA" : {"toto":590,"tota":620}
    };*/
    features.select(req.query.query,req.query.limit)
      .then(function(results) {
        var accidents = results.rows;
        // TODO put this in a function
        var attrToSort = req.query.attrSort;
        var sorted = (req.query.sort === 'A') ? sorts.mergingSort(accidents, attrToSort) : sorts.selectionSort(accidents, attrToSort);
        res.send(sorted);
      })
      .catch(function (err) {
        res.status(500).send({err: err});
      });
  }
  else {
    res.status(406).send({err: 'Not valid type for asked resource'});
  }
});

router.get('/vehicules', function (req, res){
  // Check if the client asked for json
  if (req.accepts('application/json')) {
    vehicles.select(req.query.query,req.query.limit)
      .then(function(results) {
        var vehicles = results.rows;
        // TODO put this in a function
        var attrToSort = req.query.attrSort;
        var sorted = (req.query.sort === 'A') ? sorts.mergingSort(vehicles, attrToSort) : sorts.selectionSort(vehicles, attrToSort);
        res.send(sorted);
      })
      .catch(function (err) {
        res.status(500).send({err: err});
      });
  }
  else {
    res.status(406).send({err: 'Not valid type for asked resource'});
  }
});

router.get('/usagers', function (req, res){
  // Check if the client asked for json
  if (req.accepts('application/json')) {
    users.select(req.query.query,req.query.limit)
      .then(function(results) {
        var vehicles = results.rows;
        // TODO put this in a function
        var attrToSort = req.query.attrSort;
        var sorted = (req.query.sort === 'A') ? sorts.mergingSort(vehicles, attrToSort) : sorts.selectionSort(vehicles, attrToSort);
        res.send(sorted);
      })
      .catch(function (err) {
        res.status(500).send({err: err});
      });
  }
  else {
    res.status(406).send({err: 'Not valid type for asked resource'});
  }
});

router.get('/lieux', function (req, res){
  // Check if the client asked for json
  if (req.accepts('application/json')) {
    places.select(req.query.query,req.query.limit)
      .then(function(results) {
        var vehicles = results.rows;
        // TODO put this in a function
        var attrToSort = req.query.attrSort;
        var sorted = (req.query.sort === 'A') ? sorts.mergingSort(vehicles, attrToSort) : sorts.selectionSort(vehicles, attrToSort);
        res.send(sorted);
      })
      .catch(function (err) {
        res.status(500).send({err: err});
      });
  }
  else {
    res.status(406).send({err: 'Not valid type for asked resource'});
  }
});

router.get('/testSort', function(req, res){
  var acci = features.getData();
  var attrToSort = req.query.attrSort;
  var sorted = (req.query.sort === 'A') ? sorts.mergingSort(acci, attrToSort) : sorts.selectionSort(acci, attrToSort);
  //console.log(sorted);
  res.send(sorted);
})

router.get('/posts', (req, res) => {
  console.log("titi");
  response.data.push(["titi"]);
  response.data.push(["titi","tata"]);
  res.json(response);

});

router.get('/toto', (req, res) => {
  console.log("toto");
  console.log(req.param('id'))
  response.data.push(["titi"]);
  response.data.push(["titi","tata"]);
  res.json(response);

});

module.exports = router;
