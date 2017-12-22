var oracledb = require('oracledb');
var dbConfig = require('./index.js');

exports.select = function (query = {}, limit = 10) {
  if( limit == "ALL") {
    limit = 0;
  }

  var queryStringAndValue = dbConfig.generateSQLCondition(query);

  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        `SELECT *
         FROM usagers ` + queryStringAndValue.string,
        []  // bind value for :id
        , {
          maxRows: parseInt(limit)
          , outFormat: oracledb.OBJECT  // query result format
          , extendedMetaData: false   // get extra metadata
          //, fetchArraySize: 100         // internal buffer allocation size for tuning
        }
      ).then(function (result) {
        return result;
      }).catch(function(err){
        console.log(err);
        return err;
      });
    })
    .catch(function (err) {
      console.error(err);
      return {};
    })

};
