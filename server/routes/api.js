const express = require('express');
const router = express.Router();
var features = require('../services/features');
var sorts = require('../services/sorts');

/* GET api listing. */
router.get('/', function (req, res) {
  res.send(features.getData())
});

router.get('/accidents', function (req, res){
  var acci = features.getData();
  var sorted = sorts.mergingSort(acci);
  res.send(sorted);
});

module.exports = router;
