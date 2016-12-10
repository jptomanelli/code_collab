const express = require('express');
const router = express.Router();
const passport = require('../middlewares/auth');

router.get('/', (req,res) => {
  res.render('login', { error: req.flash('error') });
});

router.post('/', function(req,res) {
  passport.authenticate('local', {
    successRedirect: '/posts',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: true
  })(req,res);
});

module.exports = router;
