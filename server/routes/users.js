var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from thenetblogz', function(error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  })
});

module.exports = router;
