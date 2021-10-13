function checkCookie(req, res, next) {
  if (!req.signedCookies.username) {
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = checkCookie;
