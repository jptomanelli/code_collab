//  Post information
//  This is for individual posts
//  This page will need post data to fill

const express = require('express');
const router = express.Router();

//  need to send to views
router.get('/', (req,res) => {
  res.render('post');
});


module.exports = router;
