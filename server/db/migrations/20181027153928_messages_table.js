exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments();
    table.timestamps(true, true);
    table.integer('sender').references('users.id');
    table.integer('receiver').references('users.id');
    table.text('content').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
