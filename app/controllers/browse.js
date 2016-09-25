//  Browse controller

var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('browse');
});


module.exports = router;
