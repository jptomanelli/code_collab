//  Account Controller
//  User will need to have an account to access this Page

const express = require('express');
const models = require('../models');
const router = express.Router();

//  need to send to views
router.get('/', (req,res) => {
  res.render('account', { user: req.user, success: req.flash('success') });
});

router.post('/', (req,res) => {
  models.User.find({where:{id:user.id}})
  .then((User) => {
    User.updateAttributes({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      username : req.body.username,
      email : req.body.email,
      password : req.body.password,
    });
  }).catch((e) => {
    console.log(e);
  });

});


module.exports = router;
