require('dotenv').config();
var express = require('express');
var path = require('path');
var app = express();
var addStudent = require('./routes/addStudent');
var bodyParser = require('body-parser');
const LOCALPORT = 3000;
var portDecision = process.env.PORT || LOCALPORT;

// app.get('/', function (req, res) {
//   res.sendFile(path.resolve('./public/index.html'));
// });
//
// app.use(express.static('./'));
//
// app.set('port', process.env.PORT || 3000);
// app.listen(app.get('port'), function () {
//   console.log('Listening on port ', app.get('port'));
// });

//Serve static files
app.use(express.static('public'));

app.use('/', bodyParser)

//Index.html route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// app.use('/addStudent', addStudent);

app.listen(portDecision, function() {
  console.log("Listening on port ", portDecision);
});
