var exphbs = require('express-handlebars');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var passport = require('./middlewares/auth');
var session = require('express-session');
var flash = require('connect-flash');
const methodOverride = require('method-override');

var models = require('./models/');

var app = express();

app.use(methodOverride('_method'));


//  handlebars
app.engine('handlebars', exphbs({
   layoutsDir: './views/layouts',
   defaultLayout: 'main'
}));

//cook
app.use(cookieParser());
//  Body Parser
app.use(bodyParser. urlencoded({ extended: true }));
app.use(bodyParser. json());
//  Session & passport
app.use(session(({ secret: 'Secret', resave: false, saveUninitialized: true })));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));


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
var error = require('./controllers/error');

//  Using controllers
app.use('/homepage', homepage);
app.use('/post', post);
app.use('/signup', signup);
app.use('/login', login);
app.use('/browse', browse);
app.use('/create', create);
app.use('/account',account);
app.use('/error',error);

app.get('/', function(req,res) {
  res.render('homepage');
});

app.get('*', function(req, res){
  res.render('error');
});

module.exports = app;
app.listen(8000);
console.log("Server up on localhost:8000");
