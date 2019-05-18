// Set up MySQL connection.
var mysql = require("mysql");

var DB_CONFIG = process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "NY2Cali12!"
};

var connection = mysql.createConnection(DB_CONFIG);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
