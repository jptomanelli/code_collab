//  Signup information
//  User can sign up here

var express = require('express');
const models = require('../models');
var router = express.Router();

//  need to send to views
router.get('/', function(req,res){
  res.render('signup');
});
//  Password will need to be changed to salt?
//  .then(user) => IS NOT WORKING!!!
router.post('/', function(req, res) {
  models.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then(function(User) {
      res.redirect('/account')
  }).catch((e) => {
    res.redirect('/signup');
    //  Error prints to console
    console.log(e);
  });
});

module.exports = router;
