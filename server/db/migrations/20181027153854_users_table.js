exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.timestamps(true, true);
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('first_name');
    table.string('last_name');
    table.string('school');
    table.string('title');
    table.text('avatar_link');
    table.integer('following');
    table.integer('followers');
    // table.integer('following').references('users.id');
    // table.integer('followers').references('users.id');
    table.text('bio');
    table.integer('request_tokens');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
