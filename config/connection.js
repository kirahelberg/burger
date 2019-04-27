// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wpxoeowa22ecvhtz",
  password: "ve6jxkkm6d1qaaqt",
  database: "e4xcpr1f5ctkxajh"
});

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
