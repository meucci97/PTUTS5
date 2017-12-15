const express = require('express');
const router = express.Router();

let response = {
  status: 200,
  data: [],
  message: null
};

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

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