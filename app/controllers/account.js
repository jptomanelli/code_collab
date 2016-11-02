//  Account Controller
//  User will need to have an account to access this Page

const express = require('express');
const router = express.Router();

//  need to send to views
router.get('/', (req,res) => {
  res.render('account');
});


module.exports = router;
