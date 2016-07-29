var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/AuthController');

/* GET home page. */
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

module.exports = router;
