var express = require('express');
var router = express.Router();
var path = require('path');
var viewpath = path.join(__dirname,'/../views')

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.sendFile(path.join(viewpath,'/index.html'));
});

module.exports = router;
