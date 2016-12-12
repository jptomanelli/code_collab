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

router.get('/level/:skill', (req,res) => {
  models.Post.findAll({
    where: {
      skill : req.params.skill
    },
  }).then((posts) => {
    res.render('posts/level/skill', {posts});
  }).catch(() => {
    res.render('error');
  })
});

router.get('/lang/:language', (req,res) => {
  models.Post.findAll({
    where: {
      language : req.params.language
    },
  }).then((posts) => {
    res.render('posts/lang/language', {posts});
  }).catch(() => {
    res.render('error');
  })
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
router.get('/:title/:comment', (req,res) => {
  models.Comment.findOne({
    where: {
      text: req.body.comment,
    },
  }).then((comment) => {
    res.render('/:title/comment', {comment: comment});
    console.log(comment);
  });
});
router.post('/:title/comment', (req,res) => {
  models.Comment.create({
    //PostId: req.post.id,
    text: req.body.comment,
  }).then(function(comment) {
    comment.getPost().then((post) => {
      res.render('posts/post', {post:post});
    }).catch(() => {
      res.render('error');
    });
  }).catch((e) => {
    res.redirect('/');
    //  Print error
    console.log(e);
  })
});
*/
module.exports = router;
