var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();
var spotify = require('../data/spotify.json');
var http = require('http');
var request = require('request');

/* GET user profile. */
/* router.get('/spotify', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('spotify', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  });
}); */


/* var options = {
  host: 'last.fm',
  port: 80,
  path: '/2.0/?method=chart.gettopartists&api_key=bef6bf8f48cda397d2e97e13dd6ed6de&format=json',
  method: 'POST'
};

http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
  router.get('/spotify', function (req, res, next){
    res.send();
  });
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
}).end(); */

/* router.get('/charts/lastfm', function (req, res, next) {
  var json = spotify;
  res.send(spotify);
});*/

router.get('/charts/lastfm', function (req, res, next) {
  res.render('lastfm', { title: 'Last.FM' });
});

router.get('/charts/mixed', function (req, res, next) {
  res.render('mixed', { title: 'Mixed' });
});

module.exports = router;
