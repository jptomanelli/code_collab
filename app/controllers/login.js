//  Login controller
//  Page where a user can sign in

var express = require('express');
var router = express.Router();

//  need to send to views
router.get('/', function(req,res){
  res.render('login');
});


module.exports = router;
