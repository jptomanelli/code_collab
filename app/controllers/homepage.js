
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
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
