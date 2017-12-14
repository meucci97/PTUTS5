const express = require('express');
const router = express.Router();
var fakeData = require('../services/fakedata');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send(fakeData.getData())
});

module.exports = router;
