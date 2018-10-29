require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const Redis = require('connect-redis')(session);
const passport = require('passport');
const exphbs = require('express-handlebars');
const server = express();
const routes = require('./server/db/routes/');
const PORT = process.env.PORT || 8000;

//set the template engine handlebars
server.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
server.set('view engine', '.hbs');

//middleware
server.use(express.static(path.join(__dirname, '/public'))); //load static files (css & js)
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended : true}));
server.use(passport.initialize());
server.use(passport.session());
server.use(
  session({
    store : new Redis(),
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true
  })
);

function checkAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.render('login');
  }
}

// server.get('/home', checkAuth, (req, res) => {
//   res.render('home');
// })

server.get('/', function (req, res) {
  res.render('login');
});

server.get('/register', function (req, res) {
  res.render('register');
});

server.use('/', routes);

server.listen(PORT, () => {
  console.log(`Connected to port ${PORT}\n`);
})

