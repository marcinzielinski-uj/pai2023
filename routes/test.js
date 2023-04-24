var express = require('express');
var router = express.Router();

const testdb = require('../models/user');
const daoWorld = require('../dataobjects/daoUser');


/* GET users listing. */
// localhost:3000/test/
router.get('/', function(req, res, next) {

    testdb.testdb();

    res.send('test');
});

router.get('/db', daoWorld.userFindAll);


module.exports = router;
