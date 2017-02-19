var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = require('../config/config.js');

var pool = new pg.Pool(config);

router.post('/', function(req, res) {
  console.log(req.body.time);
  console.log('post route hit');
  pool.connect()
  .then(function(client) {
    client.query('DELETE FROM admin')
    .then(function(result) {
      console.log("Successfully deleted previous pizza info");
      client.query('INSERT INTO admin (pizza_for, time_for_everyone, notes) VALUES ($1, $2, $3)', [req.body.who, req.body.time, req.body.notes])
      .then(function(result) {
        console.log("Successfully added new pizza info to DB");
        res.sendStatus(200);
      })
      .catch(function(err) {
        console.log("Error adding pizza info to DB: ", err);
        res.sendStatus(500);
      })
    })
    .catch(function(err) {
      console.log("Error deleting old data from pizza admin DB: ", err);
      res.sendStatus(500);
    })
  })
  .catch(function(err) {
    console.log("Error connecting to DB: ", err);
    res.sendStatus(500);
  })
});//end route

module.exports = router;
