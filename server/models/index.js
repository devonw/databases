var dbConnection = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      var query = "SELECT users.username, messages.message FROM messages INNER JOIN users ON users.userID = messages.user";
      dbConnection.query(query, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (dat) {
      
      var post = dat.split('&').map(function(item){
        return item.split('=');
      });
      var singleMessage = post[1][1].replace(/\+/g, ' ');
      var username = post[0][1];
      var roomname = post[2][1];
      console.log('sM', singleMessage);
      var query = "INSERT INTO messages(room,user,message) VALUES('1','1','thishousldwork')";
      // var query = "INSERT INTO messages(room,user,message) VALUES(" + 1 + "," + 1 + "," + 1 + ")";
      dbConnection.query(query);
      // dbConnection.query(query, function(err, results) {
      //   console.log('Query supposedly inserted');
        // callback(results);
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

