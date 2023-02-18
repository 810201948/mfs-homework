var express = require('express');
var router = express.Router();
var getUsername=require('../public/javascripts/data')
var usernames=getUsername()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/usernameExist', function(req, res, next) {
//   res.json({exist:"mark"==req.body.username})
// });


router.post('/usernameExist',function(req,res,next){
  if(usernames.indexOf(req.body.username)!=-1){
    res.json({exist:true})
  }else{
    res.json({exist:false})
  }
})

module.exports = router;
