
const express = require('express');
const router = express.Router();
const models = require('../models');

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
module.exports = router;
