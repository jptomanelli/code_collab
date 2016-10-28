var express = require('express');
var router = express.Router();
var passport = require('../middlewares/auth');

router.get('/', function(req,res){
  res.render('login', { error: req.flash('error') });
});

router.post('/', function(req,res) {
  passport.authenticate('local', {
    successRedirect: '/account',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: true
  })(req,res);
});

module.exports = router;
