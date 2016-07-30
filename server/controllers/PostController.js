var Post = require('../models/post');
var authHelper = require('../utils/authHelper');

module.exports = {
    getAllPosts: function (req, res) {
        Post.find({}).exec(function (err, posts) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(posts);
            }
        })
    },
    createPost: function (req, res) {
        if (!req.body.title || !req.body.description || !req.body.content) {
            res.status(400).json({message: "some fields are missing"});
        } else {
            authHelper.getAuthor(req, res, function (req, res, user) {
                var post = new Post();
                post.title = req.body.title;
                post.description = req.body.description;
                post.content = req.body.content;
                post.author = {
                    email: user.email,
                    username: user.username
                };
                post.save(function (err) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(post);
                    }
                })
            });
        }
    }
};