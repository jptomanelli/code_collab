const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('./middlewares/auth');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const viewHelpers = require('./middlewares/viewHelpers')

const models = require('./models/');

const app = express();

app.use(methodOverride('_method'));


//  handlebars
app.engine('handlebars', exphbs({
    layoutsDir: './views/layouts',
    defaultLayout: 'main'
}));

//cook
app.use(cookieParser());
//  Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//  Session & passport
app.use(session(({
    secret: 'Secret',
    resave: false,
    saveUninitialized: true
})));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));


app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

app.use("/public", express.static(__dirname + '/public'));

app.use(viewHelpers.register());

//  require all controllers
const homepage = require('./controllers/homepage')
const posts = require('./controllers/posts');
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const create = require('./controllers/create');
const account = require('./controllers/account');
const error = require('./controllers/error');
const logout = require('./controllers/logout');

//  Using controllers
app.use('/homepage', homepage);
app.use('/posts', posts);
app.use('/signup', signup);
app.use('/login', login);
app.use('/create', create);
app.use('/account', account);
app.use('/error', error);
app.use('/logout', logout);
app.use('/',homepage)

app.get('*', (req, res) => {
    res.render('error');
});

module.exports = app;
app.listen(8000);
console.log("Server up on localhost:8000");
