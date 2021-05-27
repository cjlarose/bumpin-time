var express = require('express');
var wol = require('wake_on_lan');
var router = express.Router();

var mac = process.env.WOL_MAC;

router.post('/', function(req, res, next) {
  if (!mac) {
    res.status(500);
    res.send('No MAC configured');
    return;
  }
  wol.wake(mac);
  res.send('up!');
});

module.exports = router;
