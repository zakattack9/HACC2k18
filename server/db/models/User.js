const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName () {
    return 'users';
  }

  get hasTimestamps () {
    return true;
  }

  receiver () {
    return this.hasMany('Message', 'receiver');
  }

  sender () {
    return this.hasMany('Message', 'sender');
  }

  // followers () {
  //   return this.hasMany('User', 'followers');
  // }

  // following () {
  //   return this.hasMany('User', 'following');
  // }
}

module.exports = bookshelf.model('User', User);