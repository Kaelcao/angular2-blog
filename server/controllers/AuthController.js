var User = require('../models/user');
var passport = require('passport');
module.exports = {
    register: function (req, res) {
        if (!req.body.username || !req.body.email || !req.body.password) {
            res.status(400).json({message: "All fields are required"});
            return;
        }
        var user = new User();
        user.username = req.body.username;
        user.email = req.body.email;
        user.setPassword(req.body.password);
        user.save(function (err) {
            if (err) {
                res.status(500).json(err);
            } else {
                var token = user.generateJwt();
                res.status(200).json({token: token})
            }
        })
    },
    login: function (req, res, next) {
        if (!req.body.email || !req.body.password) {
            res.status(400).json({message: "Email and Password are required"});
            return;
        }
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                res.status(500).json(err);
                return;
            }
            if (!user) {
                res.status(404).json(info);
                return;
            }
            var token = user.generateJwt();
            res.status(200).json({token: token});
        })(req, res, next);

    }
};
