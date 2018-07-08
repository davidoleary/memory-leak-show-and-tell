var restify = require('restify');
var heapdump = require('heapdump');

var server = restify.createServer();

var tasksleaky = [];

server.pre(function (req, res, next) {
  //console.log('in pre');
  tasksleaky.push(function () {
    return req.headers;
  });

  // Synchronously get user from session, maybe jwt token
  req.user = {
    id: 1,
    username: 'Leaky Master',
  };

  return next();
});

server.get('/', function (req, res, next) {
  res.send('Hi ' + req.user.username);
  return next();
});

server.listen(5001, function () {
  console.log('%s listening at %s', server.name, server.url);
  if (process.pid) {
    console.log('\nThis process is your pid ====> ' + process.pid + '\n');
  }
});