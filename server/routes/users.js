var express = require('express');
var router = express.Router();
var connection = require('../config/db-connection');

/* GET all blogs. */
router.get('/api/all', function(req, res, next) {
  var dbQuery = "SELECT * FROM blogs";

  connection.query(dbQuery, function(err, result) {
    if (err) throw err;
    res.json(result);
  })
});

router.get('/api/new', function(req, res) {
  console.log("New blog entry: ");
  console.log(req.body);

  var dbQuery = "INSERT INTO blogs (title, body, create_at) VALUES(?,?,?)";

  connection.query(dbQuery, [req.body.title, req.body.body, req.body.create_at],
    function(err, result) {
      if (err) throw err;
      console.log("Successfully uploaded blog");
      res.send();
    })
});

module.exports = router;