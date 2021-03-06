const express = require('express');
const router = express.Router();
let features = require('../services/features');
let vehicles = require('../services/vehicles');
let users = require('../services/users');
let places = require('../services/places');
let sorts = require('../services/sorts');
let testDB = require('../services/testDB');

let response = {
  status: 200,
  data: [],
  message: null
};

function checkDate(date) {
  let temp = date.split('-');
  return temp[0].length === 4 && temp[1].length === 2  && temp[2].length === 2;
}

/* GET api listing. */
router.get('/', function (req, res) {
  res.send('toto')
});

router.get('/graph1', function (req, res){
  let dateEnd = req.query.dateEnd;
  let dateStart = req.query.dateStart;
  if(checkDate(dateEnd) && checkDate(dateStart)){
    dateEnd = new Date(dateEnd);
    dateStart = new Date(dateStart);
  } else {
    res.status(400).send({"error": "Date invalid"});
  }
  features.graph1(dateStart,dateEnd)
    .then(function(results) {
      res.send(results);
    })
    .catch(function (err) {
      res.status(500).send({err: err});
    });
});

router.get('/graph5', function (req, res){
  let dateEnd = req.query.dateEnd;
  let dateStart = req.query.dateStart;
  if(checkDate(dateEnd) && checkDate(dateStart)){
    dateEnd = new Date(dateEnd);
    dateStart = new Date(dateStart);
  } else {
    res.status(400).send({"error": "Date invalid"});
  }
  features.graph5(dateStart,dateEnd)
    .then(function(results) {
      res.send(results);
    })
    .catch(function (err) {
      res.status(500).send({err: err});
    });
});

router.get('/graph4', function (req, res){
  let dateEnd = req.query.dateEnd;
  let dateStart = req.query.dateStart;
  if(checkDate(dateEnd) && checkDate(dateStart)){
    dateEnd = new Date(dateEnd);
    dateStart = new Date(dateStart);
  } else {
    res.status(400).send({"error": "Date invalid"});
  }
  features.graph4(dateStart,dateEnd)
    .then(function(results) {
      res.send(results);
    })
    .catch(function (err) {
      res.status(500).send({err: err});
    });
});

router.get('/graph2', function (req, res){
  let monthEnd = req.query.monthEnd;
  let monthStart = req.query.monthStart;
  let years = req.query.years;
  if(typeof years === "string") {
    years = years.split(',');
    console.log(years);
  }
  features.graph2(monthStart,monthEnd, years)
    .then(function(results) {
      res.send(results);
    })
    .catch(function (err) {
      res.status(500).send({err: err});
    });
});

router.get('/graph3', function (req, res){
  let dateEnd = req.query.dateEnd;
  let dateStart = req.query.dateStart;
  if(checkDate(dateEnd) && checkDate(dateStart)){
    dateEnd = new Date(dateEnd);
    dateStart = new Date(dateStart);
  } else {
    res.status(400).send({"error": "Date invalid"});
  }
  features.graph3(dateStart,dateEnd)
    .then(function(results) {
      res.send(results);
    })
    .catch(function (err) {
      res.status(500).send({err: err});
    });
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
        let accidents = results.rows;
        let attrToSort = req.query.attrSort;
        let sorted = (req.query.sort === 'A') ? sorts.mergingSort(accidents, attrToSort) : sorts.selectionSort(accidents, attrToSort);
        response.sortedTime = sorted.time;
        response.data = sorted.data;
        res.json(response);
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
        let vehicles = results.rows;
        let attrToSort = req.query.attrSort;
        let sorted = (req.query.sort === 'A') ? sorts.mergingSort(vehicles, attrToSort) : sorts.selectionSort(vehicles, attrToSort);
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
        let vehicles = results.rows;
        let attrToSort = req.query.attrSort;
        let sorted = (req.query.sort === 'A') ? sorts.mergingSort(vehicles, attrToSort) : sorts.selectionSort(vehicles, attrToSort);
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
        let vehicles = results.rows;
        let attrToSort = req.query.attrSort;
        let sorted = (req.query.sort === 'A') ? sorts.mergingSort(vehicles, attrToSort) : sorts.selectionSort(vehicles, attrToSort);
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
