//  Post information
//  This is for individual posts
//  This page will need post data to fill

var express = require('express');
var router = express.Router();

//  need to send to views
router.get('/', function(req,res){
  res.render('post');
});


module.exports = router;
