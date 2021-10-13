var express = require('express');
const checkCookie = require('../cookie_based_authentication');

var router = express.Router();

/* GET home page. */
router.get('/', checkCookie, function(req, res, next) {
  res.render('index');
});

module.exports = router;
