var oracledb = require('oracledb');
var dbConfig = require('./index.js');

exports.select = function (limit = 10) {
  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        `SELECT *
         FROM caracteristique`,
        []  // bind value for :id
        , {
          maxRows: limit
          , outFormat: oracledb.OBJECT  // query result format
          , extendedMetaData: false   // get extra metadata
          //, fetchArraySize: 100         // internal buffer allocation size for tuning
        }
      ).then(function (result) {
        return result;
      }).catch(function(err){
        return err;
      });
    })
    .catch(function (err) {
      console.error(err);
      return {};
    })

};
