var express = require('express');
var http = require('http');

var app = express();
app.get('/img/gamecontents', function (req, response, next) {
  // console.log(req.headers);
  var options = {
    headers: {
      company: req.headers.company,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    hostname: 'api1.fhwcai.com',
    port: '8880',
    path: '/api/img/gamecontents'
  };
  http.get(options, function (res) {
    // console.info(res);
    var data = '';
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on('end', function () {
      try {
        var parsedData = JSON.parse(data);
        response.send(parsedData);
      } catch (e) {};
    });
  });
});
app.listen(3000, function () {
  console.log('服务启动了');
});