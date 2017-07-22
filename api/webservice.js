var express    = require('express');
var http       = require('http');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');

var api        = express();
var server     = http.createServer(api);

// middlewares
api.use(morgan('dev'));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

//cors
// var cors = require('cors');
//
// api.use(cors({
//   origin: function (origin, callback){
//     var index = isAllow.index(origin);
//     (index !== -1) ? callback(null, index);
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE']
// }));

//hardcore mode
api.use(function(request, response, next){
  response.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  response.header('Access-Control-Allow-Headers', 'Autorization, X-Request, CustomHeader');
  response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
});

var mongoDb = mongoose.connect('mongodb://127.0.0.1/best-customers').connection;

mongoDb.on('connected', function() {
  console.log('MongoDB was connected');
});

mongoDb.on('error', function() {
  console.log('MongoDB connection error');
});

require('./routes')(api);

server.listen(8080, function() {
  console.log('Express has been started, listen in :8080');
});
