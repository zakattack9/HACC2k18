
exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          username: 'zak',
          password: 'password',
          email: 'email@email.com',
          first_name: 'Zak',
          last_name: 'Sakata',
          school: 'Waipahu High School',
          title: 'Math Teacher',
          avatar_link: 'https://xyz.com',
          following: 0,
          followers: 100,
          bio: 'love to be cool',
          request_tokens: 10
        },
        {
          id: 2,
          username: 'isaiah',
          password: 'password',
          email: 'email@email.com',
          first_name: 'Zak',
          last_name: 'Sakata',
          school: 'Waipahu High School',
          title: 'Math Teacher',
          avatar_link: 'https://xyz.com',
          following: 0,
          followers: 10,
          bio: 'love to be cool',
          request_tokens: 10
        },
        {
          id: 3,
          username: 'jacob',
          password: 'password',
          email: 'email@email.com',
          first_name: 'Zak',
          last_name: 'Sakata',
          school: 'Waipahu High School',
          title: 'Math Teacher',
          avatar_link: 'https://xyz.com',
          following: 0,
          followers: 10,
          bio: 'love to be cool',
          request_tokens: 10
        }
      ]);
    });
};
