var User = require('../models/user');

module.exports = {
    getAuthor: function (req, res, callback) {
        if (req.payload && req.payload.email) {
            User
                .findOne({email: req.payload.email})
                .exec(function (err, user) {
                    if (!user) {
                        res.status(404).json({message: "user not found"});
                    } else if (err) {
                        res.status(500).json(err);
                    } else {
                        callback(req, res, user);
                    }
                })
        } else {
            res.status(404).json({message: "user not found"});
        }
    }
};
