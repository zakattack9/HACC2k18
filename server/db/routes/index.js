const express = require('express');
const router = express.Router();
const user = require('./user/user');
const auth = require('./auth/auth');
const feed = require('./feed/feed');

router.use('/user', user);
router.use('/auth', auth);
router.use('/feed', feed);

module.exports = router;