if(!process.env.NODE_ENV){
  process.env.NODE_ENV = 'production';
}

var config = require('./config/config');

// Init the express application
var app = require('./config/express')();

process.on('uncaughtException', function (err) {
  console.log('Error:',err);
});

// Start the app by listening on <port>
app.get('server').listen(config.port, config.hostname);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Server started on ' + config.hostname + ':' + config.port + ' in ' + process.env.NODE_ENV + ' mode');