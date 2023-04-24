var express = require('express');
var router = express.Router();

const worldController = require('../controllers/worldController');

/* GET home page. */
// localhost:3000/
router.get('/', worldController.getWorldIndex);
router.get('/country', worldController.getWorldCountry);
router.get('/city', worldController.getWorldCity);

module.exports = router;
