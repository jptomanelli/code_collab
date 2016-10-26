var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models').User;

// Use local strategy to create user account
/*
passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ where: { email }}).success(function(user) {
      if (!user) {
        done(null, false, { message: 'Unknown user' });
      } else if (password != user.password) {
        done(null, false, { message: 'Invalid password'});
      } else {
        done(null, user);
      }
    }).error(function(err){
      done(err);
    });
  }
));
*/

passport.use(new LocalStrategy({
  usernameField: 'email',
},
  (email, password, done) => {
    User.findOne({
      where: { email },
    }).then((user) => {
      if (user) {
        if (passwordsMatch(password, user.password) === false) {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else if (user == null) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

//  Serialize sessions
passport.serializeUser(function(user,done) {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  User.findById(email).then((user) => {
    if (user == null) {
      return done(null, false);
    }
    return done(null, user);
  });
});


module.exports = passport;
