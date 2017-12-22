var oracledb = require('oracledb');
var dbConfig = require('./index.js');

exports.select = function (query = '') {
  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        query,
        []  // bind value for :id
        , {
          outFormat: oracledb.OBJECT  // query result format
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
