const router = require('express').Router();
const User = require('../../models/User');

//get all user
router.get('/', (req, res) => {
  return User
  .fetchAll()
  .then(users => {
    //console.log(req.user.id);
    res.render('logout');
  })
  .catch(err => {
    console.log('error: ', err.message);
  })
})

module.exports = router;