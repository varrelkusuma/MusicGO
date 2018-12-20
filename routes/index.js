var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'About' });
});

module.exports = router;
