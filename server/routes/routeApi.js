var express = require('express');
var router = express.Router();

var auth = require('../middlewares/auth');

var authCtrl = require('../controllers/AuthController');
var postCtrl = require('../controllers/PostController');

/* Authenticate */
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

/* Post api */
router.route('/posts')
    .get(postCtrl.getAllPosts)
    .post(auth, postCtrl.createPost);

module.exports = router;
