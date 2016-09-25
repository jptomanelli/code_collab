//  Signup information
//  User can sign up here

var express = require('express');
var router = express.Router();

//  need to send to views
router.get('/', function(req,res){
  res.render('signup');
});


module.exports = router;
