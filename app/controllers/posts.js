//  Post information
//  This is for individual posts
//  This page will need post data to fill

const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');
const router = express.Router();

//  need to send to views
router.get('/', (req,res) => {
  models.Post.findAll().then((posts) => {
    res.render('posts', {posts});
  });
});

router.get('/:title', (req,res) => {
  models.Post.findOne({
    where: {
      title: req.params.title,
    },
  }).then((post) => {
    post.getUser().then( (user) => {
      res.render('posts/post', { post: post, user: user });
      console.log(JSON.stringify(user));
    }).catch(() => {
      res.render('error');
    });
  }).catch(() => {
    res.render('error');
  });
});
/*
router.post('/:title/comment', (req,res) => {
  models.Comment.create({

  }).then((comment) => {
    res.render('posts/post', {post: post, user: user });
  });
};
*/
module.exports = router;
