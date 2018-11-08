const express = require('express');
const router = express.Router();
const user = require('./user/user');
const auth = require('./auth/auth');
const feed = require('./feed/feed');
const messages = require('./inbox/messages');
const notifications = require('./inbox/notifications');

router.use('/user', user);
router.use('/', auth);
router.use('/feed', feed);
router.use('/inbox/messages', messages);
router.use('/inbox/notifications', notifications);

module.exports = router;