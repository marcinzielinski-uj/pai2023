var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
// localhost:3000/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/all',userController.getUsers);

module.exports = router;
