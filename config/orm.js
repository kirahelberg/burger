// Import MySQL connection.
var connection = require("../config/connection.js");

//In the orm.js file, create the methods that will execute the necessary
//MySQL commands in the controllers. These are the methods you will need
//to use in order to retrieve and store data in your database.

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(tableName, cols, vals, cb) {
    var queryString = `INSERT INTO ${tableName}(${cols.toString()}) VALUES(${vals.toString()});`;
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(tableName, objColVals, condition, cb) {
    var queryString = `UPDATE ${tableName} SET ${objToSql(
      objColVals
    )} WHERE ${condition};`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
