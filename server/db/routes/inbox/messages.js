const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('messages');
})

module.exports = router;