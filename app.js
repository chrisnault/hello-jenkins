var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
	  res.send('hello jenkins!');
});
 
app.listen(process.env.PORT || 8999);
console.log('listening on port 8999'); 
console.log('listening on port 8999'); 
module.exports = app;
