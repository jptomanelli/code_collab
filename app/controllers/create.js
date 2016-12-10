//  Create controller
//  User would be able to create a post here

const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('create');
});

router.post('/', (req,res) => {
  models.Post.create({
    UserId: req.user.id,
    title: req.body.title,
    link: req.body.link,
    language:req.body.lang,
    skill:req.body.skill,
    description:req.body.desc,
  }).then(function(post) {
    res.redirect(`/posts/${post.title}`);
  }).catch((e) => {
    res.redirect('/');
    //  Print error
    console.log(e);
  })
});

module.exports = router;
