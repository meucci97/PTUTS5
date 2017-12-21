var oracledb = require('oracledb');

var dbConfig = {
  user: "PTUTACC",
  password: "PTUTACC",
  connectString:"(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle710.univ-lyon1.fr)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SID=ORAPEDA1)))"
};

exports.connect = oracledb.getConnection(
  {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  }
);
