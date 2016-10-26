
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('homepage');
});

function validateForm() {
    if (document.form) {
     	alert("EKEK");
     	return false;
	}else{
		alert("Script not working! Abort!");
	}
}

module.exports = router;
