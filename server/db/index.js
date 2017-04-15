var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

console.log('heyyyyyyyyyy');
var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'NEWPASSWORD',
  database: 'chat'
});

dbConnection.connect(function() {
  console.log("Database connected");
});

module.export = dbConnection;

