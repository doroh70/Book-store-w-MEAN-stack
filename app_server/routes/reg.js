var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET Registration/login page. */
router.get('/', ctrlMain.reg);

module.exports = router;