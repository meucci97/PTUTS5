const express = require('express');
const router = express.Router();
var features = require('../services/features');
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

router.get('/accidents', function (req, res){
  // Check if the client asked for json
  if (req.accepts('application/json')) {
    features.select(100)
      .then(function(results) {
        var accidents = results.rows;
        var attrToSort = req.query.attrSort;
        console.log(req.query.sort === 'A');
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

router.get('/testSort', function(req, res){
  var acci = features.getData();
  var attrToSort = req.query.attrSort;
  var sorted = (req.query.sort === 'A') ? sorts.mergingSort(acci, attrToSort) : sorts.selectionSort(acci);
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
