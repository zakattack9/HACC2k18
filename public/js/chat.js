$(function (){
  //make connection
  var socket = io.connect('http://localhost:8000/');
  
  //declaring buttons/inputes
  var message = $('#message');
  var username = $('#username');
  var send_message = $('#send_message');
  var send_username = $('#send_username');
  var chatroom = $('#chatroom');

  //emit username
  send_username.on('click', () => {
    console.log(username.val());
    socket.emit('change_username', {username : username.val()});
  })

  //emit message
  send_message.on('click', () => {
    socket.emit('new_message', {message : message.val()});
  })

  //listen on new_message (adds messages on html)
  socket.on("new_message", (data) => {
    console.log(data);
    chatroom.append(`<p class="message">${data.username}: ${data.message}</p>`);
  })

  //Emit typing
	message.bind("keypress", () => {
		socket.emit('typing')
  })
  
  //Private Chats
  socket.on('message', function (data) {
    console.log(data);
   });
  
  socket.emit('subscribe', 'roomOne');
  socket.emit('subscribe', 'roomTwo');

  $('#send').click(function() {
  let room = $('#room').val();
  let message = $('#message').val();

  socket.emit('send', { room: room, message: message });
  });

	// //Listen on typing
	// socket.on('typing', (data) => {
	// 	feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
	// })
})



