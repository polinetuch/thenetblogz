var mysql = require('mysql');

const connection = mysql.createConnection({
    port: "3306",
    host: "localhost",
    user: "root",
    password: "root",
    database: "thenetblogz"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return
    }
    console.log("Connected to MySQL Database " + connection.threadId)
  });

module.exports = connection;