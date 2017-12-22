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

exports.getDate = function(numAcc){
  console.log("umAcc: "+numAcc)

  var accidentDate = dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        'SELECT num_acc, mois,jour, hrmm'+
        ' FROM caracteristique ' +
        ' WHERE num_acc='+numAcc,
        []  // bind value for :id
        , {
          maxRows: 1
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
    });
  return accidentDate;
};

//genere les date de tous les accidents
exports.moulinetteDate = function(){

  //recupération de tous les num_acc
  var tabNumAcc = dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        'SELECT num_acc '+
        ' FROM caracteristique',
        []  // bind value for :id
        , { outFormat: oracledb.OBJECT  // query result format
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
    });

  console.log(tabNumAcc);
  return tabNumAcc;



}
