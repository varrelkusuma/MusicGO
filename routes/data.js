var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();
var lastfm_artist = require('../data/lastfm_artist.json');
var lastfm_song = require('../data/lastfm_song.json');
var mixed_artist = require('../data/mixed_artist.json');
var mixed_song = require('../data/mixed_song.json');

/* GET user profile. */
/* router.get('/spotify', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('spotify', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  });
}); */


router.get('/charts/lastfm/lastfm_artist', function (req, res, next) {
  var json = lastfm_artist;
  res.send(lastfm_artist);
});

router.get('/charts/lastfm/lastfm_song', function (req, res, next) {
  var json = lastfm_song;
  res.send(lastfm_song);
});

router.get('/charts/mixed/mixed_artist', function (req, res, next) {
  var json = mixed_artist;
  res.send(mixed_artist);
});

router.get('/charts/mixed/mixed_song', function (req, res, next) {
  var json = mixed_song;
  res.send(mixed_song);
});

router.get('/charts/lastfm', function (req, res, next) {
  res.render('lastfm', { title: 'Last.FM' });
});

router.get('/charts/mixed', function (req, res, next) {
  res.render('mixed', { title: 'Mixed' });
});

router.get('/charts', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
