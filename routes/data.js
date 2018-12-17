var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();
var spotify = require('../data/spotify.json');

/* GET user profile. */
/* router.get('/spotify', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('spotify', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  });
}); */

router.get('/spotify', function (req, res, next) {
  var json = spotify;
  res.send(spotify);
});

module.exports = router;
