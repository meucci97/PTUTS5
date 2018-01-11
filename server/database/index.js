var oracledb = require('oracledb');

var dbConfig = {
  user: "PTUTACC",
  password: "PTUTACC",
  //connectString:"(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle710.univ-lyon1.fr)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SID=ORAPEDA1)))"
  connectString:"(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SID=ORAPEDA1)))"
};

exports.connect = oracledb.getConnection(
  {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  }
);

/*
  Generate the SQL string according to query given
  example of query:
  {
      "MOIS" : "1",
      "DEPA" : [590,620],
      "DEPA" : {"toto":590,"tota":620}
  }
 */
exports.generateSQLCondition = function (query = {}) {
  var string = "";

  // Check if there is query conditions
  if (query.length !== 0) {
    // trick to always put " AND " at the beginning of the string
    string += " WHERE 1=1";
    for( var key in query) {
      var queryValue = query[key];

      // Check which kind of value it is and add it to the SQL string
      if(Array.isArray(queryValue)) {
        string += " AND " + key.toUpperCase() + " IN (" + queryValue.join() + ")";
      } else if ( queryValue instanceof Object) {
        string += " AND " + key.toUpperCase() + " IN (" + Object.values(queryValue) + ")";
      } else {
        string += " AND " + key.toUpperCase() + " = " + queryValue;
      }
    }
  }

  return string;
}
