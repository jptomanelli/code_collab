//  Signin information

var express = require('express');
var router = express.Router();

//  need to send to views
router.get('/', function(req,res){
  res.render('signin');
});


module.exports = router;
