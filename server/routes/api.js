const express = require('express');
const router = express.Router();
var features = require('../services/features');
var sorts = require('../services/sorts');

/* GET api listing. */
router.get('/', function (req, res) {
  res.send(features.getData())
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
    var acci = features.getData();
    var attrToSort = req.query.attrSort;
    var sorted = (req.query.sort === 'A') ? sorts.mergingSort(acci, attrToSort) : sorts.selectionSort(acci);
    res.send(sorted);
  }
  else {
    res.status(406).send({err: 'Not valid type for asked resource'});
  }
});

router.get('/testSort', function(req, res){
  var acci = features.getData();
  var attrToSort = req.query.attrSort;
  var sorted = (req.query.sort === 'A') ? sorts.mergingSort(acci, attrToSort) : sorts.selectionSort(acci);
  //console.log(sorted);
  res.send(sorted);
})

module.exports = router;
