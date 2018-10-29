// console.log("hi");

// let username = $('#userInp');
// let password = $('#userInp');
// let logIn = $('#submit');
// let register = $('#register');

// logIn.on('click', () => {
//   console.log(username.val().replace(/['"]+/g, ''));
//   console.log(username.val());
//   // $.post('/auth/login', { 
//   //   username: username.val(),
//   //   password: password.val()
//   // })
//   // .then((req, res) => {
//   //   console.log(res);
//   // });

//   $.ajax({
//     type: 'POST',
//     contentType: 'application/x-www-form-urlencoded',
//     url: '/auth/login',
//     data: {
//       username: username.val().replace(/['"]+/g, ''),
//       password: password.val().replace(/['"]+/g, '')
//     },
//     dataType: "json"
//   })
//   .done((req, res) => {
//     console.log(res);
//   })
// })

// register.on('click', () => {

// })