var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');

var crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.log('crypto support is disabled!');
}

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    role: {
        type: Number,
        default: 0
    },
    salt: String,
    hash: String,
}, {timestamps: true});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(256).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 100000, 512, 'sha512').toString("hex");
};
userSchema.methods.validatePassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 100000, 512, 'sha512').toString("hex");
    return hash === this.hash;
};
userSchema.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        exp: parseInt(expiry.getTime() / 1000)
    }, process.env.JWT_SECRET);
};

module.exports = mongoose.model("User", userSchema);
