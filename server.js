// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var database = require('./server/database');

// Get our API routes
const api = require('./server/routes/api');

const app = express();


var oracledb = require('oracledb');


oracledb.getConnection(
  {
    user          : "PTUTACC",
    password      : "PTUTACC",
    connectString : "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle710.univ-lyon1.fr)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SID=ORAPEDA1)))"

  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Connection was successful!');

    connection.close(
      function(err)
      {
        if (err) {
          console.error(err.message);
          return;
        }
      });
  });

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'public')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
