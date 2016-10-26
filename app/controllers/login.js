//  Login controller
//  Page where a user can sign in

var express = require('express');
var router = express.Router();

//  need to send to views
router.get('/', function(req,res){
  res.render('login');
});


module.exports = router;

//  This is new code that isn't currently working
/*
//  Login controller
//  Page where a user can sign in

var express = require('express');
var passport = require('../middlewares/auth');
/*
var router = express.Router();

//  need to send to views
router.get('/', function(req,res){
  res.render('login');
});

router.post('/', this.login);

login = (function(req,res) {
  passport.authenticate('local', {
    successRedirect: '/account',
    failureRedirect: '/',
  })(req, res)
});

module.exports = router;

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifLoggedIn('/profile'), this.index);
    router.post('/', this.login);

    return router;
  },
  index(req, res) {
    res.render('login', { error: req.flash('error') });
  },
  login(req,res) {
    passport.authenticate('local'), function(req,res) {
      res.render('account');
    }
  },
};
*/
