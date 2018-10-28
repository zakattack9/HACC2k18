const express = require('express');
const router = express.Router();
const user = require('./user/user');
const auth = require('./auth/auth');

router.use('/user', user);
router.use('/auth', auth);

module.exports = router;