var express = require('express');
var router = express.Router();
var path = require('path');
var viewpath = path.join(__dirname,'/../views')

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.sendFile(path.join(viewpath,'/index.html'));
});

router.get('/index', function(req, res, next) {
  	res.sendFile(path.join(viewpath,'/index.html'));
});

router.get('/dice', function(req, res, next) {
  	res.sendFile(path.join(viewpath,'/dice.html'));
});

module.exports = router;
