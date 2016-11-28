//  Post information
//  This is for individual posts
//  This page will need post data to fill

const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');
const router = express.Router();

//  need to send to views
router.get('/', (req,res) => {
  models.Posts.findAll().then((posts) => {
    res.render('posts', {posts});
  });
});

router.get('/:title', (req, res) => {
  res.send('Title: ' + req.params.title);
});

module.exports = router;
