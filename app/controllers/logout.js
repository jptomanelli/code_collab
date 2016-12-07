const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  req.session.destroy( () => {
    res.redirect('/homepage');
    console.log("it worked!");
  }).catch( (err) => {
    console.log(err);
  })
});
module.exports = router;
