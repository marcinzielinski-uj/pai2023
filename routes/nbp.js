var express = require('express');
var router = express.Router();

const nbpController = require('../controllers/nbpController');

/* GET users listing. */
// localhost:3000/nbp/
router.get('/', nbpController.getIndex);
router.get('/ratesA',nbpController.getRatesA);
router.get('/rateX',nbpController.getRateX);

module.exports = router;
