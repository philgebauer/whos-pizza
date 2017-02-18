var express = require('express');
var router = express.Router();
var config = require('../config/config');
var pg = require('pg');

var pool = new pg.Pool(config);




router.post('/', function(req, res) {
  console.log(req.body);
  pool.connect()
  .then(function(client) {
    client.query('INSERT INTO signup (name)' + [req.body.studentName])
    .then(function(result) {
      client.release();
      console.log('Client add successful');
      res.sendStatus(200);
    })
    .catch(function(err) {
      console.log("Query error adding student to DB");
      client.release();
      res.sendStatus(500);
    })
  })
});

module.exports  = router;
