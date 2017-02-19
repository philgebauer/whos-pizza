var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = require('../config/config');
var moment = require('moment');

var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  pool.connect()
  .then(function(client) {
    client.query('SELECT * FROM admin')
    .then(function(results) {
      res.send(results.rows);
      client.release();
    })
    .catch(function(err) {
      console.log("Query error GETtin pizza: ", err);
      res.sendStatus(500);
      client.release();
    })
  })
  .catch(function(err) {
    console.log("Error connecting to DB on GET pizza: ", err);
    res.sendStatus(500);
    client.release();
  });
});//End route






module.exports = router;
