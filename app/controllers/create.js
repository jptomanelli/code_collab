//  Create controller
//  User would be able to create a post here

var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('create');
});

module.exports = router;
