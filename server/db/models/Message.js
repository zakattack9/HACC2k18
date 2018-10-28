const bookshelf = require('./bookshelf');

class Message extends bookshelf.Model {
  get tableName () {
    return 'messages';
  }

  get hasTimestamps () {
    return true;
  }

  receiver () {
    return this.belongsTo('User', 'receiver');
  }

  sender () {
    return this.belongsTo('User', 'sender');
  }
}

module.exports = bookshelf.model('Message', Message);