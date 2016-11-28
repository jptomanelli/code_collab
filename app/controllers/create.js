//  Create controller
//  User would be able to create a post here

const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('create');
});

router.post('/', (req,res) => {
  models.Posts.create({
    title: req.body.title,
    link: req.body.link,
    language:req.body.lang,
    description:req.body.desc,
  }).then(function(Posts) {
    res.redirect(`/posts/${Posts.title}`);
  }).catch((e) => {
    res.redirect('/');
    //  Print error
    console.log(e);
  })
});

module.exports = router;
