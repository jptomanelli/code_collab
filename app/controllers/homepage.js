
const express = require('express');
const router = express.Router();
const models = require('../models');
const passport = require('passport');

router.get('/', (req,res) => {
  models.Post.findAll({
    limit: 3,
  }).then((posts) => {
    res.render('homepage', {posts});
  }).catch((err) => {
    res.render('homepage');
    console.log(err);
  });
});

router.post('/', (req,res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = router;
