var oracledb = require('oracledb');
var dbConfig = require('./index.js');

function periodeCondition(dateStart, dateEnd){
 return "( ( jour >= " + dateStart[0] + " AND MOIS <= " + dateStart[1] + " ) " +
  "AND ( jour <= " + dateEnd[0] + " AND MOIS >= " + dateEnd[1] + " ) ) " +
  "AND ( caracteristique.num_acc LIKE '" + dateStart[2] + "%' OR caracteristique.num_acc LIKE '" + dateEnd[2] + "%' ) ";
}

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
    "SELECT USAGER.NUM_ACC, HRMM, LISTAGG(USAGER.GRAV, ',') WITHIN GROUP (ORDER BY USAGER.GRAV) AS GRAV " +
    "FROM caracteristique JOIN USAGER ON CARACTERISTIQUE.NUM_ACC = USAGER.NUM_ACC " +
    "WHERE " + periodeCondition(dateStart, dateEnd) +
    "GROUP BY USAGER.NUM_ACC,HRMM";


  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        query
        ,
        []  // bind value for :id
        , {
          maxRows: parseInt(0)
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

exports.graph4 = function (dateStart, dateEnd) {
  let query =
    "SELECT NUM_ACC, DEPA " +
    "FROM caracteristique " +
    "WHERE " + periodeCondition(dateStart, dateEnd);

  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        query
        ,
        []  // bind value for :id
        , {
          maxRows: parseInt(0)
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

exports.graph5 = function (dateStart, dateEnd) {
  let query =
    "SELECT USAGER.NUM_ACC, COL, LISTAGG(USAGER.GRAV, ',') WITHIN GROUP (ORDER BY USAGER.GRAV) AS GRAV " +
    "FROM caracteristique JOIN USAGER ON CARACTERISTIQUE.NUM_ACC = USAGER.NUM_ACC " +
    "WHERE " + periodeCondition(dateStart, dateEnd) +
    "GROUP BY USAGER.NUM_ACC, COL";


  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        query
        ,
        []  // bind value for :id
        , {
          maxRows: parseInt(0)
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

exports.graph2 = function (monthStart, monthEnd, years) {
  let query =
    "SELECT NUM_ACC, MOIS, JOUR " +
    "FROM caracteristique " +
    "WHERE mois >= " + monthStart + " AND mois <= " + monthEnd;

  query += " AND ( 1=0 ";
  years.forEach(function (year) {
    query += " OR num_acc LIKE '" + year + "%'";
  });
  query += " ) ";

  return dbConfig.connect
    .then(function (conn) {
      return conn.execute(
        query
        ,
        []  // bind value for :id
        , {
          maxRows: parseInt(0)
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
