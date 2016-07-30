var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmbedUserSchema = new Schema({
    email: String,
    username: String
});

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: EmbedUserSchema
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);