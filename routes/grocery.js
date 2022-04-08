var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('grocery', { title: 'Search results Grocery' });
});

module.exports = router;
