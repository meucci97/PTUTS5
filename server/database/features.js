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
         FROM caracteristique ` + queryStringAndValue.string,
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

exports.graph1 = function (dateStart, dateEnd) {
let query =
  "SELECT *       " +
  "FROM caracteristique " +
  "WHERE  ( ( jour >= " + dateStart[0] + " AND MOIS <= " + dateStart[1] + " ) " +
  "OR ( jour <= " + dateEnd[0] + " AND MOIS >= " + dateEnd[1] + " ) ) " +
  "AND ( num_acc LIKE '" + dateStart[2] + "%' OR num_acc LIKE '" + dateEnd[2] + "%' ) ";


  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        query
        ,
        []  // bind value for :id
        , {
          maxRows: parseInt(1000000)
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
