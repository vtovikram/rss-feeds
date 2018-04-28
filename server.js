const express = require('express');
var request = require("request");

const app = express();
const port = process.env.PORT || 5000;

var options = {};

app.get('/api/hello', (req, res) => {
  options.url = `https://medium.com/feed/backchannel`
  request(options, function(error, response, body) {
    debugger;
    res.send({ express: body });
    });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
