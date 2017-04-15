var models = require('../models');
var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {
      res.json({message: 'testing'});
      // app.get('/classes/messages', function(req, res){

      // })
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

