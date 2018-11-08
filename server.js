require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const Redis = require('connect-redis')(session);
const passport = require('passport');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
// const functions = require('firebase-functions');
// const http = require('http').Server(server);
const PORT = process.env.PORT || 8080;
const server = express();
//const routes = require('./server/db/routes/');

//middleware
server.use(express.static(__dirname + '/public')); //load static files (css & js)
server.use(favicon(__dirname + '/public/images/haawi.jpg'));
// server.use(express.bodyParser());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));
server.use((req, res, next) => {
  next();
});
server.use(
  session({
    store : new Redis(),
    secret : process.env.SESSION_SECRET,
    resave : false
  })
);
server.use(passport.initialize());
server.use(passport.session());
// server.use(server.router);
  
function checkAuth (req, res, next) { //prevents routes from being accessed without signing in
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.render('login');
  }
}

// server.get('/home', checkAuth, (req, res) => {
//   res.render('home');
// })

// server.get('/', function (req, res) { //loads login page by default
//   res.render('login');
// });

server.get('/', function (req, res) { //loads login page by default
  res.render('home');
});

server.get('/register', function (req, res) { //loads register page
  res.render('register');
});

server.get('/inbox', function (req, res) { //loads login page by default
  res.render('inbox');
});

server.get('/search', function (req, res) { //loads register page
  res.render('search');
});

// exports.home = functions.https.onRequest(server);


//server.use('/', routes);

const websock = server.listen(PORT, () => {
  console.log(`Connected to port ${PORT}\n`);
})
const io = require('socket.io')(websock);

//listen on every connection
io.on('connection', (socket) => {
  console.log('New user connected');
  console.log('SocketID', socket.id);

  //default username
  socket.username = 'Anonymous';

  //listen on change_username
  socket.on('change_username', (data) => {
    socket.username = data.username;
  })

  //listen on new_message
  socket.on('new_message', (data) => {
    //broadcast new message
    io.sockets.emit('new_message', {message : data.message, username : socket.username});
  })

  //Private Chats
  socket.on('subscribe', function(room) { 
    console.log('joining room', room);
    socket.join(room); 
  })

  socket.on('unsubscribe', function(room) {  
    console.log('leaving room', room);
    socket.leave(room); 
  })

  socket.on('send', function(data) {
    console.log('sending message');
    io.sockets.in(data.room).emit('message', data);
  });

  // //listen on typing
  // socket.on('typing', (data) => {
  //   socket.broadcast.emit('typing', {username : socket.username})
  // })
})

//set the template engine handlebars
server.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
server.set('view engine', '.hbs');