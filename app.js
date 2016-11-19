var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
	  res.send('hello world');
});
 
app.listen(process.env.PORT || 8999);
 
module.exports = app;
