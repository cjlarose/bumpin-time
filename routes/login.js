var express = require('express');
var basicAuth = require('express-basic-auth');

var expectedPassword = process.env.PASSWORD;
if (!expectedPassword) {
  console.error('Missing PASSWORD');
  process.exit(1);
}

const auth = basicAuth({
  authorizer: (_, password) => basicAuth.safeCompare(password, expectedPassword),
  challenge: true,
  realm: 'bumpin-time',
});

var router = express.Router();

router.get('/', auth, function(req, res, next) {
  res.cookie('username', req.auth.username, { signed: true });
  res.redirect('/');
});

module.exports = router;
