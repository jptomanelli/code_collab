var exphbs = require('express-handlebars');
var express = require('express');

var app = express();

//handlebars
app.engine('handlebars', exphbs({
   layoutsDir: './views/layouts',
   defaultLayout: 'main'
}));
app.set('view engine','handlebars');
app.set('views', `${__dirname}/views/`);

//  require all controllers
var post = require('./controllers/post');
var signup = require('./controllers/signup');
var signin = require('./controllers/signin');
var browse = require('./controllers/browse');
var create = require('./controllers/create');
var account = require('./controllers/account');

//  Using those controllers
app.use('/post', post);
app.use('/signup', signup);
app.use('/signin', signin);
app.use('/browse',search);
app.use('/create', create);
app.use('/account',account);

//  Will have to change
//  Homepage should have it's own controller
app.get('/', function(req,res) {
  res.send('Home Page');
});

app.use(function(req, res, next) {
  var err = new Error('Page not Found: 404');
  err.status = 404;
  next(err);
});

module.exports = app;
app.listen(8000);
