//  Create controller
//  User would be able to create a post here

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('create');
});

module.exports = router;
