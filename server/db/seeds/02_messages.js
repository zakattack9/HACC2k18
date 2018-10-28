exports.seed = function(knex, Promise) {
  return knex('messages')
    .del()
    .then(function () {
      return knex('messages').insert([
        {
          sender: 1,
          receiver: 2,
          content: 'lorem ipsum'
        },
        {
          sender: 2,
          receiver: 1,
          content: 'lorem ipsum2'
        }
      ]);
    });
};
