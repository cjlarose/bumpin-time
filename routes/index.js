var express = require('express');
const checkCookie = require('../cookie_based_authentication');

var router = express.Router();

/* GET home page. */
router.get('/', checkCookie, function(req, res, next) {
  var wokeMac = req.signedCookies.wokeMac;
  if (wokeMac) {
    res.clearCookie('wokeMac');
    res.render('index', { wokeMac });
  } else {
    res.render('index');
  }
});

module.exports = router;
