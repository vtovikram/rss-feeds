const express = require('express');
var request = require("request");

const app = express();
const port = process.env.PORT || 5000;

var options = {};

app.get('/api/backchannel', (req, res) => {
  options.url = `https://medium.com/feed/backchannel`
  request(options, function(error, response, body) {
    res.send({ backchannel: body });
    });

});
app.get('/api/matter', (req, res) => {
  options.url = `https://medium.com/feed/matter`
  request(options, function(error, response, body) {
    res.send({ matter: body });
    });

});
app.get('/api/economist', (req, res) => {
  options.url = `https://medium.com/feed/the-economist`
  request(options, function(error, response, body) {
    res.send({ economist: body });
    });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
