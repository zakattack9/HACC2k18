const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("FEED USER:", req.session);
  res.render('home');
})

module.exports = router;