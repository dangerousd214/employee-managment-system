const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "L33td00td$",
  database: "employees"
});

connection.connect(function(err){
  if(err){
    console.error("error connecting: " + err.stack);
    return;
  }
});

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
