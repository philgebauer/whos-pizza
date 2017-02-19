var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = require('../config/config.js');
var moment = require('moment');
moment().format();

var pool = new pg.Pool(config);

router.post('/', function(req, res) {
  var time = moment(req.body.time).toISOString();
  pool.connect()
  .then(function(client) {//connection success
    client.query('SELECT * FROM passwords WHERE password = $1', [req.body.password])
      .then(function(result) {//select password success
        if (result.rows.length >= 1) {
          console.log("Password match!");
          client.query('DELETE FROM admin')//delete all old pizza data
            .then(function(result) {//delete pizza success
              console.log("Successfully deleted old pizza");
              client.query('INSERT INTO admin (pizza_for, time, notes) VALUES ($1, $2, $3)', [req.body.who, time, req.body.notes])
                .then(function(result) {//add pizza info success
                  console.log("Successfully added pizza info");
                  res.sendStatus(200);
                  client.release();
                }).catch(function(err) {//add pizza error
                  console.log("Error adding pizza info: ", err);
                  res.sendStatus(500);
                  client.release();
                })
            }).catch(function(err) {//delete pizza error
              console.log("Error Deleting Pizza: ", err);
              res.sendStatus(500);
              client.release();
            })
        }
        else {
          console.log("Incorrect Password");
          res.send("Incorrect Password");
          client.release();
        }
      }).catch(function(err) {//password query error
        console.log("Select password query error");
        res.sendStatus(500);
        client.release();
    })
  }).catch(function(err) {//connection error
      console.log("Error connecting to the DB: ", err);
      res.sendStatus(500);
      client.release();
  });
});//end route

module.exports = router;
