var models = require('../models');


var defaultCorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Max-Age': 10
}


module.exports = {
  messages: {
    get: function (req, res) {
       models.messages.get(function(queryData){
         // res.writeHead(200, {origin: 'http://127.0.0.1:3000/'});
         // res.header(defaultCorsHeaders);
         // res.writeHead(200, defaultCorsHeaders);
         res.send({results : queryData});
       })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('reqbody', req.body);
      // console.log('requser', req.body.username)
      // res.send(req);
      // models.messages.post(function(queryData){
      //   // res.send({results : queryData});
      // })
      var dat = '';
      req.on('data', function(data){
        dat+=data;
      });
      req.on('end', function(){
        models.messages.post(dat);
        // var post = dat.split('&').map(function(item){
        //   return item.split('=');
        // });
        // var singleMessage = post[1][1].replace(/\+/g, ' ');
        // var username = messages[0][1];
        // var roomname = messages[2][1];
      })
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

