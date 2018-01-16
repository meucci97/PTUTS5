var oracledb = require('oracledb');
var dbConfig = require('./index.js');

function durationCondition(dateStart, dateEnd){
  let monthStart = dateStart.getMonth()+1;
  let monthEnd = dateEnd.getMonth()+1;
  let condition = "";

  // year condition
  if(dateStart.getFullYear() === dateEnd.getFullYear()) {
    condition = " caracteristique.num_acc LIKE '" + dateStart.getFullYear() + "%' ";

    if(dateStart.getMonth() === dateEnd.getMonth()) {
      condition += " AND mois = " + monthStart;

      if(dateStart.getDate() === dateEnd.getDate()) {
        condition += " AND jour = " + dateStart.getDate();
      } else {
        condition += " AND jour >= " + dateStart.getDate() + " AND jour <= " + dateEnd.getDate()
      }

    } else {
      condition += " AND ( ";
      condition += " ( mois = " + monthStart + " AND jour >= " + dateStart.getDate() + " ) ";
      condition += " OR ( mois > " + monthStart + " AND mois < " + monthEnd + " ) ";
      condition += " OR ( mois = " + monthStart + " AND jour <= " + dateEnd.getDate() + " ) ";
      condition += " ) ";
    }

  } else {
    // create condition for first year
    condition += " ( " +
      " caracteristique.num_acc LIKE '" + dateStart.getFullYear() + "%' " +
      " AND ( " +
      " ( mois = " + monthStart + " AND jour >= " + dateStart.getDate() + " ) " +
      " OR ( mois > " + monthStart + " )" +
      " ) " +
      " ) ";

    // condition for the last year
    condition += " OR ( " +
      " caracteristique.num_acc LIKE '" + dateEnd.getFullYear() + "%' " +
      " AND ( " +
      " ( mois = " + monthEnd + " AND jour <= " + dateEnd.getDate() + " ) " +
      " OR ( mois < " + monthEnd + " ) " +
      " ) " +
      " ) ";

    // check if we have at least 1 year between start year and end year
    if(dateEnd.getFullYear() !== dateStart.getFullYear()+1){
      let i;
      for(i = dateStart.getFullYear()+1; i < dateEnd.getFullYear(); i++) {
        condition += " OR caracteristique.num_acc LIKE '" + i + "%' "
      }
    }
  }

  return condition;
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
    "WHERE " + durationCondition(dateStart, dateEnd) +
    "GROUP BY USAGER.NUM_ACC,HRMM";

console.log(query);
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
    "WHERE " + durationCondition(dateStart, dateEnd);

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
    "WHERE " + durationCondition(dateStart, dateEnd) +
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
