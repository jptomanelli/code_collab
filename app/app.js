var exphbs = require('express-handlebars');
var express = require('express');
var path = require('path');

var app = express();

//handlebars
app.engine('handlebars', exphbs({
   layoutsDir: './views/layouts',
   defaultLayout: 'main'
}));
app.set('view engine','handlebars');
app.set('views', `${__dirname}/views/`);

app.use("/public", express.static(__dirname + '/public'));

//  require all controllers
var homepage = require('./controllers/homepage')
var post = require('./controllers/post');
var signup = require('./controllers/signup');
var login = require('./controllers/login');
var browse = require('./controllers/browse');
var create = require('./controllers/create');
var account = require('./controllers/account');

//  Using controllers
app.use('/homepage', homepage);
app.use('/post', post);
app.use('/signup', signup);
app.use('/login', login);
app.use('/browse', browse);
app.use('/create', create);
app.use('/account',account);

app.get('/', function(req,res) {
  res.render('homepage');
});

app.use(function(req, res, next) {
  var err = new Error('Page not Found: 404');
  err.status = 404;
  next(err);
});

module.exports = app;
app.listen(8000);
