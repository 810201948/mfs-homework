var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res) {
  res.json([{ no: 30 , title: '1' ,clickTimes:3,replypage:5}]);
});

module.exports = router;
