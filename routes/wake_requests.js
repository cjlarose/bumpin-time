var express = require('express');
var wol = require('wake_on_lan');
var router = express.Router();

var mac = process.env.WOL_MAC;
var address = process.env.WOL_ADDRESS;

router.post('/', function(req, res, next) {
  if (!mac) {
    res.status(500);
    res.send('No MAC configured');
    return;
  }
  const options = { address };
  wol.wake(mac, options);
  res.send('up!');
});

module.exports = router;
