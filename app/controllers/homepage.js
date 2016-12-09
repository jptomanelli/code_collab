
const express = require('express');
const router = express.Router();
const models = require('../models');
const passport = require('passport');


router.get('/', (req,res) => {
  res.render('homepage');
});
/*
router.get('/', (req,res) => {
  models.Post.findAll().then((posts) => {
    res.render('homepage', {posts});
  });
});
*/

router.post('/', (req,res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = router;
